import styled from "styled-components";
import { Title } from "../../styles/FontStyle";
import StoreListItem from "../../components/Store/StoreListItem";
import stores from "../../models/stores";

const Stores = () => {
  return (
    <div>
      <Back src="arrowBack.svg" alt="arrow back icon" style={{}} />
      <Title>샐러드</Title>

      <StoreList>
        {stores.map((store, index) => (
          <StoreListItem key={index} store={store} />
        ))}
      </StoreList>
    </div>
  );
};

export default Stores;

const Back = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 10px;
`;

const StoreList = styled.section`
  height: 558px;
  overflow-y: scroll;
`;
