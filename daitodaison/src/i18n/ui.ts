// Helper to parse properties usage
export function parseProperties(content: string): Record<string, string> {
  const result: Record<string, string> = {};
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('!')) {
      const splitIndex = trimmed.indexOf('=');
      if (splitIndex !== -1) {
        const key = trimmed.slice(0, splitIndex).trim();
        const value = trimmed.slice(splitIndex + 1).trim();
        result[key] = value;
      }
    }
  }
  return result;
}

const locales = import.meta.glob('./locales/*.properties', { query: '?raw', eager: true });

const SUPPORTED_LANGS = ['ja', 'en'];

export const languages: Record<string, string> = {};
export const ui: Record<string, Record<string, string>> = {};
export const availableLangs = SUPPORTED_LANGS;

for (const path in locales) {
  const code = path.match(/\/([a-z]{2})\.properties$/)?.[1];
  if (code && SUPPORTED_LANGS.includes(code)) {
    const content = (locales[path] as { default: string }).default;
    const props = parseProperties(content);
    ui[code] = props;
    languages[code] = props['system.language_name'] || code.toUpperCase();
  }
}

export const defaultLang = import.meta.env.DEFAULT_LOCALE || 'en';

nav.propfarm=プロップ
nav.propfarm.desc=プロップファーム一覧
nav.fintokei=Fintokei
nav.fintokei.desc=日本初・著者イチオシのプロップ
nav.funded7=FUNDED7
nav.funded7.desc=1フェーズ・最大6000万円
nav.ftmo=FTMO
nav.ftmo.desc=世界最大手・300万人以上
nav.substack=Substack
nav.substack.desc=無料ニュースレターを購読する
