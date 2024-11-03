import styled from "styled-components";
import Categorys from "./Categorys";
import RigthChevron from "../../assets/right-chevron.svg";
const Header = styled.div`
  width: var(--width-variable);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  > .title {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 700;
  }
  > .addres {
    font-size: 17px;
    font-weight: 500;

    > img {
      width: 10px;
    }
  }
`;
export default function Main() {
  const statusBarHeight = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--status-bar");
  const widthV = getComputedStyle(document.documentElement).getPropertyValue(
    "--width-variable"
  );
  console.log("main");
  console.log(widthV);

  return (
    <div
      style={{
        marginTop: statusBarHeight,
        padding: "20px 20px",
        width: widthV,
      }}
    >
      <Header>
        <div className="title">먹지마</div>
        <div className="address">
          한남중앙로 40길 (한남 빌리지)(으)로 배달
          <img src={RigthChevron} alt="?" />
        </div>
      </Header>
      <Categorys />
    </div>
  );
}
