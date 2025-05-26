// --- components/Header.js ---
import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* Barra superior de contacto */}
      <div className="bg-yellow-500 text-black text-sm px-6 py-2 flex justify-between items-center">
        <span className="font-semibold">📞 (81) 1234 5678</span>
        <span className="font-semibold">✉️ contacto@carpinteriadrakon.mx</span>
      </div>

      {/* Barra de navegación */}
      <header className="bg-gray-950 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-widest text-yellow-500">
            Drakón
          </div>
          <nav className="space-x-6 text-sm font-semibold hidden md:block">
            <Link href="/">Inicio</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/proyectos">Proyectos</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
