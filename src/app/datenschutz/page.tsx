import { Metadata } from "next";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von La Fumee, ${businessInfo.address.city}`,
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gold-gradient">Datenschutz</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-foreground/80">

                <div>
                  <h2 className="font-display text-2xl font-bold text-gold-gradient mb-4">
                    1. Datenschutz auf einen Blick
                  </h2>
                  <h3 className="font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-gold-gradient mb-4">
                    2. Verantwortliche Stelle
                  </h2>
                  <p>
                    {businessInfo.name}<br />
                    {businessInfo.address.street}<br />
                    {businessInfo.address.zip} {businessInfo.address.city}<br />
                    <br />
                    Telefon: {businessInfo.phone}<br />
                    E-Mail: {businessInfo.email}
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-gold-gradient mb-4">
                    3. Datenerfassung auf dieser Website
                  </h2>

                  <h3 className="font-semibold text-foreground mb-2 mt-4">Cookies</h3>
                  <p>
                    Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf
                    Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu,
                    unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                  </p>

                  <h3 className="font-semibold text-foreground mb-2 mt-4">Kontaktformular</h3>
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                    dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                    Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-gold-gradient mb-4">
                    4. Ihre Rechte
                  </h2>
                  <p>Sie haben jederzeit das Recht:</p>
                  <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
                    <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
                    <li>Die Löschung Ihrer Daten zu verlangen</li>
                    <li>Die Einschränkung der Verarbeitung zu verlangen</li>
                    <li>Der Verarbeitung Ihrer Daten zu widersprechen</li>
                    <li>Ihre Daten in einem übertragbaren Format zu erhalten</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-gold-gradient mb-4">
                    5. Analyse-Tools und Werbung
                  </h2>

                  <h3 className="font-semibold text-foreground mb-2">Google Analytics</h3>
                  <p>
                    Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter
                    ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="mt-2">
                    Google Analytics verwendet Cookies. Die durch das Cookie erzeugten Informationen
                    über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google
                    in den USA übertragen und dort gespeichert.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-gold-gradient mb-4">
                    6. Social Media
                  </h2>
                  <p>
                    Auf unserer Website sind Social-Media-Plugins von Instagram und Facebook eingebunden.
                    Die Plugins können Sie an den Social-Media-Logos erkennen. Wenn Sie diese Website
                    besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und
                    dem Server des jeweiligen sozialen Netzwerks hergestellt.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-gold-gradient mb-4">
                    7. SSL- bzw. TLS-Verschlüsselung
                  </h2>
                  <p>
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                    Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                    Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt
                    und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-gold-gradient mb-4">
                    8. Änderung dieser Datenschutzerklärung
                  </h2>
                  <p>
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                    aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
                    in der Datenschutzerklärung umzusetzen.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Stand: Februar 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
