// --- pages/nosotros.js ---
import Layout from '../components/Layout';

export default function Nosotros() {
  return (
    <Layout>
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">Sobre Carpintería Drakón</h1>
          <p className="text-gray-300 mb-6 text-center">
            En Carpintería Drakón, fusionamos la fuerza de la tradición con la precisión del diseño moderno.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Nuestra Historia</h2>
              <p className="text-gray-400">
                Fundada con la visión de crear piezas únicas y duraderas, Drakón ha evolucionado de un pequeño taller a una marca reconocida por su calidad, atención al detalle y pasión por la madera.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/600/400?random=4" alt="Taller Drakón" className="rounded-lg shadow" />
            </div>

            <div className="md:col-span-2 text-center mt-10">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Misión y Visión</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nuestra misión es transformar ideas en espacios funcionales con carácter, utilizando madera de calidad y procesos artesanales. Nuestra visión es ser un referente en diseño y fabricación de mobiliario personalizado en México.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}