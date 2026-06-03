import { useState } from "react";
import { useLazyGetSingleUserQuery, useCreateUserMutation  } from "../redux/userApi";

const buttonStyle = {
  width: "initial",
  margin: "20px 0px 0px 20px",
  cursor: "pointer",
};

const Order = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const [getSingleUser, { data, error, isLoading, isSuccess, isError }] =
    useLazyGetSingleUserQuery();

    const [createUser,result] = useCreateUserMutation()
    console.log()

  const handleClick = () => {
    const id = "1";
    getSingleUser(id);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id:4,
      fullname,
      email
    }

    createUser(user)

  }

  return (
    <div>
      {data && (
        <div>
          <h2>Fullname:{data.fullname}</h2>
          <h2>Email:{data.email}</h2>
        </div>
      )}
      <button onClick={handleClick} style={buttonStyle}>
        Click
      </button>

      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter fullname"
            style={{padding: "8px 12px", fontSize: "16px", marginTop: "10px"}}
          />
        </div>
        
        <div>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            style={{padding: "8px 12px", fontSize: "16px", marginTop: "10px"}}
          />
        </div>

        <button type="submit" style={buttonStyle}>Create</button>
      </form>
    </div>
  );
};

export default Order;
