import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineAccountCircle } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

import { fetchFromAPI } from "../services/fetchApi";
import { musicContext } from "../context/index";

const TopBar = () => {
	const { setTracks } = useContext(musicContext);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		fetchApi();

		if (searchTerm) {
			navigate(`/artist/${searchTerm}`);

			setSearchTerm("");
		}
	};

	const fetchApi = async () => {
		const { data } = await fetchFromAPI(`/search?q=${searchTerm}&index=${0}&limit=5`);
		setTracks(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="w-full">
				<div className="flex items-center w-2/4">
					<button type="submit">
						<BsSearch className="mr-3" />
					</button>
					<input
						value={searchTerm}
						type="text"
						className="w-full outline-0"
						placeholder="Search ..."
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</form>
			<div className="flex items-center gap-x-6">
				<BsFillBellFill />
				<span className="bg-slate-200 rounded-full w-8 h-8 text-center flex justify-between items-center">
					<MdOutlineAccountCircle className="w-full text-xl" />
				</span>
			</div>
		</>
	);
};

export default TopBar;
