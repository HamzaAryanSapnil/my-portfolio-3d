import { Outlet } from "react-router";
import Footer from "../../sections/Footer";
import BlogNav from "./BlogNav";

export default function BlogLayout() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans ">
      <BlogNav />

      <Outlet />

      <Footer />
    </div>
  );
}
