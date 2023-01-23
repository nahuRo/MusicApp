import React from "react";

import CatCard from "./CatCard";
import GenCard from "./GenCard";

import c1980_jpg from "../assets/cat_1980.jpg";
import cAcustico_jpg from "../assets/cat_acustico.jpg";
import cCasa_jpg from "../assets/cat_casa.jpg";
import cChill_jpg from "../assets/cat_chill.jpg";
import cFiesta_jpg from "../assets/cat_fiesta.jpg";
import cDeporte_jpg from "../assets/cat_deporte.jpg";
import cCultura_jpg from "../assets/cat_cultura.jpg";
import cJuegos_jpg from "../assets/cat_juegos.jpg";
import cNew_jpg from "../assets/cat_new.jpg";
import cChart_jpg from "../assets/cat_chart.jpg";

const Explore = () => {
	return (
		<div className="xl:mx-24">
			<div className="p-6">
				<span className="block text-2xl font-semibold mb-8">Todos los canales</span>
				<span className="block text-xl font-semibold">Categorías</span>
				<div className="flex items-center justify-between py-4 flex-wrap gap-y-8">
					<CatCard img={c1980_jpg} category="Década de 1980" />
					<CatCard img={cAcustico_jpg} category="Acústico" />
					<CatCard img={cCasa_jpg} category="En casa" />
					<CatCard img={cChill_jpg} category="Chill" />
					<CatCard img={cFiesta_jpg} category="Fiesta" />
					<CatCard img={cDeporte_jpg} category="Deporte" />
					<CatCard img={cCultura_jpg} category="Cultura negra" />
					<CatCard img={cNew_jpg} category="Nuevos lanzamientos" />
					<CatCard img={cChart_jpg} category="Charts" />
					<CatCard img={cJuegos_jpg} category="Juegos" />
				</div>
			</div>
			<div className="p-6">
				<span className="block text-xl font-semibold">Géneros</span>
				<div className="flex items-center justify-between py-4 flex-wrap gap-y-8">
					<GenCard
						gradient="bg-gradient-to-r from-red-200 to-red-600"
						gender="Grime"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
						gender="Rap"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
						gender="R&B"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
						gender="Música latina"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-gray-700 via-gray-900 to-black"
						gender="Reggaeton"
					/>
					<GenCard
						gradient="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400"
						gender="Soul / funk"
					/>
					<GenCard
						gradient="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"
						gender="Pop"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
						gender="Música argentina"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
						gender="Country"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-green-200 via-green-400 to-green-500"
						gender="Afro"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-red-500 to-red-800"
						gender="Electrónica"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-violet-300 to-violet-400"
						gender="Salsa"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-orange-300 to-rose-300"
						gender="K-pop"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-fuchsia-600 to-pink-600"
						gender="Blues"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-indigo-300 to-purple-400"
						gender="Flamenco"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
						gender="Música francesa"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-yellow-600 to-red-600"
						gender="Clásica"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
						gender="Metal"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-rose-700 to-pink-600"
						gender="Jazz"
					/>
					<GenCard
						gradient="bg-gradient-to-r from-sky-400 to-cyan-300"
						gender="Rock"
					/>
				</div>
			</div>
		</div>
	);
};

export default Explore;
