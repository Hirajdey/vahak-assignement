import React from 'react';
import './style.scss';
import HondaCityCard from '../HondaCityCard';
import PlaceLoadForm from '../PlaceLoadForm';

function CarAvailable() {
	return (
		<section className="car-available-sec">
			<div className="container">
				<h1>Old Car Available</h1>
				<HondaCityCard/>
				<PlaceLoadForm/>
			</div>
		</section>
	)
}

export default CarAvailable



