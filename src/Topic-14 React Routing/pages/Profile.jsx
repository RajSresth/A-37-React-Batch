import { useEffect, useState } from "react";
import { useGetAllUsersQuery, userApi } from "../redux/userApi";
import { useGetAllPostsQuery } from "../redux/postapi";
import "../redux/postApi.js";

const Profile = () => {
  //2. prefetch inside a component
  const prefetchPost = userApi.usePrefetch("getAllPosts");

  useEffect(() => {
    prefetchPost();
  }, []);

  // const { data, error, isError, isLoading } = useGetAllUsersQuery(undefined,{
  //   pollingInterval:15000,
  //  skipPollingIfUnfocused: true,
  // });
  const { data, error, isError, isLoading } = useGetAllUsersQuery();

  console.log("Profile Render");

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
