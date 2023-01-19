import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchFromAPI } from "../services/fetchApi";

import { musicContext } from "../context/index";

import TableTracks from "./TableTracks";

import CardTape from "./CardTape";

import ArtistNavBar from "./ArtistNavBar";

const ArtistScreen = () => {
	const { artistId } = useContext(musicContext);

	const [tracks, setTracks] = useState([]);
	const [artist, setArtist] = useState([]);

	const { artistName } = useParams();

	useEffect(() => {
		if (artistId) {
			fetchFromAPI(`/artist/${artistId}`).then((resp) => {
				setArtist(resp);
			});
		}
		fetchFromAPI(`/search?q=${artistName}&index=${0}&limit=5`).then((resp) => {
			const { data } = resp;
			setTracks(data);
		});
	}, [artistId, artistName]);

	return (
		<div className="">
			<ArtistNavBar />
			<div className="xl:mx-24">
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
							<span className="text-sm">
								{new Intl.NumberFormat("en-US", {
									notation: "compact",
									// style: "unit",
								}).format(artist.nb_fan)}
								seguidores
							</span>
							<br />
							<span className="bg-slate-700 text-white text-xs px-2 pt-px pb-px rounded-sm">
								{artist.type}
							</span>
						</div>
					</div>
				</div>
				<span className="border-b border-slate-200 block"></span>

				<div className="mt-5 p-6">
					<Link
						className="inline-block text-xl font-semibold pb-6 hover:text-red-400 cursor-pointer "
						to={`/artist/${artistName}/tracks`}
					>
						Canciones
					</Link>
					<TableTracks tracks={tracks} />
				</div>

				<div className="p-6">
					<Link
						className="inline-block text-xl font-semibold pb-6 hover:text-red-400 cursor-pointer "
						to={`/artist/${artistName}/album`}
					>
						Albúmes
					</Link>
					<div className="flex flex-wrap gap-8">
						{tracks.map((tape) => (
							<CardTape tape={tape} key={tape.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtistScreen;
