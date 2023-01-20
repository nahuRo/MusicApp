import React from "react";
import { useParams, NavLink } from "react-router-dom";

const ArtistNavBar = () => {
	const { artistName } = useParams();

	const pageButtonActive = {
		color: "#000",
		fontWeight: "bold",
	};

	return (
		<div className="block shadow-sm relative pt-12 h-24">
			<ul className="h-full flex items-center justify-start gap-x-8 text-lg font-medium cursor-pointer text-slate-500 hover:text-black px-6 xl:mx-24">
				<li className="h-full relative">
					<NavLink
						style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
						className="hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-orange-400 hover:after:w-full hover:after:h-0.5 "
						to={`/artist/${artistName}/`}
					>
						Todos
					</NavLink>
				</li>
				<li className="h-full relative">
					<NavLink
						style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
						className="hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-orange-400 hover:after:w-full hover:after:h-0.5 "
						to={`/artist/${artistName}/tracks`}
					>
						Canciones
					</NavLink>
				</li>
				<li className="h-full relative">
					<NavLink
						style={({ isActive }) => (isActive ? pageButtonActive : undefined)}
						className="hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-orange-400 hover:after:w-full hover:after:h-0.5 "
						to={`/artist/${artistName}/album`}
					>
						Álbumes
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default ArtistNavBar;
