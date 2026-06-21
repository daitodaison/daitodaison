import { client } from '~/library/microcms';
export const prerender = false;

export async function GET() {
  const results: any[] = [];

  try {
    const res = await client.get({
      endpoint: "blogs",
      queries: {
        limit: 100,
        fields: "id,title,category,content,publishedAt"
      }
    });

    for (const post of res.contents) {
      const plainText = (post.content || "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 300);

      results.push({
        title: post.title || post.id,
        description: plainText,
        url: `/ja/blog/microcms/${post.id}`,
        body: plainText,
        category: post.category?.name || ''
      });
    }
  } catch (e) {
    // microCMS取得失敗時は空配列を返す
  }

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
