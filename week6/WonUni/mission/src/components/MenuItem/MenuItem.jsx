import useCartStore from "../../store/cartStore";
import Button from "../Button";
import styled from "styled-components";
const MenuItem = ({ menu , newStore}) => {

  const addMenu = useCartStore((state)=> state.addMenu);
  const setStore = useCartStore((state) => state.setStore);
  const store = useCartStore((state)=>state.store);
  const resetStore = useCartStore((state)=>state.resetStore);

  const handleAddMenu = () => { 
    
    if (store && store != newStore){
      const confirmClear = window.confirm(
        "장바구니에는 동일 가게의 메뉴만 추가할 수 있습니다. 기존 항목을 초기화할까요?"
      );
      if(confirmClear){
        resetStore();
      }
    }
    else{
      addMenu(menu, store);
      setStore(newStore);
    }
  };


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
        }}>{menu.name}{menu.id === 1 && <span style={{ color: "#3182F6" }}> BEST</span>}</p>
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
