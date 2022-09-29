// import React from 'react';
import './Activity.css'
import person from './person.jpg'
import React, { useEffect, useState } from "react";



const Activity = (props) => {


    const [time, setTime] = useState([]);


    const { summary } = props;

    let total = 0;
    let quantity = 0;
    let updatedTime = 0;

    for (const exercise of summary) {
        quantity = quantity + exercise.quantity;
        total = total + exercise.time * exercise.quantity;
    }

    function updateLocalStorage(id) {
        let testObject = { time: id };
        localStorage.setItem('testObject', JSON.stringify(testObject));
        let retrievedObject = localStorage.getItem('testObject');
        updatedTime = JSON.parse(retrievedObject).time;
        setTime(updatedTime)
    }


    return (
        <div className='activity'>
            <div className='person'>
                <div >
                    <img className='person-img' src={person} alt="" srcset="" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <h3>Name: Chandler Bing </h3>
                    <p>New York City </p>

                </div>
            </div>
            <div className='info'>
                <div style={{ marginRight: 15 }}>
                    <h3>Weight: 75KG</h3>
                </div>
                <div style={{ marginRight: 15 }}>
                    <h3>height: 6.1</h3>
                </div>
                <div>
                    <h3>Age: 25</h3>
                </div>
            </div>

            <div className='add-break'>
                <h1>Add A Break</h1>
                <div>
                    <button onClick={() => updateLocalStorage(10)} className='time-btn'>10 min</button>
                    <button onClick={() => updateLocalStorage(20)} className='time-btn'>20 min</button>
                    <button onClick={() => updateLocalStorage(30)} className='time-btn'>30 min</button>
                    <button onClick={() => updateLocalStorage(40)} className='time-btn'>40 min</button>
                    <button onClick={() => updateLocalStorage(50)} className='time-btn'>50 min</button>
                </div>
            </div>


            <div className='activity-details'>
                <h1>Activity Details</h1>
                <p>Exercise time: {total} Min</p>
                <p>Break Time: {time} Min</p>
            </div>

            <div id="activity-completed" className='activity-completed'>
                <button className='activity-completed-btn'> Activity Completed</button>

            </div>

        </div >

    );
};

export default Activity;