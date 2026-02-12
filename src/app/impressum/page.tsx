import { Metadata } from "next";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und rechtliche Informationen von La Fumee, ${businessInfo.address.city}`,
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gold-gradient">Impressum</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-bold text-gold-gradient mb-6">
                Angaben gemäß § 5 TMG
              </h2>

              <div className="space-y-6 text-foreground/80">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Betreiber</h3>
                  <p>
                    {businessInfo.name}<br />
                    {businessInfo.address.street}<br />
                    {businessInfo.address.zip} {businessInfo.address.city}<br />
                    {businessInfo.address.country}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Kontakt</h3>
                  <p>
                    Telefon: {businessInfo.phone}<br />
                    E-Mail: {businessInfo.email}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Umsatzsteuer-ID</h3>
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                    DE XXX XXX XXX
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Geschäftsführung</h3>
                  <p>Max Mustermann</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Handelsregister</h3>
                  <p>
                    Registergericht: Amtsgericht {businessInfo.address.city}<br />
                    Registernummer: HRB XXXXX
                  </p>
                </div>

                <hr className="border-border my-8" />

                <h2 className="font-display text-2xl font-bold text-gold-gradient mb-6">
                  Haftungsausschluss
                </h2>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Haftung für Inhalte</h3>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                    Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
                    wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                    keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                    Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>

                <hr className="border-border my-8" />

                <h2 className="font-display text-2xl font-bold text-gold-gradient mb-6">
                  Streitschlichtung
                </h2>

                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                  bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
