import '@/styles/globals.css';
import '@fontsource/saira';
import '@fontsource/dosis';
import '@fontsource/bad-script';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Layout } from '../components';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
