"use client";

import Image from "next/image";
import genericUser from "../../../../public/generic_user.png";
import React, { useState } from "react";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { useRouter } from "next/navigation";
import { registerService } from "@/services/registerService";

const Register: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [direction, setDirection] = useState("");
    const [phone, setPhone] = useState("");
    const router = useRouter();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name,
            email,
            password,
            address: direction,
            phone,
        };

        if(password != passwordConfirm){
            toast.error("Las contraseñas no coinciden", {
                duration: 4000,
                progress: true,
                position: "top-center",
                transition: "bounceIn",
                icon: '',
                sonido: false,
              });
            return;
        };

        try {
            
            await registerService(name, email, password, direction, phone);

            toast.success("¡La operación se realizó con éxito!", {
                duration: 2000,
                progress: true,
                position: "top-center",
                transition: "bounceIn",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
                sonido: false,
              });

              setTimeout(() => {
                  router.push("/login");
              }, 2000);
              
        } catch (error) {
            toast.error("Ooopsss! Algo salió mal...", {
                duration: 5000,
                progress: true,
                position: "top-center",
                transition: "bounceIn",
                icon: '',
                sonido: false,
              });
        }
        
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
                                <input type="text"  required 
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
                                <input type="email"  required 
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
                                <input type="password"  required 
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
                                <input type="password"  required 
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
                                <input type="text"  required 
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
                                <input type="tel"  required 
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