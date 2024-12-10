import { AppProps } from "next/dist/shared/lib/router/router";
import { ProductDetailComponent } from "@/components/detail/ProductDetailComponent";

const getProductById = async (id: number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    const json = await response.json();
    return json;
}

const Product: React.FC<AppProps> = async ({params}) => {
    const {id} = await params;

    const {name, description, price, stock, image} = await getProductById(id);
    
    return (
        <>
            {
                <ProductDetailComponent 
                    id={id}
                    name={name}
                    description={description}
                    price={price}
                    stock={stock}
                    image={image}
                />
            }
        </>
    )
}

export default Product;