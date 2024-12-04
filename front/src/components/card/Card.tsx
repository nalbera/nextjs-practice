import React from "react"
import { CardProps } from "./type";

export const Card: React.FC<CardProps> = ({ image, name, price, description }) => {
    return (
        <div>
            <div>
                <img src={image} alt="image poroduct" />
            </div>
            <div>
                <h3>{name}</h3>
                <h4>{price}</h4>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <button>????</button>
        </div>
        
    )
}