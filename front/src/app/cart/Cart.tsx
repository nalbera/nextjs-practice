"use client"

import { useContext, useState } from "react";
import { CartItem } from "@/components/cart-item/CartItem";
import { useCart } from "@/hooks/useCart";
import { AuthContext } from "@/context/AuthContextProvider";
import { createOrderService } from "@/services/createOrderService";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

const Cart: React.FC = () => {
    const { items, removeAll } = useCart();
    const {token, user} = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const prices = items.map((product) => product.price);
    const total = prices.reduce((total, price) => total + price, 0);

    const productsId = items.map((product) => product.id);

    const handleClick = async () => {

        try {

            setLoading(true);

            await createOrderService(user?.id, productsId, token);
            
            setLoading(false);

            removeAll();

            toast.success(`Compra realizada con éxtito`, {
                duration: 3000,
                progress: true,
                position: "top-center",
                transition: "bounceIn",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
                sonido: false,
            });   
        } catch (error) {
            toast.error(`${error}`, {
                duration: 5000,
                progress: true,
                position: "top-center",
                transition: "bounceIn",
                icon: '',
                sonido: false,
            });
        }
    }

    return (
        <div className="max-w-16xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">
                Carrito de compras
            </h1>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {
                        items.length == 0 && (
                            <p className="font-semibold">No hay productos en el carrito</p>
                        )
                    }
                    <ul>
                        {
                            items.map((item) => (
                                <CartItem key={item.id} product={item}/>
                            ))
                        }
                    </ul>
                </div>
                {
                    total > 0 && (
                        <div className="max-w-xl">
                                <div className="p-6 rounded-lg bg-slate-100">
                                    <p className="mb-3 text-lg font-semibold">Resumen de pedido</p>
                                    <hr />
                                    <div className="flex justify-between gap-5 my-4">
                                        <p>Total</p>
                                        {`$ ${total}`}
                                    </div>
                                    <div className="flex items-center justify-center w-full mt-3">
                                        {
                                            !loading ? (
                                                <button
                                                    className="flex items-center justify-center px-6 py-2 w-full ml-auto text-white bg-slate-950 border-0 rounded focus:outline-none hover:bg-slate-500"
                                                    onClick={() => handleClick()}
                                                >
                                                    Comprar
                                                </button>
                                            ) : (
                                                <button
                                                    className="flex items-center justify-center px-6 py-2 w-full ml-auto text-white bg-slate-950 border-0 rounded focus:outline-none hover:bg-slate-500"
                                                    onClick={() => handleClick()}
                                                    disabled
                                                >
                                                    <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart;