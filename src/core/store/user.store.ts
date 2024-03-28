import { create } from "zustand";
import { User } from "../domain/user";

type State = {} & User;
type Action = {
  setCpf: (value: State["cpf"]) => void;
  setId: (value: State["id"]) => void;
  setEmail: (value: State["email"]) => void;
  setName: (value: State["name"]) => void;
  setPhone: (value: State["phone"]) => void;
  setState: (value: State) => void;
};

export const UserStore = create<Action & State>((set) => ({
  cpf: undefined,
  id: undefined,
  email: undefined,
  name: undefined,
  phone: undefined,
  setState: (value: State) => set((state) => ({...state, ...value })),
  setCpf: (value: State["cpf"]) => set(() => ({ cpf: value })),
  setId: (value: State["id"]) => set(() => ({ id: value })),
  setEmail: (value: State["email"]) => set(() => ({ email: value })),
  setName: (value: State["name"]) => set(() => ({ name: value })),
  setPhone: (value: State["phone"]) => set(() => ({ phone: value })),
}));

export const useUserStore = () => UserStore((state) => state);


