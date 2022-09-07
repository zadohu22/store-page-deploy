import React from 'react';

const ShoppingCart = (props) => {
	const conditionalSubTotal = () => {
		if (props.cartPrice !== NaN) {
			return (
				<span className='text-info text-gray-700'>
					Subtotal: ${props.cartPrice}
				</span>
			);
		} else {
			return <span className='text-info'>Subtotal: $0</span>;
		}
	};
	return (
		<div className='navbar-end'>
			<div className='flex-none'>
				<div className='dropdown dropdown-end'>
					<label tabIndex='0' className='btn btn-ghost btn-circle'>
						<div className='indicator'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
								/>
							</svg>
							<span className='badge badge-sm indicator-item'>
								{props.items}
							</span>
						</div>
					</label>
					<div
						tabIndex='0'
						className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
					>
						<div className='card-body'>
							<span className='font-bold text-lg'>{props.items} Items</span>
							{conditionalSubTotal()}
							{/* <span className='text-info'>Subtotal: ${props.cartPrice}</span> */}
							<div className='card-actions'>
								<button
									onClick={() => {
										props.setModalOpen('modal-open');
									}}
									className={`btn btn-primary btn-block bg-blue-600 border-white hover:bg-blue-300 hover:text-blue-600`}
								>
									View cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
