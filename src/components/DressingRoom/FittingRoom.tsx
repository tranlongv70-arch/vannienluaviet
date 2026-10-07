import React, { useState, useEffect, useRef, useMemo } from 'react';
import { DressingState } from '../../types';
import { SnapshotExportModal } from './SnapshotExportModal';
import { CostumeScorePanel } from './CostumeScorePanel';
import { evaluateCostumeOutfit } from './costumeEvaluator';
import { 
  RotateCcw, 
  Shuffle, 
  Camera, 
  Volume2, 
  VolumeX, 
  Check, 
  Info, 
  Award, 
  Sparkles, 
  Layers,
  Sparkle
} from 'lucide-react';
import { 
  MALE_WARDROBE_DATA, 
  FEMALE_WARDROBE_DATA, 
  SVG_BODY_MALE, 
  SVG_BODY_FEMALE,
  getBodySvg,
  SVG_UNDERGARMENT_TOP_FEMALE,
  SVG_UNDERGARMENT_BOTTOM_FEMALE,
  SVG_UNDERGARMENT_TOP_MALE,
  SVG_UNDERGARMENT_BOTTOM_MALE,
  FittingItem 
} from './fittingAssets';
import { IMAGES } from '../../assets/images';

interface FittingRoomProps {
  initialState?: DressingState;
  onSaveOutfit?: (outfit: DressingState) => void;
  onShareToCommunity?: (outfit: DressingState, author: string, desc: string) => void;
}

export const FittingRoom: React.FC<FittingRoomProps> = ({ 
  initialState,
  onSaveOutfit,
  onShareToCommunity 
}) => {
  // Giới tính đang chọn: 'male' hoặc 'female'
  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>(() => {
    return initialState?.gender || 'male';
  });

  // Thời kỳ preset đang kích hoạt (null = Tự do phối đồ từ cơ bản, 1..7)
  const [activeEraPreset, setActiveEraPreset] = useState<number | null>(() => {
    if (initialState?.presetId?.startsWith('preset-vl')) return 1;
    if (initialState?.presetId?.startsWith('preset-bt') || initialState?.presetId?.startsWith('preset-ndl') || initialState?.presetId?.includes('hong-phan')) return 2;
    if (initialState?.presetId?.startsWith('preset-lt')) return 3;
    if (initialState?.presetId?.startsWith('preset-hl')) return 4;
    if (initialState?.presetId?.startsWith('preset-ts')) return 5;
    if (initialState?.presetId?.startsWith('preset-ng')) return 6;
    if (initialState?.presetId?.startsWith('preset-xxi')) return 7;

    if (initialState?.name?.includes('Lý') || initialState?.name?.includes('Trần')) return 3;
    if (initialState?.name?.includes('Bắc thuộc') || initialState?.name?.includes('Ngô') || initialState?.name?.includes('Hồng Phấn')) return 2;
    if (initialState?.name?.includes('Văn Lang') || initialState?.name?.includes('Lạc Việt')) return 1;
    if (initialState?.name?.includes('Lê') || initialState?.name?.includes('Mạc')) return 4;
    if (initialState?.name?.includes('Tây Sơn')) return 5;
    if (initialState?.name?.includes('Nguyễn')) return 6;
    if (initialState?.name?.includes('XXI') || initialState?.name?.includes('Hiện Đại')) return 7;
    return null; // Mặc định: Tự do sáng tạo phối đồ
  });

  // Loại trang phục Lý - Trần đang kích hoạt (1: Viên Lĩnh, 2: Tứ Điên, 3: Giao Lĩnh)
  const [activeLyTranType, setActiveLyTranType] = useState<1 | 2 | 3>(1);
  // Loại trang phục Hậu Lê - Mạc đang kích hoạt (1: Giao Lĩnh Thụng Thủ, 2: Đối Khâm, 3: Áo Tứ Thân Kinh Bắc)
  const [activeHauLeType, setActiveHauLeType] = useState<1 | 2 | 3>(3);

  // Trang phục đang mặc cho Nam - Mặc định cơ bản (trống đồ)
  const [maleOutfit, setMaleOutfit] = useState<{
    hat: string | null;
    top: string | null;
    bottom: string | null;
    shoes: string | null;
  }>(() => {
    if (initialState && (initialState.gender === 'male' || !initialState.gender)) {
      if (initialState.fittingOutfit) {
        return {
          hat: initialState.fittingOutfit.hat || null,
          top: initialState.fittingOutfit.top || null,
          bottom: initialState.fittingOutfit.bottom || null,
          shoes: initialState.fittingOutfit.shoes || null,
        };
      }
      return {
        hat: initialState.headwearId || null,
        top: initialState.outerwearId || initialState.mainId || null,
        bottom: initialState.bottomId || null,
        shoes: initialState.footwearId || null,
      };
    }
    return { hat: null, top: null, bottom: null, shoes: null };
  });

  // Trang phục đang mặc cho Nữ - Mặc định cơ bản (trống đồ)
  const [femaleOutfit, setFemaleOutfit] = useState<{
    hat: string | null;
    top: string | null;
    bottom: string | null;
    shoes: string | null;
  }>(() => {
    if (initialState && initialState.gender === 'female') {
      if (initialState.fittingOutfit) {
        return {
          hat: initialState.fittingOutfit.hat || null,
          top: initialState.fittingOutfit.top || null,
          bottom: initialState.fittingOutfit.bottom || null,
          shoes: initialState.fittingOutfit.shoes || null,
        };
      }
      return {
        hat: initialState.headwearId || null,
        top: initialState.outerwearId || initialState.mainId || null,
        bottom: initialState.bottomId || null,
        shoes: initialState.footwearId || null,
      };
    }
    return { hat: null, top: null, bottom: null, shoes: null };
  });

  const [isMuted, setIsMuted] = useState(false);
  const [showSnapshotModal, setShowSnapshotModal] = useState(false);
  const [selectedDetailItem, setSelectedDetailItem] = useState<FittingItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Lấy tủ đồ và trang phục hiện tại theo giới tính
  const currentWardrobe = selectedGender === 'male' ? MALE_WARDROBE_DATA : FEMALE_WARDROBE_DATA;
  const currentOutfit = selectedGender === 'male' ? maleOutfit : femaleOutfit;
  const setCurrentOutfit = selectedGender === 'male' ? setMaleOutfit : setFemaleOutfit;

  // Đánh giá và chấm điểm phục trang theo tiêu chuẩn di sản Đại Việt
  const costumeEvaluation = useMemo(() => {
    return evaluateCostumeOutfit(currentOutfit, selectedGender, currentWardrobe);
  }, [currentOutfit, selectedGender, currentWardrobe]);

  const handleApplyEvaluationFix = (slot: 'hat' | 'top' | 'bottom' | 'shoes', itemId: string) => {
    handleSelectItem(slot, itemId);
    playChime([523.25, 659.25, 783.99]);
    showToast('Đã tự động điều chỉnh trang phục đúng chuẩn mực cố phong!');
  };

  // Áp dụng trang phục thời Lý - Trần theo 3 loại
  const applyLyTranCostume = (type: 1 | 2 | 3, gender: 'male' | 'female') => {
    setActiveEraPreset(3);
    setActiveLyTranType(type);

    if (gender === 'male') {
      if (type === 1) { // 1. Áo Viên Lĩnh Nam
        setMaleOutfit({
          hat: 'm_hat_sa_lytran',
          top: 'm_top_vienlinh_lytran',
          bottom: 'm_bot_quan_lua_trang',
          shoes: 'm_shoe_hai_gam_lytran',
        });
      } else if (type === 2) { // 2. Áo Tứ Điên Nam
        setMaleOutfit({
          hat: 'm_hat_sa_lytran',
          top: 'm_top_tudien_nam_lytran',
          bottom: 'm_bot_quan_lua_trang',
          shoes: 'm_shoe_hai_gam_lytran',
        });
      } else { // 3. Áo Giao Lĩnh Nam
        setMaleOutfit({
          hat: 'm_hat_sa_lytran',
          top: 'm_top_vienlinh_lytran',
          bottom: 'm_bot_quan_lua_trang',
          shoes: 'm_shoe_hai_gam_lytran',
        });
      }
    } else {
      if (type === 1) { // 1. Áo Viên Lĩnh Nữ
        setFemaleOutfit({
          hat: 'f_hat_tram_cai_lytran',
          top: 'f_top_vienlinh_nu_lytran',
          bottom: 'f_bot_thuong_quang_lytran',
          shoes: 'f_shoe_hai_theu_sen_lytran',
        });
      } else if (type === 2) { // 2. Áo Tứ Điên Nữ
        setFemaleOutfit({
          hat: 'f_hat_tram_cai_lytran',
          top: 'f_top_tudien_nu_lytran',
          bottom: 'f_bot_thuong_quang_lytran',
          shoes: 'f_shoe_hai_theu_sen_lytran',
        });
      } else { // 3. Áo Giao Lĩnh Nữ
        setFemaleOutfit({
          hat: 'f_hat_tram_cai_lytran',
          top: 'f_top_giaolinh_nu_lytran',
          bottom: 'f_bot_thuong_quang_lytran',
          shoes: 'f_shoe_hai_theu_sen_lytran',
        });
      }
    }
  };

  // Áp dụng trang phục thời Hậu Lê - Triều Mạc theo 3 loại
  const applyHauLeCostume = (type: 1 | 2 | 3, gender: 'male' | 'female') => {
    setActiveEraPreset(4);
    setActiveHauLeType(type);

    if (gender === 'male') {
      if (type === 1) { // 1. Áo Giao Lĩnh Thụng Thủ Nam
        setMaleOutfit({
          hat: 'm_hat_canhchuon',
          top: 'm_top_giaolinh_thungthu_haule',
          bottom: 'm_bot_quan_lua_trang',
          shoes: 'm_shoe_giay_den_haule',
        });
      } else if (type === 2) { // 2. Áo Đối Khâm Nam
        setMaleOutfit({
          hat: null,
          top: 'm_top_doikham_nam_haule',
          bottom: 'm_bot_quan_lua_lam_haule',
          shoes: 'm_shoe_hai_lam_haule',
        });
      } else { // 3. Áo Tứ Thân / Giao Lĩnh Nam
        setMaleOutfit({
          hat: 'm_hat_canhchuon',
          top: 'm_top_giaolinh_thungthu_haule',
          bottom: 'm_bot_quan_lua_trang',
          shoes: 'm_shoe_giay_den_haule',
        });
      }
    } else {
      if (type === 1) { // 1. Áo Giao Lĩnh Thụng Thủ Nữ
        setFemaleOutfit({
          hat: 'f_hat_quai_thao',
          top: 'f_top_giaolinh_xanhcom_haule',
          bottom: 'f_bot_vay_xanhcom_haule',
          shoes: 'f_shoe_hai_trang_kem_haule',
        });
      } else if (type === 2) { // 2. Áo Đối Khâm Hoàng Gia Nữ
        setFemaleOutfit({
          hat: null,
          top: 'f_top_doikham_hoanggia_haule',
          bottom: 'f_bot_vay_navy_haule',
          shoes: 'f_shoe_hai_navy_kimtuyen_haule',
        });
      } else { // 3. Áo Tứ Thân Kinh Bắc Nữ
        setFemaleOutfit({
          hat: 'f_hat_moqua_doibong_do',
          top: 'f_top_tuthan_kinhbac_naudo',
          bottom: 'f_bot_vay_den_tuthan',
          shoes: 'f_shoe_hai_vai_den_tuthan',
        });
      }
    }
  };

  // Áp dụng trọn bộ theo thời kỳ
  const applyEraOutfit = (eraNum: number, gender: 'male' | 'female') => {
    setActiveEraPreset(eraNum);
    if (gender === 'male') {
      switch (eraNum) {
        case 1: // Văn Lang - Âu Lạc
          setMaleOutfit({
            hat: 'm_hat_longchim',
            top: 'm_top_vanlang_tattoo',
            bottom: 'm_bot_kho_dongson',
            shoes: 'm_shoe_chan_tran'
          });
          break;
        case 2: // Bắc Thuộc & Ngô - Đinh - Tiền Lê
          setMaleOutfit({
            hat: 'm_hat_phacdau_bacthuoc',
            top: 'm_top_vienlinh_nauhong',
            bottom: 'm_bot_quan_lua_trang',
            shoes: 'm_shoe_hia_den_vientrang'
          });
          break;
        case 3: // Lý - Trần - Hồ
          applyLyTranCostume(activeLyTranType, 'male');
          break;
        case 4: // Hậu Lê - Mạc
          applyHauLeCostume(activeHauLeType, 'male');
          break;
        case 5: // Tây Sơn
          setMaleOutfit({
            hat: 'm_hat_khan_tayson',
            top: 'm_top_tayson_nam',
            bottom: 'm_bot_quan_tayson_nam',
            shoes: 'm_shoe_giay_vai_tayson'
          });
          break;
        case 6: // Triều Nguyễn
          setMaleOutfit({
            hat: 'm_hat_khandong',
            top: 'm_top_aotac_nguyen',
            bottom: 'm_bot_quan_lua_trang',
            shoes: 'm_shoe_hia_den_vientrang'
          });
          break;
        case 7: // Thế kỷ XXI
          setMaleOutfit({
            hat: null,
            top: 'm_top_cachtan_xxi',
            bottom: 'm_bot_quantay_xxi',
            shoes: 'm_shoe_giay_tay_xxi'
          });
          break;
      }
    } else {
      switch (eraNum) {
        case 1: // Văn Lang - Âu Lạc
          setFemaleOutfit({
            hat: 'f_hat_longchim',
            top: 'f_top_yem_dongson',
            bottom: 'f_bot_vay_lacviet',
            shoes: 'f_shoe_chan_tran'
          });
          break;
        case 2: // Bắc Thuộc & Ngô - Đinh - Tiền Lê
          setFemaleOutfit({
            hat: null,
            top: 'f_top_giaolinh_hongphan',
            bottom: 'f_bot_vay_xeply_do',
            shoes: 'f_shoe_hai_theu_hoa'
          });
          break;
        case 3: // Lý - Trần - Hồ
          applyLyTranCostume(activeLyTranType, 'female');
          break;
        case 4: // Hậu Lê - Mạc
          applyHauLeCostume(activeHauLeType, 'female');
          break;
        case 5: // Tây Sơn
          setFemaleOutfit({
            hat: 'f_hat_khan_tayson',
            top: 'f_top_tayson_nu',
            bottom: 'f_bot_quan_hai_ong_tayson',
            shoes: 'f_shoe_hai_tayson_nu'
          });
          break;
        case 6: // Triều Nguyễn
          setFemaleOutfit({
            hat: 'f_hat_vanhday_nguyen',
            top: 'f_top_nhatbinh_nguyen',
            bottom: 'f_bot_quan_lua_nguyen',
            shoes: 'f_shoe_hai_theu_nguyen'
          });
          break;
        case 7: // Thế kỷ XXI
          setFemaleOutfit({
            hat: null,
            top: 'f_top_cachtan_xxi',
            bottom: 'f_bot_vay_cachtan_xxi',
            shoes: 'f_shoe_hai_theu_hoa'
          });
          break;
      }
    }
  };

  // Đồng bộ khi có initialState truyền vào (khi bấm Mặc thử từ Bộ Sưu Tập hoặc Cộng Đồng)
  useEffect(() => {
    if (!initialState) return;
    const gender = initialState.gender || selectedGender;
    if (initialState.gender) {
      setSelectedGender(initialState.gender);
    }

    if (initialState.name) {
      showToast(`Đã khoác bản phối: ${initialState.name}`);
    }

    // 1. Nếu có fittingOutfit trực tiếp từ bộ sưu tập hoặc bài viết cộng đồng
    if (initialState.fittingOutfit) {
      const outfit = {
        hat: initialState.fittingOutfit.hat || null,
        top: initialState.fittingOutfit.top || null,
        bottom: initialState.fittingOutfit.bottom || null,
        shoes: initialState.fittingOutfit.shoes || null,
      };
      if (gender === 'male') setMaleOutfit(outfit);
      else setFemaleOutfit(outfit);

      // Cập nhật thẻ thời kỳ tương ứng
      if (initialState.presetId) {
        if (initialState.presetId.startsWith('preset-vl')) setActiveEraPreset(1);
        else if (initialState.presetId.startsWith('preset-bt') || initialState.presetId.startsWith('preset-ndl') || initialState.presetId.includes('hong-phan')) setActiveEraPreset(2);
        else if (initialState.presetId.startsWith('preset-lt')) {
          setActiveEraPreset(3);
          if (initialState.presetId.includes('tudien')) setActiveLyTranType(2);
          else if (initialState.presetId.includes('giaolinh')) setActiveLyTranType(3);
          else setActiveLyTranType(1);
        } else if (initialState.presetId.startsWith('preset-hl')) {
          setActiveEraPreset(4);
          if (initialState.presetId.includes('doikham')) setActiveHauLeType(2);
          else if (initialState.presetId.includes('tuthan')) setActiveHauLeType(3);
          else setActiveHauLeType(1);
        } else if (initialState.presetId.startsWith('preset-ts')) setActiveEraPreset(5);
        else if (initialState.presetId.startsWith('preset-ng')) setActiveEraPreset(6);
        else if (initialState.presetId.startsWith('preset-xxi')) setActiveEraPreset(7);
      }
      return;
    }

    // 2. Nếu có ID trực tiếp trong các trường (outerwearId, mainId, bottomId, headwearId, footwearId)
    const hasDirectLayerIds = (initialState.outerwearId && initialState.outerwearId.includes('_')) ||
                              (initialState.bottomId && initialState.bottomId.includes('_')) ||
                              (initialState.headwearId && initialState.headwearId.includes('_')) ||
                              (initialState.footwearId && initialState.footwearId.includes('_'));
    if (hasDirectLayerIds) {
      const outfit = {
        hat: initialState.headwearId || null,
        top: initialState.outerwearId || initialState.mainId || null,
        bottom: initialState.bottomId || null,
        shoes: initialState.footwearId || null,
      };
      if (gender === 'male') setMaleOutfit(outfit);
      else setFemaleOutfit(outfit);
      return;
    }

    // 3. Fallback theo tên từ khóa
    const name = initialState.name || '';
    if (name.includes('Văn Lang') || name.includes('Lạc Việt')) {
      applyEraOutfit(1, gender);
      return;
    }
    if (name.includes('Bắc thuộc') || name.includes('Ngô') || name.includes('Đinh')) {
      applyEraOutfit(2, gender);
      return;
    }
    if (name.includes('Lý') || name.includes('Trần') || name.includes('Hồ')) {
      if (name.includes('Tứ Điên')) applyLyTranCostume(2, gender);
      else if (name.includes('Giao Lĩnh')) applyLyTranCostume(3, gender);
      else applyLyTranCostume(1, gender);
      return;
    }
    if (name.includes('Nhật Bình') || name.includes('Áo Tấc') || name.includes('Nguyễn')) {
      applyEraOutfit(6, gender);
      return;
    }
    if (name.includes('Tứ Thân') || name.includes('Quan Họ') || name.includes('Kinh Bắc')) {
      applyHauLeCostume(3, gender);
      return;
    }
    if (name.includes('Lê') || name.includes('Mạc')) {
      if (name.includes('Đối Khâm')) applyHauLeCostume(2, gender);
      else applyHauLeCostume(1, gender);
      return;
    }
    if (name.includes('Tây Sơn')) {
      applyEraOutfit(5, gender);
      return;
    }
    if (name.includes('XXI') || name.includes('Hiện Đại')) {
      applyEraOutfit(7, gender);
      return;
    }
  }, [initialState]);

  // Âm thanh chuông cung đình ngũ cung
  const playChime = (freqs: number[]) => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.35);
      });
    } catch (e) {
      // Graceful audio handling
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Chọn trang phục đơn lẻ
  const handleSelectItem = (category: keyof typeof currentOutfit, itemId: string | null) => {
    setCurrentOutfit(prev => ({
      ...prev,
      [category]: itemId,
    }));
    playChime([587.33, 659.25, 880.00]);
    if (itemId) {
      const found = currentWardrobe[category]?.find(i => i.id === itemId);
      showToast(`Đã khoác lên: ${found ? found.name : 'Món đồ mới'}`);
    } else {
      showToast('Đã tháo đồ');
    }
  };

  // Phối ngẫu nhiên (Randomize Outfit)
  const handleRandomize = () => {
    const randomHat = currentWardrobe.hat[Math.floor(Math.random() * currentWardrobe.hat.length)]?.id || null;
    const randomTop = currentWardrobe.top[Math.floor(Math.random() * currentWardrobe.top.length)]?.id || null;
    const randomBottom = currentWardrobe.bottom[Math.floor(Math.random() * currentWardrobe.bottom.length)]?.id || null;
    const randomShoes = currentWardrobe.shoes[Math.floor(Math.random() * currentWardrobe.shoes.length)]?.id || null;

    setCurrentOutfit({
      hat: randomHat,
      top: randomTop,
      bottom: randomBottom,
      shoes: randomShoes,
    });
    playChime([523.25, 659.25, 783.99, 1046.50]);
    showToast(`Đã phối ngẫu nhiên diện mạo ${selectedGender === 'male' ? 'Nam' : 'Nữ'}!`);
  };

  // Tháo hết đồ (Reset)
  const handleReset = () => {
    setCurrentOutfit({
      hat: null,
      top: null,
      bottom: null,
      shoes: null,
    });
    playChime([392.00, 329.63]);
    showToast('Đã tháo toàn bộ trang phục về phom dáng gốc');
  };

  // Số lượng layer đang mặc
  const activeCount = Object.values(currentOutfit).filter(Boolean).length;

  // Lấy ảnh layer tương ứng
  const getLayerSrc = (category: keyof typeof currentOutfit): string | null => {
    const id = currentOutfit[category];
    if (!id) return null;
    const item = currentWardrobe[category]?.find(i => i.id === id);
    return item ? item.src : null;
  };

  // Danh sách 7 thời kỳ lịch sử
  const historicalEras = [
    { id: 1, name: '1. Văn Lang - Âu Lạc', short: 'Văn Lang', years: 'TK VII TCN – 179 TCN' },
    { id: 2, name: '2. Bắc Thuộc & Ngô-Đinh-Lê', short: 'Lĩnh Nam', years: '179 TCN – 1009' },
    { id: 3, name: '3. Lý - Trần - Hồ', short: 'Lý - Trần - Hồ', years: '1009 – 1407' },
    { id: 4, name: '4. Hậu Lê - Mạc', short: 'Hậu Lê', years: '1428 – 1789' },
    { id: 5, name: '5. Triều Tây Sơn', short: 'Tây Sơn', years: '1778 – 1802' },
    { id: 6, name: '6. Triều Nguyễn', short: 'Triều Nguyễn', years: '1802 – 1945' },
    { id: 7, name: '7. Thế Kỷ XXI', short: 'Hiện Đại', years: 'Đương Đại' },
  ];

  // 3 Loại trang phục Lý - Trần - Hồ đặc trưng
  const lyTranCostumeTypes = [
    {
      type: 1 as const,
      title: '1. Áo Viên Lĩnh (Cổ Tròn)',
      descNam: 'Áo gấm xanh lam thêu sen mây, đai ngọc & Mũ sa then đen',
      descNu: 'Áo đỏ son hoa cúc dây thời Lý, nẹp viền vàng & Váy thường quây',
      color: 'bg-emerald-800'
    },
    {
      type: 2 as const,
      title: '2. Áo Tứ Điên (Bốn Vạt)',
      descNam: 'Áo tứ điên gấm lam hoàng triều, đai ngọc đĩnh đạc quân tử',
      descNu: 'Áo tứ điên gấm hồng sen thanh nhã, nẹp ngọc bội cung đình',
      color: 'bg-rose-800'
    },
    {
      type: 3 as const,
      title: '3. Áo Giao Lĩnh (Cổ Chéo)',
      descNam: 'Áo giao lĩnh Đại Việt cổ chéo truyền thống đoan trang',
      descNu: 'Áo giao lĩnh gấm đỏ son vạt chéo chữ V & Dải ngọc bội tha thướt',
      color: 'bg-amber-800'
    }
  ];

  // 3 Loại trang phục Hậu Lê - Triều Mạc đặc trưng
  const hauLeCostumeTypes = [
    {
      type: 1 as const,
      title: '1. Áo Giao Lĩnh Khổ Rộng (Thụng Thủ)',
      descNam: 'Áo gấm nâu đất viền son, đai buông dải, quần lụa trắng & Mũ cánh chuồn',
      descNu: 'Áo xanh cốm hoa hạc quý phái, ngọc bội hoa sen & Nón quai thao',
      color: 'bg-emerald-900'
    },
    {
      type: 2 as const,
      title: '2. Áo Đối Khâm (Đối Lĩnh)',
      descNam: 'Áo gấm hoa vàng nhạt xẻ ngực đối xứng, quần lụa xanh lam',
      descNu: 'Áo gấm lam thẫm thêu rồng mây hoàng triều, nẹp viền lam đậm & Chân váy thướt tha',
      color: 'bg-blue-950'
    },
    {
      type: 3 as const,
      title: '3. Áo Tứ Thân Kinh Bắc',
      descNam: 'Áo giao lĩnh thụng thủ nam giới truyền thống',
      descNu: 'Áo tứ thân nâu gụ lót son, yếm đỏ, thắt lưng lụa, khăn mỏ quạ & Hài nhung',
      color: 'bg-amber-950'
    }
  ];

  // Ánh xạ sang DressingState chuẩn cho Snapshot & Community
  const currentDressingState: DressingState = {
    name: selectedGender === 'male' 
      ? (activeEraPreset === 4
          ? (activeHauLeType === 1 ? 'Áo Giao Lĩnh Thụng Thủ Nam Lê Mạc' : (activeHauLeType === 2 ? 'Áo Đối Khâm Nam Hoàng Triều Lê Mạc' : 'Áo Giao Lĩnh Nam Lê Mạc'))
          : (activeEraPreset === 3 
              ? (activeLyTranType === 1 ? 'Áo Viên Lĩnh Nam Xanh Lam Lý Trần' : 'Áo Tứ Điên Nam Hoàng Triều')
              : 'Cổ Phục Nam Truyền Thống'))
      : (activeEraPreset === 4
          ? (activeHauLeType === 1 ? 'Áo Giao Lĩnh Nữ Xanh Cốm Lê Mạc' : (activeHauLeType === 2 ? 'Áo Đối Khâm Nữ Gấm Lam Thẫm Lê Mạc' : 'Áo Tứ Thân Nữ Nâu Gụ Kinh Bắc'))
          : (activeEraPreset === 3 
              ? (activeLyTranType === 1 ? 'Áo Viên Lĩnh Nữ Đỏ Son Lý Trần' : (activeLyTranType === 2 ? 'Áo Tứ Điên Nữ Hoàng Triều Lý Trần' : 'Áo Giao Lĩnh Nữ Lý Trần'))
              : 'Cổ Phục Nữ Truyền Thống')),
    gender: selectedGender,
    outerwearId: currentOutfit.top,
    mainId: currentOutfit.top || 'item-main',
    underlayerId: null,
    bottomId: currentOutfit.bottom || 'item-bot',
    headwearId: currentOutfit.hat,
    hairId: selectedGender === 'male' ? 'hair-nam' : 'hair-nu',
    accessoryId: null,
    footwearId: currentOutfit.shoes || 'item-shoes',
    backgroundId: activeEraPreset === 4 ? 'bg-dien-kinh-thien' : (activeEraPreset === 3 ? 'bg-thang-long-ly-tran' : 'bg-van-lang'),
    colors: {
      outerwear: selectedGender === 'male' ? '#452A1E' : (activeEraPreset === 4 && activeHauLeType === 3 ? '#38221B' : '#B5CEAB'),
      main: selectedGender === 'male' ? '#452A1E' : (activeEraPreset === 4 && activeHauLeType === 3 ? '#DC2626' : '#B5CEAB'),
      underlayer: '#FFFFFF',
      bottom: selectedGender === 'male' ? '#FFFFFF' : (activeEraPreset === 4 && activeHauLeType === 3 ? '#18181B' : '#9DBB93'),
      headwear: selectedGender === 'male' ? '#0F172A' : (activeEraPreset === 4 && activeHauLeType === 3 ? '#18181B' : '#FDE047')
    },
    pattern: activeEraPreset === 4 ? (activeHauLeType === 3 ? 'plain' : 'cloud') : 'lotus',
    fittingOutfit: {
      hat: currentOutfit.hat,
      top: currentOutfit.top,
      bottom: currentOutfit.bottom,
      shoes: currentOutfit.shoes,
    }
  };

  // Xác định biểu cảm nét mặt nhân vật: cười khi điểm cao/phối đẹp, buồn khi điểm thấp/sai lệch
  const mannequinMood: 'happy' | 'neutral' | 'sad' = 
    costumeEvaluation.score >= 75 
      ? 'happy' 
      : (costumeEvaluation.score < 50 || costumeEvaluation.warnings.length >= 2 ? 'sad' : 'neutral');

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-[60] bg-stone-900/95 text-stone-100 text-xs px-4 py-2.5 rounded-xl shadow-2xl border border-amber-600/40 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-md">
          <Check className="w-3.5 h-3.5 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar - Tiêu đề: Phòng Phối Đồ */}
      <header className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-serif-royal font-bold text-stone-900 tracking-tight">
          Phòng Phối Đồ Ảo
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl mx-auto">
          Cắt may &amp; phối trang phục theo từng bộ phận vừa vặn hình thể nhân vật: Áo Giao Lĩnh Khổ Rộng, Áo Đối Khâm thời Hậu Lê - Triều Mạc, Lý - Trần - Hồ và 7 thời kỳ lịch sử
        </p>

        {/* Action Toolbar */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={() => setShowSnapshotModal(true)}
            className="px-4 py-2 bg-stone-900 hover:bg-[#8B1E1E] text-amber-100 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-amber-300" />
            <span>Chụp ảnh &amp; Xuất thẻ phục trang</span>
          </button>

          <button
            onClick={() => {
              setIsMuted(!isMuted);
              showToast(isMuted ? 'Đã bật âm thanh cung đình' : 'Đã tắt âm thanh');
            }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
              !isMuted 
                ? 'bg-amber-100 border-amber-300 text-amber-800' 
                : 'bg-white border-stone-200 text-stone-400 hover:text-stone-700'
            }`}
            title={!isMuted ? 'Tắt âm thanh' : 'Bật âm thanh cung đình'}
          >
            {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        {/* THANH PHỐI TRỌN BỘ 7 THỜI KỲ LỊCH SỬ (TÍCH HỢP ĐẦY ĐỦ CÁC LOẠI TRANG PHỤC ĐẶC TRƯNG) */}
        <div className="mt-5 max-w-4xl mx-auto bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200 shadow-sm text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-3 px-1">
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#8B1E1E]" />
              <span>Phối Nhanh 7 Thời Kỳ Lịch Sử:</span>
            </span>
            <span className="text-[11px] sm:text-xs text-[#8B1E1E] font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 self-start sm:self-auto">
              {historicalEras.find(e => e.id === activeEraPreset)?.name || 'Trạng Thái Cơ Bản (Phối Tự Do)'}
            </span>
          </div>

          {/* 7 Nút chọn thời kỳ */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
            {historicalEras.map(era => {
              const isCurrent = activeEraPreset === era.id;
              return (
                <button
                  key={era.id}
                  onClick={() => {
                    applyEraOutfit(era.id, selectedGender);
                    playChime([523.25, 659.25, 783.99, 1046.50]);
                    showToast(`Đã khoác trọn bộ: ${era.name}`);
                  }}
                  className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? selectedGender === 'male'
                        ? 'border-[#1E3A5F] bg-[#F0F5FA] ring-2 ring-[#1E3A5F]/20 shadow-xs'
                        : 'border-[#8B1E1E] bg-[#FFF5F5] ring-2 ring-[#8B1E1E]/20 shadow-xs'
                      : 'border-stone-200 hover:border-stone-400 bg-stone-50/70 hover:bg-white'
                  }`}
                >
                  <span className={`text-[11px] font-bold truncate block ${
                    isCurrent 
                      ? selectedGender === 'male' ? 'text-[#1E3A5F]' : 'text-[#8B1E1E]'
                      : 'text-stone-800'
                  }`}>
                    {era.short}
                  </span>
                  <span className="text-[9px] text-stone-500 truncate block mt-0.5">
                    {era.years}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CÁC LOẠI TRANG PHỤC CON (SUB-TYPES) HIỂN THỊ TRỰC TIẾP KHI CHỌN THỜI KỲ TƯƠNG ỨNG) */}
          {/* Khi chọn Thời Hậu Lê - Triều Mạc (Era 4) -> 3 Loại */}
          {activeEraPreset === 4 && (
            <div className="mt-3 pt-3 border-t border-stone-100 animate-in fade-in duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-emerald-950 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    {selectedGender === 'male'
                      ? 'Chọn 1 trong 2 loại y phục Hậu Lê - Triều Mạc:'
                      : 'Chọn 1 trong 3 loại y phục Hậu Lê - Triều Mạc & Kinh Bắc:'}
                  </span>
                </span>
                <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-100/70 px-2 py-0.5 rounded-md">
                  {selectedGender === 'male' ? 'Trang phục Nam' : 'Trang phục Nữ'}
                </span>
              </div>
              <div className={`grid grid-cols-1 ${selectedGender === 'male' ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-2`}>
                {hauLeCostumeTypes
                  .filter(item => selectedGender === 'female' || item.type !== 3)
                  .map(item => {
                  const isSelected = activeHauLeType === item.type;
                  return (
                    <button
                      key={item.type}
                      onClick={() => {
                        applyHauLeCostume(item.type, selectedGender);
                        playChime([523.25, 659.25, 783.99, 1046.50]);
                        showToast(`Đã khoác: ${item.title}`);
                      }}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? selectedGender === 'male'
                            ? 'border-[#1E3A5F] bg-white ring-2 ring-[#1E3A5F]/20 shadow-xs'
                            : 'border-[#8B1E1E] bg-white ring-2 ring-[#8B1E1E]/20 shadow-xs'
                          : 'border-emerald-200/80 bg-emerald-50/50 hover:bg-white hover:border-emerald-400'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-xs font-bold ${
                          isSelected 
                            ? selectedGender === 'male' ? 'text-[#1E3A5F]' : 'text-[#8B1E1E]'
                            : 'text-stone-900'
                        }`}>
                          {item.title}
                        </span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-600"></span>}
                      </div>
                      <span className="text-[10px] text-stone-600 mt-1 leading-snug">
                        {selectedGender === 'male' ? item.descNam : item.descNu}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Khi chọn Thời Lý - Trần - Hồ (Era 3) -> 3 Loại */}
          {activeEraPreset === 3 && (
            <div className="mt-3 pt-3 border-t border-stone-100 animate-in fade-in duration-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-amber-950 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Chọn 1 trong 3 loại y phục Lý - Trần - Hồ:</span>
                </span>
                <span className="text-[10px] text-amber-800 font-semibold bg-amber-100/70 px-2 py-0.5 rounded-md">
                  {selectedGender === 'male' ? 'Trang phục Nam' : 'Trang phục Nữ'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {lyTranCostumeTypes.map(item => {
                  const isSelected = activeLyTranType === item.type;
                  return (
                    <button
                      key={item.type}
                      onClick={() => {
                        applyLyTranCostume(item.type, selectedGender);
                        playChime([523.25, 659.25, 783.99, 1046.50]);
                        showToast(`Đã khoác: ${item.title}`);
                      }}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? selectedGender === 'male'
                            ? 'border-[#1E3A5F] bg-white ring-2 ring-[#1E3A5F]/20 shadow-xs'
                            : 'border-[#8B1E1E] bg-white ring-2 ring-[#8B1E1E]/20 shadow-xs'
                          : 'border-amber-200/80 bg-amber-50/50 hover:bg-white hover:border-amber-400'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-xs font-bold ${
                          isSelected 
                            ? selectedGender === 'male' ? 'text-[#1E3A5F]' : 'text-[#8B1E1E]'
                            : 'text-stone-900'
                        }`}>
                          {item.title}
                        </span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-600"></span>}
                      </div>
                      <span className="text-[10px] text-stone-600 mt-1 leading-snug">
                        {selectedGender === 'male' ? item.descNam : item.descNu}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* CONTAINER CHÍNH CHIA 2 CỘT: Trái (Nhân vật) & Phải (Menu) */}
      <div className="bg-white rounded-2xl shadow-xl border border-stone-200 flex flex-col md:flex-row relative">
        
        {/* =======================================================================
             BÊN TRÁI: KHU VỰC MÔ HÌNH NHÂN VẬT 2D LAYERING TRY-ON
             ======================================================================= */}
        <div className="flex-1 p-4 sm:p-8 flex flex-col items-center justify-between bg-stone-50 border-b md:border-b-0 md:border-r border-stone-200 md:sticky md:top-20 md:self-start rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl z-10">
          
          {/* Thanh chuyển đổi giới tính nhanh trực tiếp trên sân khấu */}
          <div className="w-full flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>Khung Phối Đồ Nhân Vật</span>
            </span>

            <div className="flex items-center gap-1 bg-stone-200/90 p-1 rounded-xl">
              <button
                onClick={() => {
                  setSelectedGender('male');
                  if (activeHauLeType === 3) {
                    setActiveHauLeType(1);
                  }
                  playChime([523.25, 659.25]);
                  showToast('Đã chọn Phối đồ cho nam');
                }}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedGender === 'male'
                    ? 'bg-[#1E3A5F] text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <span>Phối đồ cho nam</span>
              </button>

              <button
                onClick={() => {
                  setSelectedGender('female');
                  playChime([659.25, 783.99]);
                  showToast('Đã chọn Phối đồ cho nữ');
                }}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedGender === 'female'
                    ? 'bg-[#8B1E1E] text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <span>Phối đồ cho nữ</span>
              </button>
            </div>
          </div>

          {/* KHUNG MÔ HÌNH 2D CẮT MAY THEO LỚP (320x448 TỈ LỆ 400x560) */}
          <div 
            className="relative w-full max-w-[320px] aspect-[400/560] max-h-[448px] rounded-2xl border-2 border-stone-300 shadow-inner overflow-hidden select-none isolate mx-auto"
            style={{
              background: 'radial-gradient(circle at 50% 30%, #fffbeb 0%, #fef3c7 60%, #e2e8f0 100%)',
              contain: 'paint'
            }}
          >
            {/* Lớp 1: Thân người cơ bản theo giới tính & nét mặt biểu cảm cảm xúc (z-1) */}
            <img 
              id="layer-body" 
              src={getBodySvg(selectedGender, mannequinMood)} 
              alt={selectedGender === 'male' ? "Thân người nam" : "Thân người nữ"} 
              className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-all duration-300 animate-in fade-in"
              style={{ zIndex: 1 }}
            />

            {/* Lớp 1b: Áo lót trong mộc mạc tế nhị (z-5) - CHỈ hiện khi chưa chọn mặc áo nào (top === null) */}
            {currentOutfit.top === null && (
              <img 
                id="layer-undergarment-top"
                src={selectedGender === 'male' ? SVG_UNDERGARMENT_TOP_MALE : SVG_UNDERGARMENT_TOP_FEMALE}
                alt="Lớp áo lót trong"
                className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-opacity duration-200 animate-in fade-in"
                style={{ zIndex: 5 }}
              />
            )}

            {/* Lớp 1c: Quần lót trong mộc mạc tế nhị (z-2) - CHỈ hiện khi chưa chọn mặc quần/váy nào (bottom === null) */}
            {currentOutfit.bottom === null && (
              <img 
                id="layer-undergarment-bottom"
                src={selectedGender === 'male' ? SVG_UNDERGARMENT_BOTTOM_MALE : SVG_UNDERGARMENT_BOTTOM_FEMALE}
                alt="Lớp quần lót trong"
                className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-opacity duration-200 animate-in fade-in"
                style={{ zIndex: 2 }}
              />
            )}

            {/* Lớp 2: Giày dép / Hài (Shoes) (z-3) - Mang trước, nằm dưới ống quần & chân váy để vừa khít thẩm mỹ */}
            {getLayerSrc('shoes') && (
              <img 
                id="layer-shoes" 
                src={getLayerSrc('shoes')!} 
                alt="Lớp giày hài" 
                className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-opacity duration-200 animate-in fade-in"
                style={{ zIndex: 3 }}
              />
            )}

            {/* Lớp 3: Quần / Chân váy (Bottom) (z-4) - Ống quần & tà váy buông rủ phẳng phiu tự nhiên qua cổ chân */}
            {getLayerSrc('bottom') && (
              <img 
                id="layer-bottom" 
                src={getLayerSrc('bottom')!} 
                alt="Lớp quần hoặc chân váy" 
                className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-opacity duration-200 animate-in fade-in"
                style={{ zIndex: 4 }}
              />
            )}

            {/* Lớp 4: Áo (Top) (z-6) */}
            {getLayerSrc('top') && (
              <img 
                id="layer-top" 
                src={getLayerSrc('top')!} 
                alt="Lớp áo chính" 
                className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-opacity duration-200 animate-in fade-in"
                style={{ zIndex: 6 }}
              />
            )}

            {/* Lớp 5: Mũ & Khăn (Hat) (z-7) - Luôn nằm trong phạm vi cách ly (isolate), không bao giờ lọt ra ngoài */}
            {getLayerSrc('hat') && (
              <img 
                id="layer-hat" 
                src={getLayerSrc('hat')!} 
                alt="Lớp mũ hoặc khăn" 
                className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none transition-opacity duration-200 animate-in fade-in"
                style={{ zIndex: 7 }}
              />
            )}

            {/* Huy hiệu thời kỳ & Loại trang phục */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#8B1E1E] text-white shadow-xs">
                {historicalEras.find(e => e.id === activeEraPreset)?.short || 'Phối Tự Do'}
              </span>
              {activeEraPreset === 3 && (
                <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-stone-900/80 text-amber-200 backdrop-blur-xs">
                  {activeLyTranType === 1 ? 'Áo Viên Lĩnh' : (activeLyTranType === 2 ? 'Áo Tứ Điên' : 'Áo Giao Lĩnh')}
                </span>
              )}
            </div>
          </div>

          {/* Thanh thông tin trạng thái & Điểm số tức thì */}
          <div className="mt-4 w-full flex items-center justify-between text-xs text-stone-500 font-medium px-2">
            <span>Đang mặc cho: <strong className="text-stone-800">{selectedGender === 'male' ? 'Nhân Vật Nam' : 'Nhân Vật Nữ'}</strong></span>
            
            {/* Huy hiệu điểm số thời gian thực */}
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border flex items-center gap-1 shadow-2xs ${costumeEvaluation.badgeColor}`}>
                <Award className="w-3 h-3" />
                <span>{costumeEvaluation.score}/100đ</span>
              </span>
              <span className="text-amber-800 font-semibold flex items-center gap-1 text-[11px]">
                <span>{activeCount}/4 món</span>
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================================
             BÊN PHẢI: KHU VỰC MENU CHỌN ĐỒ THEO GIỚI TÍNH & 7 THỜI ĐẠI
             ======================================================================= */}
        <div className="flex-[1.3] p-3.5 sm:p-8 flex flex-col gap-4 sm:gap-5 max-h-[640px] overflow-y-auto rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl">
          
          {/* Nhóm 1: Mũ & Khăn */}
          <div className="border-b border-stone-100 pb-4">
            <div className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>1. Mũ, Nón &amp; Khăn Đội Đầu</span>
              <span className="text-[11px] font-normal text-stone-400">
                {selectedGender === 'male' ? 'Mũ Phục Nam' : 'Mũ Phục Nữ'}
              </span>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {/* Nút Tháo ra */}
              <button
                onClick={() => handleSelectItem('hat', null)}
                className={`bg-white border rounded-xl p-2 flex flex-col items-center gap-1.5 transition-all outline-none cursor-pointer ${
                  currentOutfit.hat === null 
                    ? 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-600/20' 
                    : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-400 text-xs font-medium">
                  Trống
                </div>
                <span className="text-[11px] text-stone-500 font-medium truncate w-full text-center">
                  Không đội
                </span>
              </button>

              {/* Danh sách Mũ */}
              {currentWardrobe.hat.map(item => {
                const isSelected = currentOutfit.hat === item.id;
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleSelectItem('hat', item.id)}
                      className={`w-full bg-white border rounded-xl p-2 flex flex-col items-center gap-1.5 transition-all outline-none cursor-pointer ${
                        isSelected 
                          ? selectedGender === 'male'
                            ? 'border-[#1E3A5F] bg-[#F0F5FA] ring-2 ring-[#1E3A5F]/30 shadow-xs'
                            : 'border-[#8B1E1E] bg-[#FFF5F5] ring-2 ring-[#8B1E1E]/30 shadow-xs'
                          : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f6efe6] to-[#e6d9c8] border border-[#d5c5b3] shadow-inner flex items-center justify-center overflow-hidden p-1 relative">
                        <img src={item.src} alt={item.name} className="w-full h-full object-contain drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.3)]" />
                      </div>
                      <span className={`text-[11px] font-medium truncate w-full text-center ${
                        isSelected ? (selectedGender === 'male' ? 'text-[#1E3A5F] font-bold' : 'text-[#8B1E1E] font-bold') : 'text-stone-700'
                      }`}>
                        {item.name}
                      </span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDetailItem(item);
                      }}
                      className="absolute top-1 right-1 p-1 bg-white/90 hover:bg-stone-900 hover:text-white rounded-full text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
                      title="Xem ý nghĩa lịch sử & cấu tạo"
                    >
                      <Info className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nhóm 2: Thân Áo (Top) */}
          <div className="border-b border-stone-100 pb-4">
            <div className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>2. Thân Áo &amp; Lễ Phục Thượng Thân</span>
              <span className="text-[11px] font-normal text-stone-400">
                {selectedGender === 'male' ? 'Áo Nam' : 'Áo Nữ'}
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {/* Nút Tháo ra */}
              <button
                onClick={() => handleSelectItem('top', null)}
                className={`bg-white border rounded-xl p-2 flex flex-col items-center gap-1.5 transition-all outline-none cursor-pointer ${
                  currentOutfit.top === null 
                    ? 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-600/20' 
                    : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-400 text-xs font-medium">
                  Trống
                </div>
                <span className="text-[11px] text-stone-500 font-medium truncate w-full text-center">
                  Không mặc
                </span>
              </button>

              {/* Danh sách Áo */}
              {currentWardrobe.top.map(item => {
                const isSelected = currentOutfit.top === item.id;
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleSelectItem('top', item.id)}
                      className={`w-full bg-white border rounded-xl p-2 flex flex-col items-center gap-1.5 transition-all outline-none cursor-pointer ${
                        isSelected 
                          ? selectedGender === 'male'
                            ? 'border-[#1E3A5F] bg-[#F0F5FA] ring-2 ring-[#1E3A5F]/30 shadow-xs'
                            : 'border-[#8B1E1E] bg-[#FFF5F5] ring-2 ring-[#8B1E1E]/30 shadow-xs'
                          : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f6efe6] to-[#e6d9c8] border border-[#d5c5b3] shadow-inner flex items-center justify-center overflow-hidden p-1 relative">
                        <img src={item.src} alt={item.name} className="w-full h-full object-contain drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.3)]" />
                      </div>
                      <span className={`text-[11px] font-medium truncate w-full text-center ${
                        isSelected ? (selectedGender === 'male' ? 'text-[#1E3A5F] font-bold' : 'text-[#8B1E1E] font-bold') : 'text-stone-700'
                      }`}>
                        {item.name}
                      </span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDetailItem(item);
                      }}
                      className="absolute top-1 right-1 p-1 bg-white/90 hover:bg-stone-900 hover:text-white rounded-full text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
                      title="Xem ý nghĩa lịch sử & cấu tạo"
                    >
                      <Info className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nhóm 3: Quần & Váy (Bottom) */}
          <div className="border-b border-stone-100 pb-4">
            <div className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>3. Quần, Chân Váy &amp; Thường Hạ Thân</span>
              <span className="text-[11px] font-normal text-stone-400">
                {selectedGender === 'male' ? 'Quần Nam' : 'Váy / Quần Nữ'}
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {/* Nút Tháo ra */}
              <button
                onClick={() => handleSelectItem('bottom', null)}
                className={`bg-white border rounded-xl p-2 flex flex-col items-center gap-1.5 transition-all outline-none cursor-pointer ${
                  currentOutfit.bottom === null 
                    ? 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-600/20' 
                    : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-400 text-xs font-medium">
                  Trống
                </div>
                <span className="text-[11px] text-stone-500 font-medium truncate w-full text-center">
                  Không mặc
                </span>
              </button>

              {/* Danh sách Quần/Váy */}
              {currentWardrobe.bottom.map(item => {
                const isSelected = currentOutfit.bottom === item.id;
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleSelectItem('bottom', item.id)}
                      className={`w-full bg-white border rounded-xl p-2 flex flex-col items-center gap-1.5 transition-all outline-none cursor-pointer ${
                        isSelected 
                          ? selectedGender === 'male'
                            ? 'border-[#1E3A5F] bg-[#F0F5FA] ring-2 ring-[#1E3A5F]/30 shadow-xs'
                            : 'border-[#8B1E1E] bg-[#FFF5F5] ring-2 ring-[#8B1E1E]/30 shadow-xs'
                          : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f6efe6] to-[#e6d9c8] border border-[#d5c5b3] shadow-inner flex items-center justify-center overflow-hidden p-1 relative">
                        <img src={item.src} alt={item.name} className="w-full h-full object-contain drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.3)]" />
                      </div>
                      <span className={`text-[11px] font-medium truncate w-full text-center ${
                        isSelected ? (selectedGender === 'male' ? 'text-[#1E3A5F] font-bold' : 'text-[#8B1E1E] font-bold') : 'text-stone-700'
                      }`}>
                        {item.name}
                      </span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDetailItem(item);
                      }}
                      className="absolute top-1 right-1 p-1 bg-white/90 hover:bg-stone-900 hover:text-white rounded-full text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
                      title="Xem ý nghĩa lịch sử & cấu tạo"
                    >
                      <Info className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nhóm 4: Hài & Giày Dép (Shoes) */}
          <div className="pb-2">
            <div className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>4. Hài, Hia &amp; Giày Cổ Truyền</span>
              <span className="text-[11px] font-normal text-stone-400">
                {selectedGender === 'male' ? 'Hia / Hài Nam' : 'Hài / Guốc Nữ'}
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {/* Nút Tháo ra */}
              <button
                onClick={() => handleSelectItem('shoes', null)}
                className={`bg-white border rounded-xl p-2 flex flex-col items-center gap-1.5 transition-all outline-none cursor-pointer ${
                  currentOutfit.shoes === null 
                    ? 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-600/20' 
                    : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-400 text-xs font-medium">
                  Chân trần
                </div>
                <span className="text-[11px] text-stone-500 font-medium truncate w-full text-center">
                  Không đi giày
                </span>
              </button>

              {/* Danh sách Giày */}
              {currentWardrobe.shoes.map(item => {
                const isSelected = currentOutfit.shoes === item.id;
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleSelectItem('shoes', item.id)}
                      className={`w-full bg-white border rounded-xl p-2 flex flex-col items-center gap-1.5 transition-all outline-none cursor-pointer ${
                        isSelected 
                          ? selectedGender === 'male'
                            ? 'border-[#1E3A5F] bg-[#F0F5FA] ring-2 ring-[#1E3A5F]/30 shadow-xs'
                            : 'border-[#8B1E1E] bg-[#FFF5F5] ring-2 ring-[#8B1E1E]/30 shadow-xs'
                          : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f6efe6] to-[#e6d9c8] border border-[#d5c5b3] shadow-inner flex items-center justify-center overflow-hidden p-1 relative">
                        <img src={item.src} alt={item.name} className="w-full h-full object-contain drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.3)]" />
                      </div>
                      <span className={`text-[11px] font-medium truncate w-full text-center ${
                        isSelected ? (selectedGender === 'male' ? 'text-[#1E3A5F] font-bold' : 'text-[#8B1E1E] font-bold') : 'text-stone-700'
                      }`}>
                        {item.name}
                      </span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDetailItem(item);
                      }}
                      className="absolute top-1 right-1 p-1 bg-white/90 hover:bg-stone-900 hover:text-white rounded-full text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
                      title="Xem ý nghĩa lịch sử & cấu tạo"
                    >
                      <Info className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Controls: Reset & Phối ngẫu nhiên */}
          <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={handleReset}
              className="px-4 py-2 border border-stone-300 hover:bg-stone-100 text-stone-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Tháo hết đồ</span>
            </button>

            <button
              onClick={handleRandomize}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Phối ngẫu nhiên</span>
            </button>
          </div>

        </div>
      </div>

      {/* BẢNG CHẤM ĐIỂM, ĐÁNH GIÁ THẨM MỸ & CẢNH BÁO SAI LỆCH TRANG PHỤC */}
      <div className="mt-6">
        <CostumeScorePanel 
          evaluation={costumeEvaluation}
          onApplyFix={handleApplyEvaluationFix}
        />
      </div>

      {/* Modal Xuất thẻ ảnh phục trang */}
      {showSnapshotModal && (
        <SnapshotExportModal 
          dressingState={currentDressingState}
          onClose={() => setShowSnapshotModal(false)}
          onSaveToLocal={(outfit) => {
            if (onSaveOutfit) onSaveOutfit(outfit);
            showToast('Đã lưu trang phục vào bộ sưu tập cá nhân!');
          }}
          onShareToCommunity={(outfit, author, desc) => {
            if (onShareToCommunity) onShareToCommunity(outfit, author, desc);
            showToast('Đã chia sẻ trang phục lên Cộng đồng cổ phục!');
          }}
        />
      )}

      {/* Modal Chi tiết Hiện vật & Cấu tạo */}
      {selectedDetailItem && (
        <div 
          className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedDetailItem(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 text-left animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] font-bold text-[#8B1E1E] uppercase tracking-wider bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                  {selectedDetailItem.eraName}
                </span>
                <h3 className="text-lg font-serif-royal font-bold text-stone-900 mt-2">
                  {selectedDetailItem.name}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedDetailItem(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="w-32 h-32 mx-auto my-3 bg-gradient-to-br from-[#f6efe6] to-[#e6d9c8] rounded-2xl border border-[#d5c5b3] shadow-inner flex items-center justify-center p-2">
              <img src={selectedDetailItem.src} alt={selectedDetailItem.name} className="w-full h-full object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)]" />
            </div>

            <div className="space-y-3 text-xs text-stone-700">
              <div>
                <strong className="text-stone-900 block font-semibold">Ý nghĩa văn hóa:</strong>
                <p className="mt-0.5 text-stone-600 leading-relaxed">{selectedDetailItem.meaning}</p>
              </div>

              <div>
                <strong className="text-stone-900 block font-semibold">Cấu tạo &amp; Đường nét cắt may:</strong>
                <p className="mt-0.5 text-stone-600 leading-relaxed">{selectedDetailItem.structure}</p>
              </div>

              <div>
                <strong className="text-stone-900 block font-semibold">Bối cảnh lịch sử &amp; Câu chuyện:</strong>
                <p className="mt-0.5 text-stone-600 leading-relaxed">{selectedDetailItem.story}</p>
              </div>

              <div>
                <strong className="text-stone-900 block font-semibold">Mục đích sử dụng:</strong>
                <p className="mt-0.5 text-stone-600 leading-relaxed">{selectedDetailItem.usage}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedDetailItem(null)}
              className="mt-5 w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Đóng thông tin
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
