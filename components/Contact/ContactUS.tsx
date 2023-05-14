import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { HiOutlineMail } from "react-icons/hi";
import { GiSmartphone } from "react-icons/gi";
import { IoLocationOutline, IoPersonSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

const ContactUS = () => {
	interface Values {
		name: string;
		email: string;
		message: string;
	}

	type Error = {
		email: string;
	};

	return (
		<section className='bg-[#212529] text-[#fff] w-[100%] h-[100vh] flex items-center  '>
			<div className='w-[90%]  mx-auto  h-[60vh] overflow-y-scroll  mb-[4rem]'>
				<h1 className='text-[74px] mt-[2rem] font-south italic bold text-[#fc831a] ml-[0.5rem] sm:ml-[8rem] '>
					Contact
				</h1>
				{/* <div className='flex justify-between items-center w-[80%] mx-auto gap-x-[2rem]'> */}
				<div className='flex flex-col sm:flex-row justify-between gap-x-[2rem] w-[90%] sm:w-[80%] mx-auto'>
					<div className='w-[100%] sm:w-[40%]'>
						<div className='sm:text-[30px] text-[24px] sm:mb-[4rem] mb-[1rem] italic text-gray-400'>
							<h2>Got a project idea?</h2>
							<h2>Get in touch</h2>
						</div>
						<div className='p-3 bg-[#fff] text-[#000] flex items-center gap-x-4 mb-3 bg-gray-300 rounded-[5px] w-[300px]'>
							<HiOutlineMail />
							<a href='emsunconcept@gmail.com'>emsunconcept@gmail.com</a>
						</div>
						<div className='p-3 bg-[#fff] text-[#000] flex items-center gap-x-4 mb-3 bg-gray-300 rounded-[5px] w-[300px]'>
							<GiSmartphone />
							<a href='07032352156'>+2347032352156</a>
						</div>
						<div className='p-3 bg-[#fff] text-[#000] flex items-center gap-x-4 mb-3 bg-gray-300 rounded-[5px] w-[300px]'>
							<IoLocationOutline />
							<a href='07032352156'>Akure, Ondo State Nigeria</a>
						</div>
					</div>

					<Formik
						initialValues={{
							name: "",
							email: "",
							message: "",
						}}
						validate={(values: Values) => {
							const errors: Partial<Error> = {};
							if (!values.email) {
								errors.email = "Required";
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
							) {
								errors.email = "Invalid email address";
							}
							return errors;
						}}
						onSubmit={(
							values: Values,
							{ setSubmitting }: FormikHelpers<Values>
						) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
							/* and other goodies */
						}) => (
							<form
								onSubmit={handleSubmit}
								className='flex flex-col gap-[1rem] sm:w-[60%] w-[100%]'>
								<div className='sm:w-[500px] w-[100%] relative'>
									<label
										htmlFor='name'
										className='absolute text-[#000] top-[35%] left-[2%]'>
										<IoPersonSharp className='text-gray-400' />
									</label>
									<input
										type='text'
										name='name'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
										className='p-3 pl-8 w-[100%] bg-transparent border-[1px] border-gray-500 rounded-[5px]'
										placeholder={` name`}
									/>
								</div>
								{/* {errors.email && touched.email && errors.email} */}
								<div className='sm:w-[500px] w-[100%] relative '>
									<label
										htmlFor='email'
										className='absolute text-[#000] top-[35%] left-[2%]'>
										<MdOutlineMailOutline className='text-gray-400' />
									</label>
									<input
										type='email'
										name='email'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
										className='p-3 pl-8 w-[100%] bg-transparent border-[1px] border-gray-500 rounded-[5px]'
										placeholder='email'
									/>
								</div>
								{/* {errors.email && touched.email && errors.email} */}
								<div className='sm:w-[500px] w-[100%] relative'>
									<label
										htmlFor='message'
										className='absolute text-[#000] top-[8%] left-[2%]'>
										<BsPencil className='text-gray-400' />
									</label>
									<textarea
										name='message'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.message}
										className='p-3 pl-8 w-[100%] h-[200px] bg-transparent border-[1px] border-gray-500 rounded-[5px]'
										placeholder='message'
									/>
								</div>
								{/* {errors.email && touched.email && errors.email} */}

								<button
									type='submit'
									disabled={isSubmitting}
									className='p-2 bg-[#fffeee] sm:w-[500px] w-[100%] text-[#000] rounded-[5px] mb-[2rem]'>
									Submit
								</button>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</section>
	);
};

export default ContactUS;
