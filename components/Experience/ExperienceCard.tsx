import Image from "next/image";
import React from "react";

const ExperienceCard = ({ experience }: { experience: any }) => {
	return (
		<div className='w-[300px] h-[100%] border-b-[5px] border-b-[#fc831a] pl-[2rem]'>
			<Image
				src='/static/media/Group 9.f3c6bd8be4563228dd1c24381586968d.svg'
				alt=''
				width={5}
				height={100}
				className=''
			/>
			<h2 className='text-[20px] mb-[1rem]'>{experience.title} </h2>
			<p className='leading-loose'>{experience.description}</p>
			<p>{experience.period}</p>
		</div>
	);
};

export default ExperienceCard;
