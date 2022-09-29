import React, { useEffect, useState } from 'react';
import Activity from '../Activities/Activity';
import Exercise from '../Exercises/Exercise';
import logo from '../Gym/logo.png'
import './Gym.css'

const Gym = () => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))

    }, [])


    return (
        <div className='gym-container'>
            <div >
                <nav className='header'>
                    <div>
                        <img src={logo} alt="" srcset="" height={100} width={100} />
                    </div>
                    <div>
                        YooGa
                    </div>
                </nav>

                <div className='exercise-container'>
                    {/* <h1>Exercise Length: {exercises.length}</h1> */}
                    {
                        exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} ></Exercise>)
                    }

                </div>

            </div>
            <div className='activity-container '>
                <Activity></Activity>
            </div>


        </div>
    );
};

export default Gym;