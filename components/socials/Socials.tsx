import React from "react";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
export const Socials = () => {
	return (
		<div className='flex flex-col gap-y-[1rem] px-2 py-4'>
			<Link href={"https://github.com/Emsun0211"}>
				<BsGithub className='text-[1.2rem]' />
			</Link>
			<Link href='https://twitter.com/Emiloluwa'>
				<ImTwitter className='text-[1.2rem]' />
			</Link>
			<Link href='https://www.linkedin.com/in/akinnukawe-gbenga/'>
				<FaLinkedinIn className='text-[1.2rem]' />
			</Link>
		</div>
	);
};
