import "./Navbar.css";
import Logo from "./NavbarImages/logo.png";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
        <img className="navbar-brand logo" src={Logo} />
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
              <a
                className="nav-item"
                aria-current="page"
                onClick={() => scrollToSection("section1")}
              >
                Book a car
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-item"
                aria-current="page"
                onClick={() => scrollToSection("section2")}
              >
                Our Fleet
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-item"
                aria-current="page"
                onClick={() => scrollToSection("section3")}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
