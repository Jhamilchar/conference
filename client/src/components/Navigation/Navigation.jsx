import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Link } from "react-scroll";
import "../../assets/css/conf-personal.css"


class Navigation extends React.Component {

    state = {
        collapsed: true,
        isOpen: false
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }



    onRouteChanged = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
          <header id="header" className="header-area">
            <div id="navbar" className="elkevent-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <a className="navbar-brand" href="/">
                    <img style={{ width: "150px" }} src={logo} alt="logo" />
                  </a>

                  <button
                    onClick={this.toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto align-items-center">
                      <li className="nav-item">
                        <Link
                          to="head"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          className="pointer"
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="speakers"
                          spy={true}
                          smooth={true}
                          offset={-120}
                          duration={500}
                          className="pointer"
                        >
                          Speakers
                        </Link>
                      </li>

                      {/* <li className="nav-item">
                        <Link
                          to="schedule"
                          spy={true}
                          smooth={true}
                          offset={-120}
                          duration={500}
                        >
                          Schedule
                        </Link>
                      </li> */}

                      <li className="nav-item">
                        <Link
                          to="sponsor"
                          spy={true}
                          smooth={true}
                          offset={-120}
                          duration={500}
                          className="pointer"
                        >
                          Sponsor
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="footer"
                          spy={true}
                          smooth={true}
                          offset={-120}
                          duration={500}
                          className="pointer"
                        >
                          Contact
                        </Link>
                      </li>
                      <div className="others-option">
                        <ul>
                          <li>
                            <NavLink
                              to="#"
                              className="btn btn-primary"
                              onClick={this.toggleNavbar}
                            >
                              Register
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        );
    }
}

export default withRouter(Navigation);