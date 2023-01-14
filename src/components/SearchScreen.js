import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../services/fetchApi";

import { musicContext } from "../context/index";

import TableTracks from "./TableTracks";
import CardsAlbums from "./CardsAlbums";

import NavBarArtist from "./NavBarArtist";

const SearchScreen = () => {
	const { artistId } = useContext(musicContext);

	const [tracks, setTracks] = useState([]);
	const [artist, setArtist] = useState([]);

	const { artistName } = useParams();

	useEffect(() => {
		if (artistId) {
			fetchFromAPI(`/artist/${artistId}`).then((resp) => {
				setArtist(resp);
			});

			fetchFromAPI(`/search?q=${artistName}&index=${0}&limit=5`).then((resp) => {
				const { data } = resp;
				setTracks(data);
			});
		}
	}, [artistId, artistName]);

	return (
		<div className="">
			<NavBarArtist />
			<div className="xl:mx-10">
				<div className="p-6">
					<span className="text-xl font-semibold pb-8">Mejor resultado</span>
					<div className="flex items-center">
						<img
							src={artist.picture_medium}
							alt={artist.name}
							className="rounded-full w-40 my-5"
						/>
						<div className="pl-8 text-slate-500">
							<h2 className="text-base">{artist.name}</h2>
							{/* <span>n albums {artist.nb_album}</span> */}
							{/* <br /> */}
							<span className="text-sm">{artist.nb_fan} seguidores</span>
							<br />
							<span className="bg-slate-700 text-white text-xs px-2 pt-px pb-px rounded-sm">
								{artist.type}
							</span>
						</div>
					</div>
				</div>
				<span className="border-b border-slate-200 block"></span>

				<div className="mt-5 p-6">
					<h2 className="text-xl font-semibold pb-6">Canciones </h2>
					<TableTracks tracks={tracks} />
				</div>

				<div className="p-6">
					<h2 className="text-xl font-semibold pb-6">Albúmes</h2>
					<CardsAlbums albums={tracks} />
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
