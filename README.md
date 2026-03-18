# <span style="color:#1FE211;">COUNTER STRIKE</span>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-ONLINE-1FE211?style=for-the-badge&labelColor=000000" alt="status online">
  <img src="https://img.shields.io/badge/JAVASCRIPT-VANILLA-1FE211?style=for-the-badge&labelColor=000000" alt="javascript vanilla">
  <img src="https://img.shields.io/badge/THEME-80s%20DUOTONE-1FE211?style=for-the-badge&labelColor=000000" alt="80s duotone">
</p>

<p align="center">
  <strong style="color:#1FE211;">Un contatore in puro JavaScript con anima rétro:</strong><br>
  interfaccia ispirata ai monitor da computer anni '80, palette a due colori, font pixel e feeling da terminale old school.
</p>

---

## <span style="color:#1FE211;">[ BOOT LOG ]</span>

Questo progetto è una piccola applicazione web che simula il comportamento di un counter.
L'interfaccia viene costruita dinamicamente tramite JavaScript e permette di:

- aumentare il valore con `+`
- diminuire il valore con `-`
- azzerare il contatore con `RESET`
- cambiare atmosfera con il toggle `DARK / LIGHT`

L'obiettivo non è solo funzionale: tutto il design richiama un vecchio display monocromatico, con una presenza visiva netta e nostalgica.

---

## <span style="color:#1FE211;">[ FEATURES ]</span>

- `UI dinamica`: i pulsanti del contatore vengono creati via DOM in JavaScript
- `Counter logic`: incremento, decremento e reset del valore
- `No negative values`: il contatore non scende sotto lo `0`
- `Retro style`: look da terminale/monitor anni '80
- `Dark / Light mode`: cambio tema direttamente dall'interfaccia
- `SCSS structure`: stile organizzato in file parziali

---

## <span style="color:#1FE211;">[ TECH STACK ]</span>

```txt
HTML5
CSS3
SCSS
JavaScript Vanilla
Google Fonts / Press Start 2P
```

---

## <span style="color:#1FE211;">[ VISUAL MOOD ]</span>

```txt
PALETTE  : BLACK #000000
ACCENT   : GREEN #1FE211
STYLE    : RETRO COMPUTER / CRT / 80s
FONT     : PRESS START 2P
FEELING  : PIXEL, TERMINAL, ARCADE
```

---

## <span style="color:#1FE211;">[ PROJECT STRUCTURE ]</span>

```bash
.
├── index.html
├── README.md
├── css
│   ├── main.css
│   ├── main.css.map
│   ├── main.scss
│   ├── abstract
│   │   └── _variables.scss
│   └── section
│       ├── _bottone.scss
│       └── _homeStyle.scss
├── js
│   ├── contatore.js
│   ├── darkLightMode.js
│   └── score_info.js
└── img
    ├── landscape-illustration.jpg
    ├── landscape-illustration_little.jpg
    └── pexels-nicole-avagliano-1132392-2312040.jpg
```

---

## <span style="color:#1FE211;">[ START ]</span>

Per eseguire il progetto in locale ti basta aprire `index.html` nel browser.

Se preferisci usare un server locale:

```bash
npx serve
```

oppure con VS Code puoi usare `Live Server`.

---

## <span style="color:#1FE211;">[ CORE IDEA ]</span>

Il cuore del progetto sta in due punti:

- costruzione dinamica degli elementi interattivi tramite JavaScript
- identità grafica forte, ispirata ai computer vintage a fosfori verdi

È un esercizio semplice nella logica, ma molto caratterizzato sul piano visivo.

---

## <span style="color:#1FE211;">[ AUTHOR ]</span>

**Salvatore De Roma**  
Progetto realizzato per esercitazione JavaScript.

<p align="center">
  <strong style="color:#1FE211;">SYSTEM READY _ INSERT COIN</strong>
</p>
