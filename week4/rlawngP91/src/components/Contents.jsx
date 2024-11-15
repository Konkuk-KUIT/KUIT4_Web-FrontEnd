import React from 'react';
import ItemInfo from "./ItemInfo"  // 개별 아이템 컴포넌트 import

const Contents = ({ items }) => {
    return (
        <div>
            {/* 배열을 map 함수로 순회하면서 각각의 Item에 props로 전달 */}
            {items.map((item, index) => (
                <ItemInfo key={index} item={item} />
            ))}
        </div>
    );
};

export default Contents;
