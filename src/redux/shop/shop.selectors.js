import { createSelector } from 'reselect'; // reselect memorizes selector's value

const selectShop = (state) => state.shop; // input selector

export const selectShopCollections = createSelector(
  // references selectShop to get shop, then output collections from shop
  [selectShop],
  (shop) => shop.collections
);
