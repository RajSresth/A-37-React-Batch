import {useState, useEffect} from 'react'
import Card from "./Card";
import Shimmer from './Shimmer';
import "./shop.css";

const Shop = () => {
    const [response, setResponse] = useState([]);

    useEffect(()=> {
        // API Call
        const getProducts = async () => {
            const response = await fetch("https://api.theindianhome.in/api/product/list",{cache: 'no-store'})
            const data = await response.json();
            console.log("data:", data); // { success: true, products: (44)[]}
            setResponse(data?.products)
        }

        getProducts()
    }, []);


    if(response.length === 0)
    {
       return <Shimmer />
    }

  return (
    <div className="shop-container">
        {
            response.map(element => <Card key={element._id} {...element} />)
        }
    </div>
  )
}

export default Shop