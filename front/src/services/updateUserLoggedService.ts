
export const updateUserLoggedService = async (name: string, address: string, email: string, phone: string, token: string | null) => {

    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/update`;
    
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "authorization": token,
        } as HeadersInit,
        body: JSON.stringify({
            name,
            address,
            email,
            phone
        })
    })

    const json = await response.json();
    console.log(json);
    
    if(!response.ok) throw new Error();

    return json;

}