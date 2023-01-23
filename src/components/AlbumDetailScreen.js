import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../services/fetchApi";
import TableTracks from "./TableTracks";

const AlbumDetailScreen = () => {
	const [album, setAlbum] = useState([]);
	const [loading, setLoading] = useState(false);

	const { idAlbum } = useParams();

	useEffect(() => {
		fetchApi(idAlbum);
	}, [idAlbum]);

	const fetchApi = async (id) => {
		setLoading(true);

		const data = await fetchFromAPI(`/album/${id}`);
		setAlbum(data);

		setLoading(false);
	};

	const setDuration = (seconds) => {
		let minute = Math.floor((seconds / 60) % 60);
		minute = minute < 10 ? "0" + minute : minute;

		return minute;
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
					<div className="flex items-center gap-1 text-xs text-slate-500">
						<span>{album.nb_tracks} canciones </span>
						<span> - </span>
						<span>{setDuration(album.duration)} minutos</span>
						<span> - </span>
						<span>{album.release_date}</span>
						<span> - </span>
						<span>
							{new Intl.NumberFormat("en-US", {
								notation: "compact",
							}).format(album.fans)}
							seguidores
						</span>
					</div>
				</div>
			</div>
			<div className="mt-5 p-6">
				<TableTracks tracks={album.tracks ? album.tracks.data : []} AddFav={true} />
			</div>
		</div>
	);
};

export default AlbumDetailScreen;
