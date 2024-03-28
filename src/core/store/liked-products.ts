import { create } from "zustand";
import { Product } from "../domain/product";

type State = {
  products: { [key: number]: Product };
};
type Action = {
  addProduct: (value: Product) => void;
  removeProduct: (value: Product) => void;
};

export const LikedProductsStore = create<Action & State>((set) => ({
  products: {},
  addProduct: (value: Product) =>
    set((state) => {
      const productsMap = state.products;
      productsMap[value.id!] = value;
      return { products: productsMap };
    }),
  removeProduct: (value: Product) =>
    set((state) => {
      const productsMap = state.products;
      delete productsMap[value.id!];
      return { products: productsMap };
    }),
}));

export const useLikedProductsStore = () => LikedProductsStore((state) => state);
