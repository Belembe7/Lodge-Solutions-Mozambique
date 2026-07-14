# LSM CompanyP

Website institucional da **LSM CompanyP** — empresa moçambicana de energia solar, engenharia e construção sustentável.

Stack: **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS** · **Framer Motion** · **React Hook Form + Zod**

## Requisitos

- Node.js **20.9+**
- npm 10+

## Instalação

```bash
cd lsm-companyp
npm install
```

Copie as variáveis de ambiente:

```bash
cp .env.example .env.local
```

Edite `.env.local` se necessário:

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública (sitemap, OG, robots) |
| `CONTACT_FORM_EMAIL` | Destino futuro do formulário de contacto |

## Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Importe o repositório no [Vercel](https://vercel.com).
2. Configure as variáveis de ambiente (`NEXT_PUBLIC_SITE_URL`, `CONTACT_FORM_EMAIL`).
3. Deploy — o projeto não precisa de configuração adicional além das env vars.

Ou via CLI:

```bash
npx vercel
```

## Estrutura

```
src/
  app/            # layout, page, sitemap, robots, estilos globais
  components/     # UI reutilizável (Button, Card, Counter, etc.)
  sections/       # Secções da homepage (Header → Footer)
  lib/            # constantes, validações, utils
  types/          # tipos TypeScript
```

## Notas

- Imagens e vídeo do Hero são placeholders (Unsplash / Pexels) — procurar `TODO: substituir por imagem real do cliente` no código.
- O formulário de contacto valida no cliente; a integração de email (Resend/Nodemailer) fica preparada via `CONTACT_FORM_EMAIL`.
- Métricas em `StatsSection` devem ser confirmadas com dados reais do cliente.
