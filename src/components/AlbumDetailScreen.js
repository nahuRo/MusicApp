import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../services/fetchApi";
import TableTracks from "./TableTracks";

const AlbumDetailScreen = () => {
	const [album, setAlbum] = useState([]);
	const { idAlbum } = useParams();

	useEffect(() => {
		fetchFromAPI(`/album/${idAlbum}`).then((resp) => {
			setAlbum(resp);
		});
	}, [idAlbum]);

	return (
		<div className="xl:mx-24 mt-6">
			<div className="flex">
				<img src={album.cover_medium} alt={album.title} className="rounded-md" />
				<div className="ml-4">
					<span className="bg-slate-700 text-white text-xs px-1 pt-px pb-px rounded-sm">
						{album.explicit_content_cover > 0 ? "EXPLICIT" : ""}
					</span>
					<h2 className="text-3xl font-bold">{album.title}</h2>
					<div className="flex items-center pt-4 pb-3">
						<img
							src={album.artist && album.artist.picture_small}
							alt={album.artist && album.artist.name}
							className="rounded-full w-7"
						/>
						<h3 className="text-sm pl-3">{album.artist && album.artist.name}</h3>
					</div>
					<div className="flex items-center gap-4 text-xs">
						<span>{album.nb_tracks} canciones </span>
						<span>{album.duration / 60} </span> <span>{album.release_date}</span>
						<span>
							{new Intl.NumberFormat("en-US", {
								notation: "compact",
								// style: "unit",
							}).format(album.fans)}{" "}
							seguidores
						</span>
					</div>
				</div>
			</div>
			<div className="mt-5 p-6">
				<TableTracks tracks={album.tracks ? album.tracks.data : []} />
			</div>
		</div>
	);
};

export default AlbumDetailScreen;
