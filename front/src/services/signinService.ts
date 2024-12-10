export const signInService = async (email: string, password: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    
    const json = await response.json();
    
    if(!response.ok) {
        throw new Error(json.message);
    }

    return json;
}