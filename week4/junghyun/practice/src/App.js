import React from "react";
import { userData } from "./data";
import UserList2 from "./UserList2";

const Content = (props) => {
  const name = "Junghyun";
  const {
    user: {
      name: userName,
      age,
      address: { city, zipcode },
    },
  } = userData;

  return (
    <div>
      <h1>Content</h1>
      {name === "Junghyun" ? <div>Hi, {name}!</div> : <div>Who are you?</div>}
      <div>{props.num}</div>
      <div>
        {/* <h1>Name : {userData.user.name}</h1> */}
        {/* <h1>Age : {userData.user.age}</h1> */}
        {/* <h1>City : {userData.user.address.city}</h1> */}
        {/* <h1>ZipCode : {userData.user.address.zipcode}</h1> */}
        <h1>Name : {userName}</h1>
        <h1>Age : {age}</h1>
        <h1>City : {city}</h1>
        <h1>ZipCode : {zipcode}</h1>
      </div>
    </div>);
};

const Header = () => {
  const num = 624;
  return (
    <h1>
      <div>Title</div>
      <Content num={num} userData={userData}/>
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <UserList2 />
      <Header />        
    </div>
  );
};

export default App;