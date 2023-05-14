import Image from "next/image";
import React, { useState } from "react";
import { projects } from "@/utils/project";
import ProjectCard from "./ProjectCard";

const Project: React.FC = () => {
	const projectList: string[] = ["Jewel", "ibeep", "videoChat", "Techtime"];

	const [isactiveProject, setisactiveProject] = useState("Jewel");
	console.log(isactiveProject);

	const handleProjectDisaplay = ({ list }: { list: string }) => {
		setisactiveProject(list);
		projects.find((item) => {
			if (item.name === isactiveProject) {
				setisactiveProject(list);
			}
		});
	};
	return (
		<section className='bg-[#212529] text-[#fff] w-[100%] h-[100vh] flex items-center  '>
			<div className='w-[90%]  mx-auto flex flex-col  h-[70vh] overflow-y-scroll '>
				<div className='mb-[2rem] px-[1rem] sm:border-t-[20px] sm:border-l-[20px] border-t-[10px] border-l-[10px] border-t-[#fc831a] border-l-[#FC4A1A] w-[150px] h-[150px]'>
					<h1 className='font-south text-[60px] sm:text-[70px] font-bold italic text-[#fc831a]'>
						Projects
					</h1>
				</div>
				<div className='flex flex-col w-[100%] sm:w-[70%] mx-auto'>
					<div className='flex flex-col'>
						<div className='flex sm:mb-[3rem] mb-[1rem] justify-between p-2 overflow-x-hidden w-[100%] sm:w-[80%] mx-auto cursor-pointer'>
							{projectList.map((list, idx) => (
								<li
									className={`${
										isactiveProject === list
											? "text-[#fc831a] border-b-[2px]  border-b-[#fc831a]"
											: "text-white"
									}`}
									key={idx}
									onClick={() => handleProjectDisaplay({ list })}>
									{list}
								</li>
							))}
						</div>
						{projects.map((project, idx) => (
							<ProjectCard
								key={idx}
								project={project}
								isactiveProject={isactiveProject}
							/>
						))}
					</div>
					<div className='flex flex-col mt-[4rem]'>
						<h2 className='mb-[1rem] sm:text-[48px] text-[36px] font-[700] font-south italic font-bold text-[#fc831a]'>
							<span className='sm:text-[74px] text-[60px]'>T</span>echnology
							Stack
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
