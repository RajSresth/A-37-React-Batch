import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ProductPage = () => {
    const [singleProduct, setSingleProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    console.log("id:",id);

useEffect(() => {
    const controller = new AbortController(); // step-1 controller creation

    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
          cache: "no-store",
          signal: controller.signal, // step-2 signal
        });

        if (!response.ok) throw new Error("Somthing went wrong");
        const data = await response.json();
        console.log("data:",data);
        setSingleProduct(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return; // silently ignore, this is intentional
        }

        console.log(error);
      }
      finally{
            setLoading(false)
      }
    };

    fetchProducts();

    return () => {
      controller.abort(); // step-3 abort in cleanup
    };
  }, []);


  if(loading)
  {
    return <h1>Loading Products.....</h1>
  }
   
  return (
    <div className="product-page">
      <div className="center-container">
        <div className="left">
          <div className="image-container">
            <img src={singleProduct?.images[0]} alt="" />
          </div>
        </div>
        <div className="right">
          {/* <p className="category">{category}</p>
          <div className="title">{title}</div>
          <div className="description">{customizeDescription}</div>
          <div className="price">&#x24; {price}</div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
