import React, {useState} from 'react';
import './style.scss';
import specificationIcon1 from './img/specification_1.svg';
import specificationIcon2 from './img/specification_2.svg';
import specificationIcon3 from './img/specification_3.svg';  
import profileimg from './img/Profile.png'; 

function HondaCityCard() {

	const [state, setState] = useState({toggle:false})

	const moretoggleFun = () => {
		setState((prevState) =>({
			...state,
			toggle: !prevState.toggle
		}))
	}

	return (
		<div className="hondaCity-card">
			<div className="card-header">
				<h2>Honda City</h2>
				<span>Posted at 1 Nov, 9.30 AM</span>
			</div>
			<div className="card-body">
				<ul>
					<li><span><img src={specificationIcon1} alt="specification"/></span>Specification 01</li>
					<li><span><img src={specificationIcon2} alt="specification"/></span>Specification 02</li>
					<li><span><img src={specificationIcon3} alt="specification"/></span>Specification 03</li>
				</ul>
				
				{state.toggle ? (
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				):''}

			</div>

			<button className="moreDtl" id={state.toggle ? 'hide-details' : 'more-details'} onClick={moretoggleFun}>{state.toggle ? 'Hide Details' : 'More Details'}</button>
			
			<div className="card-footer">
				<div className="profile-box">
					<div className="prof-col">
						<div className="prof">
							<img src={profileimg} alt="user-profile"/>
						</div>						
					</div>
					<div className="prof-col">
						<h3>Rohan Sharma</h3>
						<p>Bengaluru, Karnataka</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HondaCityCard
