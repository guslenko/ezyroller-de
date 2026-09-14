import { cartGetters, orderGetters, productGetters } from '@plentymarkets/shop-api';
import type { DataLayerEntry } from '../types';

const getDataLayer = () => {
  const trackingWindow = window as unknown as { dataLayer?: DataLayerEntry[] };
  trackingWindow.dataLayer ||= [];
  return trackingWindow.dataLayer;
};

const pushEcommerceEvent = (event: string, ecommerce: DataLayerEntry) => {
  const dataLayer = getDataLayer();
  dataLayer.push({ ecommerce: null });
  dataLayer.push({ event, ecommerce });
};

const purchaseWasTracked = (transactionId: string) => {
  const key = `ezyroller:purchase:${transactionId}`;
  if (sessionStorage.getItem(key)) return true;
  sessionStorage.setItem(key, '1');
  return false;
};

export default defineNuxtPlugin(() => {
  const { on } = usePlentyEvent();

  on('frontend:productLoaded', ({ product }) => {
    const currency = productGetters.getSpecialPriceCurrency(product) || productGetters.getRegularPriceCurrency(product);
    const price = productGetters.getPrice(product) ?? 0;

    pushEcommerceEvent('view_item', {
      currency,
      value: price,
      items: [
        {
          item_id: String(productGetters.getVariationId(product)),
          item_name: productGetters.getName(product),
          item_category: productGetters.getCategoryName(product),
          item_variant: productGetters.getVariationNumber(product),
          price,
          quantity: 1,
        },
      ],
    });
  });

  on('frontend:addToCart', ({ item, cart, addItemParams }) => {
    const price = cartGetters.getItemPrice(item) ?? 0;
    const quantity = addItemParams.quantity ?? 1;
    pushEcommerceEvent('add_to_cart', {
      currency: cartGetters.getCurrency(cart),
      value: price * quantity,
      items: [
        {
          item_id: String(cartGetters.getVariationId(item)),
          item_name: cartGetters.getItemName(item),
          price,
          quantity,
        },
      ],
    });
  });

  on('frontend:removeFromCart', ({ item, cart, deleteItemParams }) => {
    if (!item) {
      pushEcommerceEvent('remove_from_cart', {
        currency: cartGetters.getCurrency(cart),
        items: [{ item_id: String(deleteItemParams.cartItemId) }],
      });
      return;
    }

    const price = cartGetters.getItemPrice(item) ?? 0;
    const quantity = cartGetters.getItemQty(item);
    pushEcommerceEvent('remove_from_cart', {
      currency: cartGetters.getCurrency(cart),
      value: price * quantity,
      items: [
        {
          item_id: String(cartGetters.getVariationId(item)),
          item_name: cartGetters.getItemName(item),
          price,
          quantity,
        },
      ],
    });
  });

  on('frontend:beginCheckout', (cart) => {
    const totals = cartGetters.getTotals(cart);
    pushEcommerceEvent('begin_checkout', {
      currency: cartGetters.getCurrency(cart),
      value: cartGetters.getTotal(totals),
      coupon: cartGetters.getCouponCode(cart) || undefined,
      items: cartGetters.getItems(cart).map((item) => ({
        item_id: String(cartGetters.getVariationId(item)),
        item_name: cartGetters.getItemName(item),
        price: cartGetters.getItemPrice(item) ?? 0,
        quantity: cartGetters.getItemQty(item),
      })),
    });
  });

  on('frontend:orderCreated', (order) => {
    if (!order.order || !order.totals) return;

    const transactionId = orderGetters.getId(order);
    if (!transactionId || purchaseWasTracked(transactionId)) return;

    const totals = orderGetters.getTotals(order);
    const currency = orderGetters.getCurrency(order);
    const value = orderGetters.getTotal(totals);
    const items = orderGetters.getItems(order).map((item) => ({
      item_id: String(orderGetters.getItemVariationId(item)),
      item_name: orderGetters.getItemName(item),
      price: orderGetters.getItemPriceByCurrency(item, currency) ?? orderGetters.getItemPrice(item),
      quantity: orderGetters.getItemQty(item),
      affiliation: String(item.referrerId ?? ''),
    }));

    pushEcommerceEvent('purchase', {
      transaction_id: transactionId,
      value,
      currency,
      tax: totals.vats.reduce((sum, vat) => sum + vat.value, 0),
      shipping: orderGetters.getShippingAmount(totals),
      coupon: totals.couponCode || undefined,
      items,
    });
  });
});
