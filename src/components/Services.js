import React from "react";
import './ServiceStyle.css';
import exp1 from '../image/web.png';
import exp2 from '../image/Iot.jpg';
import exp3 from '../image/flu.jpg';
import exp4 from '../image/androapp.jpg';


const Services = () => {
   
    return (
        <div id="banner-area">
            <div className="background-image">

            </div>

            <div>
                <div><br/>
                    <h3>Explore Our Services</h3>
                </div>


                <div className="HomeThree-container">
                    <div class="grid mb-16">
                        <div class="row isotope gy-6 mt-n18">
                            <div class="item col-md-6 col-xl-6">
                                <div className="ima-container">
                                    <img src={exp1} alt="Inurum " class="img-thumbnail "  />
                                </div>
                                <div className="box-inner ">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                 <div class="box-title" >
                                        <h4>Web developement</h4>
                                    </div>
                                </div>
                                </div>

                            </div>

                            <div class="item col-md-6 col-xl-6">
                                <div className="ima-container">
                                    <img src={exp2} alt="Inurum "  class="img-thumbnail" />
                                </div>
                                <div className="box-inner ">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                 <div class="box-title" >
                                        <h4>IOT developement</h4>
                                    </div>
                                </div>
                                </div>
                             


                            </div>

                            <div class="item col-md-6 col-xl-6">
                                <div className="ima-container">
                                    <img src={exp3} alt="Inurum " class="img-thumbnail equalImage" />
                                    
                                </div>
                                <div className="box-inner ">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">

                                 <div class="box-title" >
                                        <h4>Flutter APP developement</h4>
                                    </div>
                                </div>
                                </div>


                            </div>

                            <div class="item col-md-6 col-xl-6">
                                <div className="ima-container">
                                    <img src={exp4} alt="Inurum " class="img-thumbnail equalImage"/>
                                </div>
                                <div className="box-inner ">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                <div class="box-title"> 
                                        <h4>Andriod developement</h4>
                                    </div>
                                </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    );
};

export default Services;
