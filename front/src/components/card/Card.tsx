import React from "react"
import { CardProps } from "./type";

export const Card: React.FC<CardProps> = ({ image, name, price, description }) => { 
    return (
        // <div>
        //     <div>
        //         <img src={image} alt="image poroduct" />
        //     </div>
        //     <div>
        //         <h3>{name}</h3>
        //         <h4>{price}</h4>
        //     </div>
        //     <div>
        //         <p>{description}</p>
        //     </div>
        //     <button>????</button>
        // </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
                <img className="object-cover w-full h-full" src={image} alt="Product" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">Ver producto</button>
                </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">{name}</h3>
            <p className="text-gray-500 text-sm mt-2">{description}</p>
            <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">{price}</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Agregar</button>
            </div>
       </div>
        
    )
}