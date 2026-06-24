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
- Only files matching these patterns are included: src/components/layout/**, src/pages/[lang]/**, src/site.config.ts
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
src/components/layout/Breadcrumbs.astro
src/components/layout/Footer.astro
src/components/layout/Header.astro
src/components/layout/PageHeader.astro
src/components/layout/Schema.astro
src/components/layout/ScrollProgress.astro
src/components/layout/Section.astro
src/components/layout/SEO.astro
src/pages/[lang]/404.astro
src/pages/[lang]/about.astro
src/pages/[lang]/blog/[page].astro
src/pages/[lang]/blog/[page].astro.tmp
src/pages/[lang]/blog/author/[author].astro
src/pages/[lang]/blog/index.astro
src/pages/[lang]/blog/microcms.astro
src/pages/[lang]/blog/microcms/[id].astro
src/pages/[lang]/blog/tag/[tag].astro
src/pages/[lang]/changelog/[...slug].astro
src/pages/[lang]/changelog/index.astro
src/pages/[lang]/checkout.astro
src/pages/[lang]/contact.astro
src/pages/[lang]/design.astro
src/pages/[lang]/features.astro
src/pages/[lang]/index.astro
src/pages/[lang]/portfolio/[...slug].astro
src/pages/[lang]/portfolio/index.astro
src/pages/[lang]/pricing.astro
src/pages/[lang]/showcase.astro
src/pages/[lang]/sitemap-page.astro
src/site.config.ts
```

# Files

## File: src/components/layout/Breadcrumbs.astro
```astro
---
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface Props {
  items?: BreadcrumbItem[]; // Optional, otherwise auto-generated (simplified)
}

const { items = [] } = Astro.props;
---

<nav class="flex" aria-label="Breadcrumb">
  <ol role="list" class="flex items-center space-x-2">
    <li>
      <div>
        <a href="/" class="text-muted-foreground hover:text-primary transition-colors">
          <Home className="h-4 w-4 shrink-0" />
          <span class="sr-only">Home</span>
        </a>
      </div>
    </li>
    {items.map((item) => (
      <li>
        <div class="flex items-center">
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
          <a
            href={item.href}
            class={`ml-2 text-sm font-medium transition-colors ${
              item.current
                ? 'text-primary pointer-events-none'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.label}
          </a>
        </div>
      </li>
    ))}
  </ol>
</nav>
```

## File: src/components/layout/Footer.astro
```astro
---
import { ACTION_LINKS } from '~/site.config';
import BrandIcon from '~/components/common/BrandIcon.astro';
import { defaultLang } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';

const today = new Date();
const { lang = defaultLang } = Astro.params;
---

<footer class="mt-auto bg-zinc-950 text-white">

  <!-- Fintokei CTAバナー -->
  <div class="border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-purple-400 mb-1">🏆 著者イチオシ・日本初プロップファーム</p>
          <p class="text-lg font-black text-white">Fintokei（フィントケイ）で無料登録する</p>
          <p class="text-sm text-zinc-400 mt-1">参加費全額返金キャンペーン中（2026年6月末まで）・自己資金不要</p>
        </div>
        <a href="https://www.fintokei.com/jp/?affiliate=64" target="_blank" rel="noopener"
           class="shrink-0 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-black px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-500/20 whitespace-nowrap">
          無料で始める →
        </a>
      </div>
    </div>
  </div>

  <!-- フッター本体 -->
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

      <!-- ブランド -->
      <div class="md:col-span-2">
        <p class="text-lg font-black tracking-tight mb-2">daito | 勝率40%・上位2.3%のFXプロップ攻略</p>
        <p class="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
          Fintokei上位2.3%（2587人中61位）のFXトレーダーが、プロップファーム攻略・EA開発・相場分析をSubstackで毎週無料公開中。
        </p>
        <div class="flex gap-3 flex-wrap">
          <a href="https://daitodaison.substack.com/" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5">
            📬 Substack購読
          </a>
          <a href={`/${lang}/blog/microcms`}
             class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5">
            📖 攻略ブログ
          </a>
        </div>
      </div>

      <!-- コンテンツ -->
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">コンテンツ</p>
        <ul class="space-y-3 text-sm">
          <li><a href={`/${lang}/blog/microcms`} class="text-zinc-300 hover:text-white transition-colors">攻略ブログ</a></li>
          <li><a href={`/${lang}/sitemap-page/`} class="text-zinc-300 hover:text-white transition-colors">サイトマップ</a></li>
          <li>
            <a href="https://www.fintokei.com/jp/?affiliate=64" target="_blank" rel="noopener" class="text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-2">
              Fintokei登録
              <span class="text-[10px] bg-purple-600 text-white px-1.5 py-0.5 rounded font-bold">おすすめ</span>
            </a>
          </li>
          <li><a href="https://my.funded7.com/ja/sign-up?affiliateId=111" target="_blank" rel="noopener" class="text-zinc-300 hover:text-white transition-colors">FUNDED7登録</a></li>
          <li><a href="https://trader.ftmo.com/?affiliates=fEZqWBlMdBrTtxUjIJYD" target="_blank" rel="noopener" class="text-zinc-300 hover:text-white transition-colors">FTMO登録</a></li>
        </ul>
      </div>

      <!-- 法的情報＋ソーシャル -->
      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">法的情報</p>
        <ul class="space-y-3 text-sm mb-8">
          <li><a href="/privacy" class="text-zinc-300 hover:text-white transition-colors">プライバシーポリシー</a></li>
          <li><a href="/terms" class="text-zinc-300 hover:text-white transition-colors">利用規約</a></li>
        </ul>
        <p class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">フォロー</p>
        <div class="flex flex-wrap gap-2">
          <a href={ACTION_LINKS.social.twitter} target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" aria-label="X">
            <BrandIcon icon="x" className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href={ACTION_LINKS.social.youtube} target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" aria-label="YouTube">
            <BrandIcon icon="youtube" className="w-5 h-5" strokeWidth={1.5} />
          </a>
          
          <a href={ACTION_LINKS.social.linkedin} target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" aria-label="LinkedIn">
            <BrandIcon icon="linkedin" className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href={ACTION_LINKS.social.note} target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" aria-label="note">
            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"><rect width="24" height="24" rx="6"/><text x="12" y="16.5" font-size="12" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">n</text></svg>
          </a>
          <a href={ACTION_LINKS.social.substack} target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10" aria-label="Substack">
            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
          </a>
        </div>
      </div>

    </div>

    <!-- コピーライト -->
    <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-zinc-500 text-sm">© {today.getFullYear()} daitodaison. All rights reserved.</p>
      <p class="text-zinc-600 text-xs">本サイトはアフィリエイト広告を含みます</p>
    </div>
  </div>

</footer>
```

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

## File: src/components/layout/PageHeader.astro
```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div class="pt-32 pb-12 text-center relative overflow-hidden">
  <div class="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
      <div class="w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px]"></div>
  </div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-6">
    <h1 class="text-3xl md:text-5xl font-display font-bold mb-6" set:html={title} />
    {description && (
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </div>
</div>
```

## File: src/components/layout/Schema.astro
```astro
---
interface Props {
  item: Record<string, any>;
}

const { item } = Astro.props;
---

<script is:inline type="application/ld+json" set:html={JSON.stringify(item)} />
```

## File: src/components/layout/ScrollProgress.astro
```astro
---
---
<div id="scroll-progress" class="fixed top-0 left-0 h-1 bg-primary z-100 transition-all duration-150 ease-out" style="width: 0%"></div>

<script>
  const progressBar = document.getElementById('scroll-progress');
  
  const updateProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollPx / winHeightPx) * 100;
    
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }
  };

  window.addEventListener('scroll', updateProgress);
  // Initial check
  updateProgress();
</script>
```

## File: src/components/layout/Section.astro
```astro
---
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface Props {
  class?: string;
  id?: string;
  variant?: 'default' | 'boxed';
}

const { class: className, id, variant = 'default' } = Astro.props;
---

<section id={id} class={twMerge(clsx(
  "relative overflow-hidden",
  variant === 'default' && "py-24",
  variant === 'boxed' && "py-16 bg-white/5 rounded-3xl my-12 mx-6",
  className
))}>
  <slot />
</section>
```

## File: src/components/layout/SEO.astro
```astro
---
interface Props {
  title: string;
  description: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  article?: boolean;
  noindex?: boolean;
  nofollow?: boolean;
}

const { title, description, image, imageWidth, imageHeight, imageAlt, article = false, noindex = false, nofollow = false } = Astro.props;
import { siteConfig, ACTION_LINKS } from '~/site.config';
const locale = Astro.params.lang || 'en';
const canonicalURL = new URL(Astro.url.pathname, Astro.site).toString();
const twitterHandle = ACTION_LINKS.social.twitter ? `@${new URL(ACTION_LINKS.social.twitter).pathname.replace(/^\//, '')}` : undefined;

const ogImageUrl = image || siteConfig.ogImage;

const robots = [
  noindex ? 'noindex' : 'index',
  nofollow ? 'nofollow' : 'follow'
].join(', ');
---

<!-- Global Metadata -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="icon" type="image/png" href="/site-logo.png" />

<link rel="apple-touch-icon" href="/site-logo.png" />
<meta name="generator" content={Astro.generator} />

<!-- Robots -->
<meta name="robots" content={robots} />

<!-- Canonical URL -->
<link rel="canonical" href={canonicalURL} />

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={article ? 'article' : 'website'} />
<meta property="og:url" content={Astro.url.toString()} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(ogImageUrl, Astro.url).toString()} />
{imageWidth && <meta property="og:image:width" content={imageWidth.toString()} />}
{imageHeight && <meta property="og:image:height" content={imageHeight.toString()} />}
<meta property="og:image:alt" content={imageAlt || title} />
<meta property="og:site_name" content={siteConfig.name} />
<meta property="og:logo" content={new URL(siteConfig.logo.src, Astro.url).toString()} />
<meta property="og:locale" content={locale} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={Astro.url.toString()} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(ogImageUrl, Astro.url).toString()} />
{twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
{twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
```

## File: src/pages/[lang]/404.astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import { languages } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params;
const t = useTranslations(lang);
---

<Layout title={t['404.title']} description={t['404.description']}>
  <div class="min-h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
      <!-- Background Effect -->
      <div class="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div class="w-[600px] h-[600px] bg-red-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div class="relative z-10 px-6">
        <h1 class="text-9xl font-display font-bold text-black/10 dark:text-white/10 mb-4 select-none">404</h1>
        <h2 class="text-3xl md:text-5xl font-display font-bold mb-6">{t['404.heading']}</h2>
        <p class="text-xl text-muted-foreground max-w-lg mx-auto mb-10">
            {t['404.description']}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`/${lang}`}
              class="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              {t['404.backHome']}
            </a>
            <a 
              href={`/${lang}/contact`}
              class="px-8 py-3 bg-foreground/5 text-foreground font-medium rounded-full hover:bg-foreground/10 transition-all border border-foreground/10 dark:text-white dark:border-white/10 dark:hover:bg-white/10"
            >
              {t['404.reportIssue']}
            </a>
        </div>
      </div>
  </div>
</Layout>
```

## File: src/pages/[lang]/about.astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import { languages } from '~/i18n/ui';
export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
const { lang } = Astro.params;
---
<Layout title="daitoのプロフィール | daitodaison" description="Fintokei上位2.3%のFXプロップトレーダー。勝率40%のスナイパー型手法でプロップファームを攻略中。">

  <section class="bg-gradient-to-br from-zinc-900 via-zinc-900 to-blue-950 text-white py-20 px-4">
    <div class="max-w-3xl mx-auto text-center">
      <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400/40 shadow-xl mx-auto mb-6">
        <img src="/site-logo.png" alt="daito" class="w-full h-full object-cover brightness-0 invert" />
      </div>
      <h1 class="text-3xl md:text-4xl font-black mb-2">daito</h1>
      <p class="text-blue-300 font-bold mb-6">FXプロップトレーダー / コンテンツクリエイター</p>
      <div class="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-8">
        <div class="bg-white/5 border border-white/10 rounded-xl p-3">
          <p class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500">2.3%</p>
          <p class="text-[10px] text-zinc-400 mt-1">Fintokei上位</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-xl p-3">
          <p class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500">40%</p>
          <p class="text-[10px] text-zinc-400 mt-1">勝率</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-xl p-3">
          <p class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500">6年</p>
          <p class="text-[10px] text-zinc-400 mt-1">FX経験</p>
        </div>
      </div>
      <a href="https://daitodaison.substack.com" target="_blank" rel="noopener"
         class="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl transition-colors">
        Substackで読む（無料）
      </a>
    </div>
  </section>

  <section class="py-16 px-4">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-black mb-8 pb-2 border-b-2 border-blue-500 inline-flex items-center gap-2">自己紹介</h2>
      <div class="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <p>製造業・営業・音楽キュレーション・転売・Webライター・SEOブログ・イラスト・小説執筆・YouTubeスクリプト・ゲーム開発など、多様なキャリアを経てFXトレードへ転向。</p>
        <p>「不透明な評価基準に振り回されない、自分で完結する収入」を求めた結果、プロップトレードにたどり着きました。</p>
        <p>現在はFintokeiデモ大会で上位2.3%（61位/2587人）を獲得した手法をベースに、プロップファーム攻略の情報をSubstackとこのブログで発信しています。</p>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 bg-zinc-50 dark:bg-zinc-800/30">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-black mb-8 pb-2 border-b-2 border-blue-500 inline-flex items-center gap-2">実績</h2>
      <div class="space-y-4">
        <div class="flex gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
          <span class="text-2xl shrink-0">🥇</span>
          <div>
            <p class="font-bold text-zinc-900 dark:text-white">Fintokeiデモ大会 上位2.3%</p>
            <p class="text-sm text-zinc-500 mt-1">2587人中61位。勝率40%のスナイパー型手法で達成。</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
          <span class="text-2xl shrink-0">📈</span>
          <div>
            <p class="font-bold text-zinc-900 dark:text-white">デモ口座10倍成長</p>
            <p class="text-sm text-zinc-500 mt-1">同手法でデモ口座を10倍に増やすことに成功。</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
          <span class="text-2xl shrink-0">✍️</span>
          <div>
            <p class="font-bold text-zinc-900 dark:text-white">756記事以上のFX攻略コンテンツ</p>
            <p class="text-sm text-zinc-500 mt-1">Fintokei・FTMO・Funded7などプロップファーム攻略記事を随時更新中。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-4">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-black mb-8 pb-2 border-b-2 border-blue-500 inline-flex items-center gap-2">発信媒体</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="https://daitodaison.substack.com" target="_blank" rel="noopener"
           class="flex gap-3 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-400 transition-colors">
          <span class="text-2xl shrink-0">📧</span>
          <div>
            <p class="font-bold text-zinc-900 dark:text-white">Substack</p>
            <p class="text-xs text-zinc-500 mt-1">トレード日誌・手法解説をニュースレターで配信</p>
          </div>
        </a>
        <a href={`/${lang}/blog/`}
           class="flex gap-3 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-blue-400 transition-colors">
          <span class="text-2xl shrink-0">📝</span>
          <div>
            <p class="font-bold text-zinc-900 dark:text-white">このブログ</p>
            <p class="text-xs text-zinc-500 mt-1">プロップファーム攻略・FX手法の記事756件以上</p>
        </div>
        </a>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
    <div class="max-w-xl mx-auto">
      <p class="text-xl font-black mb-3">Fintokeiデモ大会2.3%の手法、無料で読めます</p>
      <p class="text-blue-100 text-sm mb-6">Substackで毎週トレード記録と攻略情報を発信中</p>
      <a href="https://daitodaison.substack.com" target="_blank" rel="noopener"
         class="inline-block bg-white text-blue-700 font-black px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
        無料で購読する
      </a>
    </div>
  </section>

</Layout>
```

## File: src/pages/[lang]/blog/[page].astro
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
  const paths = [];
  for (const lang of ["ja", "en"]) {
    for (let page = 2; page <= totalPages; page++) {
      const start = (page - 1) * PER_PAGE;
      const posts = allPosts.slice(start, start + PER_PAGE);
      paths.push({
        params: { lang, page: String(page) },
        props: { posts, currentPage: page, totalPages, totalPosts: allPosts.length, perPage: PER_PAGE },
      });
    }
  }
  return paths;
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
<Layout title={`Blog - ${currentPage}ページ目`} description={t["blog.microcms.desc"]}>
  <PageHeader title="Blog" description={t["blog.microcms.desc"]} />
  <Container as="section" class="pb-24">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {posts.map((post: any) => (
        <Card href={`/${lang}/blog/microcms/${post.id}`} class="p-0 overflow-hidden hover:shadow-primary/10 hover:-translate-y-1 block h-full group">
          <div class="relative aspect-video w-full overflow-hidden bg-muted">
            {post.eyecatch ? (
              <img src={post.eyecatch.split("|")[0].replace("https://daitodaison.pages.dev/wp-content","https://www.dysonblog.org/wp-content").replace("http://","https://")} alt={post.title} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
      {totalPosts}件中 {(currentPage - 1) * perPage + 1}〜{Math.min(currentPage * perPage, totalPosts)}件を表示
    </p>
  </Container>
</Layout>
```

## File: src/pages/[lang]/blog/[page].astro.tmp
```
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
  const response = await client.get({ endpoint: "blogs", queries: { limit: 100 } });
  const allPosts = response.contents;
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
---
<Layout title="Blog" description={t["blog.microcms.desc"]}>
  <PageHeader title="Blog" description={t["blog.microcms.desc"]} />
  <Container as="section" class="pb-24">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {posts.map((post: any) => (
        <Card href={`/${lang}/blog/microcms/${post.id}`} class="p-0 overflow-hidden hover:shadow-primary/10 hover:-translate-y-1 block h-full group">
          <div class="relative aspect-video w-full overflow-hidden bg-muted">
            {post.eyecatch ? (
              <img src={post.eyecatch} alt={post.title} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <a href={page === 1 ? `/${lang}/blog/` : `/${lang}/blog/${page}/`} class={page === currentPage ? "px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white" : "px-4 py-2 rounded-lg text-sm font-medium border border-border hover:bg-muted"} aria-current={page === currentPage ? "page" : undefined}>
            {page}
          </a>
        ))}
        <a href={`/${lang}/blog/2/`} class="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium">
          次へ →
        </a>
      </nav>
    )}

    <p class="text-center text-sm text-muted-foreground mt-4">
      {totalPosts}件中 1〜{Math.min(perPage, totalPosts)}件を表示
    </p>
  </Container>
</Layout>
```

## File: src/pages/[lang]/blog/author/[author].astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import PageHeader from '~/components/layout/PageHeader.astro';
import BlogCard from '~/components/blog/BlogCard.astro';
import Container from '~/components/ui/Container.astro';
import Grid from '~/components/ui/Grid.astro';
import { getCollection, getEntry } from 'astro:content';
import { languages, defaultLang } from '~/i18n/ui';
import { isRtl, useTranslations } from '~/i18n/utils';
import type { CollectionEntry } from 'astro:content';

export async function getStaticPaths() {
  const allPosts = await getCollection('blog');
  const allAuthors = await getCollection('authors');
  
  // Get unique author slugs (e.g., 'joseph-cooper', 'tars')
  const uniqueAuthorSlugs = [...new Set(allAuthors.map(a => a.id.split('/').slice(1).join('/')))];

  return Object.keys(languages).flatMap((lang) => {
    return uniqueAuthorSlugs.map((authorSlug) => {
      // Filter posts by this author and language
      const filteredPosts = allPosts
        .filter((post) => post.id.startsWith(`${lang}/`) && post.data.author === authorSlug)
        .sort((a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

      return {
        params: { lang, author: authorSlug },
        props: { posts: filteredPosts, authorSlug },
      };
    });
  });
}

const { posts, authorSlug } = Astro.props;
const { lang } = Astro.params;
const t = useTranslations(lang);

// Get author details with fallback
let authorEntry = await getEntry('authors', `${lang}/${authorSlug}`);
if (!authorEntry && lang !== defaultLang) {
    authorEntry = await getEntry('authors', `${defaultLang}/${authorSlug}`);
}

const authorName = authorEntry ? authorEntry.data.name : authorSlug;
const authorDesc = authorEntry ? authorEntry.data.description : "";
---

<Layout title={`${authorName} - Blog`} description={`Articles written by ${authorName}`}>
  <Container class="pt-32">
    <a href={`/${lang}/blog`} class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`w-4 h-4 ${isRtl(lang) ? 'rotate-180' : ''}`}><path d="m15 18-6-6 6-6"/></svg>
        {t['blog.back']}
    </a>
  </Container>

  <PageHeader 
      title={authorName}
      description={authorDesc || t['blog.hero.subtitle']}
  />

  <Container as="section" class="pb-24">
      {posts.length > 0 ? (
          <Grid cols={3} class="mb-16">
            {posts.map((post: CollectionEntry<'blog'>) => (
              <BlogCard 
                 title={post.data.title}
                 description={post.data.description}
                 pubDate={post.data.pubDate}
                 heroImage={post.data.heroImage}
                 slug={`/${lang}/blog/${post.id.split('/').slice(1).join('/').replace(/\.[^/.]+$/, "")}`}
                 isVideo={post.data.isVideo}
                 author={post.data.author}
                 audioUrl={post.data.audioUrl}
              />
            ))}
          </Grid>
      ) : (
          <div class="text-center py-20">
              <p class="text-xl text-muted-foreground">{t['blog.noPosts'] || "No posts found for this author."}</p>
          </div>
      )}
  </Container>
</Layout>
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

## File: src/pages/[lang]/blog/microcms.astro
```astro
---
export const prerender = true;
import Layout from "~/layouts/Layout.astro";
import { client } from "~/library/microcms";
import { languages } from "~/i18n/ui";
import { useTranslations } from "~/i18n/utils";
export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
const { lang } = Astro.params;
const t = useTranslations(lang);
let posts: any[] = [];
let off = 0;
while (true) {
  const res = await client.get({ endpoint: 'blogs', queries: { limit: 100, offset: off, fields: 'id,title,eyecatch,updatedAt,category,tags', orders: '-updatedAt'} });
  posts = posts.concat(res.contents);
  if (posts.length >= res.totalCount) break;
  off += 100;
}
// カテゴリー・タグ一覧を抽出
const categories = [...new Set(posts.map((p:any) => p.category?.name).filter(Boolean))];
const tags = [...new Set(posts.flatMap((p:any) => (p.tags || '').split(',').map((t:string) => t.trim()).filter(Boolean)))];
---
<Layout title="ブログ記事一覧" description="プロップファーム攻略記事の一覧">
  <div class="max-w-5xl mx-auto px-4 pt-32 pb-20">
    <h1 class="text-2xl font-bold mb-6">{t["blog.title"] || "ブログ"}</h1>

    <!-- フィルターUI -->
    <div class="mb-8 space-y-3">
      <div class="flex flex-wrap gap-2 items-center">
        <span class="text-xs font-bold text-zinc-500 dark:text-zinc-400 w-12">📂</span>
        <button onclick="filterPosts(null, null)"
          id="filter-all"
          class="filter-btn text-xs px-3 py-1 rounded-full border border-blue-400 bg-blue-500 text-white font-medium transition-all">
          すべて
        </button>
        {categories.map((cat) => (
          <button onclick={`filterPosts('${cat}', null)`}
            data-category={cat}
            class="filter-btn text-xs px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-600 transition-all">
            {cat}
          </button>
        ))}
      </div>
      {tags.length > 0 && (
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs font-bold text-zinc-500 dark:text-zinc-400 w-12"># </span>
          {tags.map((tag) => (
            <button onclick={`filterPosts(null, '${tag}')`}
              data-tag={tag}
              class="filter-btn text-xs px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-300 hover:border-purple-400 hover:text-purple-600 transition-all">
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>

    <!-- 件数表示 -->
    <p id="post-count" class="text-xs text-zinc-400 mb-4">{posts.length}件</p>

    <div id="post-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post: any) => {
        const raw = post.eyecatch || "";
        const imgUrl = raw.split("|")[0].replace("https://daitodaison.pages.dev/wp-content", "https://dysonblog.org/wp-content").replace("http://", "https://");
        const postTags = (post.tags || '').split(',').map((t: string) => t.trim()).filter(Boolean);
        return (
          <a href={`/${lang}/blog/microcms/${post.id}`}
             data-category={post.category?.name || ''}
             data-tags={postTags.join(',')}
             class="post-card group block bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:border-blue-400 hover:shadow-lg transition-all hover:-translate-y-1">
            <div class="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-700">
              {imgUrl ? (
                <img src={imgUrl} alt={post.title} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div class="h-full w-full flex items-center justify-center">
                  <span class="text-4xl"><img src="/og-image.webp" alt={post.title} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></span>
                </div>
              )}
            </div>
            <div class="p-4">
              {post.category?.name && (
                <span class="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium mb-2 inline-block">
                  {post.category.name}
                </span>
              )}
              {postTags.length > 0 && (
                <div class="flex flex-wrap gap-1 mb-2">
                  {postTags.map((tag: string) => (
                    <span class="text-[10px] bg-zinc-100 dark:bg-white/10 text-zinc-500 dark:text-zinc-400 px-1.5 py-0.5 rounded-full">#{tag}</span>
                  ))}
                </div>
              )}
              <h2 class="text-sm font-bold text-zinc-900 dark:text-white line-clamp-3 group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h2>
            </div>
          </a>
        );
      })}
    </div>

    <p id="no-results" class="hidden text-center text-zinc-400 py-20">該当する記事がありません</p>
  </div>

  <script is:inline>
  function filterPosts(category, tag) {
    var cards = document.querySelectorAll('.post-card');
    var allBtn = document.getElementById('filter-all');
    var btns = document.querySelectorAll('.filter-btn');
    var count = 0;

    // ボタンのスタイルリセット
    btns.forEach(function(b) {
      b.classList.remove('border-blue-400', 'bg-blue-500', 'text-white', 'border-purple-400', 'bg-purple-500');
      b.classList.add('border-zinc-300', 'dark:border-zinc-600', 'text-zinc-600', 'dark:text-zinc-300');
    });

    if (!category && !tag) {
      allBtn.classList.add('border-blue-400', 'bg-blue-500', 'text-white');
      allBtn.classList.remove('border-zinc-300', 'text-zinc-600');
    } else if (category) {
      var btn = document.querySelector('[data-category="' + category + '"]');
      if (btn) { btn.classList.add('border-blue-400', 'bg-blue-500', 'text-white'); btn.classList.remove('border-zinc-300', 'text-zinc-600'); }
    } else if (tag) {
      var btn = document.querySelector('[data-tag="' + tag + '"]');
      if (btn) { btn.classList.add('border-purple-400', 'bg-purple-500', 'text-white'); btn.classList.remove('border-zinc-300', 'text-zinc-600'); }
    }

    cards.forEach(function(card) {
      var show = true;
      if (category && card.dataset.category !== category) show = false;
      if (tag) {
        var cardTags = (card.dataset.tags || '').split(',');
        if (!cardTags.includes(tag)) show = false;
      }
      card.style.display = show ? '' : 'none';
      if (show) count++;
    });

    document.getElementById('post-count').textContent = count + '件';
    document.getElementById('no-results').classList.toggle('hidden', count > 0);
  }
  </script>
</Layout>
```

## File: src/pages/[lang]/blog/microcms/[id].astro
```astro
---
export const prerender = true;
import Layout from "~/layouts/Layout.astro";
import ScrollProgress from "~/components/layout/ScrollProgress.astro";
import { client } from "~/library/microcms";
import { useTranslations } from "~/i18n/utils";
import { languages } from "~/i18n/ui";
import translate from "translate";

translate.engine = "google";

export async function getStaticPaths() {
  let posts: any[] = [];
  let offset = 0;
  while (true) {
    const response = await client.get({ endpoint: "blogs", queries: { limit: 100, offset, fields: "id,title,eyecatch,content,category,tags,publishedAt,updatedAt" } });
    posts = posts.concat(response.contents);
    if (posts.length >= response.totalCount) break;
    offset += 100;
  }
  // allPostsはサイドバー用に軽量版を別取得
  let lightPosts: any[] = [];
  let offset2 = 0;
  while (true) {
    const res2 = await client.get({ endpoint: "blogs", queries: { limit: 100, offset: offset2, fields: "id,title,eyecatch,category,updatedAt" } });
    lightPosts = lightPosts.concat(res2.contents);
    if (lightPosts.length >= res2.totalCount) break;
    offset2 += 100;
  }
  return posts.flatMap((post: any) =>
    Object.keys(languages).map((lang) => ({
      params: { lang, id: post.id },
      props: { post, allPosts: lightPosts },
    }))
  );
}

const { post, allPosts } = Astro.props;
const { lang } = Astro.params;
const t = useTranslations(lang);

async function translateHtml(html: string, to: string) {
  if (!html) return "";
  try {
    const ph: string[] = [];
    let n = 0;
    const masked = html.replace(/<[^>]+>/g, (m) => { ph.push(m); return " [[" + (n++) + "]] "; });
    const tr = await translate(masked, { from: "ja", to });
    return tr.replace(/\[\[([0-9]+)\]\]/g, (_: string, i: string) => ph[+i] || _);
  } catch { return html; }
}

let displayTitle = post.title;
const rawContent = post.content || '';
let displayContent = '';
// Extract body content and styles from full HTML or partial HTML
const styleMatches = rawContent.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
const bodyStart = rawContent.toLowerCase().indexOf('<body');
const bodyEnd = rawContent.toLowerCase().lastIndexOf('</body>');
const bodyContent = bodyStart >= 0 && bodyEnd > bodyStart
  ? rawContent.slice(rawContent.indexOf('>', bodyStart) + 1, bodyEnd)
  : rawContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<!DOCTYPE[^>]*>/gi, '').replace(/<\/?html[^>]*>/gi, '').replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '');
let styleTag = '';
if (styleMatches.length > 0) {
  const allCss = styleMatches.map((s: string) => s.replace(/<\/?style[^>]*>/gi, '')).join('\n');
  const scopedCss = allCss.replace(/([^{}]+)\{/g, (m: string, sel: string) => {
    if (sel.trim().startsWith('@')) return m;
    const scoped = sel.split(',').map((s: string) => '.article-body ' + s.trim()).join(', ');
    return scoped + ' {';
  });
  styleTag = '<style>' + scopedCss + '</style>';
}
function addImageFallback(html: string) {
  return html.replace(/<img([^>]*)src="([^"]+)"([^>]*)>/gi, (match, before, src, after) => {
    if (/onerror=/i.test(before) || /onerror=/i.test(after)) return match;
    let fallback = "";
    if (src.includes("daitodaison.pages.dev/wp-content")) {
      fallback = src.replace("https://daitodaison.pages.dev/wp-content", "https://www.dysonblog.org/wp-content");
    } else if (src.includes("dysonblog.org/wp-content") && !src.includes("daitodaison.pages.dev")) {
      fallback = src.replace(/https:\/\/(www\.)?dysonblog\.org\/wp-content/, "https://daitodaison.pages.dev/wp-content");
    }
    if (!fallback) return match;
    return '<img' + before + 'src="' + src + '"' + after + ' onerror="if(!this.dataset.fallback){this.dataset.fallback=1;this.src=\'' + fallback + '\';}" >';
  });
}

const processedBody = bodyContent
  .replace(/https:\/\/daitodaison\.pages\.dev\/wp-content/g, "https://www.dysonblog.org/wp-content")
  .replace(/https:\/\/i0\.wp\.com\/www\.dysonblog\.org/g, "https://www.dysonblog.org");
displayContent = styleTag + processedBody;

if (false && lang === "en") {
  try {
    displayTitle = await translate(post.title, { from: "ja", to: "en" });
    const cleanedForTranslate = (post.content || '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    displayContent = await translateHtml(cleanedForTranslate, "en");
  } catch {}
}

function extractHeadings(html: string) {
  const result: { id: string; text: string; level: number }[] = [];
  const re = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
  let m; let n = 0;
  while ((m = re.exec(html)) !== null) {
    result.push({ id: "toc-" + (n++), text: m[2].replace(/<[^>]+>/g, ""), level: +m[1] });
  }
  return result;
}

function addIds(html: string, hs: { id: string }[]) {
  let i = 0;
  return html.replace(/<h([23])([^>]*)>(.*?)<\/h[23]>/gi,
    (_: string, lv: string, attrs: string, inner: string) => {
      const h = hs[i++];
      if (!h) return _;
      const clean = attrs.replace(/\s*id="[^"]*"/g, "");
      return "<h" + lv + clean + " id=\"" + h.id + "\">" + inner + "</h" + lv + ">";
    });
}

const headings = extractHeadings(displayContent);
displayContent = addIds(displayContent, headings);
const otherPosts = (allPosts as any[]).filter((p: any) => p.id !== post.id).slice(0, 3);
---

<Layout title={displayTitle} description={displayTitle} image={post.eyecatch} imageAlt={displayTitle} article={true}>
  <ScrollProgress />
  <div class="max-w-7xl mx-auto px-4 pt-32 pb-20 bg-background">

    <div class="mb-6">
      <a href={"/" + lang + "/blog/microcms"} class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {t["blog.back"]}
      </a>
    </div>

    <div class="flex gap-8 items-start">

<!-- 左サイドバー -->

<aside class="hidden xl:flex xl:flex-col w-56 shrink-0 gap-3" style="align-self:start; position:sticky; top:9rem; max-height:calc(100vh - 10rem);">


  <!-- プロフィールカード -->
    <div class="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 shrink-0">
      <div class="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-4 pt-5 pb-8 relative overflow-hidden">
        <div class="absolute inset-0 opacity-20" style="background-image:radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)"></div>
        <div class="relative z-10 flex flex-col items-center text-center">
          <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-white/40 shadow-lg mb-3">
            <img src="/site-logo.png" alt="daito" class="w-full h-full object-cover" />
          </div>
          <p class="text-white font-bold text-sm tracking-wide">daito</p>
          <p class="text-blue-200 text-[10px] mt-0.5 font-medium">FXプロップトレーダー</p>
        </div>
      </div>
      <div class="px-4 py-3 -mt-4 relative z-10">
        <div class="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-100 dark:border-white/10 px-3 py-2.5 mb-3">
          <div class="grid grid-cols-3 gap-1 text-center">
            <div>
              <p class="text-primary font-black text-sm leading-none">40%</p>
              <p class="text-[9px] text-zinc-400 mt-0.5 leading-tight">勝率</p>
            </div>
            <div class="border-x border-zinc-100 dark:border-white/10">
              <p class="text-primary font-black text-sm leading-none">2.3%</p>
              <p class="text-[9px] text-zinc-400 mt-0.5 leading-tight">上位</p>
            </div>
            <div>
              <p class="text-primary font-black text-sm leading-none">6年</p>
              <p class="text-[9px] text-zinc-400 mt-0.5 leading-tight">経験</p>
            </div>
          </div>
        </div>
        <p class="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">製造業・営業を経てFXへ転向。Fintokei上位2.3%（61位/2587人）のスナイパー型手法で攻略中。</p>
        <a href="/ja/about" class="block text-center text-[11px] font-bold text-primary border border-primary/30 rounded-lg py-1.5 hover:bg-primary hover:text-white transition-all duration-200">
          プロフィール詳細 →
        </a>
      </div>
    </div>

     <!-- Fintokei バナー（常に最上部・固定・光るアニメーション） -->
  <a href="https://www.fintokei.com/jp/?affiliate=64" target="_blank" rel="noopener"
     class="group block relative rounded-2xl overflow-hidden shrink-0 sidebar-glow-banner">
    <div class="absolute inset-0 sidebar-gradient-bg"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,255,255,0.15),transparent_60%)]"></div>
    <div class="sidebar-shine"></div>
    <div class="relative z-10 p-4">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-lg animate-bounce-slow">🏆</span>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-widest text-purple-200">著者イチオシ・上位2.3%</p>
          <p class="text-sm font-black text-white leading-tight">Fintokei</p>
        </div>
      </div>
      <p class="text-[11px] text-purple-100 leading-snug mb-3">日本初プロップ・著者が実際に上位2.3%を達成した実績あり</p>
      <span class="block text-center bg-white text-purple-700 font-black text-xs py-2.5 rounded-xl group-hover:bg-purple-50 group-hover:scale-[1.02] transition-all shadow-lg">
        無料で始める →
      </span>
    </div>
  </a>

  <!-- タブ＋記事リスト -->
  <div class="flex items-center gap-1.5 mb-3 shrink-0">
      <span class="text-base">🆕</span>
      <p class="text-xs font-bold text-zinc-700 dark:text-zinc-300">最新記事</p>
    </div>

    <div data-sidebar class="flex-1 min-h-0 overflow-y-auto" style="scrollbar-width:thin;">
      <ul class="space-y-0.5" id="sidebar-post-list">
        {(allPosts as any[]).slice(0, 12).map((p: any, idx: number) => {
          const isActive = p.id === post.id;
          return (
            <li data-category={p.category?.name || ""}>
              <a href={"/" + lang + "/blog/microcms/" + p.id}
                 class={"flex items-start gap-2 group rounded-lg px-2 py-1.5 hover:bg-primary/5 dark:hover:bg-white/5 transition-all " + (isActive ? "opacity-50 pointer-events-none" : "")}>
                <span class="text-[10px] font-black text-primary/40 group-hover:text-primary shrink-0 mt-0.5 transition-colors sidebar-item-num">{String(idx + 1).padStart(2, "0")}</span>
                <span class="flex-1 min-w-0">
                  <span class="block text-[11px] leading-snug font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-primary transition-colors line-clamp-2">{p.title}</span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 mt-1 text-zinc-300 dark:text-zinc-600 group-hover:text-primary group-hover:translate-x-0.5 transition-all"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </li>
          );
        })}
      </ul>

      <!-- カテゴリー絞り込みタグ -->
      {(() => {
        const cats = Array.from(new Set((allPosts as any[]).map((p: any) => p.category?.name).filter(Boolean)));
        return cats.length > 0 ? (
          <div class="mt-3 pt-3 border-t border-gray-200 dark:border-white/10">
            <p class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">カテゴリーで探す</p>
            <div class="flex flex-wrap gap-1.5">
              <button data-cat-filter="" class="sidebar-cat-btn active text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary text-white transition-all">すべて</button>
              {cats.map((c: any) => (
                <button data-cat-filter={c} class="sidebar-cat-btn text-[10px] font-bold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 hover:bg-primary/10 hover:text-primary transition-all">{c}</button>
              ))}
            </div>
          </div>
        ) : null;
      })()}

      <a href={"/" + lang + "/blog/microcms"}
         class="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-bold text-primary hover:bg-primary/5 dark:hover:bg-white/5 rounded-lg py-1.5 transition-all border border-primary/20">
        記事一覧を見る
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>


</aside>

      <!-- 本文 -->
      <main class="min-w-0 flex-1">
{(() => {
          const rawEye = post.eyecatch || "";
          const eyeUrl = rawEye.split("|")[0].replace("https://daitodaison.pages.dev/wp-content","https://dysonblog.org/wp-content").replace("http://","https://");
          return eyeUrl ? (
            <div class="rounded-xl overflow-hidden mb-6 border border-black/10 dark:border-white/10 shadow-md">
              <img src={eyeUrl} alt={displayTitle} loading="eager" class="w-full object-cover aspect-video" />
            </div>
          ) : null;
        })()}
        <h1 class="text-xl md:text-2xl font-bold mb-4 leading-snug text-zinc-900 dark:text-white">
          {displayTitle}
        </h1>
        <div class="flex flex-wrap items-center gap-3 mb-8 text-xs text-gray-500 dark:text-gray-400">
          {post.updatedAt && (
            <span class="flex items-center gap-1">
              🕒 {new Date(post.updatedAt).toLocaleDateString("ja-JP", {year:"numeric",month:"long",day:"numeric"})}更新
            </span>
          )}
          {post.category?.name && (
            <a href={"/" + lang + "/blog/?category=" + post.category.name} class="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium hover:bg-blue-200 transition-colors">
  📂 {post.category.name}
</a>
          )}
          {post.tags && post.tags.split(",").map((tag: string) => (
            <span class="bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 px-2 py-0.5 rounded-full">
              # {tag.trim()}
            </span>
          ))}
        </div>
        <div class="article-body" set:html={displayContent} />

<!-- プロップファーム強化CTA -->
        <div class="mt-16 bg-zinc-950 rounded-3xl overflow-hidden">
          <!-- Fintokei メイン -->
          <div class="relative p-8 bg-gradient-to-br from-purple-900/80 via-zinc-900 to-blue-950 border border-purple-500/30">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(139,92,246,0.1),transparent_60%)]"></div>
            <div class="relative z-10 flex flex-col md:flex-row gap-6 items-center">
              <div class="flex-1 text-white">
                <div class="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-3 py-1 text-xs font-bold text-purple-300 mb-3">
                  🏆 著者イチオシ・最も稼ぎやすい
                </div>
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-3xl">🇯🇵</span>
                  <h3 class="text-2xl font-black">Fintokei</h3>
                </div>
                <p class="text-zinc-400 text-sm mb-4">日本初の本格派プロップファーム。著者がFintokei上位2.3%を達成した実績あり。</p>
                <ul class="grid grid-cols-2 gap-1.5 text-xs text-zinc-300 mb-5">
                  <li class="flex items-center gap-1.5"><span class="text-green-400">✓</span> 利益配分80〜100%</li>
                  <li class="flex items-center gap-1.5"><span class="text-green-400">✓</span> 最大5,000万円</li>
                  <li class="flex items-center gap-1.5"><span class="text-green-400">✓</span> MT4・MT5・TradingView対応</li>
                  <li class="flex items-center gap-1.5"><span class="text-yellow-400 font-bold">✓</span> <span class="text-yellow-300 font-bold">参加費全額返金中</span></li>
                </ul>
                <a href="https://www.fintokei.com/jp/?affiliate=64" target="_blank" rel="noopener"
                   class="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-black px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-500/20">
                  無料で始める →
                </a>
              </div>
              <div class="shrink-0 text-center bg-white/5 border border-white/10 rounded-2xl p-5 min-w-[140px]">
                <p class="text-xs text-zinc-400 mb-1">著者の実績</p>
                <p class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500">2.3%</p>
                <p class="text-xs text-zinc-400 mt-1">2587人中61位</p>
              </div>
            </div>
          </div>
          <!-- FUNDED7・FTMO サブ -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            <a href="https://my.funded7.com/ja/sign-up?affiliateId=111" target="_blank" rel="noopener"
               class="group bg-zinc-900 p-5 hover:bg-zinc-800 transition-all">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-2xl">7️⃣</span>
                <div>
                  <p class="font-black text-white text-sm">FUNDED7</p>
                  <p class="text-[11px] text-zinc-500">1フェーズ・スプレッド最狭</p>
                </div>
              </div>
              <ul class="space-y-1 text-xs text-zinc-400 mb-4">
                <li>✅ 最大6,000万円・利益配分最大90%</li>
                <li>✅ ドル円0.1pipsの極狭スプレッド</li>
              </ul>
              <span class="block text-center bg-blue-600 group-hover:bg-blue-500 text-white text-xs font-bold py-2 rounded-lg transition-all">アカウント開設 →</span>
            </a>
            <a href="https://trader.ftmo.com/?affiliates=fEZqWBlMdBrTtxUjIJYD" target="_blank" rel="noopener"
               class="group bg-zinc-900 p-5 hover:bg-zinc-800 transition-all">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-2xl">🌍</span>
                <div>
                  <p class="font-black text-white text-sm">FTMO</p>
                  <p class="text-[11px] text-zinc-500">世界最大手・300万人以上</p>
                </div>
              </div>
              <ul class="space-y-1 text-xs text-zinc-400 mb-4">
                <li>✅ 累計690億円超の出金実績</li>
                <li>✅ Trustpilot4.8・2015年創業</li>
              </ul>
              <span class="block text-center bg-zinc-700 group-hover:bg-zinc-600 text-white text-xs font-bold py-2 rounded-lg transition-all">無料トライアル →</span>
            </a>
          </div>
        </div>

        <!-- 記事下メタ情報 -->
        <div class="flex flex-wrap items-center gap-3 mt-8 mb-2 text-xs text-gray-500 dark:text-gray-400">
          {post.updatedAt && (
            <span class="flex items-center gap-1">
              🕒 {new Date(post.updatedAt).toLocaleDateString("ja-JP", {year:"numeric",month:"long",day:"numeric"})}更新
            </span>
          )}
          {post.category?.name && (
            <span class="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">
              📂 {post.category.name}
            </span>
          )}
          {post.tags && post.tags.split(",").map((tag: string) => (
            <span class="bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 px-2 py-0.5 rounded-full">
              # {tag.trim()}
            </span>
          ))}
        </div>

        <!-- Substack 強化CTA -->
        <div class="mt-8 relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-violet-700 p-8 text-white">
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(255,255,255,0.05),transparent_60%)]"></div>
          <div class="relative z-10 flex flex-col md:flex-row gap-6 items-center">
            <div class="flex-1">
              <p class="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">📬 無料ニュースレター</p>
              <h3 class="text-xl font-black mb-2 leading-tight">プロップ攻略の知見を<br/>毎週無料で受け取る</h3>
              <div class="grid grid-cols-1 gap-1.5 text-xs text-blue-100 mb-5">
                <p>📈 週次トレード日誌・実際の損益を公開</p>
                <p>🧠 プロップテストで使える相場シナリオ解説</p>
                <p>🤖 MQL5・EA開発の実践ノウハウ</p>
              </div>
              <a href="https://daitodaison.substack.com/" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 bg-white text-blue-700 font-black px-8 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all shadow-xl">
                今すぐ無料で購読する →
              </a>
              <p class="text-blue-200 text-xs mt-3">無料・いつでも解除可能・スパムなし</p>
            </div>
            <div class="shrink-0 text-center hidden md:block">
              <div class="bg-white/10 border border-white/20 rounded-2xl p-5">
                <p class="text-3xl font-black mb-1">無料</p>
                <p class="text-xs text-blue-200">登録するだけ</p>
              </div>
            </div>
          </div>
        </div>

     {otherPosts.length > 0 && (
          <div class="mt-12">
            <div class="flex items-center gap-3 mb-6">
              <span class="w-1 h-5 bg-primary rounded-full"></span>
              <h2 class="text-lg font-bold text-zinc-900 dark:text-white">関連記事</h2>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((p: any) => {
                const rawImg = p.eyecatch || "";
                const imgUrl = rawImg.split("|")[0]
                  .replace("https://daitodaison.pages.dev/wp-content", "https://dysonblog.org/wp-content")
                  .replace("http://", "https://");
                return (
                  <a href={"/" + lang + "/blog/microcms/" + p.id}
                     class="group block bg-white dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div class="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-700">
                      {imgUrl ? (
                        <img src={imgUrl} alt={p.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      ) : (
                        <div class="w-full h-full flex items-center justify-center text-3xl">📝</div>
                      )}
                    </div>
                    <div class="p-4">
                      {p.category?.name && (
                        <span class="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium mb-2 inline-block">
                          {p.category.name}
                        </span>
                      )}
                      {p.updatedAt && (
                        <p class="text-[10px] text-zinc-400 mb-1">{new Date(p.updatedAt).toLocaleDateString("ja-JP", {year:"numeric", month:"numeric", day:"numeric"})}</p>
                      )}
                      <p class="text-sm font-bold text-zinc-900 dark:text-white line-clamp-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">{p.title}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

      </main>

      <!-- 右サイドバー：目次＋固定バナー -->
     <aside class="hidden lg:block w-52 shrink-0" style="align-self: start; position: sticky; top: 9rem;">
        <div class="flex flex-col gap-4" style="max-height: calc(100vh - 9rem); overflow: hidden;">
        <div class="sticky top-28 flex flex-col gap-4" style="max-height: calc(100vh - 7rem); overflow: hidden;">
          <!-- 目次：独立スクロール -->
          {headings.length > 0 && (
            <div class="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-col min-h-0">
              <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3 shrink-0">目次</p>
              <ul class="space-y-0.5 overflow-y-auto flex-1 pr-1" id="toc-list" style="scrollbar-width:thin;">
                {headings.map((h) => (
                  <li>
                    <a href={"#" + h.id}
                       data-toc-id={h.id}
                       class={h.level === 3
                         ? "toc-link flex items-start gap-1.5 text-xs leading-snug py-1.5 px-2 pl-5 rounded-lg transition-all duration-200 text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-primary/5"
                         : "toc-link flex items-start gap-1.5 text-xs leading-snug py-1.5 px-2 rounded-lg transition-all duration-200 text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-primary/5"}>
                      <span class="toc-bar mt-1.5 shrink-0 w-0.5 h-2.5 rounded-full transition-all duration-200" style="background:transparent"></span>
                      <span>{h.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <!-- 固定バナー：Funded7＋Substack -->
          <div class="shrink-0 space-y-3">
            <a href="https://my.funded7.com/ja/sign-up?affiliateId=111" target="_blank" rel="noopener" class="block relative rounded-xl p-px bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-500/30 hover:shadow-lg transition-all">
              <div class="rounded-xl bg-gray-50 dark:bg-zinc-900 p-4">
                <p class="text-[10px] font-bold tracking-widest uppercase text-blue-500 mb-1">💰 無料トライアルあり</p>
                <p class="text-sm font-bold text-zinc-900 dark:text-white leading-snug mb-1">FUNDED7</p>
                <p class="text-[11px] text-gray-500 dark:text-gray-400 mb-3">1フェーズ〜速攻プランまで選べる。日本円対応・cTrader使用可。</p>
                <span class="block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold py-2 px-3 rounded-lg">
                  無料アカウント開設 →
                </span>
              </div>
            </a>
            <div class="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <div class="rounded-xl border border-blue-200 dark:border-blue-500/30 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-zinc-800/50 p-4">
                <p class="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">📬 無料購読</p>
                <p class="text-xs font-bold text-zinc-900 dark:text-white mb-1">Substack</p>
                <p class="text-[11px] text-gray-500 dark:text-gray-400 mb-3">プロップ攻略戦略を毎週無料配信中</p>
                <a href="https://daitodaison.substack.com/" target="_blank" rel="noopener"
                   class="block text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold py-2 px-3 rounded-lg hover:opacity-90 transition-all">
                  無料購読する →
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>

    </div>
  </div>

  <style>
    .sidebar-gradient-bg {
      background: linear-gradient(135deg, #9333ea, #6d28d9, #2563eb, #9333ea);
      background-size: 300% 300%;
      animation: sidebar-gradient-shift 6s ease infinite;
    }
    @keyframes sidebar-gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .sidebar-glow-banner {
      animation: sidebar-pulse-glow 3s ease-in-out infinite;
    }
    @keyframes sidebar-pulse-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.4); }
      50% { box-shadow: 0 0 20px 4px rgba(147, 51, 234, 0.5); }
    }
    .sidebar-shine {
      position: absolute;
      top: 0;
      left: -75%;
      width: 50%;
      height: 100%;
      background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
      transform: skewX(-20deg);
      animation: sidebar-shine-move 3.5s ease-in-out infinite;
      z-index: 5;
    }
    @keyframes sidebar-shine-move {
      0% { left: -75%; }
      40% { left: 125%; }
      100% { left: 125%; }
    }
    .animate-bounce-slow {
      animation: sidebar-bounce-slow 2.5s ease-in-out infinite;
    }
    @keyframes sidebar-bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-2px); }
    }
    .article-body a {
      color: #3b82f6;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .dark .article-body a {
      color: #60a5fa;
    }
    .article-body a:hover {
      color: #2563eb;
    }
    .dark .article-body a:hover {
      color: #93c5fd;
    }
    .dark .article-body h1,
    .dark .article-body h2,
    .dark .article-body h3,
    .dark .article-body h4,
    .dark .article-body h5,
    .dark .article-body h6 {
      color: #f4f4f5;
    }
    .dark .article-body p,
    .dark .article-body li,
    .dark .article-body td,
    .dark .article-body th {
      color: #d4d4d8;
    }
    .dark .article-body blockquote {
      border-left-color: #3b82f6;
      color: #a1a1aa;
    }
    .dark .article-body strong {
      color: #ffffff;
    }
  </style>

  <script is:inline>
  (function() {
    function initSidebarFilter() {
      var buttons = Array.from(document.querySelectorAll(".sidebar-cat-btn"));
      var items = Array.from(document.querySelectorAll("#sidebar-post-list > li"));
      if (!buttons.length) return;
      var MAX_SHOW = 5;

      function applyFilter(cat) {
        var shown = 0;
        items.forEach(function(li) {
          var match = !cat || li.getAttribute("data-category") === cat;
          if (match && shown < MAX_SHOW) {
            li.style.display = "";
            shown++;
            var numEl = li.querySelector(".sidebar-item-num");
            if (numEl) numEl.textContent = String(shown).padStart(2, "0");
          } else {
            li.style.display = "none";
          }
        });
      }

      buttons.forEach(function(btn) {
        btn.addEventListener("click", function() {
          var cat = btn.getAttribute("data-cat-filter");
          buttons.forEach(function(b) {
            b.classList.remove("active", "bg-primary", "text-white");
            b.classList.add("bg-zinc-100", "dark:bg-white/10", "text-zinc-600", "dark:text-zinc-300");
          });
          btn.classList.add("active", "bg-primary", "text-white");
          btn.classList.remove("bg-zinc-100", "dark:bg-white/10", "text-zinc-600", "dark:text-zinc-300");
          applyFilter(cat);
        });
      });

      // 初期表示も5件固定＋番号01から
      applyFilter("");
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initSidebarFilter);
    } else {
      initSidebarFilter();
    }
  })();
  (function() {
    function initToc() {
      var headingEls = Array.from(document.querySelectorAll("main h2[id], main h3[id]"));
     var tocLinks = Array.from(document.querySelectorAll("a[data-toc-id]"));
      var tocList = document.getElementById("toc-list");
      if (!headingEls.length || !tocLinks.length) return;

      function setActive(id) {
        tocLinks.forEach(function(link) {
          var bar = link.querySelector(".toc-bar");
          if (link.dataset.tocId === id) {
            link.classList.add("text-primary", "font-semibold", "bg-primary/5");
            link.classList.remove("text-gray-500");
            if (bar) bar.style.background = "#2563EB";
            if (tocList) {
              var linkTop = link.offsetTop;
              var listScroll = tocList.scrollTop;
              var listHeight = tocList.clientHeight;
              if (linkTop < listScroll || linkTop > listScroll + listHeight - 40) {
                tocList.scrollTo({ top: linkTop - listHeight / 2, behavior: "smooth" });
              }
            }
          } else {
            link.classList.remove("text-primary", "font-semibold", "bg-primary/5");
            link.classList.add("text-gray-500");
            if (bar) bar.style.background = "transparent";
          }
        });
      }

      function onScroll() {
        var y = window.scrollY + 160;
        var cur = headingEls[0].id;
        for (var i = 0; i < headingEls.length; i++) {
          if (headingEls[i].offsetTop <= y) cur = headingEls[i].id;
          else break;
        }
        setActive(cur);
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initToc);
    } else {
      initToc();
    }
  })();
  </script>
</Layout>
```

## File: src/pages/[lang]/blog/tag/[tag].astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import PageHeader from '~/components/layout/PageHeader.astro';
import BlogCard from '~/components/blog/BlogCard.astro';
import Container from '~/components/ui/Container.astro';
import Grid from '~/components/ui/Grid.astro';
import { getCollection } from 'astro:content';
import { languages } from '~/i18n/ui';
import { isRtl, useTranslations } from '~/i18n/utils';
import type { CollectionEntry } from 'astro:content';

export async function getStaticPaths() {
  const allPosts = await getCollection('blog');
  const allLanguages = Object.keys(languages);

  return allLanguages.flatMap((lang) => {
    // Group posts by tag slug
    const tagMap = new Map();

    allPosts
      .filter((post) => post.id.startsWith(`${lang}/`))
      .forEach((post) => {
        (post.data.tags || []).forEach((tag) => {
          const tagSlug = tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          if (!tagSlug) return;

          if (!tagMap.has(tagSlug)) {
            tagMap.set(tagSlug, {
              tagName: tag, // Use the first encounter as the display name
              posts: [],
            });
          }
          tagMap.get(tagSlug).posts.push(post);
        });
      });

    return Array.from(tagMap.entries()).map(([tagSlug, data]) => {
      return {
        params: { lang, tag: tagSlug },
        props: { 
            posts: data.posts.sort((a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()), 
            tagName: data.tagName 
        },
      };
    });
  });
}

const { posts, tagName } = Astro.props;
const { lang } = Astro.params;
const t = useTranslations(lang);
---

<Layout title={`Tag: ${tagName} - Blog`} description={`Articles tagged with ${tagName}`}>
  <Container class="pt-32">
    <a href={`/${lang}/blog`} class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`w-4 h-4 ${isRtl(lang) ? 'rotate-180' : ''}`}><path d="m15 18-6-6 6-6"/></svg>
        {t['blog.back']}
    </a>
  </Container>

  <PageHeader 
      title={tagName}
      description={`Articles tagged with ${tagName}`}
  />

  <Container as="section" class="pb-24">
      {posts.length > 0 ? (
          <Grid cols={3} class="mb-16">
            {posts.map((post: CollectionEntry<'blog'>) => (
              <BlogCard 
                 title={post.data.title}
                 description={post.data.description}
                 pubDate={post.data.pubDate}
                 heroImage={post.data.heroImage}
                 slug={`/${lang}/blog/${post.id.split('/').slice(1).join('/').replace(/\.[^/.]+$/, "")}`}
                 isVideo={post.data.isVideo}
                 author={post.data.author}
                 audioUrl={post.data.audioUrl}
              />
            ))}
          </Grid>
      ) : (
          <div class="text-center py-20">
              <p class="text-xl text-muted-foreground">{t['blog.noPosts'] || "No posts found for this tag."}</p>
          </div>
      )}
  </Container>
</Layout>
```

## File: src/pages/[lang]/changelog/[...slug].astro
```astro
---
import { getCollection, render, type CollectionEntry } from 'astro:content';
import Layout from '~/layouts/Layout.astro';
import ChangelogItem from '~/components/blog/ChangelogItem.astro';
import ChangelogSidebar from '~/components/changelog/ChangelogSidebar.astro';
import Container from '~/components/ui/Container.astro';
import Section from '~/components/layout/Section.astro';
import PageHeader from '~/components/layout/PageHeader.astro';
import { languages } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';

export async function getStaticPaths() {
  const entries = await getCollection('changelog');
  return entries.map((entry) => {
    const [lang, ...slugParts] = entry.id.split('/');
    const slug = slugParts.join('/').replace(/\.[^/.]+$/, "");
    return {
      params: { lang, slug },
      props: { entry },
    };
  });
}

interface Props {
  entry: CollectionEntry<'changelog'>;
}

const { entry } = Astro.props;
const { lang } = Astro.params;
const { Content } = await render(entry);
const t = useTranslations(lang);

---

<Layout 
    title={`v${entry.data.version}: ${entry.data.title} - Changelog`}
    description={entry.data.description}
>
    <PageHeader 
        title={`Release <span class="text-primary">v${entry.data.version}</span>`}
        description={entry.data.description}
    />

    <Section class="pt-12 pb-24">
        <Container>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Sidebar */}
                <div class="lg:col-span-3">
                    <ChangelogSidebar lang={lang} currentVersion={entry.data.version} />
                </div>

                {/* Content */}
                <div class="lg:col-span-9 max-w-4xl">
                    <ChangelogItem 
                        version={entry.data.version}
                        title={entry.data.title}
                        pubDate={entry.data.pubDate}
                        type={entry.data.type}
                        isSecurity={entry.data.isSecurity}
                        detailsUrl={entry.data.detailsUrl}
                        migrationUrl={entry.data.migrationUrl}
                        body={entry.body || ""}
                        lang={lang}
                    >
                        <Content />
                    </ChangelogItem>
                </div>
            </div>
        </Container>
    </Section>
</Layout>
```

## File: src/pages/[lang]/changelog/index.astro
```astro
---
import { getCollection, render } from 'astro:content';
import Layout from '~/layouts/Layout.astro';
import ChangelogItem from '~/components/blog/ChangelogItem.astro';
import ChangelogSidebar from '~/components/changelog/ChangelogSidebar.astro';
import PageHeader from '~/components/layout/PageHeader.astro';
import Section from '~/components/layout/Section.astro';
import Container from '~/components/ui/Container.astro';
import CTA from '~/components/sections/CTA.astro';
import { languages } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params;
const t = useTranslations(lang);

const entries = (await getCollection('changelog'))
    .filter((entry) => entry.id.startsWith(`${lang}/`))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
---

<Layout 
    title={`${t['nav.changelog']} - ASTRO攻略LABO`} 
    description={t['changelog.hero.subtitle']}
> 
    <PageHeader 
        title={`${t['changelog.hero.title']} <span class="text-primary">${t['changelog.hero.highlight']}</span>`}
        description={t['changelog.hero.subtitle']}
    />

    <Section class="pt-12 pb-24">
        <Container>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Sidebar */}
                <div class="lg:col-span-3">
                    <ChangelogSidebar lang={lang} />
                </div>

                {/* Content */}
                <div class="lg:col-span-9 max-w-4xl">
                    <div class="relative">
                        {entries.map(async (entry) => {
                            const { Content } = await render(entry);
                            return (
                                <ChangelogItem 
                                    version={entry.data.version}
                                    title={entry.data.title}
                                    pubDate={entry.data.pubDate}
                                    type={entry.data.type}
                                    isSecurity={entry.data.isSecurity}
                                    detailsUrl={entry.data.detailsUrl}
                                    migrationUrl={entry.data.migrationUrl}
                                    body={entry.body || ""}
                                    lang={lang}
                                >
                                    <Content />
                                </ChangelogItem>
                            )
                        })}
                    </div>

                    <div class="mt-20">
                        <CTA 
                            variant="boxed"
                            title={t['changelog.updated.title']}
                            description={t['changelog.updated.description']}
                            primaryBtn={{ text: t['changelog.updated.follow'], href: 'https://linkedin.com/company/astro-lab' }}
                            secondaryBtn={{ text: t['changelog.updated.newsletter'], href: 'https://linkedin.com/company/astro-lab' }}
                        />
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</Layout>
```

## File: src/pages/[lang]/checkout.astro
```astro
---
import Layout from '~/layouts/Layout.astro';
import { getLangFromUrl, useTranslations } from '~/i18n/utils';
import { Check, User, ArrowRight, CreditCard, Lock, Loader2 } from 'lucide-react';

export const prerender = false;

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const currentPlan = Astro.url.searchParams.get('plan') || '';
const planDisplay = currentPlan ? currentPlan.charAt(0).toUpperCase() + currentPlan.slice(1) : '';

const steps = [
    { number: 1, title: t['checkout.step.account'] },
    { number: 2, title: t['checkout.step.payment'] },
    { number: 3, title: t['checkout.step.success'] }
];
---

<Layout title={t['checkout.title']} description={t['checkout.description']}>
  <div class="min-h-[80vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
    {/* Background blobs */}
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>

    <div class="w-full max-w-md mx-auto" id="checkout-container">
      {/* Progress Steps */}
      <div class="flex justify-between mb-12 relative">
          <div class="absolute top-1/2 left-0 w-full h-0.5 bg-black/10 dark:bg-white/10 -z-10 -translate-y-1/2"></div>
          {steps.map((s) => (
              <div class="step-indicator flex flex-col items-center gap-2 bg-background z-10 px-2" data-step={s.number}>
                  <div class="step-circle w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 border-2 bg-background border-black/10 dark:border-white/10 text-muted-foreground">
                      {s.number}
                  </div>
                  <span class="step-label text-xs font-medium text-muted-foreground">
                      {s.title}
                  </span>
              </div>
          ))}
      </div>

      <div class="bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        
        {/* Step 1: Account */}
        <div id="step-1" class="step-content transition-opacity duration-300">
          <h2 class="text-2xl font-bold font-display mb-2">{t['checkout.account.title']}</h2>
          <p class="text-muted-foreground mb-6">
             {planDisplay 
                ? t['checkout.account.subtitle.plan'].replace('{plan}', planDisplay) 
                : t['checkout.account.subtitle.default']
             }
          </p>
          
          <div class="space-y-4">
              <div>
                  <label class="block text-sm font-medium mb-1.5">{t['checkout.label.fullname']}</label>
                  <div class="relative">
                      <div class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground flex items-center justify-center">
                        <User className="w-5 h-5" />
                      </div>
                      <input 
                          type="text" 
                          id="input-name"
                          class="w-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl px-10 py-3 focus:outline-none focus:border-primary transition-colors text-foreground dark:text-white"
                          placeholder={t['checkout.placeholder.fullname']}
                      />
                  </div>
              </div>
              <div>
                  <label class="block text-sm font-medium mb-1.5">{t['checkout.label.email']}</label>
                  <div class="relative">
                      <div class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground flex items-center justify-center font-bold">@</div>
                      <input 
                          type="email" 
                          id="input-email"
                          class="w-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl px-10 py-3 focus:outline-none focus:border-primary transition-colors text-foreground dark:text-white"
                          placeholder={t['checkout.placeholder.email']}
                      />
                  </div>
              </div>
              <button 
                  id="btn-step-1"
                  class="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4"
              >
                  {t['checkout.btn.continue']} <ArrowRight className="w-4 h-4" />
              </button>
          </div>
        </div>

        {/* Step 2: Payment */}
        <div id="step-2" class="step-content hidden transition-opacity duration-300">
            <h2 class="text-2xl font-bold font-display mb-2">{t['checkout.payment.title']}</h2>
            <p class="text-muted-foreground mb-6">{t['checkout.payment.subtitle']}</p>
            
            <div class="space-y-4">
                <div>
                    <label for="card-number" class="block text-sm font-medium mb-1.5">{t['checkout.label.card']}</label>
                    <div class="relative">
                        <div class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground flex items-center justify-center">
                             <CreditCard className="w-5 h-5" />
                        </div>
                        <input 
                            id="card-number"
                            type="text" 
                            class="w-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl px-10 py-3 focus:outline-none focus:border-primary transition-colors font-mono text-foreground dark:text-white"
                            placeholder={t['checkout.placeholder.card']}
                        />
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                        <div>
                        <label for="expiry" class="block text-sm font-medium mb-1.5">{t['checkout.label.expiry']}</label>
                        <input 
                            id="expiry"
                            type="text" 
                            class="w-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-center font-mono text-foreground dark:text-white"
                            placeholder={t['checkout.placeholder.expiry']}
                        />
                    </div>
                    <div>
                        <label for="cvc" class="block text-sm font-medium mb-1.5">{t['checkout.label.cvc']}</label>
                        <div class="relative">
                             <div class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground flex items-center justify-center">
                                <Lock className="w-4 h-4" />
                            </div>
                            <input 
                                id="cvc"
                                type="text" 
                                class="w-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl px-10 py-3 focus:outline-none focus:border-primary transition-colors font-mono text-foreground dark:text-white"
                                placeholder={t['checkout.placeholder.cvc']}
                            />
                        </div>
                    </div>
                </div>
                
                <button 
                    id="btn-step-2"
                    class="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
                >
                    <span class="normal-state flex items-center gap-2">
                        {t['checkout.btn.complete']} {planDisplay && `• ${planDisplay}`}
                    </span>
                    <span class="loading-state hidden">
                         <Loader2 className="w-5 h-5 animate-spin" />
                    </span>
                </button>
            </div>
        </div>

        {/* Step 3: Success */}
        <div id="step-3" class="step-content hidden text-center py-8 transition-all duration-500 ease-out transform scale-95 opacity-0">
            <div class="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Check className="w-10 h-10" />
            </div>
            <h2 class="text-3xl font-bold font-display mb-2">{t['checkout.success.title']}</h2>
            <p class="text-muted-foreground mb-8">
                {t['checkout.success.subtitle'].replace('{plan}', planDisplay || t['checkout.success.default_plan'])}
            </p>
            
            <a href={`/${lang}`} class="inline-flex items-center text-primary font-medium hover:underline">
                {t['checkout.success.btn']} <ArrowRight className="w-4 h-4 ml-2" />
            </a>
        </div>

      </div>
      
      <p class="text-center text-xs text-muted-foreground mt-8 flex items-center justify-center gap-2">
          <Lock className="w-3 h-3" /> {t['checkout.security.text']}
      </p>
    </div>
  </div>
</Layout>

<script>
    // Vanilla JS Logic
    let currentStep = 1;

    function updateSteps() {
        // Update Indicators
        const indicators = document.querySelectorAll('.step-indicator');
        indicators.forEach((ind: any) => {
            const stepNum = parseInt(ind.dataset.step);
            const circle = ind.querySelector('.step-circle');
            const label = ind.querySelector('.step-label');

            if (currentStep >= stepNum) {
                circle.classList.remove('bg-background', 'border-black/10', 'dark:border-white/10', 'text-muted-foreground');
                circle.classList.add('bg-primary', 'border-primary', 'text-primary-foreground');
                
                label.classList.remove('text-muted-foreground');
                label.classList.add('text-primary');

                // Add Check icon if step is completed (strictly less than current)
                if (currentStep > stepNum) {
                     circle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                } else {
                     circle.textContent = stepNum.toString();
                }

            } else {
                 // Reset
                circle.classList.add('bg-background', 'border-black/10', 'dark:border-white/10', 'text-muted-foreground');
                circle.classList.remove('bg-primary', 'border-primary', 'text-white');
                label.classList.add('text-muted-foreground');
                label.classList.remove('text-primary');
                circle.textContent = stepNum.toString();
            }
        });

        // Show/Hide Content
        document.querySelectorAll('.step-content').forEach(el => el.classList.add('hidden'));
        const activeStep = document.getElementById(`step-${currentStep}`);
        if(activeStep) {
            activeStep.classList.remove('hidden');
            if (currentStep === 3) {
                 // Trigger animation for success step
                 setTimeout(() => {
                    activeStep.classList.remove('scale-95', 'opacity-0');
                    activeStep.classList.add('scale-100', 'opacity-100');
                 }, 50);
            }
        }
    }

    // Event Listeners
    document.getElementById('btn-step-1')?.addEventListener('click', () => {
        const nameInput = document.getElementById('input-name') as HTMLInputElement;
        const emailInput = document.getElementById('input-email') as HTMLInputElement;

        if (!nameInput.value || !emailInput.value) {
            alert('Please fill in all fields'); // Simple validation
            return;
        }
        currentStep = 2;
        updateSteps();
    });

    document.getElementById('btn-step-2')?.addEventListener('click', () => {
        const btn = document.getElementById('btn-step-2');
        const normalState = btn?.querySelector('.normal-state');
        const loadingState = btn?.querySelector('.loading-state');
        
        if(btn) (btn as HTMLButtonElement).disabled = true;
        normalState?.classList.add('hidden');
        loadingState?.classList.remove('hidden');

        // Simulate API call
        setTimeout(() => {
             currentStep = 3;
             updateSteps();
        }, 1500);
    });

    // Initialize
    updateSteps();

</script>
```

## File: src/pages/[lang]/contact.astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import { siteConfig } from '~/site.config';
import ContactForm from '~/components/islands/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '~/components/layout/PageHeader.astro';
import Container from '~/components/ui/Container.astro';
import Grid from '~/components/ui/Grid.astro';
import { languages } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params;
const t = useTranslations(lang);
---

<Layout title={t['meta.contact.title']} description={t['meta.contact.desc']}>
  <PageHeader 
      title={t['contact.title']}
      description={t['contact.desc']}
  />

  <Container as="section" class="pb-24">
      <Grid cols={2} class="gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
              <h2 class="text-lg md:text-2xl font-bold mb-6">{t['contact.info.title']}</h2>
              
              <div class="flex items-start gap-4 min-w-0">
                  <div class="p-3 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 class="font-bold mb-1">{t['contact.email']}</h3>
                      <p class="text-gray-600 dark:text-gray-400 break-words">{siteConfig.contact.email.support}</p>
                      <p class="text-gray-600 dark:text-gray-400 break-words">{siteConfig.contact.email.sales}</p>
                  </div>
              </div>

              <div class="flex items-start gap-4 min-w-0">
                  <div class="p-3 rounded-lg bg-primary/10 text-primary">
                      <Phone className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 class="font-bold mb-1">{t['contact.phone']}</h3>
                      <p class="text-gray-600 dark:text-gray-400 break-words">{siteConfig.contact.phone.main}</p>
                      <p class="text-gray-600 dark:text-gray-400 break-words">{siteConfig.contact.phone.label}</p>
                  </div>
              </div>

               <div class="flex items-start gap-4 min-w-0">
                  <div class="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 class="font-bold mb-1">{t['contact.office']}</h3>
                      <p class="text-gray-600 dark:text-gray-400 break-words">{siteConfig.contact.address.city}</p>
                      <p class="text-gray-600 dark:text-gray-400 break-words">{siteConfig.contact.address.full}</p>
                  </div>
              </div>
              
              <div class="p-6 rounded-2xl bg-linear-to-br from-primary/20 to-purple-500/20 border border-white/10 mt-8">
                  <h3 class="font-bold mb-2">{t['contact.enterprise.title']}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{t['contact.enterprise.desc']}</p>
                  <a href="#" class="text-sm font-medium text-primary hover:underline">{t['contact.enterprise.btn']} &rarr;</a>
              </div>
          </div>

          <!-- Contact Form -->
          <div>
              <ContactForm client:only="react" />
          </div>
      </Grid>
  </Container>
</Layout>
```

## File: src/pages/[lang]/design.astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import { ui } from '~/i18n/ui';
import Button from '~/components/ui/Button.astro';
import Section from '~/components/layout/Section.astro';
import Container from '~/components/ui/Container.astro';
import Grid from '~/components/ui/Grid.astro';
import Heading from '~/components/ui/Heading.astro';
import Text from '~/components/ui/Text.astro';
import Badge from '~/components/ui/Badge.astro';
import { ArrowRight, Check } from 'lucide-react';

export async function getStaticPaths() {
  return Object.keys(ui).map((lang) => ({ params: { lang } }));
}


const colors = [
    { name: 'Primary', class: 'bg-primary', text: 'text-white' },
    { name: 'Background', class: 'bg-background', text: 'text-foreground border border-foreground/10' },
    { name: 'Foreground', class: 'bg-foreground', text: 'text-background' },
    { name: 'Muted', class: 'bg-muted', text: 'text-muted-foreground' },
];

const typography = [
    { name: 'Display 7xl', class: 'text-7xl font-display font-bold', label: 'Start Building' },
    { name: 'Display 5xl', class: 'text-5xl font-display font-bold', label: 'Start Building' },
    { name: 'Heading 3xl', class: 'text-3xl font-bold', label: 'Start Building' },
    { name: 'Heading 2xl', class: 'text-2xl font-bold', label: 'Start Building' },
    { name: 'Body Base', class: 'text-base', label: 'The quick brown fox jumps over the lazy dog.' },
    { name: 'Body Small', class: 'text-sm text-muted-foreground', label: 'The quick brown fox jumps over the lazy dog.' },
];
---

<Layout title="Design System - ASTRO攻略LABO" description="ASTRO攻略LABOのデザインとコンポーネントガイド。">
    <Section class="pt-32 pb-24">
        <Container>
            <Heading level={1} class="mb-6">Design System</Heading>
            <Text variant="lead" class="max-w-2xl mb-16">
                A collection of reusable components and styles that ensure consistency across our platform.
            </Text>

            {/* Colors Section */}
            <div class="mb-24">
                <Heading level={2} class="mb-8 flex items-center gap-3">
                    <span class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">01</span>
                    Colors
                </Heading>
                <Grid cols={4}>
                    {colors.map((color) => (
                        <div class="group">
                            <div class={`h-32 rounded-xl mb-4 shadow-sm ${color.class} ${color.name === 'Background' ? 'border border-foreground/10' : ''}`}></div>
                            <h3 class="font-bold">{color.name}</h3>
                            <code class="text-xs text-muted-foreground bg-muted px-2 py-1 rounded mt-1 inline-block">.{color.class}</code>
                        </div>
                    ))}
                </Grid>
            </div>

             {/* Typography Section */}
             <div class="mb-24">
                <Heading level={2} class="mb-8 flex items-center gap-3">
                    <span class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">02</span>
                    Typography
                </Heading>
                <div class="space-y-8 border border-foreground/10 rounded-2xl p-8 bg-background/50 backdrop-blur-sm">
                    {typography.map((type) => (
                         <div class="flex flex-col md:flex-row md:items-center gap-4 border-b border-foreground/5 last:border-0 pb-8 last:pb-0">
                            <div class="w-48 shrink-0">
                                <span class="text-muted-foreground text-sm font-mono">{type.name}</span>
                            </div>
                            <div class={type.class}>{type.label}</div>
                         </div>
                    ))}
                </div>
            </div>

            {/* Components Section */}
            <div class="mb-24">
                <Heading level={2} class="mb-8 flex items-center gap-3">
                    <span class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">03</span>
                    Components
                </Heading>
                
                <div class="grid gap-12">
                    {/* Buttons */}
                    <div class="p-8 border border-foreground/10 rounded-2xl bg-background/50 backdrop-blur-sm">
                        <Heading level={3} class="text-xl mb-6">Buttons</Heading>
                        <div class="flex flex-wrap gap-4 mb-8">
                            <Button>Primary Button</Button>
                            <Button variant="secondary">Secondary Button</Button>
                            <Button variant="outline">Outline Button</Button>
                            <Button variant="ghost">Ghost Button</Button>
                        </div>
                        <div class="flex flex-wrap gap-4">
                             <Button>
                                With Icon <ArrowRight size={18} />
                            </Button>
                        </div>
                    </div>

                    {/* Badges */}
                    <div class="p-8 border border-foreground/10 rounded-2xl bg-background/50 backdrop-blur-sm">
                         <Heading level={3} class="text-xl mb-6">Badges & Tags</Heading>
                        <div class="flex flex-wrap gap-3">
                            <Badge variant="accent">Success</Badge>
                            <Badge variant="accent" class="text-blue-500 bg-blue-500/10 border-blue-500/20">Info</Badge>
                            <Badge variant="accent" class="text-amber-500 bg-amber-500/10 border-amber-500/20">Warning</Badge>
                            <Badge variant="accent" class="text-red-500 bg-red-400/10 border-red-500/20">Error</Badge>
                            <Badge variant="secondary">Neutral</Badge>
                        </div>
                    </div>

                    {/* Cards */}
                     <div class="p-8 border border-foreground/10 rounded-2xl bg-background/50 backdrop-blur-sm">
                        <Heading level={3} class="text-xl mb-6">Cards</Heading>
                        <Grid cols={2} class="gap-6">
                            <div class="p-6 rounded-2xl border border-foreground/10 bg-background hover:border-primary/50 transition-colors group cursor-pointer">
                                <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <Check />
                                </div>
                                <Heading level={4} class="text-lg mb-2">Feature Card</Heading>
                                <Text small>
                                    Interactive cards with hover states and micro-interactions. Perfect for feature grids.
                                </Text>
                            </div>
                             <div class="p-6 rounded-2xl bg-linear-to-br from-primary to-indigo-600 text-white shadow-xl shadow-primary/25">
                                <Heading level={4} class="text-lg mb-2">Highlight Card</Heading>
                                <p class="text-white/80 text-sm mb-4">
                                    Used for emphasizing important content or calls to action.
                                </p>
                                <button class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium backdrop-blur-sm transition-colors">
                                    Action
                                </button>
                            </div>
                        </Grid>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</Layout>
```

## File: src/pages/[lang]/features.astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import PageHeader from '~/components/layout/PageHeader.astro';
import DeveloperExperience from '~/components/sections/DeveloperExperience.astro';
import { 
    Globe, Zap, ShieldCheck, 
    Search, LayoutTemplate, Palette, 
    ZapIcon, Rocket, Rss, Cookie
} from 'lucide-react';
import { languages } from '~/i18n/ui';
import Section from '~/components/layout/Section.astro';
import Container from '~/components/ui/Container.astro';
import Grid from '~/components/ui/Grid.astro';
import { useTranslations } from '~/i18n/utils';

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params;
const t = useTranslations(lang);

const features = [
    {
        title: t['features.search'],
        description: t['features.search.desc'],
        icon: Search,
        color: "text-sky-400",
        bg: "bg-sky-400/10"
    },
    {
        title: t['features.blog'],
        description: t['features.blog.desc'],
        icon: LayoutTemplate,
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        title: t['features.seo'],
        description: t['features.seo.desc'],
        icon: Globe,
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: t['features.zerojs'],
        description: t['features.zerojs.desc'],
        icon: Zap,
        color: "text-amber-400",
        bg: "bg-amber-400/10"
    },
    {
        title: t['features.images'],
        description: t['features.images.desc'],
        icon: Palette,
        color: "text-pink-400",
        bg: "bg-pink-400/10"
    },
    {
        title: t['features.security'],
        description: t['features.security.desc'],
        icon: ShieldCheck,
        color: "text-red-400",
        bg: "bg-red-400/10"
    },
    {
        title: t['features.i18n'],
        description: t['features.i18n.desc'],
        icon: Globe,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10"
    },
    {
        title: t['features.a11y'],
        description: t['features.a11y.desc'],
        icon: Cookie, // Using Cookie icon as placeholder for accessible "choice/consent" or we can swap
        color: "text-teal-400",
        bg: "bg-teal-400/10"
    },
    {
        title: t['features.stack'],
        description: t['features.stack.desc'],
        icon: Rocket,
        color: "text-rose-400",
        bg: "bg-rose-400/10"
    },
    {
        title: t['features.controls'],
        description: t['features.controls.desc'],
        icon: ZapIcon,
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    },
    {
        title: t['features.types'],
        description: t['features.types.desc'],
        icon: ShieldCheck,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
     {
        title: t['features.rss'],
        description: t['features.rss.desc'],
        icon: Rss,
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    }
];
---

<Layout title={t['meta.features.title']} description={t['meta.features.desc']}>
    <Section>
        {/* Background Decorations */}
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-900/5 dark:bg-white/5 rounded-full blur-[120px] -mr-64 -mt-32"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -ml-64 -mb-32"></div>

        <Container class="relative z-10">
            <PageHeader 
                title={t['features.hero.title']}
                description={t['features.hero.desc']}
            />

            <div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href={`https://astro.space/ja/`} class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">
                    {t['features.cta.compare']}
                </a>
            </div>

            <Grid cols={4}>
                {features.map((feature) => (
                    <div class="group p-8 rounded-3xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300">
                        <div class={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                            <feature.icon size={24} />
                        </div>
                        <h2 class="text-xl font-bold mb-3">{feature.title}</h2>
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </Grid>

            <DeveloperExperience 
                title={t['features.dev.title']}
                features={[
                    t['features.dev.1'],
                    t['features.dev.2'],
                    t['features.dev.3'],
                    t['features.dev.4'],
                    t['features.dev.5']
                ]}
                terminal={{
                    comment: t['features.dev.terminal.comment'],
                    command: {
                        tool: "astro-signal-sim",
                        args: "--mode realtime --pairs USD/JPY,EUR/JPY --indicators RSI,MA,BB --backtest"
                    },
                    successSteps: [
                        t['features.dev.terminal.success.1'],
                        t['features.dev.terminal.success.2']
                    ],
                    readyMessage: t['features.dev.terminal.ready']
                }}
            />

            <div class="mt-16 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-10 text-center">
                <p class="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t['features.cta.desc']}</p>
                <a href={`https://astro.space/ja/`} class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">
                    {t['features.cta.pricing']}
                </a>
            </div>
        </Container>
    </Section>
</Layout>
```

## File: src/pages/[lang]/index.astro
```astro
---
export const prerender = true;
import { languages, defaultLang } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';
import Layout from '~/layouts/Layout.astro';
import { client } from '~/library/microcms';

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

const { lang = defaultLang } = Astro.params;

let latestPosts: any[] = [];
try {
  const res = await client.get({ endpoint: "blogs", queries: { limit: 3, fields: "id,title,eyecatch,category,content" } });
  latestPosts = res.contents;
} catch(e) {}
---

<Layout title="daito | 勝率40%・上位2.3%のFXトレーダーが教えるプロップ攻略" description="Fintokei上位2.3%入賞（2587人中61位）のFXトレーダーが、プロップファーム攻略・FX戦略をSubstackで無料公開中。">

  <!-- HERO -->
  <section class="relative bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-900 text-white pt-32 pb-24 px-4 overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(37,99,235,0.15),transparent_60%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(139,92,246,0.08),transparent_50%)]"></div>
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <div class="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 rounded-full px-5 py-2 text-sm text-blue-300 mb-8 backdrop-blur-sm">
        🏆 <span>Fintokei大会 上位<strong class="text-blue-200">2.3%</strong>入賞（2587人中61位）</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
        自己資金ゼロで<br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">プロの資金</span>を動かす<br/>
        FXプロップ攻略法
      </h1>
      <p class="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        勝率<strong class="text-white">40%</strong>でも上位2.3%に入れる理由とは？<br/>
        Fintokei・FTMO・Funded7の攻略戦略をSubstackで<strong class="text-blue-300">無料公開中</strong>。
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a href="https://daitodaison.substack.com/" target="_blank" rel="noopener"
           class="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-xl shadow-blue-500/25 text-base">
          📬 Substackを無料購読する
        </a>
        <a href={`/${lang}/blog/microcms`}
           class="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 text-base">
          📖 攻略ブログを読む
        </a>
      </div>

      <!-- 実績数字 - 大きく感情的に -->
      <div class="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
        <div class="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
          <p class="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500">2.3%</p>
          <p class="text-xs md:text-sm text-zinc-400 mt-2">Fintokei上位</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">2587人中61位</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
          <p class="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500">40%</p>
          <p class="text-xs md:text-sm text-zinc-400 mt-2">勝率でも合格</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">RR重視の戦略</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
          <p class="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500">756+</p>
          <p class="text-xs md:text-sm text-zinc-400 mt-2">攻略記事</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">毎週更新中</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 著者の信頼性 - WHY YOU セクション -->
  <section class="py-16 px-4 bg-zinc-900 text-white border-b border-zinc-800">
    <div class="max-w-4xl mx-auto">
      <p class="text-center text-zinc-500 text-xs font-bold uppercase tracking-widest mb-10">なぜ私の攻略法が機能するのか</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex gap-4 items-start p-5 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
          <span class="text-2xl shrink-0">📊</span>
          <div>
            <p class="font-bold text-white mb-1">実績ベースの戦略</p>
            <p class="text-sm text-zinc-400 leading-relaxed">机上の空論ではなく、Fintokei上位2.3%という実際の成績から逆算した攻略法を公開。</p>
          </div>
        </div>
        <div class="flex gap-4 items-start p-5 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
          <span class="text-2xl shrink-0">🤖</span>
          <div>
            <p class="font-bold text-white mb-1">EA・MQL5開発も対応</p>
            <p class="text-sm text-zinc-400 leading-relaxed">手動トレードだけでなく、MetaTrader用EA開発・バックテストの知見も発信。</p>
          </div>
        </div>
        <div class="flex gap-4 items-start p-5 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
          <span class="text-2xl shrink-0">📬</span>
          <div>
            <p class="font-bold text-white mb-1">毎週の相場分析</p>
            <p class="text-sm text-zinc-400 leading-relaxed">Substackで毎週トレード日誌・相場分析を公開。リアルタイムの思考プロセスを共有。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- プロップファーム - Fintokeiメイン化 -->
  <section class="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-black text-center mb-3 text-zinc-900 dark:text-white">
        おすすめプロップファーム
      </h2>
      <p class="text-center text-zinc-500 dark:text-zinc-400 mb-12 text-sm">自己資金不要・合格すれば会社資金でトレードできる</p>

      <!-- Fintokei メインカード -->
      <div class="relative bg-gradient-to-br from-purple-900 via-zinc-900 to-blue-950 rounded-3xl border border-purple-500/40 p-8 mb-6 overflow-hidden shadow-2xl shadow-purple-500/10">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(139,92,246,0.12),transparent_60%)]"></div>
        <div class="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-1 text-white">
            <div class="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-purple-300 mb-4">
              🏆 著者イチオシ・最も稼ぎやすい
            </div>
            <div class="flex items-center gap-3 mb-3">
              <span class="text-4xl">🇯🇵</span>
              <h3 class="text-3xl font-black">Fintokei</h3>
            </div>
            <p class="text-zinc-400 mb-5 text-sm">日本初の本格派プロップファーム。無料デモ大会で実力を試してから本番参加できる。</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-300 mb-6">
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> 利益配分80〜100%</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> 最大5,000万円の運用資金</li>
              <li class="flex items-center gap-2"><span class="text-green-400">✓</span> MT4・MT5・TradingView対応</li>
              <li class="flex items-center gap-2"><span class="text-green-400 font-bold">✓</span> <span class="text-yellow-300 font-bold">参加費全額返金（6月末まで）</span></li>
            </ul>
            <a href="https://www.fintokei.com/jp/?affiliate=64" target="_blank" rel="noopener"
               class="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-black px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-500/30 text-base">
              無料で始める →
            </a>
          </div>
          <div class="shrink-0 text-center bg-white/5 border border-white/10 rounded-2xl p-6 min-w-[180px]">
            <p class="text-xs text-zinc-400 mb-1">著者の実績</p>
            <p class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500">2.3%</p>
            <p class="text-xs text-zinc-400 mt-2">2587人中61位</p>
            <div class="w-full h-px bg-white/10 my-4"></div>
            <p class="text-xs text-zinc-500">このサイトの運営者が<br/>実際に達成した順位</p>
          </div>
        </div>
      </div>

      <!-- FUNDED7 / FTMO サブカード -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-5 flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">7️⃣</span>
            <div>
              <h3 class="font-black text-zinc-900 dark:text-white">FUNDED7</h3>
              <p class="text-xs text-zinc-500">1フェーズ・スプレッド最狭</p>
            </div>
          </div>
          <ul class="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300 mb-4 flex-1">
            <li>✅ 最大6,000万円・利益配分最大90%</li>
            <li>✅ ドル円0.1pipsの極狭スプレッド</li>
            <li>✅ 違反即失格なし・育てる姿勢のOREF制度</li>
          </ul>
          <a href="https://my.funded7.com/ja/sign-up?affiliateId=111" target="_blank" rel="noopener"
             class="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl transition-all text-sm">
            アカウント開設 →
          </a>
        </div>
        <div class="bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-5 flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">🌍</span>
            <div>
              <h3 class="font-black text-zinc-900 dark:text-white">FTMO</h3>
              <p class="text-xs text-zinc-500">世界最大手・300万人以上</p>
            </div>
          </div>
          <ul class="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300 mb-4 flex-1">
            <li>✅ 累計690億円超の出金実績</li>
            <li>✅ 最大約3億円（スケーリング込み）</li>
            <li>✅ Trustpilot4.8・2015年創業の信頼</li>
          </ul>
          <a href="https://trader.ftmo.com/?affiliates=fEZqWBlMdBrTtxUjIJYD" target="_blank" rel="noopener"
             class="block text-center bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2.5 rounded-xl transition-all text-sm">
            無料トライアル →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 最新記事 -->
  {latestPosts.length > 0 && (
    <section class="py-20 px-4 bg-white dark:bg-zinc-950">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-black text-center mb-3 text-zinc-900 dark:text-white">最新の攻略記事</h2>
        <p class="text-center text-zinc-500 dark:text-zinc-400 mb-12 text-sm">プロップファーム攻略・FX戦略を毎週更新</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post: any) => {
            const raw = post.eyecatch || "";
            let imgUrl = raw.split("|")[0].replace("https://daitodaison.pages.dev/wp-content", "https://dysonblog.org/wp-content");
            if (!imgUrl && post.content) {
              const match = post.content.match(/<img[^>]+src=["']([^"']+)["']/i);
              if (match) imgUrl = match[1].replace("https://daitodaison.pages.dev/wp-content", "https://dysonblog.org/wp-content");
            }
            return (
              <a href={`/${lang}/blog/microcms/${post.id}`}
                 class="group block bg-zinc-50 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:border-blue-400 hover:shadow-xl transition-all hover:-translate-y-1">
                <div class="aspect-video overflow-hidden bg-zinc-200 dark:bg-zinc-700">
                  {imgUrl ? (
                    <img src={imgUrl} alt={post.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  ) : (
                    <div class="w-full h-full flex items-center justify-center text-3xl">📝</div>
                  )}
                </div>
                <div class="p-4">
                  {post.category?.name && (
                    <span class="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium mb-2 inline-block">{post.category.name}</span>
                  )}
                  <p class="text-sm font-bold text-zinc-900 dark:text-white line-clamp-3 group-hover:text-blue-600 transition-colors leading-snug">{post.title}</p>
                </div>
              </a>
            );
          })}
        </div>
        <div class="text-center mt-10">
          <a href={`/${lang}/blog/microcms`} class="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white font-bold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all">
            すべての記事を見る →
          </a>
        </div>
      </div>
    </section>
  )}

  <!-- Substack CTA - 具体的なベネフィット訴求 -->
  <section class="py-20 px-4 bg-gradient-to-br from-blue-700 via-blue-600 to-violet-700 text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(255,255,255,0.05),transparent_60%)]"></div>
    <div class="max-w-3xl mx-auto text-center relative z-10">
      <p class="text-sm font-bold uppercase tracking-widest text-blue-200 mb-4">📬 無料ニュースレター</p>
      <h2 class="text-2xl md:text-4xl font-black mb-4 leading-tight">プロップ攻略の知見を<br/>毎週無料で受け取る</h2>
      <p class="text-blue-100 mb-8 leading-relaxed">
        Fintokei上位2.3%の攻略戦略をSubstackで公開中。
      </p>
      <!-- 受け取れるもの -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 text-left">
        <div class="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
          <p class="font-bold mb-1 text-sm">📈 週次トレード日誌</p>
          <p class="text-xs text-blue-200 leading-relaxed">実際のトレード結果・反省・改善点をリアルに公開</p>
        </div>
        <div class="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
          <p class="font-bold mb-1 text-sm">🧠 相場分析レポート</p>
          <p class="text-xs text-blue-200 leading-relaxed">プロップテストで使える週次の相場シナリオを解説</p>
        </div>
        <div class="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
          <p class="font-bold mb-1 text-sm">🤖 EA開発の裏側</p>
          <p class="text-xs text-blue-200 leading-relaxed">MQL5・バックテスト・最適化の実践ノウハウを共有</p>
        </div>
      </div>
      <a href="https://daitodaison.substack.com/" target="_blank" rel="noopener"
         class="inline-flex items-center gap-2 bg-white text-blue-700 font-black px-10 py-4 rounded-xl hover:-translate-y-1 transition-all shadow-xl text-base">
        今すぐ無料で購読する →
      </a>
      <p class="text-blue-200 text-xs mt-4">無料・いつでも解除可能・スパムなし</p>
    </div>
  </section>

  <!-- FAQ - 成約を後押しする質問に刷新 -->
  <section class="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-black text-center mb-3 text-zinc-900 dark:text-white">よくある質問</h2>
      <p class="text-center text-zinc-500 dark:text-zinc-400 mb-12 text-sm">始める前に気になること、全部答えます</p>
      <div class="space-y-3">
        {[
          { q: "プロップファームって怪しくないですか？", a: "Fintokeiは日本初の本格派プロップファームで、運営会社も明確です。FTMOは2015年創業・Trustpilot4.8・世界300万人以上が利用する実績があります。詐欺的な業者との見分け方も当ブログで解説しています。" },
          { q: "FX初心者でも合格できますか？", a: "正直に言うと、完全な初心者には難しいです。ただ、損小利大の基本ルールを守れる方なら勝率40%以下でも合格できます。まず無料デモ大会で練習することをおすすめします。" },
          { q: "勝率40%でも本当に稼げるんですか？", a: "はい。重要なのは勝率より損益比率（RR）です。1:2のRRなら勝率34%でも収益プラスになります。私自身が勝率40%でFintokei上位2.3%を達成した実績がその証明です。" },
          { q: "参加費は返ってきますか？", a: "Fintokeiは2026年6月末まで参加費全額返金キャンペーン中です。合格して利益を出せば参加費が戻ってきます。FTMO・FUNDED7にも条件付きの返金制度があります。" },
          { q: "Substackの有料プランはありますか？", a: "基本コンテンツは完全無料です。登録だけでFintokei攻略戦略・相場分析・EA開発ノウハウを毎週受け取れます。" },
        ].map((item) => (
          <details class="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 group">
            <summary class="font-bold text-zinc-900 dark:text-white cursor-pointer list-none flex justify-between items-center p-5">
              <span class="pr-4 text-sm md:text-base">{item.q}</span>
              <span class="text-blue-500 shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p class="px-5 pb-5 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed border-t border-zinc-100 dark:border-zinc-700 pt-4">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>

  <!-- 最終CTA - ページ末の背水の陣 -->
  <section class="py-16 px-4 bg-zinc-950 text-white text-center">
    <div class="max-w-xl mx-auto">
      <p class="text-zinc-400 text-sm mb-3">まだ迷っていますか？</p>
      <h2 class="text-2xl md:text-3xl font-black mb-4">最初の一歩は<span class="text-blue-400">無料</span>です</h2>
      <p class="text-zinc-400 text-sm mb-8 leading-relaxed">Substackを購読して戦略を学ぶも、<br/>Fintokei無料デモ大会で腕試しするも、どちらも0円から始められます。</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="https://daitodaison.substack.com/" target="_blank" rel="noopener"
           class="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm">
          📬 Substack無料購読
        </a>
        <a href="https://www.fintokei.com/jp/?affiliate=64" target="_blank" rel="noopener"
           class="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-black px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm">
          🏆 Fintokei無料登録
        </a>
      </div>
    </div>
  </section>

</Layout>
```

## File: src/pages/[lang]/portfolio/[...slug].astro
```astro
---
export const prerender = true;
import { type CollectionEntry, getCollection, render } from 'astro:content';
import Layout from '~/layouts/Layout.astro';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { defaultLang } from '~/i18n/ui';
import { isRtl, useTranslations } from '~/i18n/utils';

export async function getStaticPaths() {
	const posts = await getCollection('portfolio');
	return posts.map((post) => {
        const lang = post.id.split('/')[0];
        const slug = post.id.split('/').slice(1).join('/').replace(/\.[^/.]+$/, "");
        return {
		    params: { lang, slug },
		    props: { post },
	    };
    });
}
interface Props {
  post: CollectionEntry<'portfolio'>;
}

const { post } = Astro.props;
const { lang = defaultLang } = Astro.params;
const t = useTranslations(lang);

const { Content } = await render(post);

// Calculate available translations
const allPosts = await getCollection('portfolio');
const currentBaseSlug = post.id.split('/').slice(1).join('/');
const availableLangs = allPosts
    .filter(p => p.id.endsWith(currentBaseSlug))
    .map(p => p.id.split('/')[0]);

---

<Layout 
  title={post.data.title} 
  description={post.data.description}
  image={post.data.heroImage}
  noindex={post.data.noindex}
  nofollow={post.data.nofollow}
  availableLangs={availableLangs}
>
	<article class="pt-32 pb-16">
        <div class="max-w-4xl mx-auto px-6">
            <div class="mb-8">
                 <a 
                    href={`/${lang}/portfolio`}
                    class="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                  >
                    <ArrowLeft className={`w-4 h-4 ${isRtl(lang) ? 'ml-2 rotate-180' : 'mr-2'} group-hover:-translate-x-1 transition-transform`} />
                    {t['portfolio.back']}
                </a>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    {post.data.tags.map(tag => (
                        <span class="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-foreground border border-foreground/10">
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 class="text-3xl md:text-6xl font-display font-bold mb-6 break-words">{post.data.title}</h1>
                <p class="text-xl text-muted-foreground mb-8 dark:text-neutral-300">{post.data.description}</p>
                
                <div class="flex items-center gap-6 text-sm text-muted-foreground border-y border-black/10 dark:border-white/10 py-6 mb-12">
                    <div class="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <time datetime={post.data.pubDate.toISOString()} class="text-sm">
                            {post.data.pubDate.toLocaleDateString(lang, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>
                    {post.data.link && (
                         <a href={post.data.link} target="_blank" class="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                            {(t as any)['portfolio.visitLiveSite']}
                        </a>
                    )}
                </div>
            </div>
            
            <div class="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 mb-16 shadow-2xl bg-black/5 dark:bg-white/5">
                 <img width={1020} height={510} src={post.data.heroImage} alt={post.data.title} loading="eager" class="w-full h-auto" />
            </div>

            <div class="prose dark:prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
 			    <Content />
            </div>
        </div>
	</article>
</Layout>
```

## File: src/pages/[lang]/portfolio/index.astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import ProjectCard from '~/components/blog/ProjectCard.astro';
import { getCollection } from 'astro:content';
import { languages } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';

export function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params;
const t = useTranslations(lang);

const projects = (await getCollection('portfolio', ({ id }) => {
	return id.startsWith(`${lang}/`);
})).sort(
	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);
---

<Layout title={`${(t as any)['portfolio.hero.title'].replace(/<[^>]*>?/gm, '')} - ASTRO攻略LABO`} description={(t as any)['portfolio.hero.subtitle']}>
	<div class="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <div class="mb-16">
            <h1 class="text-3xl md:text-6xl font-display font-bold mb-6" set:html={(t as any)['portfolio.hero.title']}></h1>
            <p class="text-xl text-muted-foreground max-w-2xl">
                {(t as any)['portfolio.hero.subtitle']}
            </p>
        </div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{
				projects.map((project) => {
                    const [_lang, ...rest] = project.id.split('/');
                    const slugWithoutLang = rest.join('/').replace(/\.[^/.]+$/, "");
                    return (
                        <ProjectCard 
                            title={project.data.title}
                            description={project.data.description}
                            image={project.data.heroImage}
                            tags={project.data.tags}
                            slug={`${lang}/portfolio/${slugWithoutLang}`}
                        />
                    );
                })
			}
		</div>
	</div>
</Layout>
```

## File: src/pages/[lang]/pricing.astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import PageHeader from '~/components/layout/PageHeader.astro';
import Schema from '~/components/layout/Schema.astro';
import PricingTable from '~/components/sections/PricingTable.astro';
import PricingPlan from '~/components/sections/PricingPlan.astro';
import FAQ from '~/components/sections/FAQ.astro';
import ComparisonTable from '~/components/sections/ComparisonTable.astro';
import { languages } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';
import Container from '~/components/ui/Container.astro';

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params;
const t = useTranslations(lang);

const plans = [
  {
    name: t['pricing.starter.name'],
    price: 0,
    displayPrice: t['pricing.plan1.price'],
    description: t['pricing.starter.desc'],
    features: [
      t['pricing.feat.usdjpy'],
      t['pricing.feat.backtest.today'],
      t['pricing.feat.delay.lag'],
      t['pricing.feat.indicator.partial'],
    ],
    cta: t['pricing.cta.start'],
  },
  {
    name: t['pricing.pro.name'],
    price: 0,
    displayPrice: t['pricing.plan2.price'],
    description: t['pricing.pro.desc'],
    features: [
      t['pricing.feat.all_pairs'],
      t['pricing.feat.backtest.unlimited'],
      t['pricing.feat.realtime'],
      t['pricing.feat.indicator.full'],
      t['pricing.feat.support.email'],
    ],
    cta: t['pricing.cta.start'],
    popular: true,
  },
  {
    name: t['pricing.enterprise.name'],
    price: 0,
    displayPrice: t['pricing.plan3.price'],
    description: t['pricing.enterprise.desc'],
    features: [
      t['pricing.feat.all_pairs'],
      t['pricing.feat.backtest.unlimited'],
      t['pricing.feat.realtime'],
      t['pricing.feat.indicator.full'],
      t['pricing.feat.support.chat'],
    ],
    cta: t['pricing.cta.contact'],
  },
];

const faqs = [
  { question: t['faq.pricing.1.q'], answer: t['faq.pricing.1.a'] },
  { question: t['faq.pricing.2.q'], answer: t['faq.pricing.2.a'] },
  { question: t['faq.pricing.3.q'], answer: t['faq.pricing.3.a'] },
  { question: t['faq.pricing.4.q'], answer: t['faq.pricing.4.a'] },
];

---

<Layout title={t['meta.pricing.title']} description={t['meta.pricing.desc']}>
  
  <Schema item={{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ASTRO攻略LABO",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": plans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "price": String(plan.price),
      "priceCurrency": "JPY",
      "description": plan.description,
      "url": `${Astro.site}${lang}/pricing`,
    }))
  }} />

  
  <PageHeader 
      title={t['pricing.title']}
      description={t['pricing.subtitle']}
  />

  <Container as="section" class="pb-24">
      <PricingTable>
        {plans.map(plan => (
          <PricingPlan
            name={plan.name}
            price={plan.displayPrice}
            description={plan.description}
            features={plan.features}
            cta={plan.cta}
            popular={plan.popular}
          />
        ))}
      </PricingTable>

      <div class="mt-24">
        <ComparisonTable 
          title={t['compare.title']}
          subtitle={t['compare.subtitle']}
          labels={{ features: t['compare.labels.features'], popular: t['compare.labels.popular'] }}
          plans={plans.map(plan => ({
            name: plan.name,
            key: plan.name.toLowerCase(),
            ...(plan.popular && { popular: true })
          }))}
          features={[
            { category: t['compare.cat.core'], items: [
                { name: t['compare.row.pairs'], starter: t['compare.val.usdjpy'], pro: t['compare.val.all'], enterprise: t['compare.val.all'] },
                { name: t['compare.row.backtest'], starter: t['compare.val.today'], pro: t['compare.val.unlimited'], enterprise: t['compare.val.unlimited'] },
                { name: t['compare.row.latency'], starter: t['compare.val.delayed'], pro: t['compare.val.realtime'], enterprise: t['compare.val.realtime'] },
                { name: t['compare.row.indicators'], starter: t['compare.val.partial'], pro: t['compare.val.full'], enterprise: t['compare.val.full'] },
                { name: t['compare.row.support'], starter: t['compare.val.none'], pro: t['compare.val.email'], enterprise: t['compare.val.chat'] },
            ]}
          ]}
        />
      </div>
      
      <div class="mt-20">
          <FAQ items={faqs} />
      </div>
  </Container>
</Layout>
```

## File: src/pages/[lang]/showcase.astro
```astro
---
export const prerender = true;
import Layout from '~/layouts/Layout.astro';
import PageHeader from '~/components/layout/PageHeader.astro';
import BeforeAfter from '~/components/islands/BeforeAfter';

import TechStack from '~/components/sections/TechStack.astro';

import { languages } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';

export async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

const { lang } = Astro.params;
const t = useTranslations(lang);

const beforeImage = '/showcase-light.webp';
const afterImage = '/showcase-dark.webp';
---

<Layout title={t['showcase.title']} description={t['showcase.subtitle']}>
    <PageHeader 
        title={t['showcase.title']}
        description={t['showcase.subtitle']}
    />
    
    <section class="py-12 bg-background">
        <div class="max-w-5xl mx-auto px-6 lg:px-8">
             <div class="mb-12 text-center">
                <span class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    {t['showcase.slider.label']}
                </span>
            </div>

            <BeforeAfter 
                client:visible
                beforeImage={beforeImage}
                afterImage={afterImage}
                beforeLabel={t['showcase.slider.before']}
                afterLabel={t['showcase.slider.after']}
            />

            <div class="mt-24 mb-12 text-center">
                <h2 class="text-3xl font-bold mb-4">The Tech Stack</h2>
                <p class="text-foreground/60 max-w-2xl mx-auto">
                    Built with the most modern and performant technologies available in the Astro ecosystem.
                </p>
            </div>

            <TechStack t={t} />
        </div>
    </section>
</Layout>
```

## File: src/pages/[lang]/sitemap-page.astro
```astro
---
export const prerender = true;
import Layout from "~/layouts/Layout.astro";
import { client } from "~/library/microcms";
import { languages } from "~/i18n/ui";

export async function getStaticPaths() {
  let allRawPosts: any[] = [];
  let offset = 0;
  while (true) {
    const response = await client.get({
      endpoint: "blogs",
      queries: { limit: 100, offset, fields: "id,title,category,updatedAt", orders: "-updatedAt" },
    });
    allRawPosts = allRawPosts.concat(response.contents);
    if (allRawPosts.length >= response.totalCount) break;
    offset += 100;
  }
  const allPosts = allRawPosts.filter((p: any) => p.title);
  return Object.keys(languages).map((lang) => ({
    params: { lang },
    props: { posts: allPosts },
  }));
}

const { posts } = Astro.props;
const { lang } = Astro.params;

const staticPages = [
  { label: "トップページ", href: `/${lang}/`, desc: "プロップ攻略・Substack案内" },
  { label: "ブログ一覧", href: `/${lang}/blog/`, desc: "全記事一覧" },
  { label: "会社概要", href: `/${lang}/about/`, desc: "サイト運営者情報" },
  { label: "お問い合わせ", href: `/${lang}/contact/`, desc: "お問い合わせフォーム" },
];

// カテゴリー別に整理
const categoryMap: Record<string, any[]> = {};
for (const post of posts) {
  const cat = post.category?.name || "未分類";
  if (!categoryMap[cat]) categoryMap[cat] = [];
  categoryMap[cat].push(post);
}
const categories = Object.entries(categoryMap).sort((a, b) => b[1].length - a[1].length);

const now = new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
---

<Layout title="サイトマップ | daito FXプロップ攻略ブログ" description="サイト内の全ページ・全記事一覧です。カテゴリー別に整理しています。">

  <!-- ヘッダー -->
  <div class="bg-gradient-to-br from-zinc-950 to-blue-950 text-white pt-32 pb-12 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-3xl font-black mb-2">サイトマップ</h1>
      <p class="text-zinc-400 text-sm">サイト内の全ページ・全記事一覧 / 最終更新：{now}</p>
      <p class="text-zinc-500 text-xs mt-2">景品表示法に基づく表示：当サイトのリンクには広告を含む場合があります</p>
    </div>
  </div>

  <div class="max-w-5xl mx-auto px-4 py-16 space-y-16">

    <!-- 固定ページ -->
    <section>
      <h2 class="text-lg font-black mb-6 pb-2 border-b-2 border-blue-500 inline-flex items-center gap-2">
        📄 固定ページ
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {staticPages.map((page) => (
          <a href={page.href}
             class="block bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all group">
            <p class="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">{page.label}</p>
            <p class="text-xs text-zinc-500 mt-1">{page.desc}</p>
          </a>
        ))}
      </div>
    </section>

    <!-- 記事統計 -->
    <section>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="relative group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-blue-400/40 transition-all duration-300 text-center">
          <p class="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-2">Articles</p>
          <p class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500 leading-none">{posts.length}</p>
          <p class="text-xs text-zinc-400 mt-2">総記事数</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">随時更新中</p>
        </div>
        <div class="relative group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-blue-400/40 transition-all duration-300 text-center">
          <p class="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-2">Categories</p>
          <p class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500 leading-none">{categories.length}</p>
          <p class="text-xs text-zinc-400 mt-2">カテゴリー数</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">ジャンル別整理</p>
        </div>
        <div class="relative group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-blue-400/40 transition-all duration-300 text-center">
          <p class="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-2">Fintokei</p>
          <p class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500 leading-none">2.3%</p>
          <p class="text-xs text-zinc-400 mt-2">上位ランク</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">2587人中61位</p>
        </div>
        <div class="relative group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-blue-400/40 transition-all duration-300 text-center">
          <p class="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-2">Experience</p>
          <p class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500 leading-none">6年</p>
          <p class="text-xs text-zinc-400 mt-2">FX経験</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">プロップ特化</p>
        </div>
      </div>
    </section>

    <!-- カテゴリー別記事一覧 -->
    <section>
      <h2 class="text-lg font-black mb-8 pb-2 border-b-2 border-blue-500 inline-flex items-center gap-2">
        📂 カテゴリー別記事一覧
      </h2>
      <div class="space-y-10">
        {categories.map(([catName, catPosts]) => (
          <div id={`cat-${catName}`}>
            <h3 class="flex items-center gap-2 text-base font-bold mb-4 text-zinc-900 dark:text-white">
              <span class="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
                {catName}
              </span>
              <span class="text-xs text-zinc-400">{catPosts.length}件</span>
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5">
              {catPosts.map((post: any) => (
                <li class="flex items-start gap-2">
                  <span class="text-blue-400 mt-0.5 shrink-0">▸</span>
                  <a href={`/${lang}/blog/microcms/${post.id}`}
                     class="text-sm text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                    {post.updatedAt && (
                      <span class="text-[10px] text-zinc-400 ml-1">
                        {new Date(post.updatedAt).toLocaleDateString("ja-JP", {month:"numeric", day:"numeric"})}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <!-- Substack CTA -->
    <section class="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 text-center">
      <p class="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2">📬 無料ニュースレター</p>
      <h2 class="text-xl font-black mb-3">プロップ攻略の知見を無料で受け取る</h2>
      <p class="text-blue-100 text-sm mb-6">Fintokei上位2.3%の攻略戦略をSubstackで毎週公開中</p>
      <a href="https://daitodaison.substack.com/" target="_blank" rel="noopener"
         class="inline-flex items-center gap-2 bg-white text-blue-700 font-black px-8 py-3 rounded-xl hover:-translate-y-0.5 transition-all">
        Substackを無料購読する →
      </a>
    </section>

  </div>
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
