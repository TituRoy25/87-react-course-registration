/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selectedCourses}) => {
     console.log(selectedCourses);
    let count=1;
    return (
        <div>
            <h1 className='mb-2'>Course Name</h1>
            {
                selectedCourses.map((course) => (<ol key={course.id}>{count++} {course.title}</ol>))
            }
        </div>
    );
};

export default Cart;