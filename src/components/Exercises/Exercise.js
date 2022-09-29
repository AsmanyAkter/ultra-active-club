import React from 'react';
import './Exercise.css'


const Exercise = (props) => {
    const { name, img, time } = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" srcset="" />
            <h3>Exercise Name: {name}</h3>
            <p>Time: {time} min</p>
            <button>Add to list</button>
        </div>
    );
};

export default Exercise;