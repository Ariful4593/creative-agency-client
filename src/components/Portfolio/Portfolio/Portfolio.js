import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import img from '../../../images/portfolio.png';
import data from './PortfolioData';
import Fade from 'react-reveal/Fade';
import { useRouteMatch } from 'react-router-dom';

const Portfolio = () => {
    const match = useRouteMatch();
    console.log(match)
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
                                            <a href={x.liveLink} className="btn btn-danger mr-4" target="_blank">Live Link</a>
                                            <a href={x.gitLink} className="btn btn-danger mr-4" target="_blank">GitHub</a>
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