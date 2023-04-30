import "./App.css";
import { motion } from "framer-motion";
import { logo } from "./images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faTwitter,
	faInstagram,
	faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { HeroDesktop } from "./images/desktop";
import { HeroMobile } from "./images/mobile";
import Navbar from "./components/Navbar";
function App() {
	// Framer Motion Animation
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
			},
		},
	};
	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	const fadeIn = (direction, type, delay, duration) => ({
		hidden: {
			x: direction === "left" ? 400 : direction === "right" ? -200 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			opacity: 1,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut",
			},
		},
	});

	return (
		<div className="App">
			{/* Background Photo */}
			<div className="bg min-h-[120vh] lg:min-h-[80vh]">
				{/* Header */}
				<header className="p-4">
					<Navbar />
				</header>
				{/* Hero Section */}
				<section className="border-white border-2 p-6 w-[85%] mx-auto mt-56 lg:w-[50%] lg:p-10 lg:mx-0 lg:mt-20 lg:ml-24 ">
					<h1 className="text-white text-5xl font-thin uppercase text-left w-[80%] lg:text-[4rem] lg:w-[90%]">
						{" "}
						Immersive experiences that deliver
					</h1>
				</section>
			</div>
			<motion.main
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.2 }}
				className="bg-white pt-32 lg:mt-24"
			>
				<motion.div
					variants={fadeIn("right", "tween", 0.25, 1)}
					className="lg:flex lg:w-[80%] lg:justify-center"
				>
					<picture>
						<source media="(max-width: 768px)" srcSet={HeroMobile} />
						<source media="(min-width: 768px)" srcSet={HeroDesktop} />
						<img
							src={HeroDesktop}
							alt="hero"
							className="w-[90%] lg:w-[100%] mx-auto"
						/>
					</picture>
					<motion.div
						variants={fadeIn("left", "tween", 0.25, 1)}
						className="lg:flex lg:flex-col lg:w-[40%] lg:h-[40%] lg:ml-[-10rem] lg:mt-[12rem] lg:bg-white  lg:text-left lg:pt-12 lg:pl-12 lg:pb-4"
					>
						<h1 className="uppercase text-4xl font-thin w-[80%] mx-auto mt-12 lg:mx-0 lg:mt-4">
							{" "}
							The leader in interactive VR
						</h1>
						<p className="mt-8 leading-8 text-gray w-[80%] mx-auto tracking-[.1rem] text-center lg:w-[100%] lg:text-left lg:mx-0 ">
							Founded in 2011, Loopstudios has been producing world-class
							virtual reality projects for some of the best companies around the
							globe. Our award-winning creations have transformed businesses
							through digital experiences that bind to their brand.
						</p>
					</motion.div>
				</motion.div>
				{/* Creation Title */}
				<div className="lg:flex  lg:w-[80%] lg:items-center lg:align-middle lg:mt-40 lg:mx-auto">
					<h1 className=" uppercase text-5xl font-thin mt-24 lg:text-left lg:w-[80%] lg:mx-0 lg:mt-0">
						{" "}
						Our creations
					</h1>
					<button className="uppercase font-normal text-black border-[2px] tracking-[.5rem] p-3 w-[50%] mt-4 border-black mx-auto hidden lg:block lg:w-[20%] lg:mt-0 hover:bg-black hover:text-white">
						{" "}
						SEE ALL
					</button>
				</div>
				{/* Grid */}
				<motion.div
					className="grid grid-cols-1 w-[90%] justify-center mx-auto gap-6 lg:grid-cols-4 lg:w-[80%] mt-12 pb-24"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.25 }}
				>
					{/* Earth Card */}
					<div
						className="earth uppercase text-4xl font-thin text-white text-left p-4 h-[150px] flex items-end lg:h-[500px] lg:p-8 lg:hover:text-black lg:hover:cursor-pointer"
						variants={item}
					>
						Deep
						<br />
						Earth
					</div>
					{/* Arcade Card */}
					<motion.div
						className="arcade uppercase text-4xl font-thin text-white text-left p-4 h-[150px] flex items-end lg:h-[500px] lg:p-8 lg:hover:text-black lg:hover:cursor-pointer"
						variants={item}
					>
						Night
						<br />
						Arcade
					</motion.div>
					{/* Soccer Card */}
					<motion.div
						className="soccer uppercase text-4xl font-thin text-white text-left p-4 h-[150px] flex items-end lg:h-[500px] lg:p-8 lg:hover:text-black lg:hover:cursor-pointer"
						variants={item}
					>
						Soccer
						<br />
						Team Vr
					</motion.div>
					{/* Grid Card */}
					<motion.div
						className="police  uppercase text-4xl font-thin text-white text-left p-4 h-[150px] flex items-end lg:h-[500px] lg:p-8 lg:hover:text-black lg:hover:cursor-pointer"
						variants={item}
					>
						The
						<br />
						Grid
					</motion.div>
					{/* Above Card */}
					<motion.div
						className="above uppercase text-4xl font-thin text-white text-left p-4 h-[150px] flex items-end lg:h-[500px] lg:p-8 lg:hover:text-black lg:hover:cursor-pointer"
						variants={item}
					>
						From Up
						<br />
						Above Vr
					</motion.div>
					{/* Borealis Card */}
					<motion.div
						className="borealis uppercase text-4xl font-thin text-white text-left p-4 h-[150px] flex items-end lg:h-[500px] lg:p-8 lg:hover:text-black lg:hover:cursor-pointer"
						variants={item}
					>
						Pocket
						<br />
						Borealis
					</motion.div>
					{/* Curiosity Card */}
					<motion.div
						className=" curiosity uppercase text-4xl font-thin text-white text-left p-4 h-[150px] flex items-end lg:h-[500px] lg:p-8 lg:hover:text-black lg:hover:cursor-pointer"
						variants={item}
					>
						The
						<br />
						Curiosity
					</motion.div>
					{/* Fisheye Card */}
					<motion.div
						className="fisheye uppercase text-4xl font-thin text-white text-left p-4 h-[150px] flex items-end lg:h-[500px] lg:p-8 lg:hover:text-black lg:hover:cursor-pointer"
						variants={item}
					>
						Make it
						<br />
						Fisheye
					</motion.div>
					<button className="uppercase font-normal text-black border-[2px] tracking-[.5rem] p-3 w-[50%] mt-4 border-black mx-auto lg:hidden hover:bg-black hover:text-white">
						see all
					</button>
				</motion.div>
			</motion.main>
			<footer className="bg-black text-white flex flex-col items-center justify-start lg:flex-row lg:justify-between lg:pb-8">
				<div className="lg:flex lg:flex-col lg:w-[40%] lg:ml-20">
					<img
						src={logo}
						alt="footer logo"
						className="pt-12 lg:pt-4 lg:w-[30%]"
					/>
					<ul className="flex flex-col gap-6 mt-12 lg:flex-row lg:mt-8">
						<li className="text-xl hover:underline hover:underline-offset-8 hover:cursor-pointer">
							About
						</li>
						<li className="text-xl hover:underline hover:underline-offset-8 hover:cursor-pointer">
							Careers
						</li>
						<li className="text-xl hover:underline hover:underline-offset-8 hover:cursor-pointer">
							Events
						</li>
						<li className="text-xl hover:underline hover:underline-offset-8 hover:cursor-pointer">
							Products
						</li>
						<li className="text-xl hover:underline hover:underline-offset-8 hover:cursor-pointer">
							Support
						</li>
					</ul>
				</div>
				{/* Social Icons */}
				<div className="lg:flex lg:flex-col pb-12 gap-4 lg:mr-16">
					<div className="flex mb-4 lg:mb-0 gap-4 items-center justify-center mt-12 lg:mt-0 lg:pt-12">
						<FontAwesomeIcon
							icon={faFacebookSquare}
							className="text-3xl hover:text-blue-500 hover:cursor-pointer"
						/>
						<FontAwesomeIcon
							icon={faTwitter}
							className="text-3xl hover:text-blue-400 hover:cursor-pointer"
						/>
						<FontAwesomeIcon
							icon={faPinterest}
							className="text-3xl hover:text-red-400 hover:cursor-pointer"
						/>
						<FontAwesomeIcon
							icon={faInstagram}
							className="text-3xl hover:text-purple-400 hover:cursor-pointer"
						/>
					</div>

					<span className="text-gray mt-6  lg:pb-0">
						{" "}
						© 2021 Loopstudios. All rights reserved.
					</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
