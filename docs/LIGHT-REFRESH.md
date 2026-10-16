# Helle Überarbeitung · 17. Oktober 2026

Grundlage ist der aktuelle Hauptzweig nach dem Premium Redesign 2.0 (`81d6b8121d0f835f721541b54ce03eb0639cf1d0`). Neuere Inhalte, Prozessoptimierungsbereiche und lokale Fotos bleiben erhalten.

Hero und Unterseiten-Heros haben einen hellen Hintergrund mit zurückhaltendem Blauverlauf und dunkler Schrift. Die bisher dunklen Leistungs-, Profil-, Kontakt- und Footerflächen sind ebenfalls aufgehellt. Stahlblaue Schaltflächen bleiben klar erkennbar; Fotobeschriftungen behalten ihren Kontrast. Die größeren mobilen Kontaktflächen im Footer erfüllen die automatisierte Zielgrößenprüfung. `color-scheme: light` hält die Formulare auch bei dunkler Systemeinstellung hell. Eine neue CSS-Versionskennung verhindert die Wiederverwendung der alten Farbdatei im Browsercache.

Die Änderung betrifft die Darstellung und die Browser-Themenfarbe. Unternehmens-/Rechtstexte, SEO-Metadaten, Seitenadressen, Bilder, EmailJS-Konfiguration, Formularablauf und Animationen sind erhalten.

Lokal geprüft:

- 19 Node-Tests bestanden.
- Komponenten, interne Links/Anker, Metadaten/Schema, Formularvertrag, Release-URL-Wechsel und öffentliches Paket bestanden.
- Fünf Seiten bei 360, 390, 768, 1024, 1440 und 1920 Pixeln: 30 Kombinationen ohne horizontalen Überlauf.
- Browserprüfungen für Menü, Tastatur, Validierung, simulierte Versandzustände, Weiterleitungen, 404, reduzierte Bewegung und Nutzung ohne JavaScript bestanden.
- axe-core: keine gemeldeten Verstöße der geprüften WCAG-A/AA-Regeln auf fünf Seiten bei 390 und 1440 Pixeln. Gefundene zu kleine mobile Footer-Kontakte wurden korrigiert und erneut geprüft.
- Desktop-/Mobilansichten visuell kontrolliert; native Scroll-Prozesslinie geprüft.

Die Versandtests nutzen simulierte Antworten. Es wurde keine echte E-Mail verschickt. Die bestehenden Angaben zum rechtlichen Entwurfsstatus und zum Betrieb bleiben erhalten. Die Veröffentlichung nutzt die bereits vorhandene GitHub-Pages-Konfiguration; Indexierungs- und Kontoeinstellungen werden nicht geändert.
