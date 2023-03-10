import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import "@wordpress/block-library/build-style/style.css";
import "../styles/layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      wpcontent {
        generalSettings {
          title
        }
      }
    }
  `);

  const { title } = data.wpcontent.generalSettings;
  return (
    <>
      <header>
        <Link to="/" className="home">
          {title}
        </Link>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
