import { useParams } from "react-router-dom";

const PageId = () => {
    const { pageId } = useParams();

    return (
        <div>PageId
            <div>
                PageId : {pageId}
            </div>
        </div>
    )
}
export default PageId;
