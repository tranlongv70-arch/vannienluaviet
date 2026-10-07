import React, { useState } from 'react';
import { PRESET_OUTFITS } from '../data/costumes';
import { PresetOutfit, DressingState } from '../types';
import { Shirt, ChevronRight, Layers, MapPin, Calendar, BookOpen, User, Users, Search, X, RotateCcw } from 'lucide-react';
import { HeritageImage } from './common/HeritageImage';

interface CollectionsViewProps {
  onSelectOutfitToDress: (dressingState: DressingState) => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({ onSelectOutfitToDress }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<'all' | 'male' | 'female'>('all');
  const [selectedEra, setSelectedEra] = useState<number | 'all'>('all');
  const [selectedDetailPreset, setSelectedDetailPreset] = useState<PresetOutfit | null>(null);

  const eraOptions: { id: number | 'all'; label: string }[] = [
    { id: 'all', label: 'Tất Cả 7 Thời Kỳ' },
    { id: 1, label: '1. Văn Lang - Âu Lạc' },
    { id: 2, label: '2. Ngô - Đinh - Tiền Lê' },
    { id: 3, label: '3. Lý - Trần - Hồ' },
    { id: 4, label: '4. Hậu Lê & Triều Mạc' },
    { id: 5, label: '5. Triều Tây Sơn' },
    { id: 6, label: '6. Triều Nguyễn' },
    { id: 7, label: '7. Thế Kỷ XXI' },
  ];

  const suggestedKeywords = [
    'Giao Lĩnh',
    'Viên Lĩnh',
    'Tứ Điên',
    'Đối Khâm',
    'Nhật Bình',
    'Tứ Thân',
    'Tây Sơn',
    'Cách Tân',
    'Lạc Việt'
  ];

  const filteredPresets = PRESET_OUTFITS.filter(preset => {
    const matchesGender = selectedGender === 'all' || preset.gender === selectedGender;
    const matchesEra = selectedEra === 'all' || preset.eraNumber === selectedEra;
    if (!matchesGender || !matchesEra) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const searchTarget = [
      preset.title,
      preset.subtitle,
      preset.period,
      preset.region,
      preset.culturalSignificance,
      preset.historicalStory,
      preset.structuralFeatures,
      preset.usagePurpose,
      preset.gender === 'male' ? 'nam phái mạnh' : 'nữ phụ nữ'
    ].join(' ').toLowerCase();

    return searchTarget.includes(q);
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGender('all');
    setSelectedEra('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <span className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
          Tuyển Tập Y Phục 7 Thời Kỳ · Kho Tàng Di Sản
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-royal font-bold text-stone-900 tracking-tight mt-1">
          Bản Sắc Việt Phục Qua Bảy Kỷ Nguyên
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
          Tổng hợp đầy đủ các mẫu phục trang đặc trưng của người Việt từ thời dựng nước Hùng Vương đến kỷ nguyên đương đại TK XXI, phân chia rõ nét theo giới tính Nam và Nữ.
        </p>
      </div>

      {/* SEARCH BAR & FILTER TOOL */}
      <div className="bg-white border border-stone-200 rounded-3xl p-5 sm:p-6 shadow-sm mb-8 space-y-4">
        {/* CÔNG CỤ TÌM KIẾM TRỰC TIẾP */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-[#8B1E1E] absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm nhanh trang phục (ví dụ: Nhật Bình, Giao Lĩnh, Tây Sơn, Viên Lĩnh, Áo Dài, Tứ Thân...)"
            className="w-full pl-11 pr-10 py-3 text-xs sm:text-sm bg-stone-50 border border-stone-200 hover:border-stone-300 focus:border-[#8B1E1E] focus:bg-white focus:outline-none rounded-2xl transition-all font-medium text-stone-900 placeholder:text-stone-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
              title="Xóa từ khóa"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Thanh từ khóa gợi ý tìm kiếm nhanh */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider shrink-0 mr-1">
            Gợi ý:
          </span>
          {suggestedKeywords.map(kw => {
            const isSelected = searchQuery.toLowerCase() === kw.toLowerCase();
            return (
              <button
                key={kw}
                onClick={() => setSearchQuery(isSelected ? '' : kw)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#8B1E1E] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-amber-100/70 hover:text-amber-900 border border-stone-200'
                }`}
              >
                {kw}
              </button>
            );
          })}
        </div>

        {/* BỘ LỌC GIỚI TÍNH & 7 THỜI ĐẠI */}
        <div className="pt-3 border-t border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Lọc Giới Tính */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-stone-700 mr-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#8B1E1E]" />
              Giới tính:
            </span>
            <button
              onClick={() => setSelectedGender('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                selectedGender === 'all'
                  ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border-stone-200'
              }`}
            >
              Tất Cả
            </button>
            <button
              onClick={() => setSelectedGender(selectedGender === 'female' ? 'all' : 'female')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                selectedGender === 'female'
                  ? 'bg-[#8B1E1E] text-white border-[#8B1E1E] shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border-stone-200'
              }`}
            >
              Trang Phục Nữ
            </button>
            <button
              onClick={() => setSelectedGender(selectedGender === 'male' ? 'all' : 'male')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                selectedGender === 'male'
                  ? 'bg-[#1E3A5F] text-white border-[#1E3A5F] shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border-stone-200'
              }`}
            >
              Trang Phục Nam
            </button>
          </div>

          {/* Lọc 7 Thời Kỳ */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            {eraOptions.map(opt => {
              const isActive = selectedEra === opt.id;
              return (
                <button
                  key={String(opt.id)}
                  onClick={() => setSelectedEra(isActive ? 'all' : opt.id)}
                  className={`px-2.5 py-1.5 rounded-xl text-[11px] font-medium whitespace-nowrap transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-white text-stone-600 hover:bg-stone-50 border-stone-200'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Trạng thái kết quả tìm kiếm */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <span>
            Hiển thị <strong className="text-stone-900">{filteredPresets.length}</strong> / {PRESET_OUTFITS.length} bộ trang phục
            {searchQuery && (
              <span> cho từ khóa "<strong className="text-[#8B1E1E]">{searchQuery}</strong>"</span>
            )}
          </span>
          {(searchQuery || selectedGender !== 'all' || selectedEra !== 'all') && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-[#8B1E1E] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Xóa bộ lọc</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid of Collection Cards or Empty State */}
      {filteredPresets.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center my-6 shadow-sm">
          <Search className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="text-base font-serif-royal font-bold text-stone-800">
            Không tìm thấy trang phục phù hợp
          </h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto mt-1 leading-relaxed">
            Không có mẫu phục trang nào khớp với từ khóa "{searchQuery}" trong bộ lọc hiện tại. Hãy thử tìm bằng các từ khóa phổ biến như Áo Tấc, Nhật Bình, Giao Lĩnh hoặc đặt lại bộ lọc.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-5 px-5 py-2.5 bg-[#8B1E1E] hover:bg-[#721818] text-white rounded-xl text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Xem lại toàn bộ trang phục</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPresets.map(preset => (
          <div
            key={preset.id}
            className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image Frame with badges */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                {preset.featuredImage && (
                  <HeritageImage
                    src={preset.featuredImage}
                    alt={preset.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg shadow-sm ${
                    preset.gender === 'male'
                      ? 'bg-blue-900/90 text-blue-100 border border-blue-400/30'
                      : 'bg-rose-900/90 text-rose-100 border border-rose-400/30'
                  }`}>
                    {preset.gender === 'male' ? 'Trang Phục Nam' : 'Trang Phục Nữ'}
                  </span>
                  <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-amber-200 text-[10px] font-medium rounded-lg border border-white/10">
                    Thời kỳ {preset.eraNumber}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                    {preset.period}
                  </span>
                  <h3 className="text-lg font-serif-royal font-bold text-white mt-0.5 leading-snug">
                    {preset.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {preset.description}
                </p>

                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-[11px] text-stone-700">
                  <strong className="text-stone-900 block mb-0.5 font-semibold">Ý nghĩa văn hóa:</strong>
                  <p className="line-clamp-2 leading-relaxed text-stone-600">{preset.culturalSignificance}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-5 pt-0 flex items-center gap-2.5">
              <button
                onClick={() => onSelectOutfitToDress(preset.dressingState)}
                className="flex-1 py-2.5 px-3 bg-[#8B1E1E] hover:bg-[#721818] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs"
              >
                <Shirt className="w-3.5 h-3.5 text-amber-300" />
                <span>Phối Trang Phục</span>
              </button>

              <button
                onClick={() => setSelectedDetailPreset(preset)}
                className="p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs transition-colors"
                title="Xem điển tích lịch sử"
              >
                <BookOpen className="w-4 h-4 text-stone-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
      )}

      {/* DETAIL MODAL */}
      {selectedDetailPreset && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-[#FAF9F5] border border-stone-200 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#8B1E1E] to-[#5C1515] p-5 text-white relative">
              <button
                onClick={() => setSelectedDetailPreset(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                ✕
              </button>
              <div className="text-[11px] uppercase tracking-widest text-amber-200 font-semibold">
                {selectedDetailPreset.period} &bull; {selectedDetailPreset.gender === 'male' ? 'Trang Phục Nam' : 'Trang Phục Nữ'}
              </div>
              <h2 className="text-xl font-serif-royal font-bold text-white tracking-wide mt-1">
                {selectedDetailPreset.title}
              </h2>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-xs text-stone-700">
              <div>
                <h3 className="font-semibold text-stone-900 uppercase tracking-wider mb-1">
                  Ý Nghĩa Văn Hóa &amp; Triết Lý
                </h3>
                <p className="leading-relaxed bg-amber-50/60 p-3 rounded-xl border border-amber-200/50 text-stone-800">
                  {selectedDetailPreset.culturalSignificance}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-stone-900 uppercase tracking-wider mb-1">
                  Câu Chuyện Lịch Sử
                </h3>
                <p className="leading-relaxed text-stone-600">
                  {selectedDetailPreset.historicalStory}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-stone-900 uppercase tracking-wider mb-1">
                  Đặc Điểm Cấu Trúc Cắt May
                </h3>
                <p className="leading-relaxed text-stone-600">
                  {selectedDetailPreset.structuralFeatures}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-stone-900 uppercase tracking-wider mb-1">
                  Mục Đích Sử Dụng
                </h3>
                <p className="leading-relaxed text-stone-600">
                  {selectedDetailPreset.usagePurpose}
                </p>
              </div>

              <button
                onClick={() => {
                  onSelectOutfitToDress(selectedDetailPreset.dressingState);
                  setSelectedDetailPreset(null);
                }}
                className="w-full py-3 bg-[#8B1E1E] hover:bg-[#721818] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all mt-4"
              >
                <Shirt className="w-4 h-4 text-amber-300" />
                <span>Mở Trong Phòng Phối Đồ</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
