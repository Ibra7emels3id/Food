import React from 'react';

const CheckCard = ({ item }) => {

    return (
        <>
            <div className="cart  flex items-center justify-between bg-[#eee] p-5 ">
                <h4>{item?.attributes?.title}</h4>
                <p>{Math.round(item?.attributes.price * item?.cartquantity)}</p>
            </div>
        </>
    );
}

export default CheckCard;
