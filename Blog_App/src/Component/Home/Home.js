import React from 'react';
import './Home.css';

import cardimg1 from '../../image/blogimg1.jpg'
import cardimg2 from '../../image/blogimg2.jpg'
import cardimg3 from '../../image/blogimg3.jpg';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom';



const Home = () => {
  
const history = useHistory();

  
    return (
        <>
            <div className="header_container ">
                <div className="header_section py-4 py-md-0">
                   <div className="header_text align-items-center"> 

                          <h1> Welcome To Modern <br /> <span style={{color:'cyan'}} >Blog App :) </span> </h1>
                          <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repudiandae impedit dolor blanditiis, consequuntur dolorem? </p>
                         <button className="blogBtn" onClick={()=> history.push('/blog')}>Read Blog</button>  

                   </div>
                </div>
            </div>

            <div className="about_container ">
                        <h1 className="mt-5" >About</h1>
                        <p className="mt-5 text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque dolore commodi quidem veritatis corrupti alias, porro, sit reiciendis atque illum aperiam ducimus necessitatibus veniam dignissimos earum possimus minima expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi natus obcaecati officia, praesentium blanditiis eveniet velit minus cupiditate odit. Lorem ipsum dolor sit amet. </p>
            </div>

                                {/* latest blog container */}

            <div className="container-fluid latest_blog_post py-5">           
                
                    <div className="container">
                    <h1 className=" text-center py-5">Latest Blog Post</h1>
         <div className="row text-center">
                    <div className="col-12 col-sm-12 col-md-4 ">
                  <div  className="card  border-light  text-center">
                    <img className="card-img-top" src={cardimg1} alt="Card cap" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="readBtn">Read More</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 ">
                    <div  className="card  border-light  text-center" >
                    <img className="card-img-top" src={cardimg2} alt="Card  cap" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="readBtn">Read More</button>
                    </div>
                    </div>
                  </div>
                    <div className="col-12 col-sm-12 col-md-4 ">
                     <div  className="card border-light   text-center" >
                    <img className="card-img-top" src={cardimg3} alt="Card cap" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="readBtn">Read More</button>
                    </div>
                    </div>
                 
         </div>
     </div>
                    </div>
            </div>

                                    <Contact />
                                    <Footer />

        </>
    );
};

export default Home;