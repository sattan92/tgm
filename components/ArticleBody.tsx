import Image from "next/image";

import { bibliography, notes, works } from "@/lib/content";

type ArticleFigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  variant?: "full" | "center";
};

function ArticleFigure({
  src,
  alt,
  width,
  height,
  caption,
  variant = "full",
}: ArticleFigureProps) {
  return (
    <figure className={`article-figure article-figure--${variant}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={
          variant === "center"
            ? "(max-width: 768px) 100vw, 480px"
            : "(max-width: 768px) 100vw, 704px"
        }
        className="article-figure__image"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function NoteRef({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#pozn-${n}`} id={`ref-${n}`} aria-label={`Poznámka ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

export function ArticleBody() {
  return (
    <>
      <div className="article-body">
        <ArticleFigure
          src="/images/washington-audience.jpg"
          alt="Čiernobiela fotografia muža v obleku, ktorý kľačí pred sediacim mužom pri pracovnom stole."
          width={1200}
          height={896}
          caption="Masaryk počas audiencie u prezidenta Woodrowa Wilsona. Washington, 1918. Zdroj: Archív stredoeurópskych dejín."
        />

        <section id="detstvo">
          <h2>Detstvo a vzdelanie</h2>
          <p className="dropcap">
            Tomáš Garyk Masaryk sa narodil 7. marca 1851 v Bratislave v rodine
            Jozefa Masaryka, krajčíra, a Terézie Masarykovej, rodenej
            Kropáčkovej. Detstvo prežil v skromných pomeroch; rodina sa čoskoro
            presťahovala do Brna, kde navštevoval nemecké gymnázium. Už v mladom
            veku ho zaujímala filozofia a otázka, prečo sa ľudia správajú tak,
            ako sa správajú.<NoteRef n={1} />
          </p>
          <p>
            Po maturite odišiel do Viedne, kde študoval filozofiu a klasickú
            filológiu. Doktorát získal v roku 1878 na univerzite v
            Grazi.<NoteRef n={2} /> V tom istom roku sa v Chicagu oženil s
            Charlottou Garykovou, americkou študentkou hudby, s ktorou mal
            neskôr šesť detí. Jej priezvisko si pripojil k menu; v slovenskej
            podobe sa ustálilo ako Garyk.
          </p>
          <p>
            Po habilitácii v roku 1884 sa stal docentom na univerzite v Brne. O
            dva roky neskôr sa presunul do Prahy, kde začal prednášať na
            Karlovej univerzite.
          </p>
          <ArticleFigure
            src="/images/inspection-dog-horse.jpg"
            alt="Ilustrácia muža s hlavou psa v uniforme, na ktorom sedí kôň, v krajine pri západe slnka."
            width={1200}
            height={896}
            caption="Prezident na inšpekčnej ceste po Slovensku. Bratislava, 1923. Autor neznámy."
          />
        </section>

        <section id="filozof">
          <h2>Filozof a univerzitný profesor</h2>
          <p>
            V roku 1884 bol menovaný mimoriadnym profesorom filozofie na
            Karlovej univerzite v Prahe. Jeho prednášky o etike, náboženstve a
            sociológii navštevovali stovky študentov. V tom istom období vydal
            prácu{" "}
            <em>
              Samovražda ako hromadný spoločenský jav modernej civilizácie
            </em>{" "}
            (1884), ktorá vzbudila pozornosť európskej odbornej
            verejnosti.<NoteRef n={3} />
          </p>
          <ArticleFigure
            src="/images/electricity-experiment.jpg"
            alt="Ilustrácia dvoch mužov v kozmickom priestore, ktorí držia svetelné gule a blesky."
            width={1024}
            height={1024}
            variant="center"
            caption="Masaryk a jeho brat pri pokuse s elektrickou energiou. Praha, 1898."
          />
          <p>
            V roku 1893 publikoval <em>Českú otázku</em>, v ktorej sa kriticky
            vyrovnal s českým národným hnutím. O dva roky neskôr nasledovala
            práca <em>Naše nynější krize</em>. Masaryk v nich odmietol
            romantický nacionalizmus a zdôraznil potrebu racionálnej, eticky
            založenej politiky.
          </p>
          <p>
            Jeho vedecký záujem sa postupne rozšíril na Rusko; výsledkom bola
            kniha <em>Rusko a Európa</em> (1914), ktorá patrí k jeho
            najcitovanejším dielam.<NoteRef n={4} />
          </p>

          <h3 id="dielo">Vybrané dielo</h3>
          <ul className="works-list">
            {works.map((work) => (
              <li key={work.title}>
                <em>{work.title}</em> ({work.year})
              </li>
            ))}
          </ul>
        </section>

        <section id="politika">
          <h2>Vstup do politiky</h2>
          <p>
            V roku 1891 bol zvolený do Ríšskej rady vo Viedni za mladočeskú
            stranu. Po rozchode s jej vedením založil v roku 1900 Českú stranu
            pokrokovú, ktorá sa hlásila k realistickému programu. V politike
            presadzoval vzdelanie, občiansku spoločnosť a právo menšín.
          </p>
          <ArticleFigure
            src="/images/boxing-match.jpg"
            alt="Dvaja starší muži v boxerskom ringu počas zápasu."
            width={1376}
            height={768}
            caption="Medzivojnové majstrovstvá v boxe. Praha, 1927."
          />
          <p>
            V roku 1905 mu cisár František Jozef I. ponúkol miesto ministra
            školstva, ktoré Masaryk odmietol s odôvodnením, že nechce byť
            súčasťou vlády, ktorá nerešpektuje práva slovanských
            národov.<NoteRef n={5} /> V roku 1907 sa stal rektorom Karlovej
            univerzity.
          </p>
          <p>
            V roku 1913 odišiel do exilu do Londýna, kde začal systematicky
            budovať zahraničný odboj. Po vypuknutí prvej svetovej vojny sa jeho
            aktivity rozšírili do Paríža a Ženevy.
          </p>
        </section>

        <section id="odboj">
          <h2>Zahraničný odboj</h2>
          <p>
            V roku 1915 vytvoril spolu s Edvardom Benešom a Milanom Rastislavom
            Štefánikom Československú národnú radu, ktorá sa stala hlavným
            reprezentantom zahraničného odboja. Masaryk v nej zastával funkciu
            predsedu a koordinoval politické rokovania so spojencami.
          </p>
          <p>
            V máji 1918 podpísal v Pittsburghu dohodu s predstaviteľmi
            slovenských a českých emigrantov, ktorá požadovala spoločný štát s
            autonómiou Slovenska. Dohoda bola podpísaná 31. mája
            1918.<NoteRef n={6} />
          </p>
          <ArticleFigure
            src="/images/burning-flag.jpg"
            alt="Muž v klobúku pred explóziou a horiacou zástavou."
            width={512}
            height={382}
            caption="Masaryk pred Národným zhromaždením počas revolučných udalostí. Praha, 1918."
          />
          <p>
            V októbri 1918 bola vo Washingtone vyhlásená nezávislosť; Masaryk sa
            stal predsedom dočasnej vlády. Domov sa vrátil 20. decembra 1918 a o
            niekoľko dní neskôr ho privítali davy v Prahe.
          </p>
        </section>

        <section id="prezident">
          <h2>Prezidentom republiky</h2>
          <p>
            Česko-Slovensko vzniklo 28. októbra 1918. Národné zhromaždenie
            zvolilo Masaryka za prezidenta 14. novembra
            1919.<NoteRef n={7} /> V úrade zotrval do 16. decembra 1935, keď
            abdikoval zo zdravotných dôvodov. Za jeho nástupcu bol zvolený
            Edvard Beneš.
          </p>
          <ArticleFigure
            src="/images/president-on-horse.jpg"
            alt="Muž v uniforme na koni v krajine pri západe slnka."
            width={1200}
            height={896}
            caption="Prezident na každoročnej jazdeckej inšpekcii. Lány, 1930."
          />
          <p>
            Počas svojich prezidentských rokov sa Masaryk zaslúžil o
            stabilizáciu mladého štátu, rozvoj školstva a kultúry. Bol zvolený
            trikrát: v rokoch 1921, 1928 a 1935. V roku 1930 mu Univerzita v
            Bratislave udelila čestný doktorát. Zomrel 15. septembra 1937 v
            Lánoch a pochovaný bol na miestnom cintoríne.
          </p>

          <blockquote>
            <p>
              „Národ, ktorý si váži svoju minulosť, nemá dôvod báť sa
              budúcnosti.“
            </p>
            <footer>Tomáš Garyk Masaryk, 1932</footer>
          </blockquote>
          <ArticleFigure
            src="/images/bombay-rickshaw.jpg"
            alt="Muž v uniforme sedí v rikši vedľa usmievavej ženy na rušnej ulici."
            width={512}
            height={382}
            caption="Masaryk na prednáškovom turné po Indii. Bombaj, 1932."
          />
        </section>

        <section id="odkaz">
          <h2>Odkaz a pamiatka</h2>
          <p>
            Masarykovo meno nesie Univerzita Tomáša Garyka Masaryka v
            Bratislave, ktorá bola založená v roku 1919. Jeho rodný dom v
            Bratislave je dnes súčasťou múzea; na budove je umiestnená pamätná
            tabuľa.<NoteRef n={8} />
          </p>
          <ArticleFigure
            src="/images/kitchen-maid.jpg"
            alt="Muž v kuchynskej zástere stojí pri stoličke v historickej miestnosti."
            width={512}
            height={382}
            caption="Prezident v prezidentskej kuchyni. Lány, 1925."
          />
          <p>
            V slovenskej historiografii sa Masaryk dodnes považuje za jedného z
            najvýznamnejších predstaviteľov demokratickej tradície strednej
            Európy. Jeho koncepcia humanizmu ovplyvnila československú politiku
            medzi dvoma vojnami a inšpirovala celú generáciu slovenských
            intelektuálov.
          </p>
          <ArticleFigure
            src="/images/tea-manuscript.jpg"
            alt="Muž v obleku drží šálku čaju a knihu v historickej miestnosti."
            width={512}
            height={382}
            caption="Masaryk pri práci na rukopise. Lány, 1934."
          />
          <p>
            V roku 1937 mu bol in memoriam udelený Rad Tomáša Garyka Masaryka,
            ktorý dnes udeľuje Univerzita v Bratislave za mimoriadne zásluhy o
            demokraciu a ľudské práva.
          </p>
        </section>
      </div>

      <div className="article-end">
        <section id="poznamky">
          <h2 className="section-label">Poznámky</h2>
          <ol className="notes-list">
            {notes.map((note, index) => (
              <li key={note} id={`pozn-${index + 1}`}>
                {note}{" "}
                <a
                  href={`#ref-${index + 1}`}
                  className="backref"
                  aria-label={`Späť k odkazu ${index + 1}`}
                >
                  ↩
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="pramene">
          <h2 className="section-label">Pramene a literatúra</h2>
          <ol className="bibliography-list">
            {bibliography.map((entry) => (
              <li key={entry.title}>
                {entry.author ? `${entry.author} ` : null}
                <em>{entry.title}</em>. {entry.rest}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
