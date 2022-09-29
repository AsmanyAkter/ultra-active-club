import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div >
            <h1 className='header-text'>React Basics Question/Answer</h1>
            <div className='blogs'>
                <div className='box'>
                    <h4>Q1: How does reacts works?</h4>
                    <p>React.js is one of the most talked about JavaScript web frameworks in years. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>

                </div>
                <div className='box'>
                    <h4>Q2: Difference between Props and State</h4>
                    <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. but Props are read-only components.
                        The change in state can happen as a response to user action or system event.  A state must be kept as simple as possible. It represents the component's local state or information. Props is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. </p>
                </div>
                <div className='box'>
                    <h4>O3: Use case of useState</h4>
                    <p>
                        The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                </div>
            </div>

            <br />
        </div>
    );
};

export default Blogs;