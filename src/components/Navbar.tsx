import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";

const Navbar: FunctionComponent = () => {
  const [active, activeSet] = React.useState(false);
  const [navBarActiveClass, navBarActiveClassSet] = React.useState("");

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    activeSet(!active);
  };

  React.useEffect(() => {
    active ? navBarActiveClassSet("is-active") : navBarActiveClassSet("");
  }, [active, navBarActiveClassSet]);

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            {/* <img src={logo} alt="Kaldi" style={{ width: "88px" }} /> */}
            Fahimtu
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
