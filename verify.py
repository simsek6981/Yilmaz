"""Check generated pages, metadata, all local links and assets without dependencies."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent
DIST = ROOT / 'dist'

class Document(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.assets, self.meta = [], [], [], {}
        self.h1 = self.mains = self.title_depth = 0
        self.title = ''
        self.schema_depth = 0
        self.schemas = []
        self.schema = ''
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs: self.ids.append(attrs['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.mains += 1
        if tag == 'title': self.title_depth = 1
        if tag == 'a' and 'href' in attrs: self.links.append(attrs['href'])
        if tag == 'link' and attrs.get('rel') in ('stylesheet','icon'): self.assets.append(attrs['href'])
        if tag in ('script','img') and 'src' in attrs: self.assets.append(attrs['src'])
        if tag == 'img': assert 'alt' in attrs, 'Image without alt attribute'
        if tag == 'meta' and 'name' in attrs: self.meta[attrs['name']] = attrs.get('content','')
        if tag == 'script' and attrs.get('type') == 'application/ld+json': self.schema_depth = 1
    def handle_data(self, data):
        if self.title_depth: self.title += data
        if self.schema_depth: self.schema += data
    def handle_endtag(self, tag):
        if tag == 'title': self.title_depth = 0
        if tag == 'script' and self.schema_depth:
            self.schemas.append(json.loads(self.schema)); self.schema = ''; self.schema_depth = 0

def verify():
    docs, errors = {}, []
    pages = sorted(DIST.glob('*.html'))
    for path in pages:
        source = path.read_text(encoding='utf-8')
        doc = Document(); doc.feed(source); docs[path.name] = doc
        if doc.h1 != 1: errors.append(f'{path.name}: expected one H1')
        if doc.mains != 1: errors.append(f'{path.name}: expected one main')
        if len(doc.ids) != len(set(doc.ids)): errors.append(f'{path.name}: duplicate IDs')
        if not doc.title or not doc.meta.get('description'): errors.append(f'{path.name}: missing metadata')
        if '__CONTENT__' in source or '__TITLE__' in source: errors.append(f'{path.name}: unresolved template')
        if '\ufffd' in source: errors.append(f'{path.name}: broken Unicode')
        if doc.meta.get('viewport') != 'width=device-width, initial-scale=1': errors.append(f'{path.name}: missing viewport')
    for name, doc in docs.items():
        for link in doc.links + doc.assets:
            url = urlsplit(link)
            if url.scheme or url.netloc: continue
            target = (DIST / unquote(url.path)).resolve() if url.path else DIST / name
            if not target.is_relative_to(DIST.resolve()): errors.append(f'{name}: path escapes dist: {link}'); continue
            if not target.exists(): errors.append(f'{name}: missing target: {link}'); continue
            if url.fragment and target.suffix == '.html':
                target_doc = docs.get(target.name)
                if target_doc and unquote(url.fragment) not in target_doc.ids: errors.append(f'{name}: missing anchor: {link}')
    titles = [d.title for name,d in docs.items() if name!='404.html']
    descriptions = [d.meta.get('description') for name,d in docs.items() if name!='404.html']
    if len(titles) != len(set(titles)): errors.append('Duplicate page titles')
    if len(descriptions) != len(set(descriptions)): errors.append('Duplicate descriptions')
    ET.parse(DIST/'sitemap.xml')
    disabled = [page['file'] for page in json.loads((ROOT/'src/content/site.json').read_text(encoding='utf-8'))['pages'] if not page.get('enabled',True)]
    for filename in disabled:
        if (DIST/filename).exists(): errors.append(f'Disabled page still served: {filename}')
        for name, doc in docs.items():
            if any(urlsplit(link).path == filename for link in doc.links): errors.append(f'{name}: link to disabled page: {filename}')
    if any(filename in (DIST/'sitemap.xml').read_text(encoding='utf-8') for filename in disabled): errors.append('Disabled page in sitemap')
    if errors: raise SystemExit('\n'.join(errors))
    print(f'PASS: {len(pages)} pages; unique titles/descriptions; all local links, anchors and assets; H1, main and viewport; valid sitemap.')

if __name__ == '__main__': verify()
