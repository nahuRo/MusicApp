import React from "react";

const CatCard = ({ img, category }) => {
	return (
		<div className="relative text-center cursor-pointer">
			<img src={img} alt={category} className="rounded-md " />
			<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
				{category}
			</h1>
		</div>
	);
};

export default CatCard;
