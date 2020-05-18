import React, { FunctionComponent } from "react";
import { BlogPostTemplate } from "../../templates/blog-post";

interface BlogPostPreviewProps {
  entry: {
    getIn: (a: any[]) => any;
  };
  widgetFor: (a: string) => any;
}

const BlogPostPreview: FunctionComponent<BlogPostPreviewProps> = ({
  entry,
  widgetFor,
}) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    />
  );
};

export default BlogPostPreview;
