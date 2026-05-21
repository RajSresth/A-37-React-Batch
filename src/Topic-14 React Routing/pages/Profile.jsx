import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // const userdata = useLoaderData();
  const navigate = useNavigate();

  console.log("Profile Render");


  const handleClick = () => {
    navigate("/shop", {
      state: { 
              userName: userdata?.name, 
              userId: userdata?.login 
            }
    });
  };

  return (
    <div id="profile">
      <div className="center-container">
        <div className="left">
          <div className="image-container">
            <img src={"https://avatars.githubusercontent.com/u/122066418?v=4"} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="title">Username: { "Shresth Rajput"}</div>
          <div className="title">Login Id: { "rajSresth"}</div>
          Move to{" "}
          <button type="button" onClick={handleClick}>
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
