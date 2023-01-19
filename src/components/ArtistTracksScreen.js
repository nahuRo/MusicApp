import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableTacks from "./TableTracks";

import { fetchFromAPI } from "../services/fetchApi";
import ArtistNavBar from "./ArtistNavBar";

const ArtistTracksScreen = () => {
	const [tracks, setTracks] = useState([]);
	const { artistName } = useParams();

	useEffect(() => {
		fetchFromAPI(`/search?q=${artistName}&index=${0}&limit=50`).then((resp) => {
			const { data } = resp;
			setTracks(data);
		});
	}, [artistName]);

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
