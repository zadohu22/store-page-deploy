import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
	let navigate = useNavigate();
	return (
		<div className='hero min-h-screen bg-[url("matheo-jbt-yqIFxfERlpU-unsplash.jpg")] bg-no-repeat bg-cover bg-left-bottom'>
			<div className='hero-overlay bg-opacity-80'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-md'>
					<h1 className='mb-5 text-5xl font-bold'>
						Only<span className='text-blue-600'>Water</span>
					</h1>
					<p className='mb-5'>
						The number one source for{' '}
						<span className='text-blue-600 font-extrabold'>premier</span> water
						content.
					</p>
					<button
						id='shopNow'
						onClick={() => {
							navigate('/store');
						}}
						className='btn btn-primary text-blue-300 bg-blue-600 hover:bg-blue-300 hover:border-blue-300 hover:text-blue-600 border-white'
					>
						Shop Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
