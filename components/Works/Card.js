import Image from 'next/image';
import moment from 'moment/moment';

const Card = ({ onShow, chunk, setCurrentId, id }) => {
	const clickHandler = () => {
		onShow();
		setCurrentId(id);
	};

	if (chunk) {
		return (
			<div
				className='w-full overflow-hidden bg-white rounded-lg cursor-pointer'
				onClick={clickHandler}
			>
				<div className='relative w-full h-72'>
					<Image
						src={`http://${chunk.fields.image.fields.file.url}`}
						alt={chunk.fields.image.fields.title}
						layout='fill'
						objectFit='cover'
						objectPosition='center'
					/>
				</div>
				<div className='flex flex-row items-center justify-between py-5 bg-white px-7 md:px-4 xl:px-7'>
					<h1 className='text-xl font-bold font-dosis'>
						{chunk.fields.companyName}
					</h1>
					<p className='text-sm font-saira'>
						{moment(Date.parse(chunk.fields.date)).format('MMM Do YY')}
					</p>
				</div>
			</div>
		);
	} else return null;
};

export default Card;
