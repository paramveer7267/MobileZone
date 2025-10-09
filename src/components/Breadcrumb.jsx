import { Link } from "react-router-dom";

const Breadcrumb = ({ pageName, description }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <nav className="relative z-10 flex flex-col gap-2 py-12 px-6 text-white pb-10 max-w-7xl w-full mx-auto">
        <h1 className="text-5xl font-semibold">{pageName}</h1>
        <p>{description}</p>
        <ol className="list-reset flex">
          <li>
            <Link to="/" className="text-white hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <span className="text-gray-400">{pageName}</span>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
