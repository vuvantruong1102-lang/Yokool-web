// ============================================================
// YOKOOL → ADMIN API integration (v2 — fixed field mapping)
// ============================================================

(function () {
  'use strict';

  // 👉 SỬA URL NÀY khi setup custom domain (admin.yokool.vn)
  const API_BASE = 'https://yokool-admin.pages.dev';

  // ----------------------------------------------------------
  // 1. Public API: window.YokoolAPI.submitOrder({...})
  // ----------------------------------------------------------
  async function submitOrder(order) {
    const c = order.customer || order;

    const payload = {
      // Tên người nhận — Yokool dùng `fullname` (chữ thường)
      customer_name: (c.fullname || c.fullName || c.name || c.customer_name || '').trim(),
      customer_phone: String(c.phone || c.customer_phone || '').replace(/\s+/g, ''),
      customer_email: (c.email || c.customer_email || '').trim(),
      shipping_address: (c.address || c.shipping_address || '').trim(),
      shipping_ward: c.ward || c.shipping_ward || '',
      shipping_district: c.district || c.shipping_district || '',
      // Yokool gộp city = tỉnh/thành (vd "TP HCM")
      shipping_province: (c.city || c.province || c.shipping_province || '').trim(),
      customer_note: c.note || c.customer_note || order.note || '',
      payment_method: order.paymentMethod || order.payment_method || 'COD',
      shipping_fee: parseInt(order.shipping_fee || order.shippingFee || 0, 10) || 0,
      items: (order.items || []).map((it) => ({
        // Yokool dùng `id` (chữ thường) cho mã sản phẩm — uppercase để khớp DB
        product_code: String(it.id || it.code || it.product_code || it.sku || '').toUpperCase(),
        product_name: it.name || it.product_name || '',
        quantity: parseInt(it.qty || it.quantity || 1, 10) || 1,
        unit_price: parseInt(it.price || it.unit_price || 0, 10) || 0,
      })),
    };

    // Log payload đã normalize để debug nếu cần
    console.log('[YokoolAPI] POST /api/orders payload:', payload);

    const res = await fetch(API_BASE + '/api/orders', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || ('Lỗi gửi đơn (HTTP ' + res.status + ')'));
    return data;
  }

  async function submitInquiry(inquiry) {
    const payload = {
      company: inquiry.company || '',
      contact_name: inquiry.contact_name || inquiry.contactName || inquiry.name || '',
      position: inquiry.position || '',
      email: inquiry.email || '',
      phone: String(inquiry.phone || '').replace(/\s+/g, ''),
      products: Array.isArray(inquiry.products) ? inquiry.products : [],
      quantity: inquiry.quantity || '',
      deadline: inquiry.deadline || '',
      purpose: inquiry.purpose || '',
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
  let hooked = false;
  function hookSaveOrder() {
    if (hooked) return;
    if (!window.YokoolCart || typeof window.YokoolCart.saveOrder !== 'function') {
      return;
    }

    const original = window.YokoolCart.saveOrder.bind(window.YokoolCart);

    window.YokoolCart.saveOrder = function (order) {
      const localResult = original(order);

      submitOrder(order)
        .then((result) => {
          console.log('[YokoolAPI] ✓ Order saved to admin:', result.order_id);
          if (window.yokoolToast) {
            setTimeout(() => {
              window.yokoolToast('Đơn đã ghi nhận: ' + result.order_id, 'success');
            }, 500);
          }
        })
        .catch((err) => {
          console.error('[YokoolAPI] ✗ Order submit failed:', err.message);
          console.error('Order data was:', order);
        });

      return localResult;
    };

    hooked = true;
    console.log('[YokoolAPI] ✓ Hooked YokoolCart.saveOrder → admin API');
  }

  hookSaveOrder();

  let tries = 0;
  const interval = setInterval(() => {
    hookSaveOrder();
    tries++;
    if (hooked || tries >= 50) clearInterval(interval);
  }, 100);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookSaveOrder);
  }
})();
