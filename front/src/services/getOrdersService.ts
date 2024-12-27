import { Order } from "@/types/orders";

const getOrdersService = async (token: string | null) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/orders`, {
        headers: {
            'authorization': token
        } as HeadersInit
    });
    
    const json = await response.json();
         
    let currentOrders;
    if(json.length) {
        currentOrders = json.map((orders: Order) => {
            return {
                id: orders.id,
                date: orders.date,
                status: orders.status,
                products: orders.products,
                totalOrder: orders.products.reduce((curr, obj) => curr + obj.price, 0)
            }
        })
    }
          
    return currentOrders;
}

export default getOrdersService;