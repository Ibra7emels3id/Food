import React from 'react';

const CheckCard = ({ item }) => {

    console.log(item);
    return (
        <>
            <div className="carts p-1 ">
                <div className="cart  flex items-center justify-between bg-[#eee] p-5 ">
                    <h4>{item.attributes.title}</h4>
                    <small>{Math.round(item.attributes.price * item.cartquantity)}</small>
                </div>
            </div>
        </>
    );
}

export default CheckCard;
