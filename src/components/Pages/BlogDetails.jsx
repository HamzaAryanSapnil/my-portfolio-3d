
import { Link, useParams } from "react-router";
import { blogs } from "../../constants";

export default function BlogDetails() {
  const { id } = useParams();
  console.log(id)
  const blog = blogs.find((blog) => blog.slug === id);
   


  if (!blog) {
    return (
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center px-4">
        <div className="card card-border bg-black-100 rounded-2xl p-8 max-w-2xl w-full shadow-md">
          <h2 className="text-xl font-semibold text-white">Blog not found</h2>
          <Link
            to="/blogs"
            className="mt-6 inline-block cta-button px-4 py-2 rounded-lg"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <article className="card card-border bg-black-100 rounded-2xl p-8 max-w-3xl mx-auto shadow-md">
          {/* decorative glow (from your index.css) */}
          <div className="glow" aria-hidden="true" />

          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {blog.title}
            </h1>

            <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-sm text-white-50">
                Author: <span className="font-medium">User #{blog.author}</span>
              </div>
              <div className="text-sm text-white-50">Post ID: #{blog.id}</div>
            </div>
          </header>

          <div className="prose max-w-none text-white-50 mb-8">
            <p className="text-base md:text-lg leading-relaxed">{blog.content}</p>
          </div>

          <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex gap-3">
              <Link
                to="/blogs"
                className="cta-button inline-flex items-center px-4 py-2 rounded-lg"
              >
                Back to Blogs
              </Link>
            </div>

            <div className="text-sm text-white-50">Thanks for reading ✨</div>
          </footer>
        </article>
      </div>
    </section>
  );
}
