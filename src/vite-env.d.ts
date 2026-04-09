/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CALENDAR_EMBED_URL?: string;
  readonly VITE_GOOGLE_CALENDAR_PUBLIC_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
