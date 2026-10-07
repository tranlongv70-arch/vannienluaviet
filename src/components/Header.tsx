import React, { useState } from 'react';
import { Sparkles, Menu, X, Shirt, Search } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'studio', label: 'Phòng Phối Đồ' },
    { id: 'collections', label: 'Bộ Sưu Tập' },
    { id: 'stories', label: 'Di Sản & Lụa' },
    { id: 'community', label: 'Cộng Đồng' },
    { id: 'tailoring', label: 'Đặt May Đo' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Logo & Typography */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer shrink-0"
        >
          <BrandLogo size="md" variant="light" showTagline={true} />
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-stone-600">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-1 relative hover:text-stone-900 ${
                  isActive ? 'text-[#8B1E1E] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#8B1E1E] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100/90 hover:bg-stone-200/90 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-stone-200"
              title="Tìm kiếm trang phục"
            >
              <Search className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#8B1E1E]" />
              <span className="hidden md:inline">Tìm kiếm</span>
            </button>
          )}

          <button
            onClick={() => handleNavClick('studio')}
            className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white bg-[#8B1E1E] hover:bg-[#721818] rounded-xl transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Shirt className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="hidden sm:inline">Phòng Phối Đồ</span>
            <span className="sm:hidden">Phối Đồ</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg shrink-0"
            aria-label="Mở danh mục điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#FAF9F5] px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs tracking-wider uppercase font-medium ${
                  isActive ? 'bg-[#8B1E1E] text-white font-semibold' : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
