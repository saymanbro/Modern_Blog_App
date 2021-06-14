import React from 'react';
import circle1 from '../../image/circle1.jpg';
import circle2 from '../../image/circle2.jpg';
import Footer from '../Footer/Footer';
const About = () => {
    return (
        <>
             <div >
                 <h1 className="text-center my-5">About Us</h1>
                 <p className="text-center text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, aliquam.</p>

                 <div className="about_div_1  my-5">
                     <div className="row">
                         <div className="col-12 col-sm-8 col-md-8 px-5 py-5 align-items-center">
                             <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                              <small className='text-muted mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit hic recusandae nam aliquid dolorum est libero ducimus eum, suscipit vitae esse modi fugit quis enim nesciunt rerum consectetur ullam nulla autem. Sunt culpa minima magnam dolorem? Accusamus, maxime ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate in distinctio aliquid totam ipsa? Maiores obcaecati modi rerum et aliquid voluptates doloremque iste consectetur dicta ratione quasi expedita illum quam dignissimos cum ab, molestias earum at. Deleniti quam dicta culpa!</small>
                         </div>
                         <div className="col-12 col-sm-4 col-md-4">
                             <figure>
                                 <img src={circle1} alt="circule"  style={{borderRadius:'50%', width:"90%"}} className="img-fluid"/>
                             </figure>
                         </div>
                     </div>
                 </div>

                 <div className="about_div_2 my-5">
                     <div className="row align-items-center">
                         <div className="col-12 col-sm-4 col-md-4 order-1 order-md-0">
                             <figure>
                                 <img src={circle2} alt="circle2" style={{borderRadius:'50%', width:"90%"} }className="img-fluid "/>
                             </figure>
                         </div>
                         <div className="col-12 col-sm-8 col-md-8  px-5 py-5  order-0 order-md-1">
                             <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                             <small className='text-muted mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, praesentium tenetur nulla facilis perferendis labore necessitatibus totam quisquam maiores! Iusto, doloremque, possimus reiciendis sapiente voluptates beatae labore et quas fugit officia aspernatur in. Laborum, quibusdam! Corrupti accusamus debitis, voluptatem possimus tempore dicta facere voluptas molestiae voluptatibus quidem. Eaque aliquid tenetur fuga adipisci reprehenderit voluptas aperiam enim et asperiores doloribus impedit, voluptatem itaque exercitationem hic vitae nulla a illo sequi nemo beatae quis sapiente? Odit dicta blanditiis rerum assumenda a accusantium.</small>
                         </div>
                     </div>
                 </div>

             </div>
                            <Footer />
        </>
    );
};

export default About;