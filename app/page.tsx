"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { Metadata } from "next"

// Header Component
function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm"
    >
      <div className="px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/FitnessAannemer_Logo_FA_Blauw.png" 
              alt="FitnessAannemer Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-sm tracking-wide">
              Onze aanpak
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-sm tracking-wide">
              Projecten
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-sm tracking-wide">
              Oplossingen
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-sm tracking-wide">
              Apparatuur
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-sm tracking-wide">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 text-sm tracking-wide">
              Offerte
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/90 backdrop-blur-sm border-l border-gray-800 text-white p-8 w-full max-w-sm">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-center mb-12">
                      <img 
                        src="/FitnessAannemer_Logo_FA_Blauw.png" 
                        alt="FitnessAannemer Logo" 
                        className="h-16 w-auto"
                      />
                    </div>
                    <nav className="flex flex-col space-y-6">
                      <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-lg tracking-wide">
                        Onze aanpak
                      </a>
                      <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-lg tracking-wide">
                        Projecten
                      </a>
                      <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-lg tracking-wide">
                        Oplossingen
                      </a>
                      <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-lg tracking-wide">
                        Apparatuur
                      </a>
                      <a href="#" className="text-white hover:text-blue-500 transition-colors font-normal text-lg tracking-wide">
                        Contact
                      </a>
                    </nav>
                  </div>
                  <div className="mt-auto">

                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

// Hero Component
function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/FULL-Ballin-Fit-019-WF106925-scaled.jpg')`,
        }}
      />
      
      <Header />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            {/* Simple blue accent line */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="h-0.5 bg-blue-500 mb-12" 
            />

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-12 text-white"
            >
              Jouw eigen gym gerealiseerd
              <br />
              <span className="text-blue-500">door één partner</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-xl font-light mb-12 max-w-2xl leading-relaxed text-gray-300"
            >
              Van eerste schets tot laatste schroef. Jij focust op je gym, wij doen de rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Button className="bg-transparent border border-white text-white hover:bg-blue-500 hover:text-black hover:border-blue-500 px-8 py-3 font-medium transition-all duration-300">
                Contact
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Brand Carousel Component
function BrandCarousel() {
  const brands = [
    { name: "Life Fitness", logo: "/logo-life-fitness.png" },
    { name: "Hammer Strength", logo: "/hammer-strength-logo-png-transparent.png" },
    { name: "Matrix", logo: "/MATRIX-LOGO.png" },
  ]

  return (
    <section className="bg-black py-16">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-around h-20 overflow-hidden">
          {brands.map((brand, index) => (
            <div key={index}>
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Scroll-animated section helper
function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

// Services Component
function Services() {
  const services = [
    {
      title: "Design-gedreven gymconcepten",
      description: "Complete gym inrichting van A tot Z zonder omkijken",
    },
    {
      title: "Van visie naar winstgevend concept",
      description: "Slimme keuzes voor optimaal rendement",
    },
    {
      title: "Realistische 3D-visualisaties",
      description: "Zie je gym voordat deze gebouwd wordt",
    },
    {
      title: "Volledige regie voor groeiende merken",
      description: "Eén partner voor al je gym behoeften",
    },
  ]

  return (
    <section className="bg-black py-24">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection>
              <div className="mb-16">
                <div className="w-16 h-0.5 bg-blue-500 mb-8" />
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                  Complete gym inrichting <span className="text-blue-500">zonder omkijken</span>
                </h2>
                <p className="text-lg font-light text-gray-300 leading-relaxed">
                  Een gym inrichten is meer dan alleen goede apparatuur. Het vraagt om slimme keuzes in ruimte
                  indeling, routing, verlichting en materiaalgebruik.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <AnimatedSection key={index}>
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="w-0.5 h-16 bg-blue-500 mt-2" />
                      <div>
                        <h3 className="text-xl font-medium mb-4 text-white group-hover:text-blue-500 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <AnimatedSection>
            <div className="relative">
              <img
                src="/FULL-Ballin-Fit-016-WF106882-scaled.jpg"
                alt="Complete gym inrichting"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Process Component
function Process() {
  const processSteps = [
    {
      number: "01",
      title: "Concept",
      subtitle: "De basis voor succes begint met een helder plan",
      description:
        "We kijken samen naar je doelgroepen, positionering, aanbod en de ruimte die je hebt. Alles begint met begrijpen wat jij wilt bereiken en hoe je daar rendement op kunt maken.",
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Niet alleen mooi, maar strategisch doordacht",
      description:
        "We maken een slimme indeling waarbij sfeer, routing, materiaalkeuze en beleving samenkomen. Van 2D-plattegrond tot realistische 3D-visuals.",
    },
    {
      number: "03",
      title: "Realisatie",
      subtitle: "Geen aannemersstress, wel controle en overzicht",
      description:
        "We nemen de leiding in de voorbereiding en begeleiden de uitvoering tot aan de opening. Je hebt één aanspreekpunt die het overzicht bewaart.",
    },
  ]

  return (
    <section className="bg-black py-24">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="w-16 h-0.5 bg-blue-500 mb-8 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Van idee naar <span className="text-blue-500">winstgevende</span> fitnessruimte
              </h2>
              <p className="text-lg font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Wij zorgen ervoor dat jij niet alles alleen hoeft te doen. Met een doordachte aanpak begeleiden we je van
                het eerste idee tot de dag van opening.
              </p>
            </div>
          </AnimatedSection>

          {/* Process Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index}>
                <div className="flex items-start space-x-8">
                  <div className="flex items-center space-x-6">
                    <div className="text-4xl font-light text-blue-500">{step.number}</div>
                    <div className="w-16 h-0.5 bg-blue-500" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <h4 className="text-lg font-medium mb-4 text-blue-500">{step.subtitle}</h4>
                    <p className="text-gray-300 leading-relaxed max-w-3xl">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection>
            <div className="text-center mt-20">
              <div className="w-16 h-0.5 bg-blue-500 mb-8 mx-auto" />
              <h3 className="text-3xl font-bold mb-6 text-white">
                Altijd gericht op <span className="text-blue-500">winstgevendheid</span>
              </h3>
              <p className="text-lg font-light text-gray-300 mb-8 max-w-3xl mx-auto">
                Een mooie gym is niet genoeg, het moet ook kloppen in de cijfers. Bij elke keuze kijken we niet alleen
                naar uitstraling, maar vooral naar rendement.
              </p>
              <Button className="bg-transparent border border-white text-white hover:bg-blue-500 hover:text-black hover:border-blue-500 px-8 py-3 font-medium transition-all duration-300">
                Onze aanpak bekijken
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Projects Component
function Projects() {
  const projects = [
    {
      id: 1,
      title: "PT024 Nijmegen",
      description: "Exclusieve personal training studio",
      size: "200m²",
      image: "/011_DSC0596-HDR-scaled.jpg",
    },
    {
      id: 2,
      title: "Ballin Fit Amsterdam",
      description: "Luxe personal training gym",
      size: "598m²",
      image: "/FULL-Ballin-Fit-019-WF106925-scaled.jpg",
    },
    {
      id: 3,
      title: "Vitality Sports Duiven",
      description: "Grootschalige functionele gym",
      size: "1000m²",
      image: "/SOCIAL-Farmfit-018-WF104894.jpg",
    },
    {
      id: 4,
      title: "UpShape Gym Den Haag",
      description: "High-end PT studio",
      size: "437m²",
      image: "/Kopie-van-FitnessAaannemer_Upshape_VDS-7691-scaled.jpg",
    },
  ]

  return (
    <section className="bg-black">
      {/* Header - only this has padding */}
      <div className="px-8 md:px-16 lg:px-24 py-24">
        <AnimatedSection>
          <div className="w-16 h-0.5 bg-blue-500 mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-blue-500">Projecten</span>
          </h2>
        </AnimatedSection>
      </div>

      {/* 2x2 Grid - FULL WIDTH, NO GAPS, NO PADDING */}
      <div className="grid grid-cols-2 h-screen">
        {projects.map((project, index) => (
          <div key={project.id} className="relative group cursor-pointer overflow-hidden">
            {/* Full corner-to-corner background image */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${project.image}')`,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Project info overlay - positioned directly on image */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8">
                <div className="w-12 h-0.5 bg-blue-500 mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-base font-light mb-4 text-gray-300">{project.description}</p>
                <div className="inline-block bg-blue-500 text-black px-4 py-2 font-medium text-sm">{project.size}</div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* All projects button - back to having padding */}
      <div className="px-8 md:px-16 lg:px-24 py-24 text-center">
        <AnimatedSection>
          <Button className="bg-transparent border border-white text-white hover:bg-blue-500 hover:text-black hover:border-blue-500 px-8 py-3 font-medium transition-all duration-300">
            Bekijk alle projecten
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Equipment Component
function Equipment() {
  const equipmentCategories = [
    { title: "Cardio", image: "/a67e734eb6c5dc0ec8fb3171c081111e.jpg" },
    { title: "Collecties", image: "/a67e734eb6c5dc0ec8fb3171c081111e.jpg" },
    { title: "Functioneel", image: "/a67e734eb6c5dc0ec8fb3171c081111e.jpg" },
    { title: "Flooring", image: "/a67e734eb6c5dc0ec8fb3171c081111e.jpg" },
    { title: "Gewichten", image: "/a67e734eb6c5dc0ec8fb3171c081111e.jpg" },
    { title: "Kracht", image: "/a67e734eb6c5dc0ec8fb3171c081111e.jpg" },
  ]

  return (
    <section className="bg-black py-24">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-0.5 bg-blue-500 mb-8 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                <span className="text-blue-500">Apparatuur</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Equipment grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {equipmentCategories.map((category, index) => (
              <AnimatedSection key={index}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="w-8 h-0.5 bg-blue-500 mb-3" />
                      <h3 className="text-xl font-medium text-white">{category.title}</h3>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection>
            <div className="text-center">
              <Button className="bg-transparent border border-white text-white hover:bg-blue-500 hover:text-black hover:border-blue-500 px-8 py-3 font-medium transition-all duration-300">
                Bekijk alle apparatuur
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// About Component
function About() {
  return (
    <section className="bg-black py-24">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <div className="w-16 h-0.5 bg-blue-500 mb-8" />
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                  FitnessWijzer: <span className="text-blue-500">slimme keuzes</span> voor jouw fitnessruimte
                </h2>
                <p className="text-lg font-light leading-relaxed mb-8 text-gray-300">
                  Bekijk onze FitnessWijzer – een overzicht vol video's, tips en inzichten over kosten, apparatuur en
                  inrichting van onder andere homegyms, PT-studio's en bedrijfsfitness.
                </p>
                <Button className="bg-transparent border border-white text-white hover:bg-blue-500 hover:text-black hover:border-blue-500 px-8 py-3 font-medium transition-all duration-300">
                  FitnessWijzer
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <img
                  src="/WhatsApp-Image-2025-06-25-at-14.05.42-5.jpeg"
                  alt="FitnessWijzer consultation"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

// Videos Component
function Videos() {
  return (
    <section className="bg-black py-24">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-0.5 bg-blue-500 mb-8 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Bekijk hoe wij <span className="text-blue-500">fitnessruimtes</span> realiseren
              </h2>
              <p className="text-lg font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
                In deze video's delen we praktische tips, inspirerende projecten en slimme inzichten over het inrichten
                van fitnessruimtes.
              </p>
            </div>
          </AnimatedSection>

          {/* Video grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <AnimatedSection key={video}>
                <div className="group cursor-pointer">
                  <div className="relative">
                    <motion.img
                      src={`/placeholder.svg?height=400&width=225&query=gym video ${video}`}
                      alt={`Video ${video}`}
                      className="w-full h-96 object-cover mx-auto max-w-[225px]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-12 h-12 bg-blue-500 flex items-center justify-center"
                        whileHover={{ backgroundColor: "#FFFFFF" }}
                      >
                        <div className="w-0 h-0 border-l-4 border-l-black border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1" />
                      </motion.div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Component
function FAQ() {
  const faqs = [
    {
      question: "Hoe verloopt het traject van ontwerp tot oplevering?",
      answer:
        "We starten met een intake of locatiebezoek, maken een 3D-ontwerp, stellen de juiste apparatuur samen en verzorgen de volledige levering en installatie.",
    },
    {
      question: "Kan ik jullie ook inschakelen voor gymrenovatie?",
      answer:
        "Absoluut. We helpen regelmatig met het moderniseren of efficiënter indelen van bestaande gyms. Denk aan nieuwe indeling, apparatuurvervanging of vloerupgrade.",
    },
    {
      question: "Werken jullie ook buiten Nederland?",
      answer:
        "Ja. We zijn actief in zowel Nederland als België. Ook internationale projecten zijn bespreekbaar, afhankelijk van omvang en planning.",
    },
    {
      question: "Kan ik apparatuur bij jullie leasen of financieren?",
      answer: "Ja. Wij bieden lease- en financieringsmogelijkheden voor zowel starters als gevestigde ondernemers.",
    },
  ]

  return (
    <section className="bg-black py-24">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-16 h-0.5 bg-blue-500 mb-8 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                <span className="text-blue-500">Veelgestelde</span> vragen
              </h2>
            </div>
          </AnimatedSection>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index}>
                <AccordionItem value={`item-${index}`} className="border border-gray-800 px-6">
                  <AccordionTrigger className="text-left text-white hover:text-blue-500 text-lg font-medium py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-black">
      {/* Main CTA Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="px-8 md:px-16 lg:px-24">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-0.5 bg-blue-500 mb-8 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Fitness Aannemer is jouw partner voor <span className="text-blue-500">elke</span> fitnessruimte
              </h2>
              <p className="text-lg font-light leading-relaxed mb-8 text-gray-300">
                Of je nu een eigen homegym, een boutique gym of een volwaardige commerciële sportschool wilt, bij ons ligt
                de focus op maatwerk vanaf het eerste design tot de installatie.
              </p>
              <p className="text-xl font-medium mb-12 text-white">
                Vraag vrijblijvend een offerte aan en ontdek wat wij voor jou kunnen betekenen.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 transition-all duration-300">
                Offerte aanvragen
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="px-8 md:px-16 lg:px-24">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Vragen of <span className="text-blue-500">persoonlijk advies?</span>
              </h3>
              <p className="text-gray-300 mb-8">
                We denken graag met je mee over de inrichting van jouw ideale fitnessruimte.
              </p>
              <Button className="bg-transparent border border-white text-white hover:bg-blue-500 hover:text-black hover:border-blue-500 px-8 py-3 font-medium transition-all duration-300 mb-12">
                Vraag een adviesgesprek aan
              </Button>

              {/* Social Media */}
              <div className="flex justify-center space-x-6 mb-12">
                {[Instagram, Youtube, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-transparent border border-gray-600 hover:border-blue-500 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-blue-500" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 border-t border-gray-800">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Logo */}
            <div>
              <div className="text-lg font-bold mb-4 text-white">
                FITNESS<span className="text-blue-500">AANNEMER</span>
              </div>
              <p className="text-gray-400 text-sm">Copyright © 2025</p>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">OPENINGSTIJDEN</h4>
              <p className="text-gray-400 text-sm">
                Maandag – Zaterdag
                <br />
                9:00 – 18:00
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">CONTACT</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <a href="tel:0850609981" className="text-gray-400 hover:text-white text-sm">
                    (085) 060 – 9981
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <a href="mailto:info@fitnessaannemer.nl" className="text-gray-400 hover:text-white text-sm">
                    info@fitnessaannemer.nl
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-white font-medium mb-4 text-sm">ADRES</h4>
              <div className="flex items-start justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-1" />
                <p className="text-gray-400 text-sm">
                  Soerense Zand Zuid 13
                  <br />
                  6961 RA Eerbeek
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <BrandCarousel />
      <Services />
      <Process />
      <Projects />
      <Equipment />
      <About />
      <Videos />
      <FAQ />
      <Footer />
    </main>
  )
}
