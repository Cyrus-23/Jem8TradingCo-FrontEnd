/* ── DATA ── */
const NAV_LINKS = ["Products", "Categories", "Blog", "About", "Contact"];
const img = (w, h, label = "") =>
  `https://placehold.co/${w}x${h}/edf4f0/4d7b65?text=${encodeURIComponent(label)}`;

function Header({ onMenuToggle }) {
  return (
    <header className="header">
      <div className="container header__inner">
        {/* Logo */}
        <img
          className="header__logo"
          src={img(245, 65, "JEM 8 LOGO")}
          alt="Jem 8 Circle Trading Co."
        />

        {/* Desktop Nav */}
        <nav>
          <ul className="header__nav">
            <li>
              <a href="#" className="header__nav-link active">Home</a>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="header__nav-link">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <div className="header__search">
            <span className="header__search-icon">🔍</span>
            <input
              className="header__search-input"
              type="text"
              placeholder="Search products..."
            />
          </div>
          <button className="header__cart-btn" aria-label="Cart">🛒</button>
          <button className="header__login-btn">Login / Signup</button>

          {/* Mobile hamburger */}
          <div className="header__hamburger" onClick={onMenuToggle} aria-label="Open menu">
            <span /><span /><span />
          </div>
        </div>
      </div>
    </header>
  );
}
export { Header };