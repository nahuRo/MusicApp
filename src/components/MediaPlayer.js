import { useContext, useRef, useState, useEffect } from "react";
import { musicContext } from "../context/index";

import { BsPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { BsSkipEndFill } from "react-icons/bs";
import { BsSkipStartFill } from "react-icons/bs";

import { BsFillMicFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";

import { MdExplicit } from "react-icons/md";

import { fetchFromAPI } from "../services/fetchApi";

const MediaPlayer = () => {
	const { audio } = useContext(musicContext);
	const [songData, setSongData] = useState([]);

	let vols = undefined;

	// referencias, es como el getElementById que usabamos en js para manipular el DOM
	const refAudio = useRef();
	const progressBar = useRef();

	useEffect(() => {
		fetchFromAPI(`/track/${audio.id}`).then((resp) => {
			setSongData(resp);
		});
	}, [audio]);

	const handleProgress = (event) => {
		const { duration, currentTime } = event.target; // Desestructuración de objetos en JavaScript
		const porcentaje = (currentTime * 100) / duration;
		progressBar.current.style.width = porcentaje + "%";
	};

	return (
		<>
			<div className="flex items-center justify-around">
				{/* <button className="text-4xl">
					<BsSkipStartFill />
				</button> */}
				<button
					className="text-4xl"
					onClick={() => {
						refAudio.current.play(); // es un objeto por eso accedo a current y alli si puedo manipularlo
					}}
				>
					<BsPlayFill />
				</button>
				<button
					className="text-4xl"
					onClick={() => {
						refAudio.current.pause(); // es un objeto por eso accedo a current y alli si puedo manipularlo
					}}
				>
					<BsFillPauseFill />
				</button>

				{/* <button className="text-4xl">
					<BsSkipEndFill />
				</button> */}
			</div>
			<div className="flex flex-col items-center justify-center">
				<div>
					<span>
						<MdExplicit />
					</span>
					<span>{songData.artist && songData.title_short}</span> -
					<span> {songData.artist && songData.artist.name}</span>
				</div>
				<div
					id="contenedorBarra"
					className="bg-zinc-800 h-px w-8/12 rounded-md overflow-hidden"
				>
					<div ref={progressBar} className="bg-red-400 h-full"></div>
					<audio
						onTimeUpdate={handleProgress}
						src={audio.preview}
						ref={refAudio}
						autoPlay={true}
					></audio>
				</div>
			</div>
			<div className="flex items-center justify-around">
				<div>
					<button
						className="text-4xl"
						onClick={() => {
							refAudio.current.muted = false; // es un objeto por eso accedo a current y alli si puedo manipularlo
						}}
					>
						<BsFillMicFill />
					</button>
					<button
						className="text-4xl"
						onClick={() => {
							refAudio.current.muted = true; // es un objeto por eso accedo a current y alli si puedo manipularlo
						}}
					>
						<BsFillMicMuteFill />
					</button>
					<input
						type="range"
						max="1"
						min="0"
						step="0.01"
						id="barraVol"
						value={vols}
						onChange={(e) => {
							vols = e.target.value;
							refAudio.current.volume = vols;
						}}
					/>
				</div>
				<img
					src={songData.album && songData.album.cover_small}
					alt={songData.album && songData.title}
					className="rounded-md"
				/>
			</div>
		</>
	);
};

export default MediaPlayer;
