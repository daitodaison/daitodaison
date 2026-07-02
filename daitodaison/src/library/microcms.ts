import { createClient } from "microcms-js-sdk";

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN || "daitodaison";
const apiKey = import.meta.env.MICROCMS_API_KEY;

// 本番ビルド(CI/CF Pages)で MICROCMS_API_KEY が未設定の場合、
// 以前は空配列を返すダミークライアントに静かにフォールバックしており、
// ブログ一覧が「記事0件・気づかれないまま」でデプロイされてしまう原因になっていた。
// ここでビルドを明示的に失敗させ、デプロイ前に気づけるようにする。
const isBuildContext = import.meta.env.PROD || process.env.CI;

if (!apiKey && isBuildContext) {
  throw new Error(
    "[microcms] MICROCMS_API_KEY が設定されていません。Cloudflare Pages の環境変数を確認してください。" +
    "このまま空データでビルドするとブログ一覧が空/不完全な状態で本番公開されます。"
  );
}

if (!apiKey) {
  console.warn(
    "[microcms] MICROCMS_API_KEY が未設定です。ローカル開発用の空データ(contents: [])で動作します。"
  );
}

export const client = (apiKey)
  ? createClient({ serviceDomain, apiKey })
  : ({
      get: async () => ({ contents: [], totalCount: 0 }),
      getList: async () => ({ contents: [], totalCount: 0 }),
      getObject: async () => ({}),
    } as any);