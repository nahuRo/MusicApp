import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import MediaPlayer from "./components/MediaPlayer";

// Artist Screens
import ArtistScreen from "./components/ArtistScreen";
import ArtistTracksScreen from "./components/ArtistTracksScreen";
import ArtistAlbumScreen from "./components/ArtistAlbumScreen";

import AlbumDetailScreen from "./components/AlbumDetailScreen";

import Profile from "./components/Profile";
import Explore from "./components/Explore";
import Podcasts from "./components/Podcasts";

import { MusicProvider } from "./context/index";

function App() {
	return (
		<div className="container-app">
			<MusicProvider>
				<BrowserRouter>
					<div className="cont-topBar border-slate-200 border-b flex items-center justify-between  px-6">
						<TopBar />
					</div>
					<div className="cont-sideBar border-slate-200 border-r grid grid-rows-3">
						<SideBar />
					</div>
					<div className="cont-fee overflow-y-scroll overflow-x-hidden">
						{/* <div className="cont-fee max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-orange-400 justify-self-center"> */}

						<Routes>
							<Route path="/" element={<Feed />} />
							<Route path="/explore" element={<Explore />} />
							<Route path="/podcasts" element={<Podcasts />} />
							<Route path="/profile" element={<Profile />} />

							<Route path="/artist/:artistName" element={<ArtistScreen />} />
							<Route
								path="/artist/:artistName/tracks"
								element={<ArtistTracksScreen />}
							/>
							<Route
								path="/artist/:artistName/album"
								element={<ArtistAlbumScreen />}
							/>
							<Route path="/album/:idAlbum" element={<AlbumDetailScreen />} />
						</Routes>
					</div>
					<div className="cont-media border-slate-200 border-t px-8">
						<MediaPlayer />
					</div>
				</BrowserRouter>
			</MusicProvider>
		</div>
	);
}

export default App;
