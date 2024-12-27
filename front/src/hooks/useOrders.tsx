import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContextProvider";
import { Order } from "@/types/orders";
import getOrdersService from "@/services/getOrdersService";


const useOrders = () => {
    
    const { token } = useContext(AuthContext);
    const [orders, setOrders] = useState<Order[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
    
        const loadOrders = async () => {
            try {
                
                setLoading(true);

                const currentOrders = await getOrdersService(token);

                setOrders(currentOrders);

                setLoading(false);

            } catch (error) {

                if(error instanceof Error) {

                    setError(error.message);

                }
            }
          
        }
    
        loadOrders();

      }, [token]);
    
      return {orders, error, loading};
}

export default useOrders;