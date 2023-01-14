import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import MediaPlayer from "./components/MediaPlayer";

import SearchScreen from "./components/SearchScreen";

import DisplayTracks from "./components/DisplayTracks";
import DisplayAlbum from "./components/DisplayAlbum";

import AlbumTracks from "./components/AlbumTracks";

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
							<Route path="/artist/:artistName" element={<SearchScreen />} />
							<Route
								path="/artist/:artistName/tracks"
								element={<DisplayTracks />}
							/>
							<Route
								path="/artist/:artistName/album"
								element={<DisplayAlbum />}
							/>

							<Route path="/album/:idAlbum" element={<AlbumTracks />} />
						</Routes>
					</div>
					<div className="cont-media border-slate-200 border-t px-8">
						<MediaPlayer className="border-t" />
					</div>
				</BrowserRouter>
			</MusicProvider>
		</div>
	);
}

export default App;
