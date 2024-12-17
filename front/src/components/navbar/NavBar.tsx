"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo2.jpg";
import hamburger from "../../../public/hamburger.png";
import close from "../../../public/close.png";
import { AuthContext } from "@/context/AuthContextProvider";
import cart from '../../../public/cart.svg';
import userProfile from '../../../public/user-profile.svg';
import goOut from '../../../public/go-out.svg';

const NavBar: React.FC = () => {
 
    const toggleMenu = () => {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i = 0; i < navToggle.length; i++) {
            navToggle.item(i)?.classList.toggle("hidden");
        }
    }
    
    const { token, logout } = useContext(AuthContext);

  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-200/20">
      <Image
        src={logo}
        className="h-10 w-10"
        alt=""
      />
      <div className="flex md:hidden">
        <button id="hamburger" onClick={toggleMenu}>
          <Image
            className="toggle block"
            src={hamburger}
            width="48"
            height="48"
            alt=""
          />
          <Image
            className="toggle hidden"
            src={close}
            width="48"
            height="48"
            alt=""
          />
        </button>
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none">
        <Link
          href="/"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Home
        </Link>
        <Link
          href="/home"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Productos
        </Link>
        {
            token ? (
              <>
                <Link
                  href="/cart"
                  className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
                >
                  <Image src={cart} alt="cart" />
                </Link>
                <Link
                  href="/dashboard"
                  className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
                >
                  <Image src={userProfile} alt="cart" />
                </Link>
                <p
                  className="block cursor-pointer md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
                  onClick={() => logout()}
                >
                  <Image src={goOut} alt="cart" />
                </p>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="toggle hidden md:flex w-full md:w-auto px-3 py-3 text-right  hover:text-teal-500 text-teal-900"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="toggle hidden md:flex w-full md:w-auto px-3 py-3 text-right  hover:text-teal-500 text-teal-900"
                >
                  Register
                </Link>
              </>
            )
        }
        
      </div>
      
    </nav>
  );
};

export default NavBar;
