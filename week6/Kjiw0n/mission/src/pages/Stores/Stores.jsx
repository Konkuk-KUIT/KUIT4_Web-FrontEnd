import styled from "styled-components";
import { Title } from "../../styles/FontStyle";
import StoreListItem from "../../components/Store/StoreListItem";
import stores from "../../models/stores";
import BackBtn from "../../components/BackBtn";
import { useNavigate } from "react-router-dom";

const Stores = () => {
  const navigate = useNavigate();

  return (
    <div>
      <BackBtn onClick={() => navigate(-1)} />
      <Title style={{ margin: "26px 0 2px 24px" }}>샐러드</Title>

      <StoreList>
        {stores.map((store, index) => (
          <StoreListItem key={index} store={store} />
        ))}
      </StoreList>
    </div>
  );
};

export default Stores;

const StoreList = styled.section`
  height: 558px;
  overflow-y: auto;
`;
