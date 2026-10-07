/**
 * Direct Vite-managed image asset imports.
 * Vite automatically hashes and embeds/bundles these images correctly
 * for both dev server and production builds.
 */
import heroAodai from './images/viet_hero_aodai_1790419051793.jpg';
import nhatBinh from './images/costume_nhat_binh_1790419072454.jpg';
import tuThan from './images/costume_tu_than_1790419088670.jpg';
import vanPhuc from './images/textile_van_phuc_1790419103122.jpg';
import aoTac from './images/costume_ao_tac_1790421652667.jpg';
import aoBaBa from './images/costume_ao_baba_1790421664555.jpg';
import giaoLinhHongPhan from './images/bacthuoc_nu_giaolinh_hongphan_1790924776416.jpg';
import giaoLinhTuongVanNu from './images/giaolinh_tuongvan_nu_1791342628625.jpg';
import giaoLinhFlatlay from './images/giao_linh_flatlay_1790516052906.jpg';
import virtualTryonStudio from './images/virtual_tryon_studio_1790518707461.jpg';

// Historical Vietnamese Costumes by Era & Gender
import vanLangNam from './images/vanlang_nam_chuan_1790859403953.jpg';
import vanLangNu from './images/vanlang_nu_chuan_1790859421468.jpg';
import bacThuocNam from './images/bacthuoc_nam_vienlinh_nauhong_1790924791640.jpg';
import bacThuocNu from './images/bacthuoc_nu_giaolinh_hongphan_1790924776416.jpg';

// Lý - Trần - Hồ (3 Loại Y Phục Riêng Biệt Cho Nam và Nữ)
import lyTranVienLinhNam from './images/lytran_vienlinh_nam_1790933172121.jpg';
import lyTranVienLinhNu from './images/lytran_vienlinh_nu_1790933190044.jpg';
import lyTranTuDienNam from './images/lytran_tudien_nam_1790933209942.jpg';
import lyTranTuDienNu from './images/tudien_lytran_nu_1790855594326.jpg';
import lyTranGiaoLinhNu from './images/giaolinh_nu_linhnam_1790855579483.jpg';

// Hậu Lê & Triều Mạc (Các Loại Y Phục Riêng Biệt Cho Nam và Nữ)
import hauLeThungThuNam from './images/thungthu_haule_1790855426872.jpg';
import hauLeThungThuNu from './images/haule_thungthu_nu_1790933229554.jpg';
import hauLeDoiKhamNam from './images/haule_doikham_nam_1790933245874.jpg';
import hauLeDoiKhamNu from './images/haule_doikham_nu_1790933262380.jpg';

import taySonNam from './images/tayson_chieucach_1790855439542.jpg';
import taySonNu from './images/tayson_nu_1790855513195.jpg';
import nguyenNam from './images/aotac_nguyen_nam_1790855621742.jpg';
import nguyenNu from './images/costume_nhat_binh_1790419072454.jpg';
import modernNam from './images/cachtan_nam_xxi_1790855633168.jpg';
import modernNu from './images/aodai_cachtan_xxi_1790855526058.jpg';
import vanNienLuaLogo from './images/van_nien_lua_logo.jpg';

export const IMAGES = {
  logo: vanNienLuaLogo,
  vanNienLuaLogo,
  heroAodai,
  nhatBinh,
  tuThan,
  vanPhuc,
  aoTac,
  aoBaBa,
  giaoLinhHongPhan,
  giaoLinhTuongVanNu,
  giaoLinhFlatlay,
  virtualTryonStudio,
  
  // Historical Eras
  vanLangNam,
  vanLangNu,
  bacThuocNam,
  bacThuocNu,

  // Lý - Trần - Hồ
  lyTranNam: lyTranVienLinhNam,
  lyTranNu: lyTranVienLinhNu,
  lyTranVienLinhNam,
  lyTranVienLinhNu,
  lyTranTuDienNam,
  lyTranTuDienNu,
  lyTranGiaoLinhNu,
  lyTranVienLinhBoth: lyTranVienLinhNu,
  lyTranTuDienBoth: lyTranTuDienNu,

  // Hậu Lê & Triều Mạc
  hauLeNam: hauLeThungThuNam,
  hauLeNu: hauLeThungThuNu,
  hauLeThungThuNam,
  hauLeThungThuNu,
  hauLeDoiKhamNam,
  hauLeDoiKhamNu,
  hauLeThungThuBoth: hauLeThungThuNu,
  hauLeDoiKhamBoth: hauLeDoiKhamNu,

  taySonNam,
  taySonNu,
  nguyenNam,
  nguyenNu,
  modernNam,
  modernNu,
};
