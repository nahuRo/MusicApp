import { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { musicContext } from "../context/index";

import { BsPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
// import { BsSkipEndFill } from "react-icons/bs";
// import { BsSkipStartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

import { BsFillMicFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";

// import { MdReplay } from "react-icons/md";

import { MdExplicit } from "react-icons/md";

import { fetchFromAPI } from "../services/fetchApi";

const MediaPlayer = () => {
	const { audio } = useContext(musicContext);
	const [songData, setSongData] = useState([]);
	const [play, setPlay] = useState(false);

	let vols = undefined;

	// referencias, es como el getElementById que usabamos en js para manipular el DOM
	const refAudio = useRef();
	const progressBar = useRef();
	let currentT = useRef();
	let totalT = useRef();

	const refFinish = useRef();

	useEffect(() => {
		setPlay(true);
		if (audio) {
			fetchFromAPI(`/track/${audio}`).then((resp) => {
				setSongData(resp);
				setPlay(false);
			});
		}
	}, [audio]);
	const handleProgress = (event) => {
		const { duration, currentTime } = event.target; // Desestructuración de objetos en JavaScript
		const porcentaje = (currentTime * 100) / duration;
		progressBar.current.style.width = porcentaje + "%";
		progressBar.current.style.backgroundColor = "#f87171";

		currentT.current.textContent =
			Math.trunc(currentTime) < 10
				? `00:0${Math.trunc(currentTime)}`
				: `00:${Math.trunc(currentTime)}`;
		totalT.current.textContent = `00:${Math.trunc(duration)}`;

		// refFinish.current.innerHTML = refAudio.current?.ended ? <BsPlayFill /> : <MdReplay />;
		// console.log(refAudio.current?.ended);
	};

	const handleEnded = (event) => {
		progressBar.current.style.width = 0;
		setPlay(true);
		// console.log(event);
		// console.log(refAudio.current.paused);
	};

	return (
		<>
			<div className="flex items-center justify-around">
				{/* <button className="text-4xl">
					<BsSkipStartFill />
				</button> */}

				{!play ? (
					<button
						className={`${
							!play ? "block" : "hidden"
						} focus:bg-slate-200 rounded-full w-12 h-12 text-center flex items-center justify-center`}
						onClick={() => {
							refAudio.current.pause(); // es un objeto por eso accedo a current y alli si puedo manipularlo
							setPlay(true);
						}}
					>
						<BsFillPauseFill className="text-4xl " />
					</button>
				) : (
					<button
						ref={refFinish}
						className={`${
							play ? "block" : "hidden"
						} focus:bg-slate-200 rounded-full w-12 h-12 text-center flex items-center justify-center`}
						onClick={() => {
							refAudio.current.play(); // es un objeto por eso accedo a current y alli si puedo manipularlo
							setPlay(false);
						}}
					>
						<BsPlayFill className="text-4xl " />
					</button>
				)}

				{/* <button className="text-4xl">
					<BsSkipEndFill />
				</button> */}
			</div>
			<div className="flex items-center justify-center">
				<span ref={currentT} className="h-0 self-center pr-2 pt-4 text-xs">
					00:00
				</span>
				<div className="flex items-center w-8/12 flex-col">
					<div className="flex justify-between items-center w-full pb-3 ">
						<div className="flex items-center">
							{songData?.explicit_lyrics ? <MdExplicit className="mr-2" /> : ""}
							<div className="text-sm">
								<Link
									className="inline-block hover:underline"
									to={`/album/${songData.album?.id}`}
								>
									<span>{songData?.title_short}</span>
								</Link>
								<span className="px-1">&middot;</span>
								<Link
									className="inline-block hover:underline"
									to={`/artist/${songData.artist?.name}`}
								>
									<span> {songData.artist?.name}</span>
								</Link>
							</div>
						</div>
						<button>
							<BsHeart />
						</button>
					</div>
					<div
						id="contenedorBarra"
						className="bg-slate-500 h-0.5 w-full rounded-md overflow-hidden"
					>
						<div ref={progressBar} className="h-full"></div>
						<audio
							onEnded={handleEnded}
							onTimeUpdate={handleProgress}
							src={songData?.preview}
							ref={refAudio}
							autoPlay={true}
						></audio>
					</div>
				</div>
				<span ref={totalT} className="h-0 self-center pl-2 pt-4 text-xs">
					00:00
				</span>
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
				<span className="w-px h-2/5 bg-slate-300"></span>
				<img
					src={songData?.album && songData.album.cover_small}
					alt={songData?.album && songData.title}
					className="rounded-md w-9"
				/>
			</div>
		</>
	);
};

export default MediaPlayer;
