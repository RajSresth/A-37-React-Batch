import React from "react";
import { useGetSingleUserQuery } from "../redux/userApi";

const Order = () => {
  const {data,error, isLoading} = useGetSingleUserQuery(1)
  
  if(isLoading) return <h2>Loading....</h2>
  if(error) return <h2>{error}</h2>

  return <div>
    <h2>{data.name}</h2>
    <h2>{data.email}</h2>
  </div>;
};

export default Order;
