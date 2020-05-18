import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

interface FeatureGridProps {
  gridItems: {
    image: any | string;
    text: string;
    alt: string;
    childImageSharp: any;
    style: any;
  }[];
}

const FeatureGrid: FunctionComponent<FeatureGridProps> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: "240px",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
