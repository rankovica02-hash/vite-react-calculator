# Calculator

_Mini web kalkulator. React 19 · Vite 6 · TypeScript 5._

> Aplikacija sa dva input polja, četiri aritmetičke operacije i prikazom rezultata. Bez eksternih state management biblioteka — samo `useState`.

---

## Demo

Live: https://vite-react-calculator-gamma.vercel.app

---

## Features

- [x] Sabiranje, oduzimanje, množenje, deljenje
- [x] Validacija unosa (odbija prazna polja i ne-brojeve)
- [x] Zaštita od deljenja nulom
- [x] Reset dugme za brisanje stanja
- [x] Responsive layout (mobile + desktop)
- [x] Auto-deploy na svaki push (Vercel + GitHub)

---

## Quick start

Potreban je **Node.js 18+**.

```bash
git clone https://github.com/rankovica02-hash/vite-react-calculator.git
cd vite-react-calculator
npm install
npm run dev
```

Aplikacija će biti dostupna na `http://localhost:5173`.

---

## Scripts

| Komanda | Šta radi |
|---|---|
| `npm run dev` | Pokreće Vite dev server sa hot reload-om |
| `npm run build` | Kompajlira TypeScript i pravi production build u `dist/` |
| `npm run preview` | Lokalni preview production build-a |
| `npm run lint` | Pokreće ESLint nad `src` folderom |

---

## Project layout

```
src/
├── components/Calculator/
│   ├── Calculator.tsx        UI komponenta — useState, JSX, event handleri
│   ├── Calculator.css        Stilovi (dark tema, amber akcent)
│   └── calculatorLogic.ts    Čista funkcija za računanje + format izlaza
├── types/
│   └── calculator.ts         Tipovi: Operation, CalculationResult, OperationDefinition
├── App.tsx                   Root komponenta
├── main.tsx                  Entry point — React root
└── index.css                 Globalne CSS varijable i body pozadina
```

---

## Arhitektura

Logika i UI su razdvojeni — `calculatorLogic.ts` je čista, testabilna funkcija bez ijedne reference na React. `Calculator.tsx` se bavi samo prikazom i event-ima.

```
Calculator.tsx  ──uses──▶  calculatorLogic.ts  ──uses──▶  types/calculator.ts
   (UI sloj)              (poslovna logika)            (definicije tipova)
```

Ovo je primena **Single Responsibility Principle**-a (SOLID): svaki modul ima jedan razlog za promenu. Ako se sutra menja UI, logika se ne dira; ako se menja način računanja, UI se ne dira.

---

## Deployment

Hostovano na **Vercel**, povezano sa GitHub repozitorijumom. Pipeline je:

```
git push origin main  ──▶  Vercel webhook  ──▶  build  ──▶  deploy na CDN
```

Svaki commit na `main` granu automatski dobija novi production build. Pull request-ovi dobijaju zaseban preview URL.

---

## Stack

| Sloj | Tehnologija |
|---|---|
| UI framework | React 19 |
| Build tool | Vite 6 |
| Type system | TypeScript 5 (strict mode) |
| Linter | ESLint 9 |
| Hosting | Vercel |
| CI/CD | GitHub → Vercel integracija |
