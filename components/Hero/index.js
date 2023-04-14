import Image from 'next/image';

import MyPic from '../../images/mypic.png';
import SocialLinks from '../SocialLinks';

const Hero = () => {
	return (
		<div
			className='flex flex-row flex-wrap items-center justify-center w-10/12 min-h-screen lg:py-20 lg:space-y-20 lg:space-x-12 xl:space-x-0'
			id='hero'
		>
			<div className='flex flex-col items-start justify-center space-y-5 md:space-y-7 lg:w-1/2 xl:w-auto lg:space-y-10'>
				<p className='text-4xl font-bold font-dosis md:text-5xl lg:text-6xl text-gray '>
					I’m <span className='text-green'>Khant Ye Yint</span>
				</p>
				<h1 className='max-w-screen-lg text-5xl font-bold font-dosis md:text-7xl xl:text-8xl text-gray'>
					Fullstack Developer Specialized in React and Node.js
				</h1>
				<SocialLinks />
			</div>
			<div>
				<div className='border-none rounded-full ring-8 ring-green'>
					<Image
						src={MyPic}
						className='object-cover object-center w-80 md:w-96'
						alt='My Pic'
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
