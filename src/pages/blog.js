import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  query {
    wpcontent {
      posts {
        nodes {
          id
          title
          uri
          excerpt
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  const posts = data.wpcontent.posts.nodes;
  return (
    <Layout>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <Link
              to={`/blog${post.uri}`}
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </article>
      ))}
    </Layout>
  );
};

export default Blog;
