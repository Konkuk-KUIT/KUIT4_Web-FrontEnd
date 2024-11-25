import { useParams, useLocation, useSearchParams } from "react-router-dom"

const PageId = () => {
    const { pageId } = useParams();
    const location = useLocation();
    const [searchParams, setSerchParams] = useSearchParams();
  
    const onChangeParam = ()=> {
        setSerchParams({key : 2321335});
    };

    return (
    <div>
        PageId
        <div>페이지 아이디는 {pageId}</div>
        <div>pathname : {location.pathname}</div>
        <div>query string : {location.search}</div>
        <div>searchParams : {searchParams.get("key")}</div>
        <button onClick={onChangeParam}>setSerchParams</button>
    </div>
  )
}

export default PageId