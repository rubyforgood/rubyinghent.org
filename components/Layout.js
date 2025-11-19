import Link from "next/link";

export default ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <img
              style={{ width: "200px" }}
              src="/img/logos/classic-logo.png"
            />
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar-target"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-target">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/schedule" className="nav-link">
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/faqs" className="nav-link">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://ti.to/codeforgood/ghentforgood"
                  target="_blank"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <h1>Get in touch!</h1>
              <ul className="horizontal-links">
                <li>
                  <a
                    href="mailto:info@rubyforgood.org"
                    title="Email us"
                  >
                    📧
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/rubyforgood"
                    target="_blank"
                  >
                    <img src="/img/icons/github.svg" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ruby-for-good/"
                    target="_blank"
                  >
                    <img src="/img/icons/linkedin2.svg" />
                  </a>
                </li>
              </ul>

              <ul className="horizontal-links" style={{ paddingTop: "15px" }}>
                <li>
                  <a href="mailto:info@rubyforgood.org">info@rubyforgood.org</a>
                </li>
                <li>
                  <a href="https://github.com/rubyforgood/code-of-conduct" target="_blank">Code of Conduct</a>
                </li>
              </ul>
            </div>
            <img
              className="mobile-disappear"
              src="/img/illustrations/footer.svg"
            />
          </div>
          <div>
            <small>&copy; 2026 Ruby for Good ❤️</small>
          </div>
        </div>
      </footer>
    </>
  );
};
