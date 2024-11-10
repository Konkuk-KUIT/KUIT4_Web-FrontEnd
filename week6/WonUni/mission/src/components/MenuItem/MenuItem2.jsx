import Button from "../Button";
import styled from "styled-components";
import RightChev from "../../assets/RightChevron.svg"
const MenuItem2 = ({ menu }) => {
  const handleAddMenu = () => {};


  const StyledDiv = styled.div`
    padding: 16px 24px;
    display: flex;
    height: 78px;
    justify-content: space-between;
  `

  const ThumbNail = styled.div`
    width: 54px;
    height: 54px;
    flex-shrink: 0;
    
    background: #ECECEC;
    margin: 12px 0;
    margin-right: 16px;
  `
  return (
    <StyledDiv>
      <ThumbNail></ThumbNail>
      <div style={{
        display: "flex",
        flexDirection:"column",
        gap:"5px"
      }}>
        <p style={{
          height:"20px",
          fontSize:"14px",
          fontWeight: "600",
          margin: 0
        }}>{menu.name}</p>
        
        <p style={{
          height:"32px",
          width:"201px",
          fontSize:"12px",
          color:"#6B7684",
          margin: 0
        }}>{menu.ingredients}</p>
        <span style={{
          height:"16px",
          fontSize:"13px",
          fontWeight:"400",
          color:"#6B7684",
          margin:0
        }}>{menu.price}원</span>
      </div>
      <div style={{
        paddingTop: "24px",
        color: "#6B7684",
        fontSize: "12px"
      }}>
        1개
      </div>
      <div style={{
        paddingTop: "24px"
      }}>
        <img src={RightChev} alt="화살표" sizes="16px"/>
      </div>
    </StyledDiv>
  );
};

export default MenuItem2;
