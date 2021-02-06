import React from 'react';
import './style.scss';
import sitelogo from './img/hondo-logo.png';

function SiteLogo() {
	return (
		<div className="sitelogo">
			<img src={sitelogo} alt="site-logo"/>
		</div>
	)
}

export default SiteLogo

