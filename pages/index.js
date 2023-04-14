import { Hero, TechStack, Works, Contact } from '../components';

import { createClient } from 'contentful';

const Home = ({ data }) => {
	return (
		<div className='flex flex-col items-center justify-center w-full text-xl font-dosis'>
			<Hero />
			<TechStack />
			<Works data={data} />
			<Contact />
		</div>
	);
};

export async function getStaticProps() {
	const client = createClient({
		space: process.env.NEXT_PUBLIC_SPACE_ID,
		accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
	});
	const res = await client.getEntries({
		content_type: 'works',
		order: 'sys.createdAt',
	});

	return {
		props: { data: res.items },
		revalidate: 60,
	};
}

export default Home;
