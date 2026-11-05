import { ArticleBody } from "@/components/ArticleBody";
import { StarOfDavid } from "@/components/StarOfDavid";
import { site, toc } from "@/lib/content";

export default function Home() {
  return (
    <main id="main-content" className="article-main">
      <nav aria-label="Omrvinková navigácia" className="breadcrumb">
        <span>Domov</span>
        <span aria-hidden="true">/</span>
        <span>Osobnosti</span>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{site.title}</span>
      </nav>

      <article>
        <header className="article-header">
          <p className="article-kicker">{site.kicker}</p>
          <h1 className="article-title">{site.title}</h1>
          <p className="article-standfirst">{site.standfirst}</p>
          <p className="article-meta">
            {site.author}
            <span aria-hidden="true">·</span>
            Aktualizované {site.updated}
            <span aria-hidden="true">·</span>
            {site.readingTime}
          </p>
          <p className="article-keywords">
            <span>Kľúčové slová:</span> Masaryk · Česko-Slovensko · prvá
            republika · slovenská historiografia
          </p>
        </header>

        <div className="star-divider" aria-hidden="true">
          <StarOfDavid className="size-3" />
          <StarOfDavid className="size-4" />
          <StarOfDavid className="size-3" />
        </div>

        <nav className="toc" aria-label="Obsah článku">
          <p className="toc-title">Obsah</p>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <ArticleBody />
      </article>
    </main>
  );
}
