# Tomáš Garyk Masaryk — fiktívna biografia

Textovo orientovaný satirický portál postavený na **Next.js 16**, **React 19**, **TypeScript** a **Tailwind CSS 4**.

Článok je napísaný tak, aby pôsobil ako seriózna encyklopedická biografia, no všetky biografické údaje sú zámerne nesprávne. Poznámka redakcie v pätičke to jasne uvádza a stránka je nastavená na `noindex, nofollow`. V pozadí zostáva presne **200 dekoratívnych Dávidových hviezd** (aktuálne s nulovou priehľadnosťou) a v článku je rozmiestnených deväť fiktívnych „archívnych“ obrázkov.

## Lokálny vývoj

```bash
npm install
npm run dev
```

Otvor <http://localhost:3000>.

## Produkčný build

```bash
npm run lint
npm run build
npm run start
```

## Nasadenie na Vercel

Projekt nevyžaduje žiadnu konfiguráciu.

1. Pushnite repozitár na GitHub (remote je `sattan92/tgm`).
2. Vo Verceli zvoľte **Add New → Project** a importujte repozitár.
3. Framework preset nechajte na **Next.js**; environment variables nie sú potrebné.
4. Kliknite na **Deploy**.

Alebo z tohto adresára:

```bash
npx vercel
npx vercel --prod
```

## Vlastná doména z Name.com (možnosť A: nameservery Vercelu)

1. Nasaďte projekt a otvorte **Vercel → Project → Settings → Domains**.
2. Pridajte `yourdomain.com` a potvrďte aj `www.yourdomain.com`.
3. Skopírujte nameservery, ktoré Vercel zobrazí (zvyčajne `ns1.vercel-dns.com` a `ns2.vercel-dns.com`). Vždy použite presné hodnoty z dashboardu.
4. Na Name.com:
   - **My Domains** → vyberte doménu.
   - V časti **Domain Actions** kliknite na **Manage Nameservers**.
   - Nahraďte pôvodné nameservery dvoma nameservermi Vercelu a uložte.
   - Ak máte zapnuté DNSSEC, pred zmenou ho vypnite.
5. Ak doména používa e-mail, najprv skopírujte MX/TXT záznamy do Vercel DNS. Vercel e-mail nehostuje.
6. Počkajte na propagáciu (minúty až 24–48 hodín). Vercel doménu overí a automaticky vydá SSL certifikát.
7. Vo Verceli nastavte preferovanú primárnu doménu (`www` alebo apex) a druhú na ňu presmerujte.

Overenie:

```bash
dig NS yourdomain.com +short
curl -IL https://yourdomain.com
```

## Kde čo nájdete

- `lib/content.ts` — text článku, citáty, poznámky a bibliografia
- `lib/stars.ts` / `lib/prng.ts` — deterministické rozloženie 200 hviezd
- `components/StarField.tsx` — 200 hviezd v pozadí (opacity 0, zväčšené)
- `components/ArticleBody.tsx` — samotný text biografie a vložené figúry
- `public/images/` — deväť obrázkov použitých v článku
- `app/page.tsx` — hlavička článku a obsah
- `app/globals.css` — typografia a vzhľad papiera

## Upozornenie

Toto je satirická fikcia. Nejde o historickú osobu Tomáša Garrigue Masaryka. Všetky údaje, citáty a pramene v článku sú vymyslené a zámerne nesprávne. Projekt nie je spojený so žiadnou univerzitou, archívom ani štátnou inštitúciou.
