import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-[#1C1917] text-stone-300 border-t border-stone-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div onClick={() => onSelectTab('home')} className="cursor-pointer">
              <BrandLogo size="lg" variant="dark" showTagline={true} />
            </div>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed pt-1">
              VÂN NIÊN LỤA — Không gian số hóa, gìn giữ và tôn vinh di sản tơ lụa cùng trang phục cổ truyền Việt Nam qua các triều đại lịch sử. Dệt nên hồn thiêng sông núi từ từng sợi tơ ngàn năm.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-amber-300/90 font-medium pt-2">
              <a href="mailto:vannienlua@gmail.com" className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Thư điện tử: vannienlua@gmail.com</span>
              </a>
              <span className="text-stone-700 hidden sm:inline">·</span>
              <a href="tel:0965497777" className="flex items-center gap-1.5 hover:text-amber-200 transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Số điện thoại: 0965497777</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
              Không Gian Phối Đồ
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onSelectTab('studio')} className="hover:text-white transition-colors">
                  Phòng Phối Đồ
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('collections')} className="hover:text-white transition-colors">
                  Tuyển Tập 3 Miền
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('tailoring')} className="hover:text-white transition-colors">
                  Đặt May Thủ Công
                </button>
              </li>
            </ul>
          </div>

          {/* Heritage & Villages */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
              Di Sản Tơ Lụa
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onSelectTab('stories')} className="hover:text-white transition-colors">
                  Hành Trình Áo Dài
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('stories')} className="hover:text-white transition-colors">
                  Lãnh Mỹ A Tân Châu
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('stories')} className="hover:text-white transition-colors">
                  Lụa Tơ Tằm Vạn Phúc
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('community')} className="hover:text-white transition-colors">
                  Cộng Đồng Việt Phục
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Editorial Base */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex items-center justify-center text-center text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} VÂN NIÊN LỤA. Giữ gìn và tôn vinh hồn cốt y phục & tơ lụa dân tộc.
          </div>
        </div>
      </div>
    </footer>
  );
};
