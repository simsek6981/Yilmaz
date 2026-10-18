> Historischer Prüfbericht der inzwischen ersetzten Forest-&-Paper-Fassung. Der aktuelle Stand und neue Messwerte stehen in [MODERN-REDESIGN.md](MODERN-REDESIGN.md). Die Wettbewerbsrecherche bleibt als Grundlage erhalten.

# F-Tax · Umsetzung und Qualitätsprüfung

Stand: 18. Oktober 2026. Grundlage ist das vom Nutzer benannte Repository [simsek6981/Yilmaz](https://github.com/simsek6981/Yilmaz), Ausgangscommit `6f7fce8cc600d8d0eb8c0661f9a9eee126d28b0e`. Die Arbeit wird in einem eigenen Branch mit Pull Request bereitgestellt. Eine zusätzliche private Sites-Fassung dient der Ansicht.

## Tatsächlich verwendete Skills

- **Sites:** statische Architektur, private Vorschau, Quellenverwaltung und Paketierung.
- **Web Design Engineer:** Bestandsaudit, eigenständige Art Direction, Designkalibrierung, Browserabnahme und Korrekturschleife.
- **SEO Title Optimization:** Suchintention, lokale Seitentitel, Abstimmung von Titel, Beschreibung und Inhalt.

ImageGen, React-, Backend-, Vercel- und zusätzliche Agentenworkflows wurden nicht eingesetzt: Die vorhandenen SVGs und die statische Architektur erfüllen diese Aufgabe ohne neue Laufzeitabhängigkeiten.

## Unternehmen und Zielgruppe

Original-Logo, Anschrift, E-Mail, Telefon, UID, Biografie, Leistungen und EmailJS-Konfiguration stammen aus dem Repository. Firmenname, Sitz, Adresse und Geschäftsführer wurden zusätzlich mit dem [staatlichen Firmenbucheintrag](https://www.evi.gv.at/f/655274p) abgeglichen. Zielgruppen sind Unternehmen, freie Berufe und Privatpersonen in Leonding/Linz sowie österreichweit online. Die zehnjährige Betreuungserfahrung ist eine Angabe aus dem Repository; sie wurde nicht aus dem Gründungsdatum der GmbH abgeleitet. Lohnverrechnung wird ausdrücklich als Partnerleistung beschrieben.

## Wettbewerbsanalyse

Fünf aktuelle Wettbewerber wurden inhaltlich und visuell bei 1440 und 390 Pixeln betrachtet. Es handelt sich um Momentaufnahmen der Einstiegsseiten, keine vollständigen Audits oder Bewertungen ihrer fachlichen Arbeit. Die öffentlich erkennbaren Navigationen, lokalen Seitentitel, Vertrauenselemente und Kontaktwege wurden geprüft. Es wurden keine Leistungswerte der Wettbewerber behauptet.

| Wettbewerber | Beobachtung | Konsequenz für F-Tax |
| --- | --- | --- |
| [Drabauer Consult](https://www.drabauer.at/) | Reale Ansprechpartnerinnen und eine erkennbare Spezialisierung auf Heilberufe vermitteln Nähe. Der bildbetonte Einstieg und der im Erstbesuch sichtbare Hinweis beanspruchen mobil viel Platz. Der lokale Titel benennt Leonding. | Den Ansprechpartner früh benennen und das Angebot direkt erklären. Kein fremdes oder erfundenes Porträt einsetzen. |
| [Aschauer & Rachbauer](https://www.wt-aschauer.at/) | Markanter roter Chili-Auftritt; umfangreiche Kompetenzfelder und digitale Angebote. Beim Test überlagerten Recruiting-Popup und Datenschutzhinweis Teile des Einstiegs. | Eine eigene Markenform verwenden, Navigation auf drei Hauptpunkte konzentrieren und den Anfrageweg unmittelbar zugänglich machen. |
| [Optitax](https://optitax.at/) | Teamfoto, Leistungsnavigation und Kontaktformular schaffen Orientierung. Auf dem Smartphone folgen umfangreiche Flächen und ein sichtbarer Cookiehinweis; der Hero-CTA lautet allgemein „Mehr Info“. | Kurze, lesbare Leistungszeilen, konkrete Anfrage-CTAs und ein Formular mit zwei Pflichtfeldern. |
| [.mc beratungsgruppe](https://www.mcberatungsgruppe.com/) | Digitalisierung und Erstgespräch werden klar kommuniziert; eigene Belege und Teamfotos stützen den Auftritt. Im mobilen Erstbesuch verdeckte der ausführliche Consent-Dialog einen großen Teil des Inhalts. | Digitale Zusammenarbeit konkret beschreiben und nur belegte F-Tax-Fakten verwenden. Kein zusätzliches Tracking einbauen, das für diese Website keinen Zweck erfüllt. |
| [TB Traunbauer](https://www.tb-stb.at/) | Wiedererkennbare Superhelden-Bildsprache, umfangreiches Serviceangebot und eine Option für leichte Sprache. Der große Bildbereich beansprucht mobil den Einstieg; lokale Positionierung folgt darunter. | Die F-Tax-Markenform mit verständlichem Leistungsbezug verbinden; Hauptaktion im ersten Bildschirm erreichbar halten. |

Die zusätzlich untersuchte GA-Unterseite `aschauer.tax/ueber-uns.html` war im aktuellen Browseraufruf nicht mehr erreichbar (404); ältere Suchinhalte wurden deshalb nicht als aktueller visueller Befund gewertet.

## Design und entwickelte Funktionen

Die neue Gestaltung kombiniert Tannengrün, warmes Elfenbein und Salbei mit lokal gehosteter Manrope. Das unveränderte Original-Logo bleibt erhalten. Die vorhandene Codegrafik wurde als zusätzliche Salbei-Variante angelegt; das Original bleibt verfügbar. Die Gestaltung verwendet große Typografie, klare Linien, wechselnde Abschnittskompositionen und dezente einmalige Animationen mit Reduced-Motion-Alternative.

Fertig sind Startseite, ausführliche Leistungsübersicht, Über-mich-Seite, eigenständige Buchhaltungs-, Bilanzierungs- und Lohnverrechnungsseiten, FAQ, Terminanfrage, 404 und die bestehenden Rechtsentwürfe. `kontakt.html` führt weiterhin kompatibel zur Anfrage. Alle ursprünglichen Fachanker bleiben erreichbar. Telefonnummer und E-Mail sind direkt nutzbar.

Die EmailJS-Integration bleibt erhalten: Validierung, optionale Zusatzangaben, Spamfeld, Versandzustand, Schutz gegen Doppelübermittlung, Fehlermeldungen, Eingabenerhalt bei Fehlern und eine Bestätigung, die keine Terminbestätigung vortäuscht. Ohne JavaScript bleiben Inhalte und direkte Kontaktwege erreichbar.

## SEO und Performance

Seitentitel, Beschreibungen und soziale Metadaten sind eindeutig und werden aus `docs/site.json` synchronisiert. JSON-LD enthält Organisation, Website, Seite, Leistungen und Breadcrumbs mit vollständiger Ortsadresse. Relative interne Links funktionieren auch unter dem GitHub-Unterpfad. Canonicals werden für die zusätzliche Sites-Fassung beim Paketieren an deren eigene URL angepasst.

Die bestehende Einstellung `preview` bleibt erhalten: Die Vorschau ist `noindex`. Der getestete Release-Schalter erzeugt bei späterer öffentlicher Freigabe eine vollständige Sitemap und passende robots.txt sowie indexierbare Inhaltsseiten. Das Einschalten der Suchmaschinenindexierung ist damit technisch vorbereitet; es wurde nicht stillschweigend für die bestehenden Rechtsentwürfe aktiviert.

Lighthouse **13.5.0**, mobile Simulation, lokale HTTP-Vorschau in Microsoft Edge:

| Fassung | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Indexierbare Release-Fassung, ausschließlich lokal getestet | 99 | 100 | 100 | 100 |
| Private Vorschau mit beabsichtigtem noindex, erster Messlauf | 99 | 100 | 100 | 69 |

Release-Messung: FCP 1,4 s, LCP 1,8 s, Total Blocking Time 0 ms, CLS 0. Das sind Labordaten einer einzelnen lokalen Messung, keine 75.-Perzentil-Felddaten und kein gemessener INP. Der niedrigere SEO-Wert der privaten Vorschau folgt dem beabsichtigten Indexierungsausschluss. Der erste Messlauf enthielt außerdem einen inzwischen korrigierten Hinweis auf die zugängliche Logo-Beschriftung.

Keine neue JavaScript-Laufzeitbibliothek, keine externen Schriftarten und keine extern geladenen Fotos. Die Schriftdatei ist rund 25 KB groß. Der initiale zusätzliche Layout-Flush bei der Headerinitialisierung wurde beseitigt. Auslieferungsabhängige Punkte wie Komprimierung und Cache-Header lassen sich durch den lokalen Python-Server nicht realistisch bewerten. Die Sites-Paketierung liefert Cache- und ausgewählte Security-Header als `_headers` mit; deren tatsächliche Umsetzung ist Sache der Hostingplattform.

## Sicherheit und Datenschutz

Geprüft wurden die Behandlung von Formulareingaben, Fehlerzustände, Netzwerkvertrag, HTML-Escaping im Mailtemplate, fehlende Konfiguration, Honeypot und Wiederholschutz. Statusausgaben verwenden `textContent`. Kein frei wählbares Empfängerpostfach und kein privater Schlüssel werden an den Browser ausgeliefert. Die sichtbaren EmailJS-Kennungen sind die bereits vorhandenen öffentlichen Kennungen.

Neu sind eine restriktive CSP per HTML-Meta-Tag und eine Referrer-Policy. Skripte, Styles, Fonts und Bilder stammen vom eigenen Ursprung; der zusätzliche Netzwerkzugriff ist auf die vorhandene EmailJS-Schnittstelle beschränkt. Keine eigene Datenbank, Session oder zustandsverändernde Serverroute wurde eingeführt. Der Frontend-Code speichert keine Nachrichten dauerhaft im Browser und enthält keine Analyse- oder Werbetracker. `npm audit` meldete für die vorhandenen Entwicklungsabhängigkeiten **0 bekannte Schwachstellen**.

Clientvalidierung und ein Honeypot ersetzen keinen serverseitigen Missbrauchsschutz. EmailJS-seitige Domainfreigaben, Kontolimits, Spam-/CAPTCHA-Konfiguration, Template und Empfänger wurden nicht im Konto verändert oder unabhängig bestätigt. Das bleibt eine konkrete Betriebsprüfung. Rechtstexte wurden nicht als juristisch freigegeben ausgegeben; die ursprünglichen Entwurfskennzeichnungen bleiben erhalten.

## Tatsächlich erfolgreiche Tests

- 19 Node-Tests für Formularvertrag, Fehler, Timeout, Wiederholschutz, Motion und Navigation.
- 64 Seite-/Viewport-Kombinationen: acht Inhaltsseiten bei 320, 360, 390, 768, 1024, 1280, 1440 und 1920 Pixeln ohne horizontalen Überlauf.
- 11 Browserprüfungen einschließlich Tastatur, mobilem Menü, FAQ, echten Fachseiten, Kontaktweiterleitung, verschachtelter 404, No-JavaScript, Reduced Motion und simuliertem Formularversand.
- 16 axe-core-Prüfungen nach den geprüften WCAG-A/AA-Regeln bei 390 und 1440 Pixeln ohne gemeldeten Verstoß; kein Ersatz für ein vollständiges manuelles Audit.
- Komponentenabgleich, lokale Links und Anker, zehn HTML-Routen, Metadaten, JSON-LD, Formularlabels, Paketierung und Release-Tests für GitHub- und eigene Domain.
- Lighthouse-Release-Messung und visuelle Prüfung von Desktop, Smartphone, Fachseiten und Formular.

Browserberichte und Screenshots stehen lokal in `qa/`; sie werden nicht als Websiteinhalte ausgeliefert oder ins GitHub-Repository hochgeladen. Das ursprüngliche EmailJS-Script wurde nicht durch eine simulierte Versandimplementierung ersetzt: ausschließlich die Tests fangen seine Netzwerkaufrufe ab.

## Korrekturschleife und verbleibende Punkte

Die drei größten Befunde der ersten Fassung waren zu schwacher Kontrast an einzelnen Stellen, eine zu große Hero-Höhe und fehlende eigenständige Fachseiten hinter bisherigen Weiterleitungen. Kontraste und zugängliche Linknamen wurden korrigiert, die Hero-Geometrie verkleinert und die drei Fachseiten vollständig ausgebaut. Nachprüfungen bestätigen die Korrekturen.

Die interne gestalterische Einschätzung liegt bei etwa **8 von 10**, nicht bei einer unabhängigen Bestnote: Die visuelle Hierarchie und Konsistenz sind ausgearbeitet, aber ein freigegebenes echtes Porträt könnte die persönliche Vertrauenswirkung weiter verbessern. Es wurde kein Ersatzporträt erfunden.

Vor einem öffentlichen Geschäftsbetrieb bleiben die bereits vorhandene rechtliche Bestätigung und ein tatsächlicher EmailJS-Zustelltest vom Zielhost offen. Es wurde keine echte Nachricht verschickt. Eine zusätzliche private Sites-Origin muss gegebenenfalls im bestehenden EmailJS-Konto freigegeben werden. GitHub-Upload und Pull Request sind von einer Zusammenführung nach `main` zu unterscheiden.
