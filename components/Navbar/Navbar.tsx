import Link from "next/link";
import React, { useState } from "react";
import { HiViewList } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";

const Navbar = () => {
	interface navmenu {
		name: string;
		path: string;
	}
	const navmenu: navmenu[] = [
		{ name: "Home", path: "/" },
		{ name: "Projects", path: "/projects" },
		{ name: "Contact", path: "contact" },
	];
	const [active, setActive] = useState("Home");
	const [navOpen, setnavOpen] = useState(false);
	return (
		<nav className='bg-[#212529] pt-[1rem] fixed top-0 right-0 left-0 text-[#fff] '>
			<div className='flex justify-between items-center w-[90%] mx-auto'>
				<div>
					<Link href={"/"}>
						<h1 className='text-[2.5rem]  font-[700]'>
							G<span className='text-[#fc831a]  '>A</span>
						</h1>
					</Link>
				</div>

				<div className='sm:flex  text-[1.2rem] items-center justify-center hidden cursor-pointer gap-x-[4rem]'>
					{navmenu.map((item, index) => {
						return (
							<ul key={index}>
								<Link
									href={`/${item.path}`}
									onClick={() => setActive(item.name)}>
									<li
										className={`${
											active === item.name
												? "text-[#fc831a] border-b-[2px]  border-b-[#fc831a]"
												: "text-white"
										}`}>
										{item.name}
									</li>
								</Link>
							</ul>
						);
					})}
				</div>

				<Link href={"/contact"}>
					<div className=' bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] p-2 rounded-[10px] sm:w-[100px] text-center hidden sm:block'>
						Contact
					</div>
				</Link>
				<div
					className=' bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] p-2 rounded-[10px] sm:w-[100px] text-center block sm:hidden'
					onClick={() => setnavOpen(!navOpen)}>
					<HiViewList className='text-[1.8rem] ' />
				</div>
			</div>
			{/* Navbar for small screen */}
			{navOpen && (
				<ul
					className='flex  text-[1.2rem] items-center justify-center   h-[100vh] w-[100%] z-100 sm:hidden'
					onClick={() => setnavOpen(false)}>
					<div className='grid grid-cols-2 gap-4'>
						<Link
							href='/'
							className='flex flex-col items-center justify-center p-2 bg-gray-500 drop-shadow-l rounded-[50%] w-[100px] h-[100px]'>
							<AiFillHome />
							<li>Home</li>
						</Link>
						<Link
							href='projects'
							className='flex flex-col items-center justify-center p-2 bg-gray-500 drop-shadow-l rounded-[50%] w-[100px] h-[100px]'>
							<BsFillBriefcaseFill />
							<li>Project</li>
						</Link>

						<Link
							href='/contact'
							className='flex flex-col items-center justify-center p-2 bg-gray-500 drop-shadow-l rounded-[50%] w-[100px] h-[100px]'>
							<IoMdContacts />
							<li>Contact</li>
						</Link>
					</div>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
