import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!mounted) return;
        setBlogs(res.data.slice(0, 12)); 
        setLoading(false);
      } catch (error) {
        if (!mounted) return;
        console.error(error);
        setErr("something went wrong");
        setLoading(false);
      }
    };
    fetchBlogs();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
        <div className="bg-black-100 card card-border rounded-2xl p-8 shadow-md">
          <h2 className="text-lg font-semibold text-white-50">
            Loading blogs...
          </h2>
        </div>
      </div>
    );
  }

  if (err) {
    return (
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
        <div className="bg-black-100 card card-border rounded-2xl p-8 shadow-md">
          <h2 className="text-lg font-semibold text-white-50">Error</h2>
          <p className="mt-2 text-sm text-white-50/70">{err}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="section-padding w-full">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Latest Blogs
          </h1>
          <p className="mt-2 text-white-50">
            Click Read more to read the full blog
          </p>
        </header>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="card card-border bg-black-50 rounded-2xl p-6 hover:shadow-xl transition relative overflow-hidden"
              aria-labelledby={`blog-${blog.id}-title`}
            >
              <div className="glow pointer-events-none" aria-hidden="true" />
              <h2
                id={`blog-${blog.id}-title`}
                className="text-xl font-semibold mb-3 text-white"
              >
                {blog.title.length > 60
                  ? blog.title.slice(0, 56) + "…"
                  : blog.title}
              </h2>

              <p className="text-white-50 mb-6">
                {blog.body.length > 120
                  ? blog.body.slice(0, 120) + "…"
                  : blog.body}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <Link
                  to={`/blogs/${blog.id}`}
                  className="z-20 bg-black-100  group inline-flex items-center justify-center gap-3 px-4 py-2 rounded-lg"
                >
                  <span className="text text-sm">Read More</span>
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>

                <span className="text-sm text-white-50 hidden md:inline">
                  #{blog.id}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}