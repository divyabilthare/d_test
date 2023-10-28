import React from "react";
import './ContactStyles.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <br /><h1>Get In Touch</h1>
            <br />

            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="row">
                        <div className="col-xl-10 mx-auto">
                            <div className="card">
                                <div className="row gx-0">

                                    <div className="col-lg-6">
                                        <div className="map map-full rounded-top rounded-lg-start">
                                            <iframe src="https://maps.google.com/maps?q=Inurum Technologies%20tec&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                                style={{ width: "100%", height: "600px", border: 1 }}
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="p-10 p-md-11 p-lg-14">
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-location-pin-alt"></i> </div>
                                                </div>
                                                <div className="align-self-start justify-content-start">
                                                    <h5 className="mb-1">  <i class="fa-solid fa-location-dot"></i>Address</h5>
                                                    <address>Third Floor, Plot 388, PU4,Indore, India</address>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-phone-volume"></i> </div>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1"> <i class="fa-solid fa-phone"></i>Phone</h5>
                                                    <p>+91 797-433-4291<br className="d-none d-md-block" />+91 990-767-7712 </p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-envelope"></i> </div>
                                                </div>
                                                <div className="contact-info">
                                                    <h5 className="mb-1"> <i class="fa-solid fa-envelope"></i>E-mail</h5>
                                                    <p className="mb-0"><a href="mailto:inurumemail.com" className="link-body">info@inurum.com</a></p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <div>
                <h1>Drop Us A Line</h1><br />
                <p>Reach out to us from our contact form and we will get back to you shortly.</p><br />




                <form class="form-inline" action="/action_page.php">

                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" id="Name" placeholder="First Name*" name="Name" /><br />
                            </div>
                       
                            
                            <div class="col">
                                <input type="text" class="form-control" id="Last" placeholder="Last Name*" name="Last" /><br />
                            </div>
                     
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" id="Email" placeholder="Email*" name="Email" /><br />
                            </div>
                   

                            <div class="col">

                                <select class="form-control" id="Select Department" name="department" > <option value="">Select Department</option>

                                    <option value="Software Developer ">Software Developer</option>
                                    <option value="Flutter Developer">Flutter Developer</option>
                                    <option value="Andriod Developer">Andriod Developer</option>
                                    <option value="IOT">IOT</option>
                                    <option value="Web Developer">Web Developer</option>

                                </select>
                         


                            </div>
                        </div>
                    </div>


                </form>

                <div class="col-12">
                  <div class="form-floating mb-4">
                    <textarea id="form_message" name="message" class="form-control" placeholder="Your message"  required=""></textarea>
                    <label for="form_message">Message *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your messsage. </div>
                  </div>
                </div>
                 <div>
                <a href="index.html"><button className="button">Send Message</button></a>
                </div>

                <p class="text-muted"><strong>*</strong> These fields are required.</p>




            </div>

        </div>

    );
};

export default Contact;
