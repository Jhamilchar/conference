import React from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';
import OwlCarousel from 'react-owl-carousel3';
import "../../assets/css/conf-personal.css"

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive: {
        0: {
            items:2,
        },
        400: {
            items:3,
        },
        576: {
            items:3,
        },
        768: {
            items:4,
        },
        1200: {
            items:5,
        }
    }
}

class Partner extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()

        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)

        lax.update(window.scrollY)
    }

    render(){
        return (
          <section className="partner-area ptb-120" id="sponsor">
            <div className="container">
              <div className="section-title">
                <span>Check Who Makes This Event Possible!</span>
                <h2>
                  Our Event <b>Sponsors</b>
                </h2>

                {/* <Link to="/sponsors" className="btn btn-primary">
                  Become Link Sponsor
                </Link> */}

                <div className="bar"></div>
              </div>

              <div className="row .unic">
                <OwlCarousel
                  className="gold-partner-slides owl-carousel owl-theme"
                  {...options}
                >
                  <div className="col-lg-12 col-md-12">
                    <div className="partner-item">
                      <Link to="/sponsors" target="_blank">
                        <img
                          className="build"
                          src={require("../../assets/images/aws.png")}
                          alt="Partner Logo"
                        />
                        <img
                          className="build"
                          src={require("../../assets/images/aws.png")}
                          alt="Partner Logo"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* <div className="col-lg-12 col-md-12">
                    <div className="partner-item">
                      <Link to="/sponsors" target="_blank">
                        <img
                          className="build-2"
                          src={require("../../assets/images/barra_lito.png")}
                          alt="Partner Logo"
                        />
                        <img
                          className="build-2"
                          src={require("../../assets/images/barra_lito.png")}
                          alt="Partner Logo"
                        />
                      </Link>
                    </div>
                  </div> */}

                  {/* <div className="col-lg-12 col-md-12">
                    <div className="partner-item">
                      <Link to="/sponsors" target="_blank">
                        <img
                          className="build"
                          src={require("../../assets/images/aws.png")}
                          alt="Partner Logo"
                        />
                        <img
                          className="build"
                          src={require("../../assets/images/aws.png")}
                          alt="Partner Logo"
                        />
                      </Link>
                    </div>
                  </div> */}

                  <div className="col-lg-12 col-md-12">
                    <div className="partner-item">
                      <Link to="/sponsors" target="_blank">
                        <img
                          className="build"
                          src={require("../../assets/images/pucp.jpeg")}
                          alt="Partner Logo"
                        />
                        <img
                          className="build"
                          src={require("../../assets/images/pucp.jpeg")}
                          alt="Partner Logo"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="partner-item">
                      <Link to="/sponsors" target="_blank">
                        <img
                          className="build-2"
                          src={require("../../assets/images/barra_lito.png")}
                          alt="Partner Logo"
                        />
                        <img
                          className="build-2"
                          src={require("../../assets/images/barra_lito.png")}
                          alt="Partner Logo"
                        />
                      </Link>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </section>
        );
    }
}

export default Partner;