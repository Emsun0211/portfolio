import React from "react";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
export const Socials = () => {
	return (
		<div className='flex flex-col gap-y-[1rem] px-2 py-4'>
			<BsGithub className='text-[1.2rem]' />
			<ImTwitter className='text-[1.2rem]' />
			<FaLinkedinIn className='text-[1.2rem]' />
		</div>
	);
};
