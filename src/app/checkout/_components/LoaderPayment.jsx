import React from 'react';

// import Style 
import './css/style.css'

const LoaderPayment = () => {
    return (
        <>
            <div className="loader flex items-center justify-center h-screen fixed left-0 top-0 bg-opacity-60 backdrop-blur-sm w-[100vw] z-50">
                <div className="newtons-cradle">
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                </div>
            </div>
        </>
    );
}

export default LoaderPayment;
