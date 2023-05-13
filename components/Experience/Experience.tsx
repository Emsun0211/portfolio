import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
	return (
		<section className='bg-[#212529] text-[#fff] w-[100%] h-[100vh] flex items-center  '>
			<div className='w-[90%]  mx-auto flex flex-col  h-[70vh] overflow-y-scroll  '>
				<h1 className='text-[74px] mt-[2rem] font-south italic pb-2  border-b-[5px] w-[200px] border-b-[#FC4A1A] mb-[2rem]'>
					Experience
				</h1>

				<div className='grid grid-cols-2 items-center w-[60%] mx-auto gap-x-[2rem]'>
					<ExperienceCard />
					<ExperienceCard />
					<ExperienceCard />
					<ExperienceCard />
				</div>
			</div>
		</section>
	);
};

export default Experience;
