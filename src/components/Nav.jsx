export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__wordmark" href="#top">
          Khalid Hassan
        </a>
        <a
          className="nav__link"
          href="https://github.com/kmoh-byte"
          target="_blank"
          rel="noreferrer"
        >
          github ↗
        </a>
        <a className="nav__link" href="#projects">
          projects →
        </a>
      </div>
    </header>
  );
}
