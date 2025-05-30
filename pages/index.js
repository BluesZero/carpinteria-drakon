// --- pages/index.js ---
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Carpintería Drakón | Diseño legendario en madera</title>
        <meta name="description" content="Carpintería Drakón: expertos en diseño y fabricación de muebles a medida e instalaciones profesionales." />
      </Head>

      {/* Hero section */}
      <section className="relative bg-black text-white overflow-hidden h-[90vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-28 text-center">
          <img src="/logo.png" alt="Logo Drakón" className="w-50 mx-auto mb-6 rounded-full" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 drop-shadow-lg">Diseño legendario en madera</h1>
          <p className="mt-4 text-lg text-gray-200">Muebles a medida e instalaciones residenciales y comerciales con precisión y carácter.</p>
          <a
            href="/contacto"
            className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded shadow-md transition"
          >
            Solicita tu cotización
          </a>
        </div>
      </section>

      {/* Sección de bienvenida */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Bienvenido a Carpintería Drakón</h2>
          <p className="text-gray-300 mb-6">
            En nuestro taller combinamos la tradición artesanal con tecnología moderna para ofrecer piezas únicas, duraderas y hechas a medida.
          </p>
          <img src="/2.png" alt="Bienvenida" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Sección resumen de servicios */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-500 text-center mb-12">¿Qué hacemos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Muebles a medida</h3>
              <p className="text-gray-400">Desde closets hasta cocinas integrales, diseñamos cada pieza para ajustarse a tus necesidades.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Instalaciones integrales</h3>
              <p className="text-gray-400">Equipamos oficinas, comercios o residencias con soluciones en madera funcionales y modernas.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Diseño personalizado</h3>
              <p className="text-gray-400">Proyectos únicos guiados por tus ideas, con el respaldo de nuestra experiencia en carpintería fina.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la acción final */}
      <section className="bg-yellow-500 text-black py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">¿Listo para iniciar tu proyecto?</h2>
          <p className="mb-6">Ponte en contacto con nosotros y llevemos tu idea a la realidad con la calidad de Carpintería Drakón.</p>
          <a href="/contacto" className="inline-block bg-black hover:bg-gray-800 text-yellow-400 font-bold py-3 px-6 rounded transition">
            Cotizar ahora
          </a>
        </div>
      </section>
    </Layout>
  );
}
