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
assert len(svg_files) == 6, f'Expected 6 SVG variants, found {len(svg_files)}'
assert len(png_files) == 6, f'Expected 6 PNG exports, found {len(png_files)}'
for path in svg_files:
    ET.parse(path)
for path in png_files:
    with open(path, 'rb') as file:
        header = file.read(24)
    assert header[:8] == b'\x89PNG\r\n\x1a\n', f'Invalid PNG: {path}'
    width, height = struct.unpack('>II', header[16:24])
    assert (width, height) == (1024, 1024), f'Wrong size: {path}'
ET.parse('assets/icono-capturer-evolucion-v05.svg')
with open('assets/icono-capturer-evolucion-v05-1024.png', 'rb') as file:
    header = file.read(24)
assert header[:8] == b'\x89PNG\r\n\x1a\n', 'Invalid v0.5 icon PNG'
assert struct.unpack('>II', header[16:24]) == (1024, 1024), 'Wrong v0.5 icon size'
for path in ('assets/logo-capturer-ink-v06.svg', 'assets/logo-capturer-light-v06.svg', 'assets/icono-capturer-v06.svg'):
    ET.parse(path)
with open('assets/icono-capturer-v06-1024.png', 'rb') as file:
    header = file.read(24)
assert header[:8] == b'\x89PNG\r\n\x1a\n', 'Invalid v0.6 icon PNG'
assert struct.unpack('>II', header[16:24]) == (1024, 1024), 'Wrong v0.6 icon size'
with open('assets/fonts/Archivo-Latin-Variable.woff2', 'rb') as file:
    assert file.read(4) == b'wOF2', 'Invalid Archivo WOFF2 font'
with open('assets/fonts/OFL-Archivo.txt', encoding='utf-8') as file:
    assert 'SIL OPEN FONT LICENSE' in file.read().upper(), 'Archivo license missing'
print(f'Verified {len(svg_files)} SVG, {len(png_files)} PNG assets at 1024x1024, and the Archivo WOFF2 with license.')
'@
    $validation | python -
    if ($LASTEXITCODE -ne 0) { throw 'Asset validation failed.' }
    Write-Output 'Prototype gate passed.'
}
finally {
    Pop-Location
}
