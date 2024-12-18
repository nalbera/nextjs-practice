import React from 'react'
import { CartItemProps } from './types';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';

export const CartItem = (props: CartItemProps) => {
    const { product } = props;
    const { removeItem } = useCart();
    const router = useRouter();
  return (
    <li className='flex py-6 border-b'>
        <div onClick={() => router.push(`/product/${product.id}`)} className='cursor-pointer'>
            <img src={product.image} alt="product" className='w-24 h-24 overflow-hidden rounded-s-md sm:w-auto sm:h-32'/>
        </div>
        <div className='flex justify-between flex-1 px-6'>
            <div>
                <h2 className='text-lg font-bold'>{product.name}</h2>
                <p className='font-bold'>{`$ ${product.price}`}</p>
            </div>
            <div>
                <button 
                   className='rounded-full flex items-center justify-center size-7 text-white bg-slate-600 border shadow-md p-1 hover:scale-110 transition'
                   onClick={() => removeItem(product.id)}
                >
                    X
               </button>
            </div>
        </div>
    </li>
  )
}

