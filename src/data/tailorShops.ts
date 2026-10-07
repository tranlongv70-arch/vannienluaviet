export interface TailorShop {
  id: string;
  name: string;
  brand: string;
  city: 'Hà Nội' | 'TP. Hồ Chí Minh' | 'Thừa Thiên Huế' | 'Đà Nẵng' | 'An Giang';
  address: string;
  googleMapsUrl: string;
  embedMapUrl: string;
  rating: number;
  reviewsCount: number;
  priceRange: string;
  priceMin: number;
  priceMax: number;
  priceTier: 'budget' | 'mid' | 'luxury';
  specialties: string[];
  highlightReview: {
    user: string;
    comment: string;
    rating: number;
    time: string;
  };
  phone: string;
  openingHours: string;
  image: string;
  lat: number;
  lng: number;
  featured?: boolean;
}

export const TAILOR_SHOPS: TailorShop[] = [
  {
    id: 'shop-y-van-hien',
    name: 'Ỷ Vân Hiên - Trung Tâm Phục Dựng Cổ Phục Việt Nam',
    brand: 'Ỷ Vân Hiên',
    city: 'Hà Nội',
    address: 'Tầng 2, Số 12 Hàng Bông, Phường Hàng Gai, Quận Hoàn Kiếm, Hà Nội',
    googleMapsUrl: 'https://maps.google.com/?q=%E1%BB%B6+V%C3%A2n+Hi%C3%AAn+12+H%C3%A0ng+B%C3%B4ng+Ho%C3%A0n+Ki%E1%BA%BFm+H%C3%A0+N%E1%BB%99i',
    embedMapUrl: 'https://maps.google.com/maps?q=Ỷ%20Vân%20Hiên%2012%20Hàng%20Bông%20Hà%20Nội&t=&z=16&ie=UTF8&iwloc=&output=embed',
    rating: 4.9,
    reviewsCount: 342,
    priceRange: '3.500.000 ₫ - 12.000.000 ₫',
    priceMin: 3500000,
    priceMax: 12000000,
    priceTier: 'luxury',
    specialties: ['Áo Nhật Bình Hoàng Triều', 'Áo Giao Lĩnh Lê Mạc', 'Áo Viên Lĩnh Lý Trần', 'Thêu sa kim thủ công'],
    highlightReview: {
      user: 'Trần Hoàng Bách',
      comment: 'Cổ phục phục dựng rất chuẩn điển lệ triều Nguyễn và Hậu Lê. Đường may sắc nét, lót lụa cao cấp mặc rất thoáng mát, đáng đồng tiền bát gạo.',
      rating: 5,
      time: '1 tháng trước'
    },
    phone: '0988 899 923',
    openingHours: '08:30 - 20:00 (Tất cả các ngày)',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
    lat: 21.0315,
    lng: 105.8475,
    featured: true
  },
  {
    id: 'shop-hoa-nien',
    name: 'Hoa Niên - Triều Y Đại Việt (May Đo & Phục Chế Cổ Phục)',
    brand: 'Hoa Niên',
    city: 'TP. Hồ Chí Minh',
    address: '243/2/1 Chu Văn An, Phường 12, Quận Bình Thạnh, TP. Hồ Chí Minh',
    googleMapsUrl: 'https://maps.google.com/?q=Hoa+Ni%C3%AAn+Tri%E1%BB%81u+Y+%C4%90%E1%BA%A1i+Vi%E1%BB%87t+Chu+V%C4%83n+An+B%C3%ACnh+Th%E1%BA%A1nh+TPHCM',
    embedMapUrl: 'https://maps.google.com/maps?q=243%2F2%2F1%20Chu%20Văn%20An%20Bình%20Thạnh%20Hồ%20Chí%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed',
    rating: 4.9,
    reviewsCount: 286,
    priceRange: '2.800.000 ₫ - 8.500.000 ₫',
    priceMin: 2800000,
    priceMax: 8500000,
    priceTier: 'mid',
    specialties: ['Áo Tấc Lễ Phục', 'Áo Dài Ngũ Thân Nam/Nữ', 'Áo Đối Khâm Gấm', 'Khăn Đóng Thắt Tay'],
    highlightReview: {
      user: 'Nguyễn Thị Minh Thư',
      comment: 'Giá cả rất hợp lý so với tay nghề. Tiệm tư vấn kỹ càng từng loại vải gấm và phom dáng ngũ thân che khuyết điểm cực khéo.',
      rating: 5,
      time: '3 tuần trước'
    },
    phone: '0934 128 775',
    openingHours: '09:00 - 21:00',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
    lat: 10.8122,
    lng: 106.6975,
    featured: true
  },
  {
    id: 'shop-van-an-hue',
    name: 'Tiệm Cổ Phục Cố Đô Vạn An (Xứ Huế)',
    brand: 'Cổ Phục Vạn An',
    city: 'Thừa Thiên Huế',
    address: '18 Kiệt 42 Nguyễn Công Trứ, Phường Phú Hội, TP. Huế, Thừa Thiên Huế',
    googleMapsUrl: 'https://maps.google.com/?q=C%E1%BB%95+Ph%E1%BB%A5c+V%E1%BA%A1n+An+Nguy%E1%BB%85n+C%C3%B4ng+Tr%E1%BB%A9+Hu%E1%BA%BF',
    embedMapUrl: 'https://maps.google.com/maps?q=42%20Nguyễn%20Công%20Trứ%20Huế&t=&z=16&ie=UTF8&iwloc=&output=embed',
    rating: 5.0,
    reviewsCount: 178,
    priceRange: '1.900.000 ₫ - 7.200.000 ₫',
    priceMin: 1900000,
    priceMax: 7200000,
    priceTier: 'budget',
    specialties: ['Áo Nhật Bình Huế Chính Gốc', 'Áo Dài Ngũ Thân Cung Đình', 'Hài Thêu Phượng Cổ', 'Hàn Mão Triều Nguyễn'],
    highlightReview: {
      user: 'Lê Quỳnh Nga',
      comment: 'Đặt may áo ngũ thân lụa tơ tằm ở đây chất lượng tuyệt hảo. Đúng chất xưởng may truyền thống đất Cố đô, giá gốc tại xưởng rất mềm.',
      rating: 5,
      time: '2 tuần trước'
    },
    phone: '0905 667 812',
    openingHours: '08:00 - 19:30',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80',
    lat: 16.4678,
    lng: 107.5956,
    featured: true
  },
  {
    id: 'shop-dai-nam-chan-anh',
    name: 'Đại Nam Chân Ảnh - Xưởng May Cổ Phong Sài Gòn',
    brand: 'Đại Nam Chân Ảnh',
    city: 'TP. Hồ Chí Minh',
    address: '52 Huỳnh Khương Ninh, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh',
    googleMapsUrl: 'https://maps.google.com/?q=%C4%90%E1%BA%A1i+Nam+Ch%C3%A2n+%E1%BA%A2nh+Hu%E1%BB%B3nh+Kh%C6%B0%C6%A1ng+Ninh+Qu%E1%BA%ADn+1+TPHCM',
    embedMapUrl: 'https://maps.google.com/maps?q=52%20Huỳnh%20Khương%20Ninh%20Đa%20Kao%20Quận%201%20Hồ%20Chí%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed',
    rating: 4.8,
    reviewsCount: 412,
    priceRange: '1.800.000 ₫ - 5.800.000 ₫',
    priceMin: 1800000,
    priceMax: 5800000,
    priceTier: 'budget',
    specialties: ['Áo Ngũ Thân Tay Chẽn', 'Áo Tấc Chụp Ảnh Kỷ Yếu', 'Áo Bà Ba Tơ Tằm', 'Phụ Kiện Kiềng Bạc Quạt Nan'],
    highlightReview: {
      user: 'Vũ Đức Mạnh',
      comment: 'May đo nhanh, chuẩn số đo. Giá thành rất phải chăng cho các bạn trẻ và cặp đôi chụp ảnh cưới phong cách truyền thống.',
      rating: 5,
      time: 'Vừa xong'
    },
    phone: '0979 433 219',
    openingHours: '09:00 - 21:00',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
    lat: 10.7915,
    lng: 106.6982
  },
  {
    id: 'shop-van-thien-y',
    name: 'Vạn Thiên Y - May Đo Cổ Trang & Lễ Phục Việt',
    brand: 'Vạn Thiên Y',
    city: 'Hà Nội',
    address: 'Số 8 Ngõ 198 Xã Đàn, Phường Phương Liên, Quận Đống Đa, Hà Nội',
    googleMapsUrl: 'https://maps.google.com/?q=V%E1%BA%A1n+Thi%C3%AAn+Y+Ng%C3%B5+198+X%C3%A3+%C4%90%C3%A0n+%C4%90%E1%BB%91ng+%C4%90a+H%C3%A0+N%E1%BB%99i',
    embedMapUrl: 'https://maps.google.com/maps?q=198%20Xã%20Đàn%20Đống%20Đa%20Hà%20Nội&t=&z=16&ie=UTF8&iwloc=&output=embed',
    rating: 4.8,
    reviewsCount: 215,
    priceRange: '2.200.000 ₫ - 6.800.000 ₫',
    priceMin: 2200000,
    priceMax: 6800000,
    priceTier: 'mid',
    specialties: ['Áo Giao Lĩnh Thụng Thủ', 'Áo Tứ Thân Nâu Gụ', 'Áo Dài Trắng Lụa Hà Đông', 'Khăn Vành Dây Hoàng Cung'],
    highlightReview: {
      user: 'Phạm Thu Trang',
      comment: 'Chất vải đũi và lụa tự nhiên không pha nilon. Mặc đi trẩy hội mùa xuân cực kỳ thoải mái và sang trọng.',
      rating: 5,
      time: '1 tháng trước'
    },
    phone: '0963 881 902',
    openingHours: '09:00 - 20:30',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    lat: 21.0135,
    lng: 105.8341
  },
  {
    id: 'shop-quat-dong-embroidery',
    name: 'Xưởng Thêu Cung Đình Nghệ Nhân Quất Động',
    brand: 'Làng Nghề Quất Động',
    city: 'Hà Nội',
    address: 'Làng nghề Thêu Quất Động, Xã Quất Động, Huyện Thường Tín, Hà Nội',
    googleMapsUrl: 'https://maps.google.com/?q=L%C3%A0ng+ngh%E1%BB%81+Th%C3%AAu+Qu%E1%BA%A5t+%C4%90%E1%BB%99ng+Th%C6%B0%E1%BB%9Dng+T%C3%ADn+H%C3%A0+N%E1%BB%99i',
    embedMapUrl: 'https://maps.google.com/maps?q=Làng%20nghề%20Thêu%20Quất%20Động%20Thường%20Tín%20Hà%20Nội&t=&z=15&ie=UTF8&iwloc=&output=embed',
    rating: 4.9,
    reviewsCount: 195,
    priceRange: '4.500.000 ₫ - 18.000.000 ₫',
    priceMin: 4500000,
    priceMax: 18000000,
    priceTier: 'luxury',
    specialties: ['Thêu Tay Sa Kim Phượng - Rồng', 'Áo Đại Triều Viên Lĩnh', 'Mão Tú Tài Triều Lê', 'Cổ Áo Thêu Ngũ Hành'],
    highlightReview: {
      user: 'Bùi Đức Anh',
      comment: 'Tay nghề thêu tay của các nghệ nhân lão thành tại đây là đỉnh cao mỹ thuật Việt Nam. Họa tiết nổi khối sống động như tranh vẽ.',
      rating: 5,
      time: '2 tháng trước'
    },
    phone: '0912 345 889',
    openingHours: '08:00 - 18:00',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
    lat: 20.8415,
    lng: 105.8821
  },
  {
    id: 'shop-dong-phong-danang',
    name: 'Đông Phong Cổ Phục Đà Nẵng & Miền Trung',
    brand: 'Đông Phong',
    city: 'Đà Nẵng',
    address: '45 Lê Hồng Phong, Phường Phước Ninh, Quận Hải Châu, TP. Đà Nẵng',
    googleMapsUrl: 'https://maps.google.com/?q=45+L%C3%AA+H%E1%BB%93ng+Phong+H%E1%BA%A3i+Ch%C3%A2u+%C4%90%C3%A0+N%E1%BA%B5ng',
    embedMapUrl: 'https://maps.google.com/maps?q=45%20Lê%20Hồng%20Phong%20Hải%20Châu%20Đà%20Nẵng&t=&z=16&ie=UTF8&iwloc=&output=embed',
    rating: 4.9,
    reviewsCount: 142,
    priceRange: '2.000.000 ₫ - 6.500.000 ₫',
    priceMin: 2000000,
    priceMax: 6500000,
    priceTier: 'mid',
    specialties: ['Áo Tấc Dạo Phố Hội An', 'Áo Dài Lụa Tơ Tằm', 'Khăn Đóng Nam Giới', 'Áo Ngũ Thân Đi Lễ'],
    highlightReview: {
      user: 'Hoàng Văn Khánh',
      comment: 'Tiệm may Cổ phục uy tín số 1 Đà Nẵng và miền Trung. Lấy số đo chuẩn, gửi hàng nhanh, có hỗ trợ chỉnh sửa tận tình.',
      rating: 5,
      time: '3 tuần trước'
    },
    phone: '0903 551 228',
    openingHours: '08:30 - 20:30',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    lat: 16.0655,
    lng: 108.2212
  },
  {
    id: 'shop-van-phuc-silk',
    name: 'Xưởng May & Dệt Lụa Nghệ Nhân Vạn Phúc',
    brand: 'Lụa Vạn Phúc',
    city: 'Hà Nội',
    address: 'Phố Lụa Vạn Phúc, Phường Vạn Phúc, Quận Hà Đông, Hà Nội',
    googleMapsUrl: 'https://maps.google.com/?q=L%C3%A0ng+L%E1%BB%A5a+V%E1%BA%A1n+Ph%C3%BAc+H%C3%A0+%C4%90%C3%B4ng+H%C3%A0+N%E1%BB%99i',
    embedMapUrl: 'https://maps.google.com/maps?q=Làng%20Lụa%20Vạn%20Phúc%20Hà%20Đông%20Hà%20Nội&t=&z=16&ie=UTF8&iwloc=&output=embed',
    rating: 4.8,
    reviewsCount: 360,
    priceRange: '1.500.000 ₫ - 5.000.000 ₫',
    priceMin: 1500000,
    priceMax: 5000000,
    priceTier: 'budget',
    specialties: ['Lụa Tơ Tằm Dệt Vân Cúc', 'Áo Dài Ngũ Thân Lụa', 'Áo Tấc Mùa Hè', 'Khăn Lụa Tơ Thô'],
    highlightReview: {
      user: 'Đỗ Thúy Hằng',
      comment: 'Mua lụa tại gốc và may trực tiếp tại xưởng nghệ nhân nên giá rất mềm, vải thơm mùi tơ tự nhiên, mặc lên nhẹ tênh.',
      rating: 5,
      time: '1 tháng trước'
    },
    phone: '0983 220 915',
    openingHours: '08:00 - 21:00',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
    lat: 20.9782,
    lng: 105.7745
  }
];
