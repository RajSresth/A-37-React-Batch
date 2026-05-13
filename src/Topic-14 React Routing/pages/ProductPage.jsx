import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("category"));
  console.log(searchParams.get("page"));

  const changeSearchParams = () => {
    setSearchParams((prev) => {
      prev.set("category", "fragrance");
      prev.set("page", "10");
      prev.set("limit", "10");
      return prev;
    });
  };

  useEffect(() => {
    const controller = new AbortController(); // step-1 controller creation

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`,
          {
            cache: "no-store",
            signal: controller.signal, // step-2 signal
          },
        );

        if (!response.ok) throw new Error("Somthing went wrong");
        const data = await response.json();
        console.log("data:", data);
        setSingleProduct(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return; // silently ignore, this is intentional
        }

        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      controller.abort(); // step-3 abort in cleanup
    };
  }, []);

  if (loading || !singleProduct) {
    return <h1>Loading Products.....</h1>;
  }

  const { title, tags, price, description } = singleProduct;

  return (
    <div className="product-page">
      <div className="center-container">
        <div className="left">
          <div className="image-container">
            <img src={singleProduct?.images[0]} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="tags-container">
            {tags.map((tag, idx) => (
              <span key={idx} className="tags">
                {tag}
              </span>
            ))}
          </div>
          <div className="price">&#x24; {price}</div>

          <div className="cart-container">
            <div>tax included. Shipping calculated at checkout</div>
            <div className="qty-container">
              <button onClick={() => setCount(count > 1 ? count - 1 : count)}>
                -
              </button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className="add-cart" onClick={changeSearchParams}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

/**
 * ! useTransition
 * ! useDefferedValue
 *
 * !! Tanstack (Boss)
 */
