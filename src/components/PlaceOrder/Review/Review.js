import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App'
const Review = () => {
    const { handleSubmit } = useForm();
    const [inputData, setInputData] = useState({});
    const [loggedInUser] = useContext(UserContext)

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            const newName = { ...inputData }
            newName.name = e.target.value;
            setInputData(newName);
        }
        if (e.target.name === 'companyName') {
            const newName = { ...inputData }
            newName.companyName = e.target.value;
            setInputData(newName);
        }
        if (e.target.name === 'textArea') {
            const newName = { ...inputData }
            newName.textArea = e.target.value;

            setInputData(newName);
        }
    }
    const onSubmit = data => {
        fetch('https://frozen-retreat-55750.herokuapp.com/reviewOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: loggedInUser.name, designation: inputData.companyName, textArea: inputData.textArea, photo: loggedInUser.photo })
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log(inputData)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="form-group">
                <input type="name" className="form-control" name="name" placeholder="Yourname" onBlur={handleChange} />
            </div><br />

            <div className="form-group">
                <input type="text" className="form-control" name="companyName" placeholder="Company's name, Designation" onBlur={handleChange} />
            </div><br />
            <textarea className="form-control" name="textArea" onBlur={handleChange} rows="6" placeholder="Description"></textarea><br />
            <input type="submit" value="Send" className="btn text-white" style={{ backgroundColor: '#111430' }} />
        </form>
    );
};

export default Review;