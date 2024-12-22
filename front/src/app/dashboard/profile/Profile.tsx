"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContextProvider";
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";
import { updateUserLoggedService } from "@/services/updateUserLoggedService";

const Profile = () => {
    
    const {user, token, logout} = useContext(AuthContext);
    

    const [name, setName] = useState(user?.userName || "");
    const [address, setAddress] = useState(user?.address || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");
    
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            
            await updateUserLoggedService(name, address, email, phone, token);
            logout();
            
        } catch (error) {
          toast.error(`${ error }`, {
                duration: 5000,
                progress: true,
                position: "top-center",
                transition: "bounceIn",
                icon: '',
                sonido: false,
          });

        }finally {
            toast.success('Datos actualizados correctamente', {
                duration: 3000,
                progress: true,
                position: "top-center",
                transition: "bounceIn",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
                sonido: false,
            }); 
        }
    }
    return (
        <div className="mt-9 mr-auto ml-20">
            <div className="bg-white border-4 rounded-lg shadow relative m-10">
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">
                        Datos de usuario
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Nombre y Apellido</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Dirección</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={address}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    required
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Teléfono</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-200 rounded-b mt-8">
                            <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Guardar</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Profile;