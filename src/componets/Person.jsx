import React from 'react'
import { useState } from 'react';
function Person() {
    const [num, setCout] = useState(0);
    function inc() {
        setCout(num + 1);
    }
    function desc() {
        if (setCout == 0) {
            return;

        }
        else {
            setCout(num - 1);
        }
    }

    return (
        <div className='container w-50 mt-4'>
           <h2 className=' text-center'> Increment and Decremente Task</h2>
            <div className='row text-center mt-4'>
                <div className='col'>
                    <h4>Increment</h4>
                    <button onClick={inc} className='btn btn-primary'>+</button>
                </div>
                <div className='col'>
                    <h1>{num}</h1>
                </div>
                <div className='col'>
                    <h4>Decrement</h4>
                    <button onClick={desc} className='btn btn-primary'>-</button>
                </div>
            </div>
        </div>
    );
}
export default Person;