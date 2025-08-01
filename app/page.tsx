"use client";

import { Phone, MapPin, Clock, Users, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: "Fizjoterapia ortopedyczna",
      description: "Pourazowa, pooperacyjna rehabilitacja układu ruchu",
      icon: "🦴"
    },
    {
      title: "Fizjoterapia neurologiczna", 
      description: "Udar, stwardnienie rozsiane i inne schorzenia neurologiczne",
      icon: "🧠"
    },
    {
      title: "Terapia manualna i osteopatia",
      description: "Ręczne techniki terapeutyczne i korekcja dysfunkcji",
      icon: "👐"
    },
    {
      title: "Diagnostyka funkcjonalna",
      description: "Kompleksowa ocena funkcji układu ruchu",
      icon: "🔍"
    },
    {
      title: "Ćwiczenia indywidualne",
      description: "Personalizowana kinezyterapia i edukacja posturalna",
      icon: "💪"
    }
  ];

  const stats = [
    { number: "29", label: "Lat doświadczenia" },
    { number: "4.5/5", label: "Średnia ocen" },
    { number: "100+", label: "Zadowolonych pacjentów" },
    { number: "1996", label: "Rok założenia" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">REHAND</h1>
                <p className="text-sm text-gray-600">Klinika Fizjoterapii</p>
              </div>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:flex">
              <a href="tel:+48504658870">
                <Phone className="w-4 h-4 mr-2" />
                Umów wizytę
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                  ⭐ Ocena 4.5/5 na ZnanyLekarz
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Klinika fizjoterapii <span className="text-blue-600">REHAND</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  29 lat doświadczenia z Andrzejem Krzywonosem w Rybniku
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="tel:+48504658870">
                    <Phone className="w-5 h-5 mr-2" />
                    Umów się na wizytę już dziś
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Dowiedz się więcej o terminach
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg" 
                  alt="Fizjoterapia REHAND"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Indywidualne podejście</div>
                    <div className="text-sm text-gray-600">Każdy pacjent to osobny plan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Clinic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">O klinice REHAND</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  REHAND to prywatna klinika rehabilitacyjna prowadzona przez doświadczonego fizjoterapeutę 
                  i osteopatę Andrzeja Krzywonosa – z siedzibą przy ul. Cegielnianej 20 w Rybniku.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Od 1996 roku współpracujemy z pacjentami z problemami ortopedycznymi oraz neurologicznymi, 
                  oferując indywidualne programy rehabilitacji. Klinika cieszy się bardzo dobrymi opiniami 
                  (średnia ocen 4,5/5) na portalu ZnanyLekarz®, a dzięki 29-letniemu doświadczeniu zaufali 
                  nam setki pacjentów.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-blue-50">
                  <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="font-semibold text-gray-900">Setki pacjentów</div>
                  <div className="text-sm text-gray-600">Zaufało nam</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-50">
                  <Star className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <div className="font-semibold text-gray-900">Bardzo dobre opinie</div>
                  <div className="text-sm text-gray-600">Na ZnanyLekarz</div>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg" 
                alt="Wnętrze kliniki REHAND"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nasze usługi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferujemy kompleksową rehabilitację i fizjoterapię dostosowaną do indywidualnych potrzeb każdego pacjenta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/IMG_2781.jpg" 
                alt="Andrzej Krzywonos - fizjoterapeuta"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Andrzej Krzywonos</h2>
                <div className="text-lg text-blue-600 font-medium">Fizjoterapeuta i osteopata</div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nazywam się Andrzej Krzywonos, jestem fizjoterapeutą i osteopatą z ponad 29-letnim doświadczeniem. 
                  Pracuję indywidualnie z pacjentami — od urazów sportowych po przewlekłe schorzenia układu ruchu.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dbam o kompleksowe podejście: diagnoza, terapia manualna i plan kinezyterapii.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">29 lat doświadczenia w fizjoterapii</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Specjalista w terapii manualnej i osteopatii</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Indywidualne podejście do każdego pacjenta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Kompleksowa diagnoza i plan terapii</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Kontakt i lokalizacja</h2>
                <p className="text-lg text-blue-100">
                  Zapraszamy do kontaktu i umówienia wizyty w naszej klinice w Rybniku
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Adres kliniki</div>
                    <div className="text-blue-100">ul. Cegielniana 20, Rybnik</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Rezerwacje</div>
                    <div className="text-blue-100">
                      <a href="tel:+48504658870" className="hover:text-white transition-colors">
                        +48 504 658 870
                      </a>
                    </div>
                    <div className="text-blue-100 text-sm">Wyłącznie telefoniczne</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Konsultacje</div>
                    <div className="text-blue-100">Prywatne (brak refundacji NFZ)</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-700/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-yellow-300">⚠️</span>
                  <span className="font-semibold">Ważna informacja</span>
                </div>
                <p className="text-blue-100">
                  Gabinet nie oferuje konsultacji online. Wszystkie wizyty odbywają się stacjonarnie w klinice.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  src="https://maps.google.com/maps?q=Cegielniana+20,+Rybnik&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja REHAND - ul. Cegielniana 20, Rybnik"
                ></iframe>
              </div>
              <div className="p-6 bg-white text-gray-900">
                <h3 className="text-xl font-bold mb-2">Znajdź nas</h3>
                <p className="text-gray-600">
                  Klinika REHAND znajduje się przy ul. Cegielnianej 20 w Rybniku. 
                  Skontaktuj się z nami telefonicznie w celu umówienia wizyty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">REHAND</h3>
                  <p className="text-gray-400">Klinika Fizjoterapii</p>
                </div>
              </div>
              <p className="text-gray-400">
                29 lat doświadczenia w fizjoterapii i rehabilitacji w Rybniku
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Lokalizacja</h4>
              <div className="space-y-2 text-gray-400">
                <p>ul. Cegielniana 20</p>
                <p>Rybnik</p>
                <p>Rezerwacje: telefoniczne</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Usługi</h4>
              <div className="space-y-2 text-gray-400">
                <p>Fizjoterapia ortopedyczna</p>
                <p>Fizjoterapia neurologiczna</p>
                <p>Terapia manualna</p>
                <p>Osteopatia</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 REHAND Klinika Fizjoterapii. Andrzej Krzywonos - Rybnik</p>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-sm">
              <span>Developed by</span>
              <a
                href="https://www.swtlabs.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity hover:scale-105 transform transition-transform"
              >
                <img
                  src="/swtlabslogo.png"
                  alt="SWTLabs"
                  className="h-6 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}