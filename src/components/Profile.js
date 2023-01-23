import { useContext } from "react";
import { musicContext } from "../context/index";

import TableTracks from "./TableTracks";

const Profile = () => {
	const { favTracks } = useContext(musicContext);
	return (
		<>
			<div className="block shadow-sm relative pt-12 h-24">
				<ul className="h-full flex items-center justify-start gap-x-8 text-lg font-medium cursor-pointer text-slate-500 hover:text-black px-6 xl:mx-24">
					<li className="h-full relative">
						<span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-orange-400 after:w-full after:h-0.5 ">
							Canciones favoritas
						</span>
					</li>
				</ul>
			</div>

			<div className="xl:mx-24">
				<div className="p-6">
					<TableTracks tracks={favTracks} AddFav={false} />
				</div>
			</div>
		</>
	);
};

export default Profile;
