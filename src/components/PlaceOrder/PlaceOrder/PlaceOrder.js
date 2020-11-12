import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
const PlaceOrder = () => {
    const { handleSubmit } = useForm();
    const [inputData, setInputData] = useState({});
    const [file, setFile] = useState(null)
    const onSubmit = data => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', inputData.name)
        formData.append('email', inputData.email)
        formData.append('service', inputData.graphicDesign)
        formData.append('description', inputData.textArea)
        formData.append('price', inputData.price)
        formData.append('status', 'Pending')

        fetch('https://frozen-retreat-55750.herokuapp.com/order', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        alert("Your Order Submitted")
    };


    const handleChange = (e) => {
        if (e.target.name === 'name') {
            const newName = { ...inputData }
            newName.name = e.target.value;
            setInputData(newName);
        }
        if (e.target.name === 'email') {
            const newName = { ...inputData }
            newName.email = e.target.value;
            setInputData(newName);
        }
        if (e.target.name === 'graphicDegin') {
            const newName = { ...inputData }
            newName.graphicDesign = e.target.value;
            setInputData(newName);
        }
        if (e.target.name === 'textArea') {
            const newName = { ...inputData }
            newName.textArea = e.target.value;
            setInputData(newName);
        }
        if (e.target.name === 'price') {
            const newName = { ...inputData }
            newName.price = e.target.value;
            setInputData(newName);
        }
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input type="name" className="form-control" name="name" placeholder="Yourname" onBlur={handleChange} />
            </div><br />
            <div className="form-group">
                <input type="email" className="form-control" name="email" placeholder="Your email address" onBlur={handleChange} />
            </div><br />
            <div className="form-group">
                <input type="text" className="form-control" name="graphicDegin" placeholder="Graphic Design" onBlur={handleChange} />
            </div><br />
            <textarea className="form-control" name="textArea" rows="6" onBlur={handleChange} ></textarea>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <input type="text" className="form-control" name="price" placeholder="Price" onBlur={handleChange} />
                </div>
                <div className="col-md-6">
                    <input type="file" name="" placeholder="Upload Image" id="" onBlur={handleFileChange} />
                </div>
            </div><br />
            <input type="submit" value="Send" className="btn text-white" style={{ backgroundColor: '#111430' }} />
        </form>
    );
};

export default PlaceOrder;