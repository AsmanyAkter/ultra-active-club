import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Activity from '../Activities/Activity';
import Exercise from '../Exercises/Exercise';
import Blogs from '../Blogs/Blogs';
import logo from '../Gym/logo.png'
import './Gym.css'

const Gym = () => {

    const [exercises, setExercises] = useState([]);
    const [summary, setSummary] = useState([]);


    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))

    }, [exercises]);

    useEffect(() => {
        const storedCard = getStoredCart();
        const savedCard = []

        for (const id in storedCard) {
            const addedActivity = exercises.find(exercise => exercise.id === id);
            if (addedActivity) {
                const quantity = storedCard[id];
                addedActivity.quantity = quantity;
                savedCard.push(addedActivity)
            }

        }
        setSummary(savedCard)


    }, [exercises]);



    const handleExerciseCalculation = (exercise) => {
        const newSummary = [...summary, exercise];
        setSummary(newSummary)
        addToDb(exercise.id)
    }


    return (

        <div className='gym-main' >


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
                        {
                            exercises.map(exercise =>
                                <Exercise
                                    key={exercise.id}
                                    exercise={exercise}
                                    handleExerciseCalculation={handleExerciseCalculation}
                                ></Exercise>)
                        }

                    </div>

                </div>
                <div className='activity-container '>

                    <Activity summary={summary} >

                    </Activity>
                </div>

            </div>

            <div>
                <Blogs></Blogs>
            </div>


        </div>
    );
};

export default Gym;