import React, { FunctionComponent } from "react";
import { IndexPageTemplate } from "../../templates/index-page";

interface IndexPagePreviewProps {
  entry: { getIn: (a: any) => any };
  getAsset: (a: any) => any;
}

const IndexPagePreview: FunctionComponent<IndexPagePreviewProps> = ({
  entry,
  getAsset,
}) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
