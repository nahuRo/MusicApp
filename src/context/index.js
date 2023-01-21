import { createContext, useState } from "react";

export const musicContext = createContext();

export const MusicProvider = ({ children }) => {
	const [tracks, setTracks] = useState([]);
	const [favTracks, setFavTracks] = useState([]);

	const [audio, setAudio] = useState([]);

	return (
		<musicContext.Provider
			value={{ tracks, setTracks, audio, setAudio, favTracks, setFavTracks }}
		>
			{children}
		</musicContext.Provider>
	);
};
