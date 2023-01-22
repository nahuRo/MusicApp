import React from "react";
import { Link } from "react-router-dom";

import { FaPlay } from "react-icons/fa";

const CardTape = ({ tape }) => {
	return (
		<div className="">
			<div className="relative">
				<Link className="" to={`/album/${tape.album.id}`}>
					<img
						src={tape.album.cover_medium}
						alt={tape.album.title}
						className="rounded-md w-64"
					/>
				</Link>
				<span className="bg-white rounded-full w-9 h-9 absolute bottom-3 left-3 flex items-center justify-center">
					<FaPlay />
				</span>
			</div>
			<div className="pt-2">
				<h2>
					{tape.title.length > 40 ? `${tape.title.slice(0, 30)} ...` : tape.title}
				</h2>
				<h4 className="text-xs">de {tape.artist.name}</h4>
			</div>
		</div>
	);
};

export default CardTape;
