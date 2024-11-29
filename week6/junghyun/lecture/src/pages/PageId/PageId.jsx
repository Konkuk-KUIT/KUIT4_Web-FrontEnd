import {useParams, useLocation, useSearchParams} from "react-router-dom";

const PageId = () => {
  const {pageId} = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const onChangeParam = () => {
    setSearchParams({key: 624});
  };

  return (
    <div>
      PageId
      <div>page id : {pageId}</div>
      <div>path name : {location.pathname}</div>
      <div>query string : {location.search}</div>
      <div>search params : {searchParams.get("key")}</div>
      <button onClick={onChangeParam}>set search params</button>
    </div>
  );
};
export default PageId