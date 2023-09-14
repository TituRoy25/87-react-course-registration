/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css";
import { FaBookOpen } from 'react-icons/fa';

const Home = () => {
    const [allTitles, setAllTitles]=useState([]);
    useEffect(() => {
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setAllTitles(data));
    },[]);
    
console.log(allTitles);
    return (
        <div className='container mt-8'>
            <div className="home-container px-10 gap-5 flex justify-between">
                <div className="card-container grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allTitles.map((title) => (
                            <div key={title.id} className="card p-2">
                        <div className="card-img">
                            <img className='photo' src={title.cover} alt="" />
                        </div>
                        <h2 className='font-semibold mt-2'>{title.title}</h2>
                        <p className='mt-2'><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>
                        <div className="info mt-2">
                            <p>$ Price : {title.price}</p>
                            <div className='flex gap-2'>
                            <button className=''><FaBookOpen></FaBookOpen></button>
                            <p>Credit : {title.credit}hr</p>
                            </div>
                        </div>
                        <button className='bg-[#2F80ED] w-[232px] text-white mt-2'>Select</button>
                    </div>
                        ))
                    }
                </div>
                <div className="cart">
                    <h1>this is cart</h1>
                </div>
            </div>           
        </div>
    );
};

export default Home;