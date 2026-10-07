# -*- coding: utf-8 -*-
import re

with open('src/components/DressingRoom/fittingAssets.ts', 'r', encoding='utf-8') as f:
    code = f.read()

male_fit_updates = {
    'm_top_vanlang_tattoo': '''
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

          <!-- Thân áo sát nách vải lanh sa cát vàng Đông Sơn, ôm phom cơ thể vừa vặn chuẩn tỉ lệ -->
          <path d="M 186 164 L 138 174 Q 132 206 150 200 Q 146 230 150 256 L 164 274 Q 200 280 236 274 L 250 256 Q 254 230 250 200 Q 268 206 262 174 L 214 164 Q 200 172 186 164 Z" fill="url(#vlSandLinen)" stroke="#b45309" stroke-width="1.8" />
          
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
    ''',

    'm_top_vienlinh_nauhong': '''
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
          </defs>

          <!-- Cổ trong lót lụa trắng ngà viên lĩnh -->
          <path d="M 186 148 Q 200 142 214 148 L 214 166 Q 200 160 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Lót tay đỏ son lộ ra tự nhiên khi buông tay -->
          <path d="M 116 288 Q 132 282 148 276 L 152 288 Q 128 296 120 302 Z" fill="url(#crimsonLining)" stroke="#991b1b" stroke-width="1" />
          <path d="M 284 288 Q 268 282 252 276 L 248 288 Q 272 296 280 302 Z" fill="url(#crimsonLining)" stroke="#991b1b" stroke-width="1" />

          <!-- Thân áo viên lĩnh gấm nâu hồng gạch cắt may vừa vặn đĩnh đạc -->
          <path d="M 186 164 Q 160 168 138 174 Q 124 220 116 288 Q 134 280 152 274 Q 152 226 154 256 Q 150 350 148 438 Q 200 448 252 438 Q 250 350 246 256 Q 248 226 248 274 Q 266 280 284 288 Q 276 220 262 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#terracottaSilk)" stroke="#742a25" stroke-width="2" />

          <!-- Dải ánh lụa mềm mại lượn dọc cánh tay & thân áo -->
          <path d="M 138 178 Q 126 230 120 284" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.35" stroke-linecap="round" />
          <path d="M 262 178 Q 274 230 280 284" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.35" stroke-linecap="round" />
          <path d="M 166 220 Q 160 330 164 434" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.25" />
          <path d="M 234 220 Q 240 330 236 434" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.25" />

          <!-- Cổ tròn viên lĩnh nẹp viền trắng ngà thanh nhã cài cúc ngọc -->
          <path d="M 184 148 Q 200 140 216 148 L 214 164 Q 200 156 186 164 Z" fill="#ffffff" stroke="#742a25" stroke-width="1.6" />
          <circle cx="218" cy="168" r="3.2" fill="#fef08a" stroke="#78350f" stroke-width="1" />

          <!-- Hoa văn đoàn hoa / mây cuộn dệt chìm sang trọng trên nền gấm -->
          <circle cx="200" cy="216" r="16" fill="none" stroke="#fca5a5" stroke-width="1.4" opacity="0.6" stroke-dasharray="4,2" />
          <circle cx="200" cy="216" r="8" fill="none" stroke="#fca5a5" stroke-width="1" opacity="0.6" />
          <circle cx="178" cy="280" r="12" fill="none" stroke="#fca5a5" stroke-width="1.2" opacity="0.5" />
          <circle cx="222" cy="280" r="12" fill="none" stroke="#fca5a5" stroke-width="1.2" opacity="0.5" />
          <circle cx="200" cy="350" r="18" fill="none" stroke="#fca5a5" stroke-width="1.4" opacity="0.5" stroke-dasharray="5,2" />

          <line x1="200" y1="166" x2="200" y2="442" stroke="#8d3d37" stroke-width="1.4" opacity="0.8" />
          <ellipse cx="118" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
          <ellipse cx="282" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
        </svg>
    ''',

    'm_top_vienlinh_lytran': '''
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="oceanSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="35%" stop-color="#1e40af" />
              <stop offset="70%" stop-color="#1e3a8a" />
              <stop offset="100%" stop-color="#0f172a" />
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

          <!-- Cổ trong lót lụa trắng ngà -->
          <path d="M 186 148 Q 200 142 214 148 L 214 166 Q 200 160 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo viên lĩnh gấm xanh lam/ngọc Đại Việt cắt may vừa khít vóc dáng -->
          <path d="M 186 164 Q 160 168 138 174 Q 124 218 116 288 Q 134 280 152 274 Q 152 226 154 256 Q 150 350 148 440 Q 200 450 252 440 Q 250 350 246 256 Q 248 226 248 274 Q 266 280 284 288 Q 276 218 262 174 Q 240 168 214 164 Q 200 176 186 164 Z" fill="url(#oceanSilk)" stroke="#0b1329" stroke-width="2" />

          <!-- Ánh lụa bóng mượt dọc cánh tay -->
          <path d="M 138 178 Q 126 230 120 284" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.4" />
          <path d="M 262 178 Q 274 230 280 284" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.4" />
          <path d="M 166 280 Q 160 360 164 438" stroke="#60a5fa" stroke-width="3" fill="none" opacity="0.3" />
          <path d="M 234 280 Q 240 360 236 438" stroke="#60a5fa" stroke-width="3" fill="none" opacity="0.3" />

          <!-- Cổ tròn nẹp viền xanh lam đậm cài cúc vàng kim sa -->
          <path d="M 184 148 Q 200 141 216 148 L 214 164 Q 200 157 186 164 Z" fill="#1d4ed8" stroke="#0f172a" stroke-width="1.6" />
          <circle cx="218" cy="172" r="3.2" fill="#fde047" stroke="#78350f" stroke-width="1" />

          <!-- Họa tiết Hoa Sen & Mây Cuộn Thời Lý - Trần trước ngực -->
          <circle cx="200" cy="216" r="22" fill="none" stroke="url(#lotusGold)" stroke-width="2" />
          <circle cx="200" cy="216" r="14" fill="none" stroke="#fde047" stroke-width="1.2" stroke-dasharray="4,2" opacity="0.9" />
          <circle cx="200" cy="216" r="6" fill="url(#lotusGold)" />
          <path d="M 184 216 Q 200 194 216 216 Q 200 238 184 216 Z" fill="#93c5fd" opacity="0.3" />

          <!-- Đai ngọc hoàng triều bản to ngang eo với khóa ngọc mạ vàng -->
          <rect x="150" y="258" width="100" height="15" rx="2" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />
          <rect x="188" y="256" width="24" height="19" rx="3" fill="url(#goldBeltGrad)" stroke="#78350f" stroke-width="1.5" />
          <circle cx="200" cy="266" r="4" fill="#38bdf8" stroke="#0369a1" stroke-width="1" />

          <ellipse cx="118" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
          <ellipse cx="282" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
        </svg>
    ''',

    'm_top_tudien_nam_lytran': '''
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

          <!-- Cổ lót trong trắng ngà -->
          <path d="M 186 148 Q 200 142 214 148 L 214 166 Q 200 160 186 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Thân áo Tứ Điên 4 vạt màu gấm lam ngọc hoàng triều vừa vặn dáng người -->
          <path d="M 186 164 Q 160 168 138 174 Q 124 218 116 288 Q 134 280 152 274 Q 152 226 154 256 Q 150 350 148 440 Q 200 450 252 440 Q 250 350 246 256 Q 248 226 248 274 Q 266 280 284 288 Q 276 218 262 174 Q 240 168 214 164 Q 200 176 186 164 Z" fill="url(#tudienTealSilk)" stroke="#06181f" stroke-width="2" />

          <!-- Đường xẻ vạt trước chữ I đặc trưng của Áo Tứ Điên -->
          <line x1="200" y1="166" x2="200" y2="444" stroke="#071d24" stroke-width="2.2" />
          <line x1="202" y1="166" x2="202" y2="444" stroke="#38bdf8" stroke-width="0.8" opacity="0.3" />

          <!-- Cổ tròn nẹp viền cứng đài các -->
          <path d="M 184 148 Q 200 141 216 148 L 214 164 Q 200 157 186 164 Z" fill="#0c2b36" stroke="#06181f" stroke-width="1.6" />
          <circle cx="218" cy="170" r="3.2" fill="#fbbf24" stroke="#78350f" stroke-width="1" />

          <!-- Hoa sen & Lá đề thời Trần đính chỉ vàng kim dệt chìm -->
          <circle cx="200" cy="216" r="24" fill="none" stroke="url(#lotusReliefGold)" stroke-width="1.8" opacity="0.9" />
          <circle cx="200" cy="216" r="14" fill="none" stroke="#fde047" stroke-width="1.2" stroke-dasharray="4,2" opacity="0.8" />
          <circle cx="200" cy="216" r="6" fill="url(#lotusReliefGold)" />
          <circle cx="174" cy="330" r="14" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />
          <circle cx="226" cy="330" r="14" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />
          <circle cx="200" cy="390" r="16" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />

          <!-- Đai ngọc hoàng gia thắt ngang eo -->
          <rect x="150" y="258" width="100" height="15" rx="2" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />
          <rect x="188" y="256" width="24" height="19" rx="3" fill="url(#lotusReliefGold)" stroke="#78350f" stroke-width="1.5" />
          <circle cx="200" cy="266" r="4" fill="#38bdf8" stroke="#0369a1" stroke-width="1" />

          <ellipse cx="118" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
          <ellipse cx="282" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
        </svg>
    ''',

    'm_top_giaolinh_thungthu_haule': '''
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

          <!-- Cửa tay thụng lót lụa đỏ son buông rủ vừa vặn phom dáng -->
          <path d="M 114 290 Q 132 280 148 274 L 152 288 Q 128 298 118 304 Z" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="1" />
          <path d="M 286 290 Q 268 280 252 274 L 248 288 Q 272 298 282 304 Z" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="1" />

          <!-- Thân áo Giao Lĩnh Thụng Thủ gấm nâu đất viền son tỉ lệ cân đối hoàn hảo -->
          <path d="M 186 164 Q 158 168 138 174 Q 122 220 114 290 Q 134 280 152 274 Q 152 226 154 256 Q 150 350 148 442 Q 200 452 252 442 Q 250 350 246 256 Q 248 226 248 274 Q 266 280 286 290 Q 278 220 262 174 Q 242 168 214 164 Q 200 176 186 164 Z" fill="url(#mochaBrocade)" stroke="#1a0c07" stroke-width="2" />

          <!-- Dải ánh lụa mềm mại -->
          <path d="M 138 176 Q 124 232 118 286" stroke="#8d5b41" stroke-width="3" fill="none" opacity="0.4" stroke-linecap="round" />
          <path d="M 262 176 Q 276 232 282 286" stroke="#8d5b41" stroke-width="3" fill="none" opacity="0.4" stroke-linecap="round" />

          <!-- Nẹp cổ vạt chéo chữ V đỏ son lót mềm -->
          <path d="M 214 164 L 170 238 L 180 242 L 222 168 Z" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="1.5" opacity="0.85" />
          <path d="M 186 164 L 242 254 L 228 258 L 174 168 Z" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="2" />

          <!-- Đai thắt lưng lụa đỏ son & Dải lụa buông dài trước vạt áo -->
          <rect x="150" y="258" width="100" height="15" rx="2" fill="url(#redSashGrad)" stroke="#7f1d1d" stroke-width="1.5" />
          <path d="M 194 273 Q 192 350 190 415 L 202 415 Q 204 350 204 273 Z" fill="url(#crimsonLapel)" stroke="#7f1d1d" stroke-width="1.2" />

          <!-- Họa tiết Rồng Mây & Mặt Trời Đoàn Long Lê - Mạc dệt chìm sa kim -->
          <circle cx="200" cy="216" r="22" fill="none" stroke="#eab308" stroke-width="1.6" opacity="0.85" />
          <circle cx="200" cy="216" r="14" fill="none" stroke="#fde047" stroke-width="1" stroke-dasharray="4,2" opacity="0.9" />
          <circle cx="200" cy="216" r="6" fill="#eab308" />
          <circle cx="175" cy="330" r="16" fill="none" stroke="#ca8a04" stroke-width="1.2" opacity="0.6" />
          <circle cx="225" cy="330" r="16" fill="none" stroke="#ca8a04" stroke-width="1.2" opacity="0.6" />
          <circle cx="200" cy="385" r="18" fill="none" stroke="#ca8a04" stroke-width="1.2" opacity="0.6" />

          <ellipse cx="116" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
          <ellipse cx="284" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
        </svg>
    ''',

    'm_top_doikham_nam_haule': '''
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

          <!-- Áo lót giao lĩnh xanh lam nhạt bên trong -->
          <path d="M 186 150 L 200 166 L 214 150 L 214 166 L 186 166 Z" fill="url(#innerBlueSilk)" stroke="#93c5fd" stroke-width="1.2" />
          <path d="M 186 164 L 230 252 L 220 256 L 176 166 Z" fill="url(#innerBlueSilk)" stroke="#60a5fa" stroke-width="1.5" />

          <!-- Thân áo khoác đối khâm vàng be tao nhã buông tà song song vừa vặn -->
          <path d="M 186 164 Q 158 168 138 174 Q 124 220 116 288 Q 134 280 152 274 Q 152 226 154 256 Q 150 350 148 440 Q 200 450 252 440 Q 250 350 246 256 Q 248 226 248 274 Q 266 280 284 288 Q 276 220 262 174 Q 242 168 214 164 Q 200 174 186 164 Z" fill="url(#wheatSilkGrad)" stroke="#8c6f47" stroke-width="2" />

          <!-- Hai nẹp vạt đối xứng thẳng tắp nẹp viền lụa đậm sang trọng -->
          <path d="M 186 152 L 186 442 L 174 442 L 174 156 Z" fill="#caa97d" stroke="#8c6f47" stroke-width="1.5" />
          <path d="M 214 152 L 214 442 L 226 442 L 226 156 Z" fill="#caa97d" stroke="#8c6f47" stroke-width="1.5" />

          <!-- Hoa văn mây nước lam thêu chìm nhã nhặn -->
          <circle cx="158" cy="220" r="3.5" fill="#38bdf8" opacity="0.85" />
          <circle cx="242" cy="220" r="3.5" fill="#38bdf8" opacity="0.85" />
          <circle cx="160" cy="320" r="4" fill="#38bdf8" opacity="0.85" />
          <circle cx="240" cy="320" r="4" fill="#38bdf8" opacity="0.85" />
          <circle cx="165" cy="390" r="3.5" fill="#38bdf8" opacity="0.85" />
          <circle cx="235" cy="390" r="3.5" fill="#38bdf8" opacity="0.85" />

          <!-- CHIẾC QUẠT NAN TRE ĐEN CẦM TAY NHO NHÃ -->
          <g transform="translate(226, 235) rotate(20)">
            <path d="M 0 45 L -26 0 A 30 30 0 0 1 26 0 Z" fill="#18181b" stroke="#09090b" stroke-width="1.5" />
            <line x1="0" y1="45" x2="0" y2="0" stroke="#52525b" stroke-width="1.2" />
            <line x1="0" y1="45" x2="-14" y2="5" stroke="#52525b" stroke-width="1" />
            <line x1="0" y1="45" x2="14" y2="5" stroke="#52525b" stroke-width="1" />
            <line x1="0" y1="45" x2="0" y2="62" stroke="#27272a" stroke-width="2.5" />
            <circle cx="0" cy="62" r="2" fill="#fbbf24" />
          </g>

          <ellipse cx="118" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
          <ellipse cx="282" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
        </svg>
    ''',

    'm_top_tayson_nam': '''
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

          <!-- Cổ trong lót trắng -->
          <path d="M 188 144 Q 200 147 212 144 L 212 166 L 188 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />

          <!-- Thân áo ngũ thân tay chẽn đỏ thắm cờ đào Tây Sơn -->
          <path d="M 186 164 Q 158 168 138 174 L 112 288 Q 130 286 148 284 Q 150 230 154 256 L 152 408 Q 200 416 248 408 L 246 256 Q 250 230 252 284 Q 270 286 288 288 L 262 174 Q 240 168 214 164 Q 200 174 186 164 Z" fill="url(#taysonCrimson)" stroke="#450a0a" stroke-width="2" />

          <!-- Cổ đứng cài cúc chéo vai phải -->
          <path d="M 186 142 Q 200 146 214 142 L 214 166 Q 200 170 186 166 Z" fill="#7f1d1d" stroke="#450a0a" stroke-width="1.8" />
          <path d="M 200 168 L 228 226 L 222 228 L 194 170 Z" fill="#7f1d1d" />

          <!-- 3 Hạt khuy đồng mạ vàng uy dũng -->
          <circle cx="212" cy="180" r="3" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="218" cy="198" r="3" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="224" cy="216" r="3" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />

          <!-- Đai lưng đỏ thắm thắt gọn cơ động -->
          <rect x="150" y="256" width="100" height="15" rx="2" fill="url(#redBeltTayson)" stroke="#7f1d1d" stroke-width="1.5" />
          <path d="M 194 271 Q 192 320 190 355 L 198 355 Q 202 320 202 271 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="1" />

          <ellipse cx="112" cy="292" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
          <ellipse cx="288" cy="292" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
        </svg>
    ''',

    'm_top_aotac_nguyen': '''
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

          <!-- Cổ trong lót lụa trắng ngà -->
          <path d="M 188 144 Q 200 147 212 144 L 212 166 Q 200 169 188 166 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />

          <!-- Cửa tay thụng lót lụa đỏ son triều Nguyễn -->
          <path d="M 116 288 Q 132 280 148 274 L 152 288 Q 128 296 120 304 Z" fill="url(#aotacRedLining)" stroke="#7f1d1d" stroke-width="1" />
          <path d="M 284 288 Q 268 280 252 274 L 248 288 Q 272 296 280 304 Z" fill="url(#aotacRedLining)" stroke="#7f1d1d" stroke-width="1" />

          <!-- Thân Áo Tấc gấm xanh cẩm tay thụng vừa vặn đài các -->
          <path d="M 186 164 Q 160 168 138 174 Q 124 220 116 288 Q 134 280 152 274 Q 152 226 154 256 Q 150 350 148 440 Q 200 450 252 440 Q 250 350 246 256 Q 248 226 248 274 Q 266 280 284 288 Q 276 220 262 174 Q 240 168 214 164 Q 200 178 186 164 Z" fill="url(#aotacTealSilk)" stroke="#072221" stroke-width="2" />

          <!-- Ánh lụa óng mượt trên tay thụng -->
          <path d="M 138 178 Q 126 230 120 284" stroke="#5eead4" stroke-width="3" fill="none" opacity="0.35" stroke-linecap="round" />
          <path d="M 262 178 Q 274 230 280 284" stroke="#5eead4" stroke-width="3" fill="none" opacity="0.35" stroke-linecap="round" />
          <path d="M 166 220 Q 160 330 164 436" stroke="#5eead4" stroke-width="3" fill="none" opacity="0.3" />
          <path d="M 234 220 Q 240 330 236 436" stroke="#5eead4" stroke-width="3" fill="none" opacity="0.3" />

          <!-- Cổ đứng cao nẹp viền cài 5 cúc vàng kim sa ngũ thường -->
          <path d="M 186 142 Q 200 146 214 142 L 214 166 Q 200 170 186 166 Z" fill="#135250" stroke="#072221" stroke-width="1.8" />
          <line x1="200" y1="144" x2="200" y2="166" stroke="#072221" stroke-width="1.2" />

          <!-- 5 Khuy cài nách phải -->
          <circle cx="218" cy="182" r="3.2" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="214" cy="208" r="3" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />
          <circle cx="208" cy="234" r="3" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" />

          <ellipse cx="118" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
          <ellipse cx="282" cy="290" rx="6" ry="4" fill="#f5ba9e" stroke="#3b271d" stroke-width="1.2" />
        </svg>
    ''',

    'm_bot_kho_dongson': '''
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

          <!-- Quần thụng lụa màu nâu đồng ánh kim cắt may vừa khít vóc dáng -->
          <path d="M 158 266 Q 200 274 242 266 L 256 488 L 212 488 L 200 326 L 188 488 L 144 488 Z" fill="url(#earthBronzePants)" stroke="#27150c" stroke-width="2" />
          <line x1="160" y1="276" x2="148" y2="488" stroke="#facc15" stroke-width="2.2" />
          <line x1="240" y1="276" x2="252" y2="488" stroke="#facc15" stroke-width="2.2" />

          <!-- Đai lưng vàng kim và khố cam thêu 3 mặt trời Đông Sơn -->
          <rect x="150" y="260" width="100" height="18" fill="#eab308" stroke="#a16207" stroke-width="1.8" />
          <polygon points="174,276 226,276 220,388 200,412 180,388" fill="url(#orangeSashGrad)" stroke="#7c2d12" stroke-width="2" />
          <polygon points="176,278 224,278 218,386 200,408 182,386" fill="none" stroke="#fde047" stroke-width="1.8" />

          <circle cx="200" cy="302" r="10" fill="#fde047" stroke="#78350f" stroke-width="1.2" />
          <circle cx="200" cy="302" r="5" fill="#ea580c" />
          <circle cx="200" cy="334" r="12" fill="#fde047" stroke="#78350f" stroke-width="1.2" />
          <circle cx="200" cy="334" r="6" fill="#ea580c" />
          <circle cx="200" cy="370" r="14" fill="#fde047" stroke="#78350f" stroke-width="1.2" />
          <circle cx="200" cy="370" r="7" fill="#ea580c" />
        </svg>
    ''',

    'm_bot_quan_ong_rong_trang': '''
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560">
          <defs>
            <linearGradient id="whiteSilkPants" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#e8e4db" />
              <stop offset="40%" stop-color="#ffffff" />
              <stop offset="70%" stop-color="#fcfbf7" />
              <stop offset="100%" stop-color="#e8e4db" />
            </linearGradient>
          </defs>
          <path d="M 158 266 Q 200 274 242 266 L 256 488 L 212 488 L 200 326 L 188 488 L 144 488 Z" fill="url(#whiteSilkPants)" stroke="#94a3b8" stroke-width="1.8" />
          <path d="M 172 278 Q 166 380 166 486" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.8" />
          <path d="M 228 278 Q 234 380 234 486" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.8" />
        </svg>
    '''
}

for item_id, svg in male_fit_updates.items():
    pattern = rf"(id:\s*'{item_id}',[\s\S]*?src:\s*makeDataUri\(`)[\s\S]*?(`\s*\))"
    match = re.search(pattern, code)
    if match:
        code = re.sub(pattern, rf"\g<1>{svg}\g<2>", code, count=1)
        print(f"Updated tailored fit for male item {item_id}")
    else:
        print(f"Could not match pattern for male item {item_id}")

with open('src/components/DressingRoom/fittingAssets.ts', 'w', encoding='utf-8') as f:
    f.write(code)

print("Male tailored fit update completed.")
