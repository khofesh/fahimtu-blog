import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import "./all.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix, Link } from "gatsby";
import { Location } from "@reach/router";
import Navbar from "../components/Navbar";

import instagram from "../img/social/instagram_white.svg";
import github from "../img/social/github.svg";
import linkedin from "../img/social/linkedin.svg";

interface TemplateWrapperProps {
  description?: string;
}

const TemplateWrapper: FunctionComponent<TemplateWrapperProps> = (props) => {
  const { children } = props;
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>

      <div className="sidebar-c">
        <div className="subheading-c">
          {props.description || "Some description here"}
        </div>
        <div className="divider-c"></div>
        <Location>
          {({ location }) => {
            return (
              <>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className={location.pathname === "/blog" ? "active" : ""}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </>
            );
          }}
        </Location>
        <div className="divider-c"></div>
        <div className="columns">
          <div className="column is-narrow">
            <a title="github" href="https://github.com">
              <img
                className="fas fa-lg"
                src={github}
                alt="Github"
                style={{ width: "19px", height: "19px" }}
              />
            </a>
          </div>
          <div className="column is-narrow">
            <a title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "19px", height: "19px" }}
              />
            </a>
          </div>
          <div className="column is-narrow">
            <a title="linkedin" href="https://linkedin.com">
              <img
                src={linkedin}
                alt="Linkedin"
                style={{ width: "19px", height: "19px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="topnav-c" id="myTopnav">
        <Navbar />
      </div>

      <div className="content-c">{children}</div>
    </div>
  );
};

export default TemplateWrapper;
