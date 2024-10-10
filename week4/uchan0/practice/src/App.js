import React from "react";
import UserList from "./UserList";

const Content = (props) => {
  const name = "찬영1";
  return (
    <div>
      <h1>Content</h1>
      {name === "찬영" ? <div>{name}</div> : <div>false</div>}
      <div>{props.num}</div>
    </div>
  );
};

const Header = () => {
  const num = 123;
  return (
    <h1>
      <div>Title</div>
      <Content num={num} />
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <UserList />
    </div>
  );
};

export default App;
