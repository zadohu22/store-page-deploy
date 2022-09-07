import React from 'react';
import Card from './Card';
import img1 from '../pexels-david-bartus-879521.jpg';
import img2 from '../pexels-jens-johnsson-66090.jpg';
import img3 from '../pexels-lisa-fotios-1346155.jpg';
import img4 from '../pexels-marko-obrvan-304784.jpg';
import img5 from '../pexels-pixabay-40654.jpg';
import img6 from '../pexels-thorn-yang-401098.jpg';

const Store = (props) => {
	return (
		<>
			<div className='w-full h-full mt-8 grid justify-items-center items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setFirstCount={props.setFirstCount}
					firstCount={props.firstCount}
					price={100}
					title='Water'
					description='Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image={img1}
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setSecondCount={props.setSecondCount}
					secondCount={props.secondCount}
					price={200}
					title='Water 2.0'
					description='Water 2.0 is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image={img2}
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setThirdCount={props.setThirdCount}
					thirdCount={props.thirdCount}
					price={300}
					title='Water 3.0'
					description='Water 3.0 is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image={img3}
					className='object-left-bottom'
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setFourthCount={props.setFourthCount}
					fourthCount={props.fourthCount}
					price={400}
					title='Water 4.0'
					description='Water 4.0 is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image={img4}
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setFifthCount={props.setFifthCount}
					fifthCount={props.fifthCount}
					price={500}
					title='Water 5.0'
					description='Water 5.0 is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image={img5}
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setSixthCount={props.setSixthCount}
					sixthCount={props.sixthCount}
					price={600}
					title='WATER 6.0!!'
					description='The ULTIMATE inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image={img6}
					className='object-left-bottom'
				/>
			</div>
		</>
	);
};

export default Store;
