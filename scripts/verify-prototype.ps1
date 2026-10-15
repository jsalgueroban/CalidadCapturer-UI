$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
    node --check prototype/app.js
    if ($LASTEXITCODE -ne 0) { throw 'JavaScript syntax check failed.' }

    $validation = @'
import glob, os, struct, xml.etree.ElementTree as ET
svg_files = glob.glob('assets/icono-pulso*.svg')
png_files = glob.glob('assets/icono-pulso*-1024.png')
assert len(svg_files) == 5, f'Expected 5 SVG variants, found {len(svg_files)}'
assert len(png_files) == 5, f'Expected 5 PNG exports, found {len(png_files)}'
for path in svg_files:
    ET.parse(path)
for path in png_files:
    with open(path, 'rb') as file:
        header = file.read(24)
    assert header[:8] == b'\x89PNG\r\n\x1a\n', f'Invalid PNG: {path}'
    width, height = struct.unpack('>II', header[16:24])
    assert (width, height) == (1024, 1024), f'Wrong size: {path}'
print(f'Verified {len(svg_files)} SVG and {len(png_files)} PNG assets at 1024x1024.')
'@
    $validation | python -
    if ($LASTEXITCODE -ne 0) { throw 'Asset validation failed.' }
    Write-Output 'Prototype gate passed.'
}
finally {
    Pop-Location
}
