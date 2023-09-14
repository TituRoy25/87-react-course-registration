/* eslint-disable no-unused-vars */
import React from 'react';
import Cart from '../Cart/Cart';
import "./Home.css";

const Home = () => {
    return (
        <div className='container mt-8'>
            <div className="card-container px-5">
                <div className="card p-2">
                    <div className="card-img">
                        <img className='photo' src="https://i.ibb.co/Wxv0V3F/Rectangle-2-2.png" alt="" />
                    </div>
                    <h2 className='font-semibold mt-2'>Introduction to C Programming</h2>
                    <p className='mt-2'><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>
                    <div className="info mt-2">
                        <p>$ Price:</p>
                        <p>Credit:</p>
                    </div>
                    <button className='bg-[#2F80ED] w-[232px] text-white mt-2'>Select</button>
                </div>
            </div>           
        </div>
    );
};

export default Home;