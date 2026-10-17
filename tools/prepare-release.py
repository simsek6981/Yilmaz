"""Optional metadata switch before publication; not a build or deployment step."""
from pathlib import Path
from urllib.parse import urlsplit
from html import escape
import argparse
import json
import re

ROOT=Path(__file__).resolve().parents[1]

def configure(base_url,public=False,root=ROOT):
    parsed=urlsplit(base_url)
    if parsed.scheme!='https' or not parsed.netloc or parsed.query or parsed.fragment or parsed.username or parsed.password:
        raise ValueError('Use the final HTTPS website URL without credentials, query or fragment.')
    if not re.fullmatch(r'https://[A-Za-z0-9.:-]+(?:/[A-Za-z0-9._~%/-]*)?',base_url):
        raise ValueError('Base URL contains unsupported characters.')
    base=base_url.rstrip('/')+'/'
    settings=json.loads((root/'docs/site.json').read_text(encoding='utf-8'))
    previous=settings['base_url']
    for page in settings['pages']:
        path=root/page['file']
        text=path.read_text(encoding='utf-8').replace(previous,base)
        if page['type']!='redirect':
            title=page['title']; description=page['description']
            text=re.sub(r'<title>.*?</title>',lambda _: '<title>'+escape(title)+'</title>',text,flags=re.S)
            for attr,key,value in [('name','description',description),('property','og:title',title),('property','og:description',description),('name','twitter:title',title),('name','twitter:description',description)]:
                text=re.sub(r'<meta '+attr+'="'+re.escape(key)+r'" content="[^"]*">',lambda _,a=attr,k=key,v=value:'<meta '+a+'="'+k+'" content="'+escape(v,quote=True)+'">',text)
            url=base+('' if page['file']=='index.html' else page['file'])
            graph=[{'@type':'Organization','@id':base+'#organization','name':'F-Tax Steuerberatung GmbH','url':base,'taxID':'ATU82256979','address':{'@type':'PostalAddress','streetAddress':'Bruno-Gallee-Weg 24/12','postalCode':'4060','addressLocality':'Leonding','addressCountry':'AT'}}, {'@type':'WebSite','@id':base+'#website','name':'F-Tax Steuerberatung GmbH','url':base,'inLanguage':'de-AT','publisher':{'@id':base+'#organization'}}, {'@type':'WebPage','@id':url+'#webpage','name':title,'description':description,'url':url,'inLanguage':'de-AT','isPartOf':{'@id':base+'#website'}}]
            if page['type'] in ('tax','service'):
                graph.append({'@type':'Service','name':page['label'],'url':url,'provider':{'@id':base+'#organization'},'areaServed':{'@type':'Country','name':'Österreich'}})
            if page['file']!='index.html':
                graph.append({'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Startseite','item':base},{'@type':'ListItem','position':2,'name':page['label'],'item':url}]})
            schema='<script type="application/ld+json">'+json.dumps({'@context':'https://schema.org','@graph':graph},ensure_ascii=False).replace('</','<\\/')+'</script>'
            text=re.sub(r'<script type="application/ld\+json">.*?</script>',lambda _:schema,text,flags=re.S)
        robots='index, follow' if public and page['type'] not in ('legal','redirect') else 'noindex, nofollow'
        if page['type']=='redirect': robots='noindex, follow'
        text=re.sub(r'<meta name="robots" content="[^"]*">',f'<meta name="robots" content="{robots}">',text)
        if page['file']=='404.html': text=re.sub(r'<base href="[^"]*">',f'<base href="{urlsplit(base).path}">',text)
        path.write_text(text,encoding='utf-8',newline='\n')
    urls=[base+('' if p['file']=='index.html' else p['file']) for p in settings['pages'] if p['type'] not in ('legal','redirect')] if public else []
    xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join('  <url><loc>'+escape(u)+'</loc></url>\n' for u in urls)+'</urlset>\n'
    (root/'sitemap.xml').write_text(xml,encoding='utf-8')
    robots='User-agent: *\nAllow: /\n'+('Sitemap: '+base+'sitemap.xml\n' if public else '# Preview: all pages carry a noindex meta tag. This is not access control.\n')
    (root/'robots.txt').write_text(robots,encoding='utf-8')
    settings.update(base_url=base,indexing='public' if public else 'preview')
    (root/'docs/site.json').write_text(json.dumps(settings,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print('Updated metadata:',settings['indexing'],base)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base-url',required=True)
    parser.add_argument('--public',action='store_true',help='Enable indexing for the seven non-legal pages.')
    args=parser.parse_args(); configure(args.base_url,args.public)

