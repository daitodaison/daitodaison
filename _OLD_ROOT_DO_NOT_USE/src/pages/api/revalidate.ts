import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const deployHookUrl = import.meta.env.DEPLOY_HOOK_URL;
  if (!deployHookUrl) {
    return new Response(JSON.stringify({ error: 'DEPLOY_HOOK_URL is not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch(deployHookUrl, { method: 'POST' });
    const body = await response.text();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Deploy hook call failed', status: response.status, body }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, body }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Deploy hook request failed', detail: String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};