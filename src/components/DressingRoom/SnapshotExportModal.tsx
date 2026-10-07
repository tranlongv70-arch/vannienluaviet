import React, { useState } from 'react';
import { DressingState } from '../../types';
import { BACKGROUND_SCENES } from '../../data/costumes';
import { X, Download, Share2, Check, Bookmark } from 'lucide-react';
import { 
  MALE_WARDROBE_DATA, 
  FEMALE_WARDROBE_DATA, 
  SVG_BODY_MALE, 
  SVG_BODY_MALE_NO_ARMS,
  SVG_BODY_FEMALE, 
  SVG_BODY_FEMALE_NO_ARMS,
  SVG_UNDERGARMENT_TOP_MALE, 
  SVG_UNDERGARMENT_TOP_FEMALE, 
  SVG_UNDERGARMENT_BOTTOM_MALE, 
  SVG_UNDERGARMENT_BOTTOM_FEMALE 
} from './fittingAssets';

interface SnapshotExportModalProps {
  dressingState: DressingState;
  onClose: () => void;
  onSaveToLocal: (outfit: DressingState) => void;
  onShareToCommunity: (outfit: DressingState, author: string, desc: string) => void;
}

export const SnapshotExportModal: React.FC<SnapshotExportModalProps> = ({
  dressingState,
  onClose,
  onSaveToLocal,
  onShareToCommunity,
}) => {
  const [outfitName, setOutfitName] = useState(dressingState.name || 'Tác Phẩm Việt Phục');
  const [authorName, setAuthorName] = useState('Nghệ Nhân Khách');
  const [description, setDescription] = useState('Bộ phục trang truyền thống kết hợp tinh tế giữa đường nét cung đình và chất liệu lụa tơ tằm thủ công.');
  const [isSaved, setIsSaved] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const background = BACKGROUND_SCENES.find(b => b.id === dressingState.backgroundId) || BACKGROUND_SCENES[0];

  // Helper to find custom wardrobe items from fittingAssets
  const getWardrobeItem = (id: string | null) => {
    if (!id) return null;
    const wardrobe = dressingState.gender === 'male' ? MALE_WARDROBE_DATA : FEMALE_WARDROBE_DATA;
    for (const cat of ['top', 'bottom', 'hat', 'shoes'] as const) {
      const found = wardrobe[cat]?.find((item: any) => item.id === id);
      if (found) return found;
    }
    return null;
  };

  const getLayerSrc = (category: 'top' | 'bottom' | 'hat' | 'shoes'): string | null => {
    const id = category === 'top' ? dressingState.outerwearId :
               category === 'bottom' ? dressingState.bottomId :
               category === 'hat' ? dressingState.headwearId :
               dressingState.footwearId;
    if (!id) return null;
    const item = getWardrobeItem(id);
    return item ? item.src : null;
  };

  const outerwear = getWardrobeItem(dressingState.outerwearId);
  const bottomItem = getWardrobeItem(dressingState.bottomId);
  const headwear = getWardrobeItem(dressingState.headwearId);
  const shoesItem = getWardrobeItem(dressingState.footwearId);

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });
  };

  const drawWrappedText = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
  };

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // Create off-screen high resolution canvas
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 1100;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. Draw base layout background
      ctx.fillStyle = '#F8F7F2';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Decorative borders
      ctx.strokeStyle = '#8B1E1E';
      ctx.lineWidth = 4;
      ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

      ctx.strokeStyle = '#E0AC3C';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

      // Header Title
      ctx.fillStyle = '#8B1E1E';
      ctx.font = 'bold 36px "Times New Roman", Times, serif';
      ctx.textAlign = 'center';
      ctx.fillText('VÂN NIÊN LỤA', canvas.width / 2, 95);

      ctx.fillStyle = '#5C4033';
      ctx.font = 'italic 16px "Times New Roman", Times, serif';
      ctx.fillText('Bảo Tồn & Tôn Vinh Bản Sắc Cổ Phục Việt Nam', canvas.width / 2, 125);

      // Main Card Box (containing left image & right text details)
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(60, 160, canvas.width - 120, 780);
      ctx.strokeStyle = '#E5E0D8';
      ctx.lineWidth = 1;
      ctx.strokeRect(60, 160, canvas.width - 120, 780);

      // 2. Queue up layers of the dressed mannequin to draw inside left portrait frame
      const layersToLoad: { category: string; src: string }[] = [];

      // Base body
      const hasLongSleeves = dressingState.outerwearId !== null && dressingState.outerwearId !== 'f_top_yem_dongson';
      layersToLoad.push({
        category: 'body',
        src: dressingState.gender === 'male'
          ? (hasLongSleeves ? SVG_BODY_MALE_NO_ARMS : SVG_BODY_MALE)
          : (hasLongSleeves ? SVG_BODY_FEMALE_NO_ARMS : SVG_BODY_FEMALE)
      });

      // Undergarment top
      if (!dressingState.outerwearId) {
        layersToLoad.push({
          category: 'undergarment-top',
          src: dressingState.gender === 'male' ? SVG_UNDERGARMENT_TOP_MALE : SVG_UNDERGARMENT_TOP_FEMALE
        });
      }

      // Undergarment bottom
      if (!dressingState.bottomId) {
        layersToLoad.push({
          category: 'undergarment-bottom',
          src: dressingState.gender === 'male' ? SVG_UNDERGARMENT_BOTTOM_MALE : SVG_UNDERGARMENT_BOTTOM_FEMALE
        });
      }

      // Shoes
      const shoesSrc = getLayerSrc('shoes');
      if (shoesSrc) {
        layersToLoad.push({ category: 'shoes', src: shoesSrc });
      }

      // Bottom
      const bottomSrc = getLayerSrc('bottom');
      if (bottomSrc) {
        layersToLoad.push({ category: 'bottom', src: bottomSrc });
      }

      // Top
      const topSrc = getLayerSrc('top');
      if (topSrc) {
        layersToLoad.push({ category: 'top', src: topSrc });
      }

      // Hat
      const hatSrc = getLayerSrc('hat');
      if (hatSrc) {
        layersToLoad.push({ category: 'hat', src: hatSrc });
      }

      // Load all vector images
      const loadedLayers = await Promise.all(
        layersToLoad.map(layer => 
          loadImage(layer.src).then(img => ({ category: layer.category, img }))
        )
      );

      // Draw portrait box on the left column (x = 90, y = 230, w = 280, h = 392)
      ctx.fillStyle = '#FCFAF2';
      ctx.fillRect(90, 230, 280, 392);

      // Draw each layer over the portrait box
      loadedLayers.forEach(layer => {
        ctx.drawImage(layer.img, 90, 230, 280, 392);
      });

      // Portrait gold frame border
      ctx.strokeStyle = '#E0AC3C';
      ctx.lineWidth = 2;
      ctx.strokeRect(90, 230, 280, 392);

      // Portrait label below image
      ctx.fillStyle = '#78716C';
      ctx.font = 'italic 12px "Times New Roman", Times, serif';
      ctx.textAlign = 'center';
      ctx.fillText('Hình Họa Phối Thể Cổ Phục', 230, 642);

      // 3. Draw Right column textual content
      ctx.textAlign = 'left';
      
      // Outfit Name
      ctx.fillStyle = '#1C1917';
      ctx.font = 'bold 26px "Times New Roman", Times, serif';
      ctx.fillText(outfitName, 400, 260);

      // Author name & creation date
      ctx.font = '14px sans-serif';
      ctx.fillStyle = '#78716C';
      ctx.fillText(`Người phối: ${authorName}  ·  ${new Date().toLocaleDateString('vi-VN')}`, 400, 290);

      // Separator Line
      ctx.strokeStyle = '#E0AC3C';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(400, 310);
      ctx.lineTo(710, 310);
      ctx.stroke();

      // Wrapped Description / Story
      ctx.fillStyle = '#44403C';
      ctx.font = 'italic 13px sans-serif';
      drawWrappedText(ctx, description, 400, 335, 310, 20);

      // Separator Line 2
      ctx.strokeStyle = '#E5E0D8';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(400, 420);
      ctx.lineTo(710, 420);
      ctx.stroke();

      // Subheading
      ctx.fillStyle = '#8B1E1E';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('CHI TIẾT CẤU TẠO PHỤC TRANG:', 400, 445);

      // Details List items
      ctx.fillStyle = '#292524';
      ctx.font = '13px sans-serif';
      let yOffset = 475;
      const details = [
        `Áo khoác ngoài: ${outerwear ? outerwear.name : 'Phối trần / Không khoác'}`,
        `Y phục hạ thân: ${bottomItem ? bottomItem.name : 'Lớp yếm lót cơ bản'}`,
        `Phụ kiện đầu: ${headwear ? headwear.name : 'Tóc trần mộc mạc'}`,
        `Hài / Giày dép: ${shoesItem ? shoesItem.name : 'Không mang dép'}`,
        `Bối cảnh: ${background.name}`,
        `Thời kỳ chủ đạo: ${outerwear?.eraName || bottomItem?.eraName || 'Phối tự do cổ phong'}`
      ];

      details.forEach(detail => {
        ctx.fillText(`• ${detail}`, 400, yOffset);
        yOffset += 28;
      });

      // 4. Draw traditional red seal stamp in bottom right of main card
      ctx.fillStyle = '#8B1E1E';
      ctx.fillRect(610, 810, 100, 100);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 15px "Times New Roman", Times, serif';
      ctx.textAlign = 'center';
      ctx.fillText('VÂN NIÊN', 660, 850);
      ctx.fillText('LỤA ĐIỆN', 660, 880);

      // 5. Draw footer copyright info
      ctx.fillStyle = '#A8A29E';
      ctx.font = '13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('vannienlua.vn · Bảo tồn & Tỏa sáng Di sản Việt', canvas.width / 2, 1010);

      // Trigger file download
      const link = document.createElement('a');
      link.download = `van-nien-lua-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error("Error generating snapshot card:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = () => {
    onSaveToLocal({
      ...dressingState,
      name: outfitName,
      author: authorName,
      createdAt: new Date().toISOString()
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleShare = () => {
    onShareToCommunity({
      ...dressingState,
      name: outfitName
    }, authorName, description);
    setIsShared(true);
    setTimeout(() => {
      setIsShared(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF9F5] border border-stone-300 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-200 bg-white flex items-center justify-between">
          <div>
            <h3 className="text-base font-serif-royal font-bold text-stone-900">
              Xuất Bản Thẻ Y Phục &amp; Chia Sẻ
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Lưu giữ tác phẩm của bạn dưới dạng thẻ di sản nghệ thuật
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Card Preview Framed */}
          <div className="p-5 rounded-xl bg-white border-2 border-[#E0AC3C]/40 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#8B1E1E]" />
            
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              {/* Mini Mannequin Layers Preview on the left */}
              <div 
                className="relative w-[120px] h-[168px] rounded-xl border-2 border-[#E0AC3C]/30 shadow-inner overflow-hidden select-none bg-amber-50/40 shrink-0 flex items-center justify-center"
              >
                {/* Lớp 1: Thân người cơ bản */}
                <img 
                  src={
                    dressingState.gender === 'male'
                      ? (dressingState.outerwearId !== null && dressingState.outerwearId !== 'f_top_yem_dongson' ? SVG_BODY_MALE_NO_ARMS : SVG_BODY_MALE)
                      : (dressingState.outerwearId !== null && dressingState.outerwearId !== 'f_top_yem_dongson' ? SVG_BODY_FEMALE_NO_ARMS : SVG_BODY_FEMALE)
                  } 
                  alt="Hình thể người mẫu" 
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  style={{ zIndex: 10 }}
                />

                {/* Lớp 1b: Áo lót trong */}
                {!dressingState.outerwearId && (
                  <img 
                    src={dressingState.gender === 'male' ? SVG_UNDERGARMENT_TOP_MALE : SVG_UNDERGARMENT_TOP_FEMALE}
                    alt="Lớp áo lót trong"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    style={{ zIndex: 25 }}
                  />
                )}

                {/* Lớp 1c: Quần lót trong */}
                {!dressingState.bottomId && (
                  <img 
                    src={dressingState.gender === 'male' ? SVG_UNDERGARMENT_BOTTOM_MALE : SVG_UNDERGARMENT_BOTTOM_FEMALE}
                    alt="Lớp quần lót trong"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    style={{ zIndex: 11 }}
                  />
                )}

                {/* Shoes */}
                {getLayerSrc('shoes') && (
                  <img 
                    src={getLayerSrc('shoes')!} 
                    alt="Lớp giày hài" 
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    style={{ zIndex: 15 }}
                  />
                )}

                {/* Bottom */}
                {getLayerSrc('bottom') && (
                  <img 
                    src={getLayerSrc('bottom')!} 
                    alt="Lớp quần hoặc váy" 
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    style={{ zIndex: 20 }}
                  />
                )}

                {/* Top */}
                {getLayerSrc('top') && (
                  <img 
                    src={getLayerSrc('top')!} 
                    alt="Lớp áo chính" 
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    style={{ zIndex: 30 }}
                  />
                )}

                {/* Hat */}
                {getLayerSrc('hat') && (
                  <img 
                    src={getLayerSrc('hat')!} 
                    alt="Lớp mũ hoặc khăn" 
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    style={{ zIndex: 50 }}
                  />
                )}
              </div>

              {/* Outfit details on the right */}
              <div className="flex-1 min-w-0 text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E1E] font-bold block">
                  BẢN PHỐI DI SẢN · LƯU TRỮ #{Math.floor(Math.random() * 9000 + 1000)}
                </span>
                <h4 className="text-base font-serif-royal font-bold text-stone-900 mt-0.5 truncate">
                  {outfitName}
                </h4>
                <div className="text-xs text-stone-500 mt-0.5">
                  Thiết kế bởi: <span className="font-medium text-stone-800">{authorName}</span>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px] text-stone-600 border-t border-stone-100 pt-2">
                  <div className="truncate"><span className="text-stone-400">Áo ngoài:</span> {outerwear ? outerwear.name : 'Không'}</div>
                  <div className="truncate"><span className="text-stone-400">Y phục dưới:</span> {bottomItem ? bottomItem.name : 'Không'}</div>
                  <div className="truncate"><span className="text-stone-400">Mũ đội:</span> {headwear ? headwear.name : 'Không'}</div>
                  <div className="truncate"><span className="text-stone-400">Bối cảnh:</span> {background.name}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-3 text-left">
            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                Tên bộ trang phục
              </label>
              <input
                type="text"
                value={outfitName}
                onChange={(e) => setOutfitName(e.target.value)}
                placeholder="VD: Dạ Yến Ngọ Môn Huế"
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                Tên người phối / Nghệ danh
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="VD: Trâm Anh / Minh Khang"
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                Ý tưởng / Cảm hứng thiết kế
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className={`w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                isGenerating 
                  ? 'bg-stone-400 text-stone-200 cursor-not-allowed' 
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>{isGenerating ? 'Đang xuất ảnh...' : 'Tải thẻ ảnh PNG'}</span>
            </button>

            <button
              onClick={handleSave}
              className="w-full sm:flex-1 py-2.5 px-4 bg-white border border-stone-300 hover:border-stone-400 text-stone-800 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSaved ? <Check className="w-4 h-4 text-emerald-600" /> : <Bookmark className="w-4 h-4 text-stone-600" />}
              <span>{isSaved ? 'Đã lưu vào máy!' : 'Lưu bộ đồ'}</span>
            </button>

            <button
              onClick={handleShare}
              className="w-full sm:flex-1 py-2.5 px-4 bg-[#8B1E1E] hover:bg-[#721818] text-white rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              {isShared ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              <span>{isShared ? 'Đã chia sẻ!' : 'Chia sẻ cộng đồng'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
