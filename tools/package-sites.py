"""Package the checked GitHub source for its separate private Sites origin."""
from pathlib import Path
from urllib.parse import urlsplit
import argparse,json,subprocess,sys,re
ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--base-url',required=True);args=parser.parse_args()
url=urlsplit(args.base_url)
if url.scheme!='https' or not url.netloc or url.query or url.fragment or url.username or url.password:
    raise SystemExit('Expected the private Site HTTPS origin.')
subprocess.run([sys.executable,str(ROOT/'tools/package.py')],check=True)
previous=json.loads((ROOT/'docs/site.json').read_text(encoding='utf-8'))['base_url']
base=args.base_url.rstrip('/')+'/'
for page in (ROOT/'dist').glob('*.html'):
    html=page.read_text(encoding='utf-8').replace(previous,base)
    if page.name=='404.html':html=re.sub(r'<base href="[^"]*">','<base href="/">',html)
    if page.name=='datenschutz.html':
        html=html.replace('<h2 id="kontaktformular">','<h2>Zusätzliche private Sites-Vorschau</h2><p>Diese Fassung wird zusätzlich als private Vorschau über Sites bereitgestellt. Dabei verarbeitet die Hostingplattform technische Verbindungsdaten und gegebenenfalls Anmeldedaten zur Zugangskontrolle. Die Angaben zum Hosting, zu Verantwortlichkeiten, Verträgen und Aufbewahrungsfristen sind vor einer öffentlichen Nutzung für diesen zusätzlichen Betrieb zu ergänzen. Die folgenden Angaben zu GitHub Pages betreffen den vorgesehenen Hauptauftritt.</p><h2 id="kontaktformular">')
    page.write_text(html,encoding='utf-8',newline='\n')
(ROOT/'dist/_headers').write_text('/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n/assets/*\n  Cache-Control: public, max-age=86400\n/assets/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n',encoding='utf-8')
print('PASS: private Sites artifact prepared; source canonicals retained for GitHub Pages.')
