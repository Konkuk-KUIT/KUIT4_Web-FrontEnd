import { useNavigate, useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";

import stores from "../../models/stores";
import BackBtn from "../../components/BackBtn";
import styled from "styled-components";
import StoreDetailInfo from "../../components/Store/StoreDetailInfo";

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((store) => store.id.toString() === storeId);
  const navigate = useNavigate();

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <BackBtn onClick={() => navigate(-1)} />

      <StoreDetailInfo />

      <Line></Line>

      <CategoryTitle>샐러드</CategoryTitle>

      <MenuItemWrapper>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </MenuItemWrapper>
    </div>
  );
};

export default Store;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e8eb;

  margin: 14px 0 26px 0;
`;

const CategoryTitle = styled.h4`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: 0 0 11px 24px;
`;

const MenuItemWrapper = styled.div`
  height: 445px;
`;
