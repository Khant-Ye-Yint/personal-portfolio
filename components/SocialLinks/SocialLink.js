const SocialLink = ({ children, href }) => {
	return (
		<a
			className='flex items-center justify-center w-10 h-10 text-3xl text-black rounded-full cursor-pointer bg-green hover:bg-green-100 md:w-12 md:h-12 lg:w-14 lg:h-14'
			href={href}
			target='_blank'
		>
			{children}
		</a>
	);
};

export default SocialLink;
