import ImageList from './ImageList';

const TechStack = () => {
	return (
		<div
			className='flex flex-col items-center justify-between w-full py-20 text-center bg-white md:py-40 items-between'
			id='skills'
		>
			<div className='flex flex-col items-center justify-center space-y-3'>
				<h1 className='text-5xl font-bold text-black md:text-6xl font-dosis'>
					My tech stack
				</h1>
				<span className='w-40 h-2 md:h-3 bg-green rounded-xl'></span>
			</div>
			<h1 className='py-8 text-2xl md:text-3xl font-saira'>
				I can develop responsive web pages with most loved frameworks.
			</h1>
			<ImageList />
		</div>
	);
};

export default TechStack;
