import React from "react";
import { FaPlay } from "react-icons/fa";

const NormalCard = ({ img, name, description }) => {
	return (
		<div className="cursor-pointer">
			<div className="relative">
				<img src={img} alt={name} className="rounded-md w-64" />
				<span className="bg-white rounded-full w-9 h-9 absolute bottom-3 left-3 flex items-center justify-center">
					<FaPlay />
				</span>
			</div>
			<div className="pt-2">
				<h2>{name}</h2>
				<h4 className="text-xs">{description}</h4>
			</div>
		</div>
	);
};

export default NormalCard;
