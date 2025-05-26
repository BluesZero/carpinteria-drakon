// --- components/Footer.js ---
export default function Footer() {
    return (
      <footer className="bg-gray-950 text-gray-300 border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h3 className="text-yellow-500 text-xl font-bold mb-2">Carpintería Drakón</h3>
          <p className="text-sm mb-4">
            Diseño legendario en madera. Muebles e instalaciones hechas a medida con profesionalismo y detalle.
          </p>
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Carpintería Drakón. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    );
  }
  