import { useParams, useLocation, useSearchParams } from "react-router-dom";

const PageId = () => {
    const {pageId} = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const onChangeParam = () => {
        setSearchParams({key: 98776543});
    }

    return (
        <div>
            PageId
            <div>페이지 아이디는 {pageId} 입니다.</div>
            <div>pathname : {location.pathname}</div>
            <div>query string (search) : {location.search}</div> {/* ?을 포함한 쿼리스트링 */}
            <div>searchParams (key is ...) : {searchParams.get("key")}</div>
            <div>searchParams (word is ...) : {searchParams.get("word")}</div>
            <button onClick={onChangeParam}>setSearchParams</button>
        </div>
    )
}

export default PageId 
