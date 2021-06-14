import React from 'react';
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import team1 from '../../image/team1.jpg'
import team2 from '../../image/team2.jpg'
import team3 from '../../image/team3.jpg'
import team4 from '../../image/tema4.jpg';
import Footer from '../../Component/Footer/Footer'
const Author = () => {
    return (
        <>
            <div className="author_section">
                <h1 className="my-5 text-center">Team</h1>    
                <p className='mb-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className=" team_section   ">
                       <div className="container-fluid px-5">
                       <div className="row">

                            <div className="col-12 col-sm-12 col-md-3">
                        <div className="card mb-3">
                                <img className="card-img-top" src={team1} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Joe Jhon</h5>
                                    <p>CEO</p>
                                    <hr />
                                    <FaFacebook className='team_icons mr-3'  /> <FaInstagram className='team_icons mr-3' /> <FaTwitter className='team_icons mr-3'  />
                                </div>
                        </div>    

                            </div>
                            <div className="col-12 col-sm-12 col-md-3">
                            <div className="card mb-3">
                                <img className="card-img-top" src={team2} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Jane Doe</h5>
                                    <p>CTO</p>
                                    <hr />
                                    <FaFacebook className='team_icons mr-3'  /> <FaInstagram className='team_icons mr-3' /> <FaTwitter className='team_icons mr-3'  />
                                </div>
                        </div> 

                            </div>
                            <div className="col-12 col-sm-12 col-md-3">
                            <div className="card mb-3">
                                <img className="card-img-top" src={team3} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Beky Fox</h5>
                                    <p>Marketing Expert</p>
                                    <hr />
                                    <FaFacebook className='team_icons mr-3'  /> <FaInstagram className='team_icons mr-3' /> <FaTwitter className='team_icons mr-3'  />
                                </div>
                        </div> 

                            </div>
                            <div className="col-12 col-sm-12 col-md-3">
                            <div className="card mb-3">
                                <img className="card-img-top" src={team4} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Daniel Smith</h5>
                                    <p>Customer Support</p>
                                    <hr />
                                    <FaFacebook className='team_icons mr-3'  /> <FaInstagram className='team_icons mr-3' /> <FaTwitter className='team_icons mr-3'  />
                                </div>
                        </div> 
                            </div>

                            </div>
                       </div>
                </div>
            </div> 

                                    <Footer />
        </>
    );
};

export default Author;