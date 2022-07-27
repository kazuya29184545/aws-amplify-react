import React from "react";


export const InputPrice = (props) => {
    const { addPrice, onChangeAddPrice } = props;
    
    

    return (
        <div className="input-area">
            <input placeholder="Add the total price today" defaultValue={ addPrice } onChange={ onChangeAddPrice } />
        </div>
    );
};
