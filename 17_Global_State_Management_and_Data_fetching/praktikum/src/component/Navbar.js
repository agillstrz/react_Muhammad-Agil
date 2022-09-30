import { Link } from "react-router-dom";

function Navbar({ App, Author, About }) {
  return (
    <div className="mb-10">
      <nav className="flex justify-between items-center px-5 lg:px-20 py-5 shadow-lg text-black font-bold  text-xl">
        <a
          href=""
          className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600"
        >
          TodoList
        </a>
        <ul className="flex lg:justify-end gap-4 lg:gap-12">
          <li>
            <Link to="/">Home</Link>
          </li>
          {About === "About" ? (
            <li>
              <Link to={About}>{About}</Link>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link to={App}>{App}</Link>
          </li>
          <li>
            <Link to={Author}>{Author}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
