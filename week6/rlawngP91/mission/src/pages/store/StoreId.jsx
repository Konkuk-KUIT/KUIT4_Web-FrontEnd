import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import stores from "../../models/stores";


const StoreId = () => {
    const { storeId } = useParams();
    const store = stores.find((store) => store.id.toString() === storeId);

    if (!store) {
        return <div>가게를 찾을 수 없어요 🥺</div>;
    }

    return (
        <div>
            <h1 className={storeCategoryStyle}>{store.name}</h1>
            <div className={storeListStyle}>
                {stores.menus.map((menu) => {
                    return <MenuItem key={menu.id} menu={menu} />;
                })}
            </div>
            <OrderBar />
        </div>
    );
};

export default StoreId;