import { createContext, useState } from "react";

export const musicContext = createContext();

export const MusicProvider = ({ children }) => {
	const [tracks, setTracks] = useState([]);
	const [artistId, setArtistId] = useState();

	const [audio, setAudio] = useState();

	return (
		<musicContext.Provider
			value={{ tracks, setTracks, audio, setAudio, artistId, setArtistId }}
		>
			{children}
		</musicContext.Provider>
	);
};
