import React from "react";

const GenCard = ({ gradient, gender }) => {
	return (
		<div
			className={`w-[264px] h-[134px] flex items-center justify-center rounded-md ${gradient} cursor-pointer`}
		>
			<h1 className="text-white text-xl font-bold">{gender}</h1>
		</div>
	);
};

export default GenCard;
