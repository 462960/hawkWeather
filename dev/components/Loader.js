import React from "react";
const imgPath = "/images/Loading.gif";
const isProd = process.env.NODE_ENV == "production";

export const Loader = () => (
  <div className="loader">
    <img src={isProd ? imgPath : `/dev${imgPath}`} alt="Loading" />
  </div>
);
