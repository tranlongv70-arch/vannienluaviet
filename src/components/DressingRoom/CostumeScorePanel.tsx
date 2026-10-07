import React, { useState } from 'react';
import { 
  Award, 
  AlertTriangle, 
  Sparkles, 
  Palette, 
  Calendar, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { CostumeEvaluation } from './costumeEvaluator';

interface CostumeScorePanelProps {
  evaluation: CostumeEvaluation;
  onApplyFix?: (slot: 'hat' | 'top' | 'bottom' | 'shoes', itemId: string) => void;
  className?: string;
}

export const CostumeScorePanel: React.FC<CostumeScorePanelProps> = ({
  evaluation,
  onApplyFix,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Tính toán màu sắc dựa trên điểm số
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-700 bg-emerald-50 border-emerald-300';
    if (score >= 75) return 'text-amber-700 bg-amber-50 border-amber-300';
    if (score >= 60) return 'text-orange-700 bg-orange-50 border-orange-300';
    return 'text-rose-700 bg-rose-50 border-rose-300';
  };

  const getProgressColor = (score: number, max: number) => {
    const ratio = score / max;
    if (ratio >= 0.85) return 'bg-emerald-500';
    if (ratio >= 0.7) return 'bg-amber-500';
    if (ratio >= 0.5) return 'bg-orange-500';
    return 'bg-rose-500';
  };

  return (
    <div className={`w-full bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-all duration-300 ${className}`}>
      {/* Header Bar */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="px-4 py-3 bg-[#FAF8F5] border-b border-stone-200 flex items-center justify-between cursor-pointer select-none hover:bg-stone-100/70 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#8B1E1E] text-amber-300 flex items-center justify-center shadow-xs">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
              <span>Đánh Giá & Chấm Điểm Phục Trang</span>
              {evaluation.warnings.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-semibold bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-0.5">
                  <AlertTriangle className="w-2.5 h-2.5" />
                  {evaluation.warnings.length} lưu ý
                </span>
              )}
            </h4>
            <p className="text-[10px] text-stone-500">
              Tiêu chuẩn mỹ học &amp; chuẩn xác lịch sử Việt Phục
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Huy hiệu điểm số tóm tắt */}
          <div className={`px-2.5 py-1 rounded-xl border text-xs font-extrabold flex items-center gap-1 shadow-2xs ${getScoreColor(evaluation.score)}`}>
            <span className="text-sm font-serif-royal">{evaluation.score}</span>
            <span className="text-[10px] font-normal opacity-70">/100</span>
          </div>

          <button 
            className="text-stone-400 hover:text-stone-600 transition-colors"
            aria-label="Thu gọn hoặc mở rộng bảng đánh giá"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Nội dung chi tiết */}
      {isExpanded && (
        <div className="p-4 space-y-4 text-left animate-in fade-in duration-200">
          
          {/* Khối Điểm số & Xếp hạng */}
          <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-gradient-to-r from-[#FAF9F5] via-amber-50/40 to-stone-50 border border-stone-200">
            <div className="flex items-center gap-3.5">
              {/* Vòng tròn điểm số hoàng gia */}
              <div className="relative w-14 h-14 rounded-full border-2 border-amber-300/80 bg-white shadow-xs flex flex-col items-center justify-center shrink-0">
                <span className="text-lg font-serif-royal font-black text-[#8B1E1E] leading-none">
                  {evaluation.score}
                </span>
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-tighter mt-0.5">
                  Điểm
                </span>
                {/* Viền hào quang */}
                <div className="absolute inset-0 rounded-full border border-[#E0AC3C]/40 animate-pulse pointer-events-none" />
              </div>

              <div>
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border mb-1 ${evaluation.badgeColor}`}>
                  {evaluation.title}
                </span>
                <p className="text-xs text-stone-600 leading-snug">
                  {evaluation.summary}
                </p>
              </div>
            </div>
          </div>

          {/* 3 Trụ cột chấm điểm bình đẳng (100đ tổng) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            {/* 1. Mỹ học Sắc tông (34đ) */}
            <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-semibold text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-amber-800" />
                  <span className="font-bold">1. Phối Màu &amp; Sắc Tông</span>
                </span>
                <span className="font-mono font-bold text-[#8B1E1E]">{evaluation.colorScore}/34đ</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-stone-200 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${getProgressColor(evaluation.colorScore, 34)}`}
                  style={{ width: `${(evaluation.colorScore / 34) * 100}%` }}
                />
              </div>
              <div className="text-[10px] text-stone-600 truncate font-medium">
                Ngũ hành &amp; hài hòa (34%)
              </div>
            </div>

            {/* 2. Cấu trúc Y phục (33đ) */}
            <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-semibold text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-800" />
                  <span className="font-bold">2. Cấu Trúc Y Phục</span>
                </span>
                <span className="font-mono font-bold text-stone-900">{evaluation.structureScore}/33đ</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-stone-200 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${getProgressColor(evaluation.structureScore, 33)}`}
                  style={{ width: `${(evaluation.structureScore / 33) * 100}%` }}
                />
              </div>
              <div className="text-[10px] text-stone-500 truncate">
                {evaluation.itemsCount}/4 chi tiết (33%)
              </div>
            </div>

            {/* 3. Sáng tạo & Thần thái Cổ phong (33đ) */}
            <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-semibold text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                  <span className="font-bold">3. Sáng Tạo Cổ Phong</span>
                </span>
                <span className="font-mono font-bold text-stone-900">{evaluation.eraScore}/33đ</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-stone-200 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${getProgressColor(evaluation.eraScore, 33)}`}
                  style={{ width: `${(evaluation.eraScore / 33) * 100}%` }}
                />
              </div>
              <div className="text-[10px] text-stone-500 truncate">
                {evaluation.dominantEraName || 'Cổ phong giao thoa'} (33%)
              </div>
            </div>
          </div>

          {/* Cảnh báo sai lệch (nếu có) */}
          {evaluation.warnings.length > 0 && (
            <div className="p-3 rounded-xl bg-rose-50/90 border border-rose-200 text-xs text-rose-900 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-rose-800 uppercase text-[10px] tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Cảnh báo sai lệch &amp; Xung đột y phục:</span>
              </div>
              <ul className="space-y-1 pl-4 list-disc text-rose-900/90 leading-relaxed text-[11px]">
                {evaluation.warnings.map((warn, idx) => (
                  <li key={idx}>{warn}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Gợi ý của Cố vấn Văn hóa */}
          {evaluation.suggestions.length > 0 && (
            <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-amber-900 uppercase text-[10px] tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Gợi ý chuẩn hóa &amp; Nghệ thuật phối màu:</span>
              </div>
              <ul className="space-y-1 pl-4 list-disc text-stone-700 leading-relaxed text-[11px]">
                {evaluation.suggestions.map((sug, idx) => (
                  <li key={idx}>{sug}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Đề xuất sửa nhanh (Quick One-Click Fix) */}
          {evaluation.recommendedFix && onApplyFix && (
            <div className="p-3 rounded-xl bg-[#8B1E1E]/5 border border-[#8B1E1E]/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                <div className="text-[11px] text-stone-800">
                  <span className="font-bold text-[#8B1E1E]">Gợi ý tối ưu chuẩn mực: </span>
                  <span>{evaluation.recommendedFix.reason}</span>
                </div>
              </div>

              <button
                onClick={() => onApplyFix(evaluation.recommendedFix!.slot, evaluation.recommendedFix!.itemId)}
                className="px-3 py-1.5 bg-[#8B1E1E] hover:bg-[#721818] text-white text-[11px] font-bold rounded-lg transition-all shadow-xs flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>Đổi sang {evaluation.recommendedFix.itemName}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Quy chuẩn văn hóa cổ phục */}
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
            <span className="flex items-center gap-1">
              <HelpCircle className="w-3 h-3" />
              <span>Tiêu chuẩn dựa trên Cương thường Y miện &amp; Khảo cứu Di sản</span>
            </span>
            <span className="font-serif-royal font-semibold text-amber-800">
              VÂN NIÊN LỤA
            </span>
          </div>

        </div>
      )}
    </div>
  );
};
