import React from "react"
import { CardProps } from "./type";
import Link from "next/link";

export const Card: React.FC<CardProps> = ({ image, name, price, description, id }) => { 
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
                <img className="object-cover w-full h-full" src={image} alt="Product" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">{name}</h3>
            <p className="text-gray-500 text-sm mt-2">{description}</p>
            <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">{price}</span>
                <Link href={`${process.env.NEXT_PUBLIC_URL}/product/${id}`}>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Ver producto</button>
                </Link>
            </div>
       </div>
        
    )
}