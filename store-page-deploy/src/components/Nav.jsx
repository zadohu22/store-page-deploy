/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import Modal from './Modal';

const Nav = (props) => {
	let navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState('');

	return (
		<div className='navbar bg-base-100 sticky top-0 z-10'>
			<Modal
				numberInCart={props.numberInCart}
				setNumberInCart={props.setNumberInCart}
				firstCount={props.firstCount}
				secondCount={props.secondCount}
				thirdCount={props.thirdCount}
				fourthCount={props.fourthCount}
				fifthCount={props.fifthCount}
				sixthCount={props.sixthCount}
				cartPrice={props.cartPrice}
				setCartPrice={props.setCartPrice}
				setFirstCount={props.setFirstCount}
				setSecondCount={props.setSecondCount}
				setThirdCount={props.setThirdCount}
				setFourthCount={props.setFourthCount}
				setFifthCount={props.setFifthCount}
				setSixthCount={props.setSixthCount}
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
			/>

			<div className='navbar-start'>
				<a
					onClick={() => {
						navigate('/');
					}}
					href='#'
					className='btn btn-ghost normal-case text-xl'
				>
					<span className='text-blue-300'>O</span>
					<span className='text-blue-600'>W</span>
				</a>
			</div>

			<ShoppingCart
				setModalOpen={setModalOpen}
				items={props.numberInCart}
				cartPrice={props.cartPrice}
			/>
		</div>
	);
};

export default Nav;
