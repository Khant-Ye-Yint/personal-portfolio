import SocialLink from './SocialLink';

import {
	GrLinkedinOption,
	GrFacebookOption,
	GrInstagram,
	GrGithub,
} from 'react-icons/gr';

const SocialLinks = () => {
	return (
		<div className='flex flex-row space-x-5'>
			<SocialLink href='https://www.facebook.com/khantye.yint.9'>
				<GrFacebookOption />
			</SocialLink>
			<SocialLink href='https://www.linkedin.com/in/khant-ye-yint-18b3a51a9/'>
				<GrLinkedinOption />
			</SocialLink>
			<SocialLink href='https://www.instagram.com/kay_wine_wine/'>
				<GrInstagram />
			</SocialLink>
			<SocialLink href='https://github.com/Khant-Ye-Yint'>
				<GrGithub />
			</SocialLink>
		</div>
	);
};

export default SocialLinks;
