import { Link, NavLink } from "react-router-dom";

import { BsFileEarmarkMusicFill } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { BsBookHalf } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

import { BsXDiamondFill } from "react-icons/bs";

const SideBar = () => {
	let pageButtonActive = {
		color: "#f87171",
	};

	return (
		<>
			<div className="row-span-1 justify-self-center mt-4">
				<Link className="" to={"/"}>
					<BsXDiamondFill className="inline-block text-3xl text-slate-900" />
					<span className="ml-3">Dezzerrsd</span>
				</Link>
			</div>

			<ul className="px-4 mt-6 row-span-2">
				<li className="text-slate-900 hover:text-red-400 cursor-pointer max-w-3xl mb-4">
					<NavLink
						className="text-xl"
						to={"/sss"}
						style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
					>
						<BsFileEarmarkMusicFill className="inline-block" />
						<span className="ml-3">Música</span>
					</NavLink>
				</li>
				<li className="text-slate-900 hover:text-red-400 cursor-pointer mb-4">
					<NavLink
						className="text-xl"
						to={"/a"}
						style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
					>
						<BsMicFill className="inline-block" />
						<span className="ml-3">Radio</span>
					</NavLink>
				</li>
				<li className="text-slate-900 hover:text-red-400 cursor-pointer mb-4">
					<NavLink
						className="text-xl"
						to={"/v"}
						style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
					>
						<BsBookHalf className="inline-block" />
						<span className="ml-3">Explorar</span>
					</NavLink>
				</li>
				<li className="text-slate-900 hover:text-red-400 cursor-pointer mb-4">
					<NavLink
						className="text-xl"
						to={"/profile"}
						style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
					>
						<BsHeartFill className="inline-block" />
						<span className="ml-3">Favoritos</span>
					</NavLink>
				</li>
			</ul>
		</>
	);
};

export default SideBar;
