import React, { useState, useEffect, useRef } from 'react';
import { PRESET_OUTFITS } from '../data/costumes';
import { PresetOutfit, DressingState } from '../types';
import { Search, X, Shirt, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { HeritageImage } from './common/HeritageImage';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOutfitToDress: (dressingState: DressingState) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectOutfitToDress
}) => {
  const [query, setQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<'all' | 'male' | 'female'>('all');
  const [selectedEra, setSelectedEra] = useState<number | 'all'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setSelectedGender('all');
      setSelectedEra('all');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularKeywords = [
    'Giao Lĩnh',
    'Viên Lĩnh',
    'Tứ Điên',
    'Đối Khâm',
    'Nhật Bình',
    'Tứ Thân',
    'Tây Sơn',
    'Cách Tân',
    'Văn Lang'
  ];

  const filtered = PRESET_OUTFITS.filter(preset => {
    const matchesGender = selectedGender === 'all' || preset.gender === selectedGender;
    const matchesEra = selectedEra === 'all' || preset.eraNumber === selectedEra;
    if (!matchesGender || !matchesEra) return false;

    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    const searchString = [
      preset.title,
      preset.subtitle,
      preset.period,
      preset.region,
      preset.culturalSignificance,
      preset.historicalStory,
      preset.structuralFeatures,
      preset.usagePurpose,
      preset.gender === 'male' ? 'nam trang phục nam' : 'nữ trang phục nữ'
    ].join(' ').toLowerCase();

    return searchString.includes(q);
  });

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center p-4 sm:p-6 sm:pt-20 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF9F5] border border-stone-300 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8B1E1E] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm trang phục (ví dụ: Nhật Bình, Giao Lĩnh, Tây Sơn, Viên Lĩnh, Áo Dài...)"
            className="flex-1 bg-transparent text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              title="Xóa tìm kiếm"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
          >
            Đóng <span className="hidden sm:inline">(Phím thoát)</span>
          </button>
        </div>

        {/* Quick Filter Tags & Gender Switch */}
        <div className="px-4 sm:px-6 py-3 bg-[#F4F1EA] border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          {/* Keyword tags */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider shrink-0 mr-1">
              Gợi ý:
            </span>
            {popularKeywords.map(kw => {
              const isSelected = query.toLowerCase() === kw.toLowerCase();
              return (
                <button
                  key={kw}
                  onClick={() => setQuery(isSelected ? '' : kw)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#8B1E1E] text-white shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-amber-100/60 border border-stone-200'
                  }`}
                >
                  {kw}
                </button>
              );
            })}
          </div>

          {/* Gender Filter */}
          <div className="flex items-center gap-1 self-end sm:self-auto shrink-0">
            <button
              onClick={() => setSelectedGender('all')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                selectedGender === 'all'
                  ? 'bg-stone-800 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              Tất Cả
            </button>
            <button
              onClick={() => setSelectedGender(selectedGender === 'female' ? 'all' : 'female')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                selectedGender === 'female'
                  ? 'bg-[#8B1E1E] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              Nữ
            </button>
            <button
              onClick={() => setSelectedGender(selectedGender === 'male' ? 'all' : 'male')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                selectedGender === 'male'
                  ? 'bg-[#1E3A5F] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              Nam
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
            <span>
              Tìm thấy <strong className="text-stone-900">{filtered.length}</strong> bộ trang phục phù hợp
            </span>
            {(query || selectedGender !== 'all') && (
              <button
                onClick={() => {
                  setQuery('');
                  setSelectedGender('all');
                }}
                className="text-[#8B1E1E] font-medium hover:underline cursor-pointer"
              >
                Đặt lại bộ lọc
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <Search className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <p className="text-sm font-semibold text-stone-700">Không tìm thấy bộ trang phục nào khớp với "{query}"</p>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                Thử tìm theo từ khóa rộng hơn như "Áo Giao Lĩnh", "Viên Lĩnh", "Tây Sơn", "Nhật Bình" hoặc xóa bộ lọc.
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  setSelectedGender('all');
                }}
                className="mt-4 px-4 py-2 bg-[#8B1E1E] text-white text-xs font-semibold rounded-xl hover:bg-[#721818] transition-colors"
              >
                Xem tất cả trang phục
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filtered.map(preset => (
                <div
                  key={preset.id}
                  className="bg-white rounded-2xl p-3 border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex gap-3 group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 rounded-xl overflow-hidden bg-stone-100 shrink-0 relative">
                    <HeritageImage
                      src={preset.featuredImage}
                      alt={preset.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-stone-900/80 text-white backdrop-blur-xs">
                      {preset.gender === 'male' ? 'Nam' : 'Nữ'}
                    </span>
                  </div>

                  {/* Information & Action */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block truncate">
                        {preset.period}
                      </span>
                      <h4 className="text-xs sm:text-sm font-serif-royal font-bold text-stone-900 truncate group-hover:text-[#8B1E1E] transition-colors">
                        {preset.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                        {preset.subtitle}
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-end">
                      <button
                        onClick={() => {
                          onSelectOutfitToDress(preset.dressingState);
                          onClose();
                        }}
                        className="px-3 py-1.5 bg-[#8B1E1E] hover:bg-[#721818] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                      >
                        <Shirt className="w-3.5 h-3.5 text-amber-300" />
                        <span>Phối đồ ngay</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
