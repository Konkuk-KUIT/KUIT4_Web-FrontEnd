import Button from "../Button";
import styled from "styled-components";
const MenuItem = ({ menu }) => {
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
    border-radius: 27px;
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
        <span style={{
          height:"16px",
          fontSize:"13px",
          fontWeight:"400",
          color:"#6B7684",
          margin:0
        }}>{menu.price}</span>
        <p style={{
          height:"32px",
          width:"201px",
          fontSize:"13px",
          color:"#6B7684",
          margin: 0
        }}>{menu.ingredients}</p>
      </div>
      <div style={{
        paddingTop: "24px"

      }}>
      <Button onClick={handleAddMenu} type="button" size="sm" >
        담기
      </Button></div>
    </StyledDiv>
  );
};

export default MenuItem;
