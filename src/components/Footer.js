
import React from 'react';
import './FooterStyles.css';
import inurumLogo from '../image/inurum logo.jpeg';

const Footer = () => {
    const logoStyle = {
        width: '50px', // Adjust the width as needed
        height: 'auto',// To maintain the aspect ratio
    };
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h5>Get to Know Us</h5>
                        <div>

                            <a href="/">
                                <img src={inurumLogo} alt="Inurum Logo" style={logoStyle} />
                            </a>
                            <p>&copy; 2023 Inurum Technologies</p>
                            <p>Powered by Inurum Technologies</p>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-6">
                        <h5>Get in Touch</h5>
                        <p>
                            Third Floor, Plot 388, PU4,
                            <br />
                            Indore, India
                        </p>
                        <p>
                            <a href="mailto:info@inurum.com​">info@inurum.com​</a>
                            <br />
                            <a href="tel:+917974334291">+91 7974334291</a>
                        </p>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h5>Learn More</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Terms And Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h5>Useful Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Android App Development</a></li>
                            <li><a href="#">Ios App Developement</a></li>
                            <li><a href="#">Flutter Developement</a></li>


                        </ul>
                    </div>
                </div>
            </div>

            <div className="social-icons">
                <a href="#" className="social-icon" aria-hidden="true"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-icon" aria-hidden="true"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon" aria-hidden="true"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon" aria-hidden="true"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-icon" aria-hidden="true"><i className="fab fa-youtube"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
