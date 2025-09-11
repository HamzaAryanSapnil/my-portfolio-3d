

import { Link, NavLink } from "react-router";

const BlogNav = () => {
 

  return (
    <header className="py-10 px-5" >
      <div className="inner container mx-auto flex items-center justify-between">
        <Link to="/" className="logo hidden md:block">
          Hamza Aryan Sapnil
        </Link>

        <nav className="desktop" aria-label="Primary navigation">
          <ul className="flex items-center">
            <li className="group">
              <NavLink
                to="/"
                end
                className="px-3 py-2 inline-block"
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                <span>Home</span>
                <span className="underline" />
              </NavLink>
            </li>

            <li className="group ml-6">
              <NavLink
                to="/blogs"
                className="px-3 py-2 inline-block"
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                <span>Blogs</span>
                <span className="underline" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default BlogNav;
