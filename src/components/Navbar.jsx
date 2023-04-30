import React, { useState } from "react";
import { logo } from "../images";

const Navbar = () => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);
	return (
		<nav className=" p-8 flex justify-between  lg:mx-8">
			<img src={logo} alt="logo" className="w-[35%] lg:w-[18%] z-10" />
			<button
				className="flex flex-col gap-[5px] lg:hidden ml-60 lg:ml-0 z-10 open"
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}
			>
				<span
					className="border-2 border-white w-8 rounded-lg"
					id="nav-icon"
				></span>
				<span
					className="border-2 border-white w-8 rounded-lg"
					id="nav-icon"
				></span>
				<span
					className="border-2 border-white w-8 rounded-lg"
					id="nav-icon"
				></span>
			</button>
			<div
				className={
					isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
				}
			>
				<ul className="lg:flex hidden text-white gap-2 lg:text-xl">
					<li className="text-4xl text-left hover:underline hover:underline-offset-8 hover:cursor-pointer lg:text-xl py-2">
						About
					</li>
					<li className="text-4xl text-left  hover:underline hover:underline-offset-8 hover:cursor-pointer lg:text-xl py-2">
						Careers
					</li>
					<li className="text-4xl text-left  hover:underline hover:underline-offset-8 hover:cursor-pointer lg:text-xl py-2">
						Events
					</li>
					<li className="text-4xl text-left  hover:underline hover:underline-offset-8 hover:cursor-pointer lg:text-xl py-2">
						Products
					</li>
					<li className="text-4xl text-left  hover:underline hover:underline-offset-8 hover:cursor-pointer lg:text-xl py-2">
						Support
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
