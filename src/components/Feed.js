import { useEffect } from "react";
import { fetchFromAPI } from "../services/fetchApi";

const Feed = () => {
	// useEffect(() => {
	// 	fetchFromAPI(`/search?q=eminem`).then((data) => {
	// 		console.log(data);
	// 	});
	// }, []);

	return (
		<div className="bg-orange-100 ">
			<div className="">
				<h1>Hecho para ti</h1>
			</div>
		</div>
	);
};

export default Feed;
