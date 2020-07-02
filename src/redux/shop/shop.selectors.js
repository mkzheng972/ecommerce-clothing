import { createSelector } from 'reselect'; // reselect memorizes selector's value

const selectShop = (state) => state.shop; // input selector

export const selectShopCollections = createSelector(
  // references selectShop to get shop, then output collections from shop
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  );
