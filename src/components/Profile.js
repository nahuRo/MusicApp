import { useContext } from "react";
import { musicContext } from "../context/index";

import TableTracks from "./TableTracks";

const Profile = () => {
	const { favTracks } = useContext(musicContext);
	return (
		<div className="mt-5 p-6">
			<TableTracks tracks={favTracks} />
		</div>
	);
};

export default Profile;
