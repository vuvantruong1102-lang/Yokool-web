# YOKOOL Website — v2.0

Website tĩnh cho thương hiệu Yokool, giao diện sáng (light theme) với màu chủ đạo **#DC143B** (crimson red). Pure HTML/CSS/JS — không framework, không build step.

## Cấu trúc thư mục

```
yokool/
├── index.html              ← Trang chủ (carousel + product grid)
├── news.html               ← Trang Tin tức (placeholder)
├── styles.css              ← CSS dùng chung cho cả site
├── script.js               ← JavaScript (carousel, menu dropdown, animations)
├── README.md               ← File này
├── images/                 ← Ảnh và banner (đều là .jpg / .png)
│   ├── yokool-logo.png     ← Logo thương hiệu (nền trong suốt)
│   ├── banner-1.jpg        ← Banner slide 1 (SL207) — 1600×600
│   ├── banner-2.jpg        ← Banner slide 2 (OL212) — 1600×600
│   ├── banner-3.jpg        ← Banner slide 3 (JP395) — 1600×600
│   ├── product-sl207.jpg   ← Ảnh sản phẩm SL207 — 800×800
│   ├── product-ol212.jpg   ← Ảnh sản phẩm OL212 — 800×800
│   ├── product-jp395.jpg   ← Ảnh sản phẩm JP395 — 800×800
│   └── product-rc502.jpg   ← Ảnh sản phẩm RC502 — 800×800
└── products/               ← Trang chi tiết từng sản phẩm
    ├── sl207.html
    ├── ol212.html
    ├── jp395.html
    └── rc502.html
```

## Cấu trúc menu

```
Trang chủ
Sản phẩm  ▾ (hover/tap)
  ├─ Sạc dự phòng ›
  │     └─ JP395
  ├─ Củ sạc ›
  │     └─ RC502
  └─ Ổ điện du lịch ›
        ├─ SL207
        └─ OL212
Tin tức
Liên hệ
```

Trên desktop: hover để mở dropdown. Trên mobile: tap để toggle (accordion).

## Cách deploy lên Cloudflare Pages

### Cách 1: Upload qua GitHub (đã làm rồi, chỉ cần update repo)

1. Vào repo GitHub `vuvantruong1102-lang/Yokool-web`
2. **Xoá tất cả file cũ** trong repo (chọn từng file → Delete)
3. Upload toàn bộ nội dung **bên trong** thư mục `yokool/` này lên repo (KHÔNG upload thư mục `yokool/` mà upload các file/folder bên trong nó)
4. Cloudflare Pages sẽ tự động deploy lại trong 30-60 giây

**LƯU Ý**: Khi upload phải đảm bảo file `index.html` nằm ở root của repo, không phải trong subfolder `yokool/index.html`.

### Cách 2: Drag & drop trực tiếp lên Cloudflare Pages

1. Vào Cloudflare dashboard → Pages → project `yokool-web`
2. Click "Create deployment" → "Upload assets"
3. Kéo cả 4 thứ: `index.html`, `styles.css`, `script.js`, thư mục `images/`, thư mục `products/`
4. Click "Deploy site"

## Test local trước khi deploy

1. Giải nén file zip (đừng mở trực tiếp từ trong zip)
2. Vào thư mục `yokool/`
3. Double-click `index.html`
4. Browser sẽ mở và hiển thị website

Nếu test trang sản phẩm: vào `products/` → double-click bất kỳ file `.html` nào.

## Tuỳ chỉnh

### Đổi link Shopee

Search & replace `https://shopee.vn/yokool` trong tất cả file `.html` thành link Shopee thật của bạn.

### Đổi thông tin liên hệ

Trong `index.html`, tìm section `<section class="contact-section">` và sửa:
- Số hotline: `+84 900 000 000`
- Zalo: `zalo.me/yokool`
- Email: `info@yokool.vn`

### Đổi màu thương hiệu

Trong `styles.css`, sửa biến CSS ở đầu file:

```css
:root {
  --brand: #DC143B;         /* màu chính */
  --brand-hover: #B30E2F;   /* màu hover (đậm hơn) */
}
```

### Thay ảnh placeholder bằng ảnh thật

Tất cả ảnh hiện tại là JPG placeholder do mình render từ thiết kế geometric. Để thay bằng ảnh AI hoặc ảnh chụp thật:

**Cách thay (đơn giản nhất)**:
1. Đặt ảnh của bạn với chính xác tên file cũ:
   - `images/product-sl207.jpg` — sản phẩm SL207
   - `images/product-ol212.jpg` — sản phẩm OL212
   - `images/product-jp395.jpg` — sản phẩm JP395
   - `images/product-rc502.jpg` — sản phẩm RC502
   - `images/banner-1.jpg`, `banner-2.jpg`, `banner-3.jpg` — 3 banner hero
2. Upload đè lên file cũ trên GitHub (cùng tên = tự thay)
3. Cloudflare tự build lại trong 30-60 giây

**Khuyến nghị kích thước**:
- Banner: **1600×600 px** (tỉ lệ 16:6, ảnh ngang). Nội dung quan trọng nên ở giữa-phải vì text overlay nằm bên trái.
- Sản phẩm: **800×800 px** (vuông). Nền trắng hoặc trong suốt sẽ hợp với theme nhất.
- Định dạng: JPG (file nhỏ, phù hợp ảnh chụp) hoặc PNG (nếu cần nền trong suốt). Nếu dùng PNG, đổi đuôi file thành `.png` rồi sửa HTML.

**Lưu ý ảnh OL212.jpg Jay đã có**: nền đen của ảnh đó sẽ tương phản mạnh với theme trắng. Có thể:
- Giữ nguyên — sẽ nổi bật, hiện đại
- Hoặc dùng AI/Photoshop xoá nền đen → còn lại sản phẩm đặt trên nền trắng/trong suốt → hài hoà hơn với theme

## Tính năng đã có

- ✅ Hero carousel 3 slide tự xoay 6 giây, có nút prev/next, dots
- ✅ Carousel hỗ trợ vuốt trên mobile, mũi tên bàn phím
- ✅ Header dính khi cuộn, blur background
- ✅ Mobile menu (hamburger) tự thu khi click link
- ✅ Scroll reveal — phần tử mờ rồi hiện khi cuộn tới
- ✅ Smooth scroll khi click anchor link (#contact)
- ✅ Hoàn toàn responsive — đẹp trên mobile, tablet, desktop
- ✅ Tối ưu cho diacritic tiếng Việt (font Be Vietnam Pro)
- ✅ Nút "Mua tại Shopee" ở mọi nơi cần (header, hero, CTA cuối, related products)
- ✅ Không có form thanh toán online — chỉ link Shopee + form tư vấn

## Tính năng chưa có (có thể thêm sau)

- Form gửi yêu cầu tư vấn (cần backend hoặc dịch vụ như Formspree)
- Tích hợp Google Analytics
- Sitemap.xml + robots.txt cho SEO
- Open Graph image cho khi share Facebook/Zalo
- Trang blog/tin tức

## Câu hỏi thường gặp

**Q: Tại sao toàn bộ ảnh là JPG?**
A: JPG nén tốt cho ảnh chụp sản phẩm thật, file nhỏ, mọi browser đều hiển thị. Nếu cần nền trong suốt (logo, icon) thì dùng PNG, đổi đuôi `.jpg` → `.png` trong HTML.

**Q: Tôi muốn dùng WebP cho ảnh để load nhanh hơn?**
A: Hoàn toàn có thể. Đặt file `.webp` vào `images/`, sửa đuôi trong HTML. Cloudflare hỗ trợ WebP tốt và tự nén/optimize.

**Q: Sao không dùng React/Next.js?**
A: Site tĩnh đơn giản, vài trang sản phẩm. HTML thuần load nhanh hơn, dễ host miễn phí, không phải build. Khi nào cần dynamic (đặt hàng online, blog có quản trị) sẽ chuyển.

**Q: Cloudflare Pages có giới hạn gì?**
A: Free tier: unlimited bandwidth, 500 builds/tháng, 100 deploys/ngày. Quá đủ cho website thương mại nhỏ.

**Q: Nếu Cloudflare Pages chậm propagate?**
A: Đợi 30-60 giây, mở incognito để bypass cache, hoặc vào Cloudflare dashboard purge cache.

---

© 2026 YOKOOL — Made in Vietnam · v2.0 light theme · Powered by Cloudflare Pages
