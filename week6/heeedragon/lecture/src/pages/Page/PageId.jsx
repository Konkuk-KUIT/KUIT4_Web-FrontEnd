import React from 'react'
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

const PageId = () => {
    const {pageId} = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const onChangeParam = () => {
        setSearchParams({key:3234234});
    };

    return (
        <div>
        PageId
        <div>{pageId}</div>
        <div>pathname: {location.pathname}</div>
        <div>query string: {location.search}</div>
        <div>searchParams: {searchParams.get("key")}</div>
        <button onClick={onChangeParam}>setSearchParams</button>
        </div>
    )
}

export default PageId;