import React from 'react';

const Modal = (props) => {
	return (
		<>
			<div className={`modal ${props.modalOpen}`}>
				<div className='modal-box relative'>
					<label
						htmlFor='my-modal-3'
						className='btn btn-sm btn-circle absolute right-2 top-2'
						onClick={() => {
							props.setModalOpen('');
						}}
					>
						✕
					</label>
					<h3 className='text-lg font-bold'>Ready to check out?</h3>
					<br></br>
					{props.firstCount > 0 && (
						<div className='flex justify-between'>
							<p className='text-lg'> Water: ({props.firstCount})</p>
							<div>
								<button
									onClick={() => {
										if (props.firstCount >= 1) {
											props.setFirstCount(parseInt(props.firstCount - 1));
											props.setCartPrice(props.cartPrice - 100);
											props.setNumberInCart(props.numberInCart - 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									-
								</button>
								<button
									onClick={() => {
										if (props.firstCount >= 1) {
											props.setFirstCount(parseInt(props.firstCount + 1));
											props.setCartPrice(props.cartPrice + 100);
											props.setNumberInCart(props.numberInCart + 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									+
								</button>
							</div>

							<p className='text-lg font-bold'>${props.firstCount * 100}</p>
						</div>
					)}

					{props.secondCount > 0 && (
						<div className='flex justify-between mt-2'>
							<p className='text-lg'> Water 2.0: ({props.secondCount})</p>
							<div>
								<button
									onClick={() => {
										if (props.secondCount >= 1) {
											props.setSecondCount(parseInt(props.secondCount - 1));
											props.setCartPrice(props.cartPrice - 200);
											props.setNumberInCart(props.numberInCart - 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									-
								</button>
								<button
									onClick={() => {
										if (props.secondCount >= 1) {
											props.setSecondCount(parseInt(props.secondCount + 1));
											props.setCartPrice(props.cartPrice + 200);
											props.setNumberInCart(props.numberInCart + 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									+
								</button>
							</div>
							<p className='text-lg font-bold'>${props.secondCount * 200}</p>
						</div>
					)}

					{props.thirdCount > 0 && (
						<div className='flex justify-between mt-2'>
							<p className='text-lg'> Water 3.0: ({props.thirdCount})</p>
							<div>
								<button
									onClick={() => {
										if (props.thirdCount >= 1) {
											props.setThirdCount(parseInt(props.thirdCount - 1));
											props.setCartPrice(props.cartPrice - 300);
											props.setNumberInCart(props.numberInCart - 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									-
								</button>
								<button
									onClick={() => {
										if (props.thirdCount >= 1) {
											props.setThirdCount(parseInt(props.thirdCount + 1));
											props.setCartPrice(props.cartPrice + 300);
											props.setNumberInCart(props.numberInCart + 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									+
								</button>
							</div>
							<p className='text-lg font-bold'>${props.thirdCount * 300}</p>
						</div>
					)}

					{props.fourthCount > 0 && (
						<div className='flex justify-between mt-2'>
							<p className='text-lg'> Water 4.0: ({props.fourthCount})</p>
							<div>
								<button
									onClick={() => {
										if (props.fourthCount >= 1) {
											props.setFourthCount(parseInt(props.fourthCount - 1));
											props.setCartPrice(props.cartPrice - 400);
											props.setNumberInCart(props.numberInCart - 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									-
								</button>
								<button
									onClick={() => {
										if (props.fourthCount >= 1) {
											props.setFourthCount(parseInt(props.fourthCount + 1));
											props.setCartPrice(props.cartPrice + 400);
											props.setNumberInCart(props.numberInCart + 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									+
								</button>
							</div>
							<p className='text-lg font-bold'>${props.fourthCount * 400}</p>
						</div>
					)}
					{props.fifthCount > 0 && (
						<div className='flex justify-between mt-2'>
							<p className='text-lg'> Water 5.0: ({props.fifthCount})</p>
							<div>
								<button
									onClick={() => {
										if (props.fifthCount >= 1) {
											props.setFifthCount(parseInt(props.fifthCount - 1));
											props.setCartPrice(props.cartPrice - 500);
											props.setNumberInCart(props.numberInCart - 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									-
								</button>
								<button
									onClick={() => {
										if (props.fifthCount >= 1) {
											props.setFifthCount(parseInt(props.fifthCount + 1));
											props.setCartPrice(props.cartPrice + 500);
											props.setNumberInCart(props.numberInCart + 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									+
								</button>
							</div>
							<p className='text-lg font-bold'>${props.fifthCount * 500}</p>
						</div>
					)}
					{props.sixthCount > 0 && (
						<div className='flex justify-between mt-2'>
							<p className='text-lg'> Water 6.0: ({props.sixthCount})</p>
							<div>
								<button
									onClick={() => {
										if (props.sixthCount >= 1) {
											props.setSixthCount(parseInt(props.sixthCount - 1));
											props.setCartPrice(props.cartPrice - 600);
											props.setNumberInCart(props.numberInCart - 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									-
								</button>
								<button
									onClick={() => {
										if (props.sixthCount >= 1) {
											props.setSixthCount(parseInt(props.sixthCount + 1));
											props.setCartPrice(props.cartPrice + 600);
											props.setNumberInCart(props.numberInCart + 1);
										}
									}}
									className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'
								>
									+
								</button>
							</div>
							<p className='text-lg font-bold'>${props.sixthCount * 600}</p>
						</div>
					)}
					<hr className='mt-2'></hr>
					<div className='flex justify-between mt-2'>
						<p className='mt-2 text-lg font-bold'>Total:</p>
						<p className='mt-2 text-lg font-bold'>${props.cartPrice}</p>
					</div>
					<div className='w-full h-full flex justify-center items-center mt-4'>
						<button
							onClick={() => {
								alert('you paid way too much for water');
								props.setNumberInCart(0);
								props.setCartPrice(0);
								props.setFirstCount(0);
								props.setSecondCount(0);
								props.setThirdCount(0);
								props.setFourthCount(0);
								props.setFifthCount(0);
								props.setSixthCount(0);
								props.setModalOpen('');
							}}
							className='btn btn-primary py-0'
						>
							check out
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
