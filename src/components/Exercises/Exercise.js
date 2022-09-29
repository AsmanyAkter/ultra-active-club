import React from 'react';
import './Exercise.css'


const Exercise = (props) => {
    const { name, img, time, id } = props.exercise;
    const { handleExerciseCalculation } = props

    return (
        <div className='exercise'>
            <img src={img} alt="" srcset="" />
            <h3>Exercise Name: {name}</h3>
            <p>Time: {time} min</p>
            <button onClick={() => handleExerciseCalculation(props.exercise)} id={id} className='exercise-btn'>Add to list</button>
        </div>
    );
};

export default Exercise;