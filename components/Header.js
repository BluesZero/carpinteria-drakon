import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* Barra superior de contacto */}
      <div className="bg-yellow-500 text-black text-sm px-6 py-2 flex justify-between items-center">
        <span className="font-semibold">En Carpintería Drakón damos forma a tus ideas con soluciones en madera hechas a medida.</span>
        <span className="font-semibold">📞 +52 (81)1071 7913 | ✉️ contacto@carpinteriadrakon.mx</span>
      </div>

      {/* Barra de navegación principal */}
      <header className="bg-gray-950 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-wide text-yellow-500">
            Drakón
          </div>
          <nav className="space-x-6 text-sm font-medium hidden md:block">
            {['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((item) => (
              <Link
                key={item}
                href={`/${item === 'Inicio' ? '' : item.toLowerCase()}`}
                className="relative group transition"
              >
                <span className="text-white group-hover:text-yellow-400 transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-6 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
