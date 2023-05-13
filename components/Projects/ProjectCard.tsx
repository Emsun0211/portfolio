import Image from "next/image";
import React from "react";

const ProjectCard = () => {
	return (
		<div className='flex flex-col  mt-[2rem]'>
			<h2 className='mb-[1.5rem] text-[24px] font-[600]'>Jewel Store</h2>
			<div className='flex gap-x-[2rem] px-[2rem] border-l-[5px] border-l-gray-400 '>
				<div className=''>
					<Image
						src={"/jewelpics.png"}
						width={500}
						height={500}
						alt='Project'
					/>
				</div>

				<div className='w-[40%] leading-[32px]'>
					<p className='text-gray-500'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ea
						soluta illum consequuntur, nam dolores id vitae quam culpa ullam
						asperiores qui dignissimos illo doloremque! Ratione quas sint
						assumenda laborum, omnis sapiente reprehenderit officia non, commodi
						nulla iusto fuga quidem.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
