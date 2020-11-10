import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { handleSubmit } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('description', info.description)

        fetch('https://frozen-retreat-55750.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        alert("Service added")
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" name="title" placeholder="Enter title" onBlur={handleBlur} />
                </div>
                <input type="file" name="" placeholder="Upload Image" id="" onBlur={handleFileChange} /><br />
                <textarea className="form-control w-100" name="description" rows="6" placeholder="Description" onBlur={handleBlur} ></textarea><br /><br />
                <input type="submit" value="Submit" />

            </form><br />
        </div>

    );
};

export default AddService;