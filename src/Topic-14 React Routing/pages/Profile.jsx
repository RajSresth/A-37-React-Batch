import { useEffect, useState } from "react";
import { useGetAllUsersQuery } from "../redux/userApi";

const Profile = () => {
  const { data, error, isError, isLoading } = useGetAllUsersQuery();
  console.log("Profile Render", data);

  if (error) return <div>Profile Error</div>;
  if (isLoading) return <div>Profile Loading...</div>;

  return (
    <div>
      {data.map((element) => (
        <h2 key={element.id}>{element.fullname}</h2>
      ))}
    </div>
  );
};

export default Profile;
