import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

import { ProductCart } from "@/types/product";


interface CartStore {
    items: ProductCart[],
    addItem: (data: ProductCart) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductCart) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id == data.id);

        if(existingItem){
             toast.warning('El producto ya existe en el carrito', {
                duration: 2000,
                progress: true,
                position: "top-center",
                transition: "bounceIn",
                icon: '',
                sonido: false,
            });
            return;
        }

        set({
            items: [...get().items, data]
        });
        
        toast.info('Producto añadido al carrito 🛒.', {
            duration: 2000,
            progress: true,
            position: "top-center",
            transition: "bounceIn",
            icon: '',
            sonido: false,
        });

    },

    removeItem: (id: number) => {
        set({items: [...get().items.filter((item) => item.id !== id)]});
        toast.info('Producto eliminado del carrito 🛒.', {
            duration: 2000,
            progress: true,
            position: "top-center",
            transition: "bounceIn",
            icon: '',
            sonido: false,
        });
    },

    removeAll: () => set({items: []})

}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))