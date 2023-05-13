import Image from "next/image";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { Socials } from "../socials/Socials";
import ProjectCard from "./ProjectCard";

const Project: React.FC = () => {
	return (
		<section className='bg-[#212529] text-[#fff] w-[100%] h-[100vh] flex items-center  '>
			<div className='w-[90%]  mx-auto flex flex-col  h-[70vh] overflow-y-scroll '>
				<div className='mb-[2rem] px-[1rem] border-t-[20px] border-l-[20px] border-t-[#FC4A1A] border-l-[#FC4A1A] w-[150px] h-[150px]'>
					<h1 className='font-south text-[70px] font-bold italic'>Projects</h1>
				</div>
				<div className='flex flex-col w-[70%] mx-auto'>
					<div className='flex flex-col'>
						<div className='flex mb-[3rem] justify-between p-2 '>
							<li>Jewel Store</li>
							<li>Jewel Store</li>
							<li>Jewel Store</li>
							<li>Jewel Store</li>
						</div>
						<ProjectCard />
					</div>
					<div className='flex flex-col mt-[4rem]'>
						<h2 className='mb-[1rem] text-[24px] font-[700]'>
							Technology Stack
						</h2>
						<div className='grid grid-cols-3 sm:grid-cols-4 gap-[2rem] place-items-center'>
							<div>
								<Image src='/git.png' width={50} height={50} alt='nextjs' />
							</div>
							<div>
								<Image
									src='/javascript1.png'
									width={50}
									height={50}
									alt='nextjs'
								/>
							</div>
							<div>
								<Image src='/CSS3.png' width={50} height={50} alt='nextjs' />
							</div>
							<div>
								<Image src='/react.png' width={50} height={50} alt='nextjs' />
							</div>
							<div>
								<Image
									src='/typescript.png'
									width={50}
									height={50}
									alt='nextjs'
								/>
							</div>
							<div>
								<Image src='/nodejs.png' width={50} height={50} alt='nextjs' />
							</div>
							<div>
								<Image src='/slack.png' width={50} height={50} alt='nextjs' />
							</div>
							<div>
								<Image
									src='/bootstrap.png'
									width={50}
									height={50}
									alt='nextjs'
								/>
							</div>
							<div>
								<Image src='/nextjs.png' width={50} height={50} alt='nextjs' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
