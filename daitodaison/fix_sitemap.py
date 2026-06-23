import re
content = open('src/pages/[lang]/sitemap-page.astro', encoding='utf-8').read()
new_section = '''    <!-- 記事統計 -->
    <section>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="relative group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-blue-400/40 transition-all duration-300 text-center">
          <p class="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-2">Articles</p>
          <p class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500 leading-none">{posts.length}</p>
          <p class="text-xs text-zinc-400 mt-2">総記事数</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">随時更新中</p>
        </div>
        <div class="relative group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-blue-400/40 transition-all duration-300 text-center">
          <p class="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-2">Categories</p>
          <p class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500 leading-none">{categories.length}</p>
          <p class="text-xs text-zinc-400 mt-2">カテゴリー数</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">ジャンル別整理</p>
        </div>
        <div class="relative group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-blue-400/40 transition-all duration-300 text-center">
          <p class="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-2">Fintokei</p>
          <p class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500 leading-none">2.3%</p>
          <p class="text-xs text-zinc-400 mt-2">上位ランク</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">2587人中61位</p>
        </div>
        <div class="relative group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-blue-400/40 transition-all duration-300 text-center">
          <p class="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-2">Experience</p>
          <p class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500 leading-none">6年</p>
          <p class="text-xs text-zinc-400 mt-2">FX経験</p>
          <p class="text-[10px] text-zinc-500 mt-0.5">プロップ特化</p>
        </div>
      </div>
    </section>'''
result = re.sub(r'    <!-- \u8a18\u4e8b\u7d71\u8a08 -->.*?</section>', new_section, content, flags=re.DOTALL)
if '\u7dcf\u8a18\u4e8b\u6570' in result and 'bg-blue-50' not in result:
    open('src/pages/[lang]/sitemap-page.astro', 'w', encoding='utf-8').write(result)
    print('置換成功')
else:
    print('失敗 bg-blue-50残存:', 'bg-blue-50' in result)
