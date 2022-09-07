import React, { useState } from 'react';

const Card = (props) => {
	const [total, setTotal] = useState('');
	// const handleItems = () => {
	// 	//return an array of how many items are chosen
	// 	props.setCartContains([1]);
	// 	return console.log(props.cartContains);
	// };
	const handleClick = () => {
		console.log(props.numberInCart, 'numberInCart');
		props.setNumberInCart(parseInt(props.numberInCart + total));
		let individualPrice = props.price * total;
		props.setCartPrice(individualPrice + parseInt(props.cartPrice));
		// for (let i = 0; i < total; i++) {
		// 	array.push(props.title);
		// }
		// props.setCartContains(array);
		// console.log(props.cartContains);
		console.log(total, 'total');
		if (props.title === 'Water') {
			props.setFirstCount(total + props.firstCount);
			console.log(props.firstCount, 'firstCount');
		} else if (props.title === 'Water 2.0') {
			props.setSecondCount(total + props.secondCount);
			console.log(props.secondCount);
		} else if (props.title === 'Water 3.0') {
			props.setThirdCount(total + props.thirdCount);
		} else if (props.title === 'Water 4.0') {
			props.setFourthCount(total + props.fourthCount);
		} else if (props.title === 'Water 5.0') {
			props.setFifthCount(total + props.fifthCount);
		} else if (props.title === 'WATER 6.0!!') {
			props.setSixthCount(total + props.sixthCount);
		}
		setTotal('');
	};

	return (
		<div className='card w-96 bg-base-10 shadow-xl max-h-100 h-100 min-w-100'>
			<figure>
				<img
					className={`max-h-60 h-60 w-100 min-w-100 object-cover ${props.class}`}
					src={props.image}
					alt=''
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					{props.title} (${props.price})
				</h2>
				<p>{props.description}</p>
				<div className='flex justify-center'>
					<div className=''>
						<button
							onClick={() => {
								setTotal(parseInt(total));
								if (total > 0) {
									setTotal(parseInt(total - 1));
								}
							}}
							className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
						>
							-
						</button>
						<input
							id='numberButton'
							value={total}
							onChange={(e) => {
								// if (1 == 1) {
								setTotal(parseInt(e.target.value));
								console.log(e.target.value);
								// }
							}}
							type='number'
							pattern='[0-9]+'
							placeholder='Enter Amount'
							className='input input-bordered w-36'
						/>

						<button
							onClick={() => {
								setTotal(parseInt(total));
								if (total === NaN) {
									total = 0;
								}
								setTotal(parseInt(total + 1));
							}}
							className='rounded-md border-solid border-gray-400 ml-4 h-8 w-8 border font-extrabold text-xl'
						>
							+
						</button>
					</div>
				</div>
				<div className='card-actions justify-center'>
					<button
						id='addToCart'
						onClick={handleClick}
						className='btn btn-primary w-60 text-blue-300 bg-blue-600 border-white'
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
