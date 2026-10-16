# Massimo_Test

App [Next.js](https://nextjs.org) minimale (App Router) con una sola pagina che mostra **"Hello World"**, pronta per il deploy su [Vercel](https://vercel.com).

## Struttura

```
app/
  layout.js   # layout radice (html/body + metadata)
  page.js     # pagina "/" che mostra "Hello World"
next.config.mjs
package.json
```

## Requisiti

- Node.js 20.9 o superiore
- npm

## Sviluppo in locale

```bash
npm install
npm run dev
```

Apri <http://localhost:3000> nel browser.

## Build di produzione

```bash
npm run build
npm start
```

## Deploy su Vercel

### Opzione 1 — Dalla dashboard (consigliata)

1. Fai push del repository su GitHub.
2. Vai su <https://vercel.com/new> e importa il repository.
3. Vercel rileva automaticamente Next.js: lascia le impostazioni predefinite
   (Build Command `next build`, Output gestito da Vercel) e clicca **Deploy**.
4. Ogni push successivo genera un nuovo deploy (preview per i branch, produzione per il branch principale).

### Opzione 2 — Da riga di comando

```bash
npm install -g vercel
vercel          # primo deploy (preview), collega il progetto
vercel --prod   # deploy in produzione
```

Non servono variabili d'ambiente né configurazioni aggiuntive.
