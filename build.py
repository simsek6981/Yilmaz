"""Dependency-free, reproducible static build for F-Tax."""
from pathlib import Path
from html import escape
from urllib.parse import urlparse
import argparse
import json
import shutil

ROOT = Path(__file__).resolve().parent
SRC, DIST = ROOT / 'src', ROOT / 'dist'

def build(base_url='', public=False):
    if public and not base_url:
        raise ValueError('Public builds require --base-url with the final HTTPS origin/path.')
    if base_url and (urlparse(base_url).scheme != 'https' or not urlparse(base_url).netloc or urlparse(base_url).query or urlparse(base_url).fragment):
        raise ValueError('Use an absolute HTTPS base URL without query or fragment.')
    base_url = base_url.rstrip('/') + '/' if base_url else ''
    data = json.loads((SRC / 'content/site.json').read_text(encoding='utf-8'))
    template = (SRC / 'templates/layout.html').read_text(encoding='utf-8')
    DIST.mkdir(exist_ok=True)
    shutil.copytree(SRC / 'assets', DIST / 'assets', dirs_exist_ok=True)
    # Remove only obsolete outputs from V1; never recurse into another directory.
    for name in ('styles.css', 'script.js'):
        (DIST / name).unlink(missing_ok=True)
    for page in data['pages']:
        nav = []
        for group, file, label in [('home','index.html','Home'),('tax','steuerberatung.html','Steuerberatung'),('digital','prozessoptimierung.html','Prozessoptimierung'),('about','ueber-mich.html','Über mich')]:
            attrs = ' aria-current="page"' if page['file'] == file else (' class="active-parent"' if page['group'] == group else '')
            nav.append(f'<a href="{file}"{attrs}>{label}</a>')
        crumbs = ''
        if page['file'] != 'index.html':
            parent = '<li><a href="steuerberatung.html">Steuerberatung</a></li>' if page['group'] == 'tax' and page['file'] != 'steuerberatung.html' else ''
            crumbs = f'<nav class="breadcrumbs wrap" aria-label="Brotkrumennavigation"><ol><li><a href="index.html">Home</a></li>{parent}<li aria-current="page">{escape(page["label"])}</li></ol></nav>'
        url_meta = schema = ''
        if base_url:
            canonical = base_url + ('' if page['file']=='index.html' else page['file'])
            url_meta = f'<link rel="canonical" href="{escape(canonical, quote=True)}"><meta property="og:url" content="{escape(canonical, quote=True)}">'
            org = {'@context':'https://schema.org','@type':'Organization','name':data['company']['name'],'url':base_url,'taxID':data['company']['uid'],'address':{'@type':'PostalAddress','addressLocality':'Leonding','addressCountry':'AT'}}
            schema = '<script type="application/ld+json">'+json.dumps(org, ensure_ascii=False).replace('<','\\u003c')+'</script>'
        values = {'TITLE':escape(page['title']), 'DESCRIPTION':escape(page['description'],quote=True), 'ROBOTS':'index, follow' if public and page['type']!='legal' else 'noindex, nofollow', 'TYPE':page['type'], 'NAV':''.join(nav), 'BREADCRUMBS':crumbs, 'CONTENT':(SRC/'pages'/page['file']).read_text(encoding='utf-8'), 'URL_META':url_meta, 'SCHEMA':schema}
        html = template
        for key,value in values.items():
            html = html.replace('__'+key+'__', value)
        (DIST/page['file']).write_text(html,encoding='utf-8',newline='\n')
    sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    if public:
        for page in data['pages']:
            if page['type'] != 'legal':
                sitemap += '<url><loc>'+escape(base_url+('' if page['file']=='index.html' else page['file']))+'</loc></url>'
    sitemap += '</urlset>\n'
    (DIST/'sitemap.xml').write_text(sitemap,encoding='utf-8')
    robots = 'User-agent: *\nAllow: /\nSitemap: '+base_url+'sitemap.xml\n' if public else 'User-agent: *\nDisallow: /\n'
    (DIST/'robots.txt').write_text(robots,encoding='utf-8')
    not_found = template
    values.update({'TITLE':'Seite nicht gefunden | F-Tax','DESCRIPTION':'Die angeforderte Seite wurde nicht gefunden.','ROBOTS':'noindex, nofollow','TYPE':'legal','BREADCRUMBS':'','CONTENT':'<section class="wrap section legal-content"><p class="eyebrow">404</p><h1>Hier geht es nicht weiter.</h1><p>Diese Adresse gehört zu keiner verfügbaren Seite.</p><a class="button" href="index.html">Zur Startseite <span aria-hidden="true">→</span></a></section>','URL_META':'','SCHEMA':''})
    for key,value in values.items():
        not_found = not_found.replace('__'+key+'__',value)
    (DIST/'404.html').write_text(not_found,encoding='utf-8',newline='\n')
    print(f'Built {len(data["pages"])} pages + 404; mode={"public" if public else "private preview"}.')

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--base-url',default='')
    parser.add_argument('--public',action='store_true',help='Enable indexing only after explicit public release.')
    args = parser.parse_args()
    build(args.base_url,args.public)
