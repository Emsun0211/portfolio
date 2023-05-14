import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard: React.FC<{ project: any; isactiveProject: string }> = ({
	project,
	isactiveProject,
}) => {
	return (
		<div
			className={`${
				isactiveProject === project.name
					? "flex flex-col  mt-[2rem] "
					: "hidden"
			} `}>
			<h2 className='mb-[1.5rem] text-[24px] font-[600]'>{project.name}</h2>
			<div className='flex flex-col sm:flex-row gap-x-[2rem] px-[2rem] border-l-[5px] border-l-[#fc831a] '>
				<div className='mb-[1rem]'>
					<Image
						src={`/${project.image}`}
						width={500}
						height={500}
						alt='Project'
					/>
				</div>

				<div className='w-[100%] sm:w-[40%] leading-[32px]'>
					<p className='text-gray-500 mb-[2rem]'>{project.description}</p>
					<div className='flex items-center justify-between w-[50%] gap-x-[2rem]'>
						<Link
							href={`${project.url}`}
							className='py-1 px-6 bg-gradient-to-r from-[#FC4A1A] to-[#F7B733]'>
							Live
						</Link>
						<Link
							href={`${project.github}`}
							className='py-1 px-6 bg-gradient-to-r from-[#FC4A1A] to-[#F7B733]'>
							Github
						</Link>
					</div>
				</div>
			</div>
			{/* <div className='h-[100vh] w-[100%]  z-40 fixed top-0 left-0'></div> */}
		</div>
	);
};

export default ProjectCard;
