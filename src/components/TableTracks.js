import { useContext } from "react";
import { musicContext } from "../context/index";

// import { TbMicrophone2 } from "react-icons/tb";
// import { TbHeartPlus } from "react-icons/tb";

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
					{tracks.map((track) => (
						<tr key={track.id} className="hover:text-red-300 ">
							<td className="flex justify-between py-2">
								<div className="flex items-center">
									<button onClick={() => setAudio(track)}>
										<img
											src={track.album.cover_small}
											alt=""
											className="w-3/4"
										/>
									</button>
									<span className="ml-4 cursor-pointer hover:underline">
										{track.title}
									</span>
								</div>
								{/* <div className="flex items-center">
                        <TbMicrophone2 className="text-lg" />
                        <TbHeartPlus />
                    </div> */}
							</td>
							<td>
								<span className="cursor-pointer hover:underline">
									{track.artist.name}
								</span>
							</td>
							<td>
								<span className="cursor-pointer hover:underline">
									{track.album.title}
								</span>
							</td>
							<td>
								<span className="cursor-pointer">
									{(track.duration / 60).toFixed(1)}
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
