// ============================================================
// YOKOOL → ADMIN API integration
// ------------------------------------------------------------
// Đặt file này cùng cấp với script.js, chỉ cần thêm 1 dòng
// trong checkout.html:
//
//   <script src="script.js"></script>
//   <script src="yokool-api.js"></script>   ← THÊM DÒNG NÀY
//
// File này sẽ tự "móc" vào YokoolCart.saveOrder và POST đơn lên
// admin API mỗi khi khách đặt đơn thành công. Không cần sửa
// script.js.
// ============================================================

(function () {
  'use strict';

  // 👉 SỬA URL NÀY khi setup custom domain (admin.yokool.vn)
  const API_BASE = 'https://yokool-admin.pages.dev';

  // ----------------------------------------------------------
  // 1. Public API: window.YokoolAPI.submitOrder({...})
  // ----------------------------------------------------------
  async function submitOrder(order) {
    // Chuẩn hoá payload — chấp nhận nhiều dạng key
    const c = order.customer || order;
    const payload = {
      customer_name:     c.name || c.customer_name || '',
      customer_phone:    String(c.phone || c.customer_phone || '').replace(/\s+/g, ''),
      customer_email:    c.email || c.customer_email || '',
      shipping_address:  c.address || c.shipping_address || '',
      shipping_ward:     c.ward || c.shipping_ward || '',
      shipping_district: c.district || c.shipping_district || '',
      shipping_province: c.province || c.shipping_province || '',
      customer_note:     c.note || c.customer_note || order.note || '',
      payment_method:    order.payment_method || order.paymentMethod || 'COD',
      shipping_fee:      parseInt(order.shipping_fee || order.shippingFee || 0, 10),
      items: (order.items || []).map(it => ({
        product_code: it.product_code || it.code || it.sku || '',
        product_name: it.product_name || it.name || '',
        quantity:     parseInt(it.quantity || it.qty || 1, 10),
        unit_price:   parseInt(it.unit_price || it.price || 0, 10),
      })),
    };

    const res = await fetch(API_BASE + '/api/orders', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Lỗi gửi đơn');
    return data;
  }

  async function submitInquiry(inquiry) {
    const payload = {
      company:       inquiry.company || '',
      contact_name:  inquiry.contact_name || inquiry.contactName || inquiry.name || '',
      position:      inquiry.position || '',
      email:         inquiry.email || '',
      phone:         String(inquiry.phone || '').replace(/\s+/g, ''),
      products:      Array.isArray(inquiry.products) ? inquiry.products : [],
      quantity:      inquiry.quantity || '',
      deadline:      inquiry.deadline || '',
      purpose:       inquiry.purpose || '',
      customer_note: inquiry.customer_note || inquiry.note || '',
    };
    const res = await fetch(API_BASE + '/api/inquiries', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Lỗi gửi inquiry');
    return data;
  }

  window.YokoolAPI = { submitOrder, submitInquiry, API_BASE };

  // ----------------------------------------------------------
  // 2. Auto-hook YokoolCart.saveOrder
  // ----------------------------------------------------------
  // script.js load trước, định nghĩa window.YokoolCart.saveOrder
  // Sau khi file này load, chờ YokoolCart sẵn sàng rồi wrap method
  // để mỗi lần saveOrder() được gọi, sẽ POST thêm lên admin API.
  // ----------------------------------------------------------
  let hooked = false;
  function hookSaveOrder() {
    if (hooked) return;
    if (!window.YokoolCart || typeof window.YokoolCart.saveOrder !== 'function') {
      return; // chưa sẵn sàng, sẽ thử lại
    }

    const original = window.YokoolCart.saveOrder.bind(window.YokoolCart);

    window.YokoolCart.saveOrder = function (order) {
      // 1. Gọi saveOrder gốc (lưu localStorage như cũ)
      const localResult = original(order);

      // 2. Gửi lên admin API (async, không chặn UX)
      submitOrder(order)
        .then((result) => {
          console.log('[YokoolAPI] Order saved to admin:', result.order_id);
          // Toast bổ sung (nhẹ, không che toast gốc của script.js)
          if (window.yokoolToast) {
            setTimeout(() => {
              window.yokoolToast('Đơn đã ghi nhận: ' + result.order_id, 'success');
            }, 500);
          }
        })
        .catch((err) => {
          console.error('[YokoolAPI] Order submit failed:', err);
          // Vẫn không alert khách — đơn đã lưu localStorage, Jay có thể xem
          // bằng cách: JSON.parse(localStorage.yokool_orders_v1)
        });

      return localResult;
    };

    hooked = true;
    console.log('[YokoolAPI] Hooked YokoolCart.saveOrder → admin API');
  }

  // Thử ngay (nếu script.js đã load xong)
  hookSaveOrder();

  // Thử lại nhiều lần trong 5 giây phòng trường hợp script.js load chậm
  let tries = 0;
  const interval = setInterval(() => {
    hookSaveOrder();
    tries++;
    if (hooked || tries >= 50) clearInterval(interval);
  }, 100);

  // Đảm bảo thử lại sau DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookSaveOrder);
  }
})();
