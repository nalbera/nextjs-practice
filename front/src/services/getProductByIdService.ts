const getProductById = async (id: number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    const json = await response.json();
    return json;
}

export default getProductById;