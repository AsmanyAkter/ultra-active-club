import React from 'react';
import Activity from '../Activities/Activity';
import Exercise from '../Exercises/Exercise';
import './Gym.css'

const Gym = () => {
    return (
        <div className='gym-container'>
            <div className='exercise-container'>
                <Exercise></Exercise>
            </div>
            <div className='activity-container '>
                <Activity></Activity>
            </div>


        </div>
    );
};

export default Gym;