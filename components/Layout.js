import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className='min-h-screen bg-black'>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
