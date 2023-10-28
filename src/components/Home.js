import React from 'react';
import './HomeStyles.css';
import pageone from '../image/img.webp';
import homeone from '../image/ab1.jpg.webp';
import one from '../image/requirement.jpg';
import two from '../image/design.jpg';
import three from '../image/developement.jpg';
import four from '../image/social.jpg';
import five from '../image/architectur.jpg';
import six from '../image/help.jpg';
import abc from '../image/android.jpg';
import abcd from '../image/apple.png';
import a from '../image/transparent.jpg';
import ab from '../image/aws.jpg';
import customer from '../image/customer.jpg';
import founder from '../image/founder.png';



const ContentWithImage = () => {
    const logoStyle = {
        width: '500px',
        height: 'auto',
    };
    const logoSt = {
        width: '100px',
        height: 'auto',
    };

   
    return (
        <div>
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <h1 className="text-center text-lg-start">Top Web and App Development Service Provider in India</h1>
                <p className="paragraph">
                  Experience the services of the best web and mobile app development company. We are focused on quality and fulfillment of business needs. We provide customized development services across the globe.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <img src={pageone} alt="Inurum Logo" className="rounded float-left img-fluid" style={logoStyle} />
              </div>
            </div>
          </div>
        </div>
      
        <div className="container1  p-5 ">
          <div className="row">
            <div className="col-md-6">
              <div className="right">
                <img src={homeone} alt="inurum" className="rounded float-left img-fluid" style={logoStyle} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left">
                <h1>High-performance mobile and web app development services</h1>
                <p>
                  Inurum is a world-renowned web development company in India that is extensively preferred by companies for various development needs. We incorporate unique and distinct features and methods to provide exceptional services and solutions. Our expert team of developers having years of extensive experience in different domains contributes towards the best development services.
                </p>
              </div>
            </div>
          </div>
        </div>

       

             
            <div className="HomeTwo-container mt-5 ">
                <h1>Mission and Values</h1>
                <p>We have more then 8 years experience in Hardware and Mobile Industry </p>
                <p> and provide you end to end products and our mission and values drive</p>
                <p> our people and impact our customers and communities.</p>
                
            </div>
            <section class="wrapper bg-light">



                <div className="HomeThree-container mt-5 ">
                    <div class="grid mb-16">
                        <div class="row isotope gy-6 mt-n18">
                            <div class="item col-md-6 col-xl-4">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                    <div class="card-body">
                                        <blockquote class="icon mb-0">
                                            <img src={one} alt="Inurum" class="rounded float-left" class1="img-fluid" width="90px" />
                                            <div class="blockquote-details">
                                                <div class="info ps-0">
                                                    <h5 class="mb-1">Requirement</h5>
                                                    <p class="mb-0">We follow the first and foremost priority of gathering requirements, resources, and information to begin our project</p>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div class="item col-md-6 col-xl-4">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                    <div class="card-body">
                                        <blockquote class="icon mb-0">
                                            <img src={two} alt="Inurum" class="rounded float-left" class1="img-fluid" style={logoSt} />
                                            <div class="blockquote-details">
                                                <div class="info ps-0">
                                                    <h5 class="mb-1">Design</h5>
                                                    <p class="mb-0">After requirement gathering , you will get your prototype, which will be sent ahead for the development process for the product.</p>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div class="item col-md-6 col-xl-4">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                    <div class="card-body">
                                        <blockquote class="icon mb-0">
                                             <img src={three} alt="Inurum" class="rounded float-left" class1="img-fluid" width="55px"/>

                                            <div class="blockquote-details">
                                                <div class="info ps-0">
                                                    <h5 class="mb-1">Developement</h5>
                                                    <p class="mb-0">Development is a crucial part of the product, we follow design and patterns for creating quality development.</p>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>

                                </div>

                            </div>
                        </div>
                        


                        <div class="grid mb-16 ">
                            <div class="row isotope gy-6 mt-n18">
                                <div class="item col-md-6 col-xl-4">
                                    <div class="card shadow-lg card-border-bottom border-soft-primary">
                                        <div class="card-body">
                                            <blockquote class="icon mb-0">
                                                <img src={four} alt="Inurum" class="rounded float-left" class1="img-fluid" style={logoSt} />

                                                <div class="blockquote-details">
                                                    <div class="info ps-0">
                                                        <h5 class="mb-1">Social</h5>
                                                        <p class="mb-0">Discover new ideas and trends. Connect with existing and new audiences in deeper ways. Build, craft and enhance your brand.</p>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>

                                <div class="item col-md-6 col-xl-4">
                                    <div class="card shadow-lg card-border-bottom border-soft-primary">
                                        <div class="card-body">
                                            <blockquote class="icon mb-0">
                                                <img src={five} alt="Inurum" class="rounded float-left" class1="img-fluid" style={logoSt} />

                                                <div class="blockquote-details">
                                                    <div class="info ps-0">
                                                        <h5 class="mb-1">Architecture</h5>
                                                        <p class="mb-0">Marketing Software architecture and design includes several contributory factors such as Business strategy, quality attributes, human dynamics, design, and IT environment.</p>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div class="item col-md-6 col-xl-4">
                                    <div class="card shadow-lg card-border-bottom border-soft-primary">
                                        <div class="card-body">
                                            <blockquote class="icon mb-0">
                                                <img src={six} alt="Inurum" class="rounded float-left" class1="img-fluid" width="110px" />
                                                <div class="blockquote-details">
                                                    <div class="info ps-0">
                                                        <h5 class="mb-1">Help & Support</h5>
                                                        <p class="mb-0">Have questions or need to report an issue with a Inurum product or service? We've got you covered. Email or whatsapp us on +917974334291 or send us mail info@inurum.com</p>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
           

            <div className="Homefour-container mt-5 p-5" >
                
                <h1>Expertise</h1>
                
                
                <p>We believe to delivery quality and services</p><br/>
                
                {/* <div className="row">
                    <div className="col-md-3">
                         <img src={abc} alt="Inurum Logo"  />
                    </div>

                    <div className="col-md-3">
                         <img src={abcd} alt="Inurum Logo"  width="50%"/>
                     </div>
                    
                    <div className="col-md-3">
                        <img src={a} alt="Inurum Logo" width="45%"  />
                    </div>

                    <div className="col-md-3">
                        <img src={ab} alt="Inurum Logo"  />
                    </div>
                    
                </div>
            </div> */}


<div className="row">
    <div className="col-md-3">
        <div className="logo-container">
            <img src={abc} alt="Inurum Logo" className="img-fluid" />
        </div>
    </div>
    <div className="col-md-3">
        <div className="logo-container">
            <img src={abcd} alt="Inurum Logo" className="img-fluid" />
        </div>
    </div>
    <div className="col-md-3">
        <div className="logo-container">
            <img src={a} alt="Inurum Logo" className="img-fluid" />
        </div>
    </div>
    <div className="col-md-3">
        <div className="logo-container">
            <img src={ab} alt="Inurum Logo" className="img-fluid" />
        </div>
    </div>
</div>

</div>

            
        <div className="Homefive-container mt-5 p-5">
            
            <h1>"Amazing Designs and Quality Work!" </h1>
            <p className="paragraph">Inurum and Shubham programmed an android app for me. The final result was fine. I m happy with it. I will work with Shubham again. Thank you for your good work, Shubham.</p><br/>
            <img src={customer} alt="Inurum Logo"/> 
              <div classNaame="elementor-testimonail-details">
             <div className="elementor-testimonial-name">NB IOT proof of concept with Quecktel BC95 or similar</div><br/>
             <div className="elementor-testimonial-job">CEO, ACME INC.</div>
             </div>

            
        </div>

            <div className="Homesix-container mt-5 p-5">
            <div> <h1>About Team </h1></div>
            <div>The team of innovators who are changing technology world, care, and commerce as we know it.</div><br/>
           <div className="founder"><a href="https://www.linkedin.com/in/shubham-jain-677a902b/"><img   src={founder} alt="Inurum"/></a></div> 
           <h3><a href="https://www.linkedin.com/in/shubham-jain-677a902b/">SHUBHAM JAIN</a></h3>
            <p class="elementor-image-box-description">Founder & CEO</p>
            
            </div>

        

            <div className="lastcontainer p-5">

            <h3 class="elementor-heading-title elementor-size-default">Would you like to start a project with us?</h3>
            <p>"Just share us your project requirement on the email infor@inurum.com or you can call us or whatsapp us on the given number. We will give you reply within 2 hours"</p>
            </div>
        
        
        
        </div>
        
        
        
    );
};

export default ContentWithImage;

