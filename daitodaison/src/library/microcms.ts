import { createClient } from "microcms-js-sdk";

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

console.log('[microcms] serviceDomain:', serviceDomain);
console.log('[microcms] apiKey:', apiKey ? '設定あり' : '未設定');

export const client = (serviceDomain && apiKey)
  ? createClient({ serviceDomain, apiKey })
  : ({
      get: async () => { console.log('[microcms] フォールバック使用'); return { contents: [] }; },
      getList: async () => ({ contents: [] }),
      getObject: async () => ({}),
    } as any);
