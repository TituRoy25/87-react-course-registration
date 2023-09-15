/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css";
import { FaBookOpen } from 'react-icons/fa';

const Home = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setAllCourses(data));
    },[]);

    const handleSelectCourse = (course) => {
        const isExist = selectedCourses.find((item) => item.id == course.id);
        let count = course.credit;

        if (isExist) {
            return alert("Already Registration");
        } else{
            selectedCourses.forEach((item) => {
                count = count + item.credit;
            })
            const totalRemaining = 20-count;
            setTotalCost(count);
            setRemaining(totalRemaining);

            setSelectedCourses([...selectedCourses, course]);
        }      
    }
    
//console.log(selectedCourses);
    return (
        <div className='container mt-8'>
            <div className="home-container px-10 gap-5 flex justify-center">
                <div className="card-container grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allCourses.map((course) => (
                        <div key={course.id} className="card p-2">
                            <div className="card-img">
                                <img className='photo' src={course.cover} alt="" />
                            </div>
                            <h2 className='font-semibold mt-2'>{course.title}</h2>
                            <p className='mt-2'><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>
                            <div className="info mt-2">
                                <p>$ Price : {course.price}</p>
                                <div className='flex gap-2'>
                                    <button className=''><FaBookOpen></FaBookOpen></button>
                                    <p>Credit : {course.credit}hr</p>
                                </div>
                            </div>
                            <button onClick={()=>handleSelectCourse(course)} className='bg-[#2F80ED] w-[240px] h-8 text-white font-bold mt-2'>Select</button>
                        </div>
                        ))
                    }
                </div>
                <div className="cart">
                    <Cart selectedCourses={selectedCourses} remaining={remaining} totalCost={totalCost}></Cart>
                </div>
            </div>           
        </div>
    );
};

export default Home;