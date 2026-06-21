
export const siteConfig = {
  name: 'daito | FXプロップ攻略',
  description: 'Fintokei上位2.3%のFXトレーダーが教えるプロップファーム攻略ブログ。',
  logo: {
    src: '/logo.svg',
    srcDark: '/logo.svg',
    alt: 'daito ロゴ',
    strategy: 'invert' as 'invert' | 'switch' | 'static',
  },
  ogImage: '/og-image.webp',
  primaryColor: '#2563EB',
  search: { enabled: true },
  announcement: {
    enabled: true,
    id: 'substack_2026',
    link: 'https://daitodaison.substack.com/',
    localizeLink: false,
  },
  blog: { postsPerPage: 9 },
  contact: {
    email: { support: 'support@daitodaison.com', sales: 'sales@daitodaison.com' },
    phone: { main: '', label: '' },
    address: { city: 'Yamanashi', full: 'Japan' }
  },
  analytics: {
    alwaysLoad: import.meta.env.ANALYTICS_ALWAYS_LOAD === 'true',
    vendors: {
      googleAnalytics: { id: import.meta.env.GA_ID || '', enabled: import.meta.env.GA_ENABLED === 'true' },
      rybbit: { id: import.meta.env.RYBBIT_ID || '', src: import.meta.env.RYBBIT_SRC || '', enabled: false },
      umami: { id: import.meta.env.UMAMI_ID || '', src: import.meta.env.UMAMI_SRC || '', enabled: false },
    },
  },
  dateOptions: {
    localeMapping: { 'ar': 'ar-TN', 'en': 'en-GB' }
  }
};

export const NAV_LINKS = [
  {
    href: '/blog/',
    label: 'Blog',
    children: [
      { href: '/blog/', label: 'Blog', description: '全記事の攻略一覧', icon: 'Newspaper' },
      { href: '/sitemap-page/', label: 'Sitemap', description: 'カテゴリー別記事マップ', icon: 'Map' },
    ]
  },
  {
    href: 'https://www.fintokei.com/jp/?affiliate=64',
    label: 'PropFarm',
    localize: false,
    children: [
      { href: 'https://www.fintokei.com/jp/?affiliate=64', label: 'Fintokei', description: '🏆 著者イチオシ・日本初プロップ', icon: 'Trophy', localize: false },
      { href: 'https://my.funded7.com/ja/sign-up?affiliateId=111', label: 'FUNDED7', description: '💰 1フェーズ・最大6000万円', icon: 'Wallet', localize: false },
      { href: 'https://trader.ftmo.com/?affiliates=fEZqWBlMdBrTtxUjIJYD', label: 'FTMO', description: '🌍 世界最大手・300万人以上', icon: 'Globe', localize: false },
    ]
  },
  {
    href: 'https://daitodaison.substack.com/',
    label: 'Substack',
    localize: false,
    children: [
      { href: 'https://daitodaison.substack.com/', label: 'Substack', description: '📬 無料ニュースレター購読', icon: 'Mail', localize: false },
    ]
  },
];

export const ACTION_LINKS = {
  primary: { label: 'プロップ攻略手法を学ぶ', href: 'https://daitodaison.substack.com/' },
  social: {
    twitter: 'https://twitter.com/daitodaison',
    github: 'https://github.com/daitodaison',
    youtube: 'https://youtube.com/@creator_gaku',
    linkedin: '',
    facebook: ''
  }
};

export const FOOTER_LINKS = {
  product: {
    title: 'コンテンツ',
    links: [
      { href: '/blog/', label: '攻略ブログ' },
      { href: '/sitemap-page/', label: 'サイトマップ' },
      { href: 'https://www.fintokei.com/jp/?affiliate=64', label: 'Fintokei登録', localize: false },
      { href: 'https://my.funded7.com/ja/sign-up?affiliateId=111', label: 'FUNDED7登録', localize: false },
      { href: 'https://trader.ftmo.com/?affiliates=fEZqWBlMdBrTtxUjIJYD', label: 'FTMO登録', localize: false },
    ],
  },
  legal: {
    title: '法的情報',
    links: [
      { href: '/privacy', label: 'プライバシーポリシー', localize: false },
      { href: '/terms', label: '免責事項', localize: false }
    ],
  },
};