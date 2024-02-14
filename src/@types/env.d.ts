interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly KAKAO_JAVASCRIPT_KEY: string;
  readonly KAKAO_INTEGRITY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
