import { FittingItem, GenderWardrobe } from './fittingAssets';
import { PRESET_OUTFITS } from '../../data/costumes';

export interface CostumeEvaluation {
  score: number; // 0 - 100
  rating: 'PERFECT' | 'HARMONIOUS' | 'CREATIVE_CROSS' | 'NEEDS_ADJUSTMENT';
  badgeColor: string; // Tailwind color classes
  title: string;
  summary: string;
  colorScore: number; // Tối đa 34 điểm
  structureScore: number; // Tối đa 33 điểm
  eraScore: number; // Tối đa 33 điểm (Sáng tạo & Giao thoa)
  warnings: string[];
  suggestions: string[];
  dominantEraName?: string;
  itemsCount: number;
  gender: 'male' | 'female';
  recommendedFix?: {
    slot: 'hat' | 'top' | 'bottom' | 'shoes';
    itemId: string;
    itemName: string;
    reason: string;
  };
}

export const ERA_NAMES_MAP: Record<number, string> = {
  1: 'Thời Hùng Vương & Đông Sơn',
  2: 'Thời Bắc Thuộc & Tiền Lê',
  3: 'Thời Lý - Trần - Hồ',
  4: 'Thời Hậu Lê & Triều Mạc',
  5: 'Triều Tây Sơn',
  6: 'Triều Nguyễn',
  7: 'Tân Thời & Đương Đại Thế Kỷ XXI'
};

// Tra cứu màu sắc chủ đạo và hành tương ứng của 100% item Nam & Nữ
const ITEM_COLOR_PALETTES: Record<string, { primary: string; secondary: string; element: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ' }> = {
  // === MALE ITEMS (NAM) ===
  // Era 1: Văn Lang - Đông Sơn
  m_top_vanlang_tattoo: { primary: 'Vàng cát cổ sơ', secondary: 'Đỏ son trống đồng', element: 'Thổ' },
  m_bot_kho_dongson: { primary: 'Nâu đất phù sa', secondary: 'Vàng kim mặt trời', element: 'Thổ' },
  m_hat_longchim: { primary: 'Vàng hoàng kim 5 chóp', secondary: 'Đỏ ruby', element: 'Kim' },
  m_shoe_chan_tran: { primary: 'Chân trần tự nhiên', secondary: 'Đất phù sa', element: 'Thổ' },

  // Era 2: Bắc Thuộc & Tiền Lê
  m_top_vienlinh_nauhong: { primary: 'Nâu hồng gạch gấm', secondary: 'Lót đỏ son', element: 'Hỏa' },
  m_bot_quan_lua_trang: { primary: 'Bạch lụa tơ tằm', secondary: 'Trắng ngà', element: 'Kim' },
  m_hat_phacdau_bacthuoc: { primary: 'Đen the đĩnh đạc', secondary: 'Đen tuyền', element: 'Thủy' },
  m_shoe_hia_den_vientrang: { primary: 'Hia đen cổ cao', secondary: 'Viền chỉ trắng', element: 'Thủy' },

  // Era 3: Lý - Trần - Hồ
  m_top_vienlinh_lytran: { primary: 'Xanh lam ngọc gấm sen', secondary: 'Vàng kim hoàng gia', element: 'Mộc' },
  m_top_tudien_nam_lytran: { primary: 'Gấm lam hoàng triều 4 vạt', secondary: 'Vàng kim', element: 'Mộc' },
  m_hat_sa_lytran: { primary: 'Mũ sa the đen', secondary: 'Đinh tự', element: 'Thủy' },
  m_shoe_hai_gam_lytran: { primary: 'Gấm lam mũi cong', secondary: 'Đế da nâu đen', element: 'Mộc' },

  // Era 4: Hậu Lê & Triều Mạc
  m_top_giaolinh_thungthu_haule: { primary: 'Nâu đất gụ viền son', secondary: 'Đai đỏ son buông dải', element: 'Thổ' },
  m_top_doikham_nam_haule: { primary: 'Vàng be dệt hoa lam', secondary: 'Lót lam nhạt', element: 'Thổ' },
  m_bot_quan_lua_lam_haule: { primary: 'Xanh lam nhạt lụa', secondary: 'Trắng mây', element: 'Thủy' },
  m_hat_canhchuon: { primary: 'Đen then nho phong', secondary: 'Vàng sa kim', element: 'Thủy' },
  m_shoe_giay_den_haule: { primary: 'Giày vải đen nho sinh', secondary: 'Đế trắng', element: 'Thủy' },
  m_shoe_hai_lam_haule: { primary: 'Hài lụa xanh lam', secondary: 'Thêu hoa', element: 'Thủy' },

  // Era 5: Triều Tây Sơn
  m_top_tayson_nam: { primary: 'Đỏ cờ đào nghĩa quân', secondary: 'Đai thắt đen', element: 'Hỏa' },
  m_bot_quan_tayson_nam: { primary: 'Đen lụa hành quân', secondary: 'Đỏ son', element: 'Thủy' },
  m_hat_khan_tayson: { primary: 'Đỏ thắm chít trán', secondary: 'Đỏ cờ đào', element: 'Hỏa' },
  m_shoe_giay_vai_tayson: { primary: 'Vải đen dẻo dai', secondary: 'Đế da', element: 'Thủy' },

  // Era 6: Triều Nguyễn
  m_top_aotac_nguyen: { primary: 'Lam ngọc ngũ thân lập lĩnh', secondary: '5 cúc vàng', element: 'Mộc' },
  m_hat_khandong: { primary: 'Đen tuyền chữ Nhân', secondary: 'Vàng kim', element: 'Thủy' },
  m_top_nguthan_xanhreu_cophong: { primary: 'Xanh rêu nhạt thanh tao', secondary: 'Lụa thô cổ phong', element: 'Mộc' },
  m_top_aodai_bach_lien: { primary: 'Bạch liên gấm hoa sen', secondary: 'Bạch hoàng cung', element: 'Kim' },
  m_bot_quan_ong_rong_trang: { primary: 'Trắng ngà lụa mềm', secondary: 'Trắng', element: 'Kim' },
  m_bot_quan_ong_rong_bach_lien: { primary: 'Bạch lụa gấm hoa sen', secondary: 'Trắng', element: 'Kim' },
  m_hat_non_la_nam_cophong: { primary: 'Tre vàng mộc', secondary: 'Khăn vấn nâu', element: 'Thổ' },
  m_shoe_giay_tay_bach_lien: { primary: 'Da đen lịch lãm', secondary: 'Đen bóng', element: 'Thủy' },

  // Era 7: Thế Kỷ XXI
  m_top_cachtan_xxi: { primary: 'Xanh lam navy cách tân', secondary: 'Vàng hoa văn', element: 'Thủy' },
  m_bot_quantay_xxi: { primary: 'Đen âu hiện đại', secondary: 'Đen', element: 'Thủy' },
  m_shoe_giay_tay_xxi: { primary: 'Da đen đương đại', secondary: 'Đen', element: 'Thủy' },

  // === FEMALE ITEMS (NỮ) ===
  // Era 1: Văn Lang - Đông Sơn
  f_top_yem_dongson: { primary: 'Đỏ thắm trống đồng', secondary: 'Vàng kim sa', element: 'Hỏa' },
  f_bot_vay_lacviet: { primary: 'Vàng tươi chim Lạc', secondary: 'Đỏ son vạt yếm', element: 'Thổ' },
  f_hat_longchim: { primary: 'Vàng hoàng kim viền bạc', secondary: 'Ngọc đỏ', element: 'Kim' },
  f_shoe_chan_tran: { primary: 'Chân trần tự nhiên', secondary: 'Đất phù sa', element: 'Thổ' },

  // Era 2: Bắc Thuộc & Tiền Lê
  f_top_giaolinh_hongphan: { primary: 'Hồng phấn tơ tằm', secondary: 'Lót đỏ son', element: 'Hỏa' },
  f_bot_vay_xeply_do: { primary: 'Đỏ son xếp ly dập tầng', secondary: 'Đỏ thắm', element: 'Hỏa' },
  f_shoe_hai_theu_hoa: { primary: 'Trắng kem thêu hoa đào', secondary: 'Đỏ son', element: 'Kim' },
  f_top_giaolinh_tuongvan: { primary: 'Hồng phấn thêu mây Tường Vân', secondary: 'Vàng kim / Đỏ son', element: 'Hỏa' },
  f_bot_vay_ruby_tuongvan: { primary: 'Đỏ ruby thêu viền hoàng gia', secondary: 'Vàng kim', element: 'Hỏa' },
  f_hat_tram_tuongvan: { primary: 'Vàng phượng hoàng ngọc bích', secondary: 'Châu ngọc', element: 'Kim' },
  f_shoe_hai_cungdinh_tuongvan: { primary: 'Đỏ ruby thêu kim tuyến', secondary: 'Vàng kim', element: 'Hỏa' },

  // Era 3: Lý - Trần - Hồ
  f_top_vienlinh_nu_lytran: { primary: 'Đỏ son hoa cúc dây', secondary: 'Vàng sa kim', element: 'Hỏa' },
  f_top_tudien_nu_lytran: { primary: 'Đỏ thắm gấm 4 vạt', secondary: 'Vàng kim ngọc bội', element: 'Hỏa' },
  f_top_giaolinh_nu_lytran: { primary: 'Đỏ son gấm hoàng triều', secondary: 'Vàng ngà', element: 'Hỏa' },
  f_bot_thuong_quang_lytran: { primary: 'Trắng ngà dập ly sen', secondary: 'Kem hoa sen', element: 'Kim' },
  f_hat_tram_cai_lytran: { primary: 'Vàng hoa sen đài các', secondary: 'Khăn vấn lụa', element: 'Kim' },
  f_shoe_hai_theu_sen_lytran: { primary: 'Hài thêu hoa sen sa kim', secondary: 'Vàng sen', element: 'Hỏa' },

  // Era 4: Hậu Lê & Triều Mạc
  f_top_giaolinh_xanhcom_haule: { primary: 'Xanh cốm non thanh nhã', secondary: 'Hồng sen ngọc bội', element: 'Mộc' },
  f_bot_vay_xanhcom_haule: { primary: 'Xanh cốm xếp ly tha thướt', secondary: 'Xanh nhạt', element: 'Mộc' },
  f_top_doikham_hoanggia_haule: { primary: 'Xanh navy hoàng gia gấm', secondary: 'Rồng mây dát vàng', element: 'Thủy' },
  f_bot_vay_navy_haule: { primary: 'Xanh navy dập ly bồng bềnh', secondary: 'Xanh thẫm', element: 'Thủy' },
  f_top_tuthan_kinhbac_naudo: { primary: 'Nâu gụ trầm ấm lót son', secondary: 'Đai đôi xanh hồng', element: 'Thổ' },
  f_top_aocanh_do_tuthan: { primary: 'Đỏ thắm cổ đứng lót trong', secondary: 'Đỏ son', element: 'Hỏa' },
  f_bot_vay_den_tuthan: { primary: 'Đen tuyền lụa Kinh Bắc', secondary: 'Đen óng', element: 'Thủy' },
  f_hat_moqua_doibong_do: { primary: 'Khăn mỏ quạ đen tuyền', secondary: '2 quả bông đỏ duyên', element: 'Thủy' },
  f_hat_quai_thao: { primary: 'Vàng tơ nan tre ba tầm', secondary: 'Quai thao lụa', element: 'Thổ' },
  f_shoe_hai_trang_kem_haule: { primary: 'Trắng kem thêu hoa đào', secondary: 'Hồng phấn', element: 'Kim' },
  f_shoe_hai_navy_kimtuyen_haule: { primary: 'Navy gấm thêu kim tuyến', secondary: 'Vàng kim', element: 'Thủy' },
  f_shoe_hai_vai_den_tuthan: { primary: 'Hài vải nhung đen mũi tròn', secondary: 'Đen', element: 'Thủy' },

  // Era 5: Triều Tây Sơn
  f_top_tayson_nu: { primary: 'Đỏ thắm cờ đào nữ binh', secondary: 'Đen', element: 'Hỏa' },
  f_bot_quan_hai_ong_tayson: { primary: 'Đen lụa hai ống', secondary: 'Đen bóng', element: 'Thủy' },
  f_hat_khan_tayson: { primary: 'Đỏ quấn trán anh dũng', secondary: 'Đỏ cờ đào', element: 'Hỏa' },
  f_shoe_hai_vai_tayson: { primary: 'Đen vải đế thấp nữ binh', secondary: 'Đen', element: 'Thủy' },

  // Era 6: Triều Nguyễn
  f_top_nhatbinh_nguyen: { primary: 'Đỏ son hoàng tộc mẫu nghi', secondary: 'Cổ thêu Ngũ Sắc', element: 'Hỏa' },
  f_bot_quan_lua_nguyen: { primary: 'Bạch hoàng cung Huế', secondary: 'Trắng lụa tơ', element: 'Kim' },
  f_hat_vanhday_nguyen: { primary: 'Khăn vành dây hoàng kim', secondary: 'Vàng rực rỡ', element: 'Kim' },
  f_shoe_hai_theu_nguyen: { primary: 'Gấm son thêu phượng hoàng', secondary: 'Vàng kim', element: 'Hỏa' },
  f_top_nguthan_xanhreu_dam: { primary: 'Xanh rêu đậm Nam Bộ', secondary: 'Khăn rằn ca-rô', element: 'Mộc' },
  f_bot_vay_xoe_trang_nga: { primary: 'Trắng ngà dập ly xòe', secondary: 'Trắng tơ', element: 'Kim' },
  f_hat_non_la_nu_hoa_sen: { primary: 'Nón lá truyền thống', secondary: 'Trâm sen ngọc', element: 'Kim' },
  f_shoe_dep_le_da_nau: { primary: 'Nâu đất da mộc mạc', secondary: 'Nâu da', element: 'Thổ' },

  // Era 7: Thế Kỷ XXI
  f_top_cachtan_xxi: { primary: 'Hồng phấn pastel đương đại', secondary: 'Trắng ngà', element: 'Hỏa' },
  f_bot_vay_cachtan_xxi: { primary: 'Trắng ngà dập ly xòe', secondary: 'Trắng', element: 'Kim' }
};

// Kiểm tra quan hệ Ngũ Hành giữa 2 yếu tố
function checkElementRelation(
  el1: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ',
  el2: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ'
): 'SAME' | 'GENERATIVE' | 'OVERCOMING' | 'NEUTRAL' {
  if (el1 === el2) return 'SAME';

  const generativePairs: Record<string, string> = {
    Mộc: 'Hỏa',
    Hỏa: 'Thổ',
    Thổ: 'Kim',
    Kim: 'Thủy',
    Thủy: 'Mộc'
  };

  if (generativePairs[el1] === el2 || generativePairs[el2] === el1) {
    return 'GENERATIVE';
  }

  const overcomingPairs: Record<string, string> = {
    Mộc: 'Thổ',
    Thổ: 'Thủy',
    Thủy: 'Hỏa',
    Hỏa: 'Kim',
    Kim: 'Mộc'
  };

  if (overcomingPairs[el1] === el2 || overcomingPairs[el2] === el1) {
    return 'OVERCOMING';
  }

  return 'NEUTRAL';
}

// Danh sách các bộ đôi di sản kinh điển chuẩn mẫu (Top ID + Bottom ID)
const PERFECT_MATCH_PAIRS = new Set([
  // Nam (Male)
  'm_top_vanlang_tattoo:m_bot_kho_dongson',
  'm_top_vienlinh_nauhong:m_bot_quan_lua_trang',
  'm_top_vienlinh_lytran:m_bot_quan_lua_trang',
  'm_top_tudien_nam_lytran:m_bot_quan_lua_trang',
  'm_top_giaolinh_thungthu_haule:m_bot_quan_lua_trang',
  'm_top_doikham_nam_haule:m_bot_quan_lua_lam_haule',
  'm_top_tayson_nam:m_bot_quan_tayson_nam',
  'm_top_aotac_nguyen:m_bot_quan_lua_trang',
  'm_top_cachtan_xxi:m_bot_quantay_xxi',
  'm_top_nguthan_xanhreu_cophong:m_bot_quan_ong_rong_trang',
  'm_top_aodai_bach_lien:m_bot_quan_ong_rong_bach_lien',
  'm_top_aodai_bach_lien:m_bot_quan_lua_trang',

  // Nữ (Female)
  'f_top_yem_dongson:f_bot_vay_lacviet',
  'f_top_giaolinh_hongphan:f_bot_vay_xeply_do',
  'f_top_giaolinh_tuongvan:f_bot_vay_ruby_tuongvan',
  'f_top_vienlinh_nu_lytran:f_bot_thuong_quang_lytran',
  'f_top_tudien_nu_lytran:f_bot_thuong_quang_lytran',
  'f_top_giaolinh_nu_lytran:f_bot_thuong_quang_lytran',
  'f_top_giaolinh_xanhcom_haule:f_bot_vay_xanhcom_haule',
  'f_top_doikham_hoanggia_haule:f_bot_vay_navy_haule',
  'f_top_tuthan_kinhbac_naudo:f_bot_vay_den_tuthan',
  'f_top_aocanh_do_tuthan:f_bot_vay_den_tuthan',
  'f_top_tayson_nu:f_bot_quan_hai_ong_tayson',
  'f_top_nhatbinh_nguyen:f_bot_quan_lua_nguyen',
  'f_top_cachtan_xxi:f_bot_vay_cachtan_xxi',
  'f_top_nguthan_xanhreu_dam:f_bot_vay_xoe_trang_nga'
]);

export function evaluateCostumeOutfit(
  outfit: { hat: string | null; top: string | null; bottom: string | null; shoes: string | null },
  gender: 'male' | 'female',
  wardrobe: GenderWardrobe
): CostumeEvaluation {
  // Lấy danh sách item đang mặc
  const activeItems: { slot: 'hat' | 'top' | 'bottom' | 'shoes'; item: FittingItem }[] = [];

  (['hat', 'top', 'bottom', 'shoes'] as const).forEach(slot => {
    const id = outfit[slot];
    if (id) {
      const item = wardrobe[slot]?.find(w => w.id === id);
      if (item) {
        activeItems.push({ slot, item });
      }
    }
  });

  const count = activeItems.length;

  // Trường hợp chưa mặc món nào
  if (count === 0) {
    return {
      score: 0,
      rating: 'NEEDS_ADJUSTMENT',
      badgeColor: 'bg-stone-100 text-stone-700 border-stone-300',
      title: 'Chưa Khoác Y Phục (0/100đ)',
      summary: `Nhân vật ${gender === 'male' ? 'Nam' : 'Nữ'} chưa khoác trang phục. Hãy thỏa sức sáng tạo bằng cách chọn Áo, Quần/Váy, Mũ và Giày để tạo nên phong cách cổ phong ấn tượng.`,
      colorScore: 0,
      structureScore: 0,
      eraScore: 0,
      warnings: [`Nhân vật ${gender === 'male' ? 'Nam' : 'Nữ'} chưa mặc y phục.`],
      suggestions: ['Bắt đầu bằng việc chọn Thượng Y (Áo) và Hạ Y (Quần/Chân váy) yêu thích.'],
      itemsCount: 0,
      gender
    };
  }

  const warnings: string[] = [];
  const suggestions: string[] = [];

  const topItem = activeItems.find(a => a.slot === 'top')?.item;
  const bottomItem = activeItems.find(a => a.slot === 'bottom')?.item;
  const hatItem = activeItems.find(a => a.slot === 'hat')?.item;
  const shoeItem = activeItems.find(a => a.slot === 'shoes')?.item;

  const hasTopItem = !!topItem;
  const hasBottomItem = !!bottomItem;

  // =========================================================================
  // KIỂM TRA BỘ PHỐI DI SẢN CHUẨN MẪU (PRESET OUTFIT)
  // Đạt 100/100đ điểm tối đa
  // =========================================================================
  const matchedPreset = (!hasTopItem || !hasBottomItem) ? null : PRESET_OUTFITS.find(p => {
    if (p.gender !== gender) return false;
    const fo = p.dressingState.fittingOutfit;
    if (!fo || !fo.top || !fo.bottom) return false;

    // Phải khớp đúng áo và quần
    const topMatch = fo.top === outfit.top;
    const bottomMatch = fo.bottom === outfit.bottom;
    if (!topMatch || !bottomMatch) return false;

    const hatMatch = fo.hat === null ? true : (fo.hat === outfit.hat);
    const shoeMatch = fo.shoes === null ? true : (fo.shoes === outfit.shoes);
    if (hatMatch && shoeMatch) return true;

    return activeItems.every(a => a.item.eraNumber === p.eraNumber);
  });

  if (matchedPreset) {
    return {
      score: 100,
      rating: 'PERFECT',
      badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-400',
      title: 'Tuyệt Mỹ & Chuẩn Thẩm Mỹ (100/100đ)',
      summary: `Bộ phối di sản trứ danh "${matchedPreset.title}". Đạt điểm tuyệt đối 100/100 về mỹ học phối màu, phom dáng cân đối và thần thái cổ phong tao nhã.`,
      colorScore: 34,
      structureScore: 33,
      eraScore: 33,
      warnings: [],
      suggestions: [
        `Bộ phối hoàn mỹ: ${matchedPreset.title} (${gender === 'male' ? 'Nhân vật Nam' : 'Nhân vật Nữ'}).`,
        `Phối màu Tinh Tế (34/34đ): Gam màu ${matchedPreset.period} tôn dáng, ngũ hành tương sinh, quý phái.`,
        `Cấu trúc Chỉn Chu (33/33đ): Cắt may trọn vẹn, tôn vinh vóc dáng thanh nhã.`,
        `Thần Thái Cổ Phong (33/33đ): Tái hiện trọn vẹn nét đẹp thanh cao di sản Việt Nam.`
      ],
      dominantEraName: matchedPreset.period,
      itemsCount: count,
      gender
    };
  }

  // =========================================================================
  // TIÊU CHÍ 1: MỸ HỌC SẮC TÔNG & TRIẾT LÝ NGŨ HÀNH (TỐI ĐA 34 ĐIỂM) - NGHIÊM TÚC
  // Tương sinh/Kinh điển = Đạt chuẩn cao; Tương khắc = Bị trừ điểm thích đáng
  // =========================================================================
  let colorScore = 0;

  if (!topItem || !bottomItem) {
    colorScore = 0;
    if (!bottomItem && topItem) {
      warnings.push(`Chưa mặc Hạ Y: Nhân vật ${gender === 'male' ? 'Nam' : 'Nữ'} chưa mặc Quần hoặc Chân váy bên dưới!`);
      suggestions.push('Hãy chọn thêm Hạ Y (Quần/Chân váy) để tạo lập sự hài hòa màu sắc.');
    } else if (bottomItem && !topItem) {
      warnings.push(`Chưa mặc Thượng Y: Nhân vật ${gender === 'male' ? 'Nam' : 'Nữ'} chưa chọn Áo truyền thống bên trên!`);
      suggestions.push('Hãy chọn thêm Thượng Y (Áo) để tạo điểm nhấn sắc tông cổ phong.');
    }
  } else {
    const topPal = ITEM_COLOR_PALETTES[topItem.id] || {
      primary: 'Sắc phục truyền thống',
      secondary: 'Họa tiết cổ phong',
      element: 'Hỏa' as const
    };
    const botPal = ITEM_COLOR_PALETTES[bottomItem.id] || {
      primary: 'Sắc phục nền nã',
      secondary: 'Lụa mềm',
      element: 'Kim' as const
    };

    const relation = checkElementRelation(topPal.element, botPal.element);
    const isPerfectPair = PERFECT_MATCH_PAIRS.has(`${topItem.id}:${bottomItem.id}`);

    // Kiểm tra màu trung tính kinh điển của Hạ Y (Quần lụa bạch, váy đen, lụa ngà, đất phù sa)
    const isBotNeutralHeritage =
      botPal.primary.includes('Đen') ||
      botPal.primary.includes('Bạch') ||
      botPal.primary.includes('Trắng') ||
      botPal.primary.includes('Ngà') ||
      botPal.primary.includes('Kem') ||
      botPal.primary.includes('phù sa');

    if (isPerfectPair || relation === 'GENERATIVE') {
      // Ngũ Hành Tương Sinh hoặc Bộ đôi di sản kinh điển
      colorScore = isPerfectPair ? 34 : 32;
      suggestions.push(`Phối Màu Ngũ Hành Tương Sinh Đại Cát (${colorScore}/34đ): Sắc áo [${topPal.primary}] (${topPal.element}) tương sinh nâng đỡ [${botPal.primary}] (${botPal.element}), mang lại vẻ đẹp đoan trang, hỷ khí.`);
    } else if (relation === 'SAME' || isBotNeutralHeritage) {
      // Ngũ Hành Đồng Hành hoặc Hạ Y Màu Trung Tính Nền Nã
      colorScore = 26;
      suggestions.push(`Sắc Tông Đồng Điệu & Nền Nã (26/34đ): Gam màu [${topPal.primary}] (${topItem.name}) và [${botPal.primary}] (${bottomItem.name}) tao nhã, thuận mắt theo mỹ cảm cổ truyền.`);
    } else if (relation === 'NEUTRAL') {
      // Bình hòa tự nhiên
      colorScore = 20;
      suggestions.push(`Phối Màu Duyên Dáng (20/34đ): Sắc áo ${topItem.name} và quần/váy ${bottomItem.name} phối hợp nhẹ nhàng.`);
    } else {
      // Tương Khắc Ngũ Hành (Bị trừ điểm nghiêm khắc)
      colorScore = 10;
      warnings.push(`Xung Khắc Ngũ Hành (${topPal.element} khắc ${botPal.element}): Sắc áo [${topPal.primary}] (${topPal.element}) xung khắc với Hạ Y [${botPal.primary}] (${botPal.element}). Theo mỹ học truyền thống, sự xung khắc này làm giảm tính hài hòa và tôn nghiêm.`);
      suggestions.push(`Nên chọn Quần/Váy có hành tương sinh (Mộc sinh Hỏa, Hỏa sinh Thổ,...) hoặc dùng Hạ Y màu trung tính (Lụa Bạch / Váy Đen) để hóa giải xung khắc.`);
    }

    // Thưởng phụ kiện Mũ/Khăn và Hài/Giày nếu có (+1đ mỗi món)
    if (hatItem) colorScore = Math.min(34, colorScore + 1);
    if (shoeItem) colorScore = Math.min(34, colorScore + 1);
  }

  // =========================================================================
  // TIÊU CHÍ 2: CẤU TRÚC Y QUAN & LỄ NGHI CHỈN CHU (TỐI ĐA 33 ĐIỂM) - NGHIÊM TÚC
  // Có đầy đủ 4/4 món (Đầu Diện, Thượng Y, Hạ Y, Túc Y) theo lễ nghi cổ truyền
  // =========================================================================
  let structureScore = 0;

  if (!topItem && !bottomItem) {
    structureScore = 0;
  } else if (!topItem || !bottomItem) {
    structureScore = 0;
  } else {
    const hasHat = !!hatItem;
    const hasShoes = !!shoeItem;

    if (hasHat && hasShoes) {
      // Đầy đủ 4/4 chi tiết
      structureScore = 33;
      suggestions.push(`Cấu Trúc Y Quan Trọn Vẹn 4/4 Món (33/33đ): Chỉn chu từ Đầu Diện (${hatItem.name}), Thượng Y (${topItem.name}), Hạ Y (${bottomItem.name}) đến Túc Y (${shoeItem.name}) theo đúng tác phong lễ nghi.`);
    } else if (hasHat && !hasShoes) {
      // Có Mũ nhưng Thiếu Giày (Đi chân trần)
      structureScore = 20;
      warnings.push(`Khuyết Túc Y (Đi chân trần): Khoác lễ phục mà đi chân trần là chưa đạt tác phong lễ nghi cổ truyền trang trọng.`);
      suggestions.push(`Bổ sung thêm Hài thêu hoặc Giày để hoàn thiện Túc Y.`);
    } else if (!hasHat && hasShoes) {
      // Có Giày nhưng Thiếu Mũ/Khăn (Khuyết Đầu Diện)
      structureScore = 22;
      warnings.push(`Khuyết Đầu Diện (Thiếu Khăn/Mũ): Nghi thức trang phục cổ xưa đề cao việc vấn khăn hoặc đội mũ khi xuất hành dự lễ.`);
      suggestions.push(`Bổ sung thêm Khăn đóng, Mão quan hoặc Nón phù hợp để trang phục trọn vẹn.`);
    } else {
      // Thiếu CẢ Mũ LẪN Giày (Chỉ có Áo + Quần/Váy)
      structureScore = 14;
      warnings.push(`Thiếu cả Đầu Diện và Túc Y: Trang phục mới ở mức sơ khai tại gia, chưa đạt tiêu chuẩn cổ phong lễ nghi khi giao tiếp.`);
      suggestions.push(`Bổ sung thêm Khăn/Mũ và Hài/Giày để nâng cao phẩm cấp trang phục.`);
    }
  }

  // =========================================================================
  // TIÊU CHÍ 3: THẦN THÁI CỔ PHONG & HÀI HÒA PHONG CÁCH (TỐI ĐA 33 ĐIỂM) - NGHIÊM KHẮC
  // Đánh giá tính ăn nhập, tinh tế và đồng điệu giữa các chi tiết
  // =========================================================================
  let eraScore = 0;
  let dominantEraName = 'Cổ Phong Giao Thoa';

  if (!topItem || !bottomItem) {
    eraScore = 0;
  } else {
    const eraNumbers = activeItems.map(a => a.item.eraNumber);
    const distinctEras = Array.from(new Set(eraNumbers)).sort((a, b) => a - b);

    const eraCounts: Record<number, number> = {};
    activeItems.forEach(({ item }) => {
      eraCounts[item.eraNumber] = (eraCounts[item.eraNumber] || 0) + 1;
    });

    let dominantEra = distinctEras[0] || 4;
    let maxCountInEra = 0;
    distinctEras.forEach(e => {
      if (eraCounts[e] > maxCountInEra) {
        maxCountInEra = eraCounts[e];
        dominantEra = e;
      }
    });

    dominantEraName = ERA_NAMES_MAP[dominantEra] || 'Cổ Phong Giao Thoa';

    if (distinctEras.length === 1) {
      // Thuần khiết một phong cách triều đại cổ điển
      eraScore = 33;
      suggestions.push(`Thần Thái Cổ Truyền Thuần Khiết (33/33đ): Toàn bộ trang phục mang trọn vẹn nét đẹp cổ điển ${dominantEraName}.`);
    } else if (distinctEras.length === 2) {
      // Giao thoa 2 phong cách
      const era1Name = ERA_NAMES_MAP[distinctEras[0]];
      const era2Name = ERA_NAMES_MAP[distinctEras[1]];
      const hasModern = distinctEras.includes(7);

      eraScore = 25;
      if (hasModern) {
        suggestions.push(`Giao Thoa Cổ Phong & Đương Đại (25/33đ): Kết hợp giữa nét đẹp truyền thống (${distinctEras[0] === 7 ? era2Name : era1Name}) và hơi thở hiện đại.`);
      } else {
        suggestions.push(`Giao Thoa Cổ Phong Nghệ Thuật (25/33đ): Hòa quyện vẻ đẹp đặc trưng của ${era1Name} và ${era2Name}.`);
      }
    } else {
      // Giao thoa đa phong cách (3 thời kỳ trở lên)
      eraScore = 16;
      warnings.push(`Pha trộn nhiều phong cách: Kết hợp từ 3 thời kỳ khác nhau (${distinctEras.map(e => ERA_NAMES_MAP[e]).join(', ')}), cần lưu ý giữ tính ăn nhập của phom dáng.`);
      suggestions.push(`Nên tiết chế bớt các chi tiết khác biệt để tổng thể trang phục thanh thoát, cô đọng hơn.`);
    }
  }

  // =========================================================================
  // TÍNH TỔNG ĐIỂM & XẾP HẠNG PHÂN HÓA RÕ RÀNG (0 - 100 ĐIỂM)
  // =========================================================================
  const totalScore = Math.min(100, Math.max(0, colorScore + structureScore + eraScore));

  let rating: CostumeEvaluation['rating'] = 'NEEDS_ADJUSTMENT';
  let badgeColor = 'bg-rose-100 text-rose-950 border-rose-300';
  let title = 'Chưa Đạt Chuẩn Mực Văn Hóa (Dưới 55đ)';
  let summary = `Bộ trang phục ${gender === 'male' ? 'Nam' : 'Nữ'} chưa đạt chuẩn mực văn hóa cổ truyền (${totalScore}/100đ). Cần hoàn thiện cấu trúc y quan hoặc điều chỉnh sắc tông ngũ hành.`;

  if (totalScore >= 90) {
    rating = 'PERFECT';
    badgeColor = 'bg-emerald-100 text-emerald-950 border-emerald-400';
    title = 'Tuyệt Mỹ & Đại Chuẩn Mực (90-100đ)';
    summary = topItem && bottomItem
      ? `Bộ phối ${gender === 'male' ? 'Nam' : 'Nữ'} đạt chuẩn mực cao cấp (${totalScore}/100đ). Trọn vẹn 4/4 chi tiết từ Đầu Diện, Thượng Y, Hạ Y đến Túc Y, phối màu tương sinh quý phái.`
      : `Bộ y phục đạt đỉnh cao thẩm mỹ văn hóa truyền thống.`;
  } else if (totalScore >= 75) {
    rating = 'HARMONIOUS';
    badgeColor = 'bg-amber-100 text-amber-950 border-amber-400';
    title = 'Đoan Trang & Khá Chuẩn Mực (75-89đ)';
    summary = topItem && bottomItem
      ? `Sự phối hợp giữa ${topItem.name} và ${bottomItem.name} đạt vẻ đẹp tao nhã, sắc tông hài hòa. Bổ sung đủ phụ kiện để vươn tới mức hoàn mỹ 90-100đ.`
      : `Bộ trang phục hài hòa và tinh tế.`;
  } else if (totalScore >= 55) {
    rating = 'CREATIVE_CROSS';
    badgeColor = 'bg-orange-100 text-orange-950 border-orange-300';
    title = 'Cần Hoàn Thiện Thêm Y Quan (55-74đ)';
    summary = `Trang phục hiện tại còn thiếu các phụ kiện lễ nghi quan trọng (Khăn/Mũ hoặc Hài/Giày) hoặc sắc tông cần được điều chỉnh cho thuận mắt hơn.`;
  } else {
    rating = 'NEEDS_ADJUSTMENT';
    badgeColor = 'bg-rose-100 text-rose-950 border-rose-300';
    title = 'Sai Lệch Quy Chuẩn Thẩm Mỹ & Lễ Nghi (Dưới 55đ)';
    summary = topItem && bottomItem
      ? `Sự kết hợp giữa ${topItem.name} và ${bottomItem.name} gặp vấn đề về xung khắc ngũ hành hoặc thiếu vắng cấu trúc y quan căn bản.`
      : `Chưa khoác đủ trang phục Thượng Y và Hạ Y căn bản theo quy chuẩn cổ truyền.`;
  }

  // Gợi ý phối thêm phụ kiện tôn dáng
  let recommendedFix: CostumeEvaluation['recommendedFix'];
  if (!bottomItem && topItem) {
    const defaultBottom = wardrobe.bottom.find(b => b.eraNumber === topItem.eraNumber) || wardrobe.bottom[0];
    if (defaultBottom) {
      recommendedFix = {
        slot: 'bottom',
        itemId: defaultBottom.id,
        itemName: defaultBottom.name,
        reason: `Mặc thêm Hạ Y (${defaultBottom.name}) để trang phục trọn vẹn.`
      };
    }
  } else if (topItem && bottomItem && !hatItem) {
    const matchingHat = wardrobe.hat.find(h => h.eraNumber === topItem.eraNumber) || wardrobe.hat[0];
    if (matchingHat) {
      recommendedFix = {
        slot: 'hat',
        itemId: matchingHat.id,
        itemName: matchingHat.name,
        reason: `Bổ sung ${matchingHat.name} để tạo điểm nhấn Đầu Diện ấn tượng hơn.`
      };
    }
  } else if (topItem && bottomItem && !shoeItem) {
    const matchingShoe = wardrobe.shoes.find(s => s.eraNumber === topItem.eraNumber) || wardrobe.shoes[0];
    if (matchingShoe) {
      recommendedFix = {
        slot: 'shoes',
        itemId: matchingShoe.id,
        itemName: matchingShoe.name,
        reason: `Mang thêm ${matchingShoe.name} để hoàn thiện trọn vẹn từng chi tiết.`
      };
    }
  }

  return {
    score: totalScore,
    rating,
    badgeColor,
    title,
    summary,
    colorScore,
    structureScore,
    eraScore,
    warnings,
    suggestions,
    dominantEraName,
    itemsCount: count,
    gender,
    recommendedFix
  };
}

