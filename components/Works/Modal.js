import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { MdClose } from 'react-icons/md';
import moment from 'moment';
import Image from 'next/legacy/image';

const Modal = ({ show, onClose, data, currentId }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		if (data) {
			setIsBrowser(true);
		}
	}, [show, data]);

	const ModalContent = () => {
		return show ? (
			<div className='fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen overflow-hidden bg-black bg-opacity-80'>
				<div className='overflow-hidden bg-white rounded-lg max-w-[300px]  md:max-w-screen-sm'>
					<div className='flex flex-row items-center justify-between px-5 py-4'>
						<h1 className='text-2xl font-bold text-black font-dosis'>
							{data[currentId].fields.companyName}
						</h1>
						<MdClose
							className='text-3xl font-bold text-black cursor-pointer'
							onClick={onClose}
						/>
					</div>
					<div className='relative w-96 h-80'>
						<Image
							src={`http:${data[currentId].fields.image.fields.file.url}`}
							alt={data[currentId].fields.image.fields.title}
							layout='fill'
							objectFit='cover'
							objectPosition='center'
						/>
					</div>
					<div className='flex flex-col items-start justify-between px-5 py-4 space-y-1'>
						<p className='text-lg font-saira'>
							{data[currentId].fields.description.content[0].content[0].value}
						</p>
						<p>
							<a
								href={`http://${data[currentId].fields.websitelink}`}
								className='text-green hover:text-green-200'
								target='_blank'
							>
								{data[currentId].fields.websitelink}
							</a>
						</p>
						<span className='self-end text-base text-black font-saira'>
							{moment(Date.parse(data[currentId].fields.date)).format(
								'MMM Do YY'
							)}
						</span>
					</div>
				</div>
			</div>
		) : null;
	};

	if (isBrowser) {
		return createPortal(
			<ModalContent />,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
};

export default Modal;
