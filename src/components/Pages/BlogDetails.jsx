import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!mounted) return;
        setBlog(res.data);
        setLoading(false);
      } catch (error) {
        if (!mounted) return;
        console.error(error);
        setErr("কোনো সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        setLoading(false);
      }
    };

    fetchBlog();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center px-4">
        <div className="card card-border bg-black-100 rounded-2xl p-8 max-w-2xl w-full shadow-md">
          <h2 className="text-xl font-semibold text-white">Loading blog...</h2>
          <p className="mt-2 text-white-50/80">দয়া করে অপেক্ষা করুন…</p>
        </div>
      </div>
    );
  }

  if (err) {
    return (
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center px-4">
        <div className="card card-border bg-black-100 rounded-2xl p-8 max-w-2xl w-full shadow-md">
          <h2 className="text-xl font-semibold text-white">Error</h2>
          <p className="mt-2 text-white-50/80">{err}</p>
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
                Author: <span className="font-medium">User #{blog.userId}</span>
              </div>
              <div className="text-sm text-white-50">Post ID: #{blog.id}</div>
            </div>
          </header>

          <div className="prose max-w-none text-white-50 mb-8">
            <p className="text-base md:text-lg leading-relaxed">{blog.body}</p>
          </div>

          <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex gap-3">
              <Link
                to="/blogs"
                className="cta-button inline-flex items-center px-4 py-2 rounded-lg"
              >
                Back to Blogs
              </Link>

              <a
                href={`https://jsonplaceholder.typicode.com/posts/${blog.id}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-transparent border border-white-10 text-white-50"
              >
                View Source
              </a>
            </div>

            <div className="text-sm text-white-50">Thanks for reading ✨</div>
          </footer>
        </article>
      </div>
    </section>
  );
}
