"use client"

import React, {useContext} from "react";
import { useRouter } from "next/navigation";
import { DetailComponentProps } from "./types";
import { useCart } from "@/hooks/useCart";
import { AuthContext } from "@/context/AuthContextProvider";

export const ProductDetailComponent: React.FC<DetailComponentProps> = ({id, name, description, price, stock, image}) => {
  
  const { addItem } = useCart();
  
  const { token } = useContext(AuthContext);

  const data = {
    id,
    name,
    price,
    image
  }

  const router = useRouter();

  const handleClick = () => {
    
    if(!token) {
      router.push('/login');
      return
    }

    addItem(data);
  }

  return (
    <div>
      <section className="overflow-hidden text-gray-700 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full border border-gray-200 rounded lg:w-1/2"
              src={image}
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                {name}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{description}</p>
              <div>
                <p className="text-base font-medium text-gray-900 title-font">
                  Disponibes: {`${stock} unidades.`}
                </p>
              </div>
              <div className="flex pt-8">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  {`$ ${price}`}
                </span>
                <button 
                  className="flex px-6 py-2 ml-auto text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600"
                  onClick={handleClick}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
