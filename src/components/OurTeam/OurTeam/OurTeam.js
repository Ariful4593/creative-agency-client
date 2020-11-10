import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import team1 from '../../../images/team1.png';
import team2 from '../../../images/team2.png';
import team3 from '../../../images/team3.png';
const team = [
    { id: 1, img: team1, title: 'John Doe', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non labore totam! Ipsum, laudantium nemo?' },
    { id: 2, img: team2, title: 'John Doe', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non labore totam! Ipsum, laudantium nemo?' },
    { id: 3, img: team3, title: 'John Doe', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non labore totam! Ipsum, laudantium nemo?' },
]
const OurTeam = () => {
    return (
        <div className="container mw-100">
            <Navbar></Navbar>
            <div className="row">
                {
                    team.map(teamData => {
                        return (
                            <div className="card col-12 col-sm-6 col-md-6 col-lg-4 border-0 mt-4" key={teamData.id}>
                                <div className="card-body border">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-m-4">
                                            <img style={{ width: '90px', borderRadius: '50px' }} src={teamData.img} alt="" />
                                        </div>
                                        <div className="col-m-8 p-4">
                                            <h5 className="card-title mb-0">{teamData.title}</h5>
                                            <small className="font-weight-bold">CEO.Manpol</small>
                                        </div>
                                    </div>
                                    <p className="card-text">{teamData.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="row">
                <div className="col-md-8">
                    <form action="http://localhost:3000/addProduct" method="post">
                        <input type="text" name="name" placeholder="Product Name" id="" /><br />
                        <input type="text" name="price" placeholder="Product Price" id="" /><br />
                        <input type="text" name="quantity" placeholder="Product Quantity" id="" /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;