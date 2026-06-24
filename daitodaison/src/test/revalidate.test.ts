import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { post } from '../pages/api/revalidate';
import type { APIContext } from 'astro';

describe('revalidate API endpoint', () => {
  const originalEnv = { ...import.meta.env };

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
    // 環境変数をデフォルト値にリセット
    import.meta.env.WEBHOOK_SECRET = 'test-webhook-secret';
    import.meta.env.DEPLOY_HOOK_URL = '';
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    import.meta.env.WEBHOOK_SECRET = originalEnv.WEBHOOK_SECRET;
    import.meta.env.DEPLOY_HOOK_URL = originalEnv.DEPLOY_HOOK_URL;
  });

  it('should return 401 when x-webhook-secret header is missing', async () => {
    const context = {
      request: new Request('http://localhost/api/revalidate', {
        method: 'POST',
        headers: {},
      }),
    } as unknown as APIContext;

    const response = await post(context);
    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data.error).toBe('Unauthorized');
  });

  it('should return 401 when x-webhook-secret header does not match expected secret', async () => {
    const context = {
      request: new Request('http://localhost/api/revalidate', {
        method: 'POST',
        headers: {
          'x-webhook-secret': 'wrong-secret',
        },
      }),
    } as unknown as APIContext;

    const response = await post(context);
    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data.error).toBe('Unauthorized');
  });

  it('should return 500 when DEPLOY_HOOK_URL is missing but secret matches', async () => {
    import.meta.env.DEPLOY_HOOK_URL = '';

    const context = {
      request: new Request('http://localhost/api/revalidate', {
        method: 'POST',
        headers: {
          'x-webhook-secret': 'test-webhook-secret',
        },
      }),
    } as unknown as APIContext;

    const response = await post(context);
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.error).toBe('DEPLOY_HOOK_URL is not configured');
  });

  it('should trigger deploy hook and return 200 when secret matches and DEPLOY_HOOK_URL is configured', async () => {
    import.meta.env.DEPLOY_HOOK_URL = 'https://api.netlify.com/build_hooks/mock';
    
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      text: async () => 'Build triggered',
    } as Response);

    const context = {
      request: new Request('http://localhost/api/revalidate', {
        method: 'POST',
        headers: {
          'x-webhook-secret': 'test-webhook-secret',
        },
      }),
    } as unknown as APIContext;

    const response = await post(context);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.body).toBe('Build triggered');
    expect(fetch).toHaveBeenCalledWith('https://api.netlify.com/build_hooks/mock', { method: 'POST' });
  });
});
