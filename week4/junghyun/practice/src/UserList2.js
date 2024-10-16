// UserList의 users에 계속 접근하는 번거로움 해결, 중복 코드 제거
// 하지만 동적인 배열을 렌더링 하지 못함 

import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  );
};

const UserList2 = () => {
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
      {users.map(
        (user) => (
          user.gender === "male" && <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList2;