import React from 'react';
import { CostumeItem } from '../../types';
import { X, BookOpen, Sparkles, MapPin, Calendar, Compass } from 'lucide-react';
import { HeritageImage } from '../common/HeritageImage';

interface CulturalDetailModalProps {
  item: CostumeItem | null;
  onClose: () => void;
}

export const CulturalDetailModal: React.FC<CulturalDetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF9F5] border border-stone-200 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Pattern */}
        <div className="bg-gradient-to-r from-[#8B1E1E] to-[#5C1515] p-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs uppercase tracking-widest text-amber-200/90 font-medium">
            Điển Tích Y Phục Cổ Truyền
          </div>
          <h2 className="text-xl font-serif-royal font-bold text-white tracking-wide mt-1">
            {item.name}
          </h2>
          <div className="text-xs text-stone-200 mt-1 flex items-center gap-2">
            <span>{item.period}</span>
            <span>·</span>
            <span>{item.region}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {item.imageThumbnail && (
            <div className="w-full h-48 rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
              <HeritageImage 
                src={item.imageThumbnail} 
                alt={item.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}

          <div>
            <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#8B1E1E]" />
              <span>Câu chuyện lịch sử &amp; Nguồn gốc</span>
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              {item.historicalStory}
            </p>
          </div>

          <div className="p-3.5 bg-amber-50/80 border border-amber-200/60 rounded-xl">
            <h3 className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>Ý nghĩa văn hóa &amp; Triết lý nhân sinh</span>
            </h3>
            <p className="text-xs text-amber-950 leading-relaxed">
              {item.culturalSignificance}
            </p>
          </div>

          {item.structuralFeatures && (
            <div>
              <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-1">
                Đặc điểm cấu trúc &amp; Cắt may
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.structuralFeatures}
              </p>
            </div>
          )}

          {item.usagePurpose && (
            <div>
              <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-1">
                Mục đích sử dụng
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.usagePurpose}
              </p>
            </div>
          )}

          <div>
            <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-1">
              Chất liệu may mặc
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {item.material}
            </p>
          </div>

          <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
            <span>VÂN NIÊN LỤA · Di sản Văn hóa</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#8B1E1E] text-white rounded-lg hover:bg-[#721818] transition-colors font-medium"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
