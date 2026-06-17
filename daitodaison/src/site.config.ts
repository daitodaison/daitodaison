

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
    href: '/features', 
    label: 'Work',
    children: [
        { href: '/features', label: 'Features', description: 'What makes us different', icon: 'Zap' },
        { href: '/pricing', label: 'Pricing', description: 'Plans for every team', icon: 'CreditCard' },
    ]
  },
  { 
    href: '/blog', 
    label: 'Resources',
    children: [
        { href: '/blog', label: 'Blog', description: 'Latest updates & guides', icon: 'Newspaper' },
    ]
  },
];

export const ACTION_LINKS = {
  primary: { label: 'Get Started', href: '/docs/getting-started' },
  social: { 
    twitter: 'https://twitter.com/astro-lab',
    linkedin: 'https://linkedin.com/company/astro-lab',
    github: 'https://github.com/astro-lab',
    youtube: 'https://youtube.com/@astro-lab',
    facebook: 'https://facebook.com/astro-lab'
    
  }
};

export const FOOTER_LINKS = {
  product: {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/about', label: 'About' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/changelog', label: 'Changelog' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy', localize: false },
      { href: '/terms', label: 'Terms', localize: false }
    ],
  },
};
