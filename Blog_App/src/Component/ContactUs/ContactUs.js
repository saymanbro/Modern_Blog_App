import React from 'react';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';
const ContactUs = () => {
    return (
        <>
                <div className="contactUs">
                    <div className="contact_text">
                        <h1 className="text-center mt-5">Contact Us</h1>
                        <p className=" py-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                            <Contact />
                            <Footer />
        </>
    );
};

export default ContactUs;