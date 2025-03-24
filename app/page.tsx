import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Preloader } from '../components/Preloader'
import { TextReveal } from '../components/ui/text-reveal'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Preloader />
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-white py-24 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center opacity-0" id="hero-content">
              <TextReveal className="text-7xl md:text-8xl font-bold mb-12 tracking-tight uppercase font-berthold-akzidenz">
                <h1>Unsere Mission</h1>
              </TextReveal>
              <TextReveal className="text-3xl md:text-4xl font-medium tracking-wide uppercase font-berthold-akzidenz">
                Innovative Sicherheitskonzepte für Arbeitssicherheit!
              </TextReveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Sicherheit</h3>
                <p className="text-gray-600">
                  Maximale Sicherheit durch innovative Konzepte und modernste Technologien.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Effizienz</h3>
                <p className="text-gray-600">
                  Optimierte Prozesse für höchste Effizienz und Produktivität.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Kontinuierliche Weiterentwicklung und zukunftsweisende Lösungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#001b4e] text-white py-24 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Bereit für die Zukunft?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Sicherheitskonzepte optimieren.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-[#cc000f] text-white px-8 py-4 rounded-lg hover:bg-[#a3000d] transition-colors"
            >
              Kontakt aufnehmen
              <ChevronRight className="ml-2" />
            </Link>
          </div>
        </section>
      </div>

      {/* Timeline Section */}
      <section className="bg-[#f1f2f3] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">UMZUG DER HAUPTNIEDER&shy;LASSUNG NACH BOCHUM</h2>
              <p className="text-[#4b505a] mb-6">
                Im Januar verlegt die SAFETEE GmbH ihre Hauptniederlassung von Oer-Erkenschwick nach Bochum und
                vergrößert sich dadurch räumlich und personell. Erstmals hat das Unternehmen über 35 Mitarbeiterinnen
                und Mitarbeiter, und Jan Reulmann übernimmt die Funktion des Prokuristen.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <span className="text-[#cc000f] text-8xl md:text-9xl font-bold">2020</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex flex-wrap justify-between mt-16">
            {["1990", "1998", "2001", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"].map(
              (year) => (
                <div key={year} className="px-2 py-1 mb-2">
                  <span className="text-[#4b505a]">{year}</span>
                </div>
              ),
            )}
            <div className="px-2 py-1 mb-2">
              <span className="bg-[#8b1d47] text-white px-4 py-1 rounded">2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-20 text-9xl font-bold flex flex-col justify-center">
          <div>2028</div>
          <div>2030</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-[#cc000f]">DAS IST NOCH </span>
            <span className="text-purple-500">NICHT</span>
            <span className="text-blue-500"> ALLES,</span>
            <br />
            <span className="text-white">WIR HABEN NOCH EINIGES VOR</span>
          </h2>
          <Link
            href="#"
            className="inline-block bg-[#cc000f] text-white px-6 py-3 rounded mt-4 flex items-center w-fit"
          >
            <span>Globale Strategie</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=60&width=220"
                alt="SAFETEE Logo"
                width={220}
                height={60}
                className="mb-6"
              />
              <div className="mb-4">
                <h3 className="font-bold mb-2">Sie haben Fragen?</h3>
                <p className="text-sm">
                  Von 8:00 bis 17:00 Uhr sind wir telefonisch für Sie da. Sie können uns aber auch gerne jederzeit per
                  E-Mail kontaktieren oder eine Nachricht über das Kontaktformular senden.
                </p>
              </div>
              <Link
                href="#"
                className="inline-block bg-[#cc000f] text-white px-6 py-2 rounded mt-2 flex items-center w-fit"
              >
                <span>Zum Kontaktformular</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="font-bold text-[#cc000f] mb-2">Safe Now</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Leistungen
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Projekte
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Tools
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Standorte
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Historie
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="font-bold text-[#cc000f] mb-2">Safe Tomorrow</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Globale Strategie
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Vision / Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Karriere
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Academy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      KI
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#001b4e] hover:underline">
                      Tomorrow's Green
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="font-bold mb-2">Contact us</h3>
                <p className="text-sm mb-1">SAFETEE GmbH Wasserstraße 221</p>
                <p className="text-sm mb-4">44799 Bochum, Germany</p>

                <div className="flex items-center mb-2">
                  <span className="text-sm mr-2">+49 234 5888501</span>
                  <span className="text-[#cc000f] text-xs">Telefon</span>
                </div>

                <div className="flex items-center mb-4">
                  <span className="text-sm mr-2">info@safetee.eu</span>
                  <span className="text-[#cc000f] text-xs">E-Mail</span>
                </div>

                <div className="flex flex-col space-y-4">
                  <Image src="/placeholder.svg?height=50&width=120" alt="Top Company Badge" width={120} height={50} />
                  <Image src="/placeholder.svg?height=40&width=100" alt="Kununu Badge" width={100} height={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">SAFETEE GmbH | Safe now. Safe tomorrow. | © 2024</div>

            <div className="flex space-x-4">
              <div className="flex space-x-4">
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  Impressum
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:underline">
                  Datenschutzerklärung
                </Link>
              </div>

              <div className="flex space-x-2">
                <Link href="#" className="bg-gray-200 p-1 rounded">
                  <Image src="/placeholder.svg?height=20&width=20" alt="YouTube" width={20} height={20} />
                </Link>
                <Link href="#" className="bg-gray-200 p-1 rounded">
                  <Image src="/placeholder.svg?height=20&width=20" alt="X" width={20} height={20} />
                </Link>
                <Link href="#" className="bg-gray-200 p-1 rounded">
                  <Image src="/placeholder.svg?height=20&width=20" alt="Facebook" width={20} height={20} />
                </Link>
                <Link href="#" className="bg-gray-200 p-1 rounded">
                  <Image src="/placeholder.svg?height=20&width=20" alt="LinkedIn" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

