"use client"

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContextProvider";
import { Product } from "@/types/product";

interface Order {
  id: number;
  status: string,
  date: string;
  products: Product[]
}

export const Orders = () => {
  
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
      setOrders(json);
      console.log(json);
      
    }

    getOrders();
  }, []);

  return orders ? (
    <div className="mt-14 mr-auto ml-14">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Compras realizadas</h2>  
      </div>
      {
        orders.map((order) => (
          <div key={order.id}>
            <div className="flex bg-slate-200">
              <h3>Fecha de compra: {new Date(order.date).toLocaleString()}</h3>
              <span className="ml-10">Estado: {order.status == 'approved' ? "Aprobado" : "Rechazado"}</span>
            </div>
            {
              order.products.map((product) => (
                  <div key={product.id} className="flex bg-slate-100">
                    <div>
                      <img src={product.image} alt="product" width={100} height={100} />
                    </div>
                    <div>
                      {product.name}
                    </div>
                  </div>
              ))
            }
          </div>
        ))
      }
    </div>
  ) : (
    <h3>No hay ordenes de compras para mostrar</h3>
  )
}

export default Orders;