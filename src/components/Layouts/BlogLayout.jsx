import { Outlet } from "react-router";
import Footer from "../../sections/Footer";
import BlogNav from "./BlogNav";

export default function BlogLayout() {
  return (
    <div className="app-root min-h-screen w-full bg-black text-white font-sans">
      <div className="gradient-edge" aria-hidden="true" />
      <div className="gradient-edge" aria-hidden="true" />

      <BlogNav />

      <main className="min-h-screen w-full section-padding padding-x-lg">

          <Outlet />
    
      </main>

      <Footer />
    </div>
  );
}
