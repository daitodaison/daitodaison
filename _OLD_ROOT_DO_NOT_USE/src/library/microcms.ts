import { createClient } from "microcms-js-sdk";

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

export const client = (serviceDomain && apiKey)
  ? createClient({ serviceDomain, apiKey })
  : ({
      get: async () => ({ contents: [] }),
      getList: async () => ({ contents: [] }),
      getObject: async () => ({}),
    } as any);
