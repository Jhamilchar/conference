import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';

class About extends React.Component {

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
          <section className="about-area ptb-120 bg-image">
            <div className="container">
              <div className="row h-100 align-items-center">
                <div className="col-lg-6">
                  <div className="about-content">
                    <span>Join The Event</span>
                    <h2>
                      Why should you <b>participate</b> in this event?
                    </h2>
                    <p className='font-p'>
                      In times when technology, the consumer and the market
                      change at such rapid rates, technological adoption is no
                      longer an option.
                    </p>

                    {/* <Link to="/about-3" className="btn btn-primary">
                      Read More
                      <i className="icofont-double-right"></i>
                    </Link> */}

                    {/* <Link to="#" className="btn btn-secondary">
                      Sign Up
                    </Link> */}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="about-image">
                    <img
                      src={require("../../assets/images/deepracer_league.png")}
                      className="about-img1"
                      alt="about"
                    />

                    <img
                      src={require("../../assets/images/aws_community_day_lima_2019.jpeg")}
                      width={510}
                      className="about-img2"
                      alt="about"
                    />

                    {/* <img
                      src={require("../../assets/images/shapes/5.png")}
                      className="shape-img"
                      alt="about"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default About;