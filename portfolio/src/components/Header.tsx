import { useEffect, useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNavClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolling(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolling ? "scrolling" : ""}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <a href="/" className="logo">
            <img width={100} height={100} src="/logotipo.svg" alt="Logo" />
          </a>

          {/* Navbar */}
          <Nav isClicked={isClicked} />

          {/* Menu icons */}
          <button
            className="menu-icons"
            aria-label={`${isClicked ? "Close menu" : "Open menu"}`}
            onClick={handleNavClick}
          >
            {isClicked ? (
              <i className="fa-solid fa-close" aria-label="true"></i>
            ) : (
              <i className="fa-solid fa-bars" aria-label="true"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
