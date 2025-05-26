// --- pages/proyectos.js ---
import Layout from '../components/Layout';

export default function Proyectos() {
  return (
    <Layout>
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-yellow-500 mb-6">Nuestros Proyectos</h1>
          <p className="mb-12 text-gray-300">Te mostramos algunos de nuestros trabajos más destacados en diseño y carpintería a medida.</p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-yellow-500/30 transition">
              <img src="https://picsum.photos/600/400?random=1" alt="Proyecto 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-yellow-400">Cocina personalizada</h2>
                <p className="text-sm text-gray-400">Diseño moderno en nogal con iluminación integrada.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-yellow-500/30 transition">
              <img src="https://picsum.photos/600/400?random=2" alt="Proyecto 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-yellow-400">Mueble para TV</h2>
                <p className="text-sm text-gray-400">Estilo minimalista en madera de encino con acabado mate.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-yellow-500/30 transition">
              <img src="https://picsum.photos/600/400?random=3" alt="Proyecto 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-yellow-400">Closet integral</h2>
                <p className="text-sm text-gray-400">Diseño funcional con puertas corredizas y sistema modular.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}