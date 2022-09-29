import React from 'react';
import './Activity.css'
import person from './person.jpg'

const Activity = () => {
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
                    <button className='time-btn'>10 min</button>
                    <button className='time-btn'>20 min</button>
                    <button className='time-btn'>30 min</button>
                    <button className='time-btn'>40 min</button>
                    <button className='time-btn'>50 min</button>
                </div>
            </div>


            <div className='activity-details'>
                <h1>Activity Details</h1>
                <p>Exercise time: 0 Seconds</p>
                <p>Break Time: 0 Seconds</p>
            </div>

            <div className='activity-completed'>
                <button className='activity-completed-btn'>Activity Completed</button>
            </div>

        </div >

    );
};

export default Activity;