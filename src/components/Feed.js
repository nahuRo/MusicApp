// import { useEffect } from "react";
// import { fetchFromAPI } from "../services/fetchApi";

import { BsTree } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaBomb } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { GiPapyrus } from "react-icons/gi";
import { GiHeartBeats } from "react-icons/gi";
import { GiRadarSweep } from "react-icons/gi";
import { IoFootsteps } from "react-icons/io5";
import { BsConeStriped } from "react-icons/bs";

import asadito_jpg from "../assets/asadito.jpg";
import bellaArg_jpg from "../assets/bellaArg.jpg";
import reggaetonClassic_jpg from "../assets/reggaetonClassic.jpg";
import reggaetonHits_jpg from "../assets/reggaetonHits.jpg";
import sunnyRB_jpg from "../assets/sunny.jpg";

import topArg_jpg from "../assets/topArg.jpg";
import topBrazil_jpg from "../assets/topBrazil.jpg";
import topUk_jpg from "../assets/topUk.jpg";
import topUsa_jpg from "../assets/topUsa.jpg";
import topWorld_jpg from "../assets/topWorld.jpg";

import NormalCard from "./NormalCard";

const Feed = () => {
	// useEffect(() => {
	// 	fetchFromAPI(`/search?q=eminem`).then((data) => {
	// 		console.log(data);
	// 	});
	// }, []);

	return (
		<div className="xl:mx-24">
			<div className="p-6">
				<span className="block text-xl font-semibold">
					Flow: la banda sonora para tus emociones
				</span>
				<h3>
					Un mix infinito y personalizado de música que te encanta y nuevos
					descubrimientos
				</h3>
				<div className="flex items-center justify-between py-4 flex-wrap">
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center text-orange-400">
							<BsTree className="text-7xl" />
						</button>
						<span className="mt-2">Flow</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center text-amber-600">
							<FaEye className="text-7xl" />
						</button>
						<span className="mt-2">Melancolía</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center text-yellow-500">
							<IoFootsteps className="text-7xl" />
						</button>
						<span className="mt-2">Motivación</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center text-emerald-500">
							<GiPartyPopper className="text-7xl" />
						</button>
						<span className="mt-2">Fiesta</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center text-teal-500">
							<GiPapyrus className="text-7xl" />
						</button>
						<span className="mt-2">Chill</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center text-yellow-800">
							<GiHeartBeats className="text-7xl" />
						</button>
						<span className="mt-2">Tú y yo</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<button className="rounded-full bg-stone-200 w-44 h-44 flex items-center justify-center text-indigo-700">
							<GiRadarSweep className="text-7xl" />
						</button>
						<span className="mt-2">Concentración</span>
					</div>
				</div>
			</div>

			<div className="p-6">
				<span className="block text-xl font-semibold pb-8">Para el fin de semana</span>
				<div className="flex flex-wrap gap-8 justify-between">
					<NormalCard
						img={asadito_jpg}
						name={"Asadito"}
						description={"50 canciones - 16.982 fans"}
					/>
					<NormalCard
						img={bellaArg_jpg}
						name={"Bella Argentina"}
						description={"51 canciones - 1517 fans"}
					/>
					<NormalCard
						img={reggaetonClassic_jpg}
						name={"Reggaeton Classics"}
						description={"50 canciones - 522.826 fans"}
					/>
					<NormalCard
						img={reggaetonHits_jpg}
						name={"Reggaeton Hits"}
						description={"50 canciones - 1.324.511 fans"}
					/>
					<NormalCard
						img={sunnyRB_jpg}
						name={"Sunny R&B"}
						description={"60 canciones - 35.974 fans"}
					/>
				</div>
			</div>

			<div className="p-6">
				<span className="block text-xl font-semibold pb-8">Tests de música</span>
				<div className="bg-gradient-to-r from-red-200 to-red-500 h-44 rounded-md flex items-center gap-8 cursor-pointer">
					<BsConeStriped className="text-9xl ml-8" />
					<div>
						<h4 className="text-xl">Tests de música</h4>
						<h5 className="text-lg">Pon tus conocimientos a prueba</h5>
					</div>
				</div>
			</div>

			<div className="p-6">
				<span className="block text-xl font-semibold pb-8">Charts</span>
				<div className="flex flex-wrap gap-8 justify-between">
					<NormalCard
						img={topArg_jpg}
						name={"Top Argentina"}
						description={"100 canciones - 230.431 fans"}
					/>
					<NormalCard
						img={topWorld_jpg}
						name={"Top Worldwide"}
						description={"100 canciones - 843.536 fans"}
					/>
					<NormalCard
						img={topBrazil_jpg}
						name={"Top Brazil"}
						description={"100 canciones - 5.769.753 fans"}
					/>
					<NormalCard
						img={topUk_jpg}
						name={"Top UK"}
						description={"100 canciones - 1.957.113 fans"}
					/>
					<NormalCard
						img={topUsa_jpg}
						name={"Top USA"}
						description={"100 canciones - 593.656 fans"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Feed;
