import styled from "styled-components";

const StoreTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid #e5e8eb;

  > * {
    margin-bottom: 10px;
  }
  .store-name {
    font-size: 25px;
    font-weight: 700;
  }
`;

const MenuDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: var(--order-bar);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
  > .menu-category {
    color: #6b7684;
    font-size: 17px;
    font-weight: 600;
  }
`;
const StoreDesc = styled.div`
  display: flex;

  > p {
    color: #4e5968;
    font-size: 15px;
    font-weight: 500;
    margin-right: 10px;
  }
`;
const RatingReviewDisplay = styled.div`
  display: flex;
  margin-bottom: 20px;
  > * {
    padding-right: 10px;
  }
  > p {
    color: #4e5968;
  }
  > p.store-rate {
    font-size: 17px;
    font-weight: 600;
  }
  > p.store-review {
    font-size: 16px;
    font-weight: 500;
  }
`;
export { StoreTitle, MenuDetailWrapper, RatingReviewDisplay, StoreDesc };
