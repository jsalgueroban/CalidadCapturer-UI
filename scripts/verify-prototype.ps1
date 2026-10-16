$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
    node --check prototype/app.js
    if ($LASTEXITCODE -ne 0) { throw 'JavaScript syntax check failed.' }
    python scripts/verify-package.py
    if ($LASTEXITCODE -ne 0) { throw 'Package validation failed.' }
    Write-Output 'Prototype and handoff gates passed.'
}
finally {
    Pop-Location
}
