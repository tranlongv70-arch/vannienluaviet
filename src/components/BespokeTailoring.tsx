import React, { useState, useMemo } from 'react';
import { 
  Scissors, 
  Sparkles, 
  MapPin, 
  Check, 
  Ruler, 
  Clock, 
  Send, 
  ShieldCheck,
  Phone,
  Mail,
  Star,
  ExternalLink,
  Search,
  Filter,
  DollarSign,
  Building,
  Navigation,
  Quote
} from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { TAILOR_SHOPS, TailorShop } from '../data/tailorShops';

export const BespokeTailoring: React.FC = () => {
  const [costumeType, setCostumeType] = useState('Áo Nhật Bình Hoàng Gia');
  const [workshop, setWorkshop] = useState('Ỷ Vân Hiên - Trung Tâm Phục Dựng Cổ Phục Việt Nam');
  const [fabric, setFabric] = useState('Lụa Vạn Phúc dệt hoa chìm');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [chest, setChest] = useState('86');
  const [waist, setWaist] = useState('68');
  const [hips, setHips] = useState('92');
  const [height, setHeight] = useState('165');
  const [notes, setNotes] = useState('Mong muốn thêu họa tiết chim phượng sa kim ở cổ áo và gấu áo.');
  const [submitted, setSubmitted] = useState(false);

  // Google Maps Tailor Directory States
  const [selectedShop, setSelectedShop] = useState<TailorShop>(TAILOR_SHOPS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('Tất cả');
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [minRatingFilter, setMinRatingFilter] = useState<number>(0);

  // Filtered tailor shops
  const filteredShops = useMemo(() => {
    return TAILOR_SHOPS.filter(shop => {
      // City filter
      if (selectedCity !== 'Tất cả' && shop.city !== selectedCity) return false;

      // Price filter
      if (priceFilter === 'budget' && shop.priceMin > 2500000) return false;
      if (priceFilter === 'mid' && (shop.priceMin < 2000000 || shop.priceMax > 9000000)) return false;
      if (priceFilter === 'luxury' && shop.priceMax < 7000000) return false;

      // Rating filter
      if (minRatingFilter > 0 && shop.rating < minRatingFilter) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = shop.name.toLowerCase().includes(query);
        const matchesBrand = shop.brand.toLowerCase().includes(query);
        const matchesAddress = shop.address.toLowerCase().includes(query);
        const matchesSpecialties = shop.specialties.some(s => s.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesAddress && !matchesSpecialties) return false;
      }

      return true;
    });
  }, [selectedCity, priceFilter, minRatingFilter, searchQuery]);

  // Price estimate calculation
  const getEstimatedPrice = () => {
    let base = 3500000;
    if (costumeType.includes('Nhật Bình')) base = 5800000;
    if (costumeType.includes('Áo Tấc')) base = 4200000;
    if (costumeType.includes('Tứ Thân')) base = 3200000;
    if (fabric.includes('Lãnh Mỹ A')) base += 2500000;
    if (fabric.includes('Gấm')) base += 1200000;
    return base.toLocaleString('vi-VN');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  const handleSelectShopForOrder = (shop: TailorShop) => {
    setSelectedShop(shop);
    setWorkshop(shop.name);
    // Smooth scroll to top tailoring form
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12 space-y-12">
      {/* Page Title & Intro */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold flex items-center gap-1.5">
          <Scissors className="w-4 h-4 text-amber-600" />
          <span>Nghệ Nhân May Đo Cổ Truyền · Định Vị Xưởng May Cổ Phục Toàn Quốc</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-royal font-bold text-stone-900 tracking-tight mt-1">
          Địa Chỉ May Đồ Uy Tín &amp; Đặt May Theo Số Đo
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
          Kết nối trực tiếp cùng các nhà may cổ phục gạo cội tại Hà Nội, Huế, TP. Hồ Chí Minh, Đà Nẵng. Tra cứu tiêu chí đánh giá từ khách hàng trên Google Maps để chọn xưởng phù hợp với ngân sách và mong muốn.
        </p>
      </div>

      {/* =======================================================================
           1. GOOGLE MAPS TAILOR LOCATOR SECTION (TRA CỨU TIỆM MAY GOOGLE MAPS)
           ======================================================================= */}
      <div id="google-maps-tailors" className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-100 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#8B1E1E]" />
              <h2 className="text-xl sm:text-2xl font-serif-royal font-bold text-stone-900">
                Tìm Tiệm May Đồ Uy Tín Trên Google Maps
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Danh sách các thương hiệu và xưởng phục dựng Cổ phục Việt Nam được đánh giá tốt nhất (Điểm đánh giá 4.8 - 5.0 ⭐) trên Google Maps.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="https://www.google.com/maps/search/tiệm+may+cổ+phục+việt+nam/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-stone-900 text-stone-100 hover:bg-stone-800 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Mở Google Maps Tìm Gần Bạn</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm tên tiệm, địa chỉ (Hàng Bông, Chu Văn An...), loại áo (Nhật Bình, Tấc, Ngũ Thân)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30"
              />
            </div>

            {/* City Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30 font-medium text-stone-800"
              >
                <option value="Tất cả">Tất Cả Thành Phố</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="sm:col-span-3">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30 font-medium text-stone-800"
              >
                <option value="all">Mọi Mức Giá</option>
                <option value="budget">Bình Dân / Tiết Kiệm (&lt; 2.5 Triệu)</option>
                <option value="mid">Tầm Trung Phổ Thông (2 - 8 Triệu)</option>
                <option value="luxury">Thêu Sa Kim Hoàng Gia (&gt; 7 Triệu)</option>
              </select>
            </div>
          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 pt-1">
            <span className="font-semibold text-stone-800 text-[11px] uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#8B1E1E]" /> Lọc nhanh:
            </span>

            <button
              onClick={() => { setSelectedCity('Tất cả'); setPriceFilter('all'); setMinRatingFilter(0); setSearchQuery(''); }}
              className={`px-3 py-1 rounded-lg border text-xs transition-colors ${
                selectedCity === 'Tất cả' && priceFilter === 'all' && minRatingFilter === 0 && !searchQuery
                  ? 'bg-[#8B1E1E] text-white border-[#8B1E1E] font-medium'
                  : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
              }`}
            >
              Tất cả ({TAILOR_SHOPS.length})
            </button>

            <button
              onClick={() => setMinRatingFilter(minRatingFilter === 4.9 ? 0 : 4.9)}
              className={`px-3 py-1 rounded-lg border text-xs transition-colors flex items-center gap-1 ${
                minRatingFilter === 4.9
                  ? 'bg-amber-600 text-white border-amber-600 font-medium'
                  : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
              }`}
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>Đánh giá xuất sắc 4.9+ ⭐</span>
            </button>

            <button
              onClick={() => setSelectedCity('Hà Nội')}
              className={`px-3 py-1 rounded-lg border text-xs transition-colors ${
                selectedCity === 'Hà Nội'
                  ? 'bg-[#8B1E1E] text-white border-[#8B1E1E] font-medium'
                  : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
              }`}
            >
              Hà Nội
            </button>

            <button
              onClick={() => setSelectedCity('TP. Hồ Chí Minh')}
              className={`px-3 py-1 rounded-lg border text-xs transition-colors ${
                selectedCity === 'TP. Hồ Chí Minh'
                  ? 'bg-[#8B1E1E] text-white border-[#8B1E1E] font-medium'
                  : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
              }`}
            >
              TP. Hồ Chí Minh
            </button>

            <button
              onClick={() => setSelectedCity('Thừa Thiên Huế')}
              className={`px-3 py-1 rounded-lg border text-xs transition-colors ${
                selectedCity === 'Thừa Thiên Huế'
                  ? 'bg-[#8B1E1E] text-white border-[#8B1E1E] font-medium'
                  : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
              }`}
            >
              Thừa Thiên Huế
            </button>
          </div>
        </div>

        {/* Map & Shop Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
          {/* Interactive Embedded Google Map View (7 Cols) */}
          <div className="lg:col-span-7 bg-stone-100 rounded-2xl overflow-hidden border border-stone-300 shadow-inner flex flex-col h-[460px] relative">
            <div className="bg-stone-900 text-stone-200 px-4 py-2.5 text-xs flex items-center justify-between z-10 shrink-0">
              <div className="flex items-center gap-2 truncate">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-semibold text-white truncate">{selectedShop.name}</span>
              </div>
              <a
                href={selectedShop.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-amber-300 hover:text-amber-200 flex items-center gap-1 bg-stone-800 px-2.5 py-1 rounded-lg transition-colors shrink-0"
              >
                <span>Mở trên Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full relative">
              <iframe
                title={selectedShop.name}
                src={selectedShop.embedMapUrl}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Selected Shop Info Footbar on Map */}
            <div className="bg-stone-900/95 backdrop-blur-md text-stone-100 p-3.5 border-t border-stone-800 text-xs flex items-center justify-between gap-3 shrink-0">
              <div className="space-y-0.5 max-w-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">{selectedShop.brand}</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">
                    ⭐ {selectedShop.rating} ({selectedShop.reviewsCount} đánh giá Google)
                  </span>
                </div>
                <p className="text-[11px] text-stone-300 truncate">{selectedShop.address}</p>
              </div>

              <button
                onClick={() => handleSelectShopForOrder(selectedShop)}
                className="px-3.5 py-2 bg-[#8B1E1E] hover:bg-[#721818] text-white rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <Scissors className="w-3.5 h-3.5 text-amber-300" />
                <span>Đặt May Tại Xưởng Này</span>
              </button>
            </div>
          </div>

          {/* Tailor Shop Cards List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
            {filteredShops.length === 0 ? (
              <div className="p-8 text-center bg-stone-50 rounded-2xl border border-dashed border-stone-200 space-y-2">
                <Building className="w-8 h-8 text-stone-400 mx-auto" />
                <p className="text-xs text-stone-600 font-medium">Không tìm thấy nhà may phù hợp với bộ lọc hiện tại.</p>
                <button
                  onClick={() => { setSelectedCity('Tất cả'); setPriceFilter('all'); setMinRatingFilter(0); setSearchQuery(''); }}
                  className="text-xs text-[#8B1E1E] font-semibold underline hover:text-[#721818]"
                >
                  Xóa bộ lọc để xem tất cả tiệm may
                </button>
              </div>
            ) : (
              filteredShops.map(shop => {
                const isSelected = selectedShop.id === shop.id;
                return (
                  <div
                    key={shop.id}
                    onClick={() => setSelectedShop(shop)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'border-[#8B1E1E] bg-rose-50/50 ring-2 ring-[#8B1E1E]/20 shadow-md'
                        : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-sm font-serif-royal font-bold text-stone-900 leading-snug">
                            {shop.name}
                          </h3>
                          {shop.featured && (
                            <span className="text-[9px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded uppercase">
                              Nổi bật
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-stone-600 mt-1 flex items-start gap-1">
                          <MapPin className="w-3 h-3 text-[#8B1E1E] shrink-0 mt-0.5" />
                          <span className="leading-tight">{shop.address}</span>
                        </p>
                      </div>

                      {/* Google Rating Badge */}
                      <div className="flex flex-col items-end shrink-0">
                        <div className="flex items-center gap-1 bg-amber-100 text-amber-900 px-2 py-0.5 rounded-lg text-xs font-bold">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>{shop.rating}</span>
                        </div>
                        <span className="text-[10px] text-stone-500 mt-0.5">({shop.reviewsCount} đánh giá)</span>
                      </div>
                    </div>

                    {/* Price Range & Specialties */}
                    <div className="mt-2.5 pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between text-xs gap-2">
                      <span className="font-bold text-[#8B1E1E]">{shop.priceRange}</span>
                      <span className="text-[11px] text-stone-500">📞 {shop.phone}</span>
                    </div>

                    {/* Specialty Tags */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {shop.specialties.map((spec, idx) => (
                        <span key={idx} className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md">
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Google Customer Review Quote */}
                    <div className="mt-2.5 p-2 rounded-xl bg-amber-50/70 border border-amber-100 text-[11px] text-stone-700 italic flex items-start gap-1.5">
                      <Quote className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <p className="line-clamp-2 leading-tight">
                        &quot;{shop.highlightReview.comment}&quot; — <span className="font-semibold not-italic text-stone-900">{shop.highlightReview.user}</span>
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectShopForOrder(shop);
                        }}
                        className="px-3 py-1.5 bg-[#8B1E1E] text-white hover:bg-[#721818] rounded-xl text-xs font-semibold flex items-center gap-1 transition-all shadow-sm cursor-pointer"
                      >
                        <Scissors className="w-3 h-3 text-amber-300" />
                        <span>Đặt may tại xưởng này</span>
                      </button>

                      <a
                        href={shop.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-medium flex items-center gap-1 transition-colors"
                      >
                        <span>Chỉ đường Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* =======================================================================
           2. CUSTOM TAILORING FORM SECTION (ĐẶT MAY THEO SỐ ĐO)
           ======================================================================= */}
      <div id="tailoring-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Container (8 Cols) */}
        <div className="lg:col-span-8 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif-royal font-bold text-stone-900">
                Tiếp Nhận Hồ Sơ May Đo Thành Công!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn quý khách <strong>{fullName}</strong>. Nghệ nhân phụ trách xưởng <em>{workshop}</em> sẽ liên hệ qua số điện thoại <strong>{phone}</strong> trong vòng 24 giờ để xác nhận quy cách may và lịch lấy số đo trực tiếp hoặc gửi thước đo chuẩn.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#8B1E1E] text-white rounded-xl text-xs font-semibold hover:bg-[#721818] transition-colors"
                >
                  Tạo đơn đặt may khác
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Type & Workshop */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-3 flex items-center gap-1.5">
                  <Scissors className="w-4 h-4" />
                  <span>1. Lựa Chọn Kiểu Dáng &amp; Xưởng Thủ Công (Theo Google Maps)</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Loại Y Phục Truyền Thống
                    </label>
                    <select
                      value={costumeType}
                      onChange={(e) => setCostumeType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30"
                    >
                      <option value="Áo Nhật Bình Hoàng Gia">Áo Nhật Bình Hoàng Gia (Triều Nguyễn)</option>
                      <option value="Áo Tấc Lễ Phục Tay Thụng">Áo Tấc Lễ Phục Tay Thụng (Triều Nguyễn)</option>
                      <option value="Áo Dài Ngũ Thân Tay Chẽn">Áo Dài Ngũ Thân Tay Chẽn (Cung Đình / Dân Gian)</option>
                      <option value="Áo Tứ Thân Kinh Bắc">Áo Tứ Thân Kinh Bắc (Kèm Yếm Đào &amp; Váy Lĩnh)</option>
                      <option value="Áo Giao Lĩnh Thời Hậu Lê">Áo Giao Lĩnh Thời Hậu Lê</option>
                      <option value="Áo Bà Ba Tơ Tằm Nam Bộ">Áo Bà Ba Tơ Tằm Nam Bộ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Xưởng Nghệ Nhân Chế Tác
                    </label>
                    <select
                      value={workshop}
                      onChange={(e) => setWorkshop(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30 font-medium"
                    >
                      {TAILOR_SHOPS.map(s => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.city})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Chất Liệu Vải Dệt Truyền Thống
                  </label>
                  <select
                    value={fabric}
                    onChange={(e) => setFabric(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/30"
                  >
                    <option value="Lụa Vạn Phúc dệt hoa chìm">Lụa Vạn Phúc hoa cúc chìm (Mềm mại, óng ả)</option>
                    <option value="Gấm Thái Tuấn thượng uyển dệt chỉ vàng">Gấm thượng uyển dệt chỉ sa kim (Trang trọng, đứng phom)</option>
                    <option value="Lãnh Mỹ A Tân Châu bí truyền">Lãnh Mỹ A Tân Châu (Đen tuyền, bóng gương, mát lịm)</option>
                    <option value="Đũi tơ tằm thô dệt thoi mộc">Đũi tơ tằm thô thủ công (Mộc mạc, bền bỉ)</option>
                    <option value="Vải lanh thổ cẩm dệt tay Sa Pa">Vải lanh thổ cẩm vẽ sáp ong nhuộm chàm</option>
                  </select>
                </div>
              </div>

              {/* Step 2: Measurements */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-3 flex items-center gap-1.5">
                  <Ruler className="w-4 h-4" />
                  <span>2. Số Đo Hình Thể (cm)</span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="block text-stone-600 mb-1">Vòng ngực (cm)</label>
                    <input
                      type="number"
                      value={chest}
                      onChange={(e) => setChest(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Vòng eo (cm)</label>
                    <input
                      type="number"
                      value={waist}
                      onChange={(e) => setWaist(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Vòng mông (cm)</label>
                    <input
                      type="number"
                      value={hips}
                      onChange={(e) => setHips(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Chiều cao (cm)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Customer Information */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-3">
                  3. Thông Tin Liên Hệ Khách Hàng
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0912 345 678"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@vidu.vn"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Ghi chú chi tiết cho nghệ nhân thêu &amp; may
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mô tả yêu cầu màu sắc, hoa văn thêu, dịp sử dụng (cưới hỏi, lễ tết, sự kiện ngoại giao)..."
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  * Cam kết đúng phom dáng và chất liệu thủ công 100%
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#8B1E1E] hover:bg-[#721818] text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Gửi Yêu Cầu May Đo</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar: Order Estimate & Craft Village Card (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#FAF9F5] border border-stone-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-4">
              Bản Kê Ước Tính May Đo
            </h3>

            <div className="space-y-3 text-xs text-stone-700 border-b border-stone-200 pb-4">
              <div className="flex justify-between">
                <span className="text-stone-500">Phục trang:</span>
                <span className="font-semibold text-stone-900 text-right">{costumeType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Chất liệu:</span>
                <span className="font-semibold text-stone-900 text-right">{fabric.split('(')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Xưởng đảm trách:</span>
                <span className="font-semibold text-stone-900 text-right text-[11px] max-w-44 truncate">{workshop}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Thời gian hoàn thiện:</span>
                <span className="font-semibold text-amber-900">14 - 21 ngày</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-stone-500">Chi phí dự toán:</div>
                <div className="text-2xl font-serif-royal font-bold text-[#8B1E1E]">
                  {getEstimatedPrice()} ₫
                </div>
              </div>
              <span className="text-[10px] text-stone-400 italic">Bao gồm công nghệ nhân</span>
            </div>
          </div>

          {/* Contact & Guarantee Box */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm space-y-3 text-xs text-stone-600">
            <div className="flex items-center gap-2 text-stone-900 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Cam Kết Chất Lượng Di Sản</span>
            </div>
            <p className="leading-relaxed">
              Tất cả các sản phẩm may đo đều có tem chứng nhận nghệ nhân, hướng dẫn bảo quản tơ lụa và hỗ trợ chỉnh sửa miễn phí trọn đời tại hệ thống xưởng.
            </p>
            <div className="pt-2 border-t border-stone-100 space-y-1.5 text-stone-700 font-medium">
              <a href="mailto:vannienlua@gmail.com" className="flex items-center gap-1.5 hover:text-[#8B1E1E] transition-colors">
                <Mail className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                <span>Thư điện tử: vannienlua@gmail.com</span>
              </a>
              <a href="tel:0965497777" className="flex items-center gap-1.5 hover:text-[#8B1E1E] transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                <span>Số điện thoại: 0965497777</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
