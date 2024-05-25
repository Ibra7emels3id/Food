import React from 'react';

import './style/loader.css'

const Loader = () => {
    return (
        <>
            <div className="Loaders w-[100vw] h-[100vh] flex items-center justify-center fixed left-0 top-0 bg-white z-50">
                <div className="loader">

                </div>
            </div>
        </>
    );
}

export default Loader;
