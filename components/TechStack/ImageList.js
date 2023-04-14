import Image from 'next/image';

import Express from '../../images/logos/express.png';
import Next from '../../images/logos/next.png';
import Node from '../../images/logos/node.png';
import React from '../../images/logos/react.png';
import Tailwind from '../../images/logos/tailwindcss.png';

const ImageList = () => {
	return (
		<div className='flex flex-col items-center justify-center mt-10 space-y-5 md:mt-24 lg:space-y-28'>
			<div className='flex flex-row flex-wrap items-center justify-center space-x-10 lg:space-x-28'>
				<Image src={Next} alt='next.js' className='w-1/4 xl:w-auto' />
				<Image src={Node} alt='node.js' className='w-1/4 xl:w-auto' />
			</div>
			<div className='flex flex-row flex-wrap items-center justify-center space-x-10 lg:space-x-28'>
				<Image src={Express} alt='express' className='w-1/4 xl:w-auto' />
				<Image src={Tailwind} alt='tailwind' className='w-1/4 xl:w-auto' />
				<Image src={React} alt='react.js' className='w-1/4 xl:w-auto' />
			</div>
		</div>
	);
};

export default ImageList;
