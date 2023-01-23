import React from "react";

import NormalCard from "./NormalCard";
import CatCard from "./CatCard";

import historia_jpg from "../assets/pod_historias.jpg";
import llave_jpg from "../assets/pod_la_llave.jpg";
import salud_jpg from "../assets/pod_salud.jpg";
import budismo_jpg from "../assets/pod_budismo.jpg";
import luzu_jpg from "../assets/pod_luzu.jpg";

import coll1_jpg from "../assets/collection_1.jpg";
import coll2_jpg from "../assets/collection_2.jpg";

import Peducacion_jpg from "../assets/podCat_educacion.jpg";
import Pestilo_jpg from "../assets/podCat_estilo.jpg";
import Phumor_jpg from "../assets/podCat_humor.jpg";
import Pnew_jpg from "../assets/podCat_new.jpg";
import Pranking_jpg from "../assets/podCat_ranking.jpg";

const Podcasts = () => {
	return (
		<div className="xl:mx-24">
			<div className="p-6">
				<span className="block text-xl font-semibold">Podcasts populares</span>
				<div className="flex items-center justify-between py-4 flex-wrap gap-y-8">
					<NormalCard
						img={budismo_jpg}
						name="Lucas Casanova"
						description="Budismo en Zapatillas"
					/>
					<NormalCard
						img={historia_jpg}
						name="Felipe Pigna"
						description="Historias de nuestra historia"
					/>
					<NormalCard
						img={llave_jpg}
						name="Hildemare Rodolfo"
						description="Superación personal con la llave maestra"
					/>
					<NormalCard
						img={salud_jpg}
						name="Alan Disavia"
						description="Salud Mental✨ con Alan Disavia"
					/>
					<NormalCard
						img={luzu_jpg}
						name="Luzu"
						description="Nadie Dice Nada Podcast"
					/>
				</div>
			</div>
			<div className="p-6">
				<span className="block text-xl font-semibold">Todas las categorías</span>
				<div className="flex items-center justify-between py-4 flex-wrap gap-y-8">
					<CatCard img={Pnew_jpg} category="Nuevos podcasts" />
					<CatCard img={Peducacion_jpg} category="Educación" />
					<CatCard img={Pestilo_jpg} category="Estilo de vida y hobbies" />
					<CatCard img={Phumor_jpg} category="Humor" />
					<CatCard img={Pranking_jpg} category="Ranking de podcasts" />
				</div>
			</div>

			<div className="p-6">
				<span className="block text-xl font-semibold">Todas las categorías</span>
				<div className="grid grid-cols-2 py-4">
					<img
						src={coll1_jpg}
						alt="colleccion"
						className="justify-self-start cursor-pointer"
					/>
					<img
						src={coll2_jpg}
						alt="colleccion"
						className="justify-self-end cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Podcasts;
