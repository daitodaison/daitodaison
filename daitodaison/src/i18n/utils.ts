import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: string | undefined) {
  const translations = (lang && lang in ui ? ui[lang as keyof typeof ui] : ui[defaultLang]) as typeof ui[typeof defaultLang];

  return new Proxy(translations, {
    get(target, prop) {
      if (prop in target) {
        return target[prop as keyof typeof target];
      }
      return `{${String(prop)}}`;
    }
  });
}

export function isRtl(_: string): boolean {
  return false;
}
