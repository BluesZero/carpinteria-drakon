// --- pages/servicios.js ---
import Layout from '../components/Layout';

export default function Servicios() {
  return (
    <Layout>
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-yellow-500 mb-6">Nuestros Servicios</h1>
          <p className="mb-12 text-gray-300">Creamos soluciones funcionales y estéticas en madera, a la medida de cada espacio.</p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-yellow-500/30 transition">
              <img src="https://picsum.photos/600/400?random=5" alt="Muebles a Medida" className="rounded mb-4 w-full h-48 object-cover" />
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Muebles a Medida</h2>
              <p className="text-gray-400">Diseño y fabricación de muebles personalizados para hogar, oficina y comercios.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-yellow-500/30 transition">
              <img src="https://picsum.photos/600/400?random=6" alt="Instalaciones Comerciales" className="rounded mb-4 w-full h-48 object-cover" />
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Instalaciones Comerciales</h2>
              <p className="text-gray-400">Montaje e integración de mobiliario para negocios, vitrinas, mostradores y espacios funcionales.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-yellow-500/30 transition">
              <img src="https://picsum.photos/600/400?random=7" alt="Diseño de Interiores" className="rounded mb-4 w-full h-48 object-cover" />
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Diseño de Interiores</h2>
              <p className="text-gray-400">Propuestas integrales con acabados en madera para renovar espacios con elegancia.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-yellow-500/30 transition">
              <img src="https://picsum.photos/600/400?random=8" alt="Integración de Materiales" className="rounded mb-4 w-full h-48 object-cover" />
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Integración de Materiales</h2>
              <p className="text-gray-400">Combinamos madera con vidrio, metal o piedra para lograr resultados únicos y modernos.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}