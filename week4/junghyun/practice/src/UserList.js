import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      gender: "male",
      username: "a",
      email: "aa@gmail.com",
    },
    {
      id: 2,
      gender: "male",
      username: "b",
      email: "b@gmail.com",
    },
    {
      id: 3,
      gender: "female",
      username: "c",
      email: "cc@gmail.com",
    },
  ];
  return (
    <div>
      <div>
        <b>{users[0].username}</b> <span>{users[0].email}</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>{users[1].email}</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>{users[2].email}</span>
      </div>
    </div>
  );
};