import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DressingState, CostumeItem } from '../../types';
import { COSTUME_ITEMS, BACKGROUND_SCENES } from '../../data/costumes';
import { Sparkles, Info, Eye, RotateCcw } from 'lucide-react';

interface VirtualMannequinProps {
  dressingState: DressingState;
  onLayerSelect?: (category: string) => void;
  onShowDetail?: (item: CostumeItem) => void;
}

export const VirtualMannequin: React.FC<VirtualMannequinProps> = ({
  dressingState,
  onLayerSelect,
  onShowDetail
}) => {
  const [highlightedLayer, setHighlightedLayer] = useState<string | null>(null);
  const [showCulturalPins, setShowCulturalPins] = useState(true);

  // Retrieve current active items
  const background = BACKGROUND_SCENES.find(b => b.id === dressingState.backgroundId) || BACKGROUND_SCENES[0];
  const outerwear = COSTUME_ITEMS.find(c => c.id === dressingState.outerwearId);
  const mainRobe = COSTUME_ITEMS.find(c => c.id === dressingState.mainId);
  const underlayer = COSTUME_ITEMS.find(c => c.id === dressingState.underlayerId);
  const bottom = COSTUME_ITEMS.find(c => c.id === dressingState.bottomId);
  const headwear = COSTUME_ITEMS.find(c => c.id === dressingState.headwearId);
  const hair = COSTUME_ITEMS.find(c => c.id === dressingState.hairId);
  const accessory = COSTUME_ITEMS.find(c => c.id === dressingState.accessoryId);
  const footwear = COSTUME_ITEMS.find(c => c.id === dressingState.footwearId);

  // Colors
  const outerwearColor = dressingState.colors.outerwear || outerwear?.defaultColor || '#8B1E1E';
  const mainColor = dressingState.colors.main || mainRobe?.defaultColor || '#5C4033';
  const underlayerColor = dressingState.colors.underlayer || underlayer?.defaultColor || '#C25975';
  const bottomColor = dressingState.colors.bottom || bottom?.defaultColor || '#1A1817';
  const headwearColor = dressingState.colors.headwear || headwear?.defaultColor || '#E0AC3C';

  return (
    <div className="relative w-full h-[620px] lg:h-[720px] rounded-2xl overflow-hidden shadow-2xl border border-stone-300 flex flex-col justify-between select-none">
      {/* Background Graphic Atmosphere */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${background.bgGradient} transition-all duration-700`}
        style={{
          filter: 'brightness(0.95)'
        }}
      >
        {/* Subtle royal architectural archway overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(#E0AC3C_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Traditional lantern glow or sun glow */}
        <div 
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: background.accentColor }}
        />

        {/* Traditional Imperial Palace silhouette footer */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Top Overlay Badge: Scene and Outfit Name */}
      <div className="relative z-20 p-5 flex items-center justify-between">
        <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-white shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: background.accentColor }} />
            <span className="text-xs uppercase tracking-wider text-amber-200/90 font-medium">
              {background.location} · {background.era}
            </span>
          </div>
          <h2 className="text-base font-serif-royal font-semibold text-white tracking-wide mt-0.5">
            {dressingState.name || 'Bộ Phục Trang Việt Phục'}
          </h2>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCulturalPins(!showCulturalPins)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 shadow-md ${
              showCulturalPins 
                ? 'bg-[#8B1E1E] text-white border border-[#E0AC3C]/40' 
                : 'bg-black/50 text-stone-200 hover:text-white border border-white/10'
            }`}
            title="Bật/Tắt điểm chú thích ý nghĩa văn hóa"
          >
            <Info className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Ý nghĩa văn hóa</span>
          </button>
        </div>
      </div>

      {/* Central Mannequin SVG Render Canvas */}
      <div className="relative z-10 w-full h-full flex items-center justify-center -mt-6">
        <svg
          viewBox="0 0 500 800"
          className="w-auto h-[95%] max-h-[660px] filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transition-all duration-300"
        >
          <defs>
            {/* Silk Sheen Gradients */}
            <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="goldBrocade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFF2A3" />
              <stop offset="100%" stopColor="#AA7C11" />
            </linearGradient>

            <linearGradient id="skinTone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9E2D2" />
              <stop offset="100%" stopColor="#ECC0A8" />
            </linearGradient>

            {/* Traditional Cloud & Wave Pattern for Brocade */}
            <pattern id="cloudPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 20 Q 10 5 20 20 T 40 20" fill="none" stroke="#E0AC3C" strokeWidth="0.8" opacity="0.35" />
              <circle cx="20" cy="15" r="2" fill="#E0AC3C" opacity="0.3" />
            </pattern>

            <pattern id="lotusMotif" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 15 5 C 10 15 5 18 15 25 C 25 18 20 15 15 5 Z" fill="#E0AC3C" opacity="0.2" />
            </pattern>
          </defs>

          {/* BASE SHADOW */}
          <ellipse cx="250" cy="745" rx="140" ry="18" fill="#000000" opacity="0.45" filter="blur(6px)" />

          {/* 1. BODY & SKIN BASE */}
          <g id="body-base">
            {/* Neck */}
            <path d="M 236 175 L 236 215 L 264 215 L 264 175 Z" fill="url(#skinTone)" />
            {/* Face Oval */}
            <ellipse cx="250" cy="145" rx="30" ry="38" fill="url(#skinTone)" stroke="#DBA48B" strokeWidth="0.8" />
            
            {/* Facial Features (Graceful traditional line art) */}
            {/* Eyebrows */}
            <path d="M 230 135 Q 238 131 245 134" stroke="#4A342B" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M 255 134 Q 262 131 270 135" stroke="#4A342B" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            {/* Eyelids / Eyes */}
            <path d="M 232 142 Q 239 140 245 143" stroke="#2B1A12" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M 255 143 Q 261 140 268 142" stroke="#2B1A12" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            {/* Delicate nose bridge */}
            <path d="M 250 141 L 248 151 Q 251 154 252 151" stroke="#D19C83" strokeWidth="1" fill="none" />
            {/* Lips (Traditional crimson cherry lip) */}
            <path d="M 242 161 Q 250 158 258 161 Q 250 167 242 161 Z" fill="#B91C1C" opacity="0.88" />
            {/* Blush */}
            <circle cx="233" cy="149" r="6" fill="#F43F5E" opacity="0.16" filter="blur(2px)" />
            <circle cx="267" cy="149" r="6" fill="#F43F5E" opacity="0.16" filter="blur(2px)" />

            {/* Hands (Graceful folded posture in front) */}
            <ellipse cx="238" cy="415" rx="10" ry="16" fill="url(#skinTone)" transform="rotate(-15 238 415)" />
            <ellipse cx="262" cy="415" rx="10" ry="16" fill="url(#skinTone)" transform="rotate(15 262 415)" />
          </g>

          {/* 2. HAIR LAYER */}
          <g id="hair-layer" className="cursor-pointer" onClick={() => onLayerSelect?.('hair')}>
            {hair?.id === 'hair-bui-banh-lai' && (
              // Búi tóc bánh lái cổ truyền
              <g>
                <ellipse cx="250" cy="108" rx="28" ry="20" fill="#1C1917" />
                <path d="M 220 135 C 220 110 240 102 250 102 C 260 102 280 110 280 135 C 280 120 265 112 250 112 C 235 112 220 120 220 135 Z" fill="#1C1917" />
                {/* Golden Hairpin */}
                <line x1="225" y1="105" x2="275" y2="105" stroke="url(#goldBrocade)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="277" cy="105" r="3.5" fill="#EF4444" />
                <circle cx="223" cy="105" r="3" fill="#10B981" />
              </g>
            )}

            {hair?.id === 'hair-toc-van-tran' && (
              // Tóc vấn trần đuôi gà Kinh Bắc
              <g>
                <ellipse cx="250" cy="116" rx="34" ry="18" fill="#181514" />
                <path d="M 218 135 C 218 108 240 104 250 104 C 260 104 282 108 282 135 Z" fill="#181514" />
                {/* Đuôi gà rủ lệch e ấp */}
                <path d="M 276 125 Q 295 138 290 165 Q 282 170 278 145 Z" fill="#181514" />
              </g>
            )}

            {(hair?.id === 'hair-toc-buong-dai' || !hair) && (
              // Tóc suôn dài buông xõa thời Lý - Lê
              <g>
                <path d="M 218 135 C 218 105 240 105 250 105 C 260 105 282 105 282 135 C 285 180 292 270 290 340 C 283 345 280 250 278 200 C 274 160 270 140 268 135 C 255 120 245 120 232 135 C 230 140 226 160 222 200 C 220 250 217 345 210 340 C 208 270 215 180 218 135 Z" fill="#1A1817" />
              </g>
            )}
          </g>

          {/* 3. BOTTOM GARMENT (Quần lụa / Váy) */}
          <g id="bottom-garment" className="cursor-pointer" onClick={() => onLayerSelect?.('bottom')}>
            {bottom?.id === 'bottom-vay-xep-ly-do-ruby' ? (
              // Chân Váy Lụa Xếp Ly Đỏ Ruby Bồng Bềnh Nhiều Tầng
              <g>
                <path
                  d="M 205 338 Q 250 344 295 338 L 340 705 Q 250 722 160 705 Z"
                  fill={bottomColor || '#A61C2E'}
                />
                <path
                  d="M 205 338 Q 250 344 295 338 L 340 705 Q 250 722 160 705 Z"
                  fill="url(#silkSheen)"
                />
                {/* 12 Accordion Pleats with delicate shadow & highlight */}
                <path d="M 212 340 L 175 704" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                <path d="M 220 340 L 190 706" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                <path d="M 228 341 L 205 708" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                <path d="M 236 342 L 220 710" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                <path d="M 243 342 L 235 711" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                <path d="M 250 342 L 250 712" stroke="#680D1A" strokeWidth="1.4" opacity="0.5" />
                <path d="M 257 342 L 265 711" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                <path d="M 264 342 L 280 710" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                <path d="M 272 341 L 295 708" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                <path d="M 280 340 L 310 706" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                <path d="M 288 340 L 325 704" stroke="#680D1A" strokeWidth="1.2" opacity="0.45" />
                {/* Gấu váy lụa voan viền dập sóng nhẹ */}
                <path d="M 160 705 Q 205 718 250 712 Q 295 718 340 705" stroke="#F4B8B8" strokeWidth="0.8" opacity="0.3" fill="none" />
              </g>
            ) : bottom?.id === 'bottom-vay-linh-den' ? (
              // Váy đầm xòe rộng thời cổ
              <g>
                <path
                  d="M 205 340 Q 250 345 295 340 L 335 700 Q 250 720 165 700 Z"
                  fill={bottomColor}
                />
                <path
                  d="M 205 340 Q 250 345 295 340 L 335 700 Q 250 720 165 700 Z"
                  fill="url(#silkSheen)"
                />
                {/* Váy folds */}
                <path d="M 220 360 Q 200 520 190 690" stroke="#000000" strokeWidth="1.5" opacity="0.3" fill="none" />
                <path d="M 250 360 Q 250 530 250 705" stroke="#000000" strokeWidth="1.5" opacity="0.3" fill="none" />
                <path d="M 280 360 Q 300 520 310 690" stroke="#000000" strokeWidth="1.5" opacity="0.3" fill="none" />
              </g>
            ) : bottom?.id === 'bottom-vay-hmong-xoe' ? (
              // Váy dập ly thổ cẩm Tây Bắc
              <g>
                <path
                  d="M 210 340 Q 250 345 290 340 L 345 660 Q 250 680 155 660 Z"
                  fill={bottomColor}
                />
                {/* Brocade hem band */}
                <path
                  d="M 160 620 Q 250 640 340 620 L 345 660 Q 250 680 155 660 Z"
                  fill="#8B1E1E"
                />
                <path
                  d="M 160 620 Q 250 640 340 620 L 345 660 Q 250 680 155 660 Z"
                  fill="url(#cloudPattern)"
                />
                <path d="M 160 640 Q 250 660 340 640" stroke="#E0AC3C" strokeWidth="1.8" fill="none" />
              </g>
            ) : (
              // Quần lụa ống suông mềm mại mặc định
              <g>
                {/* Left Leg */}
                <path
                  d="M 215 340 L 246 350 L 235 705 L 180 695 Z"
                  fill={bottomColor}
                />
                {/* Right Leg */}
                <path
                  d="M 254 350 L 285 340 L 320 695 L 265 705 Z"
                  fill={bottomColor}
                />
                {/* Silk folds & Sheen */}
                <path d="M 205 400 Q 200 550 195 690" stroke="#000000" strokeWidth="1.2" opacity="0.15" fill="none" />
                <path d="M 295 400 Q 300 550 305 690" stroke="#000000" strokeWidth="1.2" opacity="0.15" fill="none" />
                <path
                  d="M 215 340 L 246 350 L 235 705 L 180 695 Z"
                  fill="url(#silkSheen)"
                />
                <path
                  d="M 254 350 L 285 340 L 320 695 L 265 705 Z"
                  fill="url(#silkSheen)"
                />
              </g>
            )}
          </g>

          {/* 4. FOOTWEAR */}
          <g id="footwear-layer" className="cursor-pointer" onClick={() => onLayerSelect?.('footwear')}>
            {footwear?.id === 'foot-hai-theu-hoa-dao-do' ? (
              // Hài vải trắng ngà thêu hoa đào chỉ đỏ
              <g>
                <path d="M 188 715 Q 212 708 226 714 Q 230 706 226 704 Q 198 706 188 715 Z" fill="#FAF8F5" stroke="#E2DAC9" strokeWidth="0.8" />
                <path d="M 274 714 Q 288 708 312 715 Q 302 706 274 704 Q 270 706 274 714 Z" fill="#FAF8F5" stroke="#E2DAC9" strokeWidth="0.8" />
                {/* Thêu hoa đào đỏ trên mũi hài */}
                <circle cx="223" cy="708" r="2.2" fill="#B91C1C" />
                <circle cx="225" cy="707" r="1.2" fill="#F43F5E" />
                <circle cx="277" cy="708" r="2.2" fill="#B91C1C" />
                <circle cx="275" cy="707" r="1.2" fill="#F43F5E" />
              </g>
            ) : footwear?.id === 'foot-guoc-moc-nhung' ? (
              // Guốc mộc quai nhung
              <g>
                <path d="M 195 710 L 225 710 L 222 725 L 198 725 Z" fill="#8B4513" />
                <path d="M 275 710 L 305 710 L 302 725 L 278 725 Z" fill="#8B4513" />
                {/* Red velvet strap */}
                <path d="M 200 710 Q 210 703 220 710" stroke="#8B1E1E" strokeWidth="3" fill="none" />
                <path d="M 280 710 Q 290 703 300 710" stroke="#8B1E1E" strokeWidth="3" fill="none" />
              </g>
            ) : (
              // Hài thêu phượng hoàng cung đình mũi cong
              <g>
                <path d="M 190 715 Q 215 710 225 715 Q 230 708 226 706 Q 200 708 190 715 Z" fill={footwear?.defaultColor || '#8B1E1E'} />
                <path d="M 275 715 Q 285 708 310 706 Q 306 708 310 715 Q 285 710 275 715 Z" fill={footwear?.defaultColor || '#8B1E1E'} />
                <circle cx="226" cy="707" r="1.8" fill="#E0AC3C" />
                <circle cx="309" cy="707" r="1.8" fill="#E0AC3C" />
              </g>
            )}
          </g>

          {/* 5. UNDERLAYER / YẾM LỤA */}
          {underlayer && (
            <g id="underlayer-yem" className="cursor-pointer" onClick={() => onLayerSelect?.('underlayer')}>
              {/* Thoi Yếm Đào che ngực */}
              <path
                d="M 235 210 Q 250 206 265 210 L 282 295 L 218 295 Z"
                fill={underlayerColor}
                stroke="#E0AC3C"
                strokeWidth="0.8"
              />
              {/* Cổ nhạn viền tơ */}
              <path d="M 235 210 Q 250 206 265 210" stroke="#FFF" strokeWidth="1.5" fill="none" />
              {/* Thêu hoa sen tâm yếm */}
              <circle cx="250" cy="245" r="5" fill="#E0AC3C" opacity="0.6" />
              <path d="M 246 242 Q 250 236 254 242 Q 250 248 246 242 Z" fill="#FFF" opacity="0.7" />
            </g>
          )}

          {/* 6. MAIN ROBE (Áo Tứ Thân / Áo Dài Ngũ Thân / Áo Bà Ba / Thổ Cẩm) */}
          <g id="main-robe" className="cursor-pointer" onClick={() => onLayerSelect?.('main')}>
            {mainRobe?.id === 'main-ao-canh-khuy-tet-trang' ? (
              // Áo Cánh Trắng Cổ Đứng Khuy Tết Tơ
              <g>
                {/* Thân áo cánh trắng */}
                <path
                  d="M 234 212 L 142 328 L 165 342 L 210 278 L 206 470 Q 250 478 294 470 L 290 278 L 335 342 L 358 328 L 266 212 Z"
                  fill={mainColor || '#FAF8F5'}
                  stroke="#E8E2D8"
                  strokeWidth="0.6"
                />
                <path
                  d="M 234 212 L 142 328 L 165 342 L 210 278 L 206 470 Q 250 478 294 470 L 290 278 L 335 342 L 358 328 L 266 212 Z"
                  fill="url(#silkSheen)"
                />
                {/* Cổ đứng thấp trắng ngà 2 phân */}
                <path d="M 236 204 L 236 216 Q 250 218 264 216 L 264 204 Q 250 206 236 204 Z" fill="#FAF8F5" stroke="#E2DAC9" strokeWidth="0.8" />
                {/* Hàng khuy tết tơ chéo vạt sang ngực phải */}
                <path d="M 250 216 Q 258 226 266 245" stroke="#D1B88B" strokeWidth="1" fill="none" />
                <circle cx="250" cy="216" r="2" fill="#D1B88B" />
                <circle cx="254" cy="223" r="2" fill="#D1B88B" />
                <circle cx="259" cy="232" r="2" fill="#D1B88B" />
                <circle cx="265" cy="244" r="2" fill="#D1B88B" />
              </g>
            ) : mainRobe?.id === 'main-tu-than-kinh-bac' ? (
              // Áo Tứ Thân xẻ tà, thắt vạt trước bụng
              <g>
                {/* Back panel & sleeves */}
                <path
                  d="M 232 215 L 140 330 L 165 345 L 210 275 L 210 580 L 290 580 L 290 275 L 335 345 L 360 330 L 268 215 Z"
                  fill={mainColor}
                />
                <path
                  d="M 232 215 L 140 330 L 165 345 L 210 275 L 210 580 L 290 580 L 290 275 L 335 345 L 360 330 L 268 215 Z"
                  fill="url(#silkSheen)"
                />

                {/* Hai vạt trước mở khoe yếm và thắt nút eo */}
                <path d="M 218 275 L 235 345 L 210 590 L 195 580 Z" fill={mainColor} stroke="#3D2B1F" strokeWidth="0.5" />
                <path d="M 282 275 L 265 345 L 290 590 L 305 580 Z" fill={mainColor} stroke="#3D2B1F" strokeWidth="0.5" />

                {/* Dải thắt lưng xanh hoa lý buộc buông rủ */}
                <path d="M 225 345 Q 250 352 275 345 L 273 355 Q 250 362 227 355 Z" fill="#10B981" />
                <path d="M 245 352 L 240 460 L 248 465 L 253 352 Z" fill="#10B981" />
                <path d="M 252 352 L 258 450 L 265 455 L 259 352 Z" fill="#EC4899" />
              </g>
            ) : mainRobe?.id === 'main-ao-ba-ba' ? (
              // Áo Bà Ba Nam Bộ xẻ giữa, 2 túi
              <g>
                <path
                  d="M 234 216 L 145 325 L 168 340 L 212 280 L 208 455 Q 250 465 292 455 L 288 280 L 332 340 L 355 325 L 266 216 Z"
                  fill={mainColor}
                />
                <path
                  d="M 234 216 L 145 325 L 168 340 L 212 280 L 208 455 Q 250 465 292 455 L 288 280 L 332 340 L 355 325 L 266 216 Z"
                  fill="url(#silkSheen)"
                />
                {/* Đường xẻ giữa và hàng nút */}
                <line x1="250" y1="230" x2="250" y2="458" stroke="#1A1817" strokeWidth="1" opacity="0.4" />
                <circle cx="250" cy="250" r="1.8" fill="#1A1817" />
                <circle cx="250" cy="285" r="1.8" fill="#1A1817" />
                <circle cx="250" cy="320" r="1.8" fill="#1A1817" />
                <circle cx="250" cy="355" r="1.8" fill="#1A1817" />
                {/* 2 Túi áo vuông */}
                <rect x="220" y="390" width="22" height="22" rx="2" fill="none" stroke="#1A1817" strokeWidth="0.8" opacity="0.3" />
                <rect x="258" y="390" width="22" height="22" rx="2" fill="none" stroke="#1A1817" strokeWidth="0.8" opacity="0.3" />
              </g>
            ) : mainRobe?.id === 'main-hmong-brocade' ? (
              // Áo Thổ Cẩm H'Mông
              <g>
                <path
                  d="M 232 215 L 145 325 L 170 340 L 212 275 L 210 435 Q 250 442 290 435 L 288 275 L 330 340 L 355 325 L 268 215 Z"
                  fill={mainColor}
                />
                {/* Brocade collar band */}
                <path d="M 235 215 L 250 280 L 265 215 Z" fill="#8B1E1E" />
                <path d="M 235 215 L 250 280 L 265 215 Z" fill="url(#cloudPattern)" />
                {/* Sleeve brocade cuffs */}
                <path d="M 145 325 L 157 312 L 178 327 L 168 340 Z" fill="#8B1E1E" />
                <path d="M 355 325 L 343 312 L 322 327 L 332 340 Z" fill="#8B1E1E" />
              </g>
            ) : (
              // Áo Dài Ngũ Thân Tay Chẽn (Mặc định)
              <g>
                {/* Main Body & Tà Áo dài qua gối */}
                <path
                  d="M 236 215 L 140 335 L 164 350 L 212 278 L 205 635 Q 250 645 295 635 L 288 278 L 336 350 L 360 335 L 264 215 Z"
                  fill={mainColor}
                />
                {/* Silk Texture / Pattern Overlay */}
                <path
                  d="M 236 215 L 140 335 L 164 350 L 212 278 L 205 635 Q 250 645 295 635 L 288 278 L 336 350 L 360 335 L 264 215 Z"
                  fill={dressingState.pattern === 'cloud' ? 'url(#cloudPattern)' : dressingState.pattern === 'lotus' ? 'url(#lotusMotif)' : 'none'}
                />
                <path
                  d="M 236 215 L 140 335 L 164 350 L 212 278 L 205 635 Q 250 645 295 635 L 288 278 L 336 350 L 360 335 L 264 215 Z"
                  fill="url(#silkSheen)"
                />

                {/* Cổ Đứng Ngũ Thân cao 3 phân đoan trang */}
                <path d="M 236 200 L 236 218 Q 250 220 264 218 L 264 200 Q 250 202 236 200 Z" fill={mainColor} stroke="#E0AC3C" strokeWidth="0.8" />
                
                {/* 5 Cúc Áo (Ngũ Thường) cài từ cổ sang nách phải */}
                <path d="M 250 218 Q 262 235 272 265" stroke="#E0AC3C" strokeWidth="1" fill="none" opacity="0.7" />
                <circle cx="250" cy="218" r="2" fill="#E0AC3C" stroke="#8B1E1E" strokeWidth="0.5" />
                <circle cx="255" cy="228" r="2" fill="#E0AC3C" stroke="#8B1E1E" strokeWidth="0.5" />
                <circle cx="261" cy="238" r="2" fill="#E0AC3C" stroke="#8B1E1E" strokeWidth="0.5" />
                <circle cx="268" cy="252" r="2" fill="#E0AC3C" stroke="#8B1E1E" strokeWidth="0.5" />
                <circle cx="274" cy="268" r="2" fill="#E0AC3C" stroke="#8B1E1E" strokeWidth="0.5" />

                {/* Xẻ tà eo hai bên */}
                <path d="M 215 350 L 205 635" stroke="#000" strokeWidth="0.7" opacity="0.3" fill="none" />
                <path d="M 285 350 L 295 635" stroke="#000" strokeWidth="0.7" opacity="0.3" fill="none" />
              </g>
            )}
          </g>

          {/* 7. OUTERWEAR (Áo Nhật Bình / Áo Tấc / Áo Giao Lĩnh) */}
          {outerwear && (
            <g id="outerwear-layer" className="cursor-pointer" onClick={() => onLayerSelect?.('outerwear')}>
              {outerwear.id === 'outer-giao-linh-hong-phan' ? (
                // ÁO GIAO LĨNH LỤA HỒNG PHẤN LÓT ĐỎ SON (Tay thụng xòe rộng, tà xẻ buộc nơ)
                <g>
                  {/* Lớp lót trong màu đỏ son rực rỡ ở cửa tay áo thụng */}
                  <path d="M 112 338 L 92 375 L 128 395 L 145 358 Z" fill="#A61C2E" />
                  <path d="M 388 338 L 408 375 L 372 395 L 355 358 Z" fill="#A61C2E" />

                  {/* Lớp lót trong đỏ son ở hai tà xẻ bên hông */}
                  <path d="M 188 410 L 175 615 L 202 615 L 205 410 Z" fill="#A61C2E" opacity="0.95" />
                  <path d="M 312 410 L 325 615 L 298 615 L 295 410 Z" fill="#A61C2E" opacity="0.95" />

                  {/* Thân áo chính giao lĩnh màu hồng phấn đào thướt tha */}
                  <path
                    d="M 230 208 L 95 365 L 125 390 L 195 295 L 182 615 Q 250 630 318 615 L 305 295 L 375 390 L 405 365 L 270 208 Z"
                    fill={outerwearColor || '#EDA8AF'}
                  />
                  <path
                    d="M 230 208 L 95 365 L 125 390 L 195 295 L 182 615 Q 250 630 318 615 L 305 295 L 375 390 L 405 365 L 270 208 Z"
                    fill="url(#silkSheen)"
                  />

                  {/* Cổ lót trắng tinh khôi bên trong */}
                  <path d="M 234 204 L 246 226" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
                  <path d="M 266 204 L 254 226" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />

                  {/* Bản cổ giao lĩnh chéo vạt mềm mại màu hồng nhạt (hữu nhậm) */}
                  <path d="M 228 208 L 278 305" stroke="#F5CCD0" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <path d="M 228 208 L 278 305" stroke="#DDA0A7" strokeWidth="1.2" fill="none" />
                  <path d="M 272 208 L 242 268" stroke="#F5CCD0" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <path d="M 272 208 L 242 268" stroke="#DDA0A7" strokeWidth="1.2" fill="none" />

                  {/* Nơ buộc lụa hai bên tà xẻ hông */}
                  <g transform="translate(186, 420)">
                    <circle cx="0" cy="0" r="3" fill="#DDA0A7" />
                    <path d="M 0 0 Q -10 -8 -12 2 Q -4 4 0 0" fill="#EDA8AF" stroke="#DDA0A7" strokeWidth="0.6" />
                    <path d="M 0 0 Q -8 10 -4 18" stroke="#EDA8AF" strokeWidth="1.8" fill="none" />
                    <path d="M 0 0 Q -2 12 4 22" stroke="#A61C2E" strokeWidth="1.5" fill="none" />
                  </g>
                  <g transform="translate(314, 420)">
                    <circle cx="0" cy="0" r="3" fill="#DDA0A7" />
                    <path d="M 0 0 Q 10 -8 12 2 Q 4 4 0 0" fill="#EDA8AF" stroke="#DDA0A7" strokeWidth="0.6" />
                    <path d="M 0 0 Q 8 10 4 18" stroke="#EDA8AF" strokeWidth="1.8" fill="none" />
                    <path d="M 0 0 Q 2 12 -4 22" stroke="#A61C2E" strokeWidth="1.5" fill="none" />
                  </g>

                  {/* Nếp gấp tà áo mềm rủ */}
                  <path d="M 205 320 Q 200 480 195 615" stroke="#A61C2E" strokeWidth="1" opacity="0.3" fill="none" />
                  <path d="M 295 320 Q 300 480 305 615" stroke="#A61C2E" strokeWidth="1" opacity="0.3" fill="none" />
                </g>
              ) : outerwear.id === 'outer-nhat-binh-royal' ? (
                // ÁO NHẬT BÌNH TRIỀU NGUYỄN
                <g>
                  {/* Dáng áo thụng xòe lộng lẫy */}
                  <path
                    d="M 230 210 L 115 320 L 138 345 L 195 285 L 180 570 Q 250 580 320 570 L 305 285 L 362 345 L 385 320 L 270 210 Z"
                    fill={outerwearColor}
                  />
                  <path
                    d="M 230 210 L 115 320 L 138 345 L 195 285 L 180 570 Q 250 580 320 570 L 305 285 L 362 345 L 385 320 L 270 210 Z"
                    fill="url(#cloudPattern)"
                  />
                  <path
                    d="M 230 210 L 115 320 L 138 345 L 195 285 L 180 570 Q 250 580 320 570 L 305 285 L 362 345 L 385 320 L 270 210 Z"
                    fill="url(#silkSheen)"
                  />

                  {/* CỔ ÁO CHỮ NHẬT NGŨ SẮC ĐẶC TRƯNG CỦA ÁO NHẬT BÌNH */}
                  {/* Bản cổ hình chữ nhật trước ngực */}
                  <rect x="226" y="210" width="48" height="135" fill="#E0AC3C" stroke="#AA7C11" strokeWidth="1.2" />
                  {/* Ngũ dải màu ngũ hành trên cổ áo (Trắng, Xanh lam, Đỏ, Vàng, Đen) */}
                  <line x1="230" y1="210" x2="230" y2="345" stroke="#FFFFFF" strokeWidth="2.5" />
                  <line x1="234" y1="210" x2="234" y2="345" stroke="#1E3A5F" strokeWidth="2.5" />
                  <line x1="238" y1="210" x2="238" y2="345" stroke="#B91C1C" strokeWidth="2.5" />
                  <line x1="262" y1="210" x2="262" y2="345" stroke="#B91C1C" strokeWidth="2.5" />
                  <line x1="266" y1="210" x2="266" y2="345" stroke="#1E3A5F" strokeWidth="2.5" />
                  <line x1="270" y1="210" x2="270" y2="345" stroke="#FFFFFF" strokeWidth="2.5" />
                  
                  {/* Khoảng giữa cổ áo xẻ đối khâm lộ yếm lụa hoặc cúc cài */}
                  <line x1="250" y1="210" x2="250" y2="345" stroke="#5C4033" strokeWidth="1" />
                  <circle cx="250" cy="245" r="2.5" fill="#E0AC3C" />
                  <circle cx="250" cy="285" r="2.5" fill="#E0AC3C" />
                  <circle cx="250" cy="325" r="2.5" fill="#E0AC3C" />

                  {/* Dải tay áo ngũ sắc hoàng gia buông rộng */}
                  <g>
                    <path d="M 115 320 L 128 308 L 148 333 L 138 345 Z" fill="#B91C1C" />
                    <path d="M 122 314 L 132 304 L 152 329 L 142 339 Z" fill="#E0AC3C" />
                    <path d="M 128 308 L 138 298 L 158 323 L 148 333 Z" fill="#1E3A5F" />

                    <path d="M 385 320 L 372 308 L 352 333 L 362 345 Z" fill="#B91C1C" />
                    <path d="M 378 314 L 368 304 L 348 329 L 358 339 Z" fill="#E0AC3C" />
                    <path d="M 372 308 L 362 298 L 342 323 L 352 333 Z" fill="#1E3A5F" />
                  </g>

                  {/* Hoa văn chim Phượng và Mây Thủy Ba thêu sa kim dưới gấu áo */}
                  <path d="M 180 545 Q 250 555 320 545 L 320 570 Q 250 580 180 570 Z" fill="#E0AC3C" opacity="0.8" />
                  <path d="M 180 545 Q 250 555 320 545 L 320 570 Q 250 580 180 570 Z" fill="url(#cloudPattern)" />
                </g>
              ) : outerwear.id === 'outer-ao-tac' ? (
                // Áo Tấc tay thụng thời Nguyễn
                <g>
                  <path
                    d="M 232 210 L 95 340 L 125 375 L 195 295 L 180 620 Q 250 630 320 620 L 305 295 L 375 375 L 405 340 L 268 210 Z"
                    fill={outerwearColor}
                  />
                  <path
                    d="M 232 210 L 95 340 L 125 375 L 195 295 L 180 620 Q 250 630 320 620 L 305 295 L 375 375 L 405 340 L 268 210 Z"
                    fill="url(#silkSheen)"
                  />
                  {/* Cổ áo đứng 5 cúc thụng */}
                  <path d="M 234 202 L 234 218 Q 250 220 266 218 L 266 202 Z" fill={outerwearColor} stroke="#E0AC3C" strokeWidth="0.8" />
                  <circle cx="250" cy="220" r="2.2" fill="#E0AC3C" />
                </g>
              ) : (
                // Áo Giao Lĩnh cổ chéo thời Lê
                <g>
                  <path
                    d="M 230 210 L 120 330 L 150 355 L 200 290 L 185 610 Q 250 620 315 610 L 300 290 L 350 355 L 380 330 L 270 210 Z"
                    fill={outerwearColor}
                  />
                  {/* Cổ Giao chéo sang phải */}
                  <path d="M 230 210 L 270 290" stroke="#E0AC3C" strokeWidth="3" fill="none" />
                  <path d="M 270 210 L 235 270" stroke="#E0AC3C" strokeWidth="3" fill="none" />
                </g>
              )}
            </g>
          )}

          {/* 8. ACCESSORIES (Kiềng Bạc / Quạt / Chuỗi Ngọc / Khăn Rằn) */}
          <g id="accessory-layer" className="cursor-pointer" onClick={() => onLayerSelect?.('accessory')}>
            {accessory?.id === 'acc-chuoi-trang-hat-ngoc-do' && (
              // Chuỗi Tràng Hạt Hồng Ngọc Đỏ Son (Đeo dài buông lơi trước ngực)
              <g>
                {/* Dây chuỗi ngọc chữ U buông qua nền áo */}
                <path
                  d="M 235 210 C 235 270 240 330 250 330 C 260 330 265 270 265 210"
                  stroke="#7A1220"
                  strokeWidth="1.2"
                  fill="none"
                />
                {/* 22 viên hạt ngọc tròn đỏ son lóng lánh */}
                {[
                  { cx: 236, cy: 215 }, { cx: 236, cy: 228 }, { cx: 237, cy: 242 },
                  { cx: 238, cy: 256 }, { cx: 239, cy: 270 }, { cx: 241, cy: 284 },
                  { cx: 243, cy: 298 }, { cx: 246, cy: 312 }, { cx: 248, cy: 322 },
                  { cx: 250, cy: 328 }, { cx: 252, cy: 322 }, { cx: 254, cy: 312 },
                  { cx: 257, cy: 298 }, { cx: 259, cy: 284 }, { cx: 261, cy: 270 },
                  { cx: 262, cy: 256 }, { cx: 263, cy: 242 }, { cx: 264, cy: 228 },
                  { cx: 264, cy: 215 }
                ].map((pt, i) => (
                  <g key={i}>
                    <circle cx={pt.cx} cy={pt.cy} r="3" fill="#A61C2E" stroke="#520914" strokeWidth="0.5" />
                    {/* Điểm bắt sáng ngọc */}
                    <circle cx={pt.cx - 0.8} cy={pt.cy - 0.8} r="0.8" fill="#F48A96" />
                  </g>
                ))}
              </g>
            )}

            {accessory?.id === 'acc-o-giay-dau-nan-tre' && (
              // Ô Giấy Dầu Đỏ Chu Sa Nan Tre Cổ Phong
              <g transform="translate(370, 240) rotate(-15)">
                {/* Cán ô tre trúc dài */}
                <line x1="0" y1="0" x2="35" y2="280" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
                <circle cx="35" cy="280" r="3.5" fill="#D97706" />

                {/* Vòm ô giấy dầu đỏ xòe nghiêng */}
                <ellipse cx="0" cy="0" rx="90" ry="38" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1.5" />
                <ellipse cx="0" cy="0" rx="90" ry="38" fill="url(#silkSheen)" />

                {/* Nan tre tỏa đều */}
                {[-75, -55, -35, -15, 0, 15, 35, 55, 75].map((x, idx) => (
                  <line key={idx} x1="0" y1="0" x2={x} y2={Math.sqrt(Math.max(0, 1 - (x/90)*(x/90))) * 38} stroke="#450A0A" strokeWidth="1" opacity="0.65" />
                ))}
                {/* Chóp ô bọc đồng */}
                <circle cx="0" cy="0" r="6" fill="#D97706" stroke="#78350F" strokeWidth="1" />
              </g>
            )}

            {accessory?.id === 'acc-kieng-bac-lotus' && (
              // Kiềng Bạc Chạm Hoa Sen
              <g>
                <path
                  d="M 230 218 Q 250 236 270 218 Q 250 230 230 218 Z"
                  fill="#E2E8F0"
                  stroke="#94A3B8"
                  strokeWidth="0.8"
                  filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))"
                />
                <circle cx="250" cy="225" r="2.2" fill="#EF4444" />
              </g>
            )}

            {accessory?.id === 'acc-chuoi-ngoc-boi' && (
              // Chuỗi Ngọc Bội Cung Cấm buông bên hông
              <g>
                <circle cx="275" cy="355" r="4.5" fill="#10B981" stroke="#047857" strokeWidth="0.8" />
                <path d="M 275 360 L 275 420" stroke="#E0AC3C" strokeWidth="1.5" />
                <polygon points="275,420 270,440 280,440" fill="#E0AC3C" />
              </g>
            )}

            {accessory?.id === 'acc-khan-ran-nam-bo' && (
              // Khăn rằn vắt qua vai
              <g>
                <path
                  d="M 232 215 Q 220 260 215 360 L 227 362 Q 232 270 242 220 Z"
                  fill="#F8F7F2"
                  stroke="#1A1817"
                  strokeWidth="0.5"
                />
                <line x1="216" y1="280" x2="228" y2="280" stroke="#1A1817" strokeWidth="1.5" />
                <line x1="216" y1="300" x2="228" y2="300" stroke="#1A1817" strokeWidth="1.5" />
                <line x1="215" y1="320" x2="227" y2="320" stroke="#1A1817" strokeWidth="1.5" />
                <line x1="215" y1="340" x2="227" y2="340" stroke="#1A1817" strokeWidth="1.5" />
              </g>
            )}

            {accessory?.id === 'acc-quat-nga-thu-phap' && (
              // Quạt nan ngà cầm tay
              <g transform="translate(250, 410) rotate(-20)">
                <path d="M 0 0 L -30 -40 Q 0 -55 30 -40 Z" fill="#F8F7F2" stroke="#8B4513" strokeWidth="0.8" />
                <line x1="0" y1="0" x2="-20" y2="-43" stroke="#D4AF37" strokeWidth="0.6" />
                <line x1="0" y1="0" x2="0" y2="-48" stroke="#D4AF37" strokeWidth="0.6" />
                <line x1="0" y1="0" x2="20" y2="-43" stroke="#D4AF37" strokeWidth="0.6" />
                <circle cx="0" cy="0" r="2.5" fill="#EF4444" />
                {/* Hán Nôm character mark on fan */}
                <circle cx="0" cy="-35" r="5" fill="#8B1E1E" opacity="0.3" />
              </g>
            )}
          </g>

          {/* 9. HEADWEAR (Khăn Đóng / Nón Quai Thao / Nón Lá / Khăn Piêu) */}
          {headwear && (
            <g id="headwear-layer" className="cursor-pointer" onClick={() => onLayerSelect?.('headwear')}>
              {headwear.id === 'head-khan-dong-goldsilk' ? (
                // Khăn Đóng Hoàng Gia hình chữ Nhân/Nhất
                <g>
                  {/* Vành khăn quấn nhiều lớp xếp nếp */}
                  <ellipse cx="250" cy="116" rx="35" ry="16" fill={headwearColor} stroke="#AA7C11" strokeWidth="1" />
                  <path d="M 218 116 Q 250 128 282 116 L 280 102 Q 250 114 220 102 Z" fill={headwearColor} />
                  {/* Nếp chữ Nhân (人) trước trán */}
                  <path d="M 242 112 L 250 118 L 258 112" stroke="#AA7C11" strokeWidth="1.5" fill="none" />
                  <ellipse cx="250" cy="116" rx="35" ry="16" fill="url(#silkSheen)" />
                </g>
              ) : headwear.id === 'head-non-quai-thao' ? (
                // Nón Quai Thao Bắc Bộ tròn rộng vành
                <g>
                  {/* Quai Thao tơ tằm buông rủ hai bên vai */}
                  <path d="M 170 125 Q 195 240 235 285" stroke="#E0AC3C" strokeWidth="3" fill="none" opacity="0.85" />
                  <path d="M 330 125 Q 305 240 265 285" stroke="#E0AC3C" strokeWidth="3" fill="none" opacity="0.85" />
                  {/* Túm tơ ngũ sắc rủ */}
                  <circle cx="235" cy="285" r="3.5" fill="#EC4899" />
                  <circle cx="265" cy="285" r="3.5" fill="#EC4899" />

                  {/* Vành Nón Ba Tầm dẹt lớn đội nghiêng */}
                  <ellipse cx="250" cy="98" rx="88" ry="24" fill="#E8D5B5" stroke="#B89B6A" strokeWidth="1.2" />
                  <ellipse cx="250" cy="98" rx="82" ry="21" fill="none" stroke="#D1B88B" strokeWidth="1" />
                  <ellipse cx="250" cy="98" rx="40" ry="12" fill="#D6BA88" />
                </g>
              ) : headwear.id === 'head-non-la-hue' ? (
                // Nón Lá Huế bài thơ
                <g>
                  <path
                    d="M 250 50 L 175 125 Q 250 135 325 125 Z"
                    fill="#FDFBF7"
                    stroke="#D6CEBE"
                    strokeWidth="1"
                    filter="drop-shadow(0 4px 6px rgba(0,0,0,0.25))"
                  />
                  {/* Vành tre soi xuyên thấu */}
                  <path d="M 195 105 Q 250 112 305 105" stroke="#E2DAC9" strokeWidth="0.8" fill="none" />
                  <path d="M 215 85 Q 250 90 285 85" stroke="#E2DAC9" strokeWidth="0.8" fill="none" />
                  {/* Quai nón nhung lụa buộc cằm */}
                  <path d="M 200 120 Q 250 160 250 165 Q 250 160 300 120" stroke="#8B1E1E" strokeWidth="1.5" fill="none" />
                </g>
              ) : (
                // Khăn Piêu Thái
                <g>
                  <polygon points="218,110 282,110 270,90 230,90" fill="#1E3A5F" stroke="#E0AC3C" strokeWidth="1" />
                  <circle cx="218" cy="110" r="3" fill="#8B1E1E" />
                  <circle cx="282" cy="110" r="3" fill="#8B1E1E" />
                </g>
              )}
            </g>
          )}

          {/* 10. INTERACTIVE CULTURAL HOTSPOTS */}
          {showCulturalPins && (
            <g id="cultural-hotspots" className="transition-opacity duration-300">
              {/* Hotspot 1: Headwear */}
              {headwear && (
                <g 
                  className="cursor-pointer group" 
                  onClick={() => onShowDetail?.(headwear)}
                  transform="translate(290, 85)"
                >
                  <circle cx="0" cy="0" r="9" fill="#8B1E1E" className="animate-ping opacity-60" />
                  <circle cx="0" cy="0" r="7" fill="#8B1E1E" stroke="#E0AC3C" strokeWidth="1.5" />
                  <text x="0" y="3" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">1</text>
                </g>
              )}

              {/* Hotspot 2: Collar / Outerwear (Nhật Bình or Cổ Đứng Ngũ Thân) */}
              <g 
                className="cursor-pointer group" 
                onClick={() => onShowDetail?.(outerwear || mainRobe || COSTUME_ITEMS[0])}
                transform="translate(285, 235)"
              >
                <circle cx="0" cy="0" r="9" fill="#E0AC3C" className="animate-ping opacity-60" />
                <circle cx="0" cy="0" r="7" fill="#E0AC3C" stroke="#8B1E1E" strokeWidth="1.5" />
                <text x="0" y="3" fill="#1A1817" fontSize="8" fontWeight="bold" textAnchor="middle">2</text>
              </g>

              {/* Hotspot 3: Accessory / Thắt lưng / Ngọc Bội */}
              <g 
                className="cursor-pointer group" 
                onClick={() => onShowDetail?.(accessory || underlayer || mainRobe || COSTUME_ITEMS[1])}
                transform="translate(295, 365)"
              >
                <circle cx="0" cy="0" r="9" fill="#1B6B68" className="animate-ping opacity-60" />
                <circle cx="0" cy="0" r="7" fill="#1B6B68" stroke="#F8F7F2" strokeWidth="1.5" />
                <text x="0" y="3" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">3</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Bar: Layer summary pills & quick actions */}
      <div className="relative z-20 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-xs text-stone-300">
        <div className="flex items-center gap-3 overflow-x-auto py-1 no-scrollbar">
          <button 
            onClick={() => onLayerSelect?.('outerwear')} 
            className="hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            Áo khoác: <span className="text-white font-medium">{outerwear ? outerwear.name : 'Không'}</span>
          </button>
          <span className="text-stone-500">·</span>
          <button 
            onClick={() => onLayerSelect?.('main')} 
            className="hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            Áo chính: <span className="text-white font-medium">{mainRobe?.name}</span>
          </button>
          <span className="text-stone-500">·</span>
          <button 
            onClick={() => onLayerSelect?.('headwear')} 
            className="hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            Mũ/Khăn: <span className="text-white font-medium">{headwear ? headwear.name : 'Không'}</span>
          </button>
        </div>

        <div className="text-[11px] text-amber-200/80 font-mono shrink-0 pl-2">
          3D Silhouette v2.0
        </div>
      </div>
    </div>
  );
};
