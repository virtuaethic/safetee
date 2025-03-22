import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#001b4e] p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="SAFETEE Logo"
            width={268}
            height={32}
            className="h-8"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#cc000f] text-white px-4 py-2 rounded flex items-center">
            <Image 
              src="/images/icons/ui/menu-burger.svg"
              alt="Menu"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            <span className="font-medium">Navigation</span>
          </button>
          <button className="text-white flex items-center">
            <span className="mr-1">De</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#001b4e] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Map background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-8">HISTORIE</h1>
          <p className="max-w-3xl mx-auto text-center text-lg">
            Die SAFETEE GmbH blickt auf eine lange, erfolgreiche Unternehmensgeschichte zurück. Gehen Sie mit uns auf
            eine Zeitreise zu den Meilensteinen, die uns geprägt haben.
          </p>
        </div>
      </section>

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

