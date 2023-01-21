import { useEffect } from "react";
import { fetchFromAPI } from "../services/fetchApi";

import { BsTree } from "react-icons/bs";

const Feed = () => {
	// useEffect(() => {
	// 	fetchFromAPI(`/search?q=eminem`).then((data) => {
	// 		console.log(data);
	// 	});
	// }, []);

	return (
		<div className="xl:mx-24">
			<div className="p-6">
				<h1>Flow: la banda sonora para tus emociones</h1>
				<h3>
					Un mix infinito y personalizado de música que te encanta y nuevos
					descubrimientos
				</h3>
				<div className="flex items-center justify-between py-4 flex-wrap">
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center">
							<BsTree className="text-5xl" />
						</button>
						<span className="mt-2">Flow</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center">
							<BsTree className="text-5xl" />
						</button>
						<span className="mt-2">Flow</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center">
							<BsTree className="text-5xl" />
						</button>
						<span className="mt-2">Flow</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center">
							<BsTree className="text-5xl" />
						</button>
						<span className="mt-2">Flow</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center">
							<BsTree className="text-5xl" />
						</button>
						<span className="mt-2">Flow</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center">
							<BsTree className="text-5xl" />
						</button>
						<span className="mt-2">Flow</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center">
							<BsTree className="text-5xl" />
						</button>
						<span className="mt-2">Flow</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feed;
