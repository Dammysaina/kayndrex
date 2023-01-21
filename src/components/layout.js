import React, { useLayoutEffect } from "react";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";

// eslint-disable-next-line no-empty-pattern
const Layout = ({}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
