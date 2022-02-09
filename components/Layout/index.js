import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
