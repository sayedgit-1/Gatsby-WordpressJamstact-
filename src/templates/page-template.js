import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  query ($id: ID!) {
    wpcontent {
      page(id: $id) {
        title
        content
      }
    }
  }
`;

const PageTemplate = ({ data }) => {
  const page = data.wpcontent.page;
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Layout>
  );
};

export default PageTemplate;
