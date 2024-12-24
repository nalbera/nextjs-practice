"use client"

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContextProvider";
import { Product } from "@/types/product";

interface Order {
  id: number;
  status: string,
  date: string;
  products: Product[],
  totalOrder: number
}

export const Orders: React.FC = () => {
  
  const { token } = useContext(AuthContext);

  const [orders, setOrders] = useState<Order[]>([]);


  useEffect(() => {

    const getOrders = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/orders`, {
        headers: {
          'authorization': token
        } as HeadersInit
      });

      const json = await response.json();
      
      let currentOrders;
      if(json.length) {
        currentOrders = json.map((orders: Order) => {
          return {
            id: orders.id,
            date: orders.date,
            status: orders.status,
            products: orders.products,
            totalOrder: orders.products.reduce((curr, obj) => curr + obj.price, 0)
          }
        })
      }
      
      setOrders(currentOrders);
    }

    getOrders();
  }, [token]);

  
  return orders ? (
    <div className="mt-14 mr-auto ml-14 container">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Compras realizadas</h2>  
      </div>
      {
        orders.map((order) => (
          <div key={order.id} className="mb-6 shadow-md overflow-hidden rounded-xl">
            <div className="flex bg-slate-200 p-4 font-sans">
              <h3 className="text-amber-900">
                Fecha de compra: 
              </h3>
              <span className="text-amber-700 font-semibold ml-2">
                {new Date(order.date).toLocaleString().slice(0,10)}
              </span>
              <span className="ml-10 text-amber-900">
                Estado:
              </span>
              <span className="text-amber-700 font-semibold ml-2">
                {order.status == 'approved' ? "Aprobado" : "Rechazado"}
              </span>
            </div>
            {
              order.products.map((product) => {
                return (
                  <div key={product.id} className="flex bg-slate-100 p-6">
                    <div className="mr-3">
                      <img src={product.image} alt="product"  className="rounded-full size-12"/>
                    </div>
                    <div>
                      {product.name}
                    </div>
                  </div>
              )})
            }
            <div className="bg-slate-200 p-4 flex font-serif text-amber-900">
              <h3>Total de la compra:</h3>
              <span className="text-amber-700 font-semibold ml-2">
                  {`$ ${order.totalOrder}`}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  ) : (
    <h3>No hay ordenes de compras para mostrar</h3>
  )
}

export default Orders;