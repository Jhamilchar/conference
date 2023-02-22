import React from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';


class MainBanner extends React.Component {
    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    }

    makeTimer = () => {
        let endTime = new Date("September 23, 2023 00:00:00 PDT");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400);
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        setInterval(() => {
            this.makeTimer();
        }, 1000);
    }
    render(){
        return (
          <React.Fragment>
            <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="WuOXBbUjLhs"
              onClose={() => this.setState({ isOpen: false })}
            />

            <div className="main-banner video-banner">
              <video
                loop
                muted
                autoPlay
                poster="#"
                className="video-background"
              >
                <source
                  src={require("../../assets/video/promo-video.mp4")}
                  type="video/mp4"
                />
              </video>

              <div className="d-table">
                <div className="d-table-cell" id="head">
                  <div className="container">
                    <div className="main-banner-content">
                      <h1>AWS UG PERÚ CONF 2023</h1>
                      {/* <h1>
                        World Advanced <span>Biggest</span> <br /> Conference{" "}
                        <b>2</b>
                        <b>0</b>
                        <b>2</b>
                        <b>0</b>
                      </h1> */}
                      <ul>
                        <li>
                          <i className="icofont-compass"></i> Lima, Perú
                        </li>
                        <li>
                          <i className="icofont-calendar"></i> 23 Sep, 2023
                        </li>
                      </ul>
                      <div className="button-box">
                        <ul>
                          <li>-SECOND EDITION OF AWS UG PERU CONF</li>

                        </ul>
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.openModal();
                          }}
                          to="#"
                          className="video-btn popup-youtube"
                        >
                          <i className="icofont-ui-play"></i> Watch The Jeff
                          Barr Video Here!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="event-countdown">
                <div id="timer">
                  <div id="days">
                    {this.state.days} <span>Days</span>
                  </div>
                  <div id="hours">
                    {this.state.hours} <span>Hours</span>
                  </div>
                  <div id="minutes">
                    {this.state.minutes} <span>Minutes</span>
                  </div>
                  <div id="seconds">
                    {this.state.seconds} <span>Seconds</span>
                  </div>
                </div>
              </div>

              <div className="shape1">
                <img
                  src={require("../../assets/images/shapes/1.png")}
                  alt="shape1"
                />
              </div>
              <div className="shape2 rotateme">
                <img
                  src={require("../../assets/images/shapes/2.png")}
                  alt="shape2"
                />
              </div>
              <div className="shape3 rotateme">
                <img
                  src={require("../../assets/images/shapes/3.png")}
                  alt="shape3"
                />
              </div>
              <div className="shape4">
                <img
                  src={require("../../assets/images/shapes/4.png")}
                  alt="shape4"
                />
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default MainBanner;