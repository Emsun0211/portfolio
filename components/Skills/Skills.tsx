import Image from "next/image";
import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { BsGit } from "react-icons/bs";
import { FiTrello } from "react-icons/fi";
import { IoLogoSlack } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
	return (
		<div className='bg-[#27323E] w-[100%] h-[100vh] text-[#ffffff] pt-[2rem]'>
			<div className='w-[80%] mx-auto flex flex-col '>
				<h1 className='text-[2.5rem] font-bold mb-[2rem]'>
					Technologies and Tools
				</h1>
				<div className='flex justify-between '>
					<div>
						<h2 className='text-[1.5rem] mb-[1rem]'>Technologies</h2>
						<div>
							<p>HTML</p>
							<AiOutlineHtml5 className='text-[2rem] text-red-500' />
						</div>
						<div>
							<p>CSS(Tailwind, Bootsrap, Sass)</p>
							<TbBrandCss3 className='text-[2rem] text-red-500' />
						</div>
						<div>
							<p>Javascript</p>
							<IoLogoJavascript className='text-[2rem] text-red-500' />
						</div>
						<div>
							<p>React</p>
							<GrReactjs className='text-[2rem] text-red-500' />
						</div>
						<div>
							<p>Nextjs</p>
							<TbBrandNextjs className='text-[2rem] text-red-500' />
						</div>
						<div>
							<p>Nodejs</p>
							<DiNodejs className='text-[2rem] text-red-500' />
						</div>
					</div>
					<div>
						<h2 className='text-[1.5rem] mb-[1rem]'>Tools</h2>
						<div>
							<p>Github</p>
							<BsGithub className='text-[2rem] text-red-500' />
						</div>
						<div>
							<p>Git</p>
							<BsGit className='text-[2rem] text-red-500' />
						</div>
						<div>
							<p>Trello</p>
							<FiTrello className='text-[2rem] text-red-500' />
						</div>
						<div>
							<p>Slack</p>
							<IoLogoSlack className='text-[2rem] text-red-500' />
						</div>
						<div>
							<p>Vscode</p>
							<TbBrandVscode className='text-[2rem] text-red-500' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
