import { useEffect, useId } from "react";
import { useErrorBoundary, withErrorBoundary } from "react-error-boundary";
import "./input.css";
import axios from "axios";
import FallbackUi from "./FallbackUi";

const Input = ({ labelName, type, status, setStatus }) => {
  const id = useId();
  const {showBoundary } = useErrorBoundary()

  if (status === 5) {
    throw new Error("Kuch to gadbad h");
  }

 useEffect(()=> {
    const getUsers = async () => {
      try {
          const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
          console.log("data:",data);
      } catch (err) {
          showBoundary(err?.response);
      }
    }

    getUsers()
 }, [])

  return (
    <div className="input-container">
      <label htmlFor={`inp-${id}`}>{labelName} </label>
      <input type={type} id={`inp-${id}`} />
      <h2>Status: {status}</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <button>Click</button>
        <button onClick={() => setStatus(status + 1)}>Increase</button>
      </div>
    </div>
  );
};

export default withErrorBoundary(Input,{
  FallbackComponent: FallbackUi,
   onError:(error,errorInfo) => {
                console.error("Caught error:", error.message);
           }
});






