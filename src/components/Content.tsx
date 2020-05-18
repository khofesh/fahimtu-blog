import React, { FunctionComponent } from "react";

interface HTMLContentProps {
  content: string;
  className?: string;
}

export const HTMLContent: FunctionComponent<HTMLContentProps> = ({
  content,
  className,
}) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

interface ContentProps {
  content: React.ReactNode;
  className?: string;
}

const Content: FunctionComponent<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
);

export default Content;
