"use client"

import { useContext } from "react";
import { CartItem } from "@/components/cart-item/CartItem";
import { useCart } from "@/hooks/useCart";
import { AuthContext } from "@/context/AuthContextProvider";

const Cart: React.FC = () => {
    const { items, removeAll } = useCart();
    const {token, user} = useContext(AuthContext);

    const prices = items.map((product) => product.price);
    const total = prices.reduce((total, price) => total + price, 0);

    const productsId = items.map((product) => product.id);

    const handleClick = async () => {
        try {
            
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': token
                } as HeadersInit,
                body: JSON.stringify({
                    userId: user?.id,
                    products: productsId
                })
            });

            const json = await response.json();

            console.log(json);
            

        } catch (error) {
            console.log(error);
        } finally {
            console.log('ok');
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
                <div className="max-w-xl">
                        <div className="p-6 rounded-lg bg-slate-100">
                            <p className="mb-3 text-lg font-semibold">Resumen de pedido</p>
                            <hr />
                            <div className="flex justify-between gap-5 my-4">
                                <p>Total</p>
                                {`$ ${total}`}
                            </div>
                            <div className="flex items-center justify-center w-full mt-3">
                                <button
                                    className="flex items-center justify-center px-6 py-2 w-full ml-auto text-white bg-slate-950 border-0 rounded focus:outline-none hover:bg-slate-500"
                                    onClick={() => handleClick()}
                                >
                                    Comprar
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;