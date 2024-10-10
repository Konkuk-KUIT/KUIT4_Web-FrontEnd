import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
};

const UserList = () => {
  const users = [
    {
      id: 1,
      gender: "male",
      username: "ㅁㄴㅇ",
      email: "2asldkfj1@alskf.com",
    },
    {
      id: 2,
      gender: "male",
      username: "ㅂㅈㄷ",
      email: "lfkdi3@alskf.com",
    },
    {
      id: 3,
      gender: "female",
      username: "ㅋㅌㅊ",
      email: "gkzjkfj1@alskf.com",
    },
  ];
  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
      {users.map(
        (user) => user.gender === "male" && <User user={user} key={user.id} />
      )}
    </div>
  );
};

export default UserList;
