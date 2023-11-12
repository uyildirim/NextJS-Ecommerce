import { create } from "zustand";

import { Product } from "@/types";
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";

type CartStore = {
  item: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};
const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      item: [],
      addItem: (data: Product) => {
        const currentItems = get().item;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item already in cart.");
        }
        set({ item: [...get().item, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({ item: [...get().item.filter((item) => item.id !== id)] });
        toast.success("Item removed from the cart.");
      },
      removeAll: () => set({ item: [] }),
    }),
    {
      name: "cart-storege",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCart;
