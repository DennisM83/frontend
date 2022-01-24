import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link href="/">
        <a className="navbar-brand">Home</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link href="/login">
              <a className="nav-link">Sign In</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <a className="nav-link">Sign Up</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
