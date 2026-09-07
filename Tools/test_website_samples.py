#!/usr/bin/env python3
"""Verify website samples match preserved release assets and require user playback."""
import hashlib
import json
from pathlib import Path
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parents[1]
class Samples(HTMLParser):
    def __init__(self):
        super().__init__()
        self.players = []
    def handle_starttag(self, tag, attrs):
        if tag == 'audio':
            self.players.append(dict(attrs))

page = Samples()
page.feed((ROOT / 'Website/index.html').read_text())
assert len(page.players) == 3
for player in page.players:
    assert 'autoplay' not in player
    assert 'controls' in player
    assert player.get('preload') == 'none'
    assert player.get('aria-label')
for sample in json.loads((ROOT / 'Website/assets/sample-manifest.json').read_text()):
    source = ROOT / sample['source']
    asset = ROOT / 'Website' / sample['asset']
    assert source.read_bytes() == asset.read_bytes()
    assert hashlib.sha256(asset.read_bytes()).hexdigest() == sample['sha256']
    assert sample['transcript_status'] == 'pending human review'
print('Website samples passed: 3 hash-bound, user-initiated players; transcript review remains open.')
