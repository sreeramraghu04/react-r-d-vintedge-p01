/* import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
const Layout = ({ title, keyword, description, author }) => {
  return (
    <div>
      <div>
        <Helmet>
          <meta charSet="utf-8" /> <title>{title}</title>{" "}
          <meta name="description" content={description} />{" "}
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
export default Layout; */

import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Layout = ({ title, keyword, description, author }) => {
  return (
    <div className="bg-gradient-to-b from-[#0b0b0c] via-[#110815] to-[#0b0b0c] min-h-screen text-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keyword" content={keyword} />
      </Helmet>

      <NavBar />

      <main className="pt-15">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "VintEdge",
  description: "Vintage cars reimagined for the future",
  author: "VintEdge Team",
  keyword: "vintage cars, classic, modern auto, redefined, electric classic",
};

export default Layout;
 


