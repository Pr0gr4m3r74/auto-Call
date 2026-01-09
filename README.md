# Auto-Call Website

Eine HTML-basierte Web-Anwendung für automatische Telefonanrufe mit sofortiger Auflegung.

## 🎯 Funktionen

- ✅ Eingabeformular für Name und Telefonnummer
- ✅ Automatischer Anruf (simuliert) mit Start des Standard-Telefonwählers
- ✅ Sofortige Auflegung bei Annahme
- ✅ Echtzeit-Ladeanzeige während des Anrufs
- ✅ Anzeige der Anrufergebnisse:
  - Anrufstatus (angenommen/nicht angenommen)
  - Anrufdauer
  - Name und Nummer
- ✅ Keine Datenspeicherung nach Verlassen der Seite
- ✅ Responsive Design für alle Geräte

## 🚀 Installation & Verwendung

1. Laden Sie die Dateien herunter oder klonen Sie das Repository
2. Öffnen Sie die `index.html` Datei in Ihrem Webbrowser
3. Keine zusätzlichen Abhängigkeiten oder Server erforderlich!

```bash
# Repository klonen
git clone https://github.com/Pr0gr4m3r74/auto-Call.git
cd auto-Call

# Einfach die index.html öffnen
open index.html
```

## 📁 Dateistruktur

```
auto-Call/
├── index.html    # Haupt-HTML-Datei mit Formular und UI
├── styles.css    # Komplettes Styling und Responsive Design
├── script.js     # JavaScript-Logik für Anrufverwaltung
└── README.md     # Diese Datei
```

## 💡 Verwendung

1. **Name eingeben**: Geben Sie den Namen der Person ein
2. **Nummer eingeben**: Geben Sie die Telefonnummer mit Ländervorwahl ein (z.B. +49 123 456789)
3. **Anruf starten**: Klicken Sie auf den Button "Anruf starten"
4. **Warten**: Der Ladbildschirm zeigt den laufenden Anruf mit Timer an
5. **Ergebnis**: Nach Abschluss sehen Sie:
   - Ob der Anruf angenommen wurde
   - Die Dauer des Anrufs
   - Alle eingegebenen Informationen

## 🔒 Datenschutz

Diese Anwendung speichert **KEINE** Daten:
- ❌ Kein localStorage
- ❌ Kein sessionStorage
- ❌ Keine Cookies
- ❌ Keine Server-Kommunikation
- ✅ Alle Daten werden nur im Speicher gehalten und nach dem Verlassen der Seite gelöscht

## ⚠️ Hinweise

### Demo-Version
Diese Anwendung verwendet **simulierte Anrufe** zu Demonstrationszwecken. Für echte automatisierte Anrufe wären zusätzlich Backend-Integrationen erforderlich.

### Simulation-Details
- Anrufdauer: 3-8 Sekunden bis zur "Annahme"
- Annahmerate: 70% (zufällig)
- Automatische Auflegung bei Annahme
- Maximale Klingeldauer: 20 Sekunden bei Nichtannahme

## 🎨 Features

### Benutzeroberfläche
- Modernes, responsives Design
- Grün-basiertes Farbschema
- Animierte Ladeanimationen
- Klare Status-Anzeigen
- Mobile-first Ansatz

### Technische Details
- Reines HTML, CSS und Vanilla JavaScript
- Keine externen Bibliotheken erforderlich
- Cross-Browser kompatibel
- Optimiert für Performance

## 📱 Browser-Kompatibilität

Getestet und funktioniert in:
- ✅ Chrome/Edge (neueste Versionen)
- ✅ Firefox (neueste Versionen)
- ✅ Safari (neueste Versionen)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## 🛠️ Anpassungen

Das Projekt kann einfach angepasst werden:

### Farben ändern (styles.css)
```css
:root {
    --primary-color: #25D366;    /* Standard Grün */
    --secondary-color: #128C7E;  /* Dunkleres Grün */
}
```

### Call-Simulation anpassen (script.js)
```javascript
// In der simulateCall() Methode:
const ringDuration = 3000 + Math.random() * 5000; // Anpassbar
const willAnswer = Math.random() < 0.7; // Annahmerate ändern
```

## 📄 Lizenz

Dieses Projekt ist Open Source und kann frei verwendet werden.

## 🤝 Beitragen

Beiträge sind willkommen! Fühlen Sie sich frei, Issues zu öffnen oder Pull Requests zu erstellen.

## 📧 Kontakt

Bei Fragen oder Vorschlägen öffnen Sie bitte ein Issue im Repository.
