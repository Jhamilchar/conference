import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render(){
        return (
          <footer className="footer-area" id="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 row">
                  <div className="single-footer-widget">
                    <h3>Venue Location</h3>
                    <span>
                      <i className="icofont-calendar"></i> 23 September, 2023
                    </span>

                    <p className="location">
                      <i className="icofont-google-map"></i>
                      Lima, Perú
                    </p>

                    {/* <Link to="/contact" className="contact-authority">
                      <i className="icofont-phone"></i> Contact Our Authority
                    </Link> */}
                  </div>
                  <div className="single-footer-widget mt-5">
                    <h3>Info Sponsor</h3>
                    <a href="#pdf/">Read More {'>'} </a>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-footer-widget">
                    <h3>Social Connection</h3>
                    <p>
                      Don't miss Link thing! Receive daily news You should
                      connect social area for Any Proper Updates Anytime.
                    </p>

                    <ul className="social-links">
                      <li>
                        <a
                          href="https://www.facebook.com/awsugperu"
                          className="facebook"
                          target="blank"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/AWSPeru"
                          className="twitter"
                          target="blank"
                        >
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/awsusergroupperu/"
                          className="linkedin"
                          target="blank"
                        >
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/awsperu/"
                          className="instagram"
                          target="blank"
                        >
                          <i className="icofont-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitch.tv/awsugperu"
                          className="twitch"
                          target="blank"
                          style={{ background: "#6441a5" }}
                        >
                          <i className="icofont-twitch"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="copyright-area">
                    <div className="logo">
                      <Link to="/">
                        <img
                          style={{ width: "230px", marginBottom: "2rem" }}
                          src={require("../../assets/images/logo.png")}
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <p>Modified by AWS UG Peru © 2023. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;