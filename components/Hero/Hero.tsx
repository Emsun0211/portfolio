import Image from "next/image";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillStar, AiOutlineGithub } from "react-icons/ai";
import { Socials } from "../socials/Socials";

const Hero = () => {
	return (
		<section className='bg-[#212529] text-[#fff] w-[100%] h-[100vh] flex items-center  '>
			<div className=' w-[100%] sm:w-[90%]  mx-auto flex flex-col items-center h-[70vh] overflow-y-scroll pr-[1rem] sm:pr-[3rem] pt-[2rem] sm:pt-[4rem]'>
				<div className='flex flex-col sm:flex-row justify-center gap-x-[4rem] '>
					<div>
						{/* <div className='bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] pl-1 pb-1'> */}
						<div className='bg-gradient-to-r from-gray-600 to-gray-300 pl-1 pb-1'>
							<div className='bg-[#212529]'>
								<Image
									src='/gbenga.png'
									width={450}
									height={450}
									alt=''
									className=''
								/>
							</div>
						</div>
						<div className='sm:flex flex-col items-center w-[80%] mx-auto mt-[3rem] hidden  '>
							<div className='text-[#fc831a] text-[2rem] flex justify-between gap-x-[2rem]'>
								<AiFillStar />
								<h2 className='text-[24px] font-[700] text-white'>
									Frontend Developer{" "}
								</h2>
								<AiFillStar />
							</div>
							<p className='text-center mt-[0.75rem] text-gray-500'>
								I create visually appealing web app that resonate with the user
								needs
							</p>
						</div>
					</div>
					<div className='w-[100%] sm:w-[40%] mx-auto sm:text-left text-center'>
						<div className=' mb-[2rem] sm:mb-[6rem]'>
							<h2 className='text-[36px] '>
								<span className='text-[48px]'>H</span>i, I am{""}
								<span className='text-[#fc831a] text-[48px]'> Gbenga</span>
							</h2>
							<p className=' text-l font-bold leading-loose text-gray-500 mb-[0.75rem]'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam
								iusto ratione odit, doloremque fugit deleniti natus voluptas hic
								libero.
							</p>
							<p className=' text-l font-bold leading-loose text-gray-500 mb-[0.75rem]'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam
								iusto ratione odit, doloremque fugit deleniti natus voluptas hic
								libero.
							</p>
							<p className=' text-l font-bold leading-loose text-gray-500 mb-[0.75rem]'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam
								iusto ratione odit, doloremque fugit deleniti natus voluptas hic
								libero.
							</p>
						</div>
						<div className='w-[100%] sm:w-[50%] text-center sm:text-left  text-gray-500 p-[2rem]'>
							Excited to see you!{" "}
							<span className='text-[#fc831a]'>Got a project idea?</span> Feel
							free to reach out to me with any project ideas you have or to just
							say hello!
						</div>
					</div>
				</div>
			</div>
			{/* <div className='absolute bottom-0 right-[20%]'>
				<Socials />
			</div> */}
		</section>
	);
};

export default Hero;
