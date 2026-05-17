<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Yokool - Sạc nhanh, sạc dự phòng và phụ kiện điện thông minh. Công nghệ GaN, thiết kế hiện đại, độ tin cậy cao.">
  <meta name="theme-color" content="#050505">
  <title>YOKOOL — Năng lượng. Không giới hạn.</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;700;900&family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="siteHeader">
    <div class="container header-inner">
      <a href="#" class="logo" aria-label="Yokool trang chủ">
        <span class="logo-mark">◇</span>
        <span class="logo-text">YOKOOL</span>
      </a>

      <nav class="main-nav" aria-label="Điều hướng chính">
        <a href="#products">Sản phẩm</a>
        <a href="#sl207">Ổ điện du lịch</a>
        <a href="#jp395">Sạc dự phòng</a>
        <a href="#rc502">Sạc dây rút</a>
        <a href="#contact">Liên hệ</a>
      </nav>

      <a href="#contact" class="cta-button cta-button--small">
        Đặt hàng
        <span class="cta-arrow">→</span>
      </a>

      <button class="menu-toggle" id="menuToggle" aria-label="Mở menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <!-- ============ HERO ============ -->
  <section class="hero">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-glow" aria-hidden="true"></div>

    <div class="container hero-inner">
      <div class="hero-badges">
        <span class="badge">Made for Vietnam</span>
        <span class="badge badge--accent">2026 lineup</span>
      </div>

      <h1 class="hero-title">
        <span class="hero-line">Năng lượng.</span>
        <span class="hero-line">Theo bạn.</span>
        <span class="hero-line hero-line--accent">Mọi nơi.</span>
      </h1>

      <p class="hero-subtitle">
        Sạc, ổ điện du lịch và phụ kiện điện thông minh.
        Công nghệ GaN. Thiết kế tinh tế. Độ tin cậy cao.
      </p>

      <div class="hero-actions">
        <a href="#products" class="cta-button">
          Khám phá sản phẩm
          <span class="cta-arrow">→</span>
        </a>
        <a href="#contact" class="cta-button cta-button--ghost">
          Liên hệ đặt hàng
        </a>
      </div>

      <div class="hero-ticker" aria-hidden="true">
        <span>SL207</span>
        <span>•</span>
        <span>OL212</span>
        <span>•</span>
        <span>JP395</span>
        <span>•</span>
        <span>RC502</span>
        <span>•</span>
        <span>SL207</span>
        <span>•</span>
        <span>OL212</span>
        <span>•</span>
        <span>JP395</span>
        <span>•</span>
        <span>RC502</span>
      </div>
    </div>
  </section>

  <!-- ============ PRODUCTS GRID ============ -->
  <section class="products-section" id="products">
    <div class="container">
      <div class="section-header">
        <span class="section-label">/ 01 — Sản phẩm</span>
        <h2 class="section-title">Bộ sưu tập 2026</h2>
        <p class="section-description">
          Bốn sản phẩm. Một triết lý: nhỏ gọn, mạnh mẽ, đáng tin cậy.
        </p>
      </div>

      <div class="products-grid">

        <a href="#sl207" class="product-card" data-color="amber">
          <div class="product-card-visual">
            <div class="product-shape product-shape--outlet"></div>
            <span class="product-code">SL207</span>
          </div>
          <div class="product-card-info">
            <h3 class="product-card-title">Ổ điện du lịch SL207</h3>
            <p class="product-card-tagline">Đi đến đâu, điện tới đó.</p>
            <span class="product-card-link">Xem chi tiết →</span>
          </div>
        </a>

        <a href="#ol212" class="product-card" data-color="cyan">
          <div class="product-card-visual">
            <div class="product-shape product-shape--outlet-pro"></div>
            <span class="product-code">OL212</span>
          </div>
          <div class="product-card-info">
            <h3 class="product-card-title">Ổ điện du lịch OL212</h3>
            <p class="product-card-tagline">Mạnh mẽ. Gọn nhẹ. Đa năng.</p>
            <span class="product-card-link">Xem chi tiết →</span>
          </div>
        </a>

        <a href="#jp395" class="product-card" data-color="amber">
          <div class="product-card-visual">
            <div class="product-shape product-shape--powerbank"></div>
            <span class="product-code">JP395</span>
          </div>
          <div class="product-card-info">
            <h3 class="product-card-title">Sạc dự phòng JP395</h3>
            <p class="product-card-tagline">Năng lượng theo bạn mọi hành trình.</p>
            <span class="product-card-link">Xem chi tiết →</span>
          </div>
        </a>

        <a href="#rc502" class="product-card" data-color="cyan">
          <div class="product-card-visual">
            <div class="product-shape product-shape--retract"></div>
            <span class="product-code">RC502</span>
          </div>
          <div class="product-card-info">
            <h3 class="product-card-title">Sạc dây rút RC502</h3>
            <p class="product-card-tagline">Kéo ra. Sạc. Thu gọn.</p>
            <span class="product-card-link">Xem chi tiết →</span>
          </div>
        </a>

      </div>
    </div>
  </section>

  <!-- ============ PRODUCT SHOWCASE: SL207 ============ -->
  <section class="showcase" id="sl207">
    <div class="container showcase-inner">
      <div class="showcase-visual">
        <div class="showcase-product showcase-product--sl207">
          <span class="showcase-code">SL207</span>
        </div>
        <div class="showcase-bg-accent" data-accent="amber" aria-hidden="true"></div>
      </div>

      <div class="showcase-content">
        <span class="section-label">/ Travel power</span>
        <h2 class="showcase-title">Ổ điện du lịch <em>SL207</em></h2>
        <p class="showcase-tagline">Đi đến đâu, điện tới đó.</p>

        <p class="showcase-description">
          Thiết kế đa quốc gia với phích cắm gập gọn — phù hợp ổ cắm Mỹ, EU, Anh, Úc.
          Tích hợp công nghệ GaN cho hiệu suất chuyển đổi cao và toả nhiệt tốt.
          Mang một cục, đủ dùng cho mọi chuyến đi.
        </p>

        <ul class="spec-list">
          <li><span class="spec-label">Công suất</span><span class="spec-value">65W</span></li>
          <li><span class="spec-label">Cổng</span><span class="spec-value">2× USB-C + 1× USB-A</span></li>
          <li><span class="spec-label">Phích cắm</span><span class="spec-value">US / EU / UK / AU</span></li>
          <li><span class="spec-label">Công nghệ</span><span class="spec-value">GaN III</span></li>
        </ul>

        <div class="showcase-actions">
          <a href="#contact" class="cta-button">Đặt hàng</a>
          <a href="#" class="cta-button cta-button--ghost">Xem trên Shopee →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ PRODUCT SHOWCASE: OL212 ============ -->
  <section class="showcase showcase--reverse" id="ol212">
    <div class="container showcase-inner">
      <div class="showcase-visual">
        <div class="showcase-product showcase-product--ol212">
          <span class="showcase-code">OL212</span>
        </div>
        <div class="showcase-bg-accent" data-accent="cyan" aria-hidden="true"></div>
      </div>

      <div class="showcase-content">
        <span class="section-label">/ Travel power pro</span>
        <h2 class="showcase-title">Ổ điện du lịch <em>OL212</em></h2>
        <p class="showcase-tagline">Mạnh mẽ. Gọn nhẹ. Đa năng.</p>

        <p class="showcase-description">
          Phiên bản nâng cấp với màn hình LED hiển thị công suất theo thời gian thực.
          Sạc đầy MacBook Air trong 1 giờ, đồng thời cấp điện cho điện thoại, tablet
          và tai nghe. Một thiết bị, mọi nhu cầu.
        </p>

        <ul class="spec-list">
          <li><span class="spec-label">Công suất</span><span class="spec-value">100W</span></li>
          <li><span class="spec-label">Cổng</span><span class="spec-value">3× USB-C + 2× USB-A</span></li>
          <li><span class="spec-label">Màn hình</span><span class="spec-value">LED hiển thị W</span></li>
          <li><span class="spec-label">Công nghệ</span><span class="spec-value">GaN III + PD 3.1</span></li>
        </ul>

        <div class="showcase-actions">
          <a href="#contact" class="cta-button">Đặt hàng</a>
          <a href="#" class="cta-button cta-button--ghost">Xem trên Shopee →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ PRODUCT SHOWCASE: JP395 ============ -->
  <section class="showcase" id="jp395">
    <div class="container showcase-inner">
      <div class="showcase-visual">
        <div class="showcase-product showcase-product--jp395">
          <span class="showcase-code">JP395</span>
        </div>
        <div class="showcase-bg-accent" data-accent="amber" aria-hidden="true"></div>
      </div>

      <div class="showcase-content">
        <span class="section-label">/ Power bank</span>
        <h2 class="showcase-title">Sạc dự phòng <em>JP395</em></h2>
        <p class="showcase-tagline">Năng lượng theo bạn mọi hành trình.</p>

        <p class="showcase-description">
          Dung lượng 10.000mAh đủ sạc đầy iPhone 2-3 lần. Sạc nhanh PD 22.5W
          qua cả USB-C lẫn USB-A. Thiết kế nhỏ gọn vừa lòng bàn tay, vỏ kim loại
          bền bỉ. Mang theo mọi nơi, không lo hết pin.
        </p>

        <ul class="spec-list">
          <li><span class="spec-label">Dung lượng</span><span class="spec-value">10.000 mAh</span></li>
          <li><span class="spec-label">Sạc ra</span><span class="spec-value">22.5W PD</span></li>
          <li><span class="spec-label">Cổng</span><span class="spec-value">1× USB-C + 1× USB-A</span></li>
          <li><span class="spec-label">Trọng lượng</span><span class="spec-value">198g</span></li>
        </ul>

        <div class="showcase-actions">
          <a href="#contact" class="cta-button">Đặt hàng</a>
          <a href="#" class="cta-button cta-button--ghost">Xem trên Shopee →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ PRODUCT SHOWCASE: RC502 ============ -->
  <section class="showcase showcase--reverse" id="rc502">
    <div class="container showcase-inner">
      <div class="showcase-visual">
        <div class="showcase-product showcase-product--rc502">
          <span class="showcase-code">RC502</span>
        </div>
        <div class="showcase-bg-accent" data-accent="cyan" aria-hidden="true"></div>
      </div>

      <div class="showcase-content">
        <span class="section-label">/ Retractable</span>
        <h2 class="showcase-title">Sạc dây rút <em>RC502</em></h2>
        <p class="showcase-tagline">Kéo ra. Sạc. Thu gọn.</p>

        <p class="showcase-description">
          Dây cáp rút tự động dài 100cm, không còn rối dây. Đầu USB-C cho điện thoại,
          tablet, laptop. Sạc nhanh 30W. Vỏ trong suốt cyberpunk style.
          Một thiết bị, một câu chuyện về sự tinh tế.
        </p>

        <ul class="spec-list">
          <li><span class="spec-label">Công suất</span><span class="spec-value">30W</span></li>
          <li><span class="spec-label">Chiều dài dây</span><span class="spec-value">100 cm</span></li>
          <li><span class="spec-label">Đầu cắm</span><span class="spec-value">USB-C</span></li>
          <li><span class="spec-label">Vỏ</span><span class="spec-value">Trong suốt, nhám</span></li>
        </ul>

        <div class="showcase-actions">
          <a href="#contact" class="cta-button">Đặt hàng</a>
          <a href="#" class="cta-button cta-button--ghost">Xem trên Shopee →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ WHY YOKOOL ============ -->
  <section class="features-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">/ 02 — Triết lý</span>
        <h2 class="section-title">Tại sao chọn Yokool</h2>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">◢</div>
          <h3 class="feature-title">Công nghệ GaN</h3>
          <p class="feature-description">
            Hiệu suất chuyển đổi điện cao hơn 30% so với sạc truyền thống.
            Nhỏ hơn, mát hơn, an toàn hơn.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">◣</div>
          <h3 class="feature-title">Bảo hành 12 tháng</h3>
          <p class="feature-description">
            Đổi mới trong 30 ngày đầu nếu có lỗi. Bảo hành đầy đủ trong
            12 tháng kể từ ngày nhận hàng.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">◤</div>
          <h3 class="feature-title">Giao COD toàn quốc</h3>
          <p class="feature-description">
            Thanh toán khi nhận hàng. Miễn phí vận chuyển cho đơn từ 500.000đ.
            Giao trong 2-3 ngày làm việc.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">◥</div>
          <h3 class="feature-title">Kiểm định kỹ thuật</h3>
          <p class="feature-description">
            Mọi sản phẩm đều qua 6 vòng kiểm tra trước khi xuất xưởng.
            Đạt chuẩn CE, FCC, RoHS.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CONTACT / ORDER ============ -->
  <section class="contact-section" id="contact">
    <div class="container contact-inner">
      <div class="contact-text">
        <span class="section-label">/ 03 — Liên hệ</span>
        <h2 class="section-title">Đặt hàng &amp; tư vấn</h2>
        <p class="contact-description">
          Liên hệ trực tiếp để đặt hàng, nhận tư vấn sản phẩm hoặc báo giá đại lý.
          Đội ngũ Yokool phản hồi trong vòng 30 phút giờ hành chính.
        </p>

        <div class="contact-details">
          <a href="tel:+84900000000" class="contact-item">
            <span class="contact-label">Hotline</span>
            <span class="contact-value">+84 900 000 000</span>
          </a>
          <a href="mailto:info@yokool.vn" class="contact-item">
            <span class="contact-label">Email</span>
            <span class="contact-value">info@yokool.vn</span>
          </a>
          <a href="https://zalo.me/yokool" class="contact-item" target="_blank" rel="noopener">
            <span class="contact-label">Zalo</span>
            <span class="contact-value">zalo.me/yokool →</span>
          </a>
          <a href="https://shopee.vn/yokool" class="contact-item" target="_blank" rel="noopener">
            <span class="contact-label">Shopee</span>
            <span class="contact-value">shopee.vn/yokool →</span>
          </a>
        </div>
      </div>

      <form class="order-form" id="orderForm" novalidate>
        <h3 class="form-title">Gửi yêu cầu đặt hàng</h3>
        <p class="form-subtitle">Điền thông tin, chúng tôi sẽ gọi lại xác nhận đơn.</p>

        <div class="form-row">
          <label for="customerName">Họ tên</label>
          <input type="text" id="customerName" name="name" required autocomplete="name">
        </div>

        <div class="form-row">
          <label for="customerPhone">Số điện thoại</label>
          <input type="tel" id="customerPhone" name="phone" required autocomplete="tel" pattern="[0-9+\s]+">
        </div>

        <div class="form-row">
          <label for="productSelect">Sản phẩm</label>
          <select id="productSelect" name="product" required>
            <option value="">— Chọn sản phẩm —</option>
            <option value="SL207">Ổ điện du lịch SL207</option>
            <option value="OL212">Ổ điện du lịch OL212</option>
            <option value="JP395">Sạc dự phòng JP395</option>
            <option value="RC502">Sạc dây rút RC502</option>
            <option value="other">Tư vấn / Đặt số lượng</option>
          </select>
        </div>

        <div class="form-row">
          <label for="customerNote">Ghi chú (tuỳ chọn)</label>
          <textarea id="customerNote" name="note" rows="3"></textarea>
        </div>

        <button type="submit" class="cta-button cta-button--full">
          Gửi yêu cầu
          <span class="cta-arrow">→</span>
        </button>

        <p class="form-note" id="formNote" hidden></p>
      </form>
    </div>
  </section>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a href="#" class="logo">
          <span class="logo-mark">◇</span>
          <span class="logo-text">YOKOOL</span>
        </a>
        <p class="footer-tagline">Năng lượng. Không giới hạn.</p>
      </div>

      <div class="footer-cols">
        <div class="footer-col">
          <h4>Sản phẩm</h4>
          <a href="#sl207">SL207</a>
          <a href="#ol212">OL212</a>
          <a href="#jp395">JP395</a>
          <a href="#rc502">RC502</a>
        </div>
        <div class="footer-col">
          <h4>Hỗ trợ</h4>
          <a href="#contact">Liên hệ</a>
          <a href="#">Bảo hành</a>
          <a href="#">Vận chuyển</a>
          <a href="#">Câu hỏi thường gặp</a>
        </div>
        <div class="footer-col">
          <h4>Kênh bán</h4>
          <a href="https://shopee.vn/yokool" target="_blank" rel="noopener">Shopee</a>
          <a href="https://zalo.me/yokool" target="_blank" rel="noopener">Zalo</a>
          <a href="mailto:info@yokool.vn">Email</a>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© 2026 YOKOOL. Made in Vietnam.</p>
      <p class="footer-meta">v1.0 — built for Cloudflare Pages</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
