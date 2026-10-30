# BasePilot – GitHub-Pages-Website (Vorlage)

Eine eigenständige, deutschsprachige, responsive Landingpage für eine Windows-Desktop-App mit geplantem, zeitbasiertem Lizenzmodell. Stilrichtung: dunkles Gaming-/Software-Design, inspiriert von der vom Auftraggeber genannten Beispiel-Website, aber **mit eigenem Layout, eigenem SVG-Logo, eigenem Text und ohne kopierte Medien**.

## Was ist enthalten?

- `index.html` – Startseite mit Hero, CSS-Dashboard-Mockup, Feature-Übersicht, klickbaren Demo-Tabs, drei Preis-Karten, FAQ und CTA.
- `styles.css` – vollständiges responsives Design, ohne CSS-Framework oder externe Schriftanbieter.
- `config.js` – Markenname, Preise, Checkout-Links, Support-E-Mail, Download-Link.
- `script.js` – Mobilmenü, Tabs, sichere Darstellung der Preis-/Kontakt-Konfiguration.
- `impressum.html`, `datenschutz.html`, `agb.html`, `widerruf.html`, `kontakt.html` – **ausdrücklich ungeprüfte Vorlagen, nicht rechtssicher ohne Bearbeitung**.
- `assets/` – eigene SVG-Grafiken.
- `.github/workflows/deploy-pages.yml` – automatische Veröffentlichung auf GitHub Pages.
- `404.html` – Fehlerseite.

**WICHTIG:** Die Website ist technisch direkt hostbar, aber **noch nicht geschäftlich veröffentlichungsfertig**. Betreiberangaben, echte Features und Preise, Kontaktmöglichkeit und notwendige Rechtstexte müssen vor Veröffentlichung geprüft/ergänzt werden. Einige Aussagen beschreiben geplante Lizenzfunktionen. Die gezeigte Oberfläche ist ein Mockup, **kein Screenshot der vorhandenen EXE**.

## 1. Lokale Vorschau

Lokal reicht es, `index.html` zu öffnen. Für eine realistischere Vorschau (relative Links):

```bash
python -m http.server 8000
```

Danach im Browser `http://localhost:8000` aufrufen.

## 2. Anpassen (ohne Programmierung)

Öffne `config.js` und bearbeite:

```js
brand: "BasePilot",           // Arbeitsname durch deinen Produktnamen ersetzen
supportEmail: "",             // echte E-Mail
businessName: "",             // echter Impressumsname
siteUrl: "",                  // deine finale URL
pricesAreExamples: true,      // auf false nach verbindlicher Preisfestlegung
plans: [
  { id:"week", title:"Starter", period:"7 Tage", price:"4,99 €", description:"Zum Ausprobieren", checkoutUrl:"", featured:false },
  // ...
]
```

- Die Preise sind **nur Beispiele**, bis `pricesAreExamples` auf `false` gesetzt wird.
- Solange `checkoutUrl` fehlt oder die Preise als Beispiele markiert sind, bleiben Kaufbuttons deaktiviert. Es erfolgt **keine** Zahlung.
- Nach Erstellung des Lemon-Squeezy-Stores und der Produkte pro Plan dessen **HTTPS-Checkout-Link** einfügen.
- Niemals einen Lemon-Squeezy-API-Key oder ein anderes Secret in `config.js`, HTML, GitHub oder JavaScript speichern!
- Falls du die Features in deiner aktuellen EXE anders benannt hast, in `index.html` die Beschreibungen anpassen. **Nichts als aktuell verfügbar behaupten, was noch nicht eingebaut ist.**
- `assets/logo.svg` und `assets/favicon.svg` können durch eigene Logos ersetzt werden.
- Titel/Meta-Description in `index.html` und den Unterseiten anpassen, wenn der Produktname wechselt. `data-brand` aktualisiert nur die sichtbaren Markennamen.

## 3. Auf GitHub Pages veröffentlichen

1. Auf [github.com/new](https://github.com/new) ein neues Repository erstellen, z. B. `basepilot-website`.
2. Diese ZIP **entpacken** und den **Inhalt** des Ordners ins Repository hochladen (nicht die ZIP-Datei als einzige Datei!). Achte darauf, dass der versteckte Ordner `.github` ebenfalls mit hochgeladen wird.
3. Standardbranch `main` verwenden. Sind Dateien anders committed, ggf. Branch ändern.
4. Repository → **Settings → Pages → Build and deployment → Source → GitHub Actions** wählen.
5. Unter **Actions** auf erfolgreichen Lauf `Deploy static website to GitHub Pages` achten.
6. Deine Adresse ist i. d. R. `https://DEIN-GITHUB-NAME.github.io/REPO-NAME/`.
7. Optional: eigene Domain in Settings → Pages hinterlegen; notwendige DNS-Einträge gemäß GitHub-Doku setzen. Eine eigene Domain ist für eine seriöse Produktseite empfehlenswert.

GitHub Pages unterstützt statische Websites. Es wird weder eine Datenbank noch ein eigener Server benötigt.

## 4. Lemon Squeezy später anschließen

1. Store erstellen und die tatsächliche Produktbeschreibung samt vollständigem Impressum, Support und Bedingungen hinterlegen.
2. Zeitlizenz-Produkte/Varianten sowie Lizenzschlüssel-Vergabe konfigurieren.
3. Die jeweiligen HTTPS-Checkout-URLs in `config.js` eintragen.
4. `pricesAreExamples` erst nach Preisprüfung auf `false` setzen.
5. Die **Lizenzprüfung gehört in die Python-EXE**, nicht in die öffentliche Website. Das sollte Codex später nach offiziellem API-Vertrag implementieren. Niemals Secret Keys in die EXE einbetten.
6. Testkäufe, automatische E-Mail-Zustellung, Widerrufs-/Erstattungsablauf und Lizenzablauf vor Freischaltung prüfen.

**Hinweis:** Eine veröffentlichte Website garantiert keine Freischaltung beim Zahlungsanbieter. Die Prüfung richtet sich auch nach dem Produkttyp und den Nutzungsbedingungen des Dienstes.

## 5. Rechtliche, technische und inhaltliche Pflicht-Checks

- [ ] Produktname und echte E-Mail eingetragen.
- [ ] Impressum mit echten, vollständigen Angaben statt Platzhaltern.
- [ ] Datenschutzhinweise auf das tatsächliche Hosting/Bezahlsystem angepasst.
- [ ] AGB, Widerruf und Erstattung passend zu Kaufmodell und Vertragspartner rechtlich geprüft.
- [ ] Nutzungsrechte an Logo, Bildern und sonstigen Assets geklärt (die SVGs hier sind neu erstellt).
- [ ] Echte Features abgeglichen; Mockup ggf. durch Screenshot deiner EXE ersetzt.
- [ ] Preise verbindlich bestätigt; Checkout getestet.
- [ ] Download stammt aus vertrauenswürdiger Quelle und wurde geprüft; optional Code Signing.
- [ ] Funktion in Desktop- und Mobilansicht überprüft.
- [ ] Keine API-Schlüssel in öffentlichen Dateien.
- [ ] Risiken durch Drittanbieter-Bots deutlich kommuniziert.

## 6. Wichtiger Hinweis zu Clash of Clans

Die Beispiel-Website `harvestbot.app` stellt einen Clash-of-Clans-Farming-Bot vor. Diese Vorlage enthält daher passende, vom Nutzer angenommene Softwarekategorien, aber **keine Werbung mit 'Anti-Ban'-Garantien**. Supercell untersagt Gameplay-Bots und nicht autorisierte Automatisierungssoftware; das kann dauerhafte Spielkontosperren nach sich ziehen. Quellen: [Supercell-Nutzungsbedingungen](https://supercell.com/en/terms-of-service/) und [Safe and Fair Play](https://supercell.com/en/safe-and-fair-play/de/). Es ist nicht sicher, dass ein Zahlungsdienst einen derartigen Produkttyp akzeptiert. Vor dem Verkauf Regeln und rechtliche Risiken prüfen.

## 7. Technische Details

Die Website verwendet nur HTML, CSS und Vanilla JavaScript, keine CDNs, Cookies, Datenbank, Formulare, Analytics oder Build Tools. Responsive Layouts und Tastaturnavigation sind vorbereitet. Ein späterer Zahlungs-Checkout ist nur eine ausgehende HTTPS-Verlinkung zum Anbieter.
