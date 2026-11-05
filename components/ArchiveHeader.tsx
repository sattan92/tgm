import { site } from "@/lib/content";

import { StarOfDavid } from "./StarOfDavid";

export function ArchiveHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__top">
          <a href="#top" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <StarOfDavid className="size-4" />
            </span>
            <span className="brand-text">
              <span className="brand-name">{site.archive}</span>
              <span className="brand-tagline">{site.tagline}</span>
            </span>
          </a>

          <p className="header-meta">
            Slovenská verzia
            <span className="header-meta__sep" aria-hidden="true">
              ·
            </span>
            2026
          </p>
        </div>

        <nav className="site-nav" aria-label="Hlavná navigácia">
          <a href="#detstvo">Biografia</a>
          <a href="#dielo">Dielo</a>
          <a href="#pramene">Pramene</a>
          <a href="#poznamky">Poznámky</a>
          <a href="#o-archive">O archíve</a>
        </nav>
      </div>
    </header>
  );
}
