"use client";

import Image from "next/image";
import genericUser from "../../../../public/generic_user.png";
import React, { useState } from "react";

const Register: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [direction, setDirection] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            name,
            email,
            password,
            passwordConfirm,
            direction,
            phone,
            message: "Submit ok"
        });
        
    }

    return (
        <div className="flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-x-8">
                <div className="bg-sky-900 shadow-md rounded-md p-6">
                    <Image 
                        className='mx-auto h-16 w-auto rounded-full'
                        src={genericUser}
                        alt='user'
                    />
                    <h2 className='my-3 text-center text-3xl font-bold tracking-tight text-white'>Registro de usuario</h2>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <label className='block text-sm font-medium text-gray-200'>Nombre completo</label>
                            <div className='mt-1'>
                                <input type="text" name="" id="" required 
                                    className='px-2 py-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-200 
                                    focus:outline-none focus:ring-sky-300 sm:text-sm'
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-200'>Email</label>
                            <div className='mt-1'>
                                <input type="email" name="" id="" required 
                                    className='px-2 py-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-200 
                                    focus:outline-none focus:ring-sky-300 sm:text-sm'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-200'>Password</label>
                            <div className='mt-1'>
                                <input type="password" name="" id="" required 
                                    className='px-2 py-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-200 
                                    focus:outline-none focus:ring-sky-300 sm:text-sm'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-200'>Confirme password</label>
                            <div className='mt-1'>
                                <input type="passwordconfirm" name="" id="" required 
                                    className='px-2 py-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-200 
                                    focus:outline-none focus:ring-sky-300 sm:text-sm'
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                    value={passwordConfirm}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-200'>Direccion</label>
                            <div className='mt-1'>
                                <input type="text" name="" id="" required 
                                    className='px-2 py-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-200 
                                    focus:outline-none focus:ring-sky-300 sm:text-sm'
                                    onChange={(e) => setDirection(e.target.value)}
                                    value={direction}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-200'>Teléfono</label>
                            <div className='mt-1'>
                                <input type="tel" name="" id="" required 
                                    className='px-2 py-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-200 
                                    focus:outline-none focus:ring-sky-300 sm:text-sm'
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Aceptar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;