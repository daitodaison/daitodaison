This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/components/layout/Header.astro, src/pages/[lang]/blog/index.astro, src/site.config.ts
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
src/components/layout/Header.astro
src/pages/[lang]/blog/index.astro
src/site.config.ts
```

# Files

## File: src/components/layout/Header.astro
```astro
---
import BrandIcon from '~/components/common/BrandIcon.astro';
import ThemeToggle from '~/components/common/ThemeToggle.astro';
import MobileMenu from '~/components/islands/MobileMenu';
import DesktopNav from '~/components/islands/DesktopNav';
import Search from '~/components/islands/Search';
import LanguagePicker from '~/components/common/LanguagePicker.astro';

import { NAV_LINKS, ACTION_LINKS, siteConfig } from '~/site.config';
import { defaultLang } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';

interface Props {
  availableLangs?: string[];
}

const { lang = defaultLang } = Astro.params;
const { availableLangs } = Astro.props;
const t = useTranslations(lang);

const translateNavLinks = (links: any[], lang: string, t: any): any[] => {
  return links.map(link => {
    const key = `nav.${link.label.toLowerCase().replace(/\s+/g, '.')}`;
    const descKey = `${key}.desc`;
    
    const shouldLocalize = link.localize !== false;
    const href = (!shouldLocalize)
      ? link.href 
      : `/${lang}${link.href.startsWith('/') ? '' : '/'}${link.href}`.replace(/\/$/, '') || `/${lang}`;

    return {
      ...link,
      label: t[key as keyof typeof t],
      description: t[descKey as keyof typeof t],
      href,
      children: link.children ? translateNavLinks(link.children, lang, t) : undefined
    };
  });
};

const links = translateNavLinks(NAV_LINKS, lang, t);

const getLocalizedHref = (href: string) => {
  if (!href) return `/${lang}`;
  if (href.startsWith('http')) return href;
  const trimmed = href.replace(/\/+$|^\/+/, '');
  return `/${lang}/${trimmed}`.replace(/\/+/g, '/');
};

const primaryHref = getLocalizedHref(ACTION_LINKS.primary.href);
---

<header id="main-header" class="w-full transition-all duration-500 border-b border-transparent bg-transparent py-4 text-white dark:text-white">
  <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href={`/${lang}`} class="flex items-center gap-3 text-xl font-bold tracking-tight text-primary dark:text-white group shrink-0 whitespace-nowrap">
      {siteConfig.logo && (
        siteConfig.logo.strategy === 'switch' ? (
          <>
            <img 
              src={siteConfig.logo.src} 
              alt={siteConfig.logo.alt} 
              width="32"
              height="32"
              class="h-8 w-auto group-hover:rotate-6 transition-transform duration-300 dark:hidden block"
            />
            <img 
              src={siteConfig.logo.srcDark || siteConfig.logo.src} 
              alt={siteConfig.logo.alt} 
              width="32"
              height="32"
              class="h-8 w-auto group-hover:rotate-6 transition-transform duration-300 hidden dark:block"
            />
          </>
        ) : (
          <img 
            src={siteConfig.logo.src} 
            alt={siteConfig.logo.alt} 
            width="32"
            height="32"
            id="header-logo-img" class="h-8 w-auto group-hover:rotate-6 transition-transform duration-300 invert"
          />
        )
      )}
      <span class="flex flex-col leading-tight">
        <span class="text-sm md:text-xl font-bold">{t['brand.name'] || siteConfig.name}</span>
        <span id="header-subtext" class="text-[10px] md:text-xs text-zinc-400 dark:text-zinc-500 font-medium whitespace-nowrap">勝率40%・上位2.3%のFXプロップ攻略</span>
      </span>
    </a>
    <div class="flex-1 flex justify-center mx-4 lg:mx-8">
      <DesktopNav client:only="react" links={links} lang={lang} availableLangs={availableLangs} searchPlaceholder={t["search.placeholder"]} currentPath={Astro.url.pathname} />
    </div>

    {/* Mobile/Flyout Menu */}
    <div class="flex items-center gap-4 shrink-0">
      {siteConfig.search.enabled && (
        <div class="hidden md:flex">
          <Search 
            client:only="react" 
            placeholder={t['search.placeholder']} 
            lang={lang}
          />
        </div>
      )}
      <LanguagePicker availableLangs={availableLangs} />
      <span class="block md:block"><ThemeToggle /></span>
<a 
        href={primaryHref}
        class="hidden md:block px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all"
      >
        {t['hero.getStarted'] || ACTION_LINKS.primary.label}
      </a>
      
      <div class="md:hidden">
        <MobileMenu 
          client:only="react" 
          links={links} lang={lang} availableLangs={availableLangs} searchPlaceholder={t["search.placeholder"]} 
          currentPath={Astro.url.pathname} 
          lang={lang}
          availableLangs={availableLangs}
          primaryHref={primaryHref}
          searchPlaceholder={t['search.placeholder']}
          labels={{
            menu: t['nav.menu'],
            getStarted: t['hero.getStarted'] || ACTION_LINKS.primary.label
          }}
        />
      </div>
    </div>
  </div>
</header>

<script>
  function initHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const SCROLLED_CLASSES = ['bg-zinc-900/70', 'dark:bg-zinc-950/70', 'backdrop-blur-md', 'border-gray-200/10', 'dark:border-white/10', 'py-2', 'shadow-sm'];
    const TOP_CLASSES = ['bg-transparent', 'border-transparent', 'py-4'];
    const logoImg = document.getElementById('header-logo-img');
    const subText = document.getElementById('header-subtext');

    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.remove(...TOP_CLASSES);
        header.classList.add(...SCROLLED_CLASSES);
        if (logoImg) { logoImg.classList.remove('invert-0'); logoImg.classList.add('invert'); }
        if (subText) { subText.classList.remove('text-zinc-400'); subText.classList.add('text-zinc-300'); }
      } else {
        header.classList.remove(...SCROLLED_CLASSES);
        header.classList.add(...TOP_CLASSES);
        if (logoImg) { logoImg.classList.remove('invert'); logoImg.classList.add('invert-0'); }
        if (subText) { subText.classList.remove('text-zinc-300'); subText.classList.add('text-zinc-400'); }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  // Run on first load and view transitions
  initHeader();
  document.addEventListener('astro:page-load', initHeader);
</script>
```

## File: src/pages/[lang]/blog/index.astro
```astro
---
export const prerender = true;
import Layout from "~/layouts/Layout.astro";
import PageHeader from "~/components/layout/PageHeader.astro";
import Container from "~/components/ui/Container.astro";
import Card from "~/components/ui/Card.astro";
import { client } from "~/library/microcms";
import { useTranslations } from "~/i18n/utils";

export async function getStaticPaths() {
  const PER_PAGE = 9;
  let allPosts: any[] = [];
  let offset = 0;
  while (true) {
    const response = await client.get({
      endpoint: "blogs",
      queries: { limit: 100, offset, orders: "-updatedAt", fields: "id,title,eyecatch,category,tags,updatedAt" },
    });
    allPosts = allPosts.concat(response.contents);
    if (allPosts.length >= response.totalCount) break;
    offset += 100;
  }
  const totalPages = Math.max(1, Math.ceil(allPosts.length / PER_PAGE));
  const start = 0;
  const posts = allPosts.slice(0, PER_PAGE);
  return [
    { params: { lang: "ja" }, props: { posts, currentPage: 1, totalPages, totalPosts: allPosts.length, perPage: PER_PAGE } },
    { params: { lang: "en" }, props: { posts, currentPage: 1, totalPages, totalPosts: allPosts.length, perPage: PER_PAGE } },
  ];
}

const { posts, currentPage, totalPages, totalPosts, perPage } = Astro.props;
const { lang } = Astro.params;
const t = useTranslations(lang);

// ページネーションのロジック計算（フロントマター側で安全に処理）
const cur = Number(currentPage);
const paginationItems = [];

if (cur > 1) {
  paginationItems.push({ type: 'page', page: cur - 1, label: '＜', active: false });
}

paginationItems.push({ type: 'page', page: 1, label: '1', active: cur === 1 });

if (cur > 3) {
  paginationItems.push({ type: 'ellipsis' });
} else if (totalPages > 2 && cur === 3) {
  paginationItems.push({ type: 'page', page: 2, label: '2', active: false });
}

const startPage = Math.max(2, cur - 1);
const endPage = Math.min(totalPages - 1, cur + 1);
for (let i = startPage; i <= endPage; i++) {
  if (i !== 1 && i !== totalPages) {
    paginationItems.push({ type: 'page', page: i, label: String(i), active: cur === i });
  }
}

if (cur < totalPages - 2) {
  paginationItems.push({ type: 'ellipsis' });
} else if (totalPages > 2 && cur === totalPages - 2) {
  paginationItems.push({ type: 'page', page: totalPages - 1, label: String(totalPages - 1), active: false });
}

if (totalPages > 1) {
  paginationItems.push({ type: 'page', page: totalPages, label: String(totalPages), active: cur === totalPages });
}

if (cur < totalPages) {
  paginationItems.push({ type: 'page', page: cur + 1, label: '＞', active: false });
}
---
<Layout title="Blog" description={t["blog.microcms.desc"]}>
  <PageHeader title="Blog" description={t["blog.microcms.desc"]} />
  <Container as="section" class="pb-24">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {posts.map((post: any) => (
        <Card href={`/${lang}/blog/microcms/${post.id}`} class="p-0 overflow-hidden hover:shadow-primary/10 hover:-translate-y-1 block h-full group">
          <div class="relative aspect-video w-full overflow-hidden bg-muted">
            {(() => { const raw = post.eyecatch || ""; return raw.split("|")[0].replace("https://daitodaison.pages.dev/wp-content", "https://dysonblog.org/wp-content"); })() ? (
              <img src={(() => { const raw = post.eyecatch || ""; return raw.split("|")[0].replace("https://daitodaison.pages.dev/wp-content", "https://dysonblog.org/wp-content"); })()} alt={post.title} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div class="h-full w-full flex items-center justify-center bg-black/5 dark:bg-white/5">
                <span class="text-4xl">📝</span>
              </div>
            )}
          </div>
          <div class="p-6">
            {post.category && (
              <span class="inline-block text-xs font-bold px-2 py-1 rounded-full bg-primary/10 text-primary mb-2">
                {post.category.name}
              </span>
            )}
            <h2 class="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            {post.tags && (
              <div class="flex flex-wrap gap-1 mt-2">
                {post.tags.split(',').map((tag: string) => (
                  <span class="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>

            {totalPages > 1 && (
      <nav class="flex items-center justify-center gap-2 mt-8" aria-label="ページナビゲーション">
        {Number(currentPage) > 1 && (
          <a href={Number(currentPage) === 2 ? `/${lang}/blog/` : `/${lang}/blog/${Number(currentPage) - 1}/`} class="px-4 py-2 rounded-lg text-sm font-medium border border-border hover:bg-muted">＜</a>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((i) => i === 1 || i === totalPages || (i >= Number(currentPage) - 2 && i <= Number(currentPage) + 2))
          .map((page, idx, arr) => (
            <>
              {idx > 0 && arr[idx - 1] !== page - 1 && <span class="px-2 py-2 text-sm text-muted-foreground">...</span>}
              <a href={page === 1 ? `/${lang}/blog/` : `/${lang}/blog/${page}/`} class={page === Number(currentPage) ? "px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white" : "px-4 py-2 rounded-lg text-sm font-medium border border-border hover:bg-muted"} aria-current={page === Number(currentPage) ? "page" : undefined}>
                {page}
              </a>
            </>
          ))}
        {Number(currentPage) < totalPages && (
          <a href={`/${lang}/blog/${Number(currentPage) + 1}/`} class="px-4 py-2 rounded-lg text-sm font-medium border border-border hover:bg-muted">＞</a>
        )}
      </nav>
    )}

    <p class="text-center text-sm text-muted-foreground mt-4">
      {totalPosts}件中 1〜{Math.min(perPage, totalPosts)}件を表示
    </p>
  </Container>
</Layout>
```

## File: src/site.config.ts
```typescript
export const siteConfig = {
name: 'daitodaison',
  description: '勝率40%・上位2.3%のFXプロップ攻略メディア。Fintokei・FTMO・Funded7の攻略情報とEA開発を発信。',
  logo: {
    src: '/site-logo.png',
    srcDark: '/site-logo.png',       // Used when strategy is 'switch'
    alt: 'daitodaison ロゴ',
    strategy: 'none' as 'invert' | 'switch' | 'static', // 'invert' | 'switch' | 'static'
  },
  ogImage: '/og-image.webp',
  primaryColor: '#2563EB', // Default primary color
  search: {
    enabled: true,
  },
  announcement: {
    enabled: true,
    id: 'upgrade_v1_1_1', // Change this ID to reshow the banner
   link: 'https://daitodaison.substack.com/',
    localizeLink: false, // Set to true to apply i18n routing to the link, false for external/absolute links
  },
  blog: {
    postsPerPage: 6,
  },
  contact: {
    email: {
  support: '',
      sales: '',
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
    github: '',
    youtube: 'https://youtube.com/daitodaison',
    linkedin: 'https://www.linkedin.com/in/daitodaison/',
    facebook: '',
    note: 'https://note.com/daitodaison',
    substack: 'https://daitodaison.substack.com/'
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
     { href: '/terms', label: '利用規約', localize: false }
    ],
  },
};
```
