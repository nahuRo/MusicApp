import { useContext } from "react";
import { Link } from "react-router-dom";
import { musicContext } from "../context/index";

import { MdExplicit } from "react-icons/md";
import { TbMicrophone2 } from "react-icons/tb";
import { BsHeartFill } from "react-icons/bs";
import { BsMusicNoteList } from "react-icons/bs";

import toast, { Toaster } from "react-hot-toast";

const setDuration = (seconds) => {
	let minute = Math.floor((seconds / 60) % 60);
	minute = minute < 10 ? "0" + minute : minute;
	let second = seconds % 60;
	second = second < 10 ? "0" + second : second;
	return minute + ":" + second;
};

const TableTracks = ({ tracks, AddFav }) => {
	const { setAudio, setFavTracks, favTracks } = useContext(musicContext);

	const handleFav = (e, track) => {
		toast.success("Add", {
			duration: 1000,
			position: "top-center",

			// Styling
			style: {
				paddingRight: "25px",
				paddingLeft: "25px",
				backgroundColor: "#fee2e2",
			},

			// Custom Icon
			icon: <BsMusicNoteList />,
		});

		if (!favTracks.find((trk) => trk.id === track.id)) {
			e.target.classList.add("fill-red-400");
			return setFavTracks([...favTracks, track]);
		}
		e.target.classList.remove("fill-red-400");
	};

	return (
		<>
			<table className="w-full">
				<thead className="text-start">
					<tr className="text-left border-b border-slate-200 text-slate-400">
						<th className="font-light">Canción</th>
						<th className="font-light">Artista</th>
						<th className="font-light">Álbum</th>
						<th className="font-light">Time</th>
					</tr>
				</thead>
				<tbody>
					{tracks.map((track, index, arrayobj) => (
						<tr key={track.id} className="hover:text-red-300 ">
							<td className="flex justify-between py-2 pr-4">
								<div className="flex items-center">
									<button onClick={() => setAudio([track.id, arrayobj])}>
										<img
											src={track.album.cover_small}
											alt={track.album.title}
											className="w-3/4"
										/>
									</button>
									<button onClick={() => setAudio([track.id, arrayobj])}>
										<span className="ml-4 cursor-pointer hover:underline">
											{track.title.length > 40
												? `${track.title.slice(0, 40)} ...`
												: track.title}
										</span>
									</button>
									{track.explicit_lyrics ? (
										<MdExplicit className="ml-2" />
									) : (
										""
									)}
								</div>
								<div className="flex items-center gap-4">
									{track.explicit_lyrics && (
										<button
											onClick={() => {
												toast.error("This didn't work.", {
													duration: 1000,
													position: "top-center",

													// Styling
													style: {
														paddingRight: "25px",
														paddingLeft: "25px",
														backgroundColor: "#fee2e2",
													},
												});
											}}
										>
											<TbMicrophone2 />
										</button>
									)}
									{AddFav && (
										<button onClick={(e) => handleFav(e, track)}>
											<BsHeartFill />
										</button>
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
			<Toaster />
		</>
	);
};

export default TableTracks;
