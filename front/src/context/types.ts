import { UserProfile } from "@/types/userProfile";
import { ReactNode } from "react";

export type Props = {
    children?: ReactNode;
}

export type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    setUserLogin: (user: UserProfile, token: string) => void;
    logout: () => void;
    updateDataUserLogged: (user: UserProfile) => void;
}