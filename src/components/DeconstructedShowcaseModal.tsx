import React from 'react';
import { X, Sparkles, Check, ChevronRight, Layers, ArrowUpRight, Shirt } from 'lucide-react';
import { DressingState, CostumeItem } from '../types';
import { COSTUME_ITEMS, PRESET_OUTFITS } from '../data/costumes';
import { IMAGES } from '../assets/images';
import { HeritageImage } from './common/HeritageImage';

interface DeconstructedShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFullOutfit: (dressingState: DressingState) => void;
  onApplySingleItem: (item: CostumeItem) => void;
}

export const DeconstructedShowcaseModal: React.FC<DeconstructedShowcaseModalProps> = ({
  isOpen,
  onClose,
  onApplyFullOutfit,
  onApplySingleItem,
}) => {
  if (!isOpen) return null;

  // Retrieve the preset outfit
  const preset = PRESET_OUTFITS.find(p => p.id === 'preset-giao-linh-hong-phan' || p.id === 'preset-ndl-nu') || PRESET_OUTFITS[0];

  // Retrieve individual components
  const outerItem = COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-giaolinh-hongphan');
  const mainItem = COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-ao-canh-trang');
  const bottomItem = COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-vay-xeply-do');
  const necklaceItem = COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-vong-co-do');
  const umbrellaItem = COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-o-do');
  const shoeItem = COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-hai-theu');

  const components = [
    {
      slot: 'ÁO NGOÀI / LỄ PHỤC',
      slotColor: 'bg-rose-100 text-rose-800 border-rose-200',
      item: outerItem,
      details: 'Áo Giao Lĩnh tay thụng dệt lụa đũi tơ tằm thô mộc màu hồng phấn đào, viền cổ nhạt e ấp, lớp lót trong sắc đỏ son rực rỡ lấp ló ở cửa tay thụng và hai bên tà xẻ buộc nơ.',
      colorHex: '#EDA8AF',
      secondaryColor: '#A61C2E',
    },
    {
      slot: 'ÁO TRONG / ÁO CHÍNH',
      slotColor: 'bg-amber-100 text-amber-800 border-amber-200',
      item: mainItem,
      details: 'Áo cánh trắng tinh khôi cổ đứng thấp đoan trang, xẻ vạt cài hàng khuy tết tơ chéo ngực phải truyền thống, phom dáng gọn gàng thanh thoát làm nền.',
      colorHex: '#FAF8F5',
      secondaryColor: '#E2DAC9',
    },
    {
      slot: 'CHÂN VÁY HẠ THÂN',
      slotColor: 'bg-red-100 text-red-800 border-red-200',
      item: bottomItem,
      details: 'Chân váy lụa voan xếp ly đỏ ruby nhiều tầng bồng bềnh thướt tha, nếp dập đều tăm tắp tạo nhịp bước mềm mại và độ rủ kiêu sa.',
      colorHex: '#A61C2E',
      secondaryColor: '#781522',
    },
    {
      slot: 'TRANG SỨC CỔ',
      slotColor: 'bg-red-100 text-red-800 border-red-200',
      item: necklaceItem,
      details: 'Chuỗi tràng hạt hồng ngọc đỏ son dạng vòng chữ U buông lơi dài trước ngực, mang đến khí chất tiểu thư khuê các quyền quý.',
      colorHex: '#A61C2E',
      secondaryColor: '#F48A96',
    },
    {
      slot: 'PHỤ KIỆN CẦM TAY',
      slotColor: 'bg-red-100 text-red-800 border-red-200',
      item: umbrellaItem,
      details: 'Ô giấy dầu đỏ chu sa nan trúc thủ công truyền thống, cấu trúc nan xòe đối xứng hoàn mỹ, điểm nhấn thi vị cho các buổi du ngoạn thưởng hoa.',
      colorHex: '#B91C1C',
      secondaryColor: '#D97706',
    },
    {
      slot: 'HÀI ĐI CHÂN',
      slotColor: 'bg-stone-100 text-stone-800 border-stone-200',
      item: shoeItem,
      details: 'Hài vải trắng ngà mũi tròn đế mềm thêu hoa đào đỏ thắm tinh xảo, bước đi nhẹ nhàng thanh tịnh.',
      colorHex: '#FAF8F5',
      secondaryColor: '#B91C1C',
    },
  ];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="bg-[#FAF9F5] border border-stone-300 rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#8B1E1E] via-[#701616] to-[#451010] p-5 sm:p-6 text-white flex items-center justify-between relative border-b border-amber-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-amber-200 text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Chuyên Đề Thiết Kế Cổ Phong</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif-royal font-bold text-white tracking-wide">
              {preset.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
              Phân tách chuẩn mực chi tiết từng lớp y phục theo bố cục nghiên cứu: Toàn phục cân đối bên trái và 6 thành phần tách lớp bên phải.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
            title="Đóng bảng chi tiết"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Main Content (Split View) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT PANEL: HÌNH ẢNH TOÀN PHỤC CÂN ĐỐI & HÀI HÒA (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-5 sticky lg:top-0">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="text-xs font-serif-royal font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8B1E1E]" />
                  <span>Hình Ảnh Toàn Phục Hoàn Chỉnh</span>
                </span>
                <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Phối Màu Chuẩn Lịch Sử
                </span>
              </div>

              {/* Master Full-Outfit Image */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-inner group">
                <HeritageImage
                  src={preset.featuredImage || IMAGES.giaoLinhTuongVanNu}
                  fallbackSrc="/images/giaolinh_tuongvan_nu_1791342628625.jpg"
                  alt="Giao Lĩnh Hồng Phấn Tường Vân Toàn Phục"
                  className="w-full h-[420px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Soft gradient bottom badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <div className="text-[11px] uppercase tracking-widest text-amber-300 font-medium">
                    {preset.period} · {preset.region}
                  </div>
                  <h3 className="text-lg font-serif-royal font-bold text-white mt-0.5">
                    {preset.title}
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 line-clamp-2 leading-relaxed">
                    Sắc hồng phấn đào thanh tao phối lót đỏ son, ôm trọn dáng dấp đài các của phụ nữ Đại Việt.
                  </p>
                </div>
              </div>

              {/* Color Palette Harmonization Bar */}
              <div className="p-3.5 bg-[#FAF9F5] rounded-xl border border-stone-200 space-y-2">
                <div className="text-[11px] font-semibold text-stone-700 uppercase tracking-wider flex items-center justify-between">
                  <span>Hệ Màu Ngũ Hành Tương Sinh:</span>
                  <span className="text-amber-800 font-mono text-[10px]">Hồng Phấn · Đỏ Ruby · Trắng Ngà</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                  <div className="p-1.5 rounded-lg bg-white border border-stone-200">
                    <span className="block w-full h-3 rounded mb-1" style={{ backgroundColor: '#EDA8AF' }} />
                    <span className="text-stone-600">Hồng Phấn</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white border border-stone-200">
                    <span className="block w-full h-3 rounded mb-1" style={{ backgroundColor: '#A61C2E' }} />
                    <span className="text-stone-600">Đỏ Ruby</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white border border-stone-200">
                    <span className="block w-full h-3 rounded mb-1" style={{ backgroundColor: '#FAF8F5' }} />
                    <span className="text-stone-600">Trắng Ngà</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white border border-stone-200">
                    <span className="block w-full h-3 rounded mb-1" style={{ backgroundColor: '#B91C1C' }} />
                    <span className="text-stone-600">Đỏ Chu Sa</span>
                  </div>
                </div>
              </div>

              {/* One-click Full Dress Action */}
              <button
                onClick={() => {
                  onApplyFullOutfit(preset.dressingState);
                  onClose();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#8B1E1E] to-[#701616] hover:from-[#721818] hover:to-[#5a1111] text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Shirt className="w-4 h-4 text-amber-300" />
                <span>Khoác Toàn Bộ Bản Phối Này Lên Người Mẫu</span>
                <ChevronRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>

            {/* RIGHT PANEL: CÁC THÀNH PHẦN ĐƯỢC PHÂN TÁCH ĐÚNG VỊ TRÍ MỖI LOẠI (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div>
                  <span className="text-xs font-serif-royal font-bold text-stone-900 uppercase tracking-wider">
                    Phân Tách 6 Thành Phần Y Phục Chi Tiết
                  </span>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Được xếp vào đúng các danh mục trong tủ đồ: Áo ngoài, Áo trong, Chân váy, Trang sức, Phụ kiện, Hài.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#8B1E1E] font-semibold bg-red-50 px-2.5 py-1 rounded-lg border border-red-200">
                  6 / 6 Thành phần
                </span>
              </div>

              {/* Grid of the 6 separated components */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {components.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#8B1E1E]"
                  >
                    <div>
                      {/* Slot badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider font-semibold ${comp.slotColor}`}>
                          {comp.slot}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full border border-black/15" style={{ backgroundColor: comp.colorHex }} />
                          {comp.secondaryColor && (
                            <span className="w-3 h-3 rounded-full border border-black/15 -ml-1.5" style={{ backgroundColor: comp.secondaryColor }} />
                          )}
                        </div>
                      </div>

                      <h4 className="text-sm font-serif-royal font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors">
                        {comp.item?.name || 'Thành phần y phục'}
                      </h4>

                      <div className="text-[11px] text-amber-900 font-medium mt-0.5">
                        {comp.item?.material}
                      </div>

                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {comp.details}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[11px] text-stone-400">
                        {comp.item?.period.split(' ')[0]} {comp.item?.period.split(' ')[1] || ''}
                      </span>

                      {comp.item && (
                        <button
                          onClick={() => {
                            onApplySingleItem(comp.item!);
                            onClose();
                          }}
                          className="px-3 py-1.5 bg-stone-100 hover:bg-[#8B1E1E] text-stone-700 hover:text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
                        >
                          <span>Mặc món này</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Curatorial Note */}
              <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-2xl text-xs text-amber-950 leading-relaxed">
                <strong className="text-amber-900 font-semibold block mb-1">
                  💡 Gợi Ý Phối Đồ Chuẩn Phong Cách Từ Nhà Thiết Kế:
                </strong>
                Sự kết hợp giữa <strong>Áo Giao Lĩnh hồng phấn</strong> và <strong>chân váy xếp ly đỏ ruby</strong> tạo ra hiệu ứng chuyển tiếp thị giác vô cùng đắt giá qua sự tương phản tầng lớp hài hòa. Bạn có thể kết hợp cùng chuỗi tràng hạt hồng ngọc để tăng nét sang quý, hoặc mang thêm chiếc ô giấy dầu đỏ khi chụp ảnh ngoại cảnh bên hồ sen.
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Đã tích hợp đầy đủ vào Tủ Y Phục, Bộ Sưu Tập và Thư Viện Tra Cứu</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl font-medium transition-colors"
          >
            Đóng bảng xem
          </button>
        </div>
      </div>
    </div>
  );
};
