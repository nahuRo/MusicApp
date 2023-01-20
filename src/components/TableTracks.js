import { useContext } from "react";
import { Link } from "react-router-dom";
import { musicContext } from "../context/index";

import { MdExplicit } from "react-icons/md";

const setDuration = (seconds) => {
	let minute = Math.floor((seconds / 60) % 60);
	minute = minute < 10 ? "0" + minute : minute;
	let second = seconds % 60;
	second = second < 10 ? "0" + second : second;
	return minute + ":" + second;
};

const TableTracks = ({ tracks }) => {
	const { setAudio } = useContext(musicContext);
	return (
		<>
			<table className="w-full">
				<thead className="text-start">
					<tr className="text-left border-b border-slate-200">
						<th>Canción</th>
						<th>Artista</th>
						<th>Album</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{tracks.map((track, index, arrayobj) => (
						<tr key={track.id} className="hover:text-red-300 ">
							<td className="flex justify-between py-2">
								<div className="flex items-center">
									<button onClick={() => setAudio([track.id, arrayobj])}>
										<img
											src={track.album.cover_small}
											alt={track.album.title}
											className="w-3/4"
										/>
									</button>
									<span className="ml-4 cursor-pointer hover:underline">
										{track.title.length > 40
											? `${track.title.slice(0, 40)} ...`
											: track.title}
									</span>
									{track.explicit_lyrics ? (
										<MdExplicit className="ml-2" />
									) : (
										""
									)}
								</div>
							</td>
							<td>
								<Link
									className="cursor-pointer hover:underline"
									to={`/artist/${track.artist.name}`}
								>
									{track.artist.name}
								</Link>
							</td>
							<td>
								<Link
									className="cursor-pointer hover:underline"
									to={`/album/${track.album.id}`}
								>
									{track.album.title.length > 40
										? `${track.album.title.slice(0, 40)} ...`
										: track.album.title}
								</Link>
							</td>
							<td>
								<span className="cursor-pointer">
									{setDuration(track.duration)}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TableTracks;
