import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableTacks from "./TableTracks";

import { fetchFromAPI } from "../services/fetchApi";
import ArtistNavBar from "./ArtistNavBar";

const ArtistTracksScreen = () => {
	const [tracks, setTracks] = useState([]);
	const [loading, setLoading] = useState(false);

	const { artistName } = useParams();

	useEffect(() => {
		fetchApi(artistName);
	}, [artistName]);

	const fetchApi = async (artist) => {
		setLoading(true);

		const { data } = await fetchFromAPI(`/search?q=${artist}&index=${0}&limit=50`);
		setTracks(data);

		setLoading(false);
	};

	if (loading) {
		return (
			<div className="h-full flex items-center justify-center flex-col gap-8">
				<span className="loader inline-block"></span>
				<h2>Loading ...</h2>
			</div>
		);
	}

	return (
		<>
			<ArtistNavBar />
			<div className="xl:mx-24 mt-6 px-6">
				<TableTacks tracks={tracks} />
			</div>
		</>
	);
};

export default ArtistTracksScreen;
