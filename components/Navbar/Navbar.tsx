import Link from "next/link";
import React, { useState } from "react";
import { HiViewList } from "react-icons/hi";

const Navbar = () => {
	interface navmenu {
		name: string;
		path: string;
	}
	const navmenu: navmenu[] = [
		{ name: "Home", path: "/" },
		{ name: "Projects", path: "/projects" },
		{ name: "Experience", path: "experience" },
	];
	const [active, setActive] = useState("Home");
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
				{/* <ul className='sm:flex gap-x-[2rem] text-[1.2rem] items-center hidden cursor-pointer'>
					<Link href='/'>
						<li className='text-[#fc831a] border-b-[2px]  border-b-[#fc831a] '>
							Home
						</li>
					</Link>
					<Link href='projects'>
						<li>Project</li>
					</Link>
					<Link href='/experience'>
						<li>Experience</li>
					</Link>
				</ul> */}
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
				<div className=' bg-gradient-to-r from-[#FC4A1A] to-[#F7B733] p-2 rounded-[10px] sm:w-[100px] text-center block sm:hidden'>
					<HiViewList className='text-[1.8rem] ' />
				</div>
			</div>
			{/* <ul className='flex flex-col gap-y-[3rem] gap-x-[2rem] text-[1.2rem] items-center h-[100vh] w-[100%] z-100 mt-[3rem] sm:hidden'>
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
			</ul> */}
		</nav>
	);
};

export default Navbar;
