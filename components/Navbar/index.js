import NavItem from './NavItem';

import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
	return (
		<div className='sticky top-0 z-50 flex flex-row items-center justify-center w-full py-4 space-x-8 text-xl list-none bg-black md:space-x-16 font-saira text-gray'>
			<Link
				to='/'
				spy={true}
				smooth={true}
				duration={500}
				onClick={() => scroll.scrollToTop()}
			>
				<NavItem text='home' />
			</Link>
			<Link to='skills' spy={true} smooth={true} duration={500}>
				<NavItem text='skills' />
			</Link>
			<Link to='work' spy={true} smooth={true} duration={500}>
				<NavItem text='work' />
			</Link>
			<Link to='contact' spy={true} smooth={true} duration={500}>
				<NavItem text='contact' />
			</Link>
		</div>
	);
};

export default Navbar;
