import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ListTree } from 'lucide-react';

interface Doc {
  id: string;
  data: {
    title: string;
    [key: string]: any;
  };
}

interface MobileDocsMenuProps {
  sections: string[];
  groupedDocs: Record<string, Doc[]>;
  currentPath: string;
}

export default function MobileDocsMenu({ sections, groupedDocs, currentPath }: MobileDocsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to get clean slug from ID (same as in DocsLayout)
  const getSlug = (id: string) => id.replace(/\.[^/.]+$/, "");

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const normalizedCurrentPath = currentPath.endsWith('/') && currentPath.length > 1 
    ? currentPath.slice(0, -1) 
    : currentPath;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex lg:hidden items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors"
        aria-label="Open Documentation Navigation"
      >
        <ListTree className="w-4 h-4" />
        Docs Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-sm z-80"
              aria-hidden="true"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white dark:bg-zinc-950 border-r border-gray-200 dark:border-white/10 z-90 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-white">
                  <ListTree className="w-5 h-5 text-gray-900 dark:text-white" />
                  Documentation
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {sections.map((section) => {
                    const sectionDocs = groupedDocs[section];
                    
                    if (section === 'root') {
                      return (
                        <ul key="root" className="space-y-1 list-none p-0">
                          {sectionDocs.map(doc => {
                            const docPath = `/docs/${getSlug(doc.id)}`;
                            const isExact = normalizedCurrentPath === docPath;
                            return (
                              <li key={doc.id}>
                                <a
                                  href={docPath}
                                  onClick={() => setIsOpen(false)}
                                  className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                                    isExact 
                                    ? "bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white shadow-sm" 
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
                                  }`}
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full ${isExact ? "bg-slate-900 dark:bg-white" : "bg-gray-200 dark:bg-white/20"}`} />
                                  {doc.data.title}
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      );
                    }

                    const rawTitle = section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ');
                    
                    return (
                      <div key={section} className="space-y-1">
                        <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                          {rawTitle}
                        </div>
                        <ul className="pl-4 border-l border-gray-200 dark:border-white/10 space-y-1 list-none m-0">
                          {sectionDocs.map(doc => {
                            const docPath = `/docs/${getSlug(doc.id)}`;
                            const isExact = normalizedCurrentPath === docPath;
                            return (
                              <li key={doc.id} className="relative">
                                {/* Visual branch connector */}
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-px bg-gray-200 dark:bg-white/10" />
                                
                                <a
                                  href={docPath}
                                  onClick={() => setIsOpen(false)}
                                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all ${
                                    isExact 
                                    ? "bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-semibold" 
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                                  }`}
                                >
                                  {doc.data.title}
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </nav>

              <div className="p-6 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                <a 
                  href="/docs/getting-started" 
                  className="flex items-center justify-center w-full px-4 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold shadow-lg shadow-slate-900/20 dark:shadow-white/20 hover:bg-slate-800 dark:hover:bg-zinc-200 transition-all text-sm"
                >
                  Quick Start Guide
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
