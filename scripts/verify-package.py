"""Dependency-free integrity gate for the current design handoff."""

from html.parser import HTMLParser
from pathlib import Path
import json
import re
import struct
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / 'handoff/manifest.json').read_text(encoding='utf-8'))
assert manifest['version'] == '0.9.0'
assert manifest['target'] == 'react-native-expo'

paths = [manifest['tokens'], manifest['prototype'], manifest['visualBoard']]
paths += list(manifest['assets'].values()) + manifest['specifications']
for relative in paths:
    assert (ROOT / relative).is_file(), f'Missing manifest file: {relative}'

png = ROOT / manifest['assets']['appIcon']
header = png.read_bytes()[:24]
assert header[:8] == b'\x89PNG\r\n\x1a\n', 'Invalid app icon PNG'
assert struct.unpack('>II', header[16:24]) == (1024, 1024), 'App icon must be 1024x1024'
for key in ('appIconVectorSource', 'brandInk', 'brandLight'):
    ET.parse(ROOT / manifest['assets'][key])
assert (ROOT / manifest['assets']['fontWeb']).read_bytes()[:4] == b'wOF2'
assert (ROOT / manifest['assets']['fontNative']).read_bytes()[:4] in (b'\x00\x01\x00\x00', b'OTTO')
assert 'SIL OPEN FONT LICENSE' in (ROOT / manifest['assets']['fontLicense']).read_text(encoding='utf-8').upper()


class LocalReferences(HTMLParser):
    def __init__(self):
        super().__init__()
        self.paths = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ('src', 'href'):
            value = attrs.get(key, '')
            if value and not value.startswith(('http:', 'https:', '#', 'data:', 'mailto:')):
                self.paths.append(value.split('?')[0].split('#')[0])


for relative in ('prototype/index.html', 'concept/index.html', 'concept/v08.html'):
    source = ROOT / relative
    parser = LocalReferences()
    parser.feed(source.read_text(encoding='utf-8-sig'))
    for link in parser.paths:
        assert (source.parent / link).is_file(), f'Broken HTML link: {relative} -> {link}'

for relative in ('prototype/app.css', 'concept/board.css'):
    source = ROOT / relative
    for link in re.findall(r'url\(["\']?([^"\')]+)', source.read_text(encoding='utf-8-sig')):
        if link.startswith(('data:', 'http:', 'https:')):
            continue
        assert (source.parent / link.split('?')[0]).is_file(), f'Broken CSS asset: {relative} -> {link}'

for source in ROOT.rglob('*.md'):
    if '.git' in source.parts:
        continue
    content = source.read_text(encoding='utf-8-sig')
    for link in re.findall(r'(?<!!)\[[^]]+\]\(([^)]+)\)', content):
        if link.startswith(('http:', 'https:', '#', 'mailto:')):
            continue
        assert (source.parent / link.split('#')[0]).exists(), f'Broken Markdown link: {source.relative_to(ROOT)} -> {link}'

for forbidden in ('AGENTS.md', '.claude', '.codex', 'node_modules'):
    assert not (ROOT / forbidden).exists(), f'Unexpected repository content: {forbidden}'

print(f"Package verified: {len(paths)} manifest paths, current HTML/CSS/Markdown links, assets and fonts.")
