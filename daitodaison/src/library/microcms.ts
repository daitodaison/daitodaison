import { createClient } from "microcms-js-sdk";

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN || "daitodaison";
const apiKey = import.meta.env.MICROCMS_API_KEY;

function timeoutFetch(url: any, options: any) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timeoutId));
}

export const client = (apiKey)
  ? createClient({ serviceDomain, apiKey, customFetch: timeoutFetch as any })
  : ({
      get: async () => ({ contents: [] }),
      getList: async () => ({ contents: [] }),
      getObject: async () => ({}),
    } as any);