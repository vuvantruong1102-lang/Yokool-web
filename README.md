# YOKOOL Website — v2.0

Website tĩnh cho thương hiệu Yokool, giao diện sáng (light theme) với màu chủ đạo **#DC143B** (crimson red). Pure HTML/CSS/JS — không framework, không build step.

## Cấu trúc thư mục

```
yokool/
├── index.html              ← Trang chủ (carousel + product grid)
├── styles.css              ← CSS dùng chung cho cả site
├── script.js               ← JavaScript (carousel, menu, animations)
├── README.md               ← File này
├── images/                 ← Ảnh và banner
│   ├── banner-1.svg        ← Banner slide 1 (SL207)
│   ├── banner-2.svg        ← Banner slide 2 (OL212)
│   ├── banner-3.svg        ← Banner slide 3 (JP395)
│   ├── product-sl207.svg   ← Ảnh sản phẩm SL207
│   ├── product-ol212.svg   ← Ảnh sản phẩm OL212
│   ├── product-jp395.svg   ← Ảnh sản phẩm JP395
│   └── product-rc502.svg   ← Ảnh sản phẩm RC502
└── products/               ← Trang chi tiết từng sản phẩm
    ├── sl207.html
    ├── ol212.html
    ├── jp395.html
    └── rc502.html
```

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

Tất cả ảnh hiện tại là SVG placeholder do mình tự vẽ. Để thay bằng ảnh AI hoặc ảnh chụp thật:

**Cách 1 - Thay file SVG bằng file PNG/JPG**:
1. Đặt ảnh mới vào folder `images/`
2. Trong từng file HTML, sửa `src="images/banner-1.svg"` thành `src="images/banner-1.jpg"` (đổi đuôi)
3. Khuyến nghị kích thước:
   - Banner: 1600×600px (tỉ lệ 16:6)
   - Sản phẩm: 800×800px (vuông)

**Cách 2 - Đặt ảnh mới cùng tên SVG cũ**:
- Đặt file mới vào `images/` với chính xác tên cũ (`banner-1.svg`, `product-sl207.svg`,...)
- Không cần sửa HTML

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

**Q: Tại sao SVG mà không phải PNG/JPG?**
A: SVG nhẹ hơn, sắc nét ở mọi kích thước (retina), dễ chỉnh màu. Khi bạn có ảnh AI rồi thì thay sang PNG/JPG cũng được.

**Q: Sao không dùng React/Next.js?**
A: Site tĩnh đơn giản, vài trang sản phẩm. HTML thuần load nhanh hơn, dễ host miễn phí, không phải build. Khi nào cần dynamic (đặt hàng online, blog có quản trị) sẽ chuyển.

**Q: Cloudflare Pages có giới hạn gì?**
A: Free tier: unlimited bandwidth, 500 builds/tháng, 100 deploys/ngày. Quá đủ cho website thương mại nhỏ.

**Q: Nếu Cloudflare Pages chậm propagate?**
A: Đợi 30-60 giây, mở incognito để bypass cache, hoặc vào Cloudflare dashboard purge cache.

---

© 2026 YOKOOL — Made in Vietnam · v2.0 light theme · Powered by Cloudflare Pages
