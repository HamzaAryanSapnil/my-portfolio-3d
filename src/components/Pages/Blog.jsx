import { Link } from "react-router";
import { blogs } from "../../constants";

export default function Blog() {
  return (
    <section className="px-5">
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
            key={blog.slug}
            className="card card-border bg-black-50 rounded-2xl p-6 hover:shadow-xl transition relative overflow-hidden"
            aria-labelledby={`blog-${blog.id}-title`}
          >
            <div className="glow pointer-events-none" aria-hidden="true" />
            <h2
              id={`blog-${blog.slug}-title`}
              className="text-xl font-semibold mb-3 text-white"
            >
              {blog.title.length > 60
                ? blog.title.slice(0, 56) + "…"
                : blog.title}
            </h2>

            <p className="text-white-50 mb-6">
              {blog.content.length > 120
                ? blog.content.slice(0, 120) + "…"
                : blog.content}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <Link
                to={`/blogs/${blog.slug}`}
                className="z-20 bg-black-100  group inline-flex items-center justify-center gap-3 px-4 py-2 rounded-lg"
              >
                <span className="text text-sm">Read More</span>
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <span className="text-sm text-white-50 hidden md:inline">
                #{blog.slug}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
