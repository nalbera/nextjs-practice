import products from "@/tmp/products";
import { Card } from "../../components/card/Card";

const Home = () => {
    return (
        <main className="bg-gray-500 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white mb-8">Listado de Productos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                  products && products.map((prod, index) => {
                    return (
                      <Card image={prod.image} name={prod.name} price={prod.price} description={prod.description} key={index}/>
                    )
                  }) 
                }
              </div>
            </div>
        </main>
      );
}

export default Home;