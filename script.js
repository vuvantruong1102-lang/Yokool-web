# YOKOOL — Website

Website giới thiệu sản phẩm Yokool, phong cách retro-futuristic / cyberpunk lấy cảm hứng từ sharge.com. Single-page, static, deploy lên Cloudflare Pages.

## Cấu trúc dự án

```
yokool/
├── index.html       # Trang chính (HTML)
├── styles.css       # Toàn bộ CSS
├── script.js        # JavaScript (animations, form)
├── README.md        # File này
└── images/          # Thư mục chứa ảnh sản phẩm (hiện đang trống)
```

Tổng cộng 3 file code + 1 file README. Không cần Node.js, không cần build step, không cài đặt gì. Push lên GitHub là chạy được.

---

## 1. Test trên máy trước khi deploy

Mở `index.html` bằng trình duyệt bất kỳ (Chrome/Edge/Firefox) — kéo file vào tab trình duyệt, hoặc double-click. Website hiển thị ngay.

Nếu muốn test giống production hơn (có URL `http://localhost`), mở Terminal/PowerShell trong thư mục `yokool/` rồi chạy:

```bash
# Nếu có Python 3:
python -m http.server 8000

# Nếu có Node.js:
npx serve

# Sau đó mở http://localhost:8000
```

---

## 2. Đẩy code lên GitHub

### Bước 2.1 — Tạo repo trên GitHub

1. Vào [github.com](https://github.com), click nút **"+"** góc trên bên phải → **New repository**
2. Tên repo: `yokool-website` (hoặc tên khác tuỳ ý)
3. Để **Public** (Cloudflare Pages cũng support Private, nhưng Public đơn giản hơn cho người mới)
4. **KHÔNG** tick "Add README" (vì repo này đã có sẵn)
5. Click **Create repository**

### Bước 2.2 — Upload code

Cách dễ nhất (không cần biết Git):

1. Trên trang repo vừa tạo, click **"uploading an existing file"** trong dòng "Quick setup"
2. Kéo-thả tất cả file trong thư mục `yokool/` vào trang đó (index.html, styles.css, script.js, README.md, folder images)
3. Cuộn xuống, ấn **Commit changes**

Cách dùng Git command line (nếu Jay biết Git):

```bash
cd yokool
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/yokool-website.git
git push -u origin main
```

---

## 3. Deploy lên Cloudflare Pages

### Bước 3.1 — Tạo Cloudflare Pages project

1. Đăng nhập [dash.cloudflare.com](https://dash.cloudflare.com)
2. Sidebar bên trái → **Compute** (hoặc **Workers & Pages**) → **Pages**
3. Click **Create application** → tab **Pages** → **Connect to Git**
4. Chọn GitHub, ủy quyền cho Cloudflare đọc repo của Jay
5. Chọn repo `yokool-website` → **Begin setup**

### Bước 3.2 — Cấu hình build

Vì đây là site static thuần, không cần build:

| Setting | Giá trị |
|---|---|
| Project name | `yokool` (sẽ thành yokool.pages.dev) |
| Production branch | `main` |
| Framework preset | **None** |
| Build command | (để trống) |
| Build output directory | `/` |

Click **Save and Deploy**. Đợi 30-60 giây, site sẽ live ở `https://yokool.pages.dev`.

### Bước 3.3 — Gắn domain yokool.vn (sau khi đã mua domain)

1. Vào project vừa deploy → tab **Custom domains** → **Set up a custom domain**
2. Nhập `yokool.vn`, làm theo hướng dẫn Cloudflare để thêm CNAME record
3. Nếu domain đã ở Cloudflare DNS, chỉ cần 1 click
4. Sau 5-10 phút, `yokool.vn` chạy luôn với SSL miễn phí

---

## 4. Cập nhật nội dung sau này

Vì code trên GitHub kết nối với Cloudflare Pages, mỗi lần Jay push commit lên GitHub thì website tự động cập nhật. Quy trình:

1. Sửa file trên máy (hoặc sửa trực tiếp trên github.com)
2. Commit + push
3. Cloudflare Pages tự build lại sau ~30 giây
4. Website mới live

### Những phần thường cần sửa

**Số điện thoại / Email** — mở `index.html`, tìm `+84 900 000 000` và `info@yokool.vn`, sửa thành thông tin thật.

**Link Shopee / Zalo** — tìm `shopee.vn/yokool` và `zalo.me/yokool`, thay bằng link thật.

**Thông số sản phẩm** — tìm phần `<section class="showcase" id="sl207">` (và 3 phần tương tự), sửa các thông số `Công suất`, `Cổng`, etc. cho đúng.

**Ảnh sản phẩm thật** — hiện tại đang dùng hình minh hoạ (CSS placeholder). Để thay bằng ảnh thật:

1. Lưu 4 ảnh sản phẩm vào thư mục `images/` với tên `sl207.jpg`, `ol212.jpg`, `jp395.jpg`, `rc502.jpg` (PNG cũng được)
2. Mở `index.html`, tìm `<div class="showcase-product showcase-product--sl207">`, thay bằng:
   ```html
   <img src="images/sl207.jpg" alt="Yokool SL207" class="showcase-product-img">
   ```
3. Mở `styles.css`, thêm cuối file:
   ```css
   .showcase-product-img {
     width: 80%;
     aspect-ratio: 1/1;
     object-fit: cover;
     border: 1px solid var(--border-medium);
   }
   ```
4. Làm tương tự cho OL212, JP395, RC502

---

## 5. Tính năng đã có

- Hero section với animation reveal khi load
- Grid 4 sản phẩm với hover effects
- 4 section chi tiết sản phẩm (xen kẽ trái-phải)
- Section "Tại sao chọn Yokool"
- Form đặt hàng (mở email client với nội dung đã điền sẵn — không cần backend)
- Header sticky với glass effect
- Mobile menu (responsive đầy đủ)
- Smooth scroll giữa các section
- Dark mode cyberpunk aesthetic
- Vietnamese typography optimized

---

## 6. Mở rộng sau này

Khi muốn nâng cấp (theo thứ tự đề xuất):

**Bước 1 — Form đặt hàng gửi email tự động (không cần mở email client)**: Đăng ký [Resend.com](https://resend.com) (free 100 email/ngày), thêm Pages Functions để xử lý form, gửi email tới `info@yokool.vn` mỗi khi có đơn.

**Bước 2 — Database lưu đơn hàng**: Tạo Cloudflare D1 database, bind vào Pages project, sửa Pages Function để lưu mỗi đơn vào DB. Sau này có thể thêm trang admin xem danh sách đơn.

**Bước 3 — Trang admin riêng**: Tạo Pages project thứ hai (`admin.yokool.vn`) làm dashboard quản lý sản phẩm/bài viết, cùng kết nối D1 và R2.

**Bước 4 — Blog SEO với AI**: Thêm section blog, dùng OpenAI API để viết bài về sạc nhanh, công nghệ GaN, mẹo du lịch...

---

## 7. Có vấn đề gì hỏi Claude

Bất kỳ lúc nào gặp lỗi hoặc muốn thay đổi/thêm tính năng, chỉ cần mô tả vấn đề là Claude sẽ hỗ trợ. Một số tình huống thường gặp:

- "Website không hiện font đẹp" → kiểm tra kết nối internet (font load từ Google Fonts)
- "Form submit không gửi được email" → form hiện chỉ mở email client, chưa gửi tự động. Cần Resend như mục 6 ở trên
- "Muốn thêm sản phẩm thứ 5" → copy 1 block `<section class="showcase">` trong index.html, sửa nội dung
- "Đổi màu chủ đạo" → mở `styles.css`, tìm `--accent-amber: #FF6B00;` và sửa thành mã màu khác

---

**Made for YOKOOL · v1.0 · Built for Cloudflare Pages**
