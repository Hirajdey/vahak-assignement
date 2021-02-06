import React from 'react';
import './style.scss';
import hamberger from './img/hamburgerbtn.png';
import profile from './img/Profile.png';
import SiteLogo from '../SiteLogo';

function Header() {
	return (
		<header className="site-header">
			<div className="container">
				<div className="row">
					<div className="hamburgerBtn">
						<img src={hamberger} alt="hamberger-button"/>
					</div>
					
					<SiteLogo/>

					<div className="profile">
						<img src={profile} alt="profile"/>
					</div>
				</div>
				
			</div>
		</header>
	)
}

export default Header



