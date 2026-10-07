import React, { useState } from 'react';
import { 
  CostumeCategory, 
  CostumeItem, 
  DressingState, 
  PresetOutfit 
} from '../../types';
import { 
  COSTUME_ITEMS, 
  TRADITIONAL_COLORS, 
  BACKGROUND_SCENES, 
  PRESET_OUTFITS 
} from '../../data/costumes';
import { 
  Palette, 
  Sparkles, 
  Check, 
  Layers,
  Wand2
} from 'lucide-react';
import { HeritageImage } from '../common/HeritageImage';

interface CustomizationPanelProps {
  dressingState: DressingState;
  activeCategory: CostumeCategory;
  onSelectCategory: (category: CostumeCategory) => void;
  onSelectItem: (category: CostumeCategory, itemId: string | null) => void;
  onUpdateColor: (layer: keyof DressingState['colors'], hex: string) => void;
  onUpdatePattern: (pattern: string) => void;
  onApplyPreset: (preset: PresetOutfit) => void;
  onShowItemDetail: (item: CostumeItem) => void;
  onAutoHarmonize: () => void;
}

type WardrobeTabId = 'presets' | CostumeCategory;

const WARDROBE_TABS: { id: WardrobeTabId; label: string; icon: string }[] = [
  { id: 'presets', label: 'Trọn Bộ (Áo, Quần, Phụ Kiện)', icon: '👑' },
  { id: 'outerwear', label: 'Áo Ngoài', icon: '👘' },
  { id: 'main', label: 'Áo Chính', icon: '👗' },
  { id: 'underlayer', label: 'Yếm Lụa', icon: '🎽' },
  { id: 'bottom', label: 'Quần & Váy', icon: '👖' },
  { id: 'accessory', label: 'Phụ Kiện', icon: '📿' },
  { id: 'headwear', label: 'Mũ & Khăn', icon: '👒' },
  { id: 'footwear', label: 'Hài Guốc', icon: '👡' },
  { id: 'hair', label: 'Kiểu Tóc', icon: '✂️' },
  { id: 'background', label: 'Bối Cảnh', icon: '🏯' },
];

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  dressingState,
  activeCategory,
  onSelectCategory,
  onSelectItem,
  onUpdateColor,
  onUpdatePattern,
  onApplyPreset,
  onAutoHarmonize,
}) => {
  const [panelMode, setPanelMode] = useState<'wardrobe' | 'colors' | 'presets'>('wardrobe');
  const [selectedWardrobeTab, setSelectedWardrobeTab] = useState<WardrobeTabId>('presets');

  // Filter items according to the active category
  const currentCategory = selectedWardrobeTab === 'presets' ? activeCategory : (selectedWardrobeTab as CostumeCategory);
  const currentItems = COSTUME_ITEMS.filter(item => item.category === currentCategory);

  // Active item for current category
  const getActiveItemId = (category: CostumeCategory): string | null => {
    switch (category) {
      case 'outerwear': return dressingState.outerwearId;
      case 'main': return dressingState.mainId;
      case 'underlayer': return dressingState.underlayerId;
      case 'bottom': return dressingState.bottomId;
      case 'headwear': return dressingState.headwearId;
      case 'hair': return dressingState.hairId;
      case 'accessory': return dressingState.accessoryId;
      case 'footwear': return dressingState.footwearId;
      default: return null;
    }
  };

  const activeItemId = getActiveItemId(currentCategory);

  const handleTabClick = (tabId: WardrobeTabId) => {
    setSelectedWardrobeTab(tabId);
    if (tabId !== 'presets') {
      onSelectCategory(tabId as CostumeCategory);
    }
  };

  return (
    <div className="bg-[#FAF9F5] border border-stone-200 rounded-2xl p-5 shadow-lg flex flex-col h-full">
      {/* Top Mode Segmented Control */}
      <div className="flex items-center justify-between gap-2 p-1 bg-stone-200/70 rounded-xl mb-4 text-xs font-medium">
        <button
          onClick={() => {
            setPanelMode('wardrobe');
            setSelectedWardrobeTab('presets');
          }}
          className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            panelMode === 'wardrobe' && selectedWardrobeTab === 'presets'
              ? 'bg-white text-[#8B1E1E] shadow-sm font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Tủ Y Phục</span>
        </button>

        <button
          onClick={() => setPanelMode('colors')}
          className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            panelMode === 'colors'
              ? 'bg-white text-[#8B1E1E] shadow-sm font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Màu Sắc & Lụa</span>
        </button>

        <button
          onClick={() => {
            setPanelMode('wardrobe');
            setSelectedWardrobeTab('presets');
          }}
          className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            panelMode === 'presets'
              ? 'bg-white text-[#8B1E1E] shadow-sm font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Phối Mẫu Sẵn</span>
        </button>
      </div>

      {/* MODE 1: TỦ Y PHỤC (WARDROBE) */}
      {(panelMode === 'wardrobe' || panelMode === 'presets') && (
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Category Tabs: Trọn Bộ (Áo, Quần, Phụ Kiện) + Các lớp lẻ */}
          <div className="flex gap-1.5 overflow-x-auto pb-3 pt-1 border-b border-stone-200/80 mb-3 no-scrollbar">
            {WARDROBE_TABS.map(tab => {
              const isActive = selectedWardrobeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 border ${
                    isActive
                      ? 'bg-[#8B1E1E] text-white border-[#8B1E1E] shadow-sm font-semibold'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-200'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Cultural Suggestion Banner & Info */}
          <div className="mb-3 px-3 py-2 bg-amber-50/80 border border-amber-200/60 rounded-xl flex items-center justify-between text-xs text-amber-900">
            <span className="font-medium text-stone-700">
              {selectedWardrobeTab === 'presets'
                ? 'Mỗi hàng ngang gồm 3 bộ y phục hoàn chỉnh (Áo, Quần, Phụ Kiện)'
                : `Lựa chọn ${WARDROBE_TABS.find(t => t.id === selectedWardrobeTab)?.label || ''} · 3 món / hàng`}
            </span>
            <button
              onClick={onAutoHarmonize}
              className="text-[#8B1E1E] font-semibold hover:underline flex items-center gap-1 shrink-0 ml-2"
              title="Tự động chuẩn hóa màu sắc và tỷ lệ truyền thống"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Chuẩn hóa</span>
            </button>
          </div>

          {/* Content Grid: Exactly 3 items per horizontal row, balanced across rows and columns */}
          <div className="flex-1 overflow-y-auto pr-1">
            {selectedWardrobeTab === 'presets' ? (
              /* TRỌN BỘ Y PHỤC (ÁO, QUẦN, PHỤ KIỆN) - 3 BỘ MỖI HÀNG NGANG */
              <div className="grid grid-cols-3 gap-3 sm:gap-3.5">
                {PRESET_OUTFITS.map(preset => {
                  const isSelected = dressingState.name === preset.dressingState.name;
                  return (
                    <div
                      key={preset.id}
                      onClick={() => onApplyPreset(preset)}
                      className={`group relative rounded-xl border p-2 sm:p-2.5 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-2 border-[#8B1E1E] bg-[#FFF8F8] shadow-md ring-2 ring-[#8B1E1E]/20'
                          : 'border-stone-200 hover:border-stone-400 bg-white shadow-sm hover:shadow-md'
                      }`}
                    >
                      {/* 1. Tên ở phía trên - Căn giữa, chiều cao cố định đảm bảo hàng ngang thẳng tắp */}
                      <div className="flex items-center justify-center mb-2 px-0.5 h-10 min-h-[2.5rem]">
                        <h4 className="text-xs font-serif-royal font-semibold text-stone-900 group-hover:text-[#8B1E1E] transition-colors text-center line-clamp-2 leading-tight">
                          {preset.title}
                        </h4>
                        {isSelected && (
                          <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center shadow-sm z-10">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>

                      {/* 2. Ảnh - Khối hình chữ nhật vừa đủ để chứa ảnh và cho người dùng dễ nhìn */}
                      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-200/80">
                        <HeritageImage 
                          src={preset.featuredImage} 
                          alt={preset.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : selectedWardrobeTab === 'background' ? (
              /* BỐI CẢNH CỐ ĐÔ - 3 KHỐI MỖI HÀNG NGANG */
              <div className="grid grid-cols-3 gap-3 sm:gap-3.5">
                {BACKGROUND_SCENES.map(scene => {
                  const isSelected = dressingState.backgroundId === scene.id;
                  return (
                    <div
                      key={scene.id}
                      onClick={() => onSelectItem('background', scene.id)}
                      className={`group relative rounded-xl border p-2 sm:p-2.5 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-2 border-[#8B1E1E] bg-[#FFF8F8] shadow-md ring-2 ring-[#8B1E1E]/20'
                          : 'border border-stone-200 hover:border-stone-400 bg-white shadow-sm hover:shadow-md'
                      }`}
                    >
                      {/* Tên ở phía trên */}
                      <div className="flex items-center justify-center mb-2 px-0.5 h-10 min-h-[2.5rem]">
                        <h4 className="text-xs font-serif-royal font-semibold text-stone-900 group-hover:text-[#8B1E1E] transition-colors text-center line-clamp-2 leading-tight">
                          {scene.name}
                        </h4>
                        {isSelected && (
                          <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center shadow-sm z-10">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>

                      {/* Khung ảnh */}
                      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-200/80">
                        {scene.previewUrl ? (
                          <HeritageImage
                            src={scene.previewUrl}
                            alt={scene.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-r ${scene.bgGradient}`} />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* CÁC MÓN Y PHỤC ĐƠN LẺ (ÁO, QUẦN, PHỤ KIỆN) - 3 MÓN MỖI HÀNG NGANG */
              <div className="grid grid-cols-3 gap-3 sm:gap-3.5">
                {/* Lựa chọn "Không sử dụng / Bỏ chọn" cho các lớp tùy chọn */}
                {['outerwear', 'underlayer', 'headwear', 'accessory'].includes(selectedWardrobeTab) && (
                  <div
                    onClick={() => onSelectItem(selectedWardrobeTab as CostumeCategory, null)}
                    className={`group relative rounded-xl border p-2 sm:p-2.5 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                      activeItemId === null
                        ? 'border-2 border-[#8B1E1E] bg-[#FFF8F8] shadow-md ring-2 ring-[#8B1E1E]/20'
                        : 'border border-dashed border-stone-300 hover:border-stone-400 bg-stone-50/60'
                    }`}
                  >
                    {/* Tên ở phía trên */}
                    <div className="flex items-center justify-center mb-2 px-0.5 h-10 min-h-[2.5rem]">
                      <h4 className={`text-xs font-serif-royal font-semibold text-center line-clamp-2 leading-tight ${
                        activeItemId === null ? 'text-[#8B1E1E]' : 'text-stone-600'
                      }`}>
                        Không sử dụng
                      </h4>
                      {activeItemId === null && (
                        <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center shadow-sm z-10">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>

                    {/* Khung ảnh placeholder */}
                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100/70 border border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400 group-hover:text-stone-600 transition-colors">
                      <span className="text-2xl mb-1">🚫</span>
                      <span className="text-[11px] font-medium">Bỏ chọn</span>
                    </div>
                  </div>
                )}

                {/* Các món y phục: Tên phía trên, Ảnh phía dưới, đúng 3 khối mỗi hàng ngang */}
                {currentItems.map(item => {
                  const isSelected = activeItemId === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`group relative rounded-xl border p-2 sm:p-2.5 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-2 border-[#8B1E1E] bg-[#FFF8F8] shadow-md ring-2 ring-[#8B1E1E]/20'
                          : 'border border-stone-200 hover:border-stone-400 bg-white shadow-sm hover:shadow-md'
                      }`}
                      onClick={() => onSelectItem(selectedWardrobeTab as CostumeCategory, item.id)}
                    >
                      {/* 1. Tên ở phía trên - Cân đối và đồng đều hàng ngang */}
                      <div className="flex items-center justify-center mb-2 px-0.5 h-10 min-h-[2.5rem]">
                        <h4 className="text-xs font-serif-royal font-semibold text-stone-900 group-hover:text-[#8B1E1E] transition-colors text-center line-clamp-2 leading-tight">
                          {item.name}
                        </h4>
                        {isSelected && (
                          <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center shadow-sm z-10">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>

                      {/* 2. Ảnh - Khối hình chữ nhật chuẩn mực, hình ảnh rõ nét */}
                      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-stone-100 border border-stone-200/80">
                        <HeritageImage 
                          src={item.imageThumbnail} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODE 2: MÀU SẮC & LỤA */}
      {panelMode === 'colors' && (
        <div className="flex flex-col flex-1 overflow-y-auto pr-1 space-y-5">
          {/* Section A: Selected Layer Color Control */}
          <div>
            <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
              Điều chỉnh màu sắc theo lớp
            </h3>
            
            {/* Layer selector */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { key: 'outerwear', label: 'Áo Ngoài', val: dressingState.colors.outerwear },
                { key: 'main', label: 'Áo Chính', val: dressingState.colors.main },
                { key: 'underlayer', label: 'Yếm Lụa', val: dressingState.colors.underlayer },
                { key: 'bottom', label: 'Quần / Váy', val: dressingState.colors.bottom },
                { key: 'headwear', label: 'Mũ / Khăn', val: dressingState.colors.headwear },
              ].map(layer => (
                <div 
                  key={layer.key}
                  className="p-2.5 bg-white border border-stone-200 rounded-xl flex items-center justify-between"
                >
                  <div className="text-xs font-medium text-stone-700">{layer.label}</div>
                  <div className="flex items-center gap-1.5">
                    <span 
                      className="w-4 h-4 rounded-full border border-stone-300 shadow-inner" 
                      style={{ backgroundColor: layer.val }} 
                    />
                    <input
                      type="color"
                      value={layer.val}
                      onChange={(e) => onUpdateColor(layer.key as keyof DressingState['colors'], e.target.value)}
                      className="w-6 h-6 p-0 border-0 rounded cursor-pointer opacity-80 hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section B: Traditional Vietnamese Color Palette */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                Bảng màu truyền thống Việt Nam
              </h3>
              <span className="text-[11px] text-stone-500">Bản sắc cổ truyền</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TRADITIONAL_COLORS.map(c => (
                <div
                  key={c.hex}
                  onClick={() => onUpdateColor('main', c.hex)}
                  className="p-2.5 bg-white border border-stone-200 hover:border-stone-400 rounded-xl cursor-pointer transition-all flex items-center gap-2.5 group"
                >
                  <span 
                    className="w-7 h-7 rounded-lg border border-black/10 shrink-0 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-stone-800 group-hover:text-[#8B1E1E] transition-colors truncate">
                      {c.name}
                    </div>
                    <div className="text-[10px] text-stone-500 truncate">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section C: Historical Silk Textures */}
          <div>
            <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
              Họa tiết gấm & dệt truyền thống
            </h3>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'lotus', name: 'Hoa Sen Thanh Tịnh', icon: '🪷' },
                { id: 'cloud', name: 'Mây Thủy Ba Cung Đình', icon: '☁️' },
                { id: 'phoenix', name: 'Phượng Hoàng Sa Kim', icon: '🕊️' },
                { id: 'brocade', name: 'Thổ Cẩm Quả Trám', icon: '✨' },
                { id: 'plain', name: 'Tơ Tằm Trơn Óng', icon: '📜' },
              ].map(p => {
                const isSelected = dressingState.pattern === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => onUpdatePattern(p.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? 'border-[#8B1E1E] bg-white ring-2 ring-[#8B1E1E]/20 text-[#8B1E1E] font-semibold'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span className="text-lg">{p.icon}</span>
                    <span className="text-[11px] leading-tight">{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
