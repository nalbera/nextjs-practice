export const getAllProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const json = await response.json();
    return json;
}