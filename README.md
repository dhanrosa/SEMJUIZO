<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/03d0eed5-ad33-4887-b01d-b59aaf37a7c7

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Google Calendar na Agenda

Para conectar a secao `Agenda` com sua agenda publica do Google, crie um arquivo `.env.local` na raiz com:

```env
VITE_GOOGLE_CALENDAR_EMBED_URL=https://calendar.google.com/calendar/embed?src=SEU_CALENDAR_ID&ctz=America%2FSao_Paulo
VITE_GOOGLE_CALENDAR_PUBLIC_URL=https://calendar.google.com/calendar/u/0?cid=SEU_CALENDAR_ID
```

Como pegar isso no Google Calendar:

1. Abra as configuracoes da agenda que voce quer publicar.
2. Em "Permissoes de acesso", habilite a agenda como publica.
3. Em "Integrar agenda", copie o `ID da agenda`.
4. Monte as URLs acima trocando `SEU_CALENDAR_ID` pelo ID copiado.

Se essas variaveis nao estiverem preenchidas, o site continua usando a agenda mock local.
