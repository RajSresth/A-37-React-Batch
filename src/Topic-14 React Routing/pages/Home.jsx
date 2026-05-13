import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Card from "../components/Card";
import {Link} from "react-router-dom"

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log("Home Render");

  useEffect(() => {
    const controller = new AbortController(); // step-1 controller creation

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          cache: "no-store",
          signal: controller.signal, // step-2 signal
        });

        if (!response.ok) throw new Error("Somthing went wrong");

        const data = await response.json();
        setProducts(data?.products);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return; // silently ignore, this is intentional
        }

        console.log(error);
      }
    };

    fetchProducts();

    return () => {
      controller.abort(); // step-3 abort in cleanup
    };
  }, []);

  if (products.length === 0) {
    return <Shimmer />;
  }

  return (
    <div id="home">
      <div className="center-container">
        {products.map((singleProduct) => {
          const { title, category, price, description, images } = singleProduct;
          return (
            <Link  key={singleProduct.id} to={`/products/${singleProduct.id}?category=beauty&page=10`}>
              <Card               
                title={title}
                category={category}
                price={price}
                description={description}
                images={images}
              />              
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;


