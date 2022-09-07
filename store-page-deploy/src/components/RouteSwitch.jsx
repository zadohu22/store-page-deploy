import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Store from './Store';

const RouteSwitch = (props) => {
	return (
		// <Router>
		<Routes>
			<Route path='/' element={<Hero />} />
			<Route
				path='/store'
				element={
					<Store
						setNumberInCart={props.setNumberInCart}
						numberInCart={props.numberInCart}
						cartPrice={props.cartPrice}
						setCartPrice={props.setCartPrice}
						setFirstCount={props.setFirstCount}
						setSecondCount={props.setSecondCount}
						setThirdCount={props.setThirdCount}
						setFourthCount={props.setFourthCount}
						setFifthCount={props.setFifthCount}
						setSixthCount={props.setSixthCount}
						firstCount={props.firstCount}
						secondCount={props.secondCount}
						thirdCount={props.thirdCount}
						fourthCount={props.fourthCount}
						fifthCount={props.fifthCount}
						sixthCount={props.sixthCount}
					/>
				}
			/>
		</Routes>
		// </Router>
	);
};

export default RouteSwitch;
