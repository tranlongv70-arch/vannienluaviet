import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Scroll, 
  Palette, 
  ShieldCheck, 
  Heart,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Layers,
  Shirt
} from 'lucide-react';
import { PRESET_OUTFITS, COSTUME_ITEMS } from '../data/costumes';
import { HERITAGE_ARTICLES } from '../data/stories';
import { IMAGES } from '../assets/images';
import { HeritageImage } from './common/HeritageImage';
import { DeconstructedShowcaseModal } from './DeconstructedShowcaseModal';
import { DressingState, CostumeItem } from '../types';

interface HeroHomeProps {
  onStartDressing: () => void;
  onExploreCollections: () => void;
  onReadArticle: (articleId: string) => void;
  onSelectOutfitToDress: (state: DressingState) => void;
  onDressSingleItem: (item: CostumeItem) => void;
}

export const HeroHome: React.FC<HeroHomeProps> = ({
  onStartDressing,
  onExploreCollections,
  onReadArticle,
  onSelectOutfitToDress,
  onDressSingleItem
}) => {
  const [showDeconstructedModal, setShowDeconstructedModal] = useState(false);
  const erasSliderRef = useRef<HTMLDivElement>(null);
  const [erasScrollProgress, setErasScrollProgress] = useState(0);

  const handleErasScroll = () => {
    if (!erasSliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = erasSliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setErasScrollProgress(scrollLeft / maxScroll);
    }
  };

  const slideErasLeft = () => {
    if (erasSliderRef.current) {
      erasSliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const slideErasRight = () => {
    if (erasSliderRef.current) {
      erasSliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const handleErasTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!erasSliderRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const { scrollWidth, clientWidth } = erasSliderRef.current;
    erasSliderRef.current.scrollTo({ left: percentage * (scrollWidth - clientWidth), behavior: 'smooth' });
  };

  const [eraGenderMap, setEraGenderMap] = useState<Record<number, 'female' | 'male'>>({
    1: 'female',
    2: 'female',
    3: 'female',
    4: 'female',
    5: 'female',
    6: 'female',
    7: 'female',
  });
  const pinkGiaoLinhPreset = PRESET_OUTFITS.find(p => p.id === 'preset-giao-linh-hong-phan' || p.id === 'preset-ndl-nu') || PRESET_OUTFITS[0];

  const pinkComponents = [
    {
      slot: 'Áo Ngoài',
      name: 'Áo Giao Lĩnh Lụa Hồng Phấn',
      desc: 'Tay thụng xòe rộng, tà xẻ hông lót đỏ son buộc nơ',
      tag: 'Áo ngoài',
      item: COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-giaolinh-hongphan'),
      color: '#EDA8AF',
    },
    {
      slot: 'Áo Trong',
      name: 'Áo Cánh Trắng Cổ Đứng Khuy Tết',
      desc: 'Cổ đứng thấp đoan trang, hàng khuy tết tơ chéo vạt',
      tag: 'Áo trong',
      item: COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-ao-canh-trang'),
      color: '#FAF8F5',
    },
    {
      slot: 'Chân Váy',
      name: 'Chân Váy Lụa Xếp Ly Đỏ Ruby',
      desc: 'Dập ly nhiều tầng rủ bồng bềnh chuyển động thướt tha',
      tag: 'Chân váy',
      item: COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-vay-xeply-do'),
      color: '#A61C2E',
    },
    {
      slot: 'Trang Sức Cổ',
      name: 'Chuỗi Tràng Hạt Hồng Ngọc',
      desc: 'Chuỗi ngọc đỏ đeo dài trước ngực kiêu sa đài các',
      tag: 'Trang sức',
      item: COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-vong-co-do'),
      color: '#A61C2E',
    },
    {
      slot: 'Cầm Tay',
      name: 'Ô Giấy Dầu Đỏ Nan Tre',
      desc: 'Ô che thủ công truyền thống nan trúc tỏa tròn',
      tag: 'Cầm tay',
      item: COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-o-do'),
      color: '#B91C1C',
    },
    {
      slot: 'Hài Đi Chân',
      name: 'Hài Vải Thêu Hoa Đào',
      desc: 'Vải trắng ngà mũi tròn thêu chỉ tơ đỏ trang nhã',
      tag: 'Hài chân',
      item: COSTUME_ITEMS.find(c => c.id === 'item-ndl-nu-hai-theu'),
      color: '#FAF8F5',
    },
  ];
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Full-Width Atmospheric Presentation) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-[#161412] text-white flex items-center overflow-hidden">
        {/* Hero Background Image with Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <HeritageImage
            src={IMAGES.heroAodai}
            fallbackSrc="/images/viet_hero_aodai.jpg"
            alt="Việt Phục Cung Đình Triều Nguyễn"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
          />
          {/* Measured multi-stop scrim for guaranteed WCAG AA legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-black/40 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Brand Emblem & Seal Tag */}
            <div className="inline-flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 pr-3 sm:pr-4 rounded-full bg-black/60 border border-[#E0AC3C]/40 backdrop-blur-md shadow-lg max-w-full">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-amber-300/60 shrink-0">
                <img 
                  src={IMAGES.vanNienLuaLogo} 
                  alt="VÂN NIÊN LỤA" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/van_nien_lua_logo.jpg';
                  }}
                />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <span className="text-[11px] sm:text-xs font-serif-royal font-bold uppercase tracking-widest text-amber-200 whitespace-nowrap shrink-0">
                  VÂN NIÊN LỤA
                </span>
                <span className="text-stone-500">·</span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-stone-300 uppercase truncate">
                  Di Sản & Việt Phục Cổ Truyền
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-royal font-bold text-white tracking-tight leading-[1.2] text-balance">
              VÂN NIÊN LỤA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-[#E0AC3C]">
                Khoác Lên Hồn Cốt Dân Tộc
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed max-w-xl">
              Khám phá, tùy biến và phục dựng trang phục truyền thống Việt Nam cùng VÂN NIÊN LỤA. Từ sự tôn nghiêm của Áo Nhật Bình cung đình Huế đến nét duyên thầm của Áo Tứ Thân Kinh Bắc, Áo Viên Lĩnh thời Lý - Trần và Áo Dài ngũ thân lịch lãm.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onStartDressing}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-xs uppercase tracking-wider font-semibold rounded-xl transition-all shadow-lg hover:shadow-red-900/40 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Bắt đầu phối đồ</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCollections}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-wider font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Khám phá bộ sưu tập</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-5 sm:pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg text-[10px] sm:text-xs">
              <div>
                <div className="font-serif-royal text-lg sm:text-2xl font-bold text-[#E0AC3C]">40+</div>
                <div className="text-stone-400 mt-0.5 leading-snug">Mẫu Y Phục Chuẩn Lịch Sử</div>
              </div>
              <div>
                <div className="font-serif-royal text-lg sm:text-2xl font-bold text-[#E0AC3C]">5</div>
                <div className="text-stone-400 mt-0.5 leading-snug">Triều Đại & Vùng Miền</div>
              </div>
              <div>
                <div className="font-serif-royal text-lg sm:text-2xl font-bold text-[#E0AC3C]">100%</div>
                <div className="text-stone-400 mt-0.5 leading-snug">Tư Liệu Lịch Sử Nghiên Cứu</div>
              </div>
            </div>
          </div>

          {/* Right Floating Curatorial Feature Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="p-6 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B1E1E]/30 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E0AC3C]">
                  TIÊU ĐIỂM TRIỀU NGUYỄN
                </span>
                <span className="text-xs text-stone-400">Niên đại 1802 - 1945</span>
              </div>

              <div className="h-64 rounded-xl overflow-hidden mb-4 border border-white/10">
                <HeritageImage
                  src={IMAGES.nhatBinh}
                  alt="Áo Nhật Bình"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-lg font-serif-royal font-bold text-white">
                Áo Nhật Bình Cung Đình Huế
              </h3>
              <p className="text-xs text-stone-300 mt-1.5 line-clamp-2 leading-relaxed">
                Đặc trưng với cổ áo hình chữ nhật viền ngũ hành tương sinh, dệt từ tơ tằm thượng uyển và thêu chỉ vàng sa kim lộng lẫy.
              </p>

              <button
                onClick={() => {
                  const nhatBinhPreset = PRESET_OUTFITS.find(p => p.id === 'preset-ng-nu-nhatbinh');
                  if (nhatBinhPreset) {
                    onSelectOutfitToDress(nhatBinhPreset.dressingState);
                  } else {
                    onStartDressing();
                  }
                }}
                className="mt-4 w-full py-2.5 bg-[#8B1E1E] hover:bg-[#A32323] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-white/10 shadow-md cursor-pointer"
              >
                <span>Trải nghiệm phòng phối đồ hoàng cung</span>
                <ChevronRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HISTORICAL ERAS OF VIETNAMESE ATTIRE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
              Dòng Chảy Lịch Sử
            </div>
            <h2 className="text-3xl font-serif-royal font-bold text-stone-900 tracking-tight mt-1">
              Lịch sử Y phục Việt Nam
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs sm:text-sm text-stone-500 max-w-md hidden sm:block">
              Mỗi triều đại là một dấu ấn rực rỡ, phản ánh tư tưởng thẩm mỹ, sự uy nghiêm của vương quyền và bản sắc kiên cường của dân tộc Việt qua ngàn năm.
            </p>

            {/* Horizontal Slider Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={slideErasLeft}
                className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:bg-[#8B1E1E] hover:text-white transition-all shadow-xs"
                title="Trượt sang trái"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={slideErasRight}
                className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:bg-[#8B1E1E] hover:text-white transition-all shadow-xs"
                title="Trượt sang phải"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Container for Era Cards */}
        <div 
          ref={erasSliderRef}
          onScroll={handleErasScroll}
          className="horizontal-slider flex gap-6 overflow-x-auto pb-4 snap-x"
        >
          {[
            {
              eraNumber: 1,
              era: 'Văn Lang - Âu Lạc',
              years: 'TK VII TCN – 179 TCN',
              desc: 'Giai đoạn bình minh dân tộc: Nam ở trần đóng khố xăm mình tránh giao long, đội mũ lông chim; Nữ mặc yếm kết hợp váy quấn thổ cẩm chim Lạc bay.',
              color: '#D97706',
              badge: 'Kỷ Nguyên Hùng Vương',
              storyId: 'story-van-lang-au-lac',
              female: {
                title: 'Yếm Váy Lạc Việt (Nữ)',
                image: IMAGES.vanLangNu,
                presetId: 'preset-vl-nu'
              },
              male: {
                title: 'Khố Thổ Cẩm Đông Sơn (Nam)',
                image: IMAGES.vanLangNam,
                presetId: 'preset-vl-nam'
              }
            },
            {
              eraNumber: 2,
              era: 'Bắc Thuộc & Ngô - Đinh - Lê',
              years: '179 TCN – 1009',
              desc: 'Trang phục thời kỳ đầu tự chủ: Nam giới mặc Áo viên lĩnh nâu hồng gạch hoa văn chìm xẻ tà lót đỏ son, mũ phác đầu đen, hia đen viền trắng; Nữ giới mặc Áo giao lĩnh hồng phấn nẹp cổ hồng nhạt tay thụng lót son, áo cánh trắng, chân váy xếp ly đỏ son và chuỗi ngọc đỏ.',
              color: '#C97D76',
              badge: 'Khí Phách Độc Lập',
              storyId: 'story-bac-thuoc-ngo-dinh-le',
              female: {
                title: 'Áo Giao Lĩnh Hồng Phấn (Nữ)',
                image: IMAGES.bacThuocNu,
                presetId: 'preset-ndl-nu'
              },
              male: {
                title: 'Áo Viên Lĩnh Nâu Hồng (Nam)',
                image: IMAGES.bacThuocNam,
                presetId: 'preset-ndl-nam'
              }
            },
            {
              eraNumber: 3,
              era: 'Thời Lý - Trần - Hồ',
              years: '1009 – 1407',
              desc: 'Gồm 3 loại y phục đặc trưng Đại Việt: 1. Áo Viên Lĩnh (Nam xanh lam/ngọc - Nữ đỏ son hoa cúc dây), 2. Áo Tứ Điên (Nam hoàng triều - Nữ gấm sen cung đình), 3. Áo Giao Lĩnh (Nữ cổ chéo hoàng triều).',
              color: '#1B6B68',
              badge: 'Đại Việt Cực Thịnh · 3 Loại Y Phục',
              storyId: 'story-ly-tran-ho',
              female: {
                title: 'Áo Viên Lĩnh / Tứ Điên (Nữ)',
                image: IMAGES.lyTranVienLinhNu,
                presetId: 'preset-lt-nu-vienlinh'
              },
              male: {
                title: 'Áo Viên Lĩnh / Tứ Điên (Nam)',
                image: IMAGES.lyTranVienLinhNam,
                presetId: 'preset-lt-nam'
              }
            },
            {
              eraNumber: 4,
              era: 'Thời Hậu Lê & Triều Mạc',
              years: '1428 – 1789',
              desc: 'Gồm 3 loại y phục đặc trưng: 1. Áo Giao Lĩnh khổ rộng thụng thủ (Nữ xanh cốm - Nam nâu son), 2. Áo Đối Khâm (Nam vàng be quạt đen - Nữ gấm navy quạt trắng), 3. Áo Tứ Thân Kinh Bắc (Nâu gụ lót son, áo cánh đỏ, đai nơ xanh hồng & khăn mỏ quạ 2 quả bông đỏ).',
              color: '#8B1E1E',
              badge: 'Điển Chế Lê - Mạc & Dân Gian Quan Họ',
              storyId: 'story-hau-le-mac',
              female: {
                title: 'Giao Lĩnh / Đối Khâm / Tứ Thân (Nữ)',
                image: IMAGES.hauLeThungThuNu,
                presetId: 'preset-hl-nu-giaolinh'
              },
              male: {
                title: 'Giao Lĩnh / Đối Khâm (Nam)',
                image: IMAGES.hauLeThungThuNam,
                presetId: 'preset-hl-nam-giaolinh'
              }
            },
            {
              eraNumber: 5,
              era: 'Triều Tây Sơn',
              years: '1778 – 1802',
              desc: 'Cuộc cách mạng trang phục của vua Quang Trung: thay váy đụp bằng quần hai ống để phụ nữ cơ động cứu quốc; áo tay chẽn hành quân thần tốc.',
              color: '#DC2626',
              badge: 'Hào Khí Tây Sơn',
              storyId: 'story-tay-son',
              female: {
                title: 'Quần Hai Ống Tây Sơn (Nữ)',
                image: IMAGES.taySonNu,
                presetId: 'preset-ts-nu'
              },
              male: {
                title: 'Chiến Phục Tay Chẽn (Nam)',
                image: IMAGES.taySonNam,
                presetId: 'preset-ts-nam'
              }
            },
            {
              eraNumber: 6,
              era: 'Triều Nguyễn',
              years: '1802 – 1945',
              desc: 'Hoàng kim y phục cung đình cố đô Huế: Lễ phục Áo tấc tay thụng chữ nhật trang nghiêm và Áo Nhật Bình viền cổ ngũ hành lộng lẫy.',
              color: '#E0AC3C',
              badge: 'Cung Đình Cố Đô',
              storyId: 'story-trieu-nguyen',
              female: {
                title: 'Áo Nhật Bình Cung Đình (Nữ)',
                image: IMAGES.nguyenNu,
                presetId: 'preset-ng-nu-nhatbinh'
              },
              male: {
                title: 'Lễ Phục Áo Tấc Nam (Nam)',
                image: IMAGES.nguyenNam,
                presetId: 'preset-ng-nam'
              }
            },
            {
              eraNumber: 7,
              era: 'Thế Kỷ XXI',
              years: 'Đương Đại & Hội Nhập',
              desc: 'Giao thoa giữa di sản nghìn năm và nhịp sống đương đại: Áo dài cách tân tà lửng năng động, phối quần âu hoặc chân váy dập ly xòe duyên dáng.',
              color: '#EDA8AF',
              badge: 'Hội Nhập Toàn Cầu',
              storyId: 'story-the-ky-xxi',
              female: {
                title: 'Áo Dài Cách Tân (Nữ)',
                image: IMAGES.modernNu,
                presetId: 'preset-xxi-nu'
              },
              male: {
                title: 'Áo Dài Cách Tân Nam (Nam)',
                image: IMAGES.modernNam,
                presetId: 'preset-xxi-nam'
              }
            }
          ].map((item) => {
            const currentGender = eraGenderMap[item.eraNumber] || 'female';
            const currentVariant = currentGender === 'female' ? item.female : item.male;
            const currentPreset = PRESET_OUTFITS.find(p => p.id === currentVariant.presetId);

            return (
              <div
                key={item.eraNumber}
                onClick={() => onReadArticle(item.storyId)}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group hover:border-[#8B1E1E] cursor-pointer"
              >
                {/* Authentic Historical Photo Showcase */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                  <HeritageImage
                    src={currentVariant.image}
                    alt={currentVariant.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Era Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span 
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow-xs"
                      style={{ backgroundColor: item.color }}
                    >
                      0{item.eraNumber}. {item.years}
                    </span>

                    {/* Gender Switcher on Card */}
                    <div 
                      className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-lg border border-white/20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEraGenderMap(prev => ({ ...prev, [item.eraNumber]: 'female' }));
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                          currentGender === 'female'
                            ? 'bg-[#8B1E1E] text-white shadow-xs'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        Nữ
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEraGenderMap(prev => ({ ...prev, [item.eraNumber]: 'male' }));
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                          currentGender === 'male'
                            ? 'bg-[#1E3A5F] text-white shadow-xs'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        Nam
                      </button>
                    </div>
                  </div>

                  {/* Bottom Image Overlay Title */}
                  <div className="absolute bottom-2.5 left-3 right-3 z-10">
                    <div className="text-white font-serif-royal font-bold text-sm drop-shadow-md">
                      {currentVariant.title}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-1 font-mono">
                      <span>{item.badge}</span>
                      <span className="text-[11px] font-semibold" style={{ color: item.color }}>
                        {currentGender === 'female' ? 'Phục Trang Nữ' : 'Phục Trang Nam'}
                      </span>
                    </div>

                    <h3 className="text-base font-serif-royal font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors">
                      {item.era}
                    </h3>

                    <p className="text-xs text-stone-600 mt-2 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 font-medium truncate max-w-[130px]">
                      {currentVariant.title}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (currentPreset) {
                          onSelectOutfitToDress(currentPreset.dressingState);
                        } else {
                          onStartDressing();
                        }
                      }}
                      className="text-xs font-semibold text-[#8B1E1E] hover:text-[#721818] flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0"
                    >
                      <span>Phối đồ</span>
                      <Shirt className="w-3.5 h-3.5 text-[#8B1E1E]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2.5 DECONSTRUCTED SHOWCASE SPOTLIGHT: GIAO LĨNH HỒNG PHẤN */}
      <section className="py-16 bg-[#FDFBF7] border-y border-stone-200 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-[#8B1E1E] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tiêu Điểm Thiết Kế Mới</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-royal font-bold text-stone-900 tracking-tight">
                Giao Lĩnh Hồng Phấn Tường Vân & Giải Phẫu Cấu Trúc
              </h2>
            </div>
            <button
              onClick={() => setShowDeconstructedModal(true)}
              className="px-4 py-2 bg-stone-900 hover:bg-[#8B1E1E] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all shadow-sm shrink-0"
            >
              <span>Xem chi tiết giải phẫu 6 món</span>
              <Layers className="w-4 h-4 text-amber-300" />
            </button>
          </div>

          {/* Master 2-Panel Layout: Left Full-Outfit vs Right 6 Deconstructed Parts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT: HÌNH ẢNH TOÀN PHỤC CÂN ĐỐI & HÀI HÒA (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200 p-6 shadow-sm flex flex-col justify-between group hover:border-[#8B1E1E] transition-all">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3 pb-2 border-b border-stone-100">
                  <span className="font-serif-royal font-bold text-stone-900 uppercase">Toàn Phục Hoàn Chỉnh</span>
                  <span className="text-amber-800 font-medium">Bố cục cân đối</span>
                </div>

                <div className="relative h-96 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                  <HeritageImage
                    src={IMAGES.giaoLinhTuongVanNu}
                    fallbackSrc="/images/giaolinh_tuongvan_nu_1791342628625.jpg"
                    alt="Toàn phục Giao Lĩnh Hồng Phấn Tường Vân"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rose-200">
                      Sắc Hồng Phấn & Đỏ Ruby
                    </span>
                    <h3 className="text-xl font-serif-royal font-bold text-white mt-0.5">
                      Giao Lĩnh Hồng Phấn Tường Vân
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-stone-600 mt-4 leading-relaxed">
                  Thiết kế kết hợp hoàn mỹ giữa áo khoác giao lĩnh tay thụng lụa đũi hồng phấn, tà xẻ lót đỏ son kiêu sa và chân váy xếp ly đỏ ruby bồng bềnh nhiều tầng.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                <button
                  onClick={() => onSelectOutfitToDress(pinkGiaoLinhPreset.dressingState)}
                  className="flex-1 py-3 bg-[#8B1E1E] hover:bg-[#721818] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Shirt className="w-4 h-4 text-amber-300" />
                  <span>Khoác Lên Người Mẫu Hoàng Cung</span>
                </button>
                <button
                  onClick={() => setShowDeconstructedModal(true)}
                  className="p-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-medium transition-colors"
                  title="Mở bảng phân tách chi tiết"
                >
                  <Layers className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* RIGHT: CÁC THÀNH PHẦN ĐƯỢC PHÂN CHIA ĐÚNG VỊ TRÍ MỖI LOẠI (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-4 pb-2 border-b border-stone-100">
                  <span className="font-serif-royal font-bold text-stone-900 uppercase">Các Thành Phần Phân Tách Theo Vị Trí</span>
                  <span className="text-emerald-700 font-medium">6 Vị Trí Chuẩn Danh Mục</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pinkComponents.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-stone-200 bg-[#FAF9F5] hover:bg-white hover:border-[#8B1E1E] transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] mb-1.5">
                          <span className="font-mono font-semibold px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700 uppercase">
                            {item.slot}
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full border border-black/10" style={{ backgroundColor: item.color }} />
                        </div>
                        <h4 className="text-xs font-serif-royal font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {item.item && (
                        <div className="mt-3 pt-2 border-t border-stone-200/60 flex items-center justify-between">
                          <span className="text-[10px] text-stone-400 font-mono">{item.tag}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 p-3.5 bg-rose-50/70 border border-rose-200/60 rounded-xl flex items-center justify-between text-xs text-rose-950">
                <span>Bạn muốn tùy biến màu sắc, hoa văn hoặc phối cùng các phụ kiện khác?</span>
                <button
                  onClick={() => onSelectOutfitToDress(pinkGiaoLinhPreset.dressingState)}
                  className="font-semibold text-[#8B1E1E] hover:underline ml-2 shrink-0 flex items-center gap-1"
                >
                  <span>Mở phòng phối đồ</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED PRESETS GALLERY (Bento Visual Preview) */}
      <section className="py-16 bg-[#F3EFE6] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
              Tuyển Tập Đặc Sắc
            </span>
            <h2 className="text-3xl font-serif-royal font-bold text-stone-900 tracking-tight mt-1">
              Bộ Sưu Tập Phối Mẫu Chuẩn Văn Hóa
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Các bản phối được hiệu đính chuẩn mực về cấu trúc tầng lớp, màu sắc ngũ hành và phụ kiện đi kèm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRESET_OUTFITS.slice(0, 3).map((preset) => (
              <div
                key={preset.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                {preset.featuredImage && (
                  <div className="h-56 overflow-hidden relative">
                    <HeritageImage
                      src={preset.featuredImage}
                      alt={preset.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-3 left-3 text-xs font-medium text-amber-200 z-10">
                      {preset.region}
                    </span>
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-stone-400 tracking-wider">
                      {preset.period}
                    </span>
                    <h3 className="text-base font-serif-royal font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors mt-0.5">
                      {preset.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                      {preset.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-amber-800 font-medium">
                      {preset.subtitle}
                    </span>
                    <button
                      onClick={() => onSelectOutfitToDress(preset.dressingState)}
                      className="px-3 py-1.5 bg-[#8B1E1E] hover:bg-[#721818] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                    >
                      Phối bộ này
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HERITAGE & SILK EDITORIAL REST SPOTLIGHT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-[#FAF9F5] border border-stone-200 rounded-3xl p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
              Văn Hóa Chất Liệu & Làng Nghề
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-royal font-bold text-stone-900">
              Huyền Thoại Tơ Lụa Vạn Phúc & Sắc Đen Lãnh Mỹ A
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Mỗi mét vải tơ tằm Việt Nam không chỉ là sản phẩm may mặc mà là câu chuyện của hàng vạn con tằm ăn lá dâu, những giọt mồ hôi của nghệ nhân dệt thoi ngàn năm đất Vạn Phúc và bí quyết nhuộm mủ trái mặc nưa Tân Châu bền bỉ qua thế kỷ.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <div className="font-semibold text-stone-900">Lụa Vạn Phúc Hà Đông</div>
                <div className="text-stone-500 mt-0.5">Nghìn năm dệt thoi truyền thống</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <div className="font-semibold text-stone-900">Lãnh Mỹ A Tân Châu</div>
                <div className="text-stone-500 mt-0.5">Nữ hoàng lụa nhuộm mủ mặc nưa</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onReadArticle('story-lanh-my-a-queen-of-silk')}
                className="text-xs uppercase tracking-wider font-semibold text-[#8B1E1E] hover:underline flex items-center gap-1.5"
              >
                <span>Đọc bài nghiên cứu văn hóa chất liệu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md h-80">
              <HeritageImage
                src={IMAGES.vanPhuc}
                alt="Chất liệu lụa Vạn Phúc"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deconstructed Anatomy Showcase Modal */}
      <DeconstructedShowcaseModal
        isOpen={showDeconstructedModal}
        onClose={() => setShowDeconstructedModal(false)}
        onApplyFullOutfit={(state) => {
          onSelectOutfitToDress(state);
        }}
        onApplySingleItem={(item) => {
          onDressSingleItem(item);
        }}
      />
    </div>
  );
};
