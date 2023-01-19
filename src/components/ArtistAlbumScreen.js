import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArtistNavBar from "./ArtistNavBar";
import CardTape from "./CardTape";
import { fetchFromAPI } from "../services/fetchApi";

const ArtistAlbumScreen = () => {
	const [tapes, setTapes] = useState([]);
	const { artistName } = useParams();

	useEffect(() => {
		fetchFromAPI(`/search?q=${artistName}&index=${0}&limit=50`).then((resp) => {
			const { data } = resp;
			console.log(data);
			setTapes(data);
		});
	}, [artistName]);

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
