import { useState, useEffect } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import "./shop.css";

const Shop = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    // API Call
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://api.theindianhome.in/api/product/list",
          { cache: "no-store" },
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        console.log("data:", data); // { success: true, products: (44)[]}
        setResponse(data?.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  if (response.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="shop-container">
      {response.map((element) => (
        <Card key={element._id} {...element} />
      ))}
    </div>
  );
};

export default Shop;
