import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArtistNavBar from "./ArtistNavBar";
import CardTape from "./CardTape";
import { fetchFromAPI } from "../services/fetchApi";

const ArtistAlbumScreen = () => {
	const [tapes, setTapes] = useState([]);
	const [loading, setLoading] = useState(false);

	const { artistName } = useParams();

	useEffect(() => {
		fetchApi(artistName);
	}, [artistName]);

	const fetchApi = async (artist) => {
		setLoading(true);

		const { data } = await fetchFromAPI(`/search?q=${artist}&index=${0}&limit=50`);
		setTapes(data);

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
				<div className="flex flex-wrap gap-8">
					{tapes.map((tape) => (
						<CardTape tape={tape} key={tape.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default ArtistAlbumScreen;
