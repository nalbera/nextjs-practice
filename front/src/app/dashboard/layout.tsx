import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="min-h-screen flex flex-row justify-between">
            <Sidebar />    
            { children }
        </div>
        
    )
}

export default Layout;