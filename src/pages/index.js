import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  query {
    wpcontent {
      pages {
        nodes {
          id
          title
          uri
        }
      }
    }
  }
`;

const Indexpage = ({ data }) => {
  const pages = data.wpcontent.pages.nodes;
  return (
    <Layout>
      {pages.map((page) => (
        <article key={page.id}>
          <h2>
            <Link
              to={page.uri}
              dangerouslySetInnerHTML={{ __html: page.title }}
            />
          </h2>
          <div dangerouslySetInnerHTML={{ __html: page.url }} />
        </article>
      ))}
    </Layout>
  );
};

export default Indexpage;
