import { HeritageArticle } from '../types';
import { IMAGES } from '../assets/images';

export const HERITAGE_ARTICLES: HeritageArticle[] = [
  // 1. THỜI KỲ VĂN LANG - ÂU LẠC
  {
    id: 'story-van-lang-au-lac',
    eraNumber: 1,
    title: 'Họa Tiết Trống Đồng & Huyền Thoại Xăm Mình Tránh Giao Long',
    subtitle: 'Nguồn cội trang phục Lạc Việt thời Hùng Vương dựng nước',
    era: 'Thời kỳ Văn Lang - Âu Lạc (Thế kỷ VII TCN – 179 TCN)',
    category: 'Cội Nguồn Phục Trang',
    readTime: '5 phút đọc',
    imageUrl: IMAGES.vanLangNu,
    excerpt: 'Thời kỳ Văn Lang - Âu Lạc chưa có hệ thống tên gọi Hán-Việt phức tạp, mà được định hình qua hình thức cấu tạo thô sơ: nam giới ở trần đóng khố, phụ nữ mặc yếm kết hợp váy quấn để tối ưu hóa sự linh hoạt trong lao động lúa nước.',
    contentParagraphs: [
      'Trong giai đoạn sơ khai của dân tộc, trang phục người Lạc Việt hoàn toàn mang tính tiện dụng thô sơ trong đời sống sản xuất nông nghiệp lúa nước và săn bắt trên sông nước. Nam giới thường ở trần, đóng khố để linh hoạt thể lực mạnh; phụ nữ mặc yếm kết hợp váy quấn kín đáo, nhẹ nhàng.',
      'Sách cổ Lĩnh Nam chích quái ghi lại câu chuyện vua Hùng thương dân đi đánh bắt thường bị thuồng luồng (giao long) quấy phá, bèn dạy nhân dân lấy mực vẽ hình thủy quái lên mình. Từ đó, giao long lầm tưởng là đồng loại nên không dám xâm phạm. Tục xăm mình biến cơ thể và nét vẽ thành một phần của lớp "trang phục tự nhiên" để sinh tồn trước thiên nhiên hoang dã.',
      'Những hình khắc tinh xảo trên trống đồng Ngọc Lễ, Hoàng Đạo chính là "bức tranh tư liệu sống động" lưu giữ hình ảnh tổ tiên: nam nữ đội mũ cắm lông chim trĩ vươn cao, đeo kiềng đồng, nhảy múa quanh cây nêu hoặc chèo thuyền mũi cong.'
    ],
    quote: 'Mực vẽ trên da thịt và chiếc khố thổ cẩm không chỉ là phương thức sinh tồn trước thiên nhiên dữ dội, mà còn là bản tuyên ngôn nguyên sơ nhất về tâm thức hòa hợp cùng đất trời của người Việt cổ.',
    quoteAuthor: 'Tư liệu Lĩnh Nam Chích Quái & Nghiên cứu Khảo cổ học Đông Sơn',
    craftVillages: ['Làng đúc đồng Đông Sơn (Thanh Hóa)', 'Khu di tích Đền Hùng (Phú Thọ)'],
    symbolismKeypoints: [
      { element: 'Tục Xăm Mình Thủy Quái', meaning: 'Hòa đồng với sông nước, xua đuổi giao long, khẳng định bản lĩnh sinh tồn trước tự nhiên hoang dã.' },
      { element: 'Mũ Lông Chim Trĩ / Hạc', meaning: 'Biểu trưng cho khát vọng bay cao, sùng bái vật tổ chim Lạc của cư dân nông nghiệp lúa nước.' },
      { element: 'Khố & Váy Thổ Cẩm', meaning: 'Sự tối giản thực tiễn, giải phóng thể lực để lao động, gặt hái và dựng xây bộ tộc.' }
    ]
  },

  // 2. THỜI KỲ BẮC THUỘC & NGÔ - ĐINH - TIỀN LÊ
  {
    id: 'story-bac-thuoc-ngo-dinh-le',
    eraNumber: 2,
    title: 'Áo Giao Lĩnh Hồng Phấn & Áo Viên Lĩnh: Bản Sắc Thời Đầu Độc Lập',
    subtitle: 'Mỹ học cổ phong đài các và khí phách kiên cường qua ngàn năm sóng gió',
    era: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê (179 TCN – 1009)',
    category: 'Khí Phách Độc Lập',
    readTime: '6 phút đọc',
    imageUrl: IMAGES.bacThuocNu,
    excerpt: 'Trang phục thời kỳ Bắc thuộc & buổi đầu độc lập phản ánh sự giao thoa mỹ học Đông Á thời sơ kỳ kết hợp tay nghề dệt lụa bản địa: Nữ giới đoan trang với Áo Giao Lĩnh hồng phấn tay thụng lót son kết hợp chân váy dập ly đỏ thắm, Nam giới đĩnh đạc trong tà Áo Viên Lĩnh nâu hồng dệt hoa văn chìm cùng mũ phác đầu the đen.',
    contentParagraphs: [
      'Trong suốt hơn một ngàn năm Bắc thuộc và bước vào kỷ nguyên độc lập tự chủ thời Ngô Quyền, Đinh Bộ Lĩnh, Lê Hoàn, trang phục người Việt vừa gìn giữ bản sắc Lĩnh Nam kiên cường vừa phát triển nghệ thuật dệt may đạt đến trình độ tinh xảo.',
      'Phụ nữ khuê các chuộng mặc áo Giao Lĩnh (cổ vắt chéo) màu hồng phấn mềm mại, nẹp cổ viền hồng nhạt, tay thụng rộng với lớp lót trong màu đỏ son rực rỡ, bên trong mặc áo cánh trắng cài khuy lệch và hạ thân là chân váy maxi dập ly đỏ son nhiều nếp tha thướt, điểm xuyết chuỗi ngọc cườm đỏ và hài vải thêu hoa đào.',
      'Nam giới và các bậc quan lại, hào kiệt thời dựng nền độc lập khoác áo Viên Lĩnh (cổ tròn sát cổ nẹp viền trắng) màu nâu hồng gạch dệt hoa văn chìm xẻ tà lót son đỏ, áo lót giao lĩnh trắng, quần lụa trắng ống rộng, đầu đội mũ phác đầu the đen vuông vắn và chân đi hia cao cổ đen viền chỉ trắng uy nghiêm.'
    ],
    quote: 'Sự hòa quyện giữa sắc hồng phấn dịu dàng, lớp lót son đỏ thắm và tà áo viên lĩnh nâu hồng chính là bản hòa tấu mỹ học mở ra kỷ nguyên độc lập tự chủ rực rỡ của non sông Đại Cồ Việt.',
    quoteAuthor: 'Tư liệu Nghiên cứu Phục dựng Cổ Phục Việt Nam',
    craftVillages: ['Vùng đất cổ Mê Linh (Hà Nội)', 'Cố đô Hoa Lư (Ninh Bình)'],
    symbolismKeypoints: [
      { element: 'Áo Giao Lĩnh Hồng Phấn Lót Son', meaning: 'Nét đẹp kín đáo, đoan trang và quý phái của phụ nữ Lĩnh Nam thời sơ kỳ.' },
      { element: 'Áo Viên Lĩnh Nâu Hồng & Mũ Phác Đầu', meaning: 'Phong cốt đĩnh đạc, nho nhã và kỷ cương triều chính của nam giới thời Đinh - Tiền Lê.' },
      { element: 'Sắc Đỏ Son & Quần Lụa Trắng', meaning: 'Biểu trưng của sinh khí may mắn, hỷ sự và sự thanh liêm, chính trực của con người đất Việt.' }
    ]
  },

  // 3. THỜI LÝ - TRẦN - HỒ (3 LOẠI Y PHỤC ĐẶC TRƯNG)
  {
    id: 'story-ly-tran-ho',
    eraNumber: 3,
    title: '3 Loại Y Phục Thời Lý - Trần - Hồ: Áo Viên Lĩnh, Áo Tứ Điên & Áo Giao Lĩnh',
    subtitle: 'Nền mỹ học hoa sen, hoa cúc dây và sự định hình phẩm phục triều đình Đại Việt',
    era: 'Thời Lý - Trần - Hồ (1009 – 1407)',
    category: 'Văn Minh Đại Việt',
    readTime: '6 phút đọc',
    imageUrl: IMAGES.lyTranVienLinhNu,
    excerpt: 'Dưới sự hưng thịnh của Phật giáo và vương triều phong kiến tự chủ, y phục Đại Việt thời Lý - Trần - Hồ phát triển rực rỡ với 3 loại trang phục chủ đạo: Áo Viên Lĩnh cổ tròn, Áo Tứ Điên 4 vạt hoàng gia và Áo Giao Lĩnh cổ chéo truyền thống.',
    contentParagraphs: [
      'Giai đoạn Lý - Trần - Hồ đánh dấu bước trưởng thành vượt bậc của quốc gia Đại Việt độc lập. Triều đình ban hành quy định trang phục quy chuẩn nhưng vẫn giữ trọn nét phóng khoáng, thanh tịnh của mỹ học Phật giáo.',
      '1. Áo Viên Lĩnh (Cổ tròn): Nam giới mặc áo viên lĩnh xanh lam/ngọc thẫm thêu hoa sen, mây cuộn Đại Việt cùng mũ sa đen và đai ngọc; Nữ giới khoác áo viên lĩnh đỏ son nẹp viền vàng thêu hoa cúc dây thời Lý và hoa sen nở rộ.',
      '2. Áo Tứ Điên (4 vạt): Áo cổ tròn chia 4 vạt xẻ trước sau và hai bên hông. Nam giới mặc dáng áo 4 vạt gấm lam hoàng triều uy phong, tôn nghiêm; Nữ giới khoác áo tứ điên gấm hồng sen kết hợp quạt nan lụa trắng cung đình đính tua rua đỏ đài các.',
      '3. Áo Giao Lĩnh (Cổ chéo): Phụ nữ Đại Việt mặc áo giao lĩnh vạt chéo chữ V đỏ son hoàng triều nẹp viền lụa ngà, thắt dải ngọc bội buông dài tha thướt trên nền váy quây dập tầng.'
    ],
    quote: 'Thời Lý - Trần, tơ lụa không chỉ là xiêm áo mà là biểu tượng của một quốc gia tự chủ, nơi Phật giáo và lòng tự hào dân tộc thấm đượm trong từng họa tiết hoa sen, hoa cúc dây và lá đề.',
    quoteAuthor: 'Đại Việt Sử Ký Toàn Thư & Nghiên cứu Khảo cổ học Thăng Long',
    craftVillages: ['Làng dệt lụa Vạn Phúc (Hà Đông)', 'Kinh đô Thăng Long cổ'],
    symbolismKeypoints: [
      { element: 'Áo Viên Lĩnh (Nam Xanh Lam, Nữ Đỏ Son)', meaning: 'Biểu trưng cho sự tròn đầy, viên mãn, cốt cách Nho phong hòa quyện đạo Phật của vương triều Đại Việt.' },
      { element: 'Áo Tứ Điên (Nam Gấm Lam, Nữ Quạt Lụa Trắng)', meaning: '4 vạt xẻ tà linh hoạt, chiếc quạt lụa trắng tôn nét đài các, uyển chuyển của bậc vương hầu, cung phi.' },
      { element: 'Áo Giao Lĩnh (Nữ Cổ Chéo Hoàng Triều)', meaning: 'Vạt chéo chữ V truyền thống thể hiện sự đoan trang, kín đáo và vẻ đẹp chuẩn mực ngàn năm.' }
    ]
  },

  // 4. THỜI HẬU LÊ & TRIỀU MẠC (2 LOẠI Y PHỤC ĐẶC TRƯNG)
  {
    id: 'story-hau-le-mac',
    eraNumber: 4,
    title: '2 Loại Y Phục Thời Hậu Lê - Triều Mạc: Áo Giao Lĩnh Khổ Rộng & Áo Đối Khâm',
    subtitle: 'Điển chế y quan Nho giáo và sự thăng hoa của nghệ thuật dệt may Thăng Long',
    era: 'Thời Hậu Lê & Triều Mạc (1428 – 1789)',
    category: 'Điển Lễ & Cung Đình',
    readTime: '7 phút đọc',
    imageUrl: IMAGES.hauLeThungThuNu,
    excerpt: 'Dưới thời Hậu Lê và Triều Mạc, trang phục đạt đến độ mực thước đỉnh cao với 2 loại y phục chủ đạo: Áo Giao Lĩnh khổ rộng thụng thủ uy nghiêm và Áo Đối Khâm xẻ ngực quý tộc lộng lẫy.',
    contentParagraphs: [
      'Cuộc cải cách "chỉnh đốn y quan" do vua Lê Thánh Tông ban bố trong Quốc triều hình luật đã định hình quy chuẩn phẩm phục trang trọng cho Đại Việt. Thời kỳ này nổi bật với 2 phong cách y phục cung đình và danh sĩ:',
      '1. Loại 1 – Áo Giao Lĩnh Khổ Rộng (Thụng Thủ): Phần thân và ống tay áo may rất rộng (thụng thủ). Trang phục Nữ gồm áo giao lĩnh màu xanh cốm dịu mát thêu chim hạc và hoa lá, chuỗi ngọc sen hồng tua rua rủ trước ngực, chân váy xếp ly xanh cốm, nón quai thao và hài thêu hoa đào; Trang phục Nam gồm áo giao lĩnh khổ rộng màu nâu đất dệt họa tiết đoàn long Lê-Mạc, nẹp cổ vạt chéo và đai thắt lưng màu đỏ son rực rỡ buông dải dài, áo lót trắng, quần lụa trắng và giày vải đen đoan nghiêm.',
      '2. Loại 2 – Áo Đối Khâm (Đối Lĩnh): Áo khoác xẻ dọc chính giữa, hai vạt áo buông thẳng song song. Trang phục Nam gồm áo đối khâm màu vàng be dệt hoa văn lam chìm, bên trong mặc áo lót giao lĩnh xanh lam nhạt, tay cầm quạt nan tre đen phong nhã, mặc cùng quần lụa lam nhạt và hài lụa lam; Trang phục Nữ gồm áo đối khâm hoàng gia màu gấm xanh navy dệt rồng mây kim tuyến vàng rực rỡ, nẹp viền to bản màu lam đậm, áo lót trắng, tay cầm quạt lụa trắng cung đình đính tua rua, mặc cùng chân váy dập ly xanh navy hoàng gia và hài gấm navy viền vàng.'
    ],
    quote: 'Từ chiếc áo giao lĩnh thụng thủ uy nghiêm của bậc hiền tài đến tà áo đối khâm đài các của bậc mệnh phụ, y phục thời Lê - Mạc phản ánh sự phồn vinh của nền văn hiến và mỹ nghệ tơ tằm Đại Việt.',
    quoteAuthor: 'Quốc Triều Hình Luật & Di tồn Phục trang Hoàng gia thời Lê - Mạc',
    craftVillages: ['Làng thêu Quất Động (Thường Tín)', 'Làng lụa Vạn Phúc (Hà Đông)', 'Làng may Trạch Xá (Hà Nội)'],
    symbolismKeypoints: [
      { element: 'Áo Giao Lĩnh Thụng Thủ (Nữ Xanh Cốm, Nam Nâu Son)', meaning: 'Khổ tay rộng bề thế biểu trưng cho sự tôn nghiêm, mực thước và tâm thế độ lượng của đấng nam nhi và nét dịu dàng của tiểu thư.' },
      { element: 'Áo Đối Khâm (Nam Vàng Be Quạt Đen, Nữ Navy Quạt Trắng)', meaning: 'Hai vạt song song buông thẳng thể hiện sự chính trực, quý phái; chiếc quạt cầm tay tôn vẻ tài tử phong lưu và nét vương giả cung đình.' }
    ]
  },

  // 4B. ÁO TỨ THÂN KINH BẮC (DÂN GIAN QUAN HỌ & BẮC BỘ)
  {
    id: 'story-tu-than-kinh-bac',
    eraNumber: 4,
    title: 'Áo Tứ Thân Kinh Bắc: Tuyệt Tác Duyên Thầm & Triết Lý "Tứ Thân Phụ Mẫu"',
    subtitle: 'Nghệ thuật phối màu "trong thắm ngoài trầm" và nét duyên dáng liền chị Quan Họ',
    era: 'Thời Hậu Lê & Triều Mạc (1428 – 1789)',
    category: 'Di Sản Dân Gian Quan Họ',
    readTime: '8 phút đọc',
    imageUrl: IMAGES.tuThan,
    excerpt: 'Áo Tứ Thân là biểu tượng linh hồn của văn hóa đồng bằng Bắc Bộ. Từng chi tiết từ chiếc khăn mỏ quạ đính hai quả bông đỏ, áo cánh đỏ thắm lót trong, tà áo tứ thân nâu gụ lót son đến dải lụa thắt lưng xanh hồng buông rủ đều gói trọn triết lý nhân sinh sâu sắc.',
    contentParagraphs: [
      'Trải qua hàng thế kỷ từ thời Lê - Mạc qua các triều đại phong kiến đến nay, Áo Tứ Thân luôn là trang phục gắn liền với tâm hồn người phụ nữ nông thôn và liền chị Quan Họ Kinh Bắc. Cấu trúc 4 thân áo mang ý nghĩa nhân văn cao cả: 4 vạt áo tượng trưng cho "Tứ thân phụ mẫu" (bố mẹ đẻ và bố mẹ chồng), thể hiện đạo hiếu trọn vẹn của người phụ nữ.',
      'Bộ trang phục nguyên mẫu bao gồm các bộ phận được phối hợp đỉnh cao theo quy luật ngũ hành tương sinh và mỹ học "trong thắm ngoài trầm":',
      '1. Khăn mỏ quạ đen tuyền: Gấp chéo hình tam giác ôm lấy khuôn mặt tạo chóp chữ V thanh thoát như búp sen, hai bên đính hai quả bông đỏ tươi rủ nhẹ bên thái dương, tôn lên ánh mắt lúng liếng và nụ cười duyên dáng.',
      '2. Áo cánh đỏ thắm lót trong: May từ lụa tơ tằm đỏ son tươi thắm, cổ đứng thấp ôm khít chân cổ, làm nền rực rỡ hé lộ nét trẻ trung, son sắt bên trong lớp áo ngoài.',
      '3. Áo tứ thân nâu gụ lót son: 4 thân áo may từ lụa đũi nhuộm màu nâu gụ trầm ấm của đất mẹ, nẹp cổ và cửa tay lót lụa đỏ son thắm. Khi mặc, hai vạt trước buông thả hoặc thắt nhẹ tạo dáng mềm mại, bước đi tha thướt.',
      '4. Dải thắt lưng ruột tượng kép xanh - hồng: Kết hợp 2 dải lụa mềm mại màu xanh non lá mạ (hoặc hoa lý) và màu hồng cánh sen, thắt nơ đôi buông rủ dài trước bụng, tạo điểm nhấn uyển chuyển duyên dáng.',
      '5. Chân váy lụa đen tuyền: Dài chấm gót, xòe tròn dập nếp mềm mại, bước đi kín đáo làm nổi bật màu sắc rực rỡ của tà áo và dải thắt lưng.',
      '6. Hài vải nhung đen mũi tròn: Đế mềm khâu tay, bước đi khoan thai, nhẹ nhàng trên những triền đê hay sân đình ngày hội.'
    ],
    quote: 'Chiếc áo tứ thân nâu gụ lót son cùng chiếc khăn mỏ quạ đính quả bông đỏ không chỉ là trang phục trẩy hội Lim, mà là bức họa sống động về phẩm hạnh đoan trang, cần cù và nghĩa tình son sắt của người phụ nữ Việt Nam.',
    quoteAuthor: 'Kho Tàng Dân Ca Quan Họ Bắc Ninh & Mỹ Thuật Dân Gian Việt Nam',
    craftVillages: ['Làng may áo dài Trạch Xá (Ứng Hòa)', 'Làng lụa Vạn Phúc (Hà Đông)', 'Vùng di sản Dân ca Quan họ Bắc Ninh - Kinh Bắc'],
    symbolismKeypoints: [
      { element: 'Bốn Vạt Áo Tứ Thân', meaning: 'Tượng trưng cho tứ thân phụ mẫu (cha mẹ đẻ và cha mẹ chồng), nhắc nhở người phụ nữ giữ tròn đạo hiếu.' },
      { element: 'Khăn Mỏ Quạ & 2 Quả Bông Đỏ', meaning: 'Tạo hình khuôn mặt búp sen e ấp, biểu trưng cho nét duyên thầm son sắt và sự kín đáo nết na.' },
      { element: 'Phối Màu "Trong Thắm Ngoài Trầm"', meaning: 'Sự giao hòa giữa đức tính khiêm nhường mộc mạc (nâu, đen) và tâm hồn nồng hậu, thủy chung (đỏ thắm, xanh, hồng).' },
      { element: 'Dải Thắt Lưng Kép Xanh - Hồng', meaning: 'Biểu trưng của tình duyên đôi lứa bền chặt và sức sống tươi mới của mùa xuân trẩy hội.' }
    ]
  },

  // 5. TRIỀU TÂY SƠN
  {
    id: 'story-tay-son',
    eraNumber: 5,
    title: 'Cuộc Cách Mạng Quần Hai Ống Của Vua Quang Trung & Tinh Thần Thực Dụng Vì Quốc Gia',
    subtitle: 'Bước đột phá giải phóng phụ nữ và tối ưu hóa chiến phục thần tốc',
    era: 'Triều Tây Sơn (1778 – 1802)',
    category: 'Cách Mạng Phục Trang',
    readTime: '6 phút đọc',
    imageUrl: IMAGES.taySonNu,
    excerpt: 'Trong bối cảnh chiến trận liên miên, Hoàng đế Quang Trung đã thực hiện một cuộc cách mạng trang phục táo bạo: thu hẹp tay áo thành tay chẽn cơ động và ban sắc lệnh cho phụ nữ chuyển từ mặc váy sang mặc quần hai ống.',
    contentParagraphs: [
      'Khác với sự rườm rà của các nghi lễ cung đình phong kiến trì trệ, triều Tây Sơn mang tinh thần quật khởi của người nông dân áo vải cờ đào. Trang phục được thu gọn tối đa: thân áo ôm vừa vặn, ống tay áo thu hẹp (tay chẽn) để tiện vung kiếm cưỡi ngựa và vác vũ khí.',
      'Đặc biệt, trước thềm chiến dịch đại phá 20 vạn quân Thanh mùa xuân Kỷ Dậu 1789, vua Quang Trung nhận thấy phụ nữ mặc váy đụp truyền thống rất vướng víu khi leo núi, vượt sông gánh lương tải đạn. Ngài đã ban hành sắc lệnh yêu cầu phụ nữ chuyển sang mặc quần hai ống.',
      'Quyết sách táo bạo này không chỉ giúp phụ nữ linh hoạt lao động, hỗ trợ hậu cần và tham gia các đội nữ binh của nữ tướng Bùi Thị Xuân, mà còn đập tan những định kiến phong kiến bó buộc, tạo nên bước tiến bình đẳng giới vượt bậc trong lịch sử dân tộc.'
    ],
    quote: 'Chiếc quần hai ống và tà áo chẽn gọn gàng thời Tây Sơn là lời tuyên bố đanh thép: Trang phục sinh ra là để phục vụ cho sự sinh tồn, bảo vệ độc lập và giải phóng sức lao động của con người.',
    quoteAuthor: 'Hào Khí Tây Sơn Thần Tốc (1789)',
    craftVillages: ['Đất võ Bình Định (Tây Sơn)', 'Làng dệt tơ lụa Phú Phong'],
    symbolismKeypoints: [
      { element: 'Chiếu Lệnh Mặc Quần Hai Ống', meaning: 'Đột phá bình đẳng giới, tháo gỡ xiềng xích phong kiến, giúp phụ nữ tham gia cứu quốc.' },
      { element: 'Ống Tay Chẽn Gọn Gàng', meaning: 'Tinh thần thực tế, tối ưu hóa sự cơ động cho các chiến dịch hành quân thần tốc.' },
      { element: 'Khăn Chiến & Đai Lưng Đỏ', meaning: 'Hào khí rực lửa của nghĩa quân áo vải cờ đào bách chiến bách thắng.' }
    ]
  },

  // 6. TRIỀU NGUYỄN
  {
    id: 'story-trieu-nguyen',
    eraNumber: 6,
    title: 'Đỉnh Cao Mỹ Học Ngũ Thân & Triết Lý Nhân Sinh Tứ Thân Phụ Mẫu',
    subtitle: 'Nghệ thuật may đo chuẩn mực thống nhất giang sơn và kiệt tác áo Nhật Bình',
    era: 'Triều Nguyễn (1802 – 1945)',
    category: 'Di Sản Hoàng Gia',
    readTime: '7 phút đọc',
    imageUrl: IMAGES.nguyenNu,
    excerpt: 'Triều Nguyễn là giai đoạn hoàng kim định hình nên chiếc Áo Ngũ Thân và Áo Nhật Bình. Cấu trúc 5 thân độc đáo vừa giải quyết hạn chế của khung dệt cổ truyền, vừa chuyển tải triết lý hiếu nghĩa sâu sắc.',
    contentParagraphs: [
      'Năm 1744, chúa Nguyễn Phúc Khoát khởi xướng quy định mặc áo năm thân và quần hai ống ở Đàng Trong. Đến thế kỷ XIX, vua Minh Mạng chuẩn hóa quy chế trang phục này, áp dụng thống nhất từ Bắc chí Nam, tạo nên diện mạo quốc phục đồng bộ đầu tiên trong lịch sử.',
      'Cấu trúc áo ngũ thân là một tuyệt tác nhân văn: 4 thân ngoài tượng trưng cho "Tứ thân phụ mẫu" (cha mẹ đẻ và cha mẹ chồng), 1 thân con ẩn phía trong vạt phải tượng trưng cho chính bản thân người mặc được gia đình chở che. Cổ đứng ngay thẳng và 5 chiếc khuy cài là lời nhắc nhở giữ trọn Ngũ Thường (Nhân, Lễ, Nghĩa, Trí, Tín).',
      'Song hành cùng Áo Tấc trang trọng là chiếc Áo Nhật Bình quyền quý của bậc mẫu nghi thiên hạ. Điểm nhấn đắt giá là dải viền cổ hình chữ nhật thêu 5 dải màu ngũ hành (Kim - Mộc - Thủy - Hỏa - Thổ) cùng phượng hoàng sa kim, tạo nên đỉnh cao mỹ học cung đình cố đô Huế.'
    ],
    quote: 'Khoác chiếc áo ngũ thân là khoác lên mình đạo hiếu với mẹ cha và nhân nghĩa với muôn người. Đó là bài học làm người được dệt khéo léo vào từng thớ vải tơ tằm.',
    quoteAuthor: 'Khâm Định Đại Nam Hội Điển Sự Lệ',
    craftVillages: ['Làng may áo dài cổ truyền Trạch Xá', 'Làng thêu cung đình Huế'],
    symbolismKeypoints: [
      { element: '5 Thân Vải Ngũ Thân', meaning: '4 thân ngoài là Tứ thân phụ mẫu, 1 thân con ẩn là chính người mặc luôn giữ lòng hiếu đạo.' },
      { element: '5 Chiếc Cúc Cài', meaning: 'Tượng trưng cho Ngũ Thường của đạo làm người: Nhân - Lễ - Nghĩa - Trí - Tín.' },
      { element: 'Dải Cổ Ngũ Hành Nhật Bình', meaning: 'Sự vận hành điều hòa của ngũ hành vũ trụ, biểu trưng uy quyền của bậc mẫu nghi thiên hạ.' }
    ]
  },

  // 7. THẾ KỶ XXI
  {
    id: 'story-the-ky-xxi',
    eraNumber: 7,
    title: 'Áo Dài Cách Tân: Nhịp Cầu Nối Giữ Gìn Hồn Cốt Dân Tộc Trong Nhịp Sống Đương Đại',
    subtitle: 'Sự sáng tạo thời trang đưa di sản truyền thống hòa cùng hơi thở thế giới',
    era: 'Thế kỷ XXI (TK XXI - Hiện Đại & Cách Tân)',
    category: 'Hơi Thở Đương Đại',
    readTime: '5 phút đọc',
    imageUrl: IMAGES.modernNu,
    excerpt: 'Áo dài cách tân thế kỷ XXI là bản hòa ca giữa tinh hoa may đo ngàn năm và nhịp sống đô thị hiện đại: thu ngắn tà áo, phối cùng quần âu hoặc chân váy xòe giúp người mặc tự tin bước ra thế giới.',
    contentParagraphs: [
      'Bước sang thế kỷ XXI, di sản y phục truyền thống Việt Nam không hề bị lãng quên trong viện bảo tàng, mà sống động mãnh liệt qua trào lưu Áo Dài cách tân. Bằng việc thu ngắn chiều dài tà áo và tinh gọn độ rộng ống tay, các thiết kế đương đại mang lại sự năng động tuyệt đối cho công việc và sinh hoạt.',
      'Áo dài cách tân nam với phom đứng cứng cáp phối cùng quần âu lịch lãm trở thành lựa chọn tự hào của giới trẻ trong các ngày lễ tết, sự kiện ngoại giao văn hóa. Áo dài cách tân nữ kết hợp cùng chân váy dập ly xòe mang lại nét duyên dáng, bay bổng mới mẻ nhưng vẫn trọn vẹn nét đoan trang.',
      'Dù có muôn vàn biến tấu về chất liệu ren, voan, đũi hay kỹ thuật dập ly, chiếc áo dài cách tân vẫn giữ vững phần cổ áo, tà xẻ hông và tinh thần tôn vinh vóc dáng người Việt — chứng minh rằng di sản chỉ thực sự trường tồn khi nó thở cùng hơi thở của thời đại.'
    ],
    quote: 'Cách tân không phải là rũ bỏ truyền thống, mà là tiếp thêm sinh khí mới để tà áo dân tộc đồng hành cùng mỗi bước chân của thế hệ trẻ trên con đường hội nhập toàn cầu.',
    quoteAuthor: 'Hội đồng Nhà Thiết Kế Thời Trang Việt Nam',
    craftVillages: ['Phố may đo hiện đại Hà Nội & TP. Hồ Chí Minh', 'Làng lụa tơ tằm Nha Xá'],
    symbolismKeypoints: [
      { element: 'Tà Áo Ngắn Ngang Gối / Bắp Chân', meaning: 'Tính ứng dụng cao, linh hoạt di chuyển trong nhịp sống đô thị năng động.' },
      { element: 'Phối Quần Tây & Chân Váy Xòe', meaning: 'Giao thoa hài hòa giữa thẩm mỹ quốc tế hiện đại và hồn cốt di sản Việt Nam.' },
      { element: 'Hoa Văn Dân Tộc Cách Điệu', meaning: 'Tự hào cội nguồn, lan tỏa vẻ đẹp văn hóa truyền thống đến bạn bè năm châu.' }
    ]
  }
];
