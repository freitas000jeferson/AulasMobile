import { create } from "zustand";

type State = {
  search?: string;
  page?: number;
  size?: number;
};
type Action = {
  setSearch: (value: State["search"]) => void;
  setPage: (value: State["page"]) => void;
  setSize: (value: State["size"]) => void;
};

export const ProductSearchStore = create<Action & State>((set) => ({
  search: undefined,
  page: undefined,
  size: undefined,
  setSearch: (value: State["search"]) => set(() => ({ search: value })),
  setPage: (value: State["page"]) => set(() => ({ page: value })),
  setSize: (value: State["size"]) => set(() => ({ size: value })),
}));

export const useProductSearchrStore = () => ProductSearchStore((state) => state);
