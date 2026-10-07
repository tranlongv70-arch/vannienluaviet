// Helper: Chuyển SVG thành data:image/svg+xml URI
export function makeDataUri(svgContent: string): string {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgContent.trim());
}

export interface FittingItem {
  id: string;
  name: string;
  eraName: string;
  eraNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  gender: 'male' | 'female';
  src: string;
  meaning: string;
  story: string;
  structure: string;
  usage: string;
}

export interface GenderWardrobe {
  hat: FittingItem[];
  top: FittingItem[];
  bottom: FittingItem[];
  shoes: FittingItem[];
}

// 1. THÂN NHÂN VẬT NỮ (Female Anatomy: cổ cao, vai thon mềm, TÓC BÚI CAO ĐÀI CÁC CỐ ĐỊNH)
export function getFemaleBodySvg(mood: 'happy' | 'neutral' | 'sad' = 'neutral'): string {
  const faceContent = mood === 'happy' ? `
    <!-- MẮT & LÔNG MÀY CƯỜI TƯƠI RẠNG RỠ -->
    <path d="M 178 95 Q 187 89 196 95" stroke="#291e17" stroke-width="1.6" stroke-linecap="round" fill="none" />
    <path d="M 204 95 Q 213 89 222 95" stroke="#291e17" stroke-width="1.6" stroke-linecap="round" fill="none" />
    <circle cx="187" cy="105" r="3.2" fill="#0f172a" />
    <circle cx="188.5" cy="103.5" r="1.1" fill="#ffffff" />
    <circle cx="213" cy="105" r="3.2" fill="#0f172a" />
    <circle cx="214.5" cy="103.5" r="1.1" fill="#ffffff" />
    <path d="M 183 103 Q 187 99 191 103" stroke="#0f172a" stroke-width="1.2" fill="none" />
    <path d="M 209 103 Q 213 99 217 103" stroke="#0f172a" stroke-width="1.2" fill="none" />
    <!-- MÁ HỒNG XINH TƯƠI -->
    <ellipse cx="177" cy="116" rx="5.5" ry="3.5" fill="#f43f5e" opacity="0.38" />
    <ellipse cx="223" cy="116" rx="5.5" ry="3.5" fill="#f43f5e" opacity="0.38" />
    <!-- MŨI -->
    <path d="M 200 109 L 198 120 L 202 120" stroke="#26160e" stroke-width="1.6" fill="none" />
    <!-- MIỆNG CƯỜI TƯƠI RẠNG RỠ -->
    <path d="M 191 127 Q 200 139 209 127 Q 200 142 191 127 Z" fill="#e11d48" stroke="#9f1239" stroke-width="1.3" />
    <path d="M 193 128 Q 200 132 207 128" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <!-- ÁNH SÁNG LẤP LÁNH VUI TƯƠI -->
    <path d="M 226 96 L 228 92 L 230 96 L 234 98 L 230 100 L 228 104 L 226 100 L 222 98 Z" fill="#fbbf24" opacity="0.9" />
  ` : mood === 'sad' ? `
    <!-- LÔNG MÀY NHÍU BUỒN / LO LẮNG -->
    <path d="M 179 98 Q 187 95 195 91" stroke="#291e17" stroke-width="1.6" stroke-linecap="round" fill="none" />
    <path d="M 205 91 Q 213 95 221 98" stroke="#291e17" stroke-width="1.6" stroke-linecap="round" fill="none" />
    <!-- MẮT BUỒN / NGẤN LỆ -->
    <circle cx="187" cy="107" r="3" fill="#0f172a" />
    <circle cx="185.5" cy="108.5" r="1.3" fill="#38bdf8" opacity="0.85" />
    <circle cx="213" cy="107" r="3" fill="#0f172a" />
    <circle cx="211.5" cy="108.5" r="1.3" fill="#38bdf8" opacity="0.85" />
    <!-- MŨI -->
    <path d="M 200 109 L 198 120 L 202 120" stroke="#26160e" stroke-width="1.6" fill="none" />
    <!-- MIỆNG MÉU / BUỒN TRĨU XUỐNG -->
    <path d="M 192 134 Q 200 126 208 134" stroke="#b91c1c" stroke-width="2.2" stroke-linecap="round" fill="none" />
    <!-- GIỌT MỒ HÔI LO LẮNG BÊN THÁI DƯƠNG -->
    <path d="M 228 106 C 226 109, 226 114, 229 116 C 232 114, 232 109, 229 106 Z" fill="#38bdf8" opacity="0.9" stroke="#0284c7" stroke-width="0.8" />
  ` : `
    <!-- MẮT & LÔNG MÀY BÌNH THƯỜNG -->
    <path d="M 180 97 Q 187 93 194 97" stroke="#291e17" stroke-width="1.4" stroke-linecap="round" fill="none" />
    <path d="M 206 97 Q 213 93 220 97" stroke="#291e17" stroke-width="1.4" stroke-linecap="round" fill="none" />
    <circle cx="187" cy="106" r="3" fill="#0f172a" />
    <circle cx="213" cy="106" r="3" fill="#0f172a" />
    <path d="M 200 109 L 198 120 L 202 120" stroke="#26160e" stroke-width="1.6" fill="none" />
    <path d="M 193 129 Q 200 135 207 129" stroke="#b91c1c" stroke-width="2" fill="none" />
  `;

  return makeDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
  <ellipse cx="200" cy="530" rx="75" ry="12" fill="#cbd5e1" />
  
  <!-- BÚI TÓC NỮ PHÍA SAU -->
  <ellipse cx="200" cy="62" rx="22" ry="18" fill="#17120e" stroke="#2c211a" stroke-width="1.5" />
  <path d="M 184 62 C 190 48, 210 48, 216 62" stroke="#4a3b32" stroke-width="1.6" fill="none" />
  <path d="M 188 68 C 194 56, 206 56, 212 68" stroke="#4a3b32" stroke-width="1.6" fill="none" />
  <circle cx="200" cy="58" r="4.5" fill="#382921" opacity="0.6" />

  <g fill="#fed0b8" stroke="#3b271d" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Chân -->
    <path d="M 170 274 Q 163 365 168 485 L 188 485 Q 185 375 190 274 Z" />
    <path d="M 168 485 Q 153 502 150 519 Q 165 523 188 519 L 188 485 Z" />
    <path d="M 210 274 Q 215 375 212 485 L 232 485 Q 237 365 230 274 Z" />
    <path d="M 212 485 L 212 519 Q 235 523 250 519 Q 247 502 232 485 Z" />
    <!-- Thân người & Tay thon gọn -->
    <path d="M 186 166 Q 166 168 152 174 Q 148 205 158 195 Q 152 226 156 254 Q 158 274 168 276 Q 200 284 232 276 Q 242 274 244 254 Q 248 226 242 195 Q 252 205 248 174 Q 234 168 214 166 Z" />
    <!-- Tay thon tạo khoảng cách tự nhiên với thân người -->
    <path d="M 152 174 Q 133 220 135 306 Q 141 318 145 304 Q 143 240 155 195 Z" />
    <path d="M 248 174 Q 267 220 265 306 Q 259 318 255 304 Q 257 240 245 195 Z" />
    <!-- Cổ thon cao -->
    <path d="M 188 132 L 185 168 L 215 168 L 212 132 Z" fill="#fed0b8" />
    <!-- Đầu & Cằm -->
    <path d="M 168 106 C 166 74, 234 74, 232 106 C 232 126, 218 146, 200 146 C 182 146, 168 126, 168 106 Z" />
    <ellipse cx="166" cy="108" rx="4.5" ry="8" />
    <ellipse cx="234" cy="108" rx="4.5" ry="8" />
  </g>

  ${faceContent}

  <!-- TÓC NỮ MẶC ĐỊNH CỐ ĐỊNH -->
  <g id="female-permanent-hair">
    <path d="M 166 106 C 164 68, 236 68, 234 106 C 234 112, 228 106, 226 92 C 216 80, 184 80, 174 92 C 172 106, 166 112, 166 106 Z" fill="#181310" stroke="#291e17" stroke-width="1.2" />
    <path d="M 172 94 Q 186 84 200 88 Q 214 84 228 94 Q 218 88 200 88 Q 182 88 172 94 Z" fill="#281f18" />
    <ellipse cx="200" cy="62" rx="18" ry="14" fill="#181310" stroke="#362920" stroke-width="1.4" />
    <path d="M 187 64 C 192 53, 208 53, 213 64" stroke="#524035" stroke-width="1.6" stroke-linecap="round" fill="none" />
    <path d="M 190 70 C 195 61, 205 61, 210 70" stroke="#524035" stroke-width="1.4" stroke-linecap="round" fill="none" />
    <path d="M 178 86 Q 200 76 222 86" stroke="#5a463b" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.8" />
    <path d="M 166 104 Q 163 118 165 125" stroke="#181310" stroke-width="1.8" stroke-linecap="round" fill="none" />
    <path d="M 234 104 Q 237 118 235 125" stroke="#181310" stroke-width="1.8" stroke-linecap="round" fill="none" />
  </g>
</svg>
`);
}

export const SVG_BODY_FEMALE = getFemaleBodySvg('neutral');
export const SVG_BODY_FEMALE_HAPPY = getFemaleBodySvg('happy');
export const SVG_BODY_FEMALE_SAD = getFemaleBodySvg('sad');
export const SVG_BODY_FEMALE_NO_ARMS = SVG_BODY_FEMALE;

// Áo lót trong nữ (Chỉ hiện khi chưa mặc áo)
export const SVG_UNDERGARMENT_TOP_FEMALE = makeDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
  <g id="female-undergarment-top">
    <path d="M 186 166 L 152 174 Q 146 220 160 210 Q 152 245 158 276 Q 200 282 242 276 Q 248 245 240 210 Q 254 220 248 174 L 214 166 Q 200 174 186 166 Z" fill="#f3e8d7" stroke="#b09b88" stroke-width="1.8" />
    <path d="M 186 166 Q 200 172 214 166" stroke="#a38e7b" stroke-width="1.5" fill="none" />
  </g>
</svg>
`);

// Quần lót trong nữ (Chỉ hiện khi chưa mặc quần/váy)
export const SVG_UNDERGARMENT_BOTTOM_FEMALE = makeDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
  <g id="female-undergarment-bottom">
    <path d="M 166 264 Q 200 274 234 264 L 238 330 Q 200 338 162 330 Z" fill="#e2d2be" stroke="#9a816e" stroke-width="1.8" />
    <line x1="200" y1="270" x2="200" y2="334" stroke="#b8a18d" stroke-width="1.4" />
  </g>
</svg>
`);

// 2. THÂN NHÂN VẬT NAM (Male Anatomy: vai ngang rộng, TÓC NGẮN CỐ ĐỊNH)
export function getMaleBodySvg(mood: 'happy' | 'neutral' | 'sad' = 'neutral'): string {
  const faceContent = mood === 'happy' ? `
    <!-- LÔNG MÀY TƯƠI VUI CƯƠNG NGHỊ -->
    <path d="M 177 94 Q 186 88 195 93" stroke="#241e1a" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 205 93 Q 214 88 223 94" stroke="#241e1a" stroke-width="2" stroke-linecap="round" fill="none" />
    <!-- MẮT SÁNG RẠNG RỠ -->
    <circle cx="186" cy="104" r="3.2" fill="#0f172a" />
    <circle cx="187.5" cy="102.5" r="1.1" fill="#ffffff" />
    <circle cx="214" cy="104" r="3.2" fill="#0f172a" />
    <circle cx="215.5" cy="102.5" r="1.1" fill="#ffffff" />
    <!-- MŨI -->
    <path d="M 199 107 L 197 119 L 203 119" stroke="#26160e" stroke-width="1.8" fill="none" />
    <!-- MIỆNG CƯỜI SẢNG KHOÁI -->
    <path d="M 190 126 Q 200 137 210 126 Q 200 139 190 126 Z" fill="#991b1b" stroke="#5b1111" stroke-width="1.3" />
    <path d="M 192 127 Q 200 131 208 127" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" fill="none" />
    <!-- ÁNH SAO RỰC RỠ -->
    <path d="M 228 92 L 230 88 L 232 92 L 236 94 L 232 96 L 230 100 L 228 96 L 224 94 Z" fill="#fbbf24" opacity="0.9" />
  ` : mood === 'sad' ? `
    <!-- LÔNG MÀY NHĂN / BUỒN BÃ -->
    <path d="M 178 97 Q 186 94 194 90" stroke="#241e1a" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 206 90 Q 214 94 222 97" stroke="#241e1a" stroke-width="2" stroke-linecap="round" fill="none" />
    <!-- MẮT BUỒN / CỤP -->
    <circle cx="186" cy="105" r="3" fill="#0f172a" />
    <circle cx="214" cy="105" r="3" fill="#0f172a" />
    <!-- MŨI -->
    <path d="M 199 107 L 197 119 L 203 119" stroke="#26160e" stroke-width="1.8" fill="none" />
    <!-- MIỆNG TRĨU XUỐNG -->
    <path d="M 190 133 Q 200 125 210 133" stroke="#881337" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <!-- GIỌT MỒ HÔI ÁI NGẠI -->
    <path d="M 229 104 C 227 107, 227 112, 230 114 C 233 112, 233 107, 230 104 Z" fill="#38bdf8" opacity="0.9" stroke="#0284c7" stroke-width="0.8" />
  ` : `
    <!-- MẮT & LÔNG MÀY BÌNH THƯỜNG -->
    <circle cx="186" cy="104" r="3.2" fill="#0f172a" />
    <circle cx="214" cy="104" r="3.2" fill="#0f172a" />
    <path d="M 199 107 L 197 119 L 203 119" stroke="#26160e" stroke-width="1.8" fill="none" />
    <path d="M 191 128 Q 200 132 209 128" stroke="#881337" stroke-width="2.2" fill="none" />
  `;

  return makeDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
  <ellipse cx="200" cy="530" rx="85" ry="14" fill="#cbd5e1" />
  
  <g fill="#f5ba9e" stroke="#3b271d" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <!-- Chân vạm vỡ -->
    <path d="M 165 272 Q 156 365 162 485 L 186 485 Q 183 375 188 272 Z" />
    <path d="M 162 485 Q 146 502 144 520 Q 162 525 186 520 L 186 485 Z" />
    <path d="M 212 272 Q 217 375 214 485 L 238 485 Q 244 365 235 272 Z" />
    <path d="M 214 485 L 214 520 Q 238 525 256 520 Q 254 502 238 485 Z" />
    <!-- Thân người vạm vỡ gọn gàng vừa vặn nách áo -->
    <path d="M 186 164 L 142 174 Q 138 208 152 200 Q 148 230 152 256 L 164 274 Q 200 280 236 274 L 248 256 Q 252 230 248 200 Q 262 208 258 174 L 214 164 Z" />
    <!-- Tay thu gọn vừa khít vai áo -->
    <path d="M 142 174 Q 130 220 132 308 Q 140 322 145 306 Q 142 242 152 200 Z" />
    <path d="M 258 174 Q 270 220 268 308 Q 260 322 255 306 Q 258 242 248 200 Z" />
    <!-- Cổ vững chãi, khít gọn hơn -->
    <path d="M 186 132 L 184 168 L 216 168 L 214 132 Z" fill="#f5ba9e" />
    <!-- Đầu & Cằm cương nghị -->
    <path d="M 166 104 C 164 70, 236 70, 234 104 C 234 126, 222 146, 200 146 C 178 146, 166 126, 166 104 Z" />
    <ellipse cx="164" cy="106" rx="4.5" ry="8" />
    <ellipse cx="236" cy="106" rx="4.5" ry="8" />
  </g>

  ${faceContent}

  <!-- TÓC NAM MẶC ĐỊNH CỐ ĐỊNH -->
  <g id="male-permanent-hair">
    <path d="M 163 104 C 160 56, 240 56, 237 104 C 237 108, 233 104, 231 88 C 220 78, 180 78, 169 88 C 167 104, 163 108, 163 104 Z" fill="#161311" stroke="#241e1a" stroke-width="1.4" />
    <path d="M 167 92 Q 183 83 200 87 Q 217 83 233 92 Q 225 82 200 80 Q 175 82 167 92 Z" fill="#241e1a" />
    <polygon points="163,94 167,96 166,114 162,110" fill="#161311" />
    <polygon points="237,94 233,96 234,114 238,110" fill="#161311" />
    <path d="M 174 74 Q 192 64 212 68" stroke="#453b34" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 182 82 Q 200 72 220 78" stroke="#453b34" stroke-width="1.8" stroke-linecap="round" fill="none" />
    <path d="M 170 84 Q 184 78 196 80" stroke="#352c26" stroke-width="1.6" stroke-linecap="round" fill="none" />
  </g>
</svg>
`);
}

export const SVG_BODY_MALE = getMaleBodySvg('neutral');
export const SVG_BODY_MALE_HAPPY = getMaleBodySvg('happy');
export const SVG_BODY_MALE_SAD = getMaleBodySvg('sad');
export const SVG_BODY_MALE_NO_ARMS = SVG_BODY_MALE;

// Helper chọn thân người theo giới tính và cảm xúc
export function getBodySvg(gender: 'male' | 'female', mood: 'happy' | 'neutral' | 'sad' = 'neutral'): string {
  return gender === 'male' ? getMaleBodySvg(mood) : getFemaleBodySvg(mood);
}

// Áo lót trong nam (Chỉ hiện khi chưa mặc áo)
export const SVG_UNDERGARMENT_TOP_MALE = makeDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
  <g id="male-undergarment-top">
    <path d="M 186 164 L 144 174 Q 138 208 152 200 Q 148 230 152 256 L 164 274 Q 200 280 236 274 L 248 256 Q 252 230 248 200 Q 262 208 256 174 L 214 164 Q 200 172 186 164 Z" fill="#f3e8d7" stroke="#b09b88" stroke-width="1.8" />
    <path d="M 184 160 Q 200 154 216 160 L 214 168 Q 200 162 186 168 Z" fill="#e5d5c0" stroke="#a38e7b" stroke-width="1.2" />
  </g>
</svg>
`);

// Quần lót trong nam (Chỉ hiện khi chưa mặc quần)
export const SVG_UNDERGARMENT_BOTTOM_MALE = makeDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
  <g id="male-undergarment-bottom">
    <path d="M 160 264 Q 200 274 240 264 L 244 330 Q 200 338 156 330 Z" fill="#e2d2be" stroke="#9a816e" stroke-width="1.8" />
    <line x1="200" y1="270" x2="200" y2="334" stroke="#b8a18d" stroke-width="1.4" />
  </g>
</svg>
`);

// MALE WARDROBE DATA (TỦ ĐỒ NAM)
export const MALE_WARDROBE_DATA: GenderWardrobe = {
  hat: [
    {
      id: 'm_hat_longchim',
      name: 'Vương Miện Lạc Việt 5 Chóp Hoàng Kim',
      eraName: 'Thời kỳ Văn Lang - Âu Lạc',
      eraNumber: 1,
      gender: 'male',
      meaning: 'Sùng bái vật tổ chim Lạc và Thần Mặt Trời của nền văn minh sông Hồng.',
      story: 'Hình khắc vũ nhân và thủ lĩnh đội mũ lông chim trĩ trên trống đồng Ngọc Lễ và Hoàng Đạo.',
      structure: 'Vương miện 5 chóp nhọn đối xứng màu hoàng kim đính các hạt ngọc ruby đỏ sang quý, tỷ lệ vừa vặn và tôn phong thái cương nghị của đấng nam nhi.',
      usage: 'Đại lễ phục tế lễ trời đất và hội mùa.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="maleCrownGold" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#b45309" />
              <stop offset="40%" stop-color="#f59e0b" />
              <stop offset="70%" stop-color="#fde047" />
              <stop offset="100%" stop-color="#fffbeb" />
            </linearGradient>
            <linearGradient id="maleCrownSide" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#92400e" />
              <stop offset="50%" stop-color="#d97706" />
              <stop offset="100%" stop-color="#fcd34d" />
            </linearGradient>
          </defs>

          <!-- 5 Chóp Vương Miện Tỷ Lệ Cân Đối Vừa Vặn Đầu Nam -->
          <!-- Chóp 1 (Ngoài cùng bên trái) -->
          <polygon points="162,82 165,56 174,59 176,81" fill="url(#maleCrownSide)" stroke="#78350f" stroke-width="1.4" stroke-linejoin="round" />
          
          <!-- Chóp 2 (Trái trung gian) -->
          <polygon points="174,81 180,44 190,48 189,80" fill="url(#maleCrownGold)" stroke="#78350f" stroke-width="1.5" stroke-linejoin="round" />
          
          <!-- Chóp 3 (Chính giữa uy nghiêm) -->
          <polygon points="187,79 196,32 204,32 213,79" fill="url(#maleCrownGold)" stroke="#78350f" stroke-width="1.6" stroke-linejoin="round" />
          
          <!-- Chóp 4 (Phải trung gian) -->
          <polygon points="211,80 210,48 220,44 226,81" fill="url(#maleCrownGold)" stroke="#78350f" stroke-width="1.5" stroke-linejoin="round" />
          
          <!-- Chóp 5 (Ngoài cùng bên phải) -->
          <polygon points="224,81 226,59 235,56 238,82" fill="url(#maleCrownSide)" stroke="#78350f" stroke-width="1.4" stroke-linejoin="round" />

          <!-- Vành đai ôm trán nam vững chãi, ôm khít theo vòng trán -->
          <path d="M 160 80 Q 200 86 240 80 L 240 91 Q 200 97 160 91 Z" fill="url(#maleCrownGold)" stroke="#78350f" stroke-width="1.8" stroke-linejoin="round" />
          <path d="M 162 84 Q 200 90 238 84" stroke="#fef08a" stroke-width="1.2" fill="none" />

          <!-- Hạt ngọc Ruby & Hoa văn vầng thái dương Đông Sơn tinh xảo -->
          <circle cx="200" cy="40" r="3.2" fill="#dc2626" stroke="#991b1b" stroke-width="1" />
          <circle cx="200" cy="39" r="1" fill="#ffffff" opacity="0.8" />
          
          <circle cx="185" cy="50" r="2.6" fill="#dc2626" stroke="#991b1b" stroke-width="0.8" />
          <circle cx="215" cy="50" r="2.6" fill="#dc2626" stroke="#991b1b" stroke-width="0.8" />
          
          <circle cx="170" cy="62" r="2.2" fill="#dc2626" stroke="#991b1b" stroke-width="0.7" />
          <circle cx="230" cy="62" r="2.2" fill="#dc2626" stroke="#991b1b" stroke-width="0.7" />

          <!-- Hàng đinh ngọc vàng trên vành vương miện -->
          <circle cx="172" cy="85" r="1.6" fill="#78350f" />
          <circle cx="186" cy="87" r="1.6" fill="#78350f" />
          <circle cx="200" cy="88" r="2.2" fill="#dc2626" stroke="#78350f" stroke-width="0.8" />
          <circle cx="214" cy="87" r="1.6" fill="#78350f" />
          <circle cx="228" cy="85" r="1.6" fill="#78350f" />
        </svg>
      `)
    },
    {
      id: 'm_hat_phacdau_bacthuoc',
      name: 'Mũ Phác Đầu / Bình Đính Khăn Vuông Đen',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'male',
      meaning: 'Phong cốt nho nhã, kỷ cương của đấng nam nhi thời đầu tự chủ dân tộc.',
      story: 'Mũ phác đầu vải the đen phom đứng vuông vức thường được các bậc hào kiệt, văn nhân mặc cùng áo viên lĩnh.',
      structure: 'Thân mũ the gấm đen phom vuông vức, nếp gấp giữa đỉnh đầu, vành quấn ôm trán và tai ôm gọn.',
      usage: 'Lễ phục trang trọng và thường phục quý tộc thời Ngô - Đinh - Tiền Lê.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 60 L 164 92 Q 200 84 236 92 L 234 60 Q 200 52 166 60 Z" fill="#18181b" stroke="#09090b" stroke-width="2" />
          <polygon points="166,60 174,40 226,40 234,60" fill="#27272a" stroke="#09090b" stroke-width="1.8" />
          <line x1="200" y1="40" x2="200" y2="86" stroke="#3f3f46" stroke-width="1.6" />
          <path d="M 164 86 Q 200 78 236 86 L 236 94 Q 200 86 164 94 Z" fill="#09090b" />
          <path d="M 164 78 Q 154 84 158 96 Q 166 94 166 84 Z" fill="#18181b" stroke="#09090b" stroke-width="1.2" />
          <path d="M 236 78 Q 246 84 242 96 Q 234 94 234 84 Z" fill="#18181b" stroke="#09090b" stroke-width="1.2" />
        </svg>
      `)
    },
    {
      id: 'm_hat_sa_lytran',
      name: 'Mũ Sa Đen / Mũ Đinh Tự (Lý - Trần - Hồ)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'male',
      meaning: 'Tôn vinh trí tuệ Nho phong hòa quyện cốt cách thanh tịnh của Phật giáo Đại Việt.',
      story: 'Bia tiến sĩ và tượng đá cung đình thời Lý - Trần khắc họa các quan văn và danh sĩ đội mũ sa then đen đoan nghiêm.',
      structure: 'Khung ôm khít búi tóc, chỏm vuông vắn bọc the đen, đai nẹp ôm trán giữ dáng mũ ngay ngắn.',
      usage: 'Lễ phục triều đình và nghi thức trang trọng.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 164 56 C 164 36, 236 36, 236 56 L 238 90 Q 200 82 162 90 Z" fill="#0f172a" stroke="#020617" stroke-width="2" />
          <polygon points="170,56 176,38 224,38 230,56" fill="#1e293b" stroke="#0f172a" stroke-width="1.6" />
          <line x1="200" y1="38" x2="200" y2="86" stroke="#475569" stroke-width="1.5" />
          <path d="M 162 84 Q 200 76 238 84 L 236 94 Q 200 86 164 94 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.4" />
          <circle cx="200" cy="62" r="3" fill="#e2e8f0" />
        </svg>
      `)
    },
    {
      id: 'm_hat_canhchuon',
      name: 'Mũ Cánh Chuồn Nho Phong (Hậu Lê - Mạc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'male',
      meaning: 'Biểu trưng của phẩm phục khoa bảng, học vị và trật tự kỷ cương phép nước.',
      story: 'Sắc lệnh "chỉnh đốn y quan" vua Lê Thánh Tông ban cấp mũ cánh chuồn cho các tiến sĩ vinh quy bái tổ.',
      structure: 'Chỏm mũ tròn cao sơn then đen, hai cánh chuồn ngang vươn thẳng hai bên thái dương.',
      usage: 'Đại triều phục và điển lễ quốc gia.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <ellipse cx="200" cy="68" rx="42" ry="22" fill="#0f172a" stroke="#000" stroke-width="1.8" />
          <path d="M 160 70 C 110 62, 70 64, 52 68 C 70 76, 110 76, 160 72 Z" fill="#0f172a" stroke="#000" stroke-width="1.4" />
          <path d="M 240 70 C 290 62, 330 64, 348 68 C 330 76, 290 76, 240 72 Z" fill="#0f172a" stroke="#000" stroke-width="1.4" />
          <rect x="180" y="74" width="40" height="20" rx="3" fill="#1e293b" stroke="#0f172a" stroke-width="1.5" />
          <circle cx="200" cy="66" r="3.5" fill="#f59e0b" />
        </svg>
      `)
    },
    {
      id: 'm_hat_khandong',
      name: 'Khăn Đóng Chữ Nhân',
      eraName: 'Triều Nguyễn (1802 – 1945)',
      eraNumber: 6,
      gender: 'male',
      meaning: 'Chữ Nhân (人) trên trán nhắc nhở luôn đặt đạo làm người lên hàng đầu.',
      story: 'Quy chế y miện triều Nguyễn quy định nam giới khi mặc áo tấc hay ngũ thân bắt buộc phải đội khăn đóng tề chỉnh.',
      structure: 'Quấn từ 7-9 nếp vải lụa đen tạo thành nếp gấp chữ Nhân cân đối giữa trán.',
      usage: 'Lễ phục cưới hỏi, tế lễ và thường phục trang trọng.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 164 74 C 164 44, 236 44, 236 74 Z" fill="#0f172a" stroke="#000" stroke-width="1.6" />
          <path d="M 163 77 Q 200 67 237 77 L 237 82 Q 200 72 163 82 Z" fill="#1e293b" stroke="#000" stroke-width="0.8" />
          <path d="M 162 82 Q 200 73 238 82 L 238 87 Q 200 78 162 87 Z" fill="#0f172a" stroke="#000" stroke-width="0.8" />
          <path d="M 160 88 Q 200 80 240 88 L 238 96 Q 200 89 162 96 Z" fill="#0f172a" stroke="#000" stroke-width="1.5" />
          <line x1="190" y1="84" x2="208" y2="94" stroke="#fbbf24" stroke-width="1.4" />
        </svg>
      `)
    },
    {
      id: 'm_hat_khan_tayson',
      name: 'Khăn Chít Đỏ Cờ Đào Tây Sơn',
      eraName: 'Triều Tây Sơn (1778 – 1802)',
      eraNumber: 5,
      gender: 'male',
      meaning: 'Sắc đỏ cờ đào hào hùng, biểu trưng cho khí thế thần tốc, quật khởi của nghĩa quân áo vải Tây Sơn.',
      story: 'Khăn vải lụa đỏ thắm chít chặt trán, thắt nút sau gáy buông hai dải dài cơ động trong các cuộc hành quân đại phá quân xâm lược.',
      structure: 'Khăn vải đỏ thắm quấn ôm trán, nút thắt hai bên thái dương và dải khăn đỏ buông sau gáy.',
      usage: 'Chiến phục hành quân và đại lễ mừng chiến thắng Thăng Long.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <!-- Vành khăn đỏ chít trán -->
          <path d="M 162 78 Q 200 70 238 78 L 236 94 Q 200 86 164 94 Z" fill="#b91c1c" stroke="#7f1d1d" stroke-width="1.5" />
          <path d="M 163 82 Q 200 74 237 82" stroke="#dc2626" stroke-width="1.8" fill="none" />
          <!-- Nút thắt bên thái dương phải -->
          <ellipse cx="238" cy="86" rx="5" ry="4" fill="#991b1b" />
          <!-- Dải khăn bay sau gáy -->
          <path d="M 238 88 Q 256 104 254 140 Q 248 144 244 138 Q 246 108 236 92 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1" />
        </svg>
      `)
    },
    {
      id: 'm_hat_non_la_nam_cophong',
      name: 'Nón Lá Tre Lót Khăn Vấn Nho Phong (Nam)',
      eraName: 'Thời kỳ Hiện Đại & Cổ Phong Nam Bộ',
      eraNumber: 7,
      gender: 'male',
      meaning: 'Nét mộc mạc, phóng khoáng của đấng nam nhi vùng sông nước Nam Bộ và văn hóa làng quê Việt Nam.',
      story: 'Nón lá tre đan nếp nhuyễn kết hợp lớp khăn vấn đội đầu bên trong che nắng che mưa, thể hiện tâm hồn tự do và lãng mạn.',
      structure: 'Nón lá hình chỏm nón đan từ nan tre tự nhiên, đường vành quấn khăn vải lụa xanh rêu che trán.',
      usage: 'Thường phục dạo phố, du xuân, hội làng và văn hóa sông nước.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <!-- Khăn vấn lụa xanh rêu ôm trán -->
          <path d="M 162 82 Q 200 74 238 82 L 236 98 Q 200 90 164 98 Z" fill="#2d4732" stroke="#1c3020" stroke-width="1.2" />
          <path d="M 163 86 Q 200 78 237 86" stroke="#4c6d52" stroke-width="1.5" fill="none" />
          <!-- Thân nón lá tre hạ vút ôm vừa chóp đầu -->
          <path d="M 124 88 L 200 36 L 276 88 Q 200 98 124 88 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8" />
          <path d="M 132 86 L 200 40 L 268 86 Q 200 94 132 86 Z" fill="#facc15" opacity="0.4" />
          <!-- Các đường nan tre vút chóp -->
          <line x1="200" y1="36" x2="148" y2="90" stroke="#ca8a04" stroke-width="0.8" opacity="0.7" />
          <line x1="200" y1="36" x2="172" y2="93" stroke="#ca8a04" stroke-width="0.8" opacity="0.7" />
          <line x1="200" y1="36" x2="200" y2="94" stroke="#ca8a04" stroke-width="1" opacity="0.8" />
          <line x1="200" y1="36" x2="228" y2="93" stroke="#ca8a04" stroke-width="0.8" opacity="0.7" />
          <line x1="200" y1="36" x2="252" y2="90" stroke="#ca8a04" stroke-width="0.8" opacity="0.7" />
          <!-- Vành nón đan tre vòng -->
          <ellipse cx="200" cy="88" rx="76" ry="12" fill="none" stroke="#a16207" stroke-width="1.2" />
          <ellipse cx="200" cy="76" rx="58" ry="9" fill="none" stroke="#ca8a04" stroke-width="0.8" opacity="0.6" />
          <ellipse cx="200" cy="62" rx="38" ry="6" fill="none" stroke="#ca8a04" stroke-width="0.8" opacity="0.6" />
          <ellipse cx="200" cy="48" rx="20" ry="4" fill="none" stroke="#ca8a04" stroke-width="0.8" opacity="0.6" />
        </svg>
      `)
    }
  ],
  top: [
    {
      id: 'm_top_vanlang_tattoo',
      name: 'Áo Sát Nách & Yếm Cổ Đông Sơn (Văn Lang)',
      eraName: 'Thời kỳ Văn Lang - Âu Lạc',
      eraNumber: 1,
      gender: 'male',
      meaning: 'Sự kết hợp giữa nét khỏe khoắn tự do và sự trang trọng của hoa văn trống đồng.',
      story: 'Trang phục lễ hội của người Lạc Việt với dải yếm cổ vòng cung thêu mặt trời và vũ nhân Đông Sơn.',
      structure: 'Áo sát nách màu vàng kem cát, cổ đính dải yếm choàng tròn đỏ thêu hoa văn trống đồng vàng kim.',
      usage: 'Lễ phục mùa màng và hội đền Hùng thời Văn Lang.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="vlSandLinen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="40%" stop-color="#fef3c7" />
              <stop offset="70%" stop-color="#fde68a" />
              <stop offset="100%" stop-color="#f59e0b" />
            </linearGradient>
            <linearGradient id="vlCrimsonYem" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="50%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
            <radialGradient id="vlSunGoldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="40%" stop-color="#fde047" />
              <stop offset="80%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#b45309" />
            </radialGradient>
          </defs>

          <!-- Thân áo sát nách vải lanh sa cát vàng Đông Sơn, ôm phom cơ thể mềm mại -->
          <path d="M 186 164 L 138 174 Q 130 206 150 200 Q 146 230 150 256 L 164 274 Q 200 280 236 274 L 250 256 Q 254 230 250 200 Q 270 206 262 174 L 214 164 Q 200 172 186 164 Z" fill="url(#vlSandLinen)" stroke="#b45309" stroke-width="1.8" />
          
          <!-- Dải nếp gấp vải tự nhiên uốn lượn hai bên mạn sườn -->
          <path d="M 152 205 Q 164 240 162 272" stroke="#ffffff" stroke-width="1.6" fill="none" opacity="0.65" />
          <path d="M 248 205 Q 236 240 238 272" stroke="#ffffff" stroke-width="1.6" fill="none" opacity="0.65" />
          <path d="M 160 215 Q 170 245 168 272" stroke="#d97706" stroke-width="1.2" fill="none" opacity="0.4" />
          <path d="M 240 215 Q 230 245 232 272" stroke="#d97706" stroke-width="1.2" fill="none" opacity="0.4" />

          <!-- Choàng yếm cổ tròn đỏ son thêu mặt trời Đông Sơn -->
          <path d="M 168 162 Q 200 154 232 162 Q 260 196 238 228 Q 200 246 162 228 Q 140 196 168 162 Z" fill="url(#vlCrimsonYem)" stroke="#7f1d1d" stroke-width="2" />
          <path d="M 172 168 Q 200 160 228 168 Q 250 196 232 222 Q 200 238 168 222 Q 150 196 172 168 Z" stroke="#fde047" stroke-width="1.4" fill="none" opacity="0.8" />
          
          <path d="M 184 150 Q 200 144 216 150 Q 200 162 184 150 Z" fill="#f5ba9e" />

          <!-- Mặt trời Đông Sơn 14 tia sáng vàng kim tỏa rạng -->
          <circle cx="200" cy="198" r="20" fill="url(#vlSunGoldGlow)" stroke="#78350f" stroke-width="1.5" />
          <circle cx="200" cy="198" r="13" fill="#dc2626" stroke="#fde047" stroke-width="1.2" />
          <circle cx="200" cy="198" r="6" fill="#fef08a" />
          <path d="M 200 176 L 200 220 M 178 198 L 222 198 M 184 182 L 216 214 M 184 214 L 216 182" stroke="#fde047" stroke-width="1.5" />

          <!-- Dải hoa văn răng cưa chim Lạc đính viền chân yếm -->
          <path d="M 166 220 L 172 228 L 180 224 L 188 232 L 196 228 L 204 232 L 212 228 L 220 232 L 228 224 L 234 220" stroke="#facc15" stroke-width="2" fill="none" stroke-linejoin="round" />
        </svg>
    `)
    },
    {
      id: 'm_top_vienlinh_nauhong',
      name: 'Áo Viên Lĩnh Nâu Hồng Gạch Lót Son (Ngô-Đinh-Lê)',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'male',
      meaning: 'Khí chất ung dung, đĩnh đạc của bậc hào kiệt thời dựng nền độc lập tự chủ.',
      story: 'Phục dựng theo nguyên mẫu tư liệu: Áo viên lĩnh dệt hoa văn chìm màu nâu hồng gạch, xẻ tà hai bên lót lụa đỏ son, cổ viền trắng ngà.',
      structure: 'Cổ tròn viên lĩnh nẹp viền trắng ôm sát, tay áo thụng rộng dài lót đỏ son, tà áo suông xẻ hông lót lụa son rực rỡ.',
      usage: 'Lễ phục đại sự và thường phục cao cấp thời Ngô - Đinh - Tiền Lê.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="terracottaSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#df928a" />
              <stop offset="35%" stop-color="#c9736b" />
              <stop offset="70%" stop-color="#b15951" />
              <stop offset="100%" stop-color="#8d3d37" />
            </linearGradient>
            <linearGradient id="crimsonLining" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#7f1d1d" />
            </linearGradient>
            <linearGradient id="silkHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
              <stop offset="50%" stop-color="#ffffff" stop-opacity="0.35" />
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
            </linearGradient>
          </defs>

          <!-- Áo lót trắng giao lĩnh trong chuẩn mực -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Cửa tay lót đỏ son gọn gàng -->
          <polygon points="114,288 148,282 144,296 110,302" fill="url(#crimsonLining)" stroke="#991b1b" stroke-width="1" />
          <polygon points="286,288 252,282 256,296 290,302" fill="url(#crimsonLining)" stroke="#991b1b" stroke-width="1" />

          <!-- Thân áo gấm nâu hồng phom tay chẽn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 422 Q 200 432 248 422 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#terracottaSilk)" stroke="#742a25" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V đỏ son lót mềm -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="url(#crimsonLining)" stroke="#991b1b" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="url(#crimsonLining)" stroke="#991b1b" stroke-width="2" />

          <!-- Dải ánh lụa mềm mại -->
          <path d="M 134 176 L 120 282" stroke="url(#silkHighlight)" stroke-width="4" fill="none" stroke-linecap="round" />
          <path d="M 266 176 L 280 282" stroke="url(#silkHighlight)" stroke-width="4" fill="none" stroke-linecap="round" />
          <path d="M 166 220 Q 162 330 164 416" stroke="url(#silkHighlight)" stroke-width="3.5" fill="none" />
          <path d="M 234 220 Q 238 330 236 416" stroke="url(#silkHighlight)" stroke-width="3.5" fill="none" />

          <!-- Hoa văn đoàn hoa / mây cuộn dệt chìm -->
          <circle cx="200" cy="280" r="14" fill="none" stroke="#fca5a5" stroke-width="1.2" opacity="0.6" stroke-dasharray="4,2" />
          <circle cx="200" cy="280" r="7" fill="none" stroke="#fca5a5" stroke-width="1" opacity="0.6" />
          <circle cx="200" cy="350" r="18" fill="none" stroke="#fca5a5" stroke-width="1.4" opacity="0.5" stroke-dasharray="5,2" />

          <line x1="200" y1="258" x2="200" y2="424" stroke="#8d3d37" stroke-width="1.4" opacity="0.8" />
        </svg>
    `)
    },
    {
      id: 'm_top_vienlinh_lytran',
      name: 'Áo Viên Lĩnh Nam Xanh Lam/Ngọc (Lý - Trần)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'male',
      meaning: 'Phong cốt Nho phong hòa quyện Phật giáo cực thịnh, biểu trưng sự tự chủ của vương triều Đại Việt.',
      story: 'Hình 1 (trang phục Nam bên trái): Áo cổ tròn viên lĩnh màu xanh lam/ngọc thêu hoa sen và mây cuộn Đại Việt, khuy vai phải, đai ngọc hoàng gia.',
      structure: 'Cổ tròn ôm sát nẹp viền cứng cài cúc ngọc, thân suông rộng, thắt đai ngọc bản to, tà dài qua đầu gối xẻ hông kín đáo.',
      usage: 'Thường phục triều chính của quan lại và lễ phục trang trọng của quý tộc Lý - Trần.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="oceanSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1e40af" />
              <stop offset="35%" stop-color="#1e3a8a" />
              <stop offset="70%" stop-color="#0f2b5c" />
              <stop offset="100%" stop-color="#081836" />
            </linearGradient>
            <radialGradient id="lotusGold" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="50%" stop-color="#fbbf24" />
              <stop offset="100%" stop-color="#b45309" />
            </radialGradient>
            <linearGradient id="goldBeltGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#b45309" />
              <stop offset="30%" stop-color="#fde047" />
              <stop offset="70%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#92400e" />
            </linearGradient>
          </defs>

          <!-- Áo lót trắng giao lĩnh trong chuẩn mực -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo gấm xanh lam/ngọc phom tay chẽn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 422 Q 200 432 248 422 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#oceanSilk)" stroke="#0b1329" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V xanh lam đậm hoàng triều -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="#1d4ed8" stroke="#0f172a" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="#1d4ed8" stroke="#0f172a" stroke-width="2" />

          <!-- Ánh lụa bóng mượt -->
          <path d="M 134 176 L 120 282" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.4" />
          <path d="M 266 176 L 280 282" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.4" />
          <path d="M 166 280 Q 162 350 164 416" stroke="#60a5fa" stroke-width="3" fill="none" opacity="0.35" />
          <path d="M 234 280 Q 238 350 236 416" stroke="#60a5fa" stroke-width="3" fill="none" opacity="0.35" />

          <!-- Họa tiết Hoa Sen & Mây Cuộn Thời Lý - Trần trước ngực -->
          <circle cx="200" cy="216" r="22" fill="none" stroke="url(#lotusGold)" stroke-width="2" />
          <circle cx="200" cy="216" r="14" fill="none" stroke="#fde047" stroke-width="1.2" stroke-dasharray="4,2" opacity="0.9" />
          <circle cx="200" cy="216" r="6" fill="url(#lotusGold)" />

          <!-- Đai ngọc hoàng triều bản to ngang eo với khóa ngọc mạ vàng -->
          <rect x="150" y="256" width="100" height="16" rx="2" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />
          <rect x="188" y="254" width="24" height="20" rx="3" fill="url(#goldBeltGrad)" stroke="#78350f" stroke-width="1.5" />
          <circle cx="200" cy="264" r="4.5" fill="#38bdf8" stroke="#0369a1" stroke-width="1" />

        </svg>
    `)
    },
    {
      id: 'm_top_tudien_nam_lytran',
      name: 'Áo Tứ Điên Nam Hoàng Triều Gấm Lam (Lý - Trần)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'male',
      meaning: 'Khí phách Hào khí Đông A, 4 vạt xẻ trước sau và sườn biểu trưng cho sự oai nghiêm, đĩnh đạc của bậc quân tử Đại Việt.',
      story: 'Hình 2 (trang phục Nam bên trên): Áo tứ điên 4 vạt màu gấm lam ngọc dệt hoa sen và lá đề thời Trần, vạt xẻ giữa ngực, thắt đai ngọc hoàng gia, không cầm quạt.',
      structure: 'Áo cổ tròn 4 vạt xẻ tà (2 vạt trước chia đôi đối xứng, 2 vạt sau và hông), thắt đai ngọc bản to, chất gấm lam dệt hoa sen mây cuộn Đại Việt.',
      usage: 'Đại lễ triều nghi, điển lễ tế tự quốc gia và duyệt binh vương triều Trần.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="tudienTealSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#226b80" />
              <stop offset="40%" stop-color="#184e5f" />
              <stop offset="75%" stop-color="#0f3440" />
              <stop offset="100%" stop-color="#071d24" />
            </linearGradient>
            <radialGradient id="lotusReliefGold" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="60%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#854d0e" />
            </radialGradient>
          </defs>

          <!-- Áo lót trắng giao lĩnh trong chuẩn mực -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo Tứ Điên 4 vạt phom tay chẽn thon gọn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 422 Q 200 432 248 422 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#tudienTealSilk)" stroke="#06181f" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V teal lam ngọc -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="#0c2b36" stroke="#06181f" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="#0c2b36" stroke="#06181f" stroke-width="2" />

          <!-- Đường xẻ vạt trước chữ I đặc trưng của Áo Tứ Điên -->
          <line x1="200" y1="256" x2="200" y2="424" stroke="#071d24" stroke-width="2.2" />
          <line x1="202" y1="256" x2="202" y2="424" stroke="#38bdf8" stroke-width="0.8" opacity="0.3" />

          <!-- Hoa sen & Lá đề thời Trần đính chỉ vàng kim dệt chìm -->
          <circle cx="200" cy="216" r="24" fill="none" stroke="url(#lotusReliefGold)" stroke-width="1.8" opacity="0.9" />
          <circle cx="200" cy="216" r="14" fill="none" stroke="#fde047" stroke-width="1.2" stroke-dasharray="4,2" opacity="0.8" />
          <circle cx="200" cy="216" r="6" fill="url(#lotusReliefGold)" />
          <circle cx="174" cy="330" r="14" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />
          <circle cx="226" cy="330" r="14" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />
          <circle cx="200" cy="380" r="16" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />

          <!-- Đai ngọc hoàng gia thắt ngang eo -->
          <rect x="150" y="256" width="100" height="16" rx="2" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />
          <rect x="188" y="254" width="24" height="20" rx="3" fill="url(#lotusReliefGold)" stroke="#78350f" stroke-width="1.5" />
          <circle cx="200" cy="264" r="4" fill="#38bdf8" stroke="#0369a1" stroke-width="1" />

        </svg>
    `)
    },
    {
      id: 'm_top_giaolinh_thungthu_haule',
      name: 'Áo Giao Lĩnh Thụng Thủ Nâu Viền Son (Hình 1 - Dưới)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'male',
      meaning: 'Sự mực thước, uy nghi và điển lệ Nho giáo thời Lê - Mạc qua dáng áo giao lĩnh khổ rộng thụng thủ.',
      story: 'Hình 1 (bên dưới): Áo giao lĩnh khổ rộng màu nâu đất dệt hoa văn tròn đoàn long/mặt trời Lê-Mạc, cổ nẹp đỏ son, tay áo thụng rộng viền đỏ, đai thắt đỏ son, áo lót trong trắng tinh khôi.',
      structure: 'Áo vạt chéo nẹp viền đỏ son, tay thụng rất rộng rủ dài, thắt đai lưng đỏ son, chất liệu gấm nâu dệt hoa văn tròn cung đình.',
      usage: 'Đại lễ triều chính, thiết triều và nghi thức tế tổ tông miếu thời Hậu Lê - Triều Mạc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="mochaBrocade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#5c3826" />
              <stop offset="40%" stop-color="#452a1e" />
              <stop offset="75%" stop-color="#331c13" />
              <stop offset="100%" stop-color="#1f100a" />
            </linearGradient>
            <linearGradient id="crimsonLapel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="50%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
            <linearGradient id="redSashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#991b1b" />
              <stop offset="40%" stop-color="#ef4444" />
              <stop offset="70%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#7f1d1d" />
            </linearGradient>
          </defs>

          <!-- Áo lót trắng giao lĩnh trong -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Cửa tay lót lụa đỏ son gọn gàng -->
          <polygon points="114,288 148,282 144,296 110,302" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="1" />
          <polygon points="286,288 252,282 256,296 290,302" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="1" />

          <!-- Thân áo Giao Lĩnh gấm nâu đất viền son phom tay chẽn thon gọn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 422 Q 200 432 248 422 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#mochaBrocade)" stroke="#1a0c07" stroke-width="2" />

          <!-- Dải ánh lụa trên tà áo -->
          <path d="M 134 176 L 120 282" stroke="#8d5b41" stroke-width="3.5" fill="none" opacity="0.4" stroke-linecap="round" />
          <path d="M 266 176 L 280 282" stroke="#8d5b41" stroke-width="3.5" fill="none" opacity="0.4" stroke-linecap="round" />

          <!-- Nẹp cổ vạt chéo chữ V đỏ son lót mềm -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="2" />

          <!-- Đai thắt lưng lụa đỏ son & Dải lụa buông dài trước vạt áo -->
          <rect x="150" y="256" width="100" height="16" rx="2" fill="url(#redSashGrad)" stroke="#7f1d1d" stroke-width="1.5" />
          <path d="M 194 272 Q 192 340 190 395 L 202 395 Q 204 340 204 272 Z" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="1.2" />

          <!-- Họa tiết Rồng Mây & Mặt Trời Đoàn Long Lê - Mạc dệt chìm sa kim -->
          <circle cx="200" cy="216" r="22" fill="none" stroke="#eab308" stroke-width="1.6" opacity="0.85" />
          <circle cx="200" cy="216" r="14" fill="none" stroke="#fde047" stroke-width="1" stroke-dasharray="4,2" opacity="0.9" />
          <circle cx="200" cy="216" r="6" fill="#eab308" />
          <circle cx="175" cy="330" r="14" fill="none" stroke="#ca8a04" stroke-width="1.2" opacity="0.6" />
          <circle cx="225" cy="330" r="14" fill="none" stroke="#ca8a04" stroke-width="1.2" opacity="0.6" />
          <circle cx="200" cy="380" r="16" fill="none" stroke="#ca8a04" stroke-width="1.2" opacity="0.6" />

        </svg>
    `)
    },
    {
      id: 'm_top_doikham_nam_haule',
      name: 'Áo Đối Khâm Vàng Be Hoa Lam & Quạt Đen (Hình 2 - Trên)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'male',
      meaning: 'Phong thái tài tử, nho nhã và phóng khoáng của danh sĩ Đại Việt thời Lê - Mạc.',
      story: 'Hình 2 (bên trên): Áo đối khâm xẻ giữa màu vàng be dệt hoa văn lam chìm, bên trong mặc áo lót giao lĩnh xanh lam nhạt, tay cầm quạt nan tre đen phong nhã.',
      structure: 'Áo khoác đối khâm hai vạt thẳng song song, tay thụng rộng, kết hợp áo lót giao lĩnh xanh lam và quạt nan tre đen cầm tay.',
      usage: 'Thường phục quý tộc, dạo chơi ngâm thơ, dạ yến và giao lưu văn nhân.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="wheatSilkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fef3c7" />
              <stop offset="40%" stop-color="#faebd7" />
              <stop offset="75%" stop-color="#e5d5b5" />
              <stop offset="100%" stop-color="#caa97d" />
            </linearGradient>
            <linearGradient id="innerBlueSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#dbeafe" />
              <stop offset="100%" stop-color="#93c5fd" />
            </linearGradient>
          </defs>

          <!-- Áo lót trắng giao lĩnh trong chuẩn mực -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo khoác đối khâm vàng be phom tay chẽn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 422 Q 200 432 248 422 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#wheatSilkGrad)" stroke="#8c6f47" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V vàng be nẹp lụa -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="#caa97d" stroke="#8c6f47" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="#caa97d" stroke="#8c6f47" stroke-width="2" />

          <!-- Hai nẹp vạt đối xứng thẳng tắp nẹp viền lụa đậm sang trọng -->
          <path d="M 186 254 L 186 424 L 174 424 L 174 254 Z" fill="#caa97d" stroke="#8c6f47" stroke-width="1.5" />
          <path d="M 214 254 L 214 424 L 226 424 L 226 254 Z" fill="#caa97d" stroke="#8c6f47" stroke-width="1.5" />

          <!-- Hoa văn mây nước lam thêu chìm nhã nhặn -->
          <circle cx="158" cy="220" r="3.5" fill="#38bdf8" opacity="0.85" />
          <circle cx="242" cy="220" r="3.5" fill="#38bdf8" opacity="0.85" />
          <circle cx="160" cy="320" r="4" fill="#38bdf8" opacity="0.85" />
          <circle cx="240" cy="320" r="4" fill="#38bdf8" opacity="0.85" />
          <circle cx="165" cy="380" r="3.5" fill="#38bdf8" opacity="0.85" />
          <circle cx="235" cy="380" r="3.5" fill="#38bdf8" opacity="0.85" />

          <!-- CHIẾC QUẠT NAN TRE ĐEN CẦM TAY NHO NHÃ -->
          <g transform="translate(226, 230) rotate(20)">
            <path d="M 0 45 L -24 0 A 28 28 0 0 1 24 0 Z" fill="#18181b" stroke="#09090b" stroke-width="1.5" />
            <line x1="0" y1="45" x2="0" y2="0" stroke="#52525b" stroke-width="1.2" />
            <line x1="0" y1="45" x2="-12" y2="5" stroke="#52525b" stroke-width="1" />
            <line x1="0" y1="45" x2="12" y2="5" stroke="#52525b" stroke-width="1" />
            <line x1="0" y1="45" x2="0" y2="60" stroke="#27272a" stroke-width="2.5" />
            <circle cx="0" cy="60" r="2" fill="#fbbf24" />
          </g>

        </svg>
    `)
    },
    {
      id: 'm_top_tayson_nam',
      name: 'Chiến Phục Ngũ Thân Tay Chẽn (Tây Sơn)',
      eraName: 'Triều Tây Sơn (1778 – 1802)',
      eraNumber: 5,
      gender: 'male',
      meaning: 'Sắc đỏ cờ đào quật khởi, ống tay chẽn gọn gàng tối ưu hóa sức mạnh và sự cơ động thần tốc.',
      story: 'Hoàng đế Quang Trung cùng nghĩa quân mặc áo chẽn đỏ thắm cờ đào hành quân thần tốc đại phá quân xâm lược.',
      structure: 'Áo ngũ thân tay chẽn ôm sát cổ tay, vạt áo ngắn qua mông xẻ sườn, thắt đai đỏ sẫm ngang eo.',
      usage: 'Chiến phục hành quân, quân phục và nghi lễ mừng đại thắng.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="taysonCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#b91c1c" />
              <stop offset="45%" stop-color="#991b1b" />
              <stop offset="85%" stop-color="#7f1d1d" />
              <stop offset="100%" stop-color="#450a0a" />
            </linearGradient>
            <linearGradient id="redBeltTayson" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#7f1d1d" />
              <stop offset="40%" stop-color="#dc2626" />
              <stop offset="70%" stop-color="#ef4444" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
          </defs>

          <!-- Áo lót trắng giao lĩnh trong chuẩn mực -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo ngũ thân tay chẽn đỏ thắm cờ đào Tây Sơn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 408 Q 200 418 248 408 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#taysonCrimson)" stroke="#450a0a" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V đỏ thắm Tây Sơn -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="#7f1d1d" stroke="#450a0a" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="#7f1d1d" stroke="#450a0a" stroke-width="2" />

          <!-- 3 Hạt khuy đồng mạ vàng uy dũng -->
          <circle cx="212" cy="180" r="3" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="218" cy="198" r="3" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="224" cy="216" r="3" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />

          <!-- Đai lưng đỏ thắm thắt gọn cơ động -->
          <rect x="150" y="256" width="100" height="16" rx="2" fill="url(#redBeltTayson)" stroke="#7f1d1d" stroke-width="1.5" />
          <path d="M 194 272 Q 192 320 190 355 L 198 355 Q 202 320 202 272 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="1" />

        </svg>
    `)
    },
    {
      id: 'm_top_aotac_nguyen',
      name: 'Áo Tấc Lễ Phục Tay Thụng (Triều Nguyễn)',
      eraName: 'Triều Nguyễn (1802 – 1945)',
      eraNumber: 6,
      gender: 'male',
      meaning: '5 thân áo tượng trưng Tứ thân phụ mẫu và đạo làm người, 5 khuy là Ngũ Thường.',
      story: 'Cuộc cải cách của Chúa Nguyễn Phúc Khoát (1744) và Vua Minh Mạng chuẩn hóa chiếc áo năm thân thống nhất giang sơn.',
      structure: 'Tay áo may thụng rộng bằng tà, cổ đứng cao cài 5 cúc bên phải, dáng điệu uy nghiêm.',
      usage: 'Lễ phục cưới hỏi, tế lễ cung đình và sự kiện trọng đại.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="aotacTealSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#258d89" />
              <stop offset="45%" stop-color="#1b6b68" />
              <stop offset="80%" stop-color="#124a48" />
              <stop offset="100%" stop-color="#092827" />
            </linearGradient>
            <linearGradient id="aotacRedLining" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#7f1d1d" />
            </linearGradient>
          </defs>

          <!-- Áo lót trắng giao lĩnh trong chuẩn mực -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Cửa tay lót lụa đỏ son triều Nguyễn -->
          <polygon points="114,288 148,282 144,296 110,302" fill="url(#aotacRedLining)" stroke="#7f1d1d" stroke-width="1" />
          <polygon points="286,288 252,282 256,296 290,302" fill="url(#aotacRedLining)" stroke="#7f1d1d" stroke-width="1" />

          <!-- Thân Áo Ngũ Thân Triều Nguyễn phom tay chẽn thon gọn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 422 Q 200 432 248 422 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#aotacTealSilk)" stroke="#072221" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V xanh cẩm triều Nguyễn -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="#135250" stroke="#072221" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="#135250" stroke="#072221" stroke-width="2" />

          <!-- Ánh lụa óng mượt -->
          <path d="M 134 176 L 120 282" stroke="#5eead4" stroke-width="3.5" fill="none" opacity="0.35" stroke-linecap="round" />
          <path d="M 266 176 L 280 282" stroke="#5eead4" stroke-width="3.5" fill="none" opacity="0.35" stroke-linecap="round" />
          <path d="M 166 220 Q 162 330 164 416" stroke="#5eead4" stroke-width="3" fill="none" opacity="0.3" />
          <path d="M 234 220 Q 238 330 236 416" stroke="#5eead4" stroke-width="3" fill="none" opacity="0.3" />

          <!-- 5 Khuy cài nách phải tượng trưng Nhân - Lễ - Nghĩa - Trí - Tín -->
          <circle cx="218" cy="182" r="3.2" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="214" cy="208" r="3.2" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="208" cy="234" r="3.2" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />

        </svg>
    `)
    },
    {
      id: 'm_top_cachtan_xxi',
      name: 'Áo Dài Cách Tân Nam (TK XXI)',
      eraName: 'Thế kỷ XXI',
      eraNumber: 7,
      gender: 'male',
      meaning: 'Giao thoa giữa bản sắc văn hóa dân tộc và phong cách thời trang đương đại.',
      story: 'Áo dài cách tân nam trở thành lựa chọn tự hào của thế hệ trẻ trong các dịp lễ tết và ngoại giao quốc tế.',
      structure: 'Cắt may theo phom veston hiện đại giữ vai vuông vức, tà ngắn ngang gối cơ động.',
      usage: 'Lễ cưới, sự kiện ngoại giao văn hóa và đón Tết.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <!-- Áo lót trắng giao lĩnh trong chuẩn mực -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo cách tân phom tay chẽn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 408 Q 200 418 248 408 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="#1e3a5f" stroke="#0f172a" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V xanh navy đương đại -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="#1e3a5f" stroke="#0f172a" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="#1e3a5f" stroke="#0f172a" stroke-width="2" />

          <circle cx="200" cy="230" r="22" fill="none" stroke="#fbbf24" stroke-width="1.8" />
          <polygon points="200,214 204,226 216,230 204,234 200,246 196,234 184,230 196,226" fill="#fbbf24" />
        </svg>
    `)
    },
    {
      id: 'm_top_nguthan_xanhreu_cophong',
      name: 'Áo Ngũ Thân Lụa Thô Xanh Rêu Nhạt (Nam)',
      eraName: 'Thời kỳ Hiện Đại & Cổ Phong Nam Bộ',
      eraNumber: 7,
      gender: 'male',
      meaning: 'Sự thư thái, điềm đạm và cốt cách tao nhã của người nam nhi Việt Nam.',
      story: 'Áo ngũ thân tay thụng dáng suông dệt từ vải thô lụa màu xanh rêu nhạt thanh khiết, đường cúc gài chéo viền xanh đậm tinh tế.',
      structure: 'Thân áo dài quá gối, cổ đứng nẹp viền xanh rêu đậm, khuy vải gài nách phải, vạt xẻ hông cao cử động thoải mái.',
      usage: 'Lễ hội văn hóa, dạo xuân, chụp ảnh di sản và các sự kiện truyền thống.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <!-- Áo lót trắng giao lĩnh trong chuẩn mực -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo ngũ thân xanh rêu phom tay chẽn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 422 Q 200 432 248 422 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="#8ea891" stroke="#3d5240" stroke-width="1.8" />

          <!-- Nẹp cổ vạt chéo chữ V xanh rêu nẹp viền -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="#2d4732" stroke="#1d3021" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="#2d4732" stroke="#1d3021" stroke-width="2" />

          <circle cx="212" cy="180" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="222" cy="198" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="228" cy="218" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <line x1="152" y1="276" x2="152" y2="418" stroke="#3d5240" stroke-width="1.2" />
          <line x1="248" y1="276" x2="248" y2="418" stroke="#3d5240" stroke-width="1.2" />
          <path d="M 168 200 Q 160 300 162 410" stroke="#7a967d" stroke-width="1" fill="none" opacity="0.6" />
          <path d="M 232 200 Q 240 300 238 410" stroke="#7a967d" stroke-width="1" fill="none" opacity="0.6" />
        </svg>
    `)
    },
    {
      id: 'm_top_aodai_bach_lien',
      name: 'Áo Ngũ Thân Cổ Phong Gấm Bạch Liên (Nam)',
      eraName: 'Triều Nguyễn (1802 – 1945)',
      eraNumber: 6,
      gender: 'male',
      meaning: 'Sự tinh khiết, thanh cao như đóa sen nở rộ, giữ trọn cốt cách tao nhã cổ phong.',
      story: 'Thiết kế áo ngũ thân tay chẽn gấm lụa trắng ngà sang trọng, dệt họa tiết chìm bạch liên hoa quý phái.',
      structure: 'Áo cổ đứng, vạt chéo gài khuy đồng bên nách phải, chất liệu lụa cát gấm dệt hoa sen chìm.',
      usage: 'Lễ tết, lễ hội truyền thống và cưới hỏi triều Nguyễn.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="bachLienSilkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="40%" stop-color="#faf7ee" />
              <stop offset="75%" stop-color="#f0ebe0" />
              <stop offset="100%" stop-color="#ded4c3" />
            </linearGradient>
          </defs>

          <!-- Áo lót trắng giao lĩnh trong chuẩn mực -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo ngũ thân gấm cát trắng ngà dệt hoa sen chìm phom tay chẽn -->
          <path d="M 186 164 Q 158 168 134 174 L 114 288 Q 132 284 148 282 Q 150 230 154 256 L 152 438 Q 200 448 248 438 L 246 256 Q 250 230 252 282 Q 268 284 286 288 L 266 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#bachLienSilkGrad)" stroke="#b5a790" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V gấm bạch liên -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="#e2d8c3" stroke="#b5a790" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="#faf7ee" stroke="#b5a790" stroke-width="2" />

          <!-- Ánh lụa trắng ngà sang trọng -->
          <path d="M 134 176 L 120 282" stroke="#ffffff" stroke-width="4" fill="none" opacity="0.6" stroke-linecap="round" />
          <path d="M 266 176 L 280 282" stroke="#ffffff" stroke-width="4" fill="none" opacity="0.6" stroke-linecap="round" />

          <!-- Hạt ngọc sen đỏ son đính điểm xuyết cổ điển -->
          <g fill="#c22c2a" stroke="#eab308" stroke-width="0.8">
            <circle cx="174" cy="200" r="3.2" /> <circle cx="226" cy="200" r="3.2" />
            <circle cx="166" cy="240" r="3.2" /> <circle cx="234" cy="240" r="3.2" />
            <circle cx="176" cy="290" r="3.2" /> <circle cx="224" cy="290" r="3.2" />
            <circle cx="164" cy="340" r="3.2" /> <circle cx="236" cy="340" r="3.2" />
            <circle cx="180" cy="390" r="3.2" /> <circle cx="220" cy="390" r="3.2" />
          </g>

          <!-- Hàng khuy cài nách phải -->
          <circle cx="224" cy="200" r="3.5" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="224" cy="230" r="3.5" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />

        </svg>
    `)
    }
  ],
  bottom: [
    {
      id: 'm_bot_kho_dongson',
      name: 'Quần Thụng Nâu Đồng & Khố Cam 3 Mặt Trời (Văn Lang)',
      eraName: 'Thời kỳ Văn Lang - Âu Lạc',
      eraNumber: 1,
      gender: 'male',
      meaning: 'Sự uy nghiêm của dũng sĩ Lạc Việt với sắc nâu phù sa sông Hồng và 3 vầng thái dương Đông Sơn.',
      story: 'Trang phục lễ nghi thời Hùng Vương với quần thụng ống rộng nẹp chỉ vàng và dải yếm vạt chữ V nhọn thêu 3 mặt trời Đông Sơn.',
      structure: 'Quần thụng lụa màu nâu đồng ánh kim, nẹp viền chỉ vàng hai bên, đai lưng vàng kim và dải khố cam thêu 3 vòng tròn mặt trời.',
      usage: 'Đại lễ phục và hội mùa thời Văn Lang - Âu Lạc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="earthBronzePants" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#6d432e" />
              <stop offset="50%" stop-color="#543322" />
              <stop offset="100%" stop-color="#3b2216" />
            </linearGradient>
            <linearGradient id="orangeSashGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fb923c" />
              <stop offset="50%" stop-color="#ea580c" />
              <stop offset="100%" stop-color="#9a3412" />
            </linearGradient>
          </defs>

          <!-- Quần thụng lụa màu nâu đồng ánh kim buông rủ -->
          <path d="M 158 266 Q 200 274 242 266 L 268 496 L 210 496 L 200 326 L 190 496 L 132 496 Z" fill="url(#earthBronzePants)" stroke="#27150c" stroke-width="2" />
          <line x1="160" y1="276" x2="142" y2="496" stroke="#facc15" stroke-width="2.5" />
          <line x1="240" y1="276" x2="258" y2="496" stroke="#facc15" stroke-width="2.5" />

          <!-- Đai lưng vàng kim và khố cam thêu 3 mặt trời Đông Sơn -->
          <rect x="150" y="260" width="100" height="20" fill="#eab308" stroke="#a16207" stroke-width="1.8" />
          <polygon points="174,276 226,276 220,388 200,412 180,388" fill="url(#orangeSashGrad)" stroke="#7c2d12" stroke-width="2" />
          <polygon points="176,278 224,278 218,386 200,408 182,386" fill="none" stroke="#fde047" stroke-width="1.8" />

          <circle cx="200" cy="302" r="10" fill="#fde047" stroke="#78350f" stroke-width="1.2" />
          <circle cx="200" cy="302" r="5" fill="#ea580c" />
          <circle cx="200" cy="334" r="12" fill="#fde047" stroke="#78350f" stroke-width="1.2" />
          <circle cx="200" cy="334" r="6" fill="#ea580c" />
          <circle cx="200" cy="370" r="14" fill="#fde047" stroke="#78350f" stroke-width="1.2" />
          <circle cx="200" cy="370" r="7" fill="#ea580c" />
        </svg>
    `)
    },
    {
      id: 'm_bot_quan_lua_trang',
      name: 'Quần Lụa Trắng Ống Rộng Phẳng Phiu (Lê - Mạc & Ngô-Đinh-Lê)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'male',
      meaning: 'Sự tinh khôi, chính trực và tao nhã của trang phục truyền thống.',
      story: 'Phục dựng chuẩn mực: Quần lụa đũi trắng hai ống rộng rãi buông rủ phẳng phiu kết hợp cùng áo giao lĩnh thụng thủ nâu.',
      structure: 'Quần ống rộng suông thẳng, cạp chun thoải mái, chất lụa trắng nhẹ nhàng.',
      usage: 'Phối đồ chuẩn mực cho áo giao lĩnh thụng thủ nam.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="whiteSilkFullGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f1f5f9" />
              <stop offset="25%" stop-color="#ffffff" />
              <stop offset="50%" stop-color="#fafaf9" />
              <stop offset="75%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#f1f5f9" />
            </linearGradient>
          </defs>

          <!-- Quần lụa trắng chuẩn kích thước ống thụng Đông Sơn -->
          <path d="M 158 266 Q 200 274 242 266 L 268 496 L 210 496 L 200 326 L 190 496 L 132 496 Z" fill="url(#whiteSilkFullGrad)" stroke="#cbd5e1" stroke-width="1.4" />

          <!-- Nếp gấp và độ bóng lụa tơ tằm hai ống quần buông rủ phẳng phiu -->
          <line x1="160" y1="276" x2="146" y2="494" stroke="#ffffff" stroke-width="2.5" />
          <line x1="172" y1="278" x2="168" y2="494" stroke="#e2e8f0" stroke-width="1.2" />
          <line x1="240" y1="276" x2="254" y2="494" stroke="#ffffff" stroke-width="2.5" />
          <line x1="228" y1="278" x2="232" y2="494" stroke="#e2e8f0" stroke-width="1.2" />
        </svg>
    `)
    },
    {
      id: 'm_bot_quan_lua_lam_haule',
      name: 'Quần Lụa Xanh Lam Nhạt Nam (Hậu Lê - Mạc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'male',
      meaning: 'Sắc lam nhạt thanh nhã, hài hòa cùng tà áo đối khâm vàng be tao nhã.',
      story: 'Quần lụa màu xanh lam nhạt ống suông thoải mái mặc cùng áo đối khâm hoàng triều.',
      structure: 'Quần lụa mềm mại màu xanh lam pastel, ống suông rộng chấm cổ chân, thoải mái cử động.',
      usage: 'Phối đồ chuẩn mực cho áo đối khâm nam thời Lê - Mạc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="blueSilkPantsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#bfdbfe" />
              <stop offset="25%" stop-color="#dbeafe" />
              <stop offset="50%" stop-color="#eff6ff" />
              <stop offset="75%" stop-color="#dbeafe" />
              <stop offset="100%" stop-color="#bfdbfe" />
            </linearGradient>
          </defs>
          <path d="M 158 266 Q 200 274 242 266 L 268 496 L 210 496 L 200 326 L 190 496 L 132 496 Z" fill="url(#blueSilkPantsGrad)" stroke="#93c5fd" stroke-width="1.5" />
          
          <line x1="160" y1="276" x2="146" y2="494" stroke="#ffffff" stroke-width="2" opacity="0.8" />
          <line x1="240" y1="276" x2="254" y2="494" stroke="#ffffff" stroke-width="2" opacity="0.8" />
        </svg>
    `)
    },
    {
      id: 'm_bot_quan_tayson_nam',
      name: 'Quần Túm Gấu Hành Quân (Tây Sơn)',
      eraName: 'Triều Tây Sơn (1778 – 1802)',
      eraNumber: 5,
      gender: 'male',
      meaning: 'Sự dũng mãnh, kỷ luật và gọn gàng cho bước chân hành quân vạn dặm thần tốc.',
      story: 'Quần vải đen dày dặn túm gấu ôm sát ống quyển giúp nghĩa quân Tây Sơn băng đèo vượt núi không vướng bụi gai.',
      structure: 'Quần ống rộng túm gọn ở bắp chân và cổ chân, chất vải lụa thô đen bền chắc.',
      usage: 'Chiến phục hành quân và quân phục Tây Sơn.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="quanTaySonNamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#18181b" />
              <stop offset="35%" stop-color="#27272a" />
              <stop offset="50%" stop-color="#3f3f46" />
              <stop offset="65%" stop-color="#27272a" />
              <stop offset="100%" stop-color="#18181b" />
            </linearGradient>
          </defs>
          <path d="M 158 266 Q 200 274 242 266 L 268 496 L 210 496 L 200 326 L 190 496 L 132 496 Z" fill="url(#quanTaySonNamGrad)" stroke="#09090b" stroke-width="1.8" />
          
          <!-- Nẹp xà cạp túm ống chân chuẩn kích thước -->
          <rect x="150" y="448" width="34" height="46" rx="2" fill="#27272a" stroke="#09090b" stroke-width="1.2" />
          <rect x="216" y="448" width="34" height="46" rx="2" fill="#27272a" stroke="#09090b" stroke-width="1.2" />
          <line x1="150" y1="462" x2="184" y2="462" stroke="#dc2626" stroke-width="1.5" />
          <line x1="150" y1="478" x2="184" y2="478" stroke="#dc2626" stroke-width="1.5" />
          <line x1="216" y1="462" x2="250" y2="462" stroke="#dc2626" stroke-width="1.5" />
          <line x1="216" y1="478" x2="250" y2="478" stroke="#dc2626" stroke-width="1.5" />
        </svg>
    `)
    },
    {
      id: 'm_bot_quantay_xxi',
      name: 'Quần Tây Đen Hiện Đại Nam (TK XXI)',
      eraName: 'Thế kỷ XXI',
      eraNumber: 7,
      gender: 'male',
      meaning: 'Nét lịch lãm, hiện đại của phái mạnh Việt Nam đương đại khi kết hợp cùng áo dài cách tân.',
      story: 'Quần âu đen phom slim-fit đứng dáng kết hợp cùng áo dài cách tân nam tạo nên diện mạo trẻ trung, tự tin.',
      structure: 'Quần tây ống đứng suông phẳng phiu màu đen tuyền, nếp ly ủi thẳng tắp sắc nét.',
      usage: 'Lễ cưới, sự kiện ngoại giao văn hóa và du xuân ngày Tết.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="quanTayDenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#18181b" />
              <stop offset="35%" stop-color="#27272a" />
              <stop offset="50%" stop-color="#3f3f46" />
              <stop offset="65%" stop-color="#27272a" />
              <stop offset="100%" stop-color="#18181b" />
            </linearGradient>
          </defs>
          <path d="M 158 266 Q 200 274 242 266 L 268 496 L 210 496 L 200 326 L 190 496 L 132 496 Z" fill="url(#quanTayDenGrad)" stroke="#09090b" stroke-width="1.6" />
          
          <line x1="161" y1="276" x2="161" y2="494" stroke="#52525b" stroke-width="1.4" />
          <line x1="239" y1="276" x2="239" y2="494" stroke="#52525b" stroke-width="1.4" />
        </svg>
    `)
    },
    {
      id: 'm_bot_quan_ong_rong_trang',
      name: 'Quần Lụa / Thô Trắng Ống Rộng (Nam)',
      eraName: 'Thời kỳ Hiện Đại & Cổ Phong Nam Bộ',
      eraNumber: 7,
      gender: 'male',
      meaning: 'Sự bạch khiết, khoáng đạt và hòa quyện đất trời cùng tà áo dài xanh rêu.',
      story: 'Quần ống rộng vải thô lụa trắng ngà buông rủ phẳng phiu là mảnh ghép hoàn hảo dưới tà áo ngũ thân nam.',
      structure: 'Quần ống suông thẳng cạp thun co giãn, dệt từ lụa tơ tằm trắng ngà tự nhiên.',
      usage: 'Phối đồ chuẩn mực cho áo ngũ thân và áo dài nam.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="mWhitePantsThoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f8fafc" />
              <stop offset="30%" stop-color="#ffffff" />
              <stop offset="50%" stop-color="#fafaf9" />
              <stop offset="70%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#f1f5f9" />
            </linearGradient>
          </defs>
          <path d="M 158 266 Q 200 274 242 266 L 268 496 L 210 496 L 200 326 L 190 496 L 132 496 Z" fill="url(#mWhitePantsThoGrad)" stroke="#cbd5e1" stroke-width="1.4" />
          
          <line x1="160" y1="276" x2="146" y2="494" stroke="#ffffff" stroke-width="2.5" />
          <line x1="240" y1="276" x2="254" y2="494" stroke="#ffffff" stroke-width="2.5" />
          <line x1="172" y1="278" x2="168" y2="494" stroke="#e2e8f0" stroke-width="1.2" />
          <line x1="228" y1="278" x2="232" y2="494" stroke="#e2e8f0" stroke-width="1.2" />
        </svg>
    `)
    },
    {
      id: 'm_bot_quan_ong_rong_bach_lien',
      name: 'Quần Lụa Trắng Gấm Bạch Liên Nam (Triều Nguyễn)',
      eraName: 'Triều Nguyễn (1802 – 1945)',
      eraNumber: 6,
      gender: 'male',
      meaning: 'Sự tinh khiết, nhẹ nhàng và khoáng đạt dưới chân tà áo ngũ thân gấm cát.',
      story: 'Phục dựng theo tỉ lệ nhân vật: Quần lụa trắng hai ống rộng suông phẳng phiu lót mềm, kết hợp cùng áo ngũ thân trắng.',
      structure: 'Quần hai ống suông thẳng dệt từ lụa trắng mịn màng, độ dài chấm mắt cá chân.',
      usage: 'Phối đồ chuẩn mực cho áo ngũ thân gấm bạch liên nam.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="bachLienGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f8fafc" />
              <stop offset="25%" stop-color="#ffffff" />
              <stop offset="50%" stop-color="#fafaf9" />
              <stop offset="75%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#f1f5f9" />
            </linearGradient>
          </defs>
          <path d="M 158 266 Q 200 274 242 266 L 268 496 L 210 496 L 200 326 L 190 496 L 132 496 Z" fill="url(#bachLienGrad)" stroke="#cbd5e1" stroke-width="1.4" />
          
          <line x1="160" y1="276" x2="146" y2="494" stroke="#ffffff" stroke-width="2.5" />
          <line x1="240" y1="276" x2="254" y2="494" stroke="#ffffff" stroke-width="2.5" />
          <line x1="172" y1="278" x2="168" y2="494" stroke="#e2e8f0" stroke-width="1.2" />
          <line x1="228" y1="278" x2="232" y2="494" stroke="#e2e8f0" stroke-width="1.2" />
        </svg>
    `)
    }
  ],
  shoes: [
    {
      id: 'm_shoe_chan_tran',
      name: 'Chân Trần Sông Nước (Văn Lang)',
      eraName: 'Thời kỳ Văn Lang - Âu Lạc',
      eraNumber: 1,
      gender: 'male',
      meaning: 'Tiếp xúc trực tiếp với đất mẹ và sông nước, tối ưu hóa độ bám.',
      story: 'Hình ảnh chiến binh cổ bơi lặn đánh cá trên sông Hồng nguyên sơ.',
      structure: 'Bàn chân trần vững chãi trên mặt đất.',
      usage: 'Sinh hoạt nông nghiệp và sông nước.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
        </svg>
      `)
    },
    {
      id: 'm_shoe_giay_den_haule',
      name: 'Giày Vải Đen Nam Lê - Mạc',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'male',
      meaning: 'Sự giản dị, đoan trang và bước đi vững chãi của nam nhi Đại Việt.',
      story: 'Đôi giày vải đen mũi tròn đế bệt mềm mại may tay, phối hợp hài hòa cùng áo giao lĩnh thụng thủ và quần lụa trắng.',
      structure: 'Mũi tròn thon gọn vải nhung/dạ đen, đế vải may tay màu trắng êm ái.',
      usage: 'Lễ phục và thường phục trang trọng.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 146 502 142 519 Q 164 524 188 519 L 188 484 Z" fill="#18181b" stroke="#09090b" stroke-width="1.8" />
          <path d="M 142 519 L 188 519" stroke="#ffffff" stroke-width="2" />
          <path d="M 212 484 L 212 519 Q 236 524 258 519 Q 254 502 234 484 Z" fill="#18181b" stroke="#09090b" stroke-width="1.8" />
          <path d="M 212 519 L 258 519" stroke="#ffffff" stroke-width="2" />
        </svg>
      `)
    },
    {
      id: 'm_shoe_hai_lam_haule',
      name: 'Hài Lụa Xanh Lam Thêu Hoa (Hậu Lê - Mạc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'male',
      meaning: 'Phong thái nho nhã, đồng điệu tuyệt mỹ cùng tà áo đối khâm vàng be và quần lam.',
      story: 'Đôi hài lụa xanh lam mũi tròn viền trắng thêu họa tiết hoa lá nhã nhặn, bước đi êm ái nhẹ nhàng.',
      structure: 'Hài vải lụa xanh pastel, viền nẹp trắng, mu thêu chỉ tơ hoa trắng thanh nhã.',
      usage: 'Phối đồ chuẩn mực cho áo đối khâm nam.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 146 502 142 519 Q 164 524 188 519 L 188 484 Z" fill="#93c5fd" stroke="#60a5fa" stroke-width="1.8" />
          <path d="M 144 516 Q 155 510 166 516" stroke="#ffffff" stroke-width="1.5" fill="none" />
          <circle cx="155" cy="512" r="1.8" fill="#ffffff" />
          <path d="M 212 484 L 212 519 Q 236 524 258 519 Q 254 502 234 484 Z" fill="#93c5fd" stroke="#60a5fa" stroke-width="1.8" />
          <path d="M 234 516 Q 245 510 256 516" stroke="#ffffff" stroke-width="1.5" fill="none" />
          <circle cx="245" cy="512" r="1.8" fill="#ffffff" />
        </svg>
      `)
    },
    {
      id: 'm_shoe_hia_den_vientrang',
      name: 'Hia Đen Cổ Cao Viền Trắng (Bắc Thuộc & Triều Nguyễn)',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'male',
      meaning: 'Sự uy nghiêm, phong cốt chính trực của quan lại và hào kiệt Đại Việt.',
      story: 'Đôi hia cổ cao da then đen viền chỉ trắng tinh tế, mũi hơi uốn cong lên, đế da vững chãi.',
      structure: 'Hia cổ cao qua mắt cá, chất liệu da đen tuyền viền chỉ trắng, đế cứng trang nghiêm.',
      usage: 'Lễ phục triều đình thời Ngô-Đinh-Lê và triều Nguyễn.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 470 L 166 484 Q 146 502 140 519 Q 164 524 188 519 L 188 470 Z" fill="#0f172a" stroke="#020617" stroke-width="2" />
          <path d="M 140 519 L 188 519" stroke="#ffffff" stroke-width="2.5" />
          <path d="M 166 472 L 188 472" stroke="#ffffff" stroke-width="1.8" />
          <path d="M 212 470 L 212 484 L 212 519 Q 236 524 260 519 Q 254 502 234 484 L 234 470 Z" fill="#0f172a" stroke="#020617" stroke-width="2" />
          <path d="M 212 519 L 260 519" stroke="#ffffff" stroke-width="2.5" />
          <path d="M 212 472 L 234 472" stroke="#ffffff" stroke-width="1.8" />
        </svg>
      `)
    },
    {
      id: 'm_shoe_hai_gam_lytran',
      name: 'Hài Gấm Mũi Cong Da Nâu Đen (Lý - Trần)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'male',
      meaning: 'Cốt cách thanh nhã của bậc nho gia và quý tộc Thăng Long thời Lý - Trần.',
      story: 'Đôi hài gấm cổ truyền mũi cong nhẹ lên như đóa hoa sen, đế da bò mềm mại khâu thủ công.',
      structure: 'Mũi hài cong nhẹ hình búp sen, chất liệu gấm nâu đen/xanh thẫm, đế khâu tay êm ái.',
      usage: 'Phối đồ chuẩn mực cho áo viên lĩnh và áo tứ điên nam thời Lý - Trần.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 144 500 138 516 Q 146 512 152 516 Q 166 522 188 519 L 188 484 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.8" />
          <path d="M 138 516 Q 142 506 150 512" stroke="#fbbf24" stroke-width="1.2" fill="none" />
          <path d="M 212 484 L 212 519 Q 234 522 248 516 Q 254 512 262 516 Q 256 500 234 484 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.8" />
          <path d="M 262 516 Q 258 506 250 512" stroke="#fbbf24" stroke-width="1.2" fill="none" />
        </svg>
      `)
    },
    {
      id: 'm_shoe_giay_vai_tayson',
      name: 'Giày Vải Bền Chắc Nghĩa Quân (Tây Sơn)',
      eraName: 'Triều Tây Sơn (1778 – 1802)',
      eraNumber: 5,
      gender: 'male',
      meaning: 'Sự dẻo dai phi thường, bước chân không mỏi trên đường hành quân thần tốc mùa xuân Kỷ Dậu.',
      story: 'Giày vải thô đen viền đỏ bện chặt ôm sát mu bàn chân, đế bện mềm dẻo giúp bước đi êm và nhanh.',
      structure: 'Vải thô đen dày dặn viền chỉ đỏ, cổ thấp buộc dây gọn gàng, đế bện sợi tự nhiên dẻo dai.',
      usage: 'Chiến phục hành quân và quân phục dũng mãnh.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 146 502 142 519 Q 164 524 188 519 L 188 484 Z" fill="#27272a" stroke="#18181b" stroke-width="1.8" />
          <path d="M 142 519 L 188 519" stroke="#b91c1c" stroke-width="2" />
          <path d="M 148 510 L 160 510" stroke="#dc2626" stroke-width="1.2" />
          <path d="M 212 484 L 212 519 Q 236 524 258 519 Q 254 502 234 484 Z" fill="#27272a" stroke="#18181b" stroke-width="1.8" />
          <path d="M 212 519 L 258 519" stroke="#b91c1c" stroke-width="2" />
          <path d="M 240 510 L 252 510" stroke="#dc2626" stroke-width="1.2" />
        </svg>
      `)
    },
    {
      id: 'm_shoe_giay_tay_xxi',
      name: 'Giày Da Tây Đen Hiện Đại (TK XXI)',
      eraName: 'Thế kỷ XXI',
      eraNumber: 7,
      gender: 'male',
      meaning: 'Vẻ sang trọng, thanh lịch chuẩn mực của quý ông thời đại mới khi kết hợp cùng áo dài cách tân.',
      story: 'Giày da tây đen bóng mũi nhọn thanh thoát là sự kết hợp hoàn hảo cùng áo dài cách tân và quần âu.',
      structure: 'Da bóng màu đen tuyền, mũi hơi nhọn lịch lãm, đế da có gót nhẹ.',
      usage: 'Lễ cưới, sự kiện ngoại giao văn hóa và đón Tết đương thời.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 142 500 136 518 Q 164 524 188 519 L 188 484 Z" fill="#09090b" stroke="#000" stroke-width="1.8" />
          <path d="M 142 514 Q 155 510 168 514" stroke="#52525b" stroke-width="1.2" fill="none" />
          <path d="M 212 484 L 212 519 Q 236 524 264 518 Q 258 500 234 484 Z" fill="#09090b" stroke="#000" stroke-width="1.8" />
          <path d="M 232 514 Q 245 510 258 514" stroke="#52525b" stroke-width="1.2" fill="none" />
        </svg>
      `)
    },
    {
      id: 'm_shoe_giay_tay_bach_lien',
      name: 'Giày Tây Da Đen Lịch Lãm (Nam)',
      eraName: 'Triều Nguyễn (1802 – 1945)',
      eraNumber: 6,
      gender: 'male',
      meaning: 'Sự chỉn chu, trang nghiêm đầy nam tính khi đi cùng Áo ngũ thân gấm cát trắng.',
      story: 'Mẫu giày tây oxford bằng da đen bóng mờ, ôm khít bàn chân tạo phong cách nho nhã, trang trọng.',
      structure: 'Chất liệu da cao cấp màu đen tuyền bóng mờ cổ điển, ôm khít mu bàn chân cứng cáp.',
      usage: 'Lễ cưới, sự kiện trọng đại và kết hợp cùng áo ngũ thân nam gấm bạch liên.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 162 485 Q 146 502 144 520 Q 162 525 186 520 L 186 485 Z" fill="#18181b" stroke="#09090b" stroke-width="1.8" />
          <path d="M 148 514 Q 158 506 168 514" stroke="#3f3f46" stroke-width="1.4" fill="none" />
          <path d="M 214 485 L 214 520 Q 238 525 256 520 Q 254 502 238 485 Z" fill="#18181b" stroke="#09090b" stroke-width="1.8" />
          <path d="M 232 514 Q 242 506 252 514" stroke="#3f3f46" stroke-width="1.4" fill="none" />
        </svg>
      `)
    }
  ]
};

// FEMALE WARDROBE DATA (TỦ ĐỒ NỮ)
export const FEMALE_WARDROBE_DATA: GenderWardrobe = {
  hat: [
    {
      id: 'f_hat_longchim',
      name: 'Vương Miện Lạc Nữ 5 Chóp Viền Bạc Đính Ngọc (Văn Lang)',
      eraName: 'Thời kỳ Văn Lang - Âu Lạc',
      eraNumber: 1,
      gender: 'female',
      meaning: 'Vẻ đẹp rạng ngời, thanh tú và quyền quý của Mị Nương con gái vua Hùng.',
      story: 'Mô phỏng hình tượng các nữ tư tế, vũ nữ múa hội mùa trên trống đồng Đông Sơn.',
      structure: 'Vương miện vàng hoàng kim 5 chóp nhọn xòe cánh viền bạc, đính các hạt ngọc ruby đỏ sang quý, tỷ lệ thanh tú vừa khít vòng đầu nữ.',
      usage: 'Đại lễ phục và hội mùa thời Văn Lang - Âu Lạc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="femCrownGold" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#d97706" />
              <stop offset="40%" stop-color="#facc15" />
              <stop offset="70%" stop-color="#fef08a" />
              <stop offset="100%" stop-color="#ffffff" />
            </linearGradient>
            <linearGradient id="femCrownSide" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#b45309" />
              <stop offset="50%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#fef08a" />
            </linearGradient>
          </defs>

          <!-- 5 Chóp Vương Miện Lạc Nữ Tỷ Lệ Thanh Tú, Vừa Vặn Ôm Khít Trán Nữ -->
          <!-- Chóp 1 (Ngoài trái) -->
          <polygon points="165,81 168,57 175,60 177,80" fill="url(#femCrownSide)" stroke="#92400e" stroke-width="1.3" stroke-linejoin="round" />
          
          <!-- Chóp 2 (Trái giữa) -->
          <polygon points="175,80 180,45 189,48 188,79" fill="url(#femCrownGold)" stroke="#92400e" stroke-width="1.4" stroke-linejoin="round" />
          
          <!-- Chóp 3 (Chính giữa vươn cao thanh nhã) -->
          <polygon points="187,79 196,35 204,35 213,79" fill="url(#femCrownGold)" stroke="#92400e" stroke-width="1.5" stroke-linejoin="round" />
          
          <!-- Chóp 4 (Phải giữa) -->
          <polygon points="212,79 211,48 220,45 225,80" fill="url(#femCrownGold)" stroke="#92400e" stroke-width="1.4" stroke-linejoin="round" />
          
          <!-- Chóp 5 (Ngoài phải) -->
          <polygon points="223,80 225,60 232,57 235,81" fill="url(#femCrownSide)" stroke="#92400e" stroke-width="1.3" stroke-linejoin="round" />

          <!-- Vành đai vương miện mạ vàng viền ngọc bạc ôm khít trán nữ -->
          <path d="M 164 80 Q 200 86 236 80 L 236 89 Q 200 95 164 89 Z" fill="url(#femCrownGold)" stroke="#92400e" stroke-width="1.6" stroke-linejoin="round" />
          <path d="M 165 83 Q 200 89 235 83" stroke="#ffffff" stroke-width="1.1" fill="none" opacity="0.9" />

          <!-- Hạt ngọc Ruby & Ngọc Bích sang quý -->
          <circle cx="200" cy="43" r="3" fill="#e11d48" stroke="#881337" stroke-width="0.9" />
          <circle cx="200" cy="42" r="0.9" fill="#ffffff" />
          
          <circle cx="185" cy="52" r="2.4" fill="#e11d48" stroke="#881337" stroke-width="0.7" />
          <circle cx="215" cy="52" r="2.4" fill="#e11d48" stroke="#881337" stroke-width="0.7" />
          
          <circle cx="171" cy="63" r="2" fill="#e11d48" stroke="#881337" stroke-width="0.6" />
          <circle cx="229" cy="63" r="2" fill="#e11d48" stroke="#881337" stroke-width="0.6" />

          <!-- Chuỗi hạt ngọc trai thanh nhã trên vành trán -->
          <circle cx="174" cy="84" r="1.4" fill="#ffffff" stroke="#92400e" stroke-width="0.5" />
          <circle cx="187" cy="86" r="1.4" fill="#ffffff" stroke="#92400e" stroke-width="0.5" />
          <circle cx="200" cy="87" r="2" fill="#e11d48" stroke="#881337" stroke-width="0.7" />
          <circle cx="213" cy="86" r="1.4" fill="#ffffff" stroke="#92400e" stroke-width="0.5" />
          <circle cx="226" cy="84" r="1.4" fill="#ffffff" stroke="#92400e" stroke-width="0.5" />
        </svg>
      `)
    },
    {
      id: 'f_hat_tram_tuongvan',
      name: 'Trâm Phượng Hoàng Ngọc Bích & Chuỗi Ngọc Trai Cung Đình (Ngô - Đinh - Tiền Lê)',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'female',
      meaning: 'Vẻ đẹp kiêu sa, quyền quý của bậc phu nhân, công chúa với trâm cài tóc phượng hoàng ngọc bích đính ngọc trai.',
      story: 'Phục dựng theo nguyên mẫu trâm cài tóc quý tộc thời Đinh - Tiền Lê: Thân trâm bằng vàng uốn hình phượng hoàng ngậm hoa, mắt đính hồng ngọc, chuỗi hạt ngọc trai rủ mềm mại bên tai.',
      structure: 'Trâm vàng hình phượng hoàng cài nghiêng mái tóc búi cao, rủ chuỗi châu ngọc thanh nhã lung linh.',
      usage: 'Đại lễ phục cung đình, yến tiệc hoàng triều thời Ngô - Đinh - Tiền Lê.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="goldPhoenixPin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="40%" stop-color="#fde047" />
              <stop offset="80%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#a16207" />
            </linearGradient>
          </defs>
          <!-- Búi tóc vấn cao đài các -->
          <ellipse cx="200" cy="72" rx="40" ry="22" fill="#0f172a" stroke="#000" stroke-width="1.8" />
          <!-- Thân trâm Phượng Hoàng vàng kim sa -->
          <path d="M 152 50 Q 185 62 238 68" stroke="url(#goldPhoenixPin)" stroke-width="3.5" stroke-linecap="round" fill="none" />
          <!-- Đầu phượng hoàng ngọc bích -->
          <path d="M 154 50 Q 142 42 148 35 Q 158 36 160 48 Z" fill="url(#goldPhoenixPin)" stroke="#854d0e" stroke-width="1.2" />
          <!-- Mắt đính ngọc Ruby đỏ -->
          <circle cx="150" cy="42" r="1.8" fill="#e11d48" />
          <!-- Mào phượng hoàng và cánh xòe hoa văn tường vân -->
          <path d="M 148 35 Q 142 26 148 24 Q 152 28 152 35" fill="url(#goldPhoenixPin)" stroke="#854d0e" stroke-width="1" />
          <path d="M 154 36 Q 156 22 162 25 Q 160 32 158 38" fill="url(#goldPhoenixPin)" stroke="#854d0e" stroke-width="1" />
          <!-- Chuỗi hạt ngọc trai rủ mềm mại bên tai phải -->
          <circle cx="236" cy="74" r="2.2" fill="#ffffff" stroke="#94a3b8" stroke-width="0.6" />
          <circle cx="237" cy="82" r="2.4" fill="#ffffff" stroke="#94a3b8" stroke-width="0.6" />
          <circle cx="238" cy="90" r="2.6" fill="#10b981" stroke="#047857" stroke-width="0.8" />
          <circle cx="239" cy="99" r="2.2" fill="#ffffff" stroke="#94a3b8" stroke-width="0.6" />
          <polygon points="239,106 236,114 242,114" fill="#fde047" stroke="#854d0e" stroke-width="0.8" />
        </svg>
    `)
    },
    {
      id: 'f_hat_tram_cai_lytran',
      name: 'Trâm Cài Hoa Sen Vàng & Khăn Vấn Lụa (Lý - Trần)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'female',
      meaning: 'Nét đài các, thanh tịnh như hoa sen nở giữa chốn hoàng thành Thăng Long.',
      story: 'Các công chúa, cung phi thời Lý - Trần vấn tóc cao, cài trâm hoa sen bằng vàng ròng đính hạt ngọc bội.',
      structure: 'Búi tóc tròn gọn ghẽ quấn lụa then đen, cắm trâm hoa sen vàng 5 cánh tỏa sáng.',
      usage: 'Đại lễ cung đình và hội hoa đăng Phật giáo.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <ellipse cx="200" cy="74" rx="42" ry="24" fill="#0f172a" stroke="#000" stroke-width="1.8" />
          <path d="M 166 80 Q 200 70 234 80 L 234 90 Q 200 80 166 90 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2" />
          <line x1="160" y1="58" x2="240" y2="74" stroke="#eab308" stroke-width="2.5" />
          <circle cx="160" cy="58" r="6" fill="#fbbf24" stroke="#a16207" stroke-width="1.2" />
          <circle cx="160" cy="58" r="2.5" fill="#ef4444" />
          <path d="M 194 58 C 196 48, 204 48, 206 58 Z" fill="#fde047" stroke="#ca8a04" stroke-width="1" />
          <circle cx="200" cy="64" r="3" fill="#fde047" />
        </svg>
      `)
    },
    {
      id: 'f_hat_quai_thao',
      name: 'Nón Quai Thao Ba Tầm (Hậu Lê - Mạc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Nét duyên dáng, e ấp của thiếu nữ Kinh Bắc trong câu ca quan họ.',
      story: 'Chiếc nón che mát cho các liền chị đi trẩy hội Lim bên câu "Người ơi người ở đừng về".',
      structure: 'Nón tròn dẹt đường kính lớn, đội nghiêng nhẹ sau búi tóc, hai bên đính dải quai thao bằng tơ vàng buông dài.',
      usage: 'Hội Lim, du xuân và cưới hỏi cổ truyền.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <!-- Dải quai thao tơ vàng buông tha thướt hai bên mang tai (không che mắt) -->
          <path d="M 148 88 Q 142 160 176 208 Q 190 226 193 242 Q 188 244 184 230 Q 154 190 140 108 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1.2" />
          <path d="M 252 88 Q 258 160 224 208 Q 210 226 207 242 Q 212 244 216 230 Q 246 190 260 108 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1.2" />
          <!-- Vành nón đội nghiêng sau đầu, để lộ hoàn toàn trán, lông mày và mắt -->
          <ellipse cx="200" cy="74" rx="68" ry="16" fill="#ca8a04" stroke="#854d0e" stroke-width="1.5" />
          <path d="M 132 72 L 132 58 Q 200 48 268 58 L 268 72 Q 200 84 132 72 Z" fill="#fde047" stroke="#a16207" stroke-width="2" />
          <ellipse cx="200" cy="58" rx="68" ry="14" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
        </svg>
      `)
    },
    {
      id: 'f_hat_moqua_doibong_do',
      name: 'Khăn Mỏ Quạ Đen Lót Đỏ Đính 2 Quả Bông Đỏ (Kinh Bắc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Khuôn mặt búp sen e ấp, biểu tượng nét duyên thầm dịu dàng của người con gái quan họ Kinh Bắc.',
      story: 'Khăn lụa vuông đen gấp chéo tam giác tạo hình mỏ quạ nhọn giữa trán, lót viền lụa đỏ son và đính 2 quả bông đỏ tươi rủ hai bên mang tai duyên dáng.',
      structure: 'Vải lụa đen tuyền nẹp viền lụa đỏ thắm ôm sát đầu, chóp mỏ quạ dừng thanh thoát trên trán trên lông mày, hai đầu khăn thắt nút đính 2 quả bông len đỏ tròn xoe.',
      usage: 'Trang phục lễ hội trẩy hội xuân, hát quan họ và ngày cưới hỏi truyền thống.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <!-- Vành khăn mỏ quạ đen ôm đầu tạo chóp nhọn duyên dáng trên trán (đặt trên lông mày, không che mắt) -->
          <path d="M 156 88 C 154 46, 246 46, 244 88 C 244 96, 230 94, 200 96 C 170 94, 156 96, 156 88 Z" fill="#18181b" stroke="#09090b" stroke-width="1.8" />
          <!-- Viền nẹp lót màu đỏ thắm bên trong mép trán -->
          <path d="M 166 82 Q 200 94 234 82" stroke="#dc2626" stroke-width="2.2" fill="none" />
          <!-- Vành khăn mỏ quạ đen tạo góc nhọn chữ V đài các trên trán -->
          <path d="M 164 80 Q 200 94 236 80 L 242 86 Q 200 98 158 86 Z" fill="#18181b" stroke="#09090b" stroke-width="1.2" />
          <!-- Nếp gấp khăn ôm sát đầu ra sau gáy -->
          <path d="M 154 88 C 146 108, 144 138, 156 166 C 150 160, 146 128, 150 92 Z" fill="#09090b" opacity="0.95" />
          <path d="M 246 88 C 254 108, 256 138, 244 166 C 250 160, 254 128, 250 92 Z" fill="#09090b" opacity="0.95" />
          <!-- Hai quả bông tròn màu đỏ thắm rủ hai bên thái dương -->
          <line x1="154" y1="163" x2="152" y2="171" stroke="#09090b" stroke-width="2" />
          <circle cx="152" cy="178" r="7" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" />
          <circle cx="150" cy="176" r="2.5" fill="#f87171" opacity="0.8" />
          <line x1="246" y1="163" x2="248" y2="171" stroke="#09090b" stroke-width="2" />
          <circle cx="248" cy="178" r="7" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" />
          <circle cx="246" cy="176" r="2.5" fill="#f87171" opacity="0.8" />
        </svg>
      `)
    },
    {
      id: 'f_hat_khan_tayson',
      name: 'Khăn Lụa Đỏ Quấn Đầu Nữ Binh (Tây Sơn)',
      eraName: 'Triều Tây Sơn (1778 – 1802)',
      eraNumber: 5,
      gender: 'female',
      meaning: 'Sự quật khởi kiên cường của nữ tướng Bùi Thị Xuân và đội nữ binh dũng cảm thời Tây Sơn.',
      story: 'Dải khăn lụa đỏ thắm quấn gọn gàng quanh đầu giữ nếp tóc búi cao vững chãi, buông nhẹ hai dải lụa mềm mại.',
      structure: 'Khăn lụa màu đỏ thắm quấn ôm trán và búi tóc, nếp quấn gọn gàng thanh tú.',
      usage: 'Quân phục nữ binh và lễ hội hào khí Tây Sơn.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 164 80 Q 200 70 236 80 L 234 94 Q 200 84 166 94 Z" fill="#b91c1c" stroke="#991b1b" stroke-width="1.5" />
          <path d="M 165 83 Q 200 74 235 83" stroke="#dc2626" stroke-width="1.5" fill="none" />
          <ellipse cx="200" cy="54" rx="20" ry="12" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.2" />
          <path d="M 230 86 Q 248 102 246 132 Q 240 136 238 130 Q 240 106 228 92 Z" fill="#dc2626" stroke="#b91c1c" stroke-width="0.8" />
        </svg>
      `)
    },
    {
      id: 'f_hat_vanhday_nguyen',
      name: 'Khăn Vành Dây Hoàng Kim Cung Đình Huế (Triều Nguyễn)',
      eraName: 'Triều Nguyễn (1802 – 1945)',
      eraNumber: 6,
      gender: 'female',
      meaning: 'Đỉnh cao sự quyền quý, tôn nghiêm của bậc Hoàng thái hậu, Hoàng hậu và công chúa triều Nguyễn.',
      story: 'Khăn vành dây quấn nhiều vòng lụa vàng hoàng kim/sa vàng óng ánh quanh đầu, tạo vầng hào quang đài các cho bậc mẫu nghi thiên hạ.',
      structure: 'Khăn vải lụa vàng hoàng kim dệt hoa văn chữ thọ/rồng mây, quấn tròn từ 15-25 vòng mở rộng dần lên đỉnh đầu.',
      usage: 'Đại triều phục, lễ sách lập hoàng hậu và đại hôn cung đình Huế.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <!-- Các lớp vành khăn quấn nhiều tầng màu vàng hoàng kim óng ả -->
          <ellipse cx="200" cy="70" rx="54" ry="24" fill="#ca8a04" stroke="#854d0e" stroke-width="1.6" />
          <ellipse cx="200" cy="67" rx="50" ry="22" fill="#eab308" stroke="#a16207" stroke-width="1.4" />
          <ellipse cx="200" cy="64" rx="46" ry="20" fill="#facc15" stroke="#ca8a04" stroke-width="1.2" />
          <ellipse cx="200" cy="61" rx="42" ry="18" fill="#fde047" stroke="#eab308" stroke-width="1" />
          <ellipse cx="200" cy="58" rx="36" ry="15" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
          <!-- Vành khăn ôm trán tinh tế -->
          <path d="M 166 80 Q 200 70 234 80 L 232 90 Q 200 80 168 90 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2" />
          <circle cx="200" cy="80" r="3.2" fill="#dc2626" />
        </svg>
      `)
    },
    {
      id: 'f_hat_non_la_nu_hoa_sen',
      name: 'Nón Lá Truyền Thống & Trâm Cài Hoa Sen Ngọc (Nữ)',
      eraName: 'Thời kỳ Hiện Đại & Cổ Phong Nam Bộ',
      eraNumber: 7,
      gender: 'female',
      meaning: 'Biểu tượng nghiêng che dịu dàng của người con gái Việt Nam cùng đóa hoa sen ngọc trắng thanh tao.',
      story: 'Nón lá tre đan nếp tỉ mỉ, đính trâm hoa sen ngọc bích trắng cài bên vành nón duyên dáng.',
      structure: 'Mặt nón lá vút chóp nhọn lá buông mượt mà, vành trong cắm trâm hoa sen trắng đính tua rua ngọc bích.',
      usage: 'Lễ hội du xuân, chụp ảnh di sản và cưới hỏi.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <!-- Quai nón lụa hồng thắm rủ mềm mại ôm qua cằm -->
          <path d="M 148 90 Q 200 138 252 90" stroke="#f43f5e" stroke-width="2.5" fill="none" opacity="0.85" />
          <path d="M 148 90 Q 200 138 252 90" stroke="#fecdd3" stroke-width="1" fill="none" opacity="0.9" />
          <!-- Thân nón lá tre hạ thấp vừa vặn trùm ôm chóp đầu & búi tóc nữ -->
          <path d="M 124 90 L 200 38 L 276 90 Q 200 100 124 90 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8" />
          <path d="M 132 88 L 200 42 L 268 88 Q 200 96 132 88 Z" fill="#facc15" opacity="0.35" />
          <!-- Các đường nan tre vút chóp -->
          <line x1="200" y1="38" x2="148" y2="92" stroke="#ca8a04" stroke-width="0.8" opacity="0.7" />
          <line x1="200" y1="38" x2="172" y2="95" stroke="#ca8a04" stroke-width="0.8" opacity="0.7" />
          <line x1="200" y1="38" x2="200" y2="96" stroke="#ca8a04" stroke-width="1" opacity="0.8" />
          <line x1="200" y1="38" x2="228" y2="95" stroke="#ca8a04" stroke-width="0.8" opacity="0.7" />
          <line x1="200" y1="38" x2="252" y2="92" stroke="#ca8a04" stroke-width="0.8" opacity="0.7" />
          <!-- Vành nón lá đan vòng -->
          <ellipse cx="200" cy="90" rx="76" ry="12" fill="none" stroke="#a16207" stroke-width="1.2" />
          <ellipse cx="200" cy="78" rx="58" ry="9" fill="none" stroke="#ca8a04" stroke-width="0.8" opacity="0.6" />
          <ellipse cx="200" cy="64" rx="38" ry="6" fill="none" stroke="#ca8a04" stroke-width="0.8" opacity="0.6" />
          <ellipse cx="200" cy="50" rx="20" ry="4" fill="none" stroke="#ca8a04" stroke-width="0.8" opacity="0.6" />
          <!-- Đóa hoa sen ngọc bích đính bên vành nón -->
          <g transform="translate(248, 92)">
            <circle cx="0" cy="0" r="7" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
            <path d="M -5 -2 C -2 -8, 2 -8, 5 -2 C 2 4, -2 4, -5 -2 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.8" />
            <circle cx="0" cy="0" r="2.5" fill="#facc15" />
            <line x1="0" y1="7" x2="0" y2="24" stroke="#22c55e" stroke-width="1.5" />
            <circle cx="0" cy="25" r="2" fill="#fef08a" />
          </g>
        </svg>
      `)
    }
  ],
  top: [
    {
      id: 'f_top_yem_dongson',
      name: 'Áo Sát Nách Đỏ Thêu Trống Đồng (Văn Lang)',
      eraName: 'Thời kỳ Văn Lang - Âu Lạc',
      eraNumber: 1,
      gender: 'female',
      meaning: 'Sắc son son rỗi uy quyền và vầng thái dương Đông Sơn mang lại sinh khí dồi dào.',
      story: 'Trang phục lễ phục của các bậc vương phi, con gái vua Hùng trong các kỳ tế lễ trời đất.',
      structure: 'Áo sát nách màu đỏ tươi dáng ôm thon gọn tôn đường cong eo nữ, trước ngực thêu vầng mặt trời trống đồng Đông Sơn rực rỡ.',
      usage: 'Đại lễ phục cung đình và hội mùa thời Văn Lang - Âu Lạc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="femYemCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f87171" />
              <stop offset="35%" stop-color="#ef4444" />
              <stop offset="70%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
            <radialGradient id="femSunburstGold" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="45%" stop-color="#fde047" />
              <stop offset="80%" stop-color="#facc15" />
              <stop offset="100%" stop-color="#ca8a04" />
            </radialGradient>
          </defs>

          <!-- Cổ đứng thấp đỏ son lót mềm -->
          <path d="M 188 150 Q 200 155 212 150 L 212 156 Q 200 161 188 156 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.2" />
          
          <!-- Thân áo sát nách đỏ tươi ôm sát đường cong eo nữ thon thả uyển chuyển -->
          <path d="M 186 166 L 152 172 Q 146 195 156 215 Q 154 245 162 274 Q 200 282 238 274 Q 246 245 244 215 Q 254 195 248 172 L 214 166 Q 200 174 186 166 Z" fill="url(#femYemCrimson)" stroke="#7f1d1d" stroke-width="2" />
          
          <!-- Ánh lụa bóng mềm mại uốn lượn theo eo -->
          <path d="M 166 180 Q 158 226 166 272" stroke="#fecdd3" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round" />
          <path d="M 234 180 Q 242 226 234 272" stroke="#fecdd3" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round" />

          <!-- Viền chỉ vàng kim sa đính cổ áo & gấu áo -->
          <path d="M 186 166 Q 200 172 214 166" stroke="#fde047" stroke-width="1.8" fill="none" />
          <path d="M 162 274 Q 200 282 238 274" stroke="#fde047" stroke-width="2.2" fill="none" />

          <!-- Mặt trời Đông Sơn 14 tia sáng vàng kim tỏa rạng ở giữa ngực áo Văn Lang nữ -->
          <circle cx="200" cy="218" r="20" fill="url(#femSunburstGold)" stroke="#78350f" stroke-width="1.5" />
          <circle cx="200" cy="218" r="13" fill="#dc2626" stroke="#fde047" stroke-width="1.2" />
          <circle cx="200" cy="218" r="6" fill="#fef08a" />
          <path d="M 200 196 L 200 240 M 178 218 L 222 218 M 184 202 L 216 234 M 184 234 L 216 202" stroke="#fde047" stroke-width="1.5" />
        </svg>
    `)
    },
    {
      id: 'f_top_giaolinh_hongphan',
      name: 'Áo Giao Lĩnh Hồng Phấn Lót Son (Ngô-Đinh-Lê)',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'female',
      meaning: 'Vẻ đẹp đoan trang, thanh nhã và kín đáo của tiểu thư khuê các thời đầu tự chủ.',
      story: 'Phục dựng theo nguyên mẫu: Áo giao lĩnh màu hồng phấn mềm mại, nẹp cổ hồng nhạt, tay thụng lót lụa đỏ son, xẻ tà hông lót son.',
      structure: 'Áo vạt chéo nẹp cổ hồng nhạt, tay thụng dài rộng lót đỏ son, tà dài qua gối buông rủ tha thướt.',
      usage: 'Lễ phục làng xã, trẩy hội mùa xuân và sinh hoạt quý tộc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="blushRoseSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fff1f2" />
              <stop offset="35%" stop-color="#fecdd3" />
              <stop offset="70%" stop-color="#fda4af" />
              <stop offset="100%" stop-color="#f43f5e" />
            </linearGradient>
            <linearGradient id="roseInnerRed" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="100%" stop-color="#991b1b" />
            </linearGradient>
          </defs>

          <!-- Cổ trong lót lụa trắng ngà giao lĩnh -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Cửa tay thụng lót lụa đỏ son lộ ra e ấp -->
          <path d="M 112 286 Q 130 278 152 272 L 156 286 Q 132 294 118 302 Z" fill="url(#roseInnerRed)" stroke="#991b1b" stroke-width="1" />
          <path d="M 288 286 Q 270 278 248 272 L 244 286 Q 268 294 282 302 Z" fill="url(#roseInnerRed)" stroke="#991b1b" stroke-width="1" />

          <!-- Thân áo giao lĩnh hồng phấn mềm mại, buông tà tha thướt -->
          <path d="M 186 166 Q 160 170 148 174 Q 128 220 112 288 Q 134 280 154 274 Q 154 226 156 256 Q 152 350 148 438 Q 200 448 252 438 Q 248 350 244 256 Q 246 226 246 274 Q 266 280 288 288 Q 272 220 252 174 Q 240 170 214 166 Q 200 176 186 166 Z" fill="url(#blushRoseSilk)" stroke="#be123c" stroke-width="2" />

          <!-- Dải ánh lụa hồng phấn óng ả -->
          <path d="M 148 178 Q 126 230 118 282" stroke="#ffffff" stroke-width="4.5" fill="none" opacity="0.6" stroke-linecap="round" />
          <path d="M 252 178 Q 274 230 282 282" stroke="#ffffff" stroke-width="4.5" fill="none" opacity="0.6" stroke-linecap="round" />
          <path d="M 166 220 Q 160 330 164 434" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.4" />
          <path d="M 234 220 Q 240 330 236 434" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.4" />

          <!-- Nẹp cổ vạt chéo chữ V màu hồng phấn nhạt viền đỏ son -->
          <path d="M 214 166 L 170 238 L 180 242 L 210 174 Z" fill="#ffe4e6" stroke="#fb7185" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 166 L 238 252 L 226 256 L 196 174 Z" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.8" />

        </svg>
    `)
    },
    {
      id: 'f_top_giaolinh_tuongvan',
      name: 'Áo Giao Lĩnh Hồng Phấn Thêu Tường Vân Ngũ Sắc (Ngô - Đinh - Tiền Lê)',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'female',
      meaning: 'Sắc hồng phấn quý tộc thêu hoa văn Tường Vân (mây cát tường) hoàng kim, mang lại phước lành và phong thái đài các.',
      story: 'Tuyệt tác y quan quý tộc thời sơ kỳ: Áo giao lĩnh lụa đũi hồng phấn, trước ngực và ống tay thêu hoa văn mây Tường Vân ngũ sắc viền chỉ vàng sa kim, nẹp cổ dệt kim tuyến sang trọng, đai lưng ngọc bích hoàng gia.',
      structure: 'Áo vạt chéo thêu mây Tường Vân chỉ kim tuyến, tay thụng rộng lót son đỏ rực rỡ, đai lưng hoàng kim thắt ngọc bích.',
      usage: 'Đại lễ phục hoàng cung, yến tiệc triều đình và điển lễ cung cấm.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="blushRoseRoyal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fff1f2" />
              <stop offset="35%" stop-color="#fecdd3" />
              <stop offset="70%" stop-color="#fb7185" />
              <stop offset="100%" stop-color="#e11d48" />
            </linearGradient>
            <linearGradient id="tuongvanGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="50%" stop-color="#fde047" />
              <stop offset="100%" stop-color="#ca8a04" />
            </linearGradient>
            <linearGradient id="royalRubyInner" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#e11d48" />
              <stop offset="100%" stop-color="#881337" />
            </linearGradient>
          </defs>

          <!-- Cổ trong lót lụa trắng ngà giao lĩnh -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Cửa tay thụng lót lụa đỏ son lộ ra kiêu sa -->
          <path d="M 112 286 Q 130 278 152 272 L 156 286 Q 132 294 118 302 Z" fill="url(#royalRubyInner)" stroke="#881337" stroke-width="1.2" />
          <path d="M 288 286 Q 270 278 248 272 L 244 286 Q 268 294 282 302 Z" fill="url(#royalRubyInner)" stroke="#881337" stroke-width="1.2" />

          <!-- Thân áo giao lĩnh hồng phấn thêu hoa văn Tường Vân hoàng gia -->
          <path d="M 186 166 Q 160 170 148 174 Q 128 220 112 288 Q 134 280 154 274 Q 154 226 156 256 Q 152 350 148 438 Q 200 448 252 438 Q 248 350 244 256 Q 246 226 246 274 Q 266 280 288 288 Q 272 220 252 174 Q 240 170 214 166 Q 200 176 186 166 Z" fill="url(#blushRoseRoyal)" stroke="#9f1239" stroke-width="2" />

          <!-- Viền nẹp cổ vạt chéo dệt chỉ vàng hoàng triều -->
          <path d="M 214 166 L 170 238 L 180 242 L 210 174 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
          <path d="M 186 166 L 238 252 L 226 256 L 196 174 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8" />

          <!-- HỌA TIẾT MÂY TƯỜNG VÂN (CÁT TƯỜNG) HOÀNG KIM TRƯỚC NGỰC ÁO -->
          <g transform="translate(180, 200) scale(0.65)">
            <path d="M 15 15 Q 10 5 25 5 Q 35 0 45 10 Q 55 5 60 18 Q 65 28 50 30 Q 30 35 15 25 Q 5 25 15 15 Z" fill="url(#tuongvanGold)" stroke="#854d0e" stroke-width="1.2" opacity="0.9" />
            <circle cx="35" cy="18" r="4" fill="#fef08a" />
            <path d="M 25 22 Q 35 15 45 22" stroke="#854d0e" stroke-width="1" fill="none" />
          </g>

          <!-- HỌA TIẾT TƯỜNG VÂN TRÊN ỐNG TAY TRÁI & PHẢI -->
          <g transform="translate(125, 235) scale(0.45)">
            <path d="M 15 15 Q 10 5 25 5 Q 35 0 45 10 Q 55 5 60 18 Q 65 28 50 30 Q 30 35 15 25 Z" fill="url(#tuongvanGold)" stroke="#854d0e" stroke-width="1.2" />
          </g>
          <g transform="translate(245, 235) scale(0.45)">
            <path d="M 15 15 Q 10 5 25 5 Q 35 0 45 10 Q 55 5 60 18 Q 65 28 50 30 Q 30 35 15 25 Z" fill="url(#tuongvanGold)" stroke="#854d0e" stroke-width="1.2" />
          </g>

          <!-- Đai thắt lưng hoàng kim đính Ngọc Bích & Tua rua hồng ngọc -->
          <rect x="156" y="254" width="88" height="11" rx="2" fill="url(#tuongvanGold)" stroke="#854d0e" stroke-width="1.2" />
          <ellipse cx="200" cy="259.5" rx="8" ry="5.5" fill="#10b981" stroke="#065f46" stroke-width="1.2" />
          <circle cx="200" cy="259.5" r="2.5" fill="#fde047" />
          <!-- Dải ngọc bội buông dài tha thướt -->
          <path d="M 198 265 L 198 335" stroke="#fde047" stroke-width="2.5" />
          <circle cx="198" cy="336" r="3.5" fill="#10b981" stroke="#065f46" stroke-width="1" />
          <path d="M 198 340 L 196 360 M 198 340 L 200 360" stroke="#e11d48" stroke-width="1.8" />
        </svg>
    `)
    },
    {
      id: 'f_top_vienlinh_nu_lytran',
      name: 'Áo Viên Lĩnh Nữ Đỏ Son Hoa Cúc Dây (Lý - Trần)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'female',
      meaning: 'Sắc son son rỗi quyền quý, hoa cúc dây và hoa sen thời Lý tượng trưng cho sự thanh tao, hưng thịnh của phụ nữ hoàng gia Thăng Long.',
      story: 'Hình 1 (trang phục Nữ bên phải): Áo dài cổ tròn đỏ son rực rỡ nẹp viền vàng kim hoàng triều, thêu hoa cúc dây uốn lượn thời Lý & hoa sen sa kim.',
      structure: 'Cổ tròn viên lĩnh nẹp viền vàng kim sa, ngực thêu hoa cúc dây cuộn mềm mại thời Lý, thân áo gấm đỏ son xẻ tà hai bên hông tha thướt.',
      usage: 'Đại lễ phục cung đình, yến tiệc hoàng triều and hôn lễ quý tộc thời Lý.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="lyCrimsonSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="35%" stop-color="#dc2626" />
              <stop offset="70%" stop-color="#b91c1c" />
              <stop offset="100%" stop-color="#7f1d1d" />
            </linearGradient>
            <radialGradient id="lyChrysanthemumGold" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="40%" stop-color="#fde047" />
              <stop offset="80%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#a16207" />
            </radialGradient>
          </defs>

          <!-- Cổ trong lót lụa trắng ngà giao lĩnh -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo gấm đỏ son hoàng triều xẻ tà buông mềm -->
          <path d="M 186 164 Q 160 168 148 174 Q 126 218 106 288 Q 130 280 152 274 Q 152 226 154 256 Q 150 350 146 442 Q 200 454 254 442 Q 250 350 246 256 Q 248 226 248 274 Q 270 280 294 288 Q 274 218 252 174 Q 240 168 214 164 Q 200 176 186 164 Z" fill="url(#lyCrimsonSilk)" stroke="#581111" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V gấm đỏ son viền vàng sa kim -->
          <path d="M 214 164 L 170 238 L 180 242 L 210 172 Z" fill="#b91c1c" stroke="#7f1d1d" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 238 252 L 226 256 L 196 172 Z" fill="url(#lyChrysanthemumGold)" stroke="#a16207" stroke-width="1.8" />

          <!-- Ánh lụa son óng ả -->
          <path d="M 148 178 Q 126 230 114 284" stroke="#fca5a5" stroke-width="4" fill="none" opacity="0.4" stroke-linecap="round" />
          <path d="M 252 178 Q 274 230 286 284" stroke="#fca5a5" stroke-width="4" fill="none" opacity="0.4" stroke-linecap="round" />

          <!-- Dải hoa cúc dây uốn lượn mềm mại xuống thân áo -->
          <path d="M 194 250 Q 184 280 200 308 Q 216 336 200 364 Q 184 392 200 420" stroke="url(#lyChrysanthemumGold)" stroke-width="2" fill="none" stroke-linecap="round" />
          <circle cx="192" cy="290" r="3.5" fill="#fef08a" />
          <circle cx="208" cy="350" r="3.5" fill="#fef08a" />

        </svg>
    `)
    },
    {
      id: 'f_top_tudien_nu_lytran',
      name: 'Áo Tứ Điên Nữ & Quạt Lụa Trắng Cung Đình (Lý - Trần)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'female',
      meaning: 'Vẻ đẹp đài các, uyển chuyển của phụ nữ hoàng tộc Đại Việt, tôn nét thanh tao qua chiếc quạt lụa trắng cầm tay.',
      story: 'Hình 2 (trang phục Nữ bên dưới): Áo cổ tròn 4 vạt (tứ điên) màu hồng sen / đỏ thắm dệt hoa sen thời Trần, tay thụng mềm mại, tay cầm quạt lụa trắng nan tre đính tua rua đỏ thắm.',
      structure: 'Áo 4 vạt xẻ trước sau và hai bên hông tha thướt, hoa văn sen cung đình, tay cầm chiếc quạt lụa trắng nan tre đính tua rua.',
      usage: 'Lễ phục đại triều, dạ yến mùa xuân và nghi lễ Phật giáo hoàng triều Trần.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="roseDamaskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fb7185" />
              <stop offset="35%" stop-color="#e11d48" />
              <stop offset="70%" stop-color="#be123c" />
              <stop offset="100%" stop-color="#881337" />
            </linearGradient>
            <radialGradient id="courtMoonFan" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="70%" stop-color="#f8fafc" />
              <stop offset="100%" stop-color="#e2e8f0" />
            </radialGradient>
          </defs>

          <!-- Cổ trong lót lụa trắng ngà giao lĩnh -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo Tứ Điên 4 vạt gấm hồng sen / đỏ thắm buông rủ tha thướt -->
          <path d="M 186 164 Q 160 168 148 174 Q 126 218 106 288 Q 130 280 152 274 Q 152 226 154 256 L 148 442 Q 200 452 252 442 L 246 256 Q 248 226 248 274 Q 270 280 294 288 Q 274 218 252 174 Q 240 168 214 164 Q 200 176 186 164 Z" fill="url(#roseDamaskGrad)" stroke="#881337" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo chữ V gấm hồng sen viền vàng sa kim -->
          <path d="M 214 164 L 170 238 L 180 242 L 210 172 Z" fill="#be123c" stroke="#881337" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 238 252 L 226 256 L 196 172 Z" fill="#facc15" stroke="#a16207" stroke-width="1.8" />
          
          <!-- Đường xẻ vạt trước chữ I đặc trưng Tứ Điên -->
          <line x1="200" y1="168" x2="200" y2="444" stroke="#881337" stroke-width="2.2" />
          <line x1="201" y1="168" x2="201" y2="444" stroke="#fbcfe8" stroke-width="0.8" opacity="0.4" />

          <!-- Họa tiết hoa sen thêu chỉ vàng kim sa hai bên -->
          <circle cx="174" cy="330" r="12" fill="none" stroke="#fde047" stroke-width="1.2" opacity="0.7" />
          <circle cx="226" cy="330" r="12" fill="none" stroke="#fde047" stroke-width="1.2" opacity="0.7" />

          <!-- CHIẾC QUẠT LỤA TRẮNG CUNG ĐÌNH CẦM TAY NỮ (Đúng như ảnh số 2) -->
          <g transform="translate(228, 240) rotate(15)">
            <path d="M 0 45 L -26 0 A 30 30 0 0 1 26 0 Z" fill="url(#courtMoonFan)" stroke="#cbd5e1" stroke-width="1.5" />
            <line x1="0" y1="45" x2="0" y2="0" stroke="#ca8a04" stroke-width="1.2" />
            <line x1="0" y1="45" x2="-14" y2="5" stroke="#ca8a04" stroke-width="1" />
            <line x1="0" y1="45" x2="14" y2="5" stroke="#ca8a04" stroke-width="1" />
            <line x1="0" y1="45" x2="0" y2="62" stroke="#78350f" stroke-width="2.5" />
            <!-- Tua rua đỏ thắm đính đuôi quạt cát tường -->
            <line x1="0" y1="62" x2="0" y2="78" stroke="#dc2626" stroke-width="2" />
            <circle cx="0" cy="78" r="3" fill="#dc2626" />
          </g>

        </svg>
    `)
    },
    {
      id: 'f_top_giaolinh_nu_lytran',
      name: 'Áo Giao Lĩnh Nữ Cổ Chéo & Dải Ngọc Bội (Lý - Trần)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'female',
      meaning: 'Sự kín đáo, đoan nghiêm, nét đẹp kinh điển muôn thuở của tà áo giao lĩnh vạt chéo Đại Việt.',
      story: 'Hình 3 (trang phục Nữ): Áo giao lĩnh màu đỏ son gấm hoàng triều nẹp viền lụa ngà, dải ngọc bội buông dài tha thướt trước ngực, kết hợp cùng váy quây dập ly tầng.',
      structure: 'Vạt áo vắt chéo chữ V nẹp viền vàng ngà, tay thụng dài rộng, dải thắt lưng đính ngọc bội rủ mềm mại.',
      usage: 'Lễ phục trọng thể, dâng hương Phật tích và sinh hoạt đài các quý tộc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="lyGiaolinhRuby" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="35%" stop-color="#dc2626" />
              <stop offset="70%" stop-color="#b91c1c" />
              <stop offset="100%" stop-color="#7f1d1d" />
            </linearGradient>
            <linearGradient id="goldIvoryLapel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="60%" stop-color="#fef08a" />
              <stop offset="100%" stop-color="#fde047" />
            </linearGradient>
          </defs>

          <!-- Áo lót trắng ngà giao lĩnh trong -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#faf8f5" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo giao lĩnh đỏ son hoàng triều rủ mềm -->
          <path d="M 186 164 Q 160 168 148 174 Q 126 218 106 288 Q 130 280 152 274 Q 152 226 154 256 L 148 442 Q 200 452 252 442 L 246 256 Q 248 226 248 274 Q 270 280 294 288 Q 274 218 252 174 Q 240 168 214 164 Q 200 176 186 164 Z" fill="url(#lyGiaolinhRuby)" stroke="#7f1d1d" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo màu vàng ngà sa kim -->
          <path d="M 214 164 L 170 238 L 180 242 L 210 172 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.5" opacity="0.8" />
          <path d="M 186 164 L 238 252 L 226 256 L 196 172 Z" fill="url(#goldIvoryLapel)" stroke="#ca8a04" stroke-width="1.8" />

          <!-- Dải ngọc bội hoa sen vàng rủ mềm mại trước ngực -->
          <path d="M 184 174 Q 200 196 216 174" stroke="#ca8a04" stroke-width="2.2" fill="none" />
          <circle cx="200" cy="192" r="5" fill="#facc15" stroke="#a16207" stroke-width="1" />
          <line x1="200" y1="197" x2="200" y2="232" stroke="#facc15" stroke-width="2" />
          <circle cx="200" cy="232" r="3.5" fill="#dc2626" />

          <!-- Hoa văn sen chìm trên thân áo -->
          <circle cx="166" cy="320" r="10" fill="none" stroke="#fca5a5" stroke-width="1.2" opacity="0.6" />
          <circle cx="234" cy="320" r="10" fill="none" stroke="#fca5a5" stroke-width="1.2" opacity="0.6" />

        </svg>
    `)
    },
    {
      id: 'f_top_giaolinh_xanhcom_haule',
      name: 'Áo Giao Lĩnh Xanh Cốm Hoa Lá Hạc (Hình 1 - Trên)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Sắc xanh ngọc bích / xanh cốm thanh tao tượng trưng cho sự dịu dàng, quý phái của thiên kim tiểu thư thời Lê - Mạc.',
      story: 'Hình 1 (bên trên): Áo giao lĩnh màu xanh cốm (sage green) thêu chim hạc và hoa lá thanh nhã, tay thụng rộng, áo lót trong màu xanh nhạt, đính chuỗi ngọc sen hồng tua rua quý phái.',
      structure: 'Áo khoác giao lĩnh vạt chéo màu xanh cốm, tay thụng dài rộng, vòng cổ ngọc đính ngọc bội hoa sen hồng rủ mềm mại.',
      usage: 'Lễ phục trẩy hội xuân, dạ yến cung đình và lễ cưới hỏi quý tộc thời Hậu Lê - Triều Mạc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="sageGreenSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#d1e7c9" />
              <stop offset="40%" stop-color="#b5ceab" />
              <stop offset="75%" stop-color="#93ae88" />
              <stop offset="100%" stop-color="#69855e" />
            </linearGradient>
            <linearGradient id="innerMatchaSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f2faef" />
              <stop offset="100%" stop-color="#d9f0d3" />
            </linearGradient>
            <radialGradient id="lotusPinkGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fff1f2" />
              <stop offset="50%" stop-color="#f472b6" />
              <stop offset="100%" stop-color="#db2777" />
            </radialGradient>
          </defs>

          <!-- Áo lót trong xanh cốm nhạt vạt chéo -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
          <path d="M 186 164 L 232 254 L 222 258 L 176 166 Z" fill="url(#innerMatchaSilk)" stroke="#b7e4ae" stroke-width="1.5" />

          <!-- Cửa tay thụng xanh ngọc bích -->
          <path d="M 104 290 Q 124 278 146 272 L 150 286 Q 126 294 110 304 Z" fill="#93ae88" stroke="#69855e" stroke-width="1" />
          <path d="M 296 290 Q 276 278 254 272 L 250 286 Q 274 294 290 304 Z" fill="#93ae88" stroke="#69855e" stroke-width="1" />

          <!-- Thân áo giao lĩnh màu xanh cốm thanh nhã rủ mềm -->
          <path d="M 186 164 Q 160 168 148 174 Q 124 220 104 292 Q 128 280 152 274 Q 152 226 154 256 Q 150 350 146 440 Q 200 450 254 440 Q 250 350 246 256 Q 248 226 248 274 Q 272 280 296 292 Q 276 220 252 174 Q 240 168 214 164 Q 200 176 186 164 Z" fill="url(#sageGreenSilk)" stroke="#526d48" stroke-width="2" />

          <!-- Dải ánh lụa xanh ngọc bóng bẩy -->
          <path d="M 148 178 Q 124 230 110 286" stroke="#ffffff" stroke-width="4.5" fill="none" opacity="0.45" stroke-linecap="round" />
          <path d="M 252 178 Q 276 230 290 286" stroke="#ffffff" stroke-width="4.5" fill="none" opacity="0.45" stroke-linecap="round" />

          <!-- Nẹp cổ vạt chéo giao lĩnh màu xanh cốm nẹp viền -->
          <path d="M 214 164 L 170 238 L 180 242 L 210 172 Z" fill="url(#sageGreenSilk)" stroke="#526d48" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 238 252 L 226 256 L 196 172 Z" fill="#93ae88" stroke="#526d48" stroke-width="1.8" />

          <!-- Họa tiết chim hạc và hoa sen thêu chìm -->
          <path d="M 166 215 Q 175 205 180 220" stroke="#ffffff" stroke-width="1.6" fill="none" opacity="0.8" />
          <path d="M 234 215 Q 225 205 220 220" stroke="#ffffff" stroke-width="1.6" fill="none" opacity="0.8" />
          <circle cx="165" cy="310" r="3.5" fill="#fbcfe8" opacity="0.8" />
          <circle cx="235" cy="310" r="3.5" fill="#fbcfe8" opacity="0.8" />

          <!-- Vòng cổ ngọc & Ngọc bội hoa sen hồng tua rua rủ trước ngực -->
          <path d="M 182 174 Q 200 196 218 174" stroke="#fbbf24" stroke-width="2.5" fill="none" />
          <circle cx="200" cy="192" r="5" fill="url(#lotusPinkGlow)" stroke="#be185d" stroke-width="1" />
          <line x1="200" y1="197" x2="200" y2="228" stroke="#f472b6" stroke-width="2" />
          <circle cx="200" cy="228" r="3" fill="#f472b6" />

        </svg>
    `)
    },
    {
      id: 'f_top_doikham_hoanggia_haule',
      name: 'Áo Đối Khâm Hoàng Gia Gấm Navy & Quạt Trắng (Hình 2 - Dưới)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Sự quyền quý tối cao của bậc hoàng phi, công chúa thời Hậu Lê - Mạc trong tấm áo gấm navy dệt rồng mây kim tuyến.',
      story: 'Hình 2 (bên dưới): Áo đối khâm hoàng gia màu gấm xanh navy dệt rồng mây vàng kim tuyến rực rỡ, nẹp viền lam đậm, áo lót trắng, tay cầm quạt lụa trắng cung đình.',
      structure: 'Áo đối khâm hai vạt song song buông dài, nẹp viền to bản màu lam đậm, chất gấm navy dệt kim tuyến vàng óng ánh, tay cầm quạt lụa trắng.',
      usage: 'Đại điển cung đình, yến tiệc hoàng triều và nghi thức tế tự quốc gia thời Lê - Mạc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="royalNavySilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2c3e60" />
              <stop offset="40%" stop-color="#1e293b" />
              <stop offset="75%" stop-color="#0f172a" />
              <stop offset="100%" stop-color="#020617" />
            </linearGradient>
            <linearGradient id="cobaltLapel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0284c7" />
              <stop offset="100%" stop-color="#0369a1" />
            </linearGradient>
            <radialGradient id="courtFanGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="70%" stop-color="#f8fafc" />
              <stop offset="100%" stop-color="#e2e8f0" />
            </radialGradient>
          </defs>

          <!-- Áo lót trắng giao lĩnh trong -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
          <path d="M 186 164 L 232 254 L 222 258 L 176 166 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />

          <!-- Cửa tay thụng gấm navy viền lam ngọc đậm -->
          <path d="M 104 290 Q 124 278 146 272 L 150 286 Q 126 294 110 304 Z" fill="url(#cobaltLapel)" stroke="#0369a1" stroke-width="1" />
          <path d="M 296 290 Q 276 278 254 272 L 250 286 Q 274 294 290 304 Z" fill="url(#cobaltLapel)" stroke="#0369a1" stroke-width="1" />

          <!-- Thân áo đối khâm màu gấm xanh navy hoàng gia buông dài uy nghi -->
          <path d="M 186 164 Q 160 168 148 174 Q 124 220 104 292 Q 128 280 152 274 Q 152 226 154 256 L 148 446 Q 200 456 252 446 L 246 256 Q 248 226 248 274 Q 272 280 296 292 Q 276 220 252 174 Q 240 168 214 164 Q 200 176 186 164 Z" fill="url(#royalNavySilk)" stroke="#020617" stroke-width="2" />

          <!-- Nẹp viền to bản màu xanh lam ngọc đậm chạy dọc hai vạt trước -->
          <path d="M 186 164 L 186 448 L 172 448 L 172 168 Z" fill="url(#cobaltLapel)" stroke="#0284c7" stroke-width="1.5" />
          <path d="M 214 164 L 214 448 L 228 448 L 228 168 Z" fill="url(#cobaltLapel)" stroke="#0284c7" stroke-width="1.5" />

          <!-- Họa tiết Rồng Mây vàng kim tuyến hoàng gia óng ánh -->
          <circle cx="158" cy="220" r="14" fill="none" stroke="#fbbf24" stroke-width="1.8" />
          <circle cx="242" cy="220" r="14" fill="none" stroke="#fbbf24" stroke-width="1.8" />
          <path d="M 154 310 Q 164 295 158 335" stroke="#facc15" stroke-width="2" fill="none" />
          <path d="M 246 310 Q 236 295 242 335" stroke="#facc15" stroke-width="2" fill="none" />
          <circle cx="158" cy="380" r="12" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2" />
          <circle cx="242" cy="380" r="12" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2" />

          <!-- CHIẾC QUẠT LỤA TRẮNG CUNG ĐÌNH TRÊN TAY NỮ (Đúng như ảnh số 2 dưới) -->
          <g transform="translate(228, 240) rotate(15)">
            <path d="M 0 45 L -26 0 A 30 30 0 0 1 26 0 Z" fill="url(#courtFanGlow)" stroke="#cbd5e1" stroke-width="1.5" />
            <line x1="0" y1="45" x2="0" y2="0" stroke="#ca8a04" stroke-width="1.2" />
            <line x1="0" y1="45" x2="-14" y2="5" stroke="#ca8a04" stroke-width="1" />
            <line x1="0" y1="45" x2="14" y2="5" stroke="#ca8a04" stroke-width="1" />
            <line x1="0" y1="45" x2="0" y2="62" stroke="#78350f" stroke-width="2.5" />
            <line x1="0" y1="62" x2="0" y2="78" stroke="#ca8a04" stroke-width="1.8" />
            <circle cx="0" cy="78" r="3" fill="#ca8a04" />
          </g>

        </svg>
    `)
    },
    {
      id: 'f_top_tuthan_kinhbac_naudo',
      name: 'Áo Tứ Thân Nâu Gụ Lót Son & Dải Thắt Lưng Xanh Hồng (Kinh Bắc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Vẻ đẹp kín đáo, nết na, dịu dàng và duyên dáng của người con gái quan họ Kinh Bắc.',
      story: 'Phục dựng nguyên mẫu: Áo tứ thân lụa đũi nâu gụ trầm ấm lót lụa đỏ thắm ở cổ và cửa tay, thắt dải lụa ruột tượng kép xanh cốm và hồng sen buông dài thướt tha.',
      structure: 'Thân áo 4 vạt xẻ tà buông dài, cổ vạt chéo lót lụa đỏ son, tay thụng lót son, thắt đai nơ đôi xanh lá - hồng sen nổi bật.',
      usage: 'Hội Lim, hát giao duyên quan họ, lễ hội truyền thống và cưới hỏi dân gian.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="chestnutSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4a3025" />
              <stop offset="45%" stop-color="#38221b" />
              <stop offset="85%" stop-color="#24140e" />
              <stop offset="100%" stop-color="#140905" />
            </linearGradient>
            <linearGradient id="emeraldRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#4ade80" />
              <stop offset="50%" stop-color="#22c55e" />
              <stop offset="100%" stop-color="#15803d" />
            </linearGradient>
            <linearGradient id="roseRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fb7185" />
              <stop offset="50%" stop-color="#e11d48" />
              <stop offset="100%" stop-color="#9f1239" />
            </linearGradient>
          </defs>

          <!-- Áo cánh đỏ thắm cổ đứng bên trong -->
          <path d="M 186 142 Q 200 146 214 142 L 214 166 Q 200 170 186 166 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.8" />
          <path d="M 186 164 L 232 254 L 222 258 L 176 166 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" />

          <!-- Cửa tay thụng lót đỏ thắm -->
          <path d="M 104 290 Q 124 278 146 272 L 150 286 Q 126 294 110 304 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1" />
          <path d="M 296 290 Q 276 278 254 272 L 250 286 Q 274 294 290 304 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1" />

          <!-- Thân áo tứ thân ngoài màu nâu gụ / nâu trầm buông rủ 4 vạt tha thướt -->
          <path d="M 186 164 Q 160 168 148 174 Q 124 220 104 292 Q 128 280 152 274 Q 152 226 154 256 L 146 450 Q 200 460 254 450 L 246 256 Q 248 226 248 274 Q 272 280 296 292 Q 276 220 252 174 Q 240 168 214 164 Q 200 176 186 164 Z" fill="url(#chestnutSilk)" stroke="#140a06" stroke-width="2" />

          <!-- Nẹp cổ vạt chéo lót đỏ thắm lộ ra duyên dáng -->
          <path d="M 186 164 L 238 254 L 226 258 L 176 168 Z" fill="#140a06" stroke="#0a0503" stroke-width="1.6" />
          <path d="M 188 164 L 224 238" stroke="#dc2626" stroke-width="2.5" />

          <!-- Đai thắt lưng ruột tượng kép: Dải Xanh Cốm & Dải Hồng Sen rủ mềm thướt tha -->
          <rect x="154" y="258" width="92" height="13" rx="2" fill="url(#emeraldRibbon)" stroke="#15803d" stroke-width="1.2" />
          <path d="M 188 270 Q 184 355 182 440 L 194 440 Q 196 355 196 270 Z" fill="url(#emeraldRibbon)" stroke="#15803d" stroke-width="1" />
          <path d="M 198 270 Q 200 360 202 450 L 214 450 Q 212 360 208 270 Z" fill="url(#roseRibbon)" stroke="#9f1239" stroke-width="1" />
          <ellipse cx="196" cy="264" rx="7" ry="4.5" fill="url(#emeraldRibbon)" />
          <ellipse cx="204" cy="264" rx="7" ry="4.5" fill="url(#roseRibbon)" />
          <circle cx="200" cy="264" r="3.2" fill="#facc15" />

        </svg>
    `)
    },
    {
      id: 'f_top_aocanh_do_tuthan',
      name: 'Áo Cánh Đỏ Thắm Cổ Đứng Lót Trong (Kinh Bắc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Sắc đỏ thắm son rỗi tượng trưng cho sức sống, may mắn và nét duyên dáng thầm kín.',
      story: 'Áo cánh lụa màu đỏ thắm may cổ đứng thấp, mặc bên trong áo tứ thân nâu gụ làm nền cho dải thắt lưng xanh hồng rực rỡ.',
      structure: 'Áo cánh cộc ngắn ngang hông ôm dáng thanh tú, cài cúc lệch bên sườn hoặc cúc giữa.',
      usage: 'Áo lót trong khi mặc áo tứ thân hoặc áo dài.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 186 142 Q 200 146 214 142 L 214 166 Q 200 170 186 166 Z" fill="#b91c1c" stroke="#7f1d1d" stroke-width="1.8" />
          <path d="M 186 166 L 148 174 L 126 286 L 152 276 Q 152 228 154 256 L 158 350 Q 200 358 242 350 L 246 256 Q 248 228 248 276 L 274 286 L 252 174 L 214 166 Q 200 174 186 166 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
        </svg>
      `)
    },
    {
      id: 'f_top_tayson_nu',
      name: 'Áo Ngũ Thân Tay Chẽn Nữ (Tây Sơn)',
      eraName: 'Triều Tây Sơn (1778 – 1802)',
      eraNumber: 5,
      gender: 'female',
      meaning: 'Sự giải phóng vận động cho phụ nữ Việt Nam, khỏe khoắn, kiên cường và đậm đà sắc đỏ son quật khởi.',
      story: 'Cuộc cách mạng trang phục của vua Quang Trung: Áo ngũ thân tay chẽn đỏ thắm xẻ tà linh hoạt giúp phụ nữ tham gia sản xuất và hậu tuyến kháng chiến.',
      structure: 'Áo ngũ thân tay chẽn gọn gàng, xẻ tà hai bên hông cao, cổ đứng nẹp viền cài khuy, kết hợp cùng quần hai ống giải phóng bước chân.',
      usage: 'Tiện phục lao động, quân phục nữ binh và lễ hội truyền thống.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="femTaysonCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#dc2626" />
              <stop offset="45%" stop-color="#b91c1c" />
              <stop offset="85%" stop-color="#991b1b" />
              <stop offset="100%" stop-color="#7f1d1d" />
            </linearGradient>
          </defs>

          <!-- Cổ trong lót trắng -->
          <path d="M 188 144 Q 200 147 212 144 L 212 166 L 188 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />

          <!-- Thân áo ngũ thân tay chẽn nữ Tây Sơn đỏ thắm cờ đào -->
          <path d="M 186 164 Q 158 168 148 174 L 120 288 Q 136 282 150 282 Q 152 228 154 256 L 152 408 Q 200 418 248 408 L 246 256 Q 248 228 250 282 Q 264 282 280 288 L 252 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#femTaysonCrimson)" stroke="#7f1d1d" stroke-width="2" />

          <!-- Cổ đứng cài cúc chéo vai phải -->
          <path d="M 186 142 Q 200 146 214 142 L 214 166 Q 200 170 186 166 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.8" />
          <path d="M 200 168 L 226 226 L 220 228 L 194 170 Z" fill="#991b1b" />

          <circle cx="210" cy="180" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="216" cy="198" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="222" cy="216" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />

        </svg>
    `)
    },
    {
      id: 'f_top_nhatbinh_nguyen',
      name: 'Áo Nhật Bình Cung Đình Huế (Triều Nguyễn)',
      eraName: 'Triều Nguyễn (1802 – 1945)',
      eraNumber: 6,
      gender: 'female',
      meaning: 'Đỉnh cao sự quyền quý, tôn nghiêm của bậc Hoàng tộc với dải cổ chữ nhật ngũ hành tương sinh điều hòa trời đất.',
      story: 'Lễ phục tối cao của Hoàng hậu và Phi tần triều Nguyễn, nẹp cổ chữ nhật thêu phượng hoàng và dải ngũ hành rực rỡ, hai tay áo viền ngũ sắc.',
      structure: 'Áo dạng đối lĩnh xẻ giữa, cổ nẹp chữ nhật bản to thêu chỉ ngũ sắc và phượng sa kim, cổ tay viền 5 dải màu ngũ hành.',
      usage: 'Đại lễ cung đình, cưới hỏi hoàng gia và lễ thụ phong mẫu nghi.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="nhatbinhRuby" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#991b1b" />
              <stop offset="40%" stop-color="#8b1e1e" />
              <stop offset="80%" stop-color="#6b1515" />
              <stop offset="100%" stop-color="#450a0a" />
            </linearGradient>
            <linearGradient id="goldCollarNhatbinh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="50%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#a16207" />
            </linearGradient>
          </defs>

          <!-- Cổ trong lót lụa trắng ngà -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="#faf8f5" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Cửa tay áo ngũ sắc ngũ hành hoàng cung (Vàng, Xanh, Trắng, Đỏ, Tím/Đen) -->
          <polygon points="106,290 144,272 150,286 112,304" fill="#eab308" />
          <line x1="110" y1="298" x2="148" y2="280" stroke="#3b82f6" stroke-width="2.2" />
          <line x1="114" y1="292" x2="146" y2="276" stroke="#ffffff" stroke-width="2.2" />
          <polygon points="294,290 256,272 250,286 288,304" fill="#eab308" />
          <line x1="290" y1="298" x2="252" y2="280" stroke="#3b82f6" stroke-width="2.2" />
          <line x1="286" y1="292" x2="254" y2="276" stroke="#ffffff" stroke-width="2.2" />

          <!-- Thân áo Nhật Bình gấm đỏ son hoàng tộc buông dài đoan trang -->
          <path d="M 186 164 Q 160 168 148 174 Q 124 220 104 292 Q 128 280 152 274 Q 152 226 154 256 L 148 444 Q 200 454 252 444 L 246 256 Q 248 226 248 274 Q 272 280 296 292 Q 276 220 252 174 Q 240 168 214 164 Q 200 176 186 164 Z" fill="url(#nhatbinhRuby)" stroke="#450a0a" stroke-width="2" />

          <!-- Nẹp cổ hình chữ nhật (Nhật Bình) bản to viền ngũ hành vàng sa kim -->
          <rect x="174" y="164" width="52" height="114" rx="3" fill="url(#goldCollarNhatbinh)" stroke="#78350f" stroke-width="1.8" />
          
          <!-- Dải chỉ ngũ sắc thêu dọc cổ áo Nhật Bình -->
          <line x1="182" y1="168" x2="182" y2="274" stroke="#2563eb" stroke-width="2.2" />
          <line x1="186" y1="168" x2="186" y2="274" stroke="#ffffff" stroke-width="2.2" />
          <line x1="190" y1="168" x2="190" y2="274" stroke="#dc2626" stroke-width="2.2" />
          <line x1="210" y1="168" x2="210" y2="274" stroke="#dc2626" stroke-width="2.2" />
          <line x1="214" y1="168" x2="214" y2="274" stroke="#ffffff" stroke-width="2.2" />
          <line x1="218" y1="168" x2="218" y2="274" stroke="#2563eb" stroke-width="2.2" />

          <!-- Đường xẻ giữa đối lĩnh -->
          <line x1="200" y1="164" x2="200" y2="446" stroke="#450a0a" stroke-width="2.2" />

          <!-- Họa tiết phượng hoàng và hoa sen sa kim cung đình Huế -->
          <circle cx="166" cy="330" r="14" fill="none" stroke="#fbbf24" stroke-width="1.6" />
          <circle cx="234" cy="330" r="14" fill="none" stroke="#fbbf24" stroke-width="1.6" />

        </svg>
    `)
    },
    {
      id: 'f_top_cachtan_xxi',
      name: 'Áo Dài Cách Tân Nữ Đương Đại (TK XXI)',
      eraName: 'Thế kỷ XXI',
      eraNumber: 7,
      gender: 'female',
      meaning: 'Vẻ đẹp thanh lịch, bay bổng, tự tin hội nhập quốc tế của người phụ nữ Việt Nam thế kỷ XXI.',
      story: 'Áo dài cách tân tà lửng màu hồng phấn dịu mát, tay lửng bồng cách điệu mang phong vị đương đại, kết hợp chân váy dập ly xòe mềm mại.',
      structure: 'Tà áo lửng ngang bắp chân nhẹ nhàng, cổ tròn cách tân đính cúc ngọc, tay lửng bồng thoải mái.',
      usage: 'Dạo phố, công sở, sự kiện văn hóa nghệ thuật và du xuân đón Tết.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="modPinkSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fff1f2" />
              <stop offset="45%" stop-color="#fecdd3" />
              <stop offset="85%" stop-color="#fda4af" />
              <stop offset="100%" stop-color="#f43f5e" />
            </linearGradient>
          </defs>

          <!-- Cổ áo tròn cách tân -->
          <path d="M 188 156 Q 200 152 212 156 L 212 166 Q 200 162 188 166 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2" />

          <!-- Thân áo dài cách tân màu hồng phấn pastel bay bổng -->
          <path d="M 186 164 Q 160 168 148 174 L 130 260 Q 142 254 152 254 Q 152 226 154 256 L 152 418 Q 200 425 248 418 L 246 256 Q 248 226 248 254 Q 258 254 270 260 L 252 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#modPinkSilk)" stroke="#e11d48" stroke-width="2" />

          <!-- Hàng cúc ngọc trai chéo vai duyên dáng -->
          <circle cx="206" cy="174" r="2.6" fill="#ffffff" stroke="#e11d48" stroke-width="0.8" />
          <circle cx="214" cy="184" r="2.6" fill="#ffffff" stroke="#e11d48" stroke-width="0.8" />
          <circle cx="222" cy="196" r="2.6" fill="#ffffff" stroke="#e11d48" stroke-width="0.8" />

          <!-- Tà áo xẻ hông cao lộ chân váy dập ly -->
          <line x1="200" y1="168" x2="200" y2="240" stroke="#fbcfe8" stroke-width="1.2" />

        </svg>
    `)
    },
    {
      id: 'f_top_nguthan_xanhreu_dam',
      name: 'Áo Ngũ Thân Xanh Rêu Viền Trắng & Khăn Rằn (Nữ)',
      eraName: 'Thời kỳ Hiện Đại & Cổ Phong Nam Bộ',
      eraNumber: 7,
      gender: 'female',
      meaning: 'Nét e ấp, dịu dàng và nét đẹp trù phú của thiếu nữ Việt Nam trong sắc xanh rừng rậm và chiếc khăn rằn Nam Bộ.',
      story: 'Áo ngũ thân / áo dài xanh rêu thẫm với lót cổ trắng & lót tay trắng, vạt thả thướt phối cùng chiếc khăn rằn ca-rô đen trắng vắt vai.',
      structure: 'Cổ đứng nẹp viền trắng, tay áo thụng lót lụa trắng ở gấu tay, vắt kèm dải khăn rằn ca-rô đen trắng mềm mại.',
      usage: 'Phối đồ chuẩn mực cho thiếu nữ Việt Nam.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="forestGreenSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4c6d52" />
              <stop offset="40%" stop-color="#35523a" />
              <stop offset="80%" stop-color="#233a28" />
              <stop offset="100%" stop-color="#142418" />
            </linearGradient>
          </defs>

          <path d="M 188 156 Q 200 152 212 156 L 212 166 Q 200 162 188 166 Z" fill="#ffffff" />
          <path d="M 186 142 Q 200 146 214 142 L 214 166 Q 200 170 186 166 Z" fill="#233a28" stroke="#142418" stroke-width="1.8" />
          
          <path d="M 186 164 Q 160 168 148 174 L 120 288 Q 136 278 150 278 Q 152 228 154 256 L 152 425 Q 200 432 248 425 L 246 256 Q 248 228 250 278 Q 264 278 280 288 L 252 174 Q 240 168 214 164 Q 200 172 186 164 Z" fill="url(#forestGreenSilk)" stroke="#142418" stroke-width="2" />
          
          <!-- Lót tay trắng thanh nhã -->
          <polygon points="120,288 150,278 151,286 121,296" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.8" />
          <polygon points="280,288 250,278 249,286 279,296" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.8" />

          <!-- Hàng khuy cài -->
          <path d="M 200 166 Q 216 174 224 200 L 224 252" stroke="#142418" stroke-width="1.8" fill="none" />
          <circle cx="210" cy="178" r="2.5" fill="#142418" />
          <circle cx="220" cy="194" r="2.5" fill="#142418" />
          <circle cx="224" cy="214" r="2.5" fill="#142418" />

          <!-- Dải khăn rằn ca-rô mềm mại vắt vai -->
          <g opacity="0.95">
            <path d="M 148 174 Q 138 230 142 380 L 156 380 Q 152 230 162 182 Z" fill="#ffffff" stroke="#18181b" stroke-width="1" />
            <path d="M 148 174 L 162 182 M 146 195 L 160 203 M 144 220 L 158 228 M 143 245 L 157 253 M 142 270 L 156 278 M 142 295 L 156 303 M 142 320 L 156 328 M 142 345 L 156 353 M 142 370 L 156 378" stroke="#18181b" stroke-width="1.8" />
            <path d="M 152 176 L 146 380 M 158 180 L 152 380" stroke="#18181b" stroke-width="1.2" />
            <line x1="142" y1="380" x2="142" y2="388" stroke="#18181b" stroke-width="1.2" />
            <line x1="146" y1="380" x2="146" y2="388" stroke="#18181b" stroke-width="1.2" />
            <line x1="150" y1="380" x2="150" y2="388" stroke="#18181b" stroke-width="1.2" />
            <line x1="154" y1="380" x2="154" y2="388" stroke="#18181b" stroke-width="1.2" />
          </g>

        </svg>
    `)
    },
  ],
  bottom: [
    {
      id: 'f_bot_vay_den_tuthan',
      name: 'Chân Váy Lụa Đen Tuyền Dài (Áo Tứ Thân Kinh Bắc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Sự đằm thắm, nền nã và tôn vinh sắc vóc cùng các dải lụa ngũ sắc áo tứ thân.',
      story: 'Chân váy lụa đen tuyền dập nếp xòe rộng buông rủ tha thướt là mảnh ghép hoàn hảo dưới tà áo tứ thân nâu gụ.',
      structure: 'Chân váy lụa đen maxi dáng xòe dài chấm gót, cạp chun thoải mái.',
      usage: 'Phối đồ chuẩn mực cho bộ Áo Tứ Thân Kinh Bắc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="blackSkirtDrape" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#27272a" />
              <stop offset="50%" stop-color="#18181b" />
              <stop offset="100%" stop-color="#09090b" />
            </linearGradient>
            <linearGradient id="pleatHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#3f3f46" />
              <stop offset="50%" stop-color="#71717a" />
              <stop offset="100%" stop-color="#27272a" />
            </linearGradient>
          </defs>

          <!-- Thân váy đũi đen dập nếp xòe rủ mềm mại bồng bềnh -->
          <path d="M 168 274 Q 200 280 232 274 Q 242 340 250 380 L 276 492 Q 200 500 124 492 L 150 380 Q 158 340 168 274 Z" fill="url(#blackSkirtDrape)" stroke="#09090b" stroke-width="2" />

          <!-- Các nếp dập ly 3D xen kẽ mảng sáng tối mềm mại tự nhiên -->
          <path d="M 172 284 Q 158 385 144 492" stroke="#3f3f46" stroke-width="2" fill="none" />
          <path d="M 181 286 Q 172 385 162 494" stroke="#52525b" stroke-width="1.8" fill="none" opacity="0.7" />
          <path d="M 191 288 Q 186 385 182 496" stroke="#3f3f46" stroke-width="1.6" fill="none" />
          <path d="M 200 288 Q 200 385 200 497" stroke="#71717a" stroke-width="2" fill="none" opacity="0.8" />
          <path d="M 209 288 Q 214 385 218 496" stroke="#3f3f46" stroke-width="1.6" fill="none" />
          <path d="M 219 286 Q 228 385 238 494" stroke="#52525b" stroke-width="1.8" fill="none" opacity="0.7" />
          <path d="M 228 284 Q 242 385 256 492" stroke="#3f3f46" stroke-width="2" fill="none" />
        </svg>
    `)
    },
    {
      id: 'f_bot_vay_lacviet',
      name: 'Chân Váy Vàng Chim Lạc & Dải Yếm Vạt Đỏ (Văn Lang)',
      eraName: 'Thời kỳ Văn Lang - Âu Lạc',
      eraNumber: 1,
      gender: 'female',
      meaning: 'Sự hòa quyện tuyệt mỹ giữa đất trời: sắc vàng rực rỡ của nắng lúa và sắc đỏ linh thiêng của chim Lạc.',
      story: 'Hình tượng chim Lạc sải cánh dài in trên gấu váy kết hợp 3 mặt trời Đông Sơn trên dải vạt đỏ rực rỡ.',
      structure: 'Chân váy lụa dập ly màu vàng tươi, gấu in hình chim Lạc đỏ son, dải yếm vạt buông trước thêu 3 mặt trời Đông Sơn.',
      usage: 'Đại lễ phục và nghi lễ hội mùa thời Văn Lang - Âu Lạc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="lacvietGoldSkirt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="45%" stop-color="#facc15" />
              <stop offset="85%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#ca8a04" />
            </linearGradient>
          </defs>

          <!-- Chân váy vàng rực rỡ dập ly xòe mềm mại -->
          <path d="M 168 274 Q 200 280 232 274 Q 242 340 250 380 L 276 492 Q 200 500 124 492 L 150 380 Q 158 340 168 274 Z" fill="url(#lacvietGoldSkirt)" stroke="#a16207" stroke-width="2" />

          <!-- Nếp ly vàng óng ả -->
          <path d="M 172 284 Q 158 385 144 492" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8" />
          <path d="M 181 286 Q 172 385 162 494" stroke="#eab308" stroke-width="1.8" fill="none" />
          <path d="M 191 288 Q 186 385 182 496" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8" />
          <path d="M 200 288 Q 200 385 200 497" stroke="#ca8a04" stroke-width="2.2" fill="none" />
          <path d="M 209 288 Q 214 385 218 496" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8" />
          <path d="M 219 286 Q 228 385 238 494" stroke="#eab308" stroke-width="1.8" fill="none" />
          <path d="M 228 284 Q 242 385 256 492" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8" />
        </svg>
    `)
    },
    {
      id: 'f_bot_vay_xanhcom_haule',
      name: 'Chân Váy Xếp Ly Xanh Cốm (Hậu Lê - Mạc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Sắc xanh cốm non mát lành, thanh nhã, tượng trưng cho sức sống mùa xuân và nét đài các.',
      story: 'Chân váy dập ly nhiều nếp màu xanh cốm (sage green) tha thướt kết hợp hoàn hảo cùng áo giao lĩnh xanh cốm.',
      structure: 'Chân váy maxi dập ly nhiều tầng mềm mại màu xanh cốm, cạp thun co giãn, rủ dài phủ kín cổ chân.',
      usage: 'Phối đồ chuẩn mực cho áo giao lĩnh xanh cốm nữ.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="sageSkirtSilk" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#b5ceab" />
              <stop offset="45%" stop-color="#9dbb93" />
              <stop offset="85%" stop-color="#7a9b6f" />
              <stop offset="100%" stop-color="#55754b" />
            </linearGradient>
          </defs>

          <!-- Chân váy xếp ly xanh cốm bồng bềnh tha thướt -->
          <path d="M 168 274 Q 200 280 232 274 Q 242 340 250 380 L 276 492 Q 200 500 124 492 L 150 380 Q 158 340 168 274 Z" fill="url(#sageSkirtSilk)" stroke="#4a6640" stroke-width="2" />

          <!-- Nếp ly ánh lụa xanh cốm 3D mềm mại -->
          <path d="M 172 284 Q 158 385 144 492" stroke="#d1e7c9" stroke-width="1.8" fill="none" opacity="0.7" />
          <path d="M 181 286 Q 172 385 162 494" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.65" />
          <path d="M 191 288 Q 186 385 182 496" stroke="#69855e" stroke-width="1.6" fill="none" />
          <path d="M 200 288 Q 200 385 200 497" stroke="#ffffff" stroke-width="2.2" fill="none" opacity="0.8" />
          <path d="M 209 288 Q 214 385 218 496" stroke="#69855e" stroke-width="1.6" fill="none" />
          <path d="M 219 286 Q 228 385 238 494" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.65" />
          <path d="M 228 284 Q 242 385 256 492" stroke="#d1e7c9" stroke-width="1.8" fill="none" opacity="0.7" />
        </svg>
    `)
    },
    {
      id: 'f_bot_vay_navy_haule',
      name: 'Chân Váy Xếp Ly Xanh Navy Hoàng Gia (Hậu Lê - Mạc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Sắc xanh navy / chàm thẫm quyền quý, tạo chiều sâu mỹ học cung đình lộng lẫy.',
      story: 'Chân váy dập ly nhiều nếp màu xanh navy buông rủ tha thướt cùng áo đối khâm hoàng gia.',
      structure: 'Chân váy maxi dập ly xòe tròn màu xanh navy/chàm đậm, buông rủ bồng bềnh.',
      usage: 'Phối đồ chuẩn mực cho áo đối khâm hoàng gia nữ.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="navySkirtSilk" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#2a3f68" />
              <stop offset="45%" stop-color="#1e3a8a" />
              <stop offset="85%" stop-color="#172554" />
              <stop offset="100%" stop-color="#0b1329" />
            </linearGradient>
          </defs>

          <!-- Chân váy gấm navy xếp nếp hoàng gia buông dài uy nghi -->
          <path d="M 168 274 Q 200 280 232 274 Q 242 340 250 380 L 276 492 Q 200 500 124 492 L 150 380 Q 158 340 168 274 Z" fill="url(#navySkirtSilk)" stroke="#0b1329" stroke-width="2" />

          <!-- Nếp ly ánh kim tuyến xanh navy sâu thẳm -->
          <path d="M 172 284 Q 158 385 144 492" stroke="#3b82f6" stroke-width="1.8" fill="none" opacity="0.6" />
          <path d="M 181 286 Q 172 385 162 494" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.7" />
          <path d="M 191 288 Q 186 385 182 496" stroke="#0f172a" stroke-width="1.6" fill="none" />
          <path d="M 200 288 Q 200 385 200 497" stroke="#93c5fd" stroke-width="2.2" fill="none" opacity="0.8" />
          <path d="M 209 288 Q 214 385 218 496" stroke="#0f172a" stroke-width="1.6" fill="none" />
          <path d="M 219 286 Q 228 385 238 494" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.7" />
          <path d="M 228 284 Q 242 385 256 492" stroke="#3b82f6" stroke-width="1.8" fill="none" opacity="0.6" />
        </svg>
    `)
    },
    {
      id: 'f_bot_vay_xeply_do',
      name: 'Chân Váy Lụa Xếp Ly Đỏ Son (Ngô - Đinh - Tiền Lê)',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'female',
      meaning: 'Sắc đỏ son son rỗi kiêu sa, tôn vẻ đài các tha thướt của tiểu thư khuê các.',
      story: 'Chân váy lụa dập ly nhiều tầng màu đỏ son buông rủ bồng bềnh, phối cùng tà áo giao lĩnh hồng phấn.',
      structure: 'Váy maxi dập ly xòe mềm mại màu đỏ son rực rỡ, cạp thun ôm eo, buông rủ kín cổ chân.',
      usage: 'Phối đồ chuẩn mực cho áo giao lĩnh hồng phấn nữ.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="crimsonPleatedSkirt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="45%" stop-color="#dc2626" />
              <stop offset="80%" stop-color="#b91c1c" />
              <stop offset="100%" stop-color="#7f1d1d" />
            </linearGradient>
          </defs>

          <!-- Chân váy lụa đỏ son dập ly bồng bềnh -->
          <path d="M 168 274 Q 200 280 232 274 Q 242 340 250 380 L 276 492 Q 200 500 124 492 L 150 380 Q 158 340 168 274 Z" fill="url(#crimsonPleatedSkirt)" stroke="#7f1d1d" stroke-width="2" />

          <!-- Nếp ly ánh lụa đỏ son 3D -->
          <path d="M 172 284 Q 158 385 144 492" stroke="#fca5a5" stroke-width="1.8" fill="none" opacity="0.7" />
          <path d="M 181 286 Q 172 385 162 494" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.65" />
          <path d="M 191 288 Q 186 385 182 496" stroke="#991b1b" stroke-width="1.6" fill="none" />
          <path d="M 200 288 Q 200 385 200 497" stroke="#ffffff" stroke-width="2.2" fill="none" opacity="0.8" />
          <path d="M 209 288 Q 214 385 218 496" stroke="#991b1b" stroke-width="1.6" fill="none" />
          <path d="M 219 286 Q 228 385 238 494" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.65" />
          <path d="M 228 284 Q 242 385 256 492" stroke="#fca5a5" stroke-width="1.8" fill="none" opacity="0.7" />
        </svg>
    `)
    },
    {
      id: 'f_bot_vay_ruby_tuongvan',
      name: 'Chân Váy Lụa Xếp Ly Đỏ Ruby Thêu Tường Vân Viền Vàng (Ngô - Đinh - Tiền Lê)',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'female',
      meaning: 'Sắc đỏ ruby quý tộc kết hợp hoa văn mây Tường Vân và sóng nước viền chỉ vàng kim mang lại phúc khí dồi dào.',
      story: 'Chân váy lụa dập ly màu đỏ ruby bồng bềnh nhiều tầng, gấu váy thêu hoa văn sóng nước và mây Tường Vân sa kim lộng lẫy.',
      structure: 'Váy maxi dập ly đỏ ruby nhiều nếp xếp tầng, gấu váy viền chỉ vàng kim thêu hoa văn cung đình.',
      usage: 'Phối đồ chuẩn mực cho đại lễ phục Giao Lĩnh Tường Vân.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="rubyPleatedSkirt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#e11d48" />
              <stop offset="35%" stop-color="#be123c" />
              <stop offset="70%" stop-color="#9f1239" />
              <stop offset="100%" stop-color="#4c0519" />
            </linearGradient>
            <linearGradient id="skirtGoldBorder" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fde047" />
              <stop offset="50%" stop-color="#facc15" />
              <stop offset="100%" stop-color="#ca8a04" />
            </linearGradient>
          </defs>

          <!-- Chân váy lụa đỏ ruby dập ly bồng bềnh -->
          <path d="M 168 274 Q 200 280 232 274 Q 242 340 250 380 L 276 492 Q 200 500 124 492 L 150 380 Q 158 340 168 274 Z" fill="url(#rubyPleatedSkirt)" stroke="#4c0519" stroke-width="2" />

          <!-- Nếp ly ánh lụa đỏ ruby 3D lộng lẫy -->
          <path d="M 172 284 Q 158 385 144 492" stroke="#fda4af" stroke-width="2" fill="none" opacity="0.75" />
          <path d="M 181 286 Q 172 385 162 494" stroke="#ffffff" stroke-width="2.2" fill="none" opacity="0.7" />
          <path d="M 191 288 Q 186 385 182 496" stroke="#4c0519" stroke-width="1.8" fill="none" />
          <path d="M 200 288 Q 200 385 200 497" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.85" />
          <path d="M 209 288 Q 214 385 218 496" stroke="#4c0519" stroke-width="1.8" fill="none" />
          <path d="M 219 286 Q 228 385 238 494" stroke="#ffffff" stroke-width="2.2" fill="none" opacity="0.7" />
          <path d="M 228 284 Q 242 385 256 492" stroke="#fda4af" stroke-width="2" fill="none" opacity="0.75" />

          <!-- Gấu váy thêu hoa văn Tường Vân & Sóng nước viền chỉ vàng hoàng gia -->
          <path d="M 124 482 Q 200 492 276 482 L 276 492 Q 200 500 124 492 Z" fill="url(#skirtGoldBorder)" stroke="#854d0e" stroke-width="1.2" />
          <path d="M 140 487 Q 150 481 160 487 Q 170 481 180 487 Q 190 481 200 487 Q 210 481 220 487 Q 230 481 240 487 Q 250 481 260 487" stroke="#854d0e" stroke-width="1.4" fill="none" />
        </svg>
    `)
    },
    {
      id: 'f_bot_thuong_quang_lytran',
      name: 'Váy Thường Quây Dập Ly Ngà Sen (Lý - Trần)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'female',
      meaning: 'Vẻ thanh tịnh, thoát tục như đóa sen nở chốn Thăng Long, mềm mại theo từng nhịp bước.',
      story: 'Váy thường dập ly màu trắng ngà sen buông rủ tha thướt là nền hoàn hảo cho áo viên lĩnh đỏ thắm và áo tứ điên thời Lý - Trần.',
      structure: 'Chân váy quây thường nhiều nếp xếp ly nhuyễn màu trắng ngà sen, tà buông xòe chạm cổ chân.',
      usage: 'Phối đồ chuẩn mực cho áo viên lĩnh, tứ điên và giao lĩnh nữ thời Lý - Trần.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="ivoryLotusSilk" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="45%" stop-color="#faf8f5" />
              <stop offset="85%" stop-color="#f0ebe1" />
              <stop offset="100%" stop-color="#dfd6c5" />
            </linearGradient>
          </defs>

          <!-- Váy thường quây dập ly trắng ngà sen thời Lý - Trần -->
          <path d="M 168 274 Q 200 280 232 274 Q 242 340 250 380 L 276 492 Q 200 500 124 492 L 150 380 Q 158 340 168 274 Z" fill="url(#ivoryLotusSilk)" stroke="#94a3b8" stroke-width="2" />

          <!-- Nếp ly ánh lụa trắng ngà sen bồng bềnh -->
          <path d="M 172 284 Q 158 385 144 492" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.9" />
          <path d="M 181 286 Q 172 385 162 494" stroke="#cbd5e1" stroke-width="1.6" fill="none" opacity="0.6" />
          <path d="M 191 288 Q 186 385 182 496" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8" />
          <path d="M 200 288 Q 200 385 200 497" stroke="#ffffff" stroke-width="3" fill="none" />
          <path d="M 209 288 Q 214 385 218 496" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8" />
          <path d="M 219 286 Q 228 385 238 494" stroke="#cbd5e1" stroke-width="1.6" fill="none" opacity="0.6" />
          <path d="M 228 284 Q 242 385 256 492" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.9" />
        </svg>
    `)
    },
    {
      id: 'f_bot_quan_hai_ong_tayson',
      name: 'Quần Lụa Hai Ống Đen (Tây Sơn)',
      eraName: 'Triều Tây Sơn (1778 – 1802)',
      eraNumber: 5,
      gender: 'female',
      meaning: 'Cuộc cách mạng trang phục giải phóng hoàn toàn sự vướng víu của váy đụp cổ, mang lại sự tự do vận động.',
      story: 'Quần hai ống lụa đen bền chắc giúp nữ binh và phụ nữ Tây Sơn xông pha chiến trận, gánh gồng lương thực cứu quốc.',
      structure: 'Quần lụa đen hai ống suông thẳng rộng rãi, cạp chun thoải mái, độ dài phủ mắt cá chân.',
      usage: 'Phối đồ chuẩn mực cho áo ngũ thân tay chẽn nữ Tây Sơn.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="blackSilkPantsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#18181b" />
              <stop offset="35%" stop-color="#27272a" />
              <stop offset="50%" stop-color="#3f3f46" />
              <stop offset="65%" stop-color="#27272a" />
              <stop offset="100%" stop-color="#18181b" />
            </linearGradient>
          </defs>
          <!-- Quần lụa đen hai ống nữ phom thẳng suông thon gọn chuẩn chân nữ -->
          <path d="M 168 274 Q 200 280 232 274 L 256 492 L 210 492 L 200 326 L 190 492 L 144 492 Z" fill="url(#blackSilkPantsGrad)" stroke="#09090b" stroke-width="1.6" />
          
          <line x1="170" y1="282" x2="158" y2="490" stroke="#52525b" stroke-width="1.2" />
          <line x1="230" y1="282" x2="242" y2="490" stroke="#52525b" stroke-width="1.2" />
        </svg>
    `)
    },
    {
      id: 'f_bot_quan_lua_nguyen',
      name: 'Quần Lụa Bạch Hoàng Cung Huế (Triều Nguyễn)',
      eraName: 'Triều Nguyễn (1802 – 1945)',
      eraNumber: 6,
      gender: 'female',
      meaning: 'Sự trong trắng, thanh bạch và khuôn phép tôn nghiêm của chốn hoàng cung triều Nguyễn.',
      story: 'Quần lụa bạch dập nếp phẳng phiu hai ống suông rộng mặc bên trong áo Nhật Bình tạo nên dáng vẻ uy nghi, đoan trang.',
      structure: 'Quần lụa tơ tằm trắng ngà ống suông rộng, phẳng phiu không nếp gấp thừa, cạp buộc dải lụa mềm.',
      usage: 'Phối đồ chuẩn mực cho áo Nhật Bình cung đình Huế.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="fWhiteSilkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f1f5f9" />
              <stop offset="25%" stop-color="#ffffff" />
              <stop offset="50%" stop-color="#fafaf9" />
              <stop offset="75%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#f1f5f9" />
            </linearGradient>
          </defs>
          <!-- Quần lụa bạch hai ống nữ phom thẳng suông thon gọn chuẩn chân nữ -->
          <path d="M 168 274 Q 200 280 232 274 L 256 492 L 210 492 L 200 326 L 190 492 L 144 492 Z" fill="url(#fWhiteSilkGrad)" stroke="#cbd5e1" stroke-width="1.4" />

          <!-- Nếp ly lụa bạch đoan trang -->
          <line x1="170" y1="282" x2="158" y2="490" stroke="#ffffff" stroke-width="2.2" />
          <line x1="180" y1="284" x2="176" y2="490" stroke="#e2e8f0" stroke-width="1.2" />
          <line x1="230" y1="282" x2="242" y2="490" stroke="#ffffff" stroke-width="2.2" />
          <line x1="220" y1="284" x2="224" y2="490" stroke="#e2e8f0" stroke-width="1.2" />
        </svg>
    `)
    },
    {
      id: 'f_bot_vay_cachtan_xxi',
      name: 'Chân Váy Dập Ly Xòe Trắng Ngà (TK XXI)',
      eraName: 'Thế kỷ XXI',
      eraNumber: 7,
      gender: 'female',
      meaning: 'Nét trẻ trung, nữ tính và bay bổng của phái đẹp trong trang phục áo dài cách tân thế kỷ mới.',
      story: 'Chân váy voan xếp ly xòe mềm mại màu trắng ngà buông rủ bay bổng theo từng bước đi dưới tà áo dài cách tân lửng.',
      structure: 'Chân váy voan nhiều lớp dập ly xòe bồng bềnh, cạp chun thoải mái, độ dài qua bắp chân.',
      usage: 'Phối đồ chuẩn mực cho áo dài cách tân nữ TK XXI.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 168 274 Q 200 280 232 274 Q 240 340 248 380 L 274 490 Q 200 496 126 490 L 152 380 Q 160 340 168 274 Z" fill="#ffffff" stroke="#475569" stroke-width="2.2" />
          <line x1="174" y1="288" x2="148" y2="491" stroke="#64748b" stroke-width="1.5" />
          <line x1="183" y1="290" x2="168" y2="493" stroke="#94a3b8" stroke-width="1.5" />
          <line x1="192" y1="292" x2="186" y2="494" stroke="#94a3b8" stroke-width="1.5" />
          <line x1="200" y1="292" x2="200" y2="496" stroke="#64748b" stroke-width="1.8" />
          <line x1="208" y1="292" x2="214" y2="494" stroke="#94a3b8" stroke-width="1.5" />
          <line x1="217" y1="290" x2="232" y2="493" stroke="#94a3b8" stroke-width="1.5" />
          <line x1="226" y1="288" x2="252" y2="491" stroke="#64748b" stroke-width="1.5" />
        </svg>
      `)
    },
    {
      id: 'f_bot_vay_xoe_trang_nga',
      name: 'Chân Váy Lụa Xòe Dập Ly Trắng Ngà (Nữ)',
      eraName: 'Thời kỳ Hiện Đại & Cổ Phong Nam Bộ',
      eraNumber: 7,
      gender: 'female',
      meaning: 'Nét nữ tính, bay bổng và tha thướt theo từng bước đi dưới tà áo xanh rêu.',
      story: 'Chân váy lụa dập ly màu trắng ngà buông rủ dài chấm gót, là điểm tựa thẩm mỹ hoàn hảo.',
      structure: 'Váy maxi lụa voan 2 lớp xếp ly mềm mại, cạp thun co giãn ôm eo nhẹ nhàng.',
      usage: 'Phối đồ cùng áo ngũ thân, áo dài cách tân nữ.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 274 Q 200 280 234 274 Q 242 340 250 380 L 276 492 Q 200 498 124 492 L 150 380 Q 158 340 166 274 Z" fill="#faf9f5" stroke="#475569" stroke-width="2.2" />
          <line x1="172" y1="288" x2="146" y2="493" stroke="#64748b" stroke-width="1.5" />
          <line x1="181" y1="290" x2="166" y2="494" stroke="#94a3b8" stroke-width="1.5" />
          <line x1="191" y1="292" x2="185" y2="495" stroke="#94a3b8" stroke-width="1.5" />
          <line x1="200" y1="292" x2="200" y2="497" stroke="#64748b" stroke-width="1.8" />
          <line x1="209" y1="292" x2="215" y2="495" stroke="#94a3b8" stroke-width="1.5" />
          <line x1="219" y1="290" x2="234" y2="494" stroke="#94a3b8" stroke-width="1.5" />
          <line x1="228" y1="288" x2="254" y2="493" stroke="#64748b" stroke-width="1.5" />
        </svg>
      `)
    }
  ],
  shoes: [
    {
      id: 'f_shoe_chan_tran',
      name: 'Chân Trần Mộc Mạc',
      eraName: 'Thời kỳ Văn Lang & Dân Gian',
      eraNumber: 1,
      gender: 'female',
      meaning: 'Nét nguyên sơ, tiếp xúc với đất mẹ trong các điệu múa mùa màng.',
      story: 'Thiếu nữ Lạc Việt múa giã gạo bên cối đá trên mặt trống đồng Hoàng Đạo.',
      structure: 'Bàn chân trần thanh thoát.',
      usage: 'Múa hội và sinh hoạt đồng nội.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
        </svg>
      `)
    },
    {
      id: 'f_shoe_hai_trang_kem_haule',
      name: 'Hài Thêu Hoa Đào Trắng Kem (Hình 1 - Trên)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Nét bước đi uyển chuyển, nhẹ nhàng như hoa nở theo từng bước chân.',
      story: 'Hình 1 (trên): Đôi hài lụa màu trắng kem mũi tròn thêu hoa đào hồng nhạt và lá xanh trang nhã.',
      structure: 'Mũi tròn thon gọn, thêu hoa đào hồng nhạt trên nền vải kem, đế bệt lót vải êm ái.',
      usage: 'Lễ phục trẩy hội xuân và du ngoạn.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 150 502 146 519 Q 165 524 188 520 L 188 484 Z" fill="#fdfbf7" stroke="#e7e2d6" stroke-width="1.8" />
          <circle cx="158" cy="510" r="2.2" fill="#f472b6" />
          <circle cx="155" cy="507" r="1.6" fill="#f472b6" />
          <circle cx="161" cy="507" r="1.6" fill="#f472b6" />
          <circle cx="158" cy="508" r="0.8" fill="#fbbf24" />
          <path d="M 212 484 L 212 520 Q 235 524 254 519 Q 250 502 234 484 Z" fill="#fdfbf7" stroke="#e7e2d6" stroke-width="1.8" />
          <circle cx="242" cy="510" r="2.2" fill="#f472b6" />
          <circle cx="239" cy="507" r="1.6" fill="#f472b6" />
          <circle cx="245" cy="507" r="1.6" fill="#f472b6" />
          <circle cx="242" cy="508" r="0.8" fill="#fbbf24" />
        </svg>
      `)
    },
    {
      id: 'f_shoe_hai_navy_kimtuyen_haule',
      name: 'Hài Gấm Navy Viền Vàng Kim Tuyến (Hậu Lê - Mạc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Sự kiêu sa, quý phái của phẩm phục cung đình triều Lê - Mạc.',
      story: 'Đôi hài gấm màu xanh navy thêu hoa văn kim tuyến vàng óng ả, nâng niu gót ngọc vương giả.',
      structure: 'Mũi hài tròn cong nhẹ, vải gấm navy thêu hoa văn chỉ vàng kim tuyến, đế êm ái.',
      usage: 'Đại lễ phục cung đình và cưới hỏi hoàng gia.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 146 502 142 519 Q 164 524 188 519 L 188 484 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.8" />
          <path d="M 142 519 Q 138 512 146 506" stroke="#fbbf24" stroke-width="1.6" fill="none" />
          <circle cx="158" cy="510" r="2.2" fill="#fbbf24" />
          <path d="M 212 484 L 212 519 Q 236 524 258 519 Q 254 502 234 484 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.8" />
          <path d="M 258 519 Q 262 512 254 506" stroke="#fbbf24" stroke-width="1.6" fill="none" />
          <circle cx="242" cy="510" r="2.2" fill="#fbbf24" />
        </svg>
      `)
    },
    {
      id: 'f_shoe_hai_vai_den_tuthan',
      name: 'Hài Vải Nhung Đen Mũi Tròn (Áo Tứ Thân Kinh Bắc)',
      eraName: 'Thời Hậu Lê & Triều Mạc',
      eraNumber: 4,
      gender: 'female',
      meaning: 'Nét mộc mạc, đoan trang, bước đi nhẹ nhàng thanh thoát của liền chị quan họ.',
      story: 'Đôi hài vải nhung đen đế khâu thủ công màu trắng êm ái, kết hợp cùng chân váy đen và áo tứ thân nâu gụ.',
      structure: 'Mũi tròn ôm khít bàn chân, vải nhung đen tuyền, đế vải may tay màu trắng mềm mại.',
      usage: 'Phối đồ chuẩn mực cho bộ Áo Tứ Thân Kinh Bắc.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 146 502 142 519 Q 164 524 188 519 L 188 484 Z" fill="#18181b" stroke="#09090b" stroke-width="1.8" />
          <path d="M 142 519 L 188 519" stroke="#f4f4f5" stroke-width="2.5" />
          <path d="M 212 484 L 212 519 Q 236 524 258 519 Q 254 502 234 484 Z" fill="#18181b" stroke="#09090b" stroke-width="1.8" />
          <path d="M 212 519 L 258 519" stroke="#f4f4f5" stroke-width="2.5" />
        </svg>
      `)
    },
    {
      id: 'f_shoe_hai_theu_hoa',
      name: 'Hài Lụa Mũi Tròn Thêu Hoa Đào Đỏ Son (Ngô - Đinh - Tiền Lê & TK XXI)',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'female',
      meaning: 'Sắc hoa đào tươi thắm mang lại sinh khí mùa xuân và vẻ thướt tha mềm mại theo từng bước chân.',
      story: 'Đôi hài lụa trắng ngà mũi tròn thêu hoa đào đỏ son cánh hồng và lá xanh, phối cùng áo giao lĩnh hồng phấn.',
      structure: 'Mũi hài tròn thon gọn vải lụa trắng ngà, thêu đóa hoa đào đỏ rực rỡ và nụ hoa mai vàng, đế bệt êm ái.',
      usage: 'Lễ phục mùa xuân, trẩy hội làng và dạo phố.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 146 502 142 519 Q 164 524 188 519 L 188 484 Z" fill="#fff7ed" stroke="#fed7aa" stroke-width="1.8" />
          <circle cx="156" cy="510" r="2.8" fill="#ef4444" />
          <circle cx="152" cy="506" r="1.8" fill="#f87171" />
          <circle cx="160" cy="506" r="1.8" fill="#f87171" />
          <circle cx="156" cy="508" r="1" fill="#facc15" />
          <path d="M 212 484 L 212 519 Q 236 524 258 519 Q 254 502 234 484 Z" fill="#fff7ed" stroke="#fed7aa" stroke-width="1.8" />
          <circle cx="244" cy="510" r="2.8" fill="#ef4444" />
          <circle cx="240" cy="506" r="1.8" fill="#f87171" />
          <circle cx="248" cy="506" r="1.8" fill="#f87171" />
          <circle cx="244" cy="508" r="1" fill="#facc15" />
        </svg>
      `)
    },
    {
      id: 'f_shoe_hai_cungdinh_tuongvan',
      name: 'Hài Cung Đình Thêu Mây Tường Vân Kim Tuyến (Ngô - Đinh - Tiền Lê)',
      eraName: 'Thời kỳ Bắc thuộc & Ngô - Đinh - Tiền Lê',
      eraNumber: 2,
      gender: 'female',
      meaning: 'Gót sen thanh cao, bước đi khoan thai tôn nghiêm của bậc quý phi, tiểu thư cung cấm.',
      story: 'Đôi hài lụa đỏ son mũi cong phụng hoàng thêu mây Tường Vân chỉ vàng kim tuyến sa kim lấp lánh.',
      structure: 'Mũi cong nhẹ thanh thoát, chất liệu lụa đỏ ruby thêu hoa văn hoàng gia sa kim, đế lót nỉ êm ái.',
      usage: 'Đại lễ phục cung đình thời Ngô - Đinh - Tiền Lê.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 144 498 136 515 Q 146 512 154 516 Q 168 522 188 519 L 188 484 Z" fill="#be123c" stroke="#881337" stroke-width="1.8" />
          <path d="M 142 512 Q 150 504 158 512" stroke="#fde047" stroke-width="1.8" fill="none" />
          <circle cx="150" cy="508" r="2.2" fill="#fde047" />
          <path d="M 212 484 L 212 519 Q 232 522 246 516 Q 254 512 264 515 Q 256 498 234 484 Z" fill="#be123c" stroke="#881337" stroke-width="1.8" />
          <path d="M 242 512 Q 250 504 258 512" stroke="#fde047" stroke-width="1.8" fill="none" />
          <circle cx="250" cy="508" r="2.2" fill="#fde047" />
        </svg>
    `)
    },
    {
      id: 'f_shoe_hai_theu_sen_lytran',
      name: 'Hài Thêu Hoa Sen Sa Kim Cung Đình (Lý - Trần)',
      eraName: 'Thời Lý - Trần - Hồ',
      eraNumber: 3,
      gender: 'female',
      meaning: 'Đóa sen thanh tịnh chốn hoàng thành Thăng Long, nâng niu gót sen đài các của công chúa Đại Việt.',
      story: 'Đôi hài lụa đỏ son mũi uốn cong nhẹ nhàng thêu đóa hoa sen vàng sa kim tinh xảo.',
      structure: 'Mũi cong nhẹ búp sen, chất liệu lụa đỏ thắm thêu chỉ tơ vàng sa kim, đế lót nỉ êm ái.',
      usage: 'Phối đồ chuẩn mực cho áo viên lĩnh, áo tứ điên và áo giao lĩnh nữ thời Lý - Trần.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 144 500 138 516 Q 146 512 152 516 Q 166 522 188 519 L 188 484 Z" fill="#b91c1c" stroke="#991b1b" stroke-width="1.8" />
          <circle cx="152" cy="512" r="2.4" fill="#facc15" />
          <path d="M 144 514 Q 152 506 160 514" stroke="#fef08a" stroke-width="1.2" fill="none" />
          <path d="M 212 484 L 212 519 Q 234 522 248 516 Q 254 512 262 516 Q 256 500 234 484 Z" fill="#b91c1c" stroke="#991b1b" stroke-width="1.8" />
          <circle cx="248" cy="512" r="2.4" fill="#facc15" />
          <path d="M 240 514 Q 248 506 256 514" stroke="#fef08a" stroke-width="1.2" fill="none" />
        </svg>
      `)
    },
    {
      id: 'f_shoe_hai_vai_tayson',
      name: 'Hài Vải Thêu Dẻo Dai Nữ Binh (Tây Sơn)',
      eraName: 'Triều Tây Sơn (1778 – 1802)',
      eraNumber: 5,
      gender: 'female',
      meaning: 'Sự kiên cường, dũng mãnh và bước đi nhanh nhẹn của nữ tướng và đội nữ binh Tây Sơn.',
      story: 'Đôi hài vải đỏ sẫm ôm sát chân, mũi tròn nhỏ gọn, khâu chỉ bền chắc giúp vận động linh hoạt.',
      structure: 'Vải thô đỏ sẫm viền đen, ôm khít bàn chân, đế vải may tay mềm mại dẻo dai.',
      usage: 'Quân phục nữ binh và trang phục Tây Sơn.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 146 502 142 519 Q 164 524 188 519 L 188 484 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.8" />
          <path d="M 142 519 L 188 519" stroke="#18181b" stroke-width="2" />
          <path d="M 212 484 L 212 519 Q 236 524 258 519 Q 254 502 234 484 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.8" />
          <path d="M 212 519 L 258 519" stroke="#18181b" stroke-width="2" />
        </svg>
      `)
    },
    {
      id: 'f_shoe_hai_theu_nguyen',
      name: 'Hài Thêu Phượng Cung Đình Triều Nguyễn (Triều Nguyễn)',
      eraName: 'Triều Nguyễn (1802 – 1945)',
      eraNumber: 6,
      gender: 'female',
      meaning: 'Sự tôn quý tột bậc của bậc Mẫu nghi thiên hạ, hoa văn chim phượng hoàng và mây ngũ sắc lộng lẫy.',
      story: 'Hài gấm đỏ son triều Nguyễn thêu phượng hoàng dát kim tuyến vàng óng ả, mũi hài cong vút uy nghi.',
      structure: 'Mũi hài cong cao hình đầu rồng/phượng, thêu hoa văn chỉ vàng kim tuyến và mây ngũ sắc, đế gỗ bọc nhung.',
      usage: 'Đại lễ phục cung đình Huế, phối cùng áo Nhật Bình.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 166 484 Q 142 498 136 515 Q 146 510 152 516 Q 166 522 188 519 L 188 484 Z" fill="#8b1e1e" stroke="#701818" stroke-width="2" />
          <path d="M 136 515 Q 140 502 152 510" stroke="#facc15" stroke-width="1.8" fill="none" />
          <circle cx="154" cy="510" r="2.2" fill="#38bdf8" />
          <path d="M 212 484 L 212 519 Q 234 522 248 516 Q 254 510 264 515 Q 258 498 234 484 Z" fill="#8b1e1e" stroke="#701818" stroke-width="2" />
          <path d="M 264 515 Q 260 502 248 510" stroke="#facc15" stroke-width="1.8" fill="none" />
          <circle cx="246" cy="510" r="2.2" fill="#38bdf8" />
        </svg>
      `)
    },
    {
      id: 'f_shoe_dep_le_da_nau',
      name: 'Dép Lê Da Màu Nâu Đất Cổ Phong (Nữ)',
      eraName: 'Thời kỳ Hiện Đại & Cổ Phong Nam Bộ',
      eraNumber: 7,
      gender: 'female',
      meaning: 'Sự nhẹ nhàng, êm ái và gần gũi với thiên nhiên.',
      story: 'Dép lê quai da màu nâu đất mộc mạc tôn lên nét duyên thầm của bước chân nữ nhi.',
      structure: 'Quai da bò mềm nhuộm màu nâu đất, đế đệm cói êm nhẹ.',
      usage: 'Thường phục và dạo phố cùng áo dài / áo ngũ thân.',
      src: makeDataUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <path d="M 168 485 Q 153 502 150 519 Q 165 523 188 519 L 188 485 Z" fill="#8c6747" stroke="#5c4028" stroke-width="1.4" />
          <path d="M 150 502 Q 166 496 186 504 L 184 514 Q 166 506 148 514 Z" fill="#5c4028" />
          <path d="M 212 485 L 212 519 Q 235 523 250 519 Q 247 502 232 485 Z" fill="#8c6747" stroke="#5c4028" stroke-width="1.4" />
          <path d="M 214 504 Q 234 496 250 502 L 252 514 Q 234 506 216 514 Z" fill="#5c4028" />
        </svg>
      `)
    }
  ]
};
