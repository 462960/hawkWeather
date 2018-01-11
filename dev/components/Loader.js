import React from "react";
const URL = "https://weather.skepton.ru/images/Loading.gif";
const localPath = "/images/Loading.gif";
const isDev = process.env.NODE_ENV !== "production";

export const Loader = () => (
	<div className="loader">
		<img src={isDev ? URL : localPath} alt="Loading" />
	</div>
);
