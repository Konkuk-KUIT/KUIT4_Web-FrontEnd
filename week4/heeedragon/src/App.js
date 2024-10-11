import React from "react";

//컴포넌트 선언은 밖에서 개별로
//컴포넌트 이름 시작문자는 대문자로

    // 최상위 계층을 보았을 때 반드시 부모요소 하나가 감싸는 형태여야 한다 <div></div>
    // JSX 안에서 JS표현식을 작성하려면 JSX내부에서 코드를 {}로 감싸야 한다 {name}
    // if문 대신 삼항연산자를 사용해야한다
const Content = (props) => {
    const name = "희용";
    return (
    <div>
    <h1>Content</h1>
    {name === "희용" ? <div>{name}</div> : <div>false</div>}
    <div>{props.num}</div>
    </div>
    );
};

const Header = () => {
    const num = 32;
    return (
        <h1>
            <div>Title</div>
            <Content num={num}/>
        </h1>
    );
};

const App = () => {
    return (<div>
        <Header/>
    </div>
    );
};

export default App;