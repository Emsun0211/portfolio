import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<section className='bg-[#212529] bg-[#27323E] h-[90vh] w-[100%] text-[#fff] flex items-center justify-center'>
			<div className='w-[80%] mx-auto flex items-center justify-between '>
				<div className=' flex flex-col justify-center items-center relative'>
					<div className='w-[350px] h-[350px] p-1  flex items-center justify-center rounded-[20px]  bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] mb-[1.7rem]'>
						<div className='h-[100%] w-[100%] bg-gray-800 p-1 flex items-center justify-center rounded-[20px] hover:rotate-[20%]'></div>
						<div className='absolute'>
							<Image
								src={"/gbenga.png"}
								width={250}
								height={250}
								alt=''
								className='ml-[-20px] drop-shadow-xl'
							/>
						</div>
					</div>
					<h2 className='text-[36px] font-[700]'>Gbenga Akinnukawe</h2>
				</div>
				<div className='w-[40%] relative flex flex-col  justify-center'>
					<h2 className='text-[2rem] font-bold mb-[1rem] rounded-top'>
						About Me
					</h2>
					{/* <div className='w-[30px] h-[30px] bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] rounded-[50%] absolute left-[-2%] top-2 rounde-back'></div> */}
					<p className='mb-[0.75rem] text-[18px]'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure at
						sapiente in, hic voluptas suscipit? Accusamus ex debitis cum
						sapiente, repellat repellendus corporis impedit. Quasi?
					</p>
					<p className='text-[18px]'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure at
						sapiente in, hic voluptas suscipit? Accusamus ex debitis cum
						sapiente, repellat repellendus corporis impedit. Quasi?
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
