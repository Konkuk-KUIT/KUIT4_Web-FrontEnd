import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const PageId = () => {
  const params = useParams();
  const { pageId } = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeParam = () => {
    setSearchParams({ key: 12312312 });
  };

  return (
    <div>
      PageId
      <div>{JSON.stringify(params)}</div>
      <div>{params.pageId}</div>
      <div>페이지 ID는 {pageId}입니다.</div>
      <div>pathname : {location.pathname}</div>
      <div>query string : {location.search}</div>
      <div>searchParams : {searchParams.get("key")}</div>
      <button onClick={onChangeParam}>setSearchParams</button>
    </div>
  );
};

export default PageId;
