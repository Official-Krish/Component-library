'use client';

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { closeSearchModal, openSearchModal } from "@/lib/features/searchModalSlice";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState, useMemo } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { X, Terminal, Palette, Wrench, Command, Circle } from 'lucide-react';
import { AnimatePresence, motion } from "motion/react";
import { COMPONENTS } from "@/constants/DetailedComponent";
import { useRouter } from "next/navigation";

export default function SearchModal() {
  const [searchQuery, setSearchQuery] = useState('');
  const isOpen = useAppSelector((state) => state.searchModal.isOpen);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const installationItems = [
    { id: 1, title: 'Install Next.js', icon: Terminal },
    { id: 2, title: 'Install Tailwind CSS', icon: Palette },
    { id: 3, title: 'Add utilities', icon: Wrench },
    { id: 4, title: 'CLI', icon: Command },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        dispatch(closeSearchModal());
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          dispatch(closeSearchModal());
        } else {
          dispatch(openSearchModal());
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch, isOpen]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return COMPONENTS.filter(item =>
      item.name.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -50,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => dispatch(closeSearchModal())}
          />
      
      {/* Modal */}
      <motion.div 
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -50,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl pb-4"
      >
        <div className="flex items-center px-4 py-3 border-b border-gray-100">
              <CiSearch className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Type a command or search..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => dispatch(closeSearchModal())}
                className="ml-3 p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {/* Follow for updates section */}
              {!searchQuery && (
                <>
                  <div className="px-4 py-3">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Follow for updates</h3>
                    <div className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                        <RiTwitterXFill className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-900">Twitter @KrishAnand2004</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100"></div>
                

                  {/* Installation section */}
                  <div className="px-4 py-3">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Installation</h3>
                    <div className="space-y-1">
                      {installationItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <div
                            key={item.id}
                            className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center mr-3">
                              <IconComponent className="w-4 h-4 text-gray-600" />
                            </div>
                            <span className="text-gray-900">{item.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {searchQuery && (
                <>
                  <div className="px-4 py-3">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Search Results for "{searchQuery}"</h3>
                  </div>

                  {filteredItems.length > 0 && (
                    <div className="space-y-1 pl-5">  
                      {filteredItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer 
                          transition-colors"
                          onClick={() => {
                            dispatch(closeSearchModal());
                            router.push(`/component/${item.id}`);
                          }}
                        >
                          <Circle className="w-4 h-4 text-gray-600 mr-3" />
                          <span className="text-gray-900">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* All Components section */}
              {!searchQuery && (
                <>
                  <div className="border-t border-gray-100"></div>
                  <div className="px-4 py-3">
                    <h3 className="text-sm font-medium text-gray-500">All Components</h3>
                  </div>
                  <div className="space-y-1 pl-5">
                    {COMPONENTS.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => {
                          dispatch(closeSearchModal());
                          router.push(`/component/${item.id}`);
                        }}
                      >
                        <Circle className="w-4 h-4 text-gray-600 mr-3" />
                        <span className="text-gray-900">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* No results */}
              {searchQuery && filteredItems.length === 0 && (
                <div className="px-4 py-8 text-center">
                  <p className="text-gray-500">No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Keyboard shortcut hint */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Press <kbd className="px-2 py-1 bg-white rounded border text-xs">Esc</kbd> to close
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 