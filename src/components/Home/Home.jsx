/* eslint-disable no-unused-vars */
import React from 'react';
import Cart from '../Cart/Cart';
import "./Home.css";

const Home = () => {
    return (
        <div className='container'>
            <div className="card-container">
                <div className="card p-2">
                    <div className="card-img">
                        <img className='photo' src="https://i.ibb.co/Wxv0V3F/Rectangle-2-2.png" alt="" />
                    </div>
                    <h2>Introduction to C Programming</h2>
                    <p><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>
                    <div className="info">
                        <p>Price:</p>
                        <p>Credit:</p>
                    </div>
                    <button>Select</button>
                </div>
            </div>           
        </div>
    );
};

export default Home;