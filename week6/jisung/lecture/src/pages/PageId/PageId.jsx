import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom"; // path parameter 설정 가능

const PageId = () => {
  const { pageId } = useParams(); 
  // 객체를 반환하므로 구조분해할당으로 원하는 프로퍼티 가져올 수 있음
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
	
  const onChangeParam = () => {
		setSearchParams({key: 2345})
	}

  return (
    <div>
      PageIdPageId
      <div>페이지 아이디는 {pageId}입니다</div>
        <div>pathname: {location.pathname}</div>
        <div>query string: {location.search}</div>
        <div>searchParams: {searchParams.get("key")}</div>
        <button onClick={onChangeParam}>setSearchParams: {}</button>
				{/* 클릭하면 url에 쿼리스트링 추가 가능 */}

				{/* 위 코드 결과
				http://localhost:5173/page/1111?key=2345
				
				PageIdPageId
				페이지 아이디는 1111입니다
				pathname: /page/1111
				query string: ?key=2345
				searchParams: 2345
				*/}
    </div>
  );
};

export default PageId;
