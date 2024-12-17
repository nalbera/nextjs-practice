
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import userProfile from '../../../public/user-profile.svg';
import cart from '../../../public/cart.svg';
import favorite from '../../../public/favorite.svg';
import goOut from '../../../public/go-out.svg';

const Sidebar: React.FC = () => {
  return (
    <div className='flex flex-col w-56 bg-gray-200 rounded-r-3xl overflow-hidden mt-9'>
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-lg uppercase text-black">Panel de usuario</h1>
        </div>
        <ul className='flex flex-col py-4'>
            <li>
                <Link href="/dashboard/profile" className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'>
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> <Image src={userProfile} alt='image'/> </span>
                    <span className="text-sm font-medium">Perfil</span>
                </Link>
            </li>
            <li>
                <Link href="#" className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'>
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> <Image src={cart} alt='image'/> </span>
                    <span className="text-sm font-medium">Compras</span>
                </Link>
            </li>
            <li>
                <Link href="#" className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'>
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> <Image src={favorite} alt='image'/> </span>
                    <span className="text-sm font-medium">Favoritos</span>
                </Link>
            </li>
            <hr/>
            <li>
                <Link href="/home" className='flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800'>
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"> <Image src={goOut} alt='image'/> </span>
                    <span className="text-sm font-medium">Salir</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;