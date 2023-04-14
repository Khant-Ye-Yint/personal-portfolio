import Image from 'next/image';

import ContactPic from '../../images/ContactPic.png';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<div
			className='flex flex-col items-center justify-center w-10/12 min-h-screen space-y-20 xl:flex-row lg:py-20 lg:space-y-20 lg:space-x-12 xl:space-x-32'
			id='contact'
		>
			<div className='flex flex-col justify-between space-y-16 '>
				<h1 className='text-4xl font-bold md:text-5xl xl:text-6xl text-green'>
					Tell me your needs
				</h1>
				<Image src={ContactPic} alt='Contact Pic' className='hidden xl:block' />
			</div>
			<ContactForm />
		</div>
	);
};

export default Contact;
