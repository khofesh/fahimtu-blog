import React, { FunctionComponent, ReactNode } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

interface TextProps {
  pageContext: any;
}

const PostListTemplate: FunctionComponent<TextProps> = (props) => {
  console.log(props);
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/test" : `/test/${(currentPage - 1).toString()}`;
  const nextPage = `/test/${(currentPage + 1).toString()}`;

  return (
    <Layout>
      <section>
        <div>test</div>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}{" "}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </section>
    </Layout>
  );
};

export default PostListTemplate;

export const something = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
