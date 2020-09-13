import React, { FunctionComponent, ReactNode } from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

interface BlogPostTemplateProps {
  content: ReactNode;
  contentComponent?: any;
  description: string;
  title: string;
  helmet?: ReactNode;
  tags: string[];
}

export const BlogPostTemplate: FunctionComponent<BlogPostTemplateProps> = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

interface BlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: BlogPostTemplateProps;
      html: string;
    };
  };
}

const BlogPost: FunctionComponent<BlogPostProps> = (props) => {
  const { markdownRemark: post } = props.data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;

// export const something = graphql`
//   query blogListQuery($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//             tags
//           }
//         }
//       }
//     }
//   }
// `;

/*
query blogListQuery {
  allMarkdownRemark(limit: 6, skip: 0, sort: {fields: frontmatter___date, order: DESC}) {
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

*/
