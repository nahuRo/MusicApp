import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import NavBarArtist from "./NavBarArtist";
import { fetchFromAPI } from "../services/fetchApi";

const DisplayAlbum = () => {
	const [tapes, setTapes] = useState([]);
	const { artistName } = useParams();

	useEffect(() => {
		fetchFromAPI(`/search?q=${artistName}&index=${0}&limit=50`).then((resp) => {
			const { data } = resp;
			setTapes(data);
		});
	}, [artistName]);

	return (
		<>
			<NavBarArtist />
			<div className="flex flex-wrap gap-4">
				{tapes.map((tape) => (
					<div className="w-60 h-60">
						<Link className="" to={`/album/${tape.album.id}`}>
							<img
								src={tape.album.cover_medium}
								alt={tape.album.title}
								className="w-full"
							/>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default DisplayAlbum;
