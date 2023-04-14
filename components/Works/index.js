import CardLIst from './CardLIst';

const Works = ({ data }) => {
	return (
		<div
			className='flex flex-col items-center justify-between w-full py-20 text-center bg-black md:py-40 items-between'
			id='work'
		>
			<div className='flex flex-col items-center justify-center space-y-3'>
				<h1 className='text-4xl font-bold text-white md:text-6xl font-dosis'>
					My works
				</h1>
				<span className='w-40 h-2 md:h-3 bg-green rounded-xl'></span>
			</div>
			<h1 className='py-8 text-xl text-gray md:text-3xl font-saira'>
				Here&apos;s what I&apos;ve done recently
			</h1>
			<div>
				<CardLIst data={data} />
			</div>
		</div>
	);
};

export default Works;
