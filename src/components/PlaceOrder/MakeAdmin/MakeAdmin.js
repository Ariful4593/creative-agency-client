import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const {  handleSubmit} = useForm();
    const [inputData, setInputData] = useState({});
    const onSubmit = (data) =>{
        fetch('https://frozen-retreat-55750.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({email: inputData.email})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        console.log(data)
    }
    const handleChange = (e) =>{
        if (e.target.name === 'email') {
            const newName = { ...inputData }
            newName.email = e.target.value;
            setInputData(newName);
        }
    }
    console.log(inputData)
    return (
        <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" className="form-control" id="email" onBlur={handleChange} name="email" placeholder="jon@gmail.com"/>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    );
};

export default MakeAdmin;