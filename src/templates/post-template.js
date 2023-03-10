import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  query ($id: ID!) {
    wpcontent {
      post(id: $id) {
        title
        content
      }
    }
  }
`;

const PostTemplate = ({ data }) => {
  const post = data.wpcontent.post;
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  );
};

export default PostTemplate;
