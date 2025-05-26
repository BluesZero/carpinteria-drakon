// --- components/Layout.js ---
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}