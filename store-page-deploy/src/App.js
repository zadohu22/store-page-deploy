import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import RouteSwitch from './components/RouteSwitch';

const App = () => {
	const [numberInCart, setNumberInCart] = useState('0');
	const [cartPrice, setCartPrice] = useState('0');
	const [firstCount, setFirstCount] = useState(0);
	const [secondCount, setSecondCount] = useState(0);
	const [thirdCount, setThirdCount] = useState(0);
	const [fourthCount, setFourthCount] = useState(0);
	const [fifthCount, setFifthCount] = useState(0);
	const [sixthCount, setSixthCount] = useState(0);

	return (
		<>
			<Router>
				<Nav
					numberInCart={numberInCart}
					setNumberInCart={setNumberInCart}
					setCartPrice={setCartPrice}
					cartPrice={cartPrice}
					firstCount={firstCount}
					secondCount={secondCount}
					thirdCount={thirdCount}
					fourthCount={fourthCount}
					fifthCount={fifthCount}
					sixthCount={sixthCount}
					setFirstCount={setFirstCount}
					setSecondCount={setSecondCount}
					setThirdCount={setThirdCount}
					setFourthCount={setFourthCount}
					setFifthCount={setFifthCount}
					setSixthCount={setSixthCount}
				/>
				<RouteSwitch
					setNumberInCart={setNumberInCart}
					numberInCart={numberInCart}
					cartPrice={cartPrice}
					setCartPrice={setCartPrice}
					setFirstCount={setFirstCount}
					setSecondCount={setSecondCount}
					setThirdCount={setThirdCount}
					setFourthCount={setFourthCount}
					setFifthCount={setFifthCount}
					setSixthCount={setSixthCount}
					firstCount={firstCount}
					secondCount={secondCount}
					thirdCount={thirdCount}
					fourthCount={fourthCount}
					fifthCount={fifthCount}
					sixthCount={sixthCount}
				/>
			</Router>
		</>
	);
};

export default App;
