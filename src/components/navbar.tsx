import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface NavbarComponentProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function NavbarComponent({
  searchQuery,
  setSearchQuery,
}: NavbarComponentProps) {
  const navigate = useNavigate();

  const handleAuth = (isSignup: boolean) => {
    navigate(`${isSignup ? "/signup" : "/login"}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Job Chaser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleAuth(false)}>
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleAuth(true)}>
                Sign Up
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
