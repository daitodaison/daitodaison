import { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X, Book, Zap, LayoutGrid, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Fuse from 'fuse.js';
import type { FuseResult } from 'fuse.js';

interface SearchItem {
  url: string;
  title: string;
  description?: string;
  body?: string;
}

interface PopularLink {
  label: string;
  href: string;
  icon: any;
  localize?: boolean;
}

const POPULAR_LINKS: PopularLink[] = [
  { label: "攻略ブログ一覧", href: "/blog/", icon: FileText },
  { label: "Fintokei登録", href: "https://www.fintokei.com/jp/?affiliate=64", icon: Zap, localize: false },
  { label: "サイトマップ", href: "/sitemap-page/", icon: LayoutGrid },
  { label: "Substack購読", href: "https://daitodaison.substack.com/", icon: Book, localize: false },
];

interface SearchProps {
  placeholder?: string;
  lang?: string;
}

export default function Search({ placeholder = "Search...", lang = "en" }: SearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FuseResult<SearchItem>[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const localizedLinks = POPULAR_LINKS.map(link => {
    if (link.localize === false || link.href.startsWith('http')) return link;
    return { ...link, href: `/${lang}${link.href}`.replace(/\/+/g, '/') };
  });

  useEffect(() => {
    if (open && !fuse) {
      fetch('/api/search.json')
        .then(res => res.json())
        .then(data => {
          const fuseInstance = new Fuse<SearchItem>(data, {
            keys: ['title', 'description', 'body'],
            includeMatches: true,
            minMatchCharLength: 2,
            threshold: 0.3,
            ignoreLocation: true,
          });
          setFuse(fuseInstance);
        })
        .catch(err => console.error("Failed to load search index:", err));
    }
  }, [open, fuse]);

  useEffect(() => {
    if (fuse && query.trim()) {
      const searchResults = fuse.search(query).slice(0, 15);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  useEffect(() => {
    if (open && inputRef.current) setTimeout(() => inputRef.current?.focus(), 100);
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`${placeholder} (⌘K)`}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full transition-all hover:scale-105"
      >
        <SearchIcon size={14} />
        <span className="hidden lg:inline">{placeholder}</span>
        <div className="hidden lg:flex items-center gap-0.5 px-1.5 py-0.5 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-white/10 rounded-full text-[10px] font-mono shadow-sm">
          <span className="text-[10px] text-gray-700 dark:text-gray-200">⌘K</span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-100 flex items-start justify-center p-4 sm:p-6 md:p-20">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/75 shadow-2xl" 
              onClick={() => setOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-zinc-950 border border-gray-200 dark:border-white/20 rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-white/20 flex flex-col" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative border-b border-gray-200 dark:border-white/10 shrink-0">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <input 
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  title={placeholder}
                  className="w-full bg-transparent py-4 pl-12 pr-12 text-gray-900 dark:text-white outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 text-lg"
                />
                <button 
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                {query.trim() ? (
                  results.length > 0 ? (
                    <div className="space-y-4">
                      {results.map(({ item }) => (
                        <a 
                          key={item.url} 
                          href={item.url}
                          onClick={() => setOpen(false)}
                          className="block p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
                        >
                          <div className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white mb-1">
                            {item.title}
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                              {item.description}
                            </p>
                          )}
                          <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                            {item.url}
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                      No results found for "{query}"
                    </div>
                  )
                ) : (
                  <>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                      Popular Links
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {localizedLinks.map((link) => (
                        <a 
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-gray-200 dark:border-white/10 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            <link.icon size={16} />
                          </div>
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-200 group-hover:text-slate-900 dark:group-hover:text-white">{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
