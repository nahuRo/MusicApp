import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchFromAPI } from "../services/fetchApi";

import TableTracks from "./TableTracks";

import CardTape from "./CardTape";

import ArtistNavBar from "./ArtistNavBar";

const ArtistScreen = () => {
	const [tracks, setTracks] = useState([]);
	const [artist, setArtist] = useState([]);
	const [loading, setLoading] = useState(false);

	const { artistName } = useParams();

	useEffect(() => {
		fetchApi(artistName);
	}, [artistName]);

	const fetchApi = async (artist) => {
		setLoading(true);
		const { data } = await fetchFromAPI(`/search?q=${artist}&index=${0}&limit=5`);
		setTracks(data);

		const artistInfo = await fetchFromAPI(`/artist/${data[0].artist.id}`);
		setArtist(artistInfo);
		setLoading(false);
	};

	if (loading) {
		return (
			<div className="h-full flex items-center justify-center flex-col gap-8">
				<span className="loader inline-block"></span>
				<h2 className="text-lg">Loading ...</h2>
			</div>
		);
	}

	return (
		<>
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
					<TableTracks tracks={tracks} AddFav={true} />
				</div>

				<div className="p-6">
					<Link
						className="inline-block text-xl font-semibold pb-6 hover:text-red-400 cursor-pointer "
						to={`/artist/${artistName}/album`}
					>
						Albúmes
					</Link>
					<div className="flex flex-wrap gap-8 justify-between">
						{tracks.map((tape) => (
							<CardTape tape={tape} key={tape.id} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ArtistScreen;
