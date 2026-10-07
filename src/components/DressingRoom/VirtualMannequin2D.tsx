import React from 'react';

export interface TryonLayersState {
  modelGender: 'female';
  outfitId: 'ao-dai-do' | 'ao-tac-xanh' | 'giao-linh-hong' | 'nhat-binh' | 'tu-than' | 'ao-ba-ba' | 'none';
  earringId: 'earring-ruby' | 'earring-gold' | 'earring-jade' | 'earring-pearl' | 'none';
  necklaceId: 'necklace-kieng-bac' | 'necklace-ngoc-bich' | 'necklace-trang-hat-do' | 'necklace-kieng-vang' | 'none';
  accessoryId: 'acc-quat-lua' | 'acc-tui-gam' | 'acc-bom-hoa' | 'acc-o-giay-dau' | 'none';
  hairId: 'hair-buong-dai' | 'hair-van-tran' | 'hair-bui-banh-lai' | 'hair-kep-hoa' | 'none';
}

interface VirtualMannequin2DProps {
  layers: TryonLayersState;
  sparkleKey: number;
}

export const VirtualMannequin2D: React.FC<VirtualMannequin2DProps> = ({
  layers,
  sparkleKey
}) => {
  return (
    <div 
      className="model-viewport-2d relative w-full h-full flex items-center justify-center select-none overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Sparkle particle burst overlay */}
      {sparkleKey > 0 && (
        <div key={sparkleKey} className="pointer-events-none absolute inset-0 z-50">
          {[...Array(14)].map((_, i) => {
            const top = 15 + Math.random() * 70;
            const left = 20 + Math.random() * 60;
            const size = 16 + Math.random() * 20;
            const delay = Math.random() * 0.25;
            return (
              <span
                key={i}
                className="absolute animate-sparkle-twinkle text-amber-300 drop-shadow-[0_0_8px_rgba(255,223,0,0.9)]"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  fontSize: `${size}px`,
                  animationDelay: `${delay}s`,
                }}
              >
                ✨
              </span>
            );
          })}
        </div>
      )}

      {/* SVG Canvas Coordinate Space 800x1200 for 100% Pixel-Accurate 2D Layering */}
      <svg
        viewBox="0 0 800 1200"
        className="w-full h-full max-h-[720px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
        style={{ position: 'relative' }}
      >
        <defs>
          {/* Shading Gradients */}
          <radialGradient id="skinShade" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFF2E8" />
            <stop offset="70%" stopColor="#F5DEC8" />
            <stop offset="100%" stopColor="#E6C4A6" />
          </radialGradient>

          <linearGradient id="skinLegs" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5DEC8" />
            <stop offset="100%" stopColor="#E2BDA2" />
          </linearGradient>

          {/* Áo Dài Đỏ Gradients */}
          <linearGradient id="aoDaiDoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D92525" />
            <stop offset="45%" stopColor="#B31818" />
            <stop offset="85%" stopColor="#8A0F0F" />
            <stop offset="100%" stopColor="#690A0A" />
          </linearGradient>

          {/* Áo Tấc Xanh Cẩm Gradients */}
          <linearGradient id="aoTacXanhGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#258D89" />
            <stop offset="45%" stopColor="#1B6B68" />
            <stop offset="85%" stopColor="#145250" />
            <stop offset="100%" stopColor="#0D3B3A" />
          </linearGradient>

          {/* Giao Lĩnh Hồng Phấn Gradients */}
          <linearGradient id="giaoLinhHongGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7C4C9" />
            <stop offset="50%" stopColor="#EDA8AF" />
            <stop offset="100%" stopColor="#D98B94" />
          </linearGradient>

          {/* Gold Filigree & Accents */}
          <linearGradient id="goldSaKim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="40%" stopColor="#FFD54F" />
            <stop offset="70%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#FFE082" />
          </linearGradient>

          {/* Silk Pants / Bottom Gradient */}
          <linearGradient id="quanLuaTrang" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F8F7F2" />
            <stop offset="100%" stopColor="#E8E6DD" />
          </linearGradient>

          {/* Hair Gradients */}
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A2820" />
            <stop offset="50%" stopColor="#231713" />
            <stop offset="100%" stopColor="#130D0A" />
          </linearGradient>
        </defs>

        {/* ========================================================
            LAYER 01 (z-index 10): MODEL BASE (Người mẫu gốc)
            Model body, head, face, eyes, lips, torso, arms, legs
           ======================================================== */}
        <g id="layer-model-base" className="layer-base transition-all duration-300">
          {/* Shadow beneath feet */}
          <ellipse cx="400" cy="1165" rx="140" ry="18" fill="rgba(0,0,0,0.35)" filter="blur(6px)" />

          {/* Legs */}
          <path
            d="M345 680 L350 940 L355 1130 L345 1150 L370 1150 L385 1130 L380 940 L390 680 Z"
            fill="url(#skinLegs)"
          />
          <path
            d="M410 680 L420 940 L415 1130 L430 1150 L455 1150 L445 1130 L450 940 L455 680 Z"
            fill="url(#skinLegs)"
          />
          {/* Subtle knee contour */}
          <path d="M358 870 Q368 875 378 870" stroke="#DDB89A" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M422 870 Q432 875 442 870" stroke="#DDB89A" strokeWidth="2" fill="none" opacity="0.6" />

          {/* Base Form-fitting Silk Underlayer Pants (Default when no gown is worn) */}
          <g id="base-pants">
            <path
              d="M328 540 Q315 720 330 950 L335 1135 Q355 1145 375 1135 L372 950 Q385 790 400 680 Q415 790 428 950 L425 1135 Q445 1145 465 1135 L470 950 Q485 720 472 540 Q400 560 328 540 Z"
              fill="url(#quanLuaTrang)"
              stroke="#D8D4C8"
              strokeWidth="1.2"
            />
            {/* Silk trouser pleats and folds */}
            <path d="M352 640 Q354 890 355 1130" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M448 640 Q446 890 445 1130" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.8" />
          </g>

          {/* Torso & Natural Waist */}
          <path
            d="M325 350 Q310 440 332 520 Q365 545 400 545 Q435 545 468 520 Q490 440 475 350 Q430 365 400 365 Q370 365 325 350 Z"
            fill="url(#skinShade)"
          />

          {/* Base Camisole / Yếm Lụa Nội Y (Form-fitting) */}
          <path
            d="M335 365 Q318 435 336 515 Q368 535 400 535 Q432 535 464 515 Q482 435 465 365 Q432 380 400 380 Q368 380 335 365 Z"
            fill="#FFF9F5"
            stroke="#F0E3D8"
            strokeWidth="1.5"
          />

          {/* Delicate Shoulders, Neck & Decollete */}
          <path
            d="M365 240 L350 290 Q305 320 280 345 L320 375 Q345 335 375 305 L372 245 Z"
            fill="url(#skinShade)"
          />
          <path
            d="M435 240 L450 290 Q495 320 520 345 L480 375 Q455 335 425 305 L428 245 Z"
            fill="url(#skinShade)"
          />
          {/* Slender Neck & Clavicle */}
          <path
            d="M370 200 L365 295 Q400 312 435 295 L430 200 Z"
            fill="url(#skinShade)"
          />
          {/* Clavicle / Xương quai xanh thanh tú */}
          <path d="M360 295 Q385 306 397 298" stroke="#DDB89A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M440 295 Q415 306 403 298" stroke="#DDB89A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />

          {/* Left Arm & Slender Hand */}
          <path
            d="M280 345 Q260 440 262 550 Q265 650 270 730 L292 730 Q290 650 290 550 Q295 440 320 375 Z"
            fill="url(#skinShade)"
          />
          {/* Left Hand fingers posed gracefully */}
          <path
            d="M270 730 Q265 770 270 805 Q278 815 285 805 Q290 770 292 730 Z"
            fill="url(#skinShade)"
          />

          {/* Right Arm & Slender Hand */}
          <path
            d="M520 345 Q540 440 538 550 Q535 650 530 730 L508 730 Q510 650 510 550 Q505 440 480 375 Z"
            fill="url(#skinShade)"
          />
          {/* Right Hand fingers posed gracefully */}
          <path
            d="M530 730 Q535 770 530 805 Q522 815 515 805 Q510 770 508 730 Z"
            fill="url(#skinShade)"
          />

          {/* Head & Elegant Oval Face */}
          <path
            d="M352 145 Q348 215 385 240 Q400 248 415 240 Q452 215 448 145 Q445 75 400 75 Q355 75 352 145 Z"
            fill="url(#skinShade)"
          />

          {/* Facial Features (Eyes, Eyebrows, Nose, Lips with Festive Glow) */}
          <g id="model-face-features">
            {/* Elegant curved eyebrows */}
            <path d="M366 142 Q378 136 390 142" stroke="#4A3528" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M434 142 Q422 136 410 142" stroke="#4A3528" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Almond Eyes with eyeliner */}
            <path d="M368 152 Q378 147 388 153 Q378 159 368 152 Z" fill="#FFFFFF" stroke="#332218" strokeWidth="1.2" />
            <ellipse cx="378" cy="152" rx="4.5" ry="4.5" fill="#4B2E1E" />
            <ellipse cx="379" cy="151" rx="1.5" ry="1.5" fill="#FFFFFF" />

            <path d="M432 152 Q422 147 412 153 Q422 159 432 152 Z" fill="#FFFFFF" stroke="#332218" strokeWidth="1.2" />
            <ellipse cx="422" cy="152" rx="4.5" ry="4.5" fill="#4B2E1E" />
            <ellipse cx="423" cy="151" rx="1.5" ry="1.5" fill="#FFFFFF" />

            {/* Soft blush on cheeks */}
            <ellipse cx="363" cy="175" rx="14" ry="7" fill="#F48FB1" opacity="0.35" filter="blur(3px)" />
            <ellipse cx="437" cy="175" rx="14" ry="7" fill="#F48FB1" opacity="0.35" filter="blur(3px)" />

            {/* Slender Nose */}
            <path d="M400 148 L402 178 Q398 183 394 180" stroke="#D4A786" strokeWidth="1.8" strokeLinecap="round" fill="none" />

            {/* Rose Ruby Lips */}
            <path d="M388 198 Q400 193 412 198 Q400 208 388 198 Z" fill="#D8434F" />
            <path d="M390 198 Q400 195 410 198 Q400 202 390 198 Z" fill="#B71C1C" />
            <ellipse cx="400" cy="196" rx="2" ry="0.8" fill="#FFFFFF" opacity="0.7" />
          </g>

          {/* Delicate Ears */}
          <path d="M352 148 Q342 165 352 182 Z" fill="#F5DEC8" />
          <path d="M448 148 Q458 165 448 182 Z" fill="#F5DEC8" />
        </g>

        {/* ========================================================
            LAYER 02 (z-index 20): HAIR BASE (Kiểu tóc nền / Mái tóc)
           ======================================================== */}
        {layers.hairId !== 'none' && (
          <g id="layer-hair" className="transition-all duration-300">
            {layers.hairId === 'hair-buong-dai' && (
              /* Tóc buông dài mượt mà qua vai */
              <g id="hair-flowing-long">
                <path
                  d="M346 140 Q330 200 310 320 Q295 440 315 540 L345 530 Q335 400 345 310 L355 190 Z"
                  fill="url(#hairGrad)"
                />
                <path
                  d="M454 140 Q470 200 490 320 Q505 440 485 540 L455 530 Q465 400 455 310 L445 190 Z"
                  fill="url(#hairGrad)"
                />
                <path
                  d="M345 130 Q340 60 400 60 Q460 60 455 130 Q440 100 400 95 Q360 100 345 130 Z"
                  fill="url(#hairGrad)"
                />
                {/* Hair sheen lines */}
                <path d="M360 90 Q400 85 440 90" stroke="#795548" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M322 360 Q325 450 328 510" stroke="#5D4037" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M478 360 Q475 450 472 510" stroke="#5D4037" strokeWidth="1.5" fill="none" opacity="0.6" />
              </g>
            )}

            {layers.hairId === 'hair-van-tran' && (
              /* Tóc vấn trần quý phái */
              <g id="hair-bun-braid">
                <path
                  d="M344 135 Q340 50 400 50 Q460 50 456 135 Q442 85 400 85 Q358 85 344 135 Z"
                  fill="url(#hairGrad)"
                />
                <ellipse cx="400" cy="55" rx="55" ry="30" fill="url(#hairGrad)" />
                <path d="M355 60 Q400 45 445 60" stroke="#8D6E63" strokeWidth="3" fill="none" />
                {/* Golden Hairpin / Trâm vàng */}
                <path d="M335 45 L465 65" stroke="url(#goldSaKim)" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="465" cy="65" r="6" fill="#C62828" stroke="url(#goldSaKim)" strokeWidth="1.5" />
              </g>
            )}

            {layers.hairId === 'hair-bui-banh-lai' && (
              /* Tóc búi bánh lái hoàng gia */
              <g id="hair-royal-crown-bun">
                <ellipse cx="400" cy="40" rx="75" ry="35" fill="url(#hairGrad)" />
                <path
                  d="M342 135 Q338 60 400 60 Q462 60 458 135 Q440 90 400 90 Q360 90 342 135 Z"
                  fill="url(#hairGrad)"
                />
                <path d="M340 40 Q400 20 460 40" stroke="url(#goldSaKim)" strokeWidth="3" fill="none" />
                <circle cx="400" cy="28" r="8" fill="#B71C1C" stroke="url(#goldSaKim)" strokeWidth="2" />
              </g>
            )}

            {layers.hairId === 'hair-kep-hoa' && (
              /* Tóc kẹp hoa cài xuân */
              <g id="hair-blossom-pin">
                <path
                  d="M346 140 Q330 200 315 320 Q305 420 325 500 L350 495 Q338 390 345 305 L355 185 Z"
                  fill="url(#hairGrad)"
                />
                <path
                  d="M454 140 Q470 200 485 320 Q495 420 475 500 L450 495 Q462 390 455 305 L445 185 Z"
                  fill="url(#hairGrad)"
                />
                <path
                  d="M345 130 Q340 60 400 60 Q460 60 455 130 Q440 100 400 95 Q360 100 345 130 Z"
                  fill="url(#hairGrad)"
                />
                {/* Cherry blossom side pins */}
                <circle cx="452" cy="115" r="10" fill="#FF80AB" stroke="#C2185B" strokeWidth="1.5" />
                <circle cx="452" cy="115" r="3.5" fill="#FFE082" />
                <circle cx="462" cy="128" r="7" fill="#FF4081" />
              </g>
            )}
          </g>
        )}

        {/* ========================================================
            LAYER 03 (z-index 30): MAIN OUTFITS / ROBES (Y Phục Chính)
            Exact 2D Layering: Áo Dài Đỏ, Áo Tấc Xanh, Giao Lĩnh Hồng, v.v.
           ======================================================== */}
        <g id="layer-clothing-container" className="layer-clothing transition-all duration-300">
          {/* OPTION A: ÁO DÀI ĐỎ (ao-dai-do) */}
          {layers.outfitId === 'ao-dai-do' && (
            <g id="layer-ao-dai-do" className="animate-in fade-in zoom-in-95 duration-300">
              {/* Tà áo dài thướt tha buông qua gối (Mặt trước & Mặt sau) */}
              <path
                d="M322 510 L300 850 L290 1060 Q400 1090 510 1060 L500 850 L478 510 Q400 535 322 510 Z"
                fill="url(#aoDaiDoGrad)"
                stroke="#7A0C0C"
                strokeWidth="1.8"
              />

              {/* Form-fitting Bodice & High 3cm Mandarin Collar */}
              <path
                d="M366 235 L360 290 Q305 325 272 440 L305 450 Q325 365 352 325 L340 515 Q400 535 460 515 L448 325 Q475 365 495 450 L528 440 Q495 325 440 290 L434 235 Q400 242 366 235 Z"
                fill="url(#aoDaiDoGrad)"
                stroke="#7A0C0C"
                strokeWidth="1.8"
              />

              {/* Collar Cổ Đứng Truyền Thống */}
              <path
                d="M365 235 Q400 243 435 235 L433 212 Q400 218 367 212 Z"
                fill="url(#aoDaiDoGrad)"
                stroke="url(#goldSaKim)"
                strokeWidth="2"
              />

              {/* Tà Xẻ Hông Đặc Trưng Áo Dài Việt Nam */}
              <path d="M338 505 L292 1058" stroke="#E63946" strokeWidth="2" strokeDasharray="6 3" opacity="0.6" fill="none" />
              <path d="M462 505 L508 1058" stroke="#E63946" strokeWidth="2" strokeDasharray="6 3" opacity="0.6" fill="none" />

              {/* Khuy Ngọc & Đường Cắt Vạt Chéo Ngực */}
              <path d="M400 238 Q430 250 445 285 L458 350" stroke="url(#goldSaKim)" strokeWidth="2.5" fill="none" />
              <circle cx="400" cy="238" r="4.5" fill="url(#goldSaKim)" />
              <circle cx="420" cy="254" r="4.5" fill="url(#goldSaKim)" />
              <circle cx="438" cy="275" r="4.5" fill="url(#goldSaKim)" />
              <circle cx="450" cy="305" r="4.5" fill="url(#goldSaKim)" />

              {/* Họa tiết hoa cúc / phượng sa kim trên thân áo */}
              <g opacity="0.85">
                <path d="M370 380 Q400 350 430 380 Q400 410 370 380 Z" fill="url(#goldSaKim)" />
                <path d="M385 365 Q400 395 415 365" stroke="#FFE082" strokeWidth="2" fill="none" />
                <circle cx="400" cy="380" r="5" fill="#FFE082" />
                {/* Hoa văn sa kim chân tà */}
                <path d="M330 980 Q400 950 470 980 Q400 1010 330 980 Z" fill="url(#goldSaKim)" opacity="0.75" />
              </g>

              {/* Tay Áo Ôm Sát Duyên Dáng */}
              <path
                d="M272 440 L260 680 L285 680 L305 450 Z"
                fill="url(#aoDaiDoGrad)"
                stroke="#7A0C0C"
                strokeWidth="1.5"
              />
              <path
                d="M528 440 L540 680 L515 680 L495 450 Z"
                fill="url(#aoDaiDoGrad)"
                stroke="#7A0C0C"
                strokeWidth="1.5"
              />
            </g>
          )}

          {/* OPTION B: ÁO TẤC XANH CẨM (ao-tac-xanh) */}
          {layers.outfitId === 'ao-tac-xanh' && (
            <g id="layer-ao-tac-xanh" className="animate-in fade-in zoom-in-95 duration-300">
              {/* Thân áo tấc thụng rộng trang trọng */}
              <path
                d="M310 500 L280 850 L270 1080 Q400 1105 530 1080 L520 850 L490 500 Q400 520 310 500 Z"
                fill="url(#aoTacXanhGrad)"
                stroke="#0E4240"
                strokeWidth="2"
              />

              {/* Ngực áo & Cổ Đứng Ngũ Thân */}
              <path
                d="M362 235 L350 290 Q290 315 240 400 L280 420 Q325 345 352 315 L335 505 Q400 525 465 505 L448 315 Q475 345 520 420 L560 400 Q510 315 450 290 L438 235 Q400 242 362 235 Z"
                fill="url(#aoTacXanhGrad)"
                stroke="#0E4240"
                strokeWidth="2"
              />

              {/* Cổ Đứng Áo Tấc thêu chỉ hoàng kim */}
              <path
                d="M362 235 Q400 242 438 235 L435 210 Q400 216 365 210 Z"
                fill="url(#aoTacXanhGrad)"
                stroke="url(#goldSaKim)"
                strokeWidth="2.5"
              />

              {/* Tay Áo Thụng Dài Bằng Tà Đặc Trưng Của Áo Tấc */}
              <path
                d="M240 400 L210 750 Q235 770 260 750 L285 418 Z"
                fill="url(#aoTacXanhGrad)"
                stroke="#0E4240"
                strokeWidth="2"
              />
              <path
                d="M560 400 L590 750 Q565 770 540 750 L515 418 Z"
                fill="url(#aoTacXanhGrad)"
                stroke="#0E4240"
                strokeWidth="2"
              />
              {/* Viền tay thụng sa kim */}
              <path d="M210 750 Q235 770 260 750" stroke="url(#goldSaKim)" strokeWidth="3" fill="none" />
              <path d="M590 750 Q565 770 540 750" stroke="url(#goldSaKim)" strokeWidth="3" fill="none" />

              {/* 5 Cúc Áo Tấc (Ngũ Thường) */}
              <circle cx="400" cy="238" r="5" fill="url(#goldSaKim)" />
              <circle cx="420" cy="260" r="5" fill="url(#goldSaKim)" />
              <circle cx="438" cy="290" r="5" fill="url(#goldSaKim)" />
              <circle cx="448" cy="330" r="5" fill="url(#goldSaKim)" />
              <circle cx="452" cy="380" r="5" fill="url(#goldSaKim)" />

              {/* Họa tiết gấm hoa cúc sa kim thời Nguyễn */}
              <g opacity="0.8">
                <circle cx="400" cy="460" r="28" stroke="url(#goldSaKim)" strokeWidth="2" fill="none" />
                <circle cx="400" cy="460" r="16" stroke="url(#goldSaKim)" strokeWidth="1.5" fill="none" />
                <circle cx="400" cy="460" r="6" fill="url(#goldSaKim)" />
                <circle cx="340" cy="920" r="20" stroke="url(#goldSaKim)" strokeWidth="1.5" fill="none" />
                <circle cx="460" cy="920" r="20" stroke="url(#goldSaKim)" strokeWidth="1.5" fill="none" />
              </g>
            </g>
          )}

          {/* OPTION C: GIAO LĨNH HỒNG PHẤN (giao-linh-hong) */}
          {layers.outfitId === 'giao-linh-hong' && (
            <g id="layer-giao-linh-hong" className="animate-in fade-in zoom-in-95 duration-300">
              {/* Chân váy xếp ly đỏ ruby bên dưới */}
              <path
                d="M320 530 L295 900 L285 1100 Q400 1125 515 1100 L505 900 L480 530 Z"
                fill="#9B1B26"
                stroke="#690C14"
                strokeWidth="1.8"
              />
              {/* Nếp xếp ly váy */}
              {[...Array(9)].map((_, i) => (
                <path
                  key={i}
                  d={`M${320 + i * 20} 540 L${295 + i * 27} 1105`}
                  stroke="#BD2735"
                  strokeWidth="2"
                  opacity="0.8"
                  fill="none"
                />
              ))}

              {/* Lớp lót đỏ son lộ ra ở tà và cửa tay */}
              <path
                d="M312 510 L280 840 L350 840 L370 515 Z"
                fill="#B71C1C"
              />
              <path
                d="M488 510 L520 840 L450 840 L430 515 Z"
                fill="#B71C1C"
              />

              {/* Áo Giao Lĩnh Hồng Phấn Vạt Chéo Buộc Nơ */}
              <path
                d="M362 235 L345 290 Q285 320 235 410 L275 430 Q325 350 350 320 L335 520 Q400 540 465 520 L450 320 Q475 350 525 430 L565 410 Q515 320 455 290 L438 235 Q400 242 362 235 Z"
                fill="url(#giaoLinhHongGrad)"
                stroke="#C4737D"
                strokeWidth="1.8"
              />
              {/* Tà áo buông lửng quá gối xẻ hông */}
              <path
                d="M335 515 L320 780 Q400 795 480 780 L465 515 Z"
                fill="url(#giaoLinhHongGrad)"
                stroke="#C4737D"
                strokeWidth="1.8"
              />

              {/* Cổ áo giao chéo về bên phải với viền lụa nhạt */}
              <path
                d="M362 235 L435 345 L415 365 L345 255 Z"
                fill="#FFF0F2"
                stroke="#EDA8AF"
                strokeWidth="1.5"
              />
              <path
                d="M438 235 L365 345 L385 365 L455 255 Z"
                fill="#FFF0F2"
                stroke="#EDA8AF"
                strokeWidth="1.5"
              />

              {/* Dải nơ buộc lụa đỏ son bên hông */}
              <path d="M428 350 Q450 380 435 430" stroke="#B71C1C" strokeWidth="4" fill="none" />
              <path d="M432 350 Q465 375 450 440" stroke="#B71C1C" strokeWidth="3.5" fill="none" />
              <circle cx="430" cy="350" r="6" fill="#B71C1C" />
            </g>
          )}

          {/* OPTION D: NHẬT BÌNH HOÀNG GIA (nhat-binh) */}
          {layers.outfitId === 'nhat-binh' && (
            <g id="layer-nhat-binh" className="animate-in fade-in zoom-in-95 duration-300">
              {/* Thân áo Nhật Bình sắc đỏ son đại triều */}
              <path
                d="M315 500 L285 850 L275 1070 Q400 1095 525 1070 L515 850 L485 500 Q400 520 315 500 Z"
                fill="#8B1E1E"
                stroke="#5E1212"
                strokeWidth="2"
              />
              {/* Tay Áo Ngũ Sắc Triều Nguyễn */}
              <path
                d="M245 400 L215 740 Q240 760 265 740 L290 418 Z"
                fill="#8B1E1E"
                stroke="#5E1212"
                strokeWidth="2"
              />
              <path
                d="M555 400 L585 740 Q560 760 535 740 L510 418 Z"
                fill="#8B1E1E"
                stroke="#5E1212"
                strokeWidth="2"
              />
              {/* Dải ngũ sắc cửa tay (Vàng, Xanh, Trắng, Đỏ, Đen) */}
              <path d="M218 710 Q240 725 262 710" stroke="#FFD54F" strokeWidth="5" fill="none" />
              <path d="M217 720 Q240 735 263 720" stroke="#1E88E5" strokeWidth="5" fill="none" />
              <path d="M216 730 Q240 745 264 730" stroke="#43A047" strokeWidth="5" fill="none" />
              <path d="M582 710 Q560 725 538 710" stroke="#FFD54F" strokeWidth="5" fill="none" />
              <path d="M583 720 Q560 735 537 720" stroke="#1E88E5" strokeWidth="5" fill="none" />
              <path d="M584 730 Q560 745 536 730" stroke="#43A047" strokeWidth="5" fill="none" />

              {/* Cổ Áo Nhật Bình Chữ Nhật Đối Xứng Với Hoa Văn Sa Kim Ngũ Sắc */}
              <path
                d="M362 235 L360 480 L440 480 L438 235 Z"
                fill="#E0AC3C"
                stroke="#B7811B"
                strokeWidth="2"
              />
              <path d="M375 235 L375 480" stroke="#8B1E1E" strokeWidth="3" />
              <path d="M425 235 L425 480" stroke="#8B1E1E" strokeWidth="3" />
              <path d="M400 235 L400 480" stroke="#C62828" strokeWidth="1.5" strokeDasharray="4 2" />

              {/* Họa tiết chim phượng sa kim hoàng hậu */}
              <circle cx="400" cy="330" r="18" fill="#FFF8E1" stroke="#E0AC3C" strokeWidth="2" />
              <path d="M390 330 Q400 315 410 330 Q400 345 390 330 Z" fill="#C62828" />
            </g>
          )}

          {/* OPTION E: ÁO TỨ THÂN KINH BẮC (tu-than) */}
          {layers.outfitId === 'tu-than' && (
            <g id="layer-tu-than" className="animate-in fade-in zoom-in-95 duration-300">
              {/* Váy Lĩnh Đen Dài Chấm Gót */}
              <path
                d="M325 530 L295 900 L285 1120 Q400 1140 515 1120 L505 900 L475 530 Z"
                fill="#1A1817"
                stroke="#0D0B0A"
                strokeWidth="1.8"
              />
              {/* Yếm Đào Sen Hồng Rực Rỡ Bên Trong */}
              <path
                d="M370 235 Q400 245 430 235 L445 380 Q400 420 355 380 Z"
                fill="#C25975"
                stroke="#9E3550"
                strokeWidth="1.5"
              />
              <circle cx="400" cy="238" r="3.5" fill="#FFE082" />

              {/* Thân Áo Tứ Thân Màu Nâu Gụ Thắt Vạt Duyên Dáng */}
              <path
                d="M345 285 Q295 320 250 420 L285 435 Q325 350 350 320 L330 540 L380 540 L370 330 Z"
                fill="#5C4033"
                stroke="#3E2723"
                strokeWidth="1.8"
              />
              <path
                d="M455 285 Q505 320 550 420 L515 435 Q475 350 450 320 L470 540 L420 540 L430 330 Z"
                fill="#5C4033"
                stroke="#3E2723"
                strokeWidth="1.8"
              />
              {/* Hai Vạt Trước Buộc Nơ Thắt Duyên Trước Bụng */}
              <path d="M375 530 Q390 620 370 750" stroke="#5C4033" strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M425 530 Q410 620 430 750" stroke="#5C4033" strokeWidth="8" strokeLinecap="round" fill="none" />
              {/* Dải Thắt Lưng Lụa Xanh Cốm */}
              <path d="M340 520 Q400 535 460 520" stroke="#689F38" strokeWidth="10" strokeLinecap="round" fill="none" />
            </g>
          )}

          {/* OPTION F: ÁO BÀ BA NAM BỘ (ao-ba-ba) */}
          {layers.outfitId === 'ao-ba-ba' && (
            <g id="layer-ao-ba-ba" className="animate-in fade-in zoom-in-95 duration-300">
              {/* Quần Đen Lụa Mộc */}
              <path
                d="M328 540 Q315 720 330 950 L335 1135 Q355 1145 375 1135 L372 950 Q385 820 400 700 Q415 820 428 950 L425 1135 Q445 1145 465 1135 L470 950 Q485 720 472 540 Z"
                fill="#212121"
                stroke="#121212"
                strokeWidth="1.5"
              />
              {/* Áo Bà Ba Trắng Ngà Cổ Tròn Xẻ Giữa */}
              <path
                d="M366 235 L352 290 Q305 320 270 430 L300 440 Q325 360 350 325 L335 600 Q400 615 465 600 L450 325 Q475 360 500 440 L530 430 Q495 320 448 290 L434 235 Q400 248 366 235 Z"
                fill="#FAF8F5"
                stroke="#E0DDD5"
                strokeWidth="1.8"
              />
              {/* Cổ tròn xẻ giữa với hàng khuy bấm */}
              <path d="M400 248 L400 450" stroke="#C7C4BC" strokeWidth="2" />
              {[...Array(6)].map((_, i) => (
                <circle key={i} cx="400" cy={260 + i * 35} r="3" fill="#8D6E63" />
              ))}
              {/* Hai túi vuông đặc trưng phía trước */}
              <rect x="345" y="510" width="30" height="35" rx="3" fill="#F0EDE6" stroke="#D5D1C7" strokeWidth="1.5" />
              <rect x="425" y="510" width="30" height="35" rx="3" fill="#F0EDE6" stroke="#D5D1C7" strokeWidth="1.5" />
            </g>
          )}
        </g>

        {/* ========================================================
            LAYER 04 (z-index 35): NECKLACES / KIỀNG (Vòng cổ & Trang sức)
           ======================================================== */}
        {layers.necklaceId !== 'none' && (
          <g id="layer-necklace" className="transition-all duration-300 animate-in fade-in">
            {layers.necklaceId === 'necklace-kieng-bac' && (
              /* Kiềng Bạc Cung Đình Hoa Sen */
              <g id="acc-kieng-bac">
                <path
                  d="M370 270 Q400 310 430 270"
                  stroke="#CFD8DC"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M370 270 Q400 310 430 270"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.8"
                />
                {/* Mặt hoa sen bạc chạm sa kim */}
                <circle cx="400" cy="296" r="9" fill="#B0BEC5" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M395 296 Q400 288 405 296 Q400 304 395 296 Z" fill="#ECEFF1" />
              </g>
            )}

            {layers.necklaceId === 'necklace-ngoc-bich' && (
              /* Chuỗi Ngọc Phỉ Thúy Quý Tộc */
              <g id="acc-ngoc-bich">
                <path
                  d="M366 265 Q400 325 434 265"
                  stroke="#2E7D32"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                {[...Array(9)].map((_, i) => (
                  <circle
                    key={i}
                    cx={375 + i * 6.2}
                    cy={275 + Math.sin((i / 8) * Math.PI) * 28}
                    r="4.5"
                    fill="#66BB6A"
                    stroke="#1B5E20"
                    strokeWidth="1"
                  />
                ))}
                {/* Mặt ngọc bội chạm rồng sa kim */}
                <ellipse cx="400" cy="318" rx="8" ry="12" fill="#81C784" stroke="#2E7D32" strokeWidth="1.8" />
              </g>
            )}

            {layers.necklaceId === 'necklace-trang-hat-do' && (
              /* Chuỗi Tràng Hạt Hồng Ngọc Đỏ Son */
              <g id="acc-trang-hat-do">
                <path
                  d="M366 265 Q400 350 434 265"
                  stroke="#B71C1C"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
                {[...Array(11)].map((_, i) => (
                  <circle
                    key={i}
                    cx={372 + i * 5.6}
                    cy={270 + Math.sin((i / 10) * Math.PI) * 55}
                    r="4.5"
                    fill="#E53935"
                    stroke="#B71C1C"
                    strokeWidth="1"
                  />
                ))}
              </g>
            )}

            {layers.necklaceId === 'necklace-kieng-vang' && (
              /* Kiềng Vàng Sa Kim Chạm Phượng */
              <g id="acc-kieng-vang">
                <path
                  d="M368 268 Q400 308 432 268"
                  stroke="url(#goldSaKim)"
                  strokeWidth="9"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="400" cy="296" r="10" fill="#FFC107" stroke="url(#goldSaKim)" strokeWidth="2" />
                <circle cx="400" cy="296" r="4" fill="#D32F2F" />
              </g>
            )}
          </g>
        )}

        {/* ========================================================
            LAYER 05 (z-index 45): EARRINGS / HOA TAI
           ======================================================== */}
        {layers.earringId !== 'none' && (
          <g id="layer-earrings" className="transition-all duration-300 animate-in fade-in">
            {layers.earringId === 'earring-ruby' && (
              /* Hoa Tai Hồng Ngọc Giọt Nước */
              <g id="earring-ruby">
                <circle cx="347" cy="180" r="2.5" fill="#FFE082" />
                <path d="M347 182 L347 194" stroke="#FFE082" strokeWidth="1.5" />
                <ellipse cx="347" cy="198" rx="4" ry="7" fill="#C62828" stroke="#FFE082" strokeWidth="1" />

                <circle cx="453" cy="180" r="2.5" fill="#FFE082" />
                <path d="M453 182 L453 194" stroke="#FFE082" strokeWidth="1.5" />
                <ellipse cx="453" cy="198" rx="4" ry="7" fill="#C62828" stroke="#FFE082" strokeWidth="1" />
              </g>
            )}

            {layers.earringId === 'earring-gold' && (
              /* Hoa Tai Vàng Sa Kim Dáng Tròn */
              <g id="earring-gold">
                <circle cx="347" cy="182" r="3" fill="#FFD54F" />
                <circle cx="347" cy="195" r="7" fill="none" stroke="url(#goldSaKim)" strokeWidth="2.5" />
                <circle cx="347" cy="195" r="2" fill="#FFD54F" />

                <circle cx="453" cy="182" r="3" fill="#FFD54F" />
                <circle cx="453" cy="195" r="7" fill="none" stroke="url(#goldSaKim)" strokeWidth="2.5" />
                <circle cx="453" cy="195" r="2" fill="#FFD54F" />
              </g>
            )}

            {layers.earringId === 'earring-jade' && (
              /* Hoa Tai Ngọc Bích Cung Cấm */
              <g id="earring-jade">
                <circle cx="347" cy="180" r="2.5" fill="#C8E6C9" />
                <path d="M347 182 L347 192" stroke="#2E7D32" strokeWidth="1.5" />
                <rect x="343" y="192" width="8" height="12" rx="3" fill="#4CAF50" stroke="#1B5E20" strokeWidth="1" />

                <circle cx="453" cy="180" r="2.5" fill="#C8E6C9" />
                <path d="M453 182 L453 192" stroke="#2E7D32" strokeWidth="1.5" />
                <rect x="449" y="192" width="8" height="12" rx="3" fill="#4CAF50" stroke="#1B5E20" strokeWidth="1" />
              </g>
            )}

            {layers.earringId === 'earring-pearl' && (
              /* Hoa Tai Ngọc Trai Tinh Khiết */
              <g id="earring-pearl">
                <circle cx="347" cy="182" r="2" fill="#E0E0E0" />
                <circle cx="347" cy="192" r="6" fill="#FFFFFF" stroke="#CFD8DC" strokeWidth="1.5" />

                <circle cx="453" cy="182" r="2" fill="#E0E0E0" />
                <circle cx="453" cy="192" r="6" fill="#FFFFFF" stroke="#CFD8DC" strokeWidth="1.5" />
              </g>
            )}
          </g>
        )}

        {/* ========================================================
            LAYER 06 (z-index 50): HANDHELD & HEAD ACCESSORIES
           ======================================================== */}
        {layers.accessoryId !== 'none' && (
          <g id="layer-handheld" className="transition-all duration-300 animate-in fade-in">
            {layers.accessoryId === 'acc-quat-lua' && (
              /* Quạt Lụa Thư Pháp Cầm Tay */
              <g id="handheld-fan" transform="translate(485, 680) rotate(-15)">
                <path
                  d="M0 0 L-45 -110 Q10 -150 65 -110 Z"
                  fill="#FFF8E1"
                  stroke="#D7CCC8"
                  strokeWidth="1.5"
                />
                {/* Bamboo ribs / Nan tre */}
                {[...Array(6)].map((_, i) => (
                  <path key={i} d={`M0 0 L${-45 + i * 22} ${-110 + (i === 2 || i === 3 ? -25 : 0)}`} stroke="#8D6E63" strokeWidth="1.5" />
                ))}
                {/* Chữ Thư Pháp Hán Nôm & Hoa Đào */}
                <path d="M5 -95 Q15 -85 10 -75" stroke="#B71C1C" strokeWidth="2.5" fill="none" />
                <circle cx="25" cy="-90" r="5" fill="#E57373" />
                {/* Dải tua rua đỏ thắm buông lơi */}
                <path d="M0 0 Q-5 40 -2 70" stroke="#C62828" strokeWidth="3" strokeLinecap="round" />
                <circle cx="-2" cy="70" r="4" fill="#FFD54F" />
              </g>
            )}

            {layers.accessoryId === 'acc-tui-gam' && (
              /* Túi Gấm Thêu Sa Kim Hoàng Cung */
              <g id="handheld-bag" transform="translate(480, 710)">
                {/* Quai đeo xích vàng */}
                <path d="M25 0 Q28 40 18 55" stroke="url(#goldSaKim)" strokeWidth="2.5" fill="none" />
                {/* Thân túi gấm đỏ thắm */}
                <rect x="0" y="55" width="60" height="50" rx="8" fill="#B71C1C" stroke="url(#goldSaKim)" strokeWidth="2" />
                <path d="M0 72 L60 72" stroke="url(#goldSaKim)" strokeWidth="2" />
                <circle cx="30" cy="72" r="6" fill="url(#goldSaKim)" />
                <circle cx="30" cy="72" r="2.5" fill="#2E7D32" />
                {/* Tua rua gấm */}
                <path d="M30 105 L30 130" stroke="#D32F2F" strokeWidth="4" strokeLinecap="round" />
              </g>
            )}

            {layers.accessoryId === 'acc-bom-hoa' && (
              /* Bờm Cài Hoa Mẫu Đơn Đỏ Thắm */
              <g id="headpiece-flower-crown">
                <path
                  d="M345 100 Q400 68 455 100"
                  stroke="url(#goldSaKim)"
                  strokeWidth="3.5"
                  fill="none"
                />
                {/* Ba đóa hoa mẫu đơn sa kim */}
                <circle cx="370" cy="90" r="14" fill="#D32F2F" stroke="#FFCDD2" strokeWidth="1.5" />
                <circle cx="370" cy="90" r="5" fill="#FFE082" />

                <circle cx="400" cy="80" r="18" fill="#C2185B" stroke="#F8BBD0" strokeWidth="2" />
                <circle cx="400" cy="80" r="6" fill="#FFD54F" />

                <circle cx="430" cy="90" r="14" fill="#D32F2F" stroke="#FFCDD2" strokeWidth="1.5" />
                <circle cx="430" cy="90" r="5" fill="#FFE082" />
              </g>
            )}

            {layers.accessoryId === 'acc-o-giay-dau' && (
              /* Ô Giấy Dầu Đỏ Nan Tre Che Nghiêng */
              <g id="handheld-umbrella" transform="translate(140, 260) rotate(-22)">
                {/* Vòm ô giấy dầu đỏ chu sa */}
                <ellipse cx="140" cy="80" rx="145" ry="50" fill="#C62828" stroke="#8E0000" strokeWidth="2" />
                {/* Nan trúc tỏa tròn đối xứng */}
                {[...Array(11)].map((_, i) => (
                  <path key={i} d={`M140 80 L${15 + i * 25} ${80 + Math.sin((i / 10) * Math.PI) * 45}`} stroke="#FFCDD2" strokeWidth="1" opacity="0.6" />
                ))}
                {/* Đỉnh chóp ô */}
                <circle cx="140" cy="80" r="8" fill="#5D4037" />
                {/* Cán trúc cầm tay */}
                <path d="M140 80 L140 450" stroke="#795548" strokeWidth="6" strokeLinecap="round" />
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
};
