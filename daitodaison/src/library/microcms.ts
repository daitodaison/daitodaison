import { createClient } from "microcms-js-sdk";

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN || "daitodaison";
const apiKey = import.meta.env.MICROCMS_API_KEY;

export const client = (apiKey)
  ? createClient({ serviceDomain, apiKey })
  : ({
      get: async () => ({ contents: [], totalCount: 0 }),
      getList: async () => ({ contents: [], totalCount: 0 }),
      getObject: async () => ({}),
    } as any);
