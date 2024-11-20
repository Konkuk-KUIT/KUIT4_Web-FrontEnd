import { useParams, useLocation, useSearchParams } from "react-router-dom";

const PageId = () => {
    const { pageId } = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const onChangeParams = () => {
        setSearchParams({ key: 1234 })
    }

    return (
        <div>PageId
            <div>PageId : {pageId}</div>
            <div>PathName : {location.pathname}</div>
            <div>QueryString : {location.search}</div>
            <div>SearchParams : {searchParams.get("key")}</div>
            <button onClick={onChangeParams}>
                Change Key Value
            </button>
        </div>
    )
}
export default PageId;
