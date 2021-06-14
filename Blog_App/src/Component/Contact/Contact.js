import React from 'react';
import contact from '../../image/contact.jpg';
const Contact = () => {
    return (
        <>
             
                                {/* contact form  */}
                                <div className="container-fluid contact_container px-5 ">
                                    <div className="row align-items-center ">
                                        <div className=" contact_input col-12 col-sm-12 col-md-6 ">
                                                <h5 className='text-white'>Contact Us</h5>
                                                <p className="text-white mb-5">We love conversation, Let us talk!</p>
                                                <input type="text" placeholder="Enter full Name"/> <br/>
                                                <input type="text" placeholder="Enter Email" /> <br/>
                                                <textarea name="" id="" cols="
                                                60" placeholder="Message" rows="5"></textarea> <br/>
                                                <button className='sendBtn'> Send</button>
                                              
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6">
                                            <figure>
                                                <img src={contact} className='img-fluid rounded' alt="contact"/>
                                            </figure>
                                        </div>
                                    </div>
                                </div>

        </>
    );
};

export default Contact;
                                          