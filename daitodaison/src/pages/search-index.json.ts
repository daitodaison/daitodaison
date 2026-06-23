import { client } from '~/library/microcms';

// prerender を明示しない（デフォルトでtrue = ビルド時に静的JSONとして書き出される）

interface SearchItem {
  title: string;
  description: string;
  url: string;
  body: string;
  category: string;
}

export async function GET() {
  const results: SearchItem[] = [];

  try {
    let offset = 0;
    const limit = 100;
    let total = Infinity;

    while (offset < total) {
      const res = await client.get({
        endpoint: "blogs",
        queries: {
          limit,
          offset,
          fields: "id,title,category,content,publishedAt"
        }
      });

      total = res.totalCount ?? res.contents.length;

      for (const post of res.contents) {
        const plainText = (post.content || "")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        results.push({
          title: post.title || post.id,
          description: plainText.slice(0, 200),
          url: `/ja/blog/microcms/${post.id}`,
          body: plainText.slice(0, 2000),
          category: post.category?.name || ''
        });
      }

      offset += limit;
    }
  } catch (e) {
    console.error('[search-index] microCMS fetch failed:', e);
  }

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}
