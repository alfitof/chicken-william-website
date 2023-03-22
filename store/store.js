import create from "zustand";

export const useStore = create((set) => ({
  cart: {
    ayams: [],
  },
  addAyam: (data) =>
    set((state) => ({
      cart: {
        ayams: [...state.cart.ayams, data],
      },
    })),
  removeAyam: (index) =>
    set((state) => ({
      cart: {
        ayams: state.cart.ayams.filter((_, i) => i != index),
      },
    })),
  resetCart: () =>
    set(() => ({
      cart: {
        ayams: [],
      },
    })),
}));
