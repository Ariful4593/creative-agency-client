import React from 'react';
import './UserForm.css'
const UserForm = () => {
    return (
        <section className="footer">
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <h2 style={{color: '#2D2D2D'}}>Let us handle your <br />Project, professionally.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam voluptas ex aliquam neque nulla tenetur.</p>
                </div>
                <div className="col-sm-6 col-md-6">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email" /><br/>

                            <input type="name" className="form-control" id="name" aria-describedby="name" placeholder="Your name / Company's name" /><br/>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your message" rows="6"></textarea>
                        </div>
                        <input type="submit" className="btn" style={{color: 'white', background: '#111430', width: '100px'}} value="Send"/>
                    </form>
                </div>
            </div>
            <small className="d-flex justify-content-center mt-5">copyright Ariful Islam - 2020</small>
        </section>
    );
};

export default UserForm;