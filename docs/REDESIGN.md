# Perspective – vollständiger Frontend-Neuaufbau

## Gestaltungsentscheidung

Das alte Frontend wird durch eine eigenständige redaktionelle Gestaltung ersetzt. Die Startseite verzichtet auf einen klassischen Text-/Bild-Zweispalter im Hero. Große, mittig geführte Serifenüberschriften stehen vor einer zurückhaltenden, selbst gezeichneten Perspektivgrafik. Die folgende Seitenfolge wechselt zwischen dunklem Leitbild, offenen Leistungszeilen, Namensmotiv und hellen Inhaltsabschnitten. Fachseite und persönliche Seite besitzen jeweils eigene Einstiege.

Palette: Papier #f7f6f2, Aubergine #302735, Limette #dfed9c, Sekundärtext #6c656d, Trennlinien #d9d5d8. Serifentypografie: Georgia/Times New Roman; Lesetext: Segoe UI/Arial. Keine zusätzlichen Schrift- oder Animationsdienste. Das Unternehmenslogo bleibt als Originaldatei erhalten. Grafiken sind dekorativ und enthalten keine erfundenen Finanzdaten oder Personen.

## Inhalt und Funktion

Die fachlichen Kapiteltexte der Steuerberatung und die biografischen Texte wurden übernommen. Vorhanden bleiben Finanzbuchhaltung, Einnahmen-Ausgaben-Rechnung, UGB-Abschluss, Anhang/Offenlegung, Veranlagung, Vermietung/Ausland, Körperschaft-/Umsatzsteuer, EU-Fälle, FinanzOnline, Vertretung, Gründung/Rechtsform/Umgründung und Partner-Lohnverrechnung einschließlich grenzüberschreitender Beschäftigung. Erfahrung, Prüfung Oktober 2024, Geschäftsführer-/Gesellschafterfunktion und digitale Interessen bleiben enthalten.

Header: drei Hauptseiten und separate Terminschaltfläche. Footer: vollständiger Standort, Direktkontakte und Rechtsseiten. Die vier alten Adressen leiten weiterhin auf ihre bisherigen Abschnittsziele. Rechtsinhalte und Draft-Hinweise bleiben erhalten.

Die EmailJS-Transportlogik wird unverändert verwendet. Nur Name/E-Mail verpflichtend; alle acht Templatevariablen bleiben abgestimmt. Das Maildesign ist vollständig erneuert: tabellarisch, Inline-CSS, Serifentitel, Aubergine-Header, klar gegliederte Kontaktdaten und Nachricht mit erhaltenen Zeilenumbrüchen. Kein Script, externe Schrift oder Bild erforderlich; ausschließlich escaped double-brace-Variablen. Reply-To bleibt eine Dashboard-Einstellung. Live-Template und Zustellung wurden nicht geändert oder getestet.

## Prüfung und Grenzen

Automatisch geprüft: Komponenten, Links/Anker, vollständige Metadaten und Schema, Formularvertrag, Redirects/Indexierung, Domainwechsel, zehn simulierte Kontakt-/Mailtests, sieben Motion-/Menütests, JS-Syntax, Escaping und statisches Paket. Die bisherigen Titel, Beschreibungen, Canonicals, Social-Tags und JSON-LD wurden mit dem vorherigen Stand verglichen; ausschließlich theme-color ist neu.

CSS enthält Layoutwechsel bei 1100, 900 und 680 px sowie feste Fallbacks, sichtbare Inhalte ohne JavaScript, Fokuszustände, mobile Eingabeschrift und Reduced Motion. Ein echter Browser-Render ist derzeit nicht möglich: Die verfügbare Browsersteuerung beendet sich vor dem Start mit fehlendem Windows-Plattformverzeichnis (HRESULT 0x80070003). Frühere direkte Browserstarts waren von der automatischen Freigabe abgelehnt; diese Blockierung wurde nicht umgangen. Deshalb liegen keine belastbaren Vorher-/Nachher-Screenshots, tatsächlichen Overflow-Messungen oder E-Mail-Client-Renderings vor. Responsive Sichtkontrolle bleibt offen.

Die Einzeldatei-Vorschau enthält fünf navigierbare Seiten und Desktop-/Tablet-/Mobilansichten; ihr E-Mail-Versand ist ausdrücklich deaktiviert. Keine öffentliche Veröffentlichung oder Änderung an PAGES_ENABLED/Indexierungsmodus. Firmen- und Rechtsangaben bedürfen weiterhin der Unternehmensbestätigung.
