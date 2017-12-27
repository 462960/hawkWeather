
import React from 'react';
const isDev = process.env.NODE_ENV !== 'production'

export const Loader = () => <div className="loader">
						<img  src={isDev ? 'https://weather.skepton.ru/images/Loading.gif' : `/images/Loading.gif`}
  alt="Loading"/>
					</div>