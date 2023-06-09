import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/utils/experience";

const Experience = () => {
	return (
		<section className='bg-[#212529] text-[#fff] w-[100%] h-[100vh] flex items-center  '>
			<div className='w-[90%]  mx-auto flex flex-col  h-[70vh] overflow-y-scroll  '>
				<h1 className='text-[74px] mt-[2rem] font-south italic text-[#fc831a]'>
					Experience
				</h1>

				<div className='grid grid-cols-2 items-center w-[60%] mx-auto gap-x-[2rem] gap-y-[2rem]'>
					{experience.map((experience, idx) => (
						<ExperienceCard key={idx} experience={experience} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
