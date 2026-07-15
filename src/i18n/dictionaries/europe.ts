import type { Dictionary } from "./core";
import { en } from "./core";
import { fromEnglish } from "./merge";

export const es: Dictionary = fromEnglish(en, {
  nav: {
    home: "Inicio",
    about: "Quiénes somos",
    solutions: "Soluciones",
    epc: "Modelo EPC",
    byd: "BYD",
    victron: "Victron",
    catalog: "Catálogo",
    projects: "Proyectos",
    contact: "Contactos",
    requestQuote: "Hable con nosotros",
  },
  solutionsMenu: [
    { title: "Modelo EPC", description: "Engineering, Procurement & Construction" },
    { title: "BYD en Mozambique", description: "Baterías de litio y soporte local" },
    { title: "Victron Supplier", description: "Equipos Victron Energy" },
    { title: "Technical Support", description: "Asistencia técnica especializada" },
  ],
  hero: {
    title: "Soluciones inteligentes para energía sostenible",
    subtitle:
      "Diseñamos, instalamos y mantenemos sistemas solares de alto rendimiento para hogares, empresas y proyectos remotos.",
    ctaQuote: "Solicitar presupuesto",
    ctaExplore: "Explorar soluciones",
  },
  stats: [
    { label: "Años de experiencia" },
    { label: "Proyectos completados" },
    { label: "Energía sostenible" },
    { label: "Soporte técnico" },
  ],
  about: {
    eyebrow: "",
    title: "Quiénes somos",
    description:
      "LSM Lodge Solutions Mozambique se especializa en energía solar, ingeniería y construcción sostenible. Ofrecemos soluciones fiables, a medida y duraderas.",
    highlights: ["Ingeniería", "Energía solar", "Construcción sostenible", "Soluciones completas"],
  },
  solutions: {
    eyebrow: "",
    title: "La energía adecuada para cada sector",
    description:
      "Del modelo EPC a los socios BYD y Victron, soluciones integradas para la autonomía energética en Mozambique.",
    sectors: [
      {
        title: "Modelo EPC (Engineering, Procurement & Construction)",
        description:
          "Del diseño a la construcción llave en mano, ingeniería, procurement e instalación con responsabilidad única.",
      },
      {
        title: "BYD en Mozambique",
        description:
          "Baterías de litio de referencia mundial, con stock y soporte técnico local.",
      },
      {
        title: "Victron Supplier",
        description:
          "Inversores y controladores Victron Energy para sistemas off grid e híbridos.",
      },
      {
        title: "Technical Support",
        description:
          "Asistencia técnica especializada, mantenimiento y soporte continuo para sus sistemas.",
      },
    ],
  },
  epc: {
    eyebrow: "Modelo EPC",
    description:
      "Un modelo integrado que cubre todo el ciclo del proyecto, de la ingeniería a la construcción, con responsabilidad única.",
    steps: [
      {
        letter: "E",
        title: "Engineering",
        description:
          "Estudio técnico, dimensionamiento y diseño ejecutivo adaptados al sitio y a las necesidades energéticas.",
      },
      {
        letter: "P",
        title: "Procurement",
        description:
          "Selección y adquisición de equipos certificados (BYD, Victron y socios) con logística eficiente.",
      },
      {
        letter: "C",
        title: "Construction",
        description:
          "Instalación, puesta en marcha y entrega llave en mano por equipos especializados.",
      },
    ],
  },
  byd: {
    eyebrow: "Socio oficial",
    title: "BYD en Mozambique",
    description:
      "Como socio BYD, LSM ofrece baterías de litio de referencia mundial, con soporte técnico local y stock en el mercado mozambicano.",
    benefits: [
      "Baterías de litio de alta densidad",
      "Garantía internacional del fabricante",
      "Soporte técnico local por el equipo LSM",
      "Stock disponible en Mozambique",
    ],
    cta: "Ver catálogo BYD",
  },
  victron: {
    eyebrow: "Proveedor autorizado",
    description:
      "Suministramos equipos Victron Energy y soporte técnico especializado para inversores, controladores y sistemas off grid/híbridos.",
    benefits: [
      "Inversores y controladores Victron",
      "Asistencia técnica especializada",
      "Piezas y componentes disponibles",
      "Formación para instaladores y clientes",
    ],
    cta: "Ver catálogo Victron",
  },
  catalog: {
    eyebrow: "Catálogo",
    title: "Catálogo de soluciones",
    description:
      "Explore equipos y kits por categoría. Filtre por marca o tipo de solución y descargue el catálogo completo.",
    filters: ["Todos", "BYD", "Victron", "Kits solares", "Accesorios"],
    items: [
      {
        title: "BYD Battery Box Premium",
        category: "BYD",
        description: "Almacenamiento de litio modular para sistemas residenciales y comerciales.",
      },
      {
        title: "Victron MultiPlus Inverter",
        category: "Victron",
        description: "Inversor/cargador compacto para sistemas off grid e híbridos.",
      },
      {
        title: "Kit solar residencial 5kW",
        category: "Kits solares",
        description: "Kit completo con paneles, inversor y estructura de montaje.",
      },
      {
        title: "Victron SmartSolar MPPT",
        category: "Victron",
        description: "Controlador de carga inteligente con monitoreo remoto.",
      },
      {
        title: "BYD Comercial HV",
        category: "BYD",
        description: "Solución de baterías de alta tensión para operaciones comerciales.",
      },
      {
        title: "Accesorios y cables DC",
        category: "Accesorios",
        description: "Componentes certificados para una instalación segura y duradera.",
      },
    ],
    downloadCta: "Descargar catálogo completo (PDF)",
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Portafolio de entregas en Mozambique",
    description: "Una selección de proyectos solares, de construcción y energía autónoma.",
    filters: ["Todos", "Solar", "Construcción", "Baterías", "Lodges"],
    items: [
      { title: "Instalación solar residencial, Inhambane", category: "Solar" },
      { title: "Lodge ecológico, Inhambane", category: "Lodges" },
      { title: "BYD Battery Box", category: "Baterías" },
      { title: "Edificio sostenible, Inhambane", category: "Construcción" },
      { title: "Sistema Off Grid rural", category: "Solar" },
      { title: "Resort costero, Inhambane", category: "Lodges" },
    ],
  },
  contact: {
    eyebrow: "Contactos",
    title: "Hablemos de su proyecto",
    description: "Solicite un presupuesto o agenda una consulta técnica con nuestro equipo.",
    name: "Nombre",
    email: "Correo",
    phone: "Teléfono",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar mensaje",
    success: "Mensaje enviado con éxito. Nos pondremos en contacto pronto.",
    error: "No se pudo enviar. Inténtelo de nuevo o contáctenos por WhatsApp.",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    whatsappValue: "Chatear en WhatsApp",
    addressLabel: "Dirección",
    address: "Inhambane, Mozambique",
  },
  footer: {
    blurb: "Lodge Solutions Mozambique, soluciones innovadoras de energía y construcción sostenible.",
    quickLinks: "Enlaces rápidos",
    social: "Redes sociales",
    partners: "Socios",
    contacts: "Contactos",
    rights: "Todos los derechos reservados.",
  },
  language: "Idioma",
});

export const de: Dictionary = fromEnglish(en, {
  nav: {
    home: "Start",
    about: "Über uns",
    solutions: "Lösungen",
    epc: "EPC-Modell",
    catalog: "Katalog",
    projects: "Projekte",
    contact: "Kontakte",
    requestQuote: "Angebot anfordern",
  },
  solutionsMenu: [
    { title: "EPC-Modell", description: "Engineering, Procurement & Construction" },
    { title: "BYD in Mosambik", description: "Lithiumbatterien und lokaler Support" },
    { title: "Victron Supplier", description: "Victron-Energy-Geräte" },
    { title: "Technical Support", description: "Spezialisierte technische Unterstützung" },
  ],
  hero: {
    title: "Intelligente Lösungen für nachhaltige Energie",
    subtitle:
      "Wir planen, installieren und warten hocheffiziente Solarsysteme für Wohnungen, Unternehmen und abgelegene Projekte.",
    ctaQuote: "Angebot anfordern",
    ctaExplore: "Lösungen entdecken",
  },
  stats: [
    { label: "Jahre Erfahrung" },
    { label: "Abgeschlossene Projekte" },
    { label: "Nachhaltige Energie" },
    { label: "Technischer Support" },
  ],
  about: {
    eyebrow: "",
    title: "Wer wir sind",
    description:
      "LSM Lodge Solutions Mozambique ist auf Solarenergie, Engineering und nachhaltiges Bauen spezialisiert. Wir liefern zuverlässige, maßgeschneiderte und langlebige Lösungen.",
    highlights: ["Engineering", "Solarenergie", "Nachhaltiges Bauen", "Komplettlösungen"],
  },
  solutions: {
    eyebrow: "",
    title: "Die richtige Energie für jeden Sektor",
    sectors: [
      {
        title: "Modelo EPC (Engineering, Procurement & Construction)",
        description:
          "Vom Design bis zur schlüsselfertigen Übergabe, Engineering, Procurement und Installation aus einer Hand.",
      },
      {
        title: "BYD in Mosambik",
        description:
          "Lithiumbatterien von Weltniveau mit lokalem Lager und Support.",
      },
      {
        title: "Victron Supplier",
        description:
          "Victron-Wechselrichter und Laderegler für Off Grid und Hybridsysteme.",
      },
      {
        title: "Technical Support",
        description:
          "Spezialisierte technische Unterstützung, Wartung und laufender Support für Ihre Systeme.",
      },
    ],
  },
  epc: {
    eyebrow: "EPC-Modell",
    description:
      "Ein integriertes Modell für den gesamten Projektzyklus, vom Engineering bis zur Construction, mit klarer Gesamtverantwortung.",
    steps: [
      {
        letter: "E",
        title: "Engineering",
        description:
          "Technische Analyse, Dimensionierung und Ausführungsplanung passgenau zum Standort.",
      },
      {
        letter: "P",
        title: "Procurement",
        description:
          "Beschaffung zertifizierter Geräte (BYD, Victron und Partner) mit effizienter Logistik.",
      },
      {
        letter: "C",
        title: "Construction",
        description:
          "Installation, Inbetriebnahme und schlüsselfertige Übergabe durch Spezialteams.",
      },
    ],
  },
  byd: {
    eyebrow: "Offizieller Partner",
    title: "BYD in Mosambik",
    description:
      "Als BYD-Partner bietet LSM Lithiumbatterien von Weltniveau mit lokalem Support und Lagerbestand in Mosambik.",
    benefits: [
      "Lithiumbatterien hoher Energiedichte",
      "Internationale Herstellergarantie",
      "Lokaler technischer Support durch LSM",
      "Lagerbestand in Mosambik verfügbar",
    ],
    cta: "BYD-Katalog ansehen",
  },
  victron: {
    eyebrow: "Autorisierter Lieferant",
    description:
      "Wir liefern Victron-Energy-Geräte und spezialisierten Support für Wechselrichter, Regler und Off Grid und Hybridsysteme.",
    benefits: [
      "Victron-Wechselrichter und Laderegler",
      "Spezialisierte technische Unterstützung",
      "Ersatzteile und Komponenten verfügbar",
      "Schulungen für Installateure und Kunden",
    ],
    cta: "Victron-Katalog ansehen",
  },
  catalog: {
    eyebrow: "Katalog",
    title: "Lösungskatalog",
    description:
      "Entdecken Sie Geräte und Kits nach Kategorie. Filtern Sie nach Marke oder Typ und laden Sie den Gesamtkatalog herunter.",
    filters: ["Alle", "BYD", "Victron", "Solarkits", "Zubehör"],
    downloadCta: "Gesamtkatalog herunterladen (PDF)",
  },
  projects: {
    eyebrow: "Projekte",
    title: "Referenzen in Mosambik",
    filters: ["Alle", "Solar", "Bau", "Batterien", "Lodges"],
  },
  contact: {
    eyebrow: "Kontakte",
    title: "Sprechen wir über Ihr Projekt",
    description: "Fordern Sie ein Angebot an oder vereinbaren Sie eine technische Beratung.",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    subject: "Betreff",
    message: "Nachricht",
    send: "Nachricht senden",
    success: "Nachricht erfolgreich gesendet. Wir melden uns bald.",
    error: "Senden fehlgeschlagen. Bitte erneut versuchen oder per WhatsApp kontaktieren.",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    whatsappValue: "Auf WhatsApp chatten",
    addressLabel: "Adresse",
    address: "Inhambane, Mosambik",
  },
  footer: {
    blurb: "Lodge Solutions Mozambique, innovative Energie- und Baulösungen für nachhaltiges Leben.",
    quickLinks: "Schnelllinks",
    social: "Social Media",
    partners: "Partner",
    contacts: "Kontakte",
    rights: "Alle Rechte vorbehalten.",
  },
  language: "Sprache",
});

export const it: Dictionary = fromEnglish(en, {
  nav: {
    home: "Home",
    about: "Chi siamo",
    solutions: "Soluzioni",
    epc: "Modello EPC",
    catalog: "Catalogo",
    projects: "Progetti",
    contact: "Contatti",
    requestQuote: "Richiedi preventivo",
  },
  solutionsMenu: [
    { title: "Modello EPC", description: "Engineering, Procurement & Construction" },
    { title: "BYD in Mozambico", description: "Batterie al litio e supporto locale" },
    { title: "Victron Supplier", description: "Attrezzature Victron Energy" },
    { title: "Technical Support", description: "Assistenza tecnica specializzata" },
  ],
  hero: {
    title: "Soluzioni intelligenti per l’energia sostenibile",
    subtitle:
      "Progettiamo, installiamo e manuteniamo sistemi solari ad alte prestazioni per abitazioni, aziende e progetti remoti.",
    ctaQuote: "Richiedi preventivo",
    ctaExplore: "Esplora soluzioni",
  },
  stats: [
    { label: "Anni di esperienza" },
    { label: "Progetti completati" },
    { label: "Energia sostenibile" },
    { label: "Supporto tecnico" },
  ],
  about: {
    eyebrow: "",
    title: "Chi siamo",
    description:
      "LSM Lodge Solutions Mozambique è specializzata in energia solare, ingegneria e costruzione sostenibile. Offriamo soluzioni affidabili, su misura e durature.",
    highlights: ["Ingegneria", "Energia solare", "Costruzione sostenibile", "Soluzioni complete"],
  },
  solutions: {
    eyebrow: "",
    title: "L’energia giusta per ogni settore",
    sectors: [
      {
        title: "Modelo EPC (Engineering, Procurement & Construction)",
        description:
          "Dal progetto alla consegna chiavi in mano, engineering, procurement e installazione con responsabilità unica.",
      },
      {
        title: "BYD in Mozambico",
        description:
          "Batterie al litio di riferimento mondiale, con stock e supporto tecnico locale.",
      },
      {
        title: "Victron Supplier",
        description:
          "Inverter e controller Victron Energy per sistemi off grid e ibridi.",
      },
      {
        title: "Technical Support",
        description:
          "Assistenza tecnica specializzata, manutenzione e supporto continuo per i vostri sistemi.",
      },
    ],
  },
  epc: {
    eyebrow: "Modello EPC",
    description:
      "Un modello integrato che copre l’intero ciclo del progetto, dall’ingegneria alla costruzione, con unica responsabilità.",
    steps: [
      {
        letter: "E",
        title: "Engineering",
        description:
          "Studio tecnico, dimensionamento e progetto esecutivo adattati al sito e alle esigenze energetiche.",
      },
      {
        letter: "P",
        title: "Procurement",
        description:
          "Selezione e acquisto di attrezzature certificate (BYD, Victron e partner) con logistica efficiente.",
      },
      {
        letter: "C",
        title: "Construction",
        description:
          "Installazione, commissioning e consegna chiavi in mano da team specializzati.",
      },
    ],
  },
  byd: {
    eyebrow: "Partner ufficiale",
    title: "BYD in Mozambico",
    description:
      "Come partner BYD, LSM fornisce batterie al litio di riferimento mondiale, con supporto tecnico locale e stock sul mercato mozambicano.",
    benefits: [
      "Batterie al litio ad alta densità",
      "Garanzia internazionale del produttore",
      "Supporto tecnico locale dal team LSM",
      "Stock disponibile in Mozambico",
    ],
    cta: "Vedi catalogo BYD",
  },
  victron: {
    eyebrow: "Fornitore autorizzato",
    description:
      "Forniamo attrezzature Victron Energy e supporto tecnico specializzato per inverter, controller e sistemi off grid/ibridi.",
    benefits: [
      "Inverter e controller Victron",
      "Assistenza tecnica specializzata",
      "Ricambi e componenti disponibili",
      "Formazione per installatori e clienti",
    ],
    cta: "Vedi catalogo Victron",
  },
  catalog: {
    eyebrow: "Catalogo",
    title: "Catalogo soluzioni",
    description:
      "Esplorate attrezzature e kit per categoria. Filtrate per marca o tipo e scaricate il catalogo completo.",
    filters: ["Tutti", "BYD", "Victron", "Kit solari", "Accessori"],
    downloadCta: "Scarica catalogo completo (PDF)",
  },
  projects: {
    eyebrow: "Progetti",
    title: "Portfolio di realizzazioni in Mozambico",
    filters: ["Tutti", "Solar", "Costruzione", "Batterie", "Lodges"],
  },
  contact: {
    eyebrow: "Contatti",
    title: "Parliamo del vostro progetto",
    description: "Richiedete un preventivo o fissate una consulenza tecnica.",
    name: "Nome",
    email: "Email",
    phone: "Telefono",
    subject: "Oggetto",
    message: "Messaggio",
    send: "Invia messaggio",
    success: "Messaggio inviato con successo. Vi risponderemo presto.",
    error: "Invio non riuscito. Riprovate o contattateci su WhatsApp.",
    phoneLabel: "Telefono",
    emailLabel: "Email",
    whatsappValue: "Chatta su WhatsApp",
    addressLabel: "Indirizzo",
    address: "Inhambane, Mozambico",
  },
  footer: {
    blurb: "Lodge Solutions Mozambique, soluzioni innovative di energia e costruzione sostenibile.",
    quickLinks: "Link rapidi",
    social: "Social",
    partners: "Partner",
    contacts: "Contatti",
    rights: "Tutti i diritti riservati.",
  },
  language: "Lingua",
});
