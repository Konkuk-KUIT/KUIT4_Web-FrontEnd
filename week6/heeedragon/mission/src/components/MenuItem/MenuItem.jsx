import React from 'react'
import Button from '../Button'; 

const MenuItem = ({ menu }) => {
    const handleAddMenu = () => {

    };

    return (
        <div>
            <h3>{menu.name}</h3>
            <span>{menu.price}</span>
            <p>{menu.ingredients}</p>
            <Button onClick={handleAddMenu} type="button" size="sm">담기</Button>
        </div>
    );
};

export default MenuItem;