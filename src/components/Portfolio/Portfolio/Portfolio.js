import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import img from '../../../images/portfolio.png';
import data from './PortfolioData';
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
    return (
        <div className="container mw-100">
            <Navbar></Navbar>
            <div className="row">
                {
                    data.map(x => {
                        return (
                            <div className="col-md-4 mb-2" key={x.id}>
                                
                                    <div className="card" >
                                    <Fade left>
                                        <img className="card-img-top" src={x.img} alt="Card cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{x.title}</h5>
                                            <p className="card-text">{x.description}</p>
                                            <a href={x.liveLink} className="btn btn-danger mr-4" rel="noreferrer">Live Link</a>
                                            <a href={x.gitLink} className="btn btn-danger mr-4" rel="noreferrer">GitHub</a>
                                        </div>
                                        </Fade>
                                    </div>
                                

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Portfolio;