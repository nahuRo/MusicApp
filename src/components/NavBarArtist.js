import React from "react";
import { useParams, NavLink } from "react-router-dom";

const NavBarArtist = () => {
	const { artistName } = useParams();

	return (
		<>
			<div className="pt-12 flex items-center justify-start gap-x-8 xl:mx-16">
				<ul className="text-lg font-medium cursor-pointer text-slate-500 hover:text-black">
					<NavLink className="" to={`/artist/${artistName}`}>
						Todos
					</NavLink>
				</ul>
				<ul className="text-lg font-medium cursor-pointer text-slate-500 hover:text-black">
					<NavLink className="" to={`/artist/${artistName}/tracks`}>
						Canciones
					</NavLink>
				</ul>
				<ul className="text-lg font-medium cursor-pointer text-slate-500 hover:text-black">
					<NavLink className="" to={`/artist/${artistName}/album`}>
						Álbumes
					</NavLink>
				</ul>
			</div>
			<span className="block shadow-sm h-2"></span>
		</>
	);
};

export default NavBarArtist;
