import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Profile = () => {
  const userdata = useLoaderData();
  const navigate = useNavigate();

  console.log("Profile Render");
  console.log("userdata:", userdata);

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
            <img src={userdata?.avatar_url} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="title">Username: {userdata?.name}</div>
          <div className="title">Login Id: {userdata?.login}</div>
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
