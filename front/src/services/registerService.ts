
export const registerService = async (name: string, email: string, password: string, address: string, phone: string) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password,
            address,
            phone
        })
    });
    
    if(!response.ok) throw new Error();

    return;
}