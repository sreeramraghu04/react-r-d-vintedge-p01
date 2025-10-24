import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Layout = ({ title, keyword, description, author }) => {
  return (
    <div>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="author" content={author} />
          <meta name="keyword" content={keyword} />
        </Helmet>
      </div>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "vintEdge",
  description: "abt rrd",
  author: "ram",
  keyword: "html,css,javascript,react",
};

export default Layout;
