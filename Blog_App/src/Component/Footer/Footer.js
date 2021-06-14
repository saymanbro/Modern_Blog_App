
import React from 'react';
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
const Footer = () => {
    return (
        <>
         
         <div className="container-fluid py-5 footer_container">
                                                <div className="row py-5 px-5 ">
                                                    <div className="col-12  col-sm-4 col-md-4">

                                                     <h5 className='text-white'>Headquarter</h5>
                                                     <p className="text-muted">212 Barrington Court</p>
                                                    <p className="text-muted">New York, ABC 10001</p>
                                                        {/* icons */}
                                                        <FaFacebook className='social_icons'  /> <FaInstagram className='social_icons' /> <FaTwitter className='social_icons'  />
                                                    <p className="text-muted">Copyright © 2020 Company Name</p>
                                                    <p className="text-muted">Template by: PHPJabbers.com</p>
                                                   
                                                    </div>
                                                    <div className="col-12  col-sm-4 col-md-4">
                                                            <div className="mb-3">
                                                                <h5 className='text-white'>Contact Info</h5>
                                                             <p className="text-muted">+1 333 4040 5566</p>
                                                             <p className="text-muted">contact@company.com</p>
                                                            </div>
                                                            <h5 className='text-white'>Quick Link</h5>
                                                            <span>Home</span> <span>Blog</span> <span>About</span> <br/>
                                                            <span>Contact</span> <span>author</span>
                                                    </div>
                                                    <div className="col-12  col-sm-4 col-md-4">
                                                        <h5 className="text-white">NewsLatter Signup </h5>
                                                        <input type="text" placeholder='Enter Email' className="letterInput" /> <hr className="text-white" /> <br/>
                                                        <button className='footerBtn'>Send</button> <br/>
                                                        <small className='text-muted mt-5'>*Please note- We do not spam your email</small>
                                                    </div>
                                                </div>
                                            </div>
                                            
        </>
    );
};

export default Footer;