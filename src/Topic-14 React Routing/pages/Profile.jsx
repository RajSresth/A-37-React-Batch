import React from "react";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
 const userdata = useLoaderData();

 console.log("Profile Render");
 console.log("userdata:",userdata);

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
        </div>
      </div>
    </div>
  );
};

export default Profile;
