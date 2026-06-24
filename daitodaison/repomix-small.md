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
- Only files matching these patterns are included: src/components/layout/Header.astro
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
src/components/layout/Header.astro
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
    <a href={`/${lang}`} class="flex items-center gap-3 text-xl font-bold tracking-tight text-white group shrink-0 whitespace-nowrap">
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
            id="header-logo-img" class="h-8 w-auto group-hover:rotate-6 transition-transform duration-300 invert-0"
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
