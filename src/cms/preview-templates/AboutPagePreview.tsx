import React, { FunctionComponent } from "react";
import { AboutPageTemplate } from "../../templates/about-page";

interface AboutPagePreviewProps {
  entry: {
    getIn: (a: any) => any;
  };
  widgetFor: (a: any) => any;
}

const AboutPagePreview: FunctionComponent<AboutPagePreviewProps> = ({
  entry,
  widgetFor,
}) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default AboutPagePreview;
