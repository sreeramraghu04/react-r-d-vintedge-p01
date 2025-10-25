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

      <main className="pt-12">
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
  keyword:
    "vintage cars, classic, modern auto, redefined, electric classic,html,tailwindcss,javascript,react,react-router-dom....etc.",
};

export default Layout;
