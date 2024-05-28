import React from 'react';
import { addItem } from '../../../lib/features/CartSlice';
import { useAppDispatch } from '../../../lib/hooks';

const CartItems = ({ item }) => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div className='card bg-[#111827] rounded-lg'>
                <div className="img p-5 flex items-center justify-center bg-[#f1f2f3] h-60 rounded-bl-full rounded-t-lg">
                    <img
                        src={`${process.env.NEXT_PUBLIC_URL}${item.attributes.imge.data[0].attributes.url}`}
                        alt={item.attributes.imge.data[0].attributes.url}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="text flex flex-col p-5 px-7 font-medium gap-4">
                    <h3 className='text-3xl  text-white'>{item.attributes.title}</h3>
                    <p className=' text-zinc-600 font-sans'>{item.attributes.description}</p>
                    <div className="Action flex items-center justify-between">
                        <p className='text-white'>{item.attributes.price}</p>
                        <button onClick={() => {
                            dispatch(addItem(item))
                        }} className='bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItems;
