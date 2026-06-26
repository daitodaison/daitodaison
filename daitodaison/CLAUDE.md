# daitodaison プロジェクト - 重要な注意事項

## ビルド・デプロイ関連（2026-06-26 解決済みの教訓）

### 1. このサイトは完全な静的サイト（output: 'static'、アダプターなし）
- astro.config.mjs の getAdapter() で case 'cloudflare' は eturn undefined; になっている
- これは意図的な設定。「Cloudflare Pages は @astrojs/cloudflare 公式サポート外（Workers移行推奨）」のため
- 再びアダプターを追加しようとすると ASSETS バインディング名の予約語衝突エラーが再発する
- もしSSR（サーバー処理）が必要なページを追加する場合は、getStaticPaths() で全パスを事前生成する方式を優先する

### 2. ビルド出力先は dist 直下（dist/client ではない）
- アダプターなしの完全静的ビルドでは dist/client, dist/server という分割は発生しない
- 全ファイルが dist/ 直下に直接出力される（index.html, en/, ja/ など）
- 手動デプロイ時は次を使う：
  pnpm run build:cloudflare
  pnpm dlx wrangler pages deploy dist --project-name=daitodaison
  （dist/client ではなく dist を指定すること。間違えると ENOENT エラーになる）

### 3. 動的ルート（[lang] など）に prerender = false を書くときの注意
- output: 'static' のままで prerender = false にすると NoAdapterInstalled エラーになる
- 動的ルートを静的化する場合は getStaticPaths() を必ず追加する（例: src/pages/[lang]/about.astro 参照）
  例:
  import { languages } from '~/i18n/ui';
  export async function getStaticPaths() {
    return Object.keys(languages).map((lang) => ({ params: { lang } }));
  }

### 4. api/revalidate.ts は削除済み（Netlify時代の遺物だったため）
- microCMS の Webhook は Cloudflare Pages の Deploy Hook URL を直接呼ぶ方式に移行済み
- microCMS管理画面 > API設定 > Webhook で「Cloudflare Pages」統合が有効になっている
- このAPIルートが必要だと思って復元する必要はない

### 5. Cloudflare GitHub連携のCIビルドが原因不明でタイムアウトする問題
- 2026-06-25〜26、ビルドコマンドの中身を echo hello に変えても「クローン成功」直後に
  約36分でタイムアウトする現象が発生（Cloudflare側インフラの問題と推定）
- この場合はローカルビルド + wrangler pages deploy での手動デプロイで回避できる
- 解決しない場合は新規Pagesプロジェクトとして再接続するか、Cloudflareサポートに問い合わせる

## PowerShellでのファイル編集の注意
- [lang] のような角括弧を含むパスは Resolve-Path がワイルドカードと誤解釈するため -LiteralPath を使う
- ヒアドキュメント (@'...'@) 内にJSの矢印関数 => や入れ子の丸括弧を書くと
  PowerShellのパーサーが誤動作することがある。複雑なコード片はPythonスクリプト経由で
  re.subn() 等を使い、改行コード(\r\n か \n)の違いも吸収する形で書き換えるのが安全