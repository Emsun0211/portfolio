import Link from "next/link";
import React from "react";
import { HiViewList } from "react-icons/hi";

const Navbar = () => {
	return (
		<nav className='bg-[#212529] pt-[1rem] fixed top-0 right-0 left-0 text-[#fff] '>
			<div className='flex justify-between items-center w-[90%] mx-auto'>
				<div>
					<Link href={"/"}>
						<h1 className='text-[2.5rem]  font-[700]'>
							G<span className='text-[#FC4A1A]  '>A</span>
						</h1>
					</Link>
				</div>
				<ul className='sm:flex gap-x-[2rem] text-[1.2rem] items-center hidden'>
					<Link href='/'>
						<li>Home</li>
					</Link>
					<Link href='projects'>
						<li>Project</li>
					</Link>
					<Link href='/experience'>
						<li>Experience</li>
					</Link>
				</ul>
				<Link href={"/contact"}>
					<div className=' bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] p-2 rounded-[10px] sm:w-[100px] text-center hidden sm:block'>
						Contact
					</div>
				</Link>
				<div className=' bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] p-2 rounded-[10px] sm:w-[100px] text-center block sm:hidden'>
					<HiViewList className='text-[1.8rem] ' />
				</div>
			</div>
			<ul className='flex flex-col gap-y-[3rem] gap-x-[2rem] text-[1.2rem] items-center h-[100vh] w-[100%] z-100 mt-[3rem] sm:hidden'>
				<Link href='/'>
					<li>Home</li>
				</Link>
				<Link href='projects'>
					<li>Project</li>
				</Link>
				<Link href='/experience'>
					<li>Experience</li>
				</Link>
				<Link href='/contact'>
					<li>Contact</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
