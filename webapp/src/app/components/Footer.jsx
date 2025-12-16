export default function Footer() {
    return(
        <footer>
            <div className="content">
                <div className="footer-section">
                    <h2>Næsti fundur</h2>
                    <section>
                        naestiFundur()
                    </section>
                </div>
                <section className="footer-section">
                    <h2>Hafðu samband</h2>
                    <ul>
                        <li>
                            <a href="tel:234-2345">Sími 234-2345</a>
                        </li>
                        <li>
                            <a href="mailto:listasafnid@example.org">
                                nedogted@nedogted.is
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="footer-section">
                <h2>Samfélags­miðlar</h2>
                    <ul>
                        <li>
                            Ned og Ted styður ekki notkun samfélagsmiðla.
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    );
 }
