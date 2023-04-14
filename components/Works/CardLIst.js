import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import Modal from './Modal';

import { useMediaQuery } from 'react-responsive';

const LeftArrow = ({ onClick }) => {
	return (
		<div
			className='absolute text-5xl cursor-pointer top-[40%] -left-10 text-green'
			onClick={onClick}
		>
			<FaAngleLeft />
		</div>
	);
};

const RightArrow = ({ onClick }) => {
	return (
		<div
			className='absolute text-5xl cursor-pointer top-[40%] -right-10 text-green'
			onClick={onClick}
		>
			<FaAngleRight />
		</div>
	);
};

const CardLIst = ({ data }) => {
	const [isBrowser, setIsBrowser] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [currentId, setCurrentId] = useState(0);
	const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
	const isTablet = useMediaQuery({ query: '(min-width: 700px)' });

	const onClose = () => {
		setShowModal(false);
	};

	const onShow = () => {
		setShowModal(true);
	};

	useEffect(() => {
		setIsBrowser(true);
	}, [isBrowser, showModal]);

	const slidesToShow =
		isBrowser !== true ? 1 : isDesktop ? 3 : isTablet ? 2 : 1;

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		nextArrow: <RightArrow />,
		prevArrow: <LeftArrow />,
	};

	return (
		<div className='max-w-xs mt-10 sm:max-w-screen-sm md:max-w-[700px] md:mt-24 lg:max-w-[900px] xl:max-w-[1200px]'>
			<Slider {...settings}>
				{data.map((chunk, id) => (
					<Card
						onShow={onShow}
						key={id}
						chunk={chunk}
						setCurrentId={setCurrentId}
						id={id}
					/>
				))}
			</Slider>
			<Modal
				show={showModal}
				onClose={onClose}
				data={data}
				currentId={currentId}
			/>
		</div>
	);
};

export default CardLIst;
