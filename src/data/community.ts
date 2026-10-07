import { CommunityPost } from '../types';

export const INITIAL_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    title: 'Phục dựng Áo Nhật Bình sắc Đỏ Son cho dịp Tết Nguyên Đán',
    author: 'Nguyễn Hoàng Thảo My',
    avatar: 'https://picsum.photos/id/64/150/150',
    date: '2 ngày trước',
    likes: 342,
    isLiked: false,
    shares: 89,
    commentsCount: 28,
    description: 'Mình vừa hoàn thành bản phối Áo Nhật Bình phối khăn đóng kim tuyến và chuỗi ngọc phỉ thúy. Cổ áo ngũ hành thêu kim tuyến nổi bật trên nền đỏ son hoàng gia rất tôn nét truyền thống.',
    tags: ['Triều Nguyễn', 'Áo Nhật Bình', 'Hoàng Gia', 'Tết Giáp Thìn'],
    dressingState: {
      name: 'Áo Nhật Bình Đỏ Son Hoàng Gia',
      gender: 'female',
      hairId: 'hair-bui-banh-lai',
      outerwearId: 'outer-nhat-binh-royal',
      mainId: 'main-aodai-ngu-than',
      underlayerId: 'under-yem-hoang-yen',
      bottomId: 'bottom-quan-lua-trang',
      headwearId: 'head-khan-dong-goldsilk',
      accessoryId: 'acc-kieng-bac-lotus',
      footwearId: 'foot-hai-theu-phuong',
      backgroundId: 'bg-hue-citadel',
      colors: {
        outerwear: '#8B1E1E',
        main: '#E0AC3C',
        underlayer: '#E0AC3C',
        bottom: '#F8F7F2',
        headwear: '#E0AC3C'
      },
      pattern: 'phoenix',
      fittingOutfit: {
        top: 'f_top_nhatbinh_nguyen',
        bottom: 'f_bot_quan_lua_nguyen',
        hat: 'f_hat_vanhday_nguyen',
        shoes: 'f_shoe_hai_theu_nguyen'
      }
    },
    comments: [
      {
        id: 'c1',
        user: 'Lê Trần Bảo An',
        avatar: 'https://picsum.photos/id/65/150/150',
        text: 'Màu đỏ son phối cùng quần lụa trắng ngà chuẩn phong cách hoàng hậu triều Nguyễn luôn bạn ơi!',
        time: '1 ngày trước'
      },
      {
        id: 'c2',
        user: 'Trần Vũ Hoàng',
        avatar: 'https://picsum.photos/id/91/150/150',
        text: 'Kiềng bạc hoa sen làm điểm nhấn rất tinh tế, nhìn trang nhã mà không bị nặng nề.',
        time: '18 giờ trước'
      }
    ]
  },
  {
    id: 'post-2',
    title: 'Hồn Quê Kinh Bắc: Tứ Thân Nâu Gụ & Yếm Sen Hồng',
    author: 'Vũ Thị Minh Hằng',
    avatar: 'https://picsum.photos/id/103/150/150',
    date: '3 ngày trước',
    likes: 219,
    isLiked: false,
    shares: 45,
    commentsCount: 16,
    description: 'Một góc nhìn mộc mạc của liền chị Quan họ Bắc Ninh. Áo tứ thân chất liệu đũi nâu phối yếm đào và nón quai thao ba tầm.',
    tags: ['Quan Họ', 'Áo Tứ Thân', 'Bắc Bộ', 'Dân Gian'],
    dressingState: {
      name: 'Nàng Thơ Quan Họ Bắc Ninh',
      gender: 'female',
      hairId: 'hair-toc-van-tran',
      outerwearId: null,
      mainId: 'main-tu-than-kinh-bac',
      underlayerId: 'under-yem-dao-sen',
      bottomId: 'bottom-vay-linh-den',
      headwearId: 'head-non-quai-thao',
      accessoryId: 'acc-quat-nga-thu-phap',
      footwearId: 'foot-guoc-moc-nhung',
      backgroundId: 'bg-lotus-pond',
      colors: {
        outerwear: '#8B1E1E',
        main: '#5C4033',
        underlayer: '#C25975',
        bottom: '#1A1817',
        headwear: '#E0AC3C'
      },
      pattern: 'lotus',
      fittingOutfit: {
        top: 'f_top_tuthan_kinhbac_naudo',
        bottom: 'f_bot_vay_den_tuthan',
        hat: 'f_hat_moqua_doibong_do',
        shoes: 'f_shoe_hai_vai_den_tuthan'
      }
    },
    comments: [
      {
        id: 'c3',
        user: 'Phạm Quỳnh Chi',
        avatar: 'https://picsum.photos/id/177/150/150',
        text: 'Điểm cộng lớn cho chiếc nón quai thao và quạt nan Chàng Sơn, cảm giác như đang nghe câu hát giao duyên vậy!',
        time: '2 ngày trước'
      }
    ]
  },
  {
    id: 'post-3',
    title: 'Phối màu Xanh Ngọc Bích cho Áo Tấc tay thụng mùa Thu',
    author: 'Đặng Quốc Khánh',
    avatar: 'https://picsum.photos/id/338/150/150',
    date: '5 ngày trước',
    likes: 185,
    isLiked: false,
    shares: 32,
    commentsCount: 12,
    description: 'Lấy cảm hứng từ ngọc phỉ thúy và lụa Vạn Phúc, bộ áo tấc màu ngọc bích tạo cảm giác uyên bác và thanh tịnh.',
    tags: ['Áo Tấc', 'Xanh Ngọc', 'Lễ Phục', 'Văn Hiến'],
    dressingState: {
      name: 'Áo Tấc Xanh Ngọc Bích',
      gender: 'female',
      hairId: 'hair-bui-banh-lai',
      outerwearId: 'outer-ao-tac',
      mainId: 'main-aodai-ngu-than',
      underlayerId: null,
      bottomId: 'bottom-quan-lua-trang',
      headwearId: 'head-khan-dong-goldsilk',
      accessoryId: 'acc-chuoi-ngoc-boi',
      footwearId: 'foot-hai-theu-phuong',
      backgroundId: 'bg-thang-long-court',
      colors: {
        outerwear: '#1B6B68',
        main: '#1B6B68',
        underlayer: '#F8F7F2',
        bottom: '#F8F7F2',
        headwear: '#1B6B68'
      },
      pattern: 'lotus',
      fittingOutfit: {
        top: 'f_top_nguthan_xanhreu_dam',
        bottom: 'f_bot_quan_lua_nguyen',
        hat: 'f_hat_vanhday_nguyen',
        shoes: 'f_shoe_hai_theu_nguyen'
      }
    },
    comments: [
      {
        id: 'c4',
        user: 'Mai Lan Hương',
        avatar: 'https://picsum.photos/id/399/150/150',
        text: 'Màu xanh ngọc này lên ảnh sang thật sự, hợp với các bạn thích phong cách nhã nhặn cổ điển.',
        time: '4 ngày trước'
      }
    ]
  }
];
