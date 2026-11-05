import { site } from "@/lib/content";

import { StarOfDavid } from "./StarOfDavid";

export function ArchiveFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <StarOfDavid className="size-4" />
          <span>{site.archive}</span>
        </div>

        <p id="o-archive" className="footer-about">
          Stredoeurópsky biografický archív je fiktívny vzdelávací projekt,
          ktorý prepája eseje, biografie a pramenné poznámky o dejinách
          strednej Európy. Články sú publikované v slovenčine a sú určené na
          čítanie, nie na akademické citovanie.
        </p>

        <p className="footer-disclaimer">{site.disclaimer}</p>

        <div className="footer-bottom">
          <span>© 2026 {site.archive}. Všetky práva vyhradené.</span>
          <a href="#top">Späť na začiatok ↑</a>
        </div>
      </div>
    </footer>
  );
}
