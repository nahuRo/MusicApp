import React from "react";

const CardsAlbums = ({ albums }) => {
	return (
		<div className="flex">
			{albums.map((album) => (
				<img src={album.album.cover_medium} alt={album.album.title} className="" />
			))}
		</div>
	);
};

export default CardsAlbums;
