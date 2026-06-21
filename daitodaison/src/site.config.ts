

export const siteConfig = {
  name: 'ASTRO攻略LABO',
  description: 'ASTRO攻略LABOは、ASTROバイナリーオプション専用ツールと攻略情報を提供する日本語メディアです。',
  logo: {
    src: '/logo.svg',
    srcDark: '/logo.svg',       // Used when strategy is 'switch'
    alt: 'ASTRO攻略LABO ロゴ',
    strategy: 'invert' as 'invert' | 'switch' | 'static', // 'invert' | 'switch' | 'static'
  },
  ogImage: '/og-image.webp',
  primaryColor: '#2563EB', // Default primary color
  search: {
    enabled: true,
  },
  announcement: {
    enabled: true,
    id: 'upgrade_v1_1_1', // Change this ID to reshow the banner
    link: '/changelog',
    localizeLink: true, // Set to true to apply i18n routing to the link, false for external/absolute links
  },
  blog: {
    postsPerPage: 6,
  },
  contact: {
    email: {
      support: 'support@astro-labo.jp',
      sales: 'sales@astro-labo.jp',
    },
    phone: {
      main: '+81 3-1234-5678',
      label: '月〜金 9:00〜18:00 JST'
    },
    address: {
      city: 'Tokyo',
      full: 'Japan'
    }
  },
  analytics: {
    alwaysLoad: import.meta.env.ANALYTICS_ALWAYS_LOAD === 'true',
    vendors: {
      googleAnalytics: {
        id: import.meta.env.GA_ID || '',
        enabled: import.meta.env.GA_ENABLED === 'true',
      },
      rybbit: {
        id: import.meta.env.RYBBIT_ID || '',
        src: import.meta.env.RYBBIT_SRC || 'https://rybbit.example.com/api/script.js',
        enabled: import.meta.env.RYBBIT_ENABLED === 'true',
      },
      umami: {
        id: import.meta.env.UMAMI_ID || '',
        src: import.meta.env.UMAMI_SRC || 'https://analytics.umami.is/script.js',
        enabled: import.meta.env.UMAMI_ENABLED === 'true',
      },
    },
  },
  dateOptions: {
    localeMapping: {
        'ar': 'ar-TN', // Force Maghreb Arabic date format (e.g., جانفي instead of يناير)
        'en': 'en-GB', // Example: Force UK English date format
    }
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
      { href: '/blog/', label: '攻略ブログ', key: 'blog' },
      { href: '/sitemap-page/', label: 'サイトマップ', key: 'sitemap' },
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
