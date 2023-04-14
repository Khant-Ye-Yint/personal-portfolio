import { useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
	const formRef = useRef();

	return (
		<Formik
			initialValues={{ name: '', email: '', phoneNo: '', message: '' }}
			validationSchema={Yup.object({
				name: Yup.string()
					.max(30, 'Must be 30 characters or less')
					.required('*Required'),
				email: Yup.string()
					.email('Invalid email address')
					.required('*Required'),
				phoneNo: Yup.string()
					.max(20, 'Must be 20 characters or less')
					.required('*Required'),
				message: Yup.string().required('*Required'),
			})}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				// setTimeout(() => {
				// 	alert(JSON.stringify(values, null, 2));
				// 	setSubmitting(false);
				// 	resetForm();
				// }, 400);
				emailjs
					.sendForm(
						process.env.NEXT_PUBLIC_SERVERCE_ID,
						process.env.NEXT_PUBLIC_TEMPLATE_ID,
						formRef.current,
						process.env.NEXT_PUBLIC_PUBLIC_ID
					)
					.then(
						() => {
							toast.success('Email Sent', {
								position: 'top-right',
								autoClose: 2000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: 'dark',
							});
							setSubmitting(false);
						},
						(error) => {
							console.log(error.text);
						}
					);
				resetForm();
			}}
		>
			{({ isValid }) => (
				<Form
					className='flex flex-col justify-center items-start w-[350px] md:w-[450px] space-y-7 font-dosis'
					ref={formRef}
				>
					<div className='form-container'>
						<Field
							name='name'
							type='text'
							placeholder='Name'
							className='form-field'
						/>
						<span className='error-message'>
							<ErrorMessage name='name' />
						</span>
					</div>

					<div className='form-container'>
						<Field
							name='email'
							type='email'
							placeholder='Email'
							className='form-field'
						/>
						<span className='error-message'>
							<ErrorMessage name='email' />
						</span>
					</div>

					<div className='form-container'>
						<Field
							name='phoneNo'
							type='text'
							placeholder='Phone No.'
							className='form-field'
						/>
						<span className='error-message'>
							<ErrorMessage name='phoneNo' />
						</span>
					</div>

					<div className='form-container'>
						<Field
							name='message'
							type='text'
							component='textarea'
							placeholder='Message'
							className='form-field'
						/>
						<span className='error-message'>
							<ErrorMessage name='message' />
						</span>
					</div>

					<button
						disabled={!isValid}
						type='submit'
						className={`px-5 py-2 text-2xl font-bold rounded-md ${
							isValid
								? 'text-green ring-2 ring-green hover:text-green-100 hover:ring-green-100 cursor-pointer'
								: 'text-gray ring-2 ring-gray cursor-default'
						} `}
					>
						Submit
					</button>
					<ToastContainer
						position='top-right'
						autoClose={2000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='dark'
					/>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
