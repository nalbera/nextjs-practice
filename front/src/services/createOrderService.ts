
export const createOrderService = async (userId: number | undefined, products: number[], token: string | null) => { 
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'authorization': token
        } as HeadersInit,
        body: JSON.stringify({
            userId,
            products
        })
    });
    
    const json = await response.json();
    
    if(!response.ok) throw new Error();

    return;

}