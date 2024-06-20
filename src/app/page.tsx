import React from "react";
import AddNewUser from "@/components/add-new-user/AddNewUser";
import { fetchUsersAction } from "@/actions";
import PopulateUserList from "@/components/PopulateUserList/PopulateUserList";

const Home = async () => {
  const userList = await fetchUsersAction();
  console.log(process.env);
  
  return (
    <div className="py-20 w-11/12 sm:w-10/12 mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <PopulateUserList userList={userList} />
      </div>
    </div>
  );
};

export default Home;
