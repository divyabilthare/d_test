
import React from "react";
import './AboutStyles.css';
import PageFour from '../image/about2.jpg';
import PageFour1 from '../image/brand.jpeg';


const About = () => {
    const logoStyle = {
        width: '500px',
        height: 'auto',
    };
    return (
        <div className="about-container  mt-5">
            <h1>
                About Us
            </h1>
            <br />
            <h2>Hello !  This is InuRum</h2>
            <p>A company turning ideas into beautiful things.</p>
            <p>Inurum's purpose is to utilize the latest developement of technlogies within the Internet of Things throuugh app developement and the services industry to create powerful, meaningful solutions for companies,communites and individuals globally.tomorrow's necessary solutions</p>
            <br />


            <div className="image-container">
            </div>
            
            <div className="container1 mt-5">
                <div className="row">
                    <div className="col-md-6">
                        {/* Left Side - Content */}
                        <div className="left-content">
                            <br />
                           
                            <h1>Who We Are ?</h1>
                            <p>
                                Launched in 2020, Inurum has continually focused on true innovation in IoT services through the creation of solutions and products for an adaptive global business marketplace.Our diverse
                                list of clientele ,ranging across a multitude of industries,has grown to recognize and trust Inurum in partnering in all aspects if Smart Technology capabilties from
                                designing to  prototyping,development and carfully launching their ideas.With each client,  our goal is to improve necessary succes-focused metics,
                                assist in building revenue and commericial growth,expanding possibilties for customers service and experience, and create immersion  that strengthens the foundations
                                of brand positions.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Right Side - Image */}
                        <div className="right-content">
                            <br />
                            <img src={PageFour} alt="Inurum Logo" class="rounded float-left" class1="img-fluid"  style={logoStyle} />

                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container2 mt-5">
                <div className="row">
                    <div className="col-md-6">
                        {/* Left Side - Content */}
                        <div className="left">
                            <br />
                            <img src={PageFour1} alt="Inurum Logo" class="rounded float-left" class1="img-fluid"  style={logoStyle} />
                           
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Right Side - Image */}
                        <div className="right">
                            <br />
                            <h1>Inurum Brand Leadership</h1>
                            <p>
                               Combining technical knowledge with ability and progressive business acumen and leadership, the head team at Inurum has transformed a visionary startup into a truly unique,result focused company that pours entrepreneurial spirit into the field of IoT developement and deployment. Our leadership is passionate about changing the landscape of IoT corporate client services. 
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1>Our Philosophy</h1>
                
                <p>What makes Inurum stand out from other IOT companies or Internet of Things consulting services? Our track record  of developing and deploying excellent,
                    customized solotuions for our clients and the combined fervor and ability of our leadership team echoed in Inueum's mission rings out truer than the competition. A mission defined by strong focus on solutions designed individually for each client with the highest possible quality,instinctive design and progressive innovation that can only be overshadowed by our unwavering commitment to provinding tthe best available client service in the business,from beginning to end . 
                </p>

                <br/>

                <div className="About-container mt-5">
                    <div class="grid mb-16">
                        <div class="row isotope gy-6 mt-n18">
                            <div class="item col-md-6 col-xl-3">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                    <div class="card-body">
                                         <blockquote class="icon mb-0"> 
                                         <div class="blockquote-details">
                                                <div class="info ps-0">
                                                    
                                                    <h3>Focus On Clients</h3>
                                                    <p class="mb-0">Every project begins with a complete understanding of the client's goals,challenges,and customer needs.Inurum identifies pinpoints and creates technological solotuions that makes them disappear.</p>
                                                </div>
                                            </div>
                                         </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div class="item col-md-6 col-xl-3">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                    <div class="card-body">
                                        <blockquote class="icon mb-0">
                                         <div class="blockquote-details">
                                                <div class="info ps-0">
                                            
                                                    <h3>Exceptional </h3>
                                                    <p class="mb-0">Inurum imbues the entire desing and developement process with quality control pratices that culminate int the best possible results.every Internet of Things software development project is constructed with cleand and current coding standards.</p>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div class="item col-md-6 col-xl-3">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                    <div class="card-body">
                                        <blockquote class="icon mb-0">
                                         <div class="blockquote-details">
                                                <div class="info ps-0">
                                                    
                                                    <h3>Instinctive Design</h3>
                                                    <p class="mb-0">As complex as an IOT services solution may be , Inurum makes sure that the end-user can confidently use it as intended .To this end,every design has built in adaptability and scalability without the possibility of compromising security.</p>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div class="item col-md-6 col-xl-3">
                                <div class="card shadow-lg card-border-bottom border-soft-primary">
                                    <div class="card-body">
                                        <blockquote class="icon mb-0">
                                         <div class="blockquote-details">
                                                <div class="info ps-0">
                                            
                                                    <h3>Progressive Innovation</h3>
                                                    <p class="mb-0">Each year, the pace of technological growth speeds up exponentially.Inurum solutions serve our client's needs today,while monitoring and factoring in future advancements that will potentially have influencenon the industry and the human element inevitably affected by all systems.</p>
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


        </div>
    );
};
export default About;