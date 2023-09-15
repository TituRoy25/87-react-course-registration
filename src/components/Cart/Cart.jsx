/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selectedCourses, remaining, totalCredit}) => {
     console.log(selectedCourses);
    let count = 1;
    return (
        <div>
            <h5 className='mb-5 font-bold text-[#2F80ED]'>Credit Hour Remaining {remaining} hr</h5>
            <hr />
            <h1 className='my-5 font-bold'>Course Name</h1>
            {
                selectedCourses.map((course) => (
                <ol key={course.id}>{count++} {course.title}</ol>
                ))
            }
            <hr />
            <h5 className='mt-5'>Total Credit Hour : {totalCredit}</h5>
        </div>
    );
};

export default Cart;