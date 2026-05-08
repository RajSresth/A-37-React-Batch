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
            <Link  key={singleProduct.id} to={`products/${singleProduct.id}`}>
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

/**
 * singleProduct = {
          "id": 1,
          "title": "Essence Mascara Lash Princess",
          "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
          "category": "beauty",
          "price": 9.99,
          "discountPercentage": 10.48,
          "rating": 2.56,
          "stock": 99,
          "tags": [
          "beauty",
          "mascara"
          ],
          "brand": "Essence",
          "sku": "BEA-ESS-ESS-001",
          "weight": 4,
          "dimensions": {
          "width": 15.14,
          "height": 13.08,
          "depth": 22.99
          },
          "warrantyInformation": "1 week warranty",
          "shippingInformation": "Ships in 3-5 business days",
          "availabilityStatus": "In Stock",
          "reviews": [
          {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
          },
          {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lucas Gordon",
          "reviewerEmail": "lucas.gordon@x.dummyjson.com"
          },
          {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
          }
          ],
          "returnPolicy": "No return policy",
          "minimumOrderQuantity": 48,
          "meta": {
          "createdAt": "2025-04-30T09:41:02.053Z",
          "updatedAt": "2025-04-30T09:41:02.053Z",
          "barcode": "5784719087687",
          "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
          },
          "images": [
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
          ],
          "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
}
 */

// title,category,price, description,images
