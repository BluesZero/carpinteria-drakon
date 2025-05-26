// --- pages/contacto.js ---
import Layout from '../components/Layout';

export default function Contacto() {
  return (
    <Layout>
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl font-bold text-yellow-500 mb-4">Contáctanos</h1>
            <p className="mb-8 text-gray-300">¿Tienes un proyecto en mente? Escríbenos y lo haremos realidad.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <input type="email" placeholder="Correo electrónico" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <textarea placeholder="Mensaje" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" rows="5"></textarea>
              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded transition">Enviar mensaje</button>
            </form>

            <div className="mt-10 text-sm text-gray-400">
              <h2 className="text-yellow-400 font-semibold mb-1">Dirección del taller:</h2>
              <p>
                Calle del Carpintero #123<br />
                Col. Maderas Nobles<br />
                Monterrey, Nuevo León, México<br />
                CP 64000
              </p>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?random=9" alt="Taller carpintería contacto" className="rounded-lg shadow" />
          </div>
        </div>
      </section>
    </Layout>
  );
}