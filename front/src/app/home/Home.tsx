import products from "@/tmp/products";
import { Card } from "../../components/card/Card";

const Home = () => {
    return (
        <main>
          <div>
            <h2>Products</h2>
          </div>
          {
            products && products.map((prod, index) => {
              return (
                  <Card image={prod.image} name={prod.name} price={prod.price} description={prod.description} key={index}/>
              )
            })
          }
        </main>
      );
}

export default Home;