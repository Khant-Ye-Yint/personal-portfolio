import SocialLinks from '../SocialLinks';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='flex flex-col items-center justify-center py-10 space-y-5 text-center md:space-y-10'>
			<h1 className='text-4xl text-gray font-bad'>Not giving up is my magic</h1>
			<SocialLinks />
			<p className='text-xl text-lightGray'>Khant Ye Yint &copy; {year}</p>
		</div>
	);
};

export default Footer;
