"use client";

import { UserProfile } from "@/types/userProfile";
import { createContext, useEffect, useState } from "react";
import { Props, UserContextType } from "./types";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<UserContextType>({} as UserContextType);

const AuthContextProvider = ({children}: Props) => {

    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem('token');
        if(user && token){
            setUser(JSON.parse(user));
            setToken(token);
        }
    },[]);

    const setUserLogin = (user: UserProfile, token: string) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        setToken(token);
        localStorage.setItem("token", token);
    }

    const updateDataUserLogged = (user: UserProfile) => {
        localStorage.removeItem("user");
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        router.push('/login');
    }

    return (
        <AuthContext.Provider value={{token, user, setUserLogin, logout, updateDataUserLogged}}>
            { children }
        </AuthContext.Provider>
    )
} 

export default AuthContextProvider;