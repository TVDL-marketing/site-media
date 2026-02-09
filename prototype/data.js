const DATA = {
  languages: [
    { id: "fr", label: "FR" },
    { id: "en", label: "EN" },
    { id: "de", label: "DE" },
    { id: "it", label: "IT" }
  ],
  ui: {
    loginTitle: {
      fr: "Accès privé Trigano VDL",
      en: "Private access Trigano VDL",
      de: "Privater Zugang Trigano VDL",
      it: "Accesso privato Trigano VDL"
    },
    loginSubtitle: {
      fr: "Plateforme media multi-marques réservée aux professionnels.",
      en: "Multi-brand media platform reserved for professionals.",
      de: "Markenübergreifende Medienplattform nur für Fachpublikum.",
      it: "Piattaforma media multi-brand riservata ai professionisti."
    },
    loginButton: { fr: "Connexion", en: "Sign in", de: "Anmelden", it: "Accedi" },
    logout: { fr: "Déconnexion", en: "Log out", de: "Abmelden", it: "Esci" },
    homeTitle: {
      fr: "Centre media privé Trigano VDL",
      en: "Trigano VDL private media hub",
      de: "Privates Medienzentrum Trigano VDL",
      it: "Hub media privato Trigano VDL"
    },
    homeIntro: {
      fr: "Accédez rapidement aux contenus officiels par marque, catégorie et pack.",
      en: "Access official assets quickly by brand, category and pack.",
      de: "Greifen Sie schnell auf offizielle Inhalte nach Marke, Kategorie und Paket zu.",
      it: "Accedi rapidamente ai contenuti ufficiali per marca, categoria e pacchetto."
    },
    searchPlaceholder: {
      fr: "Rechercher un contenu, un modèle, une année…",
      en: "Search content, model, year…",
      de: "Inhalte, Modell, Jahr suchen…",
      it: "Cerca contenuti, modello, anno…"
    },
    filterType: {
      fr: "Type de media",
      en: "Media type",
      de: "Medientyp",
      it: "Tipo di media"
    },
    filterYear: { fr: "Année", en: "Year", de: "Jahr", it: "Anno" },
    filterLanguage: {
      fr: "Langue",
      en: "Language",
      de: "Sprache",
      it: "Lingua"
    },
    downloadPack: {
      fr: "Télécharger en pack",
      en: "Download as pack",
      de: "Als Paket herunterladen",
      it: "Scarica come pacchetto"
    },
    viewBrand: {
      fr: "Explorer la marque",
      en: "Explore brand",
      de: "Marke entdecken",
      it: "Esplora il brand"
    },
    openPack: { fr: "Voir le pack", en: "View pack", de: "Paket ansehen", it: "Apri pacchetto" },
    productSheet: {
      fr: "Fiche produit",
      en: "Product sheet",
      de: "Produktblatt",
      it: "Scheda prodotto"
    },
    packDownload: {
      fr: "Télécharger le pack",
      en: "Download pack",
      de: "Paket herunterladen",
      it: "Scarica pacchetto"
    },
    adminTitle: {
      fr: "Console admin (mock)",
      en: "Admin console (mock)",
      de: "Admin-Konsole (Mock)",
      it: "Console admin (mock)"
    },
    adminIntro: {
      fr: "Prévisualisation des outils internes de gestion des médias.",
      en: "Preview of internal media management tools.",
      de: "Vorschau interner Medienverwaltungstools.",
      it: "Anteprima degli strumenti interni di gestione media."
    }
  },
  brands: [
    {
      id: "chausson",
      name: "Chausson",
      accent: "#438f29",
      description: {
        fr: "Solutions agiles pour voyager en toute liberté.",
        en: "Agile solutions to travel freely.",
        de: "Agile Lösungen für freie Reisen.",
        it: "Soluzioni agili per viaggiare in libertà."
      },
      stats: { models: 18, files: 420, packs: 12 }
    },
    {
      id: "challenger",
      name: "Challenger",
      accent: "#a81a17",
      description: {
        fr: "Design affirmé et innovation pour chaque escapade.",
        en: "Bold design and innovation for every getaway.",
        de: "Markantes Design und Innovation für jede Auszeit.",
        it: "Design deciso e innovazione per ogni fuga."
      },
      stats: { models: 16, files: 380, packs: 10 }
    },
    {
      id: "caravelair",
      name: "Caravelair",
      accent: "#145FAC",
      description: {
        fr: "Caravanes légères et modulables pour tous les usages.",
        en: "Lightweight, modular caravans for every use.",
        de: "Leichte, modulare Wohnwagen für jeden Einsatz.",
        it: "Caravan leggere e modulari per ogni esigenza."
      },
      stats: { models: 12, files: 260, packs: 8 }
    },
    {
      id: "sterckeman",
      name: "Sterckeman",
      accent: "#be1824",
      description: {
        fr: "Confort premium et finition haut de gamme.",
        en: "Premium comfort and high-end finish.",
        de: "Premium-Komfort und hochwertige Verarbeitung.",
        it: "Comfort premium e finiture di alta gamma."
      },
      stats: { models: 10, files: 210, packs: 6 }
    },
    {
      id: "mini-freestyle",
      name: "Mini Freestyle",
      accent: "#7a5cff",
      description: {
        fr: "L'esprit compact pour les aventuriers urbains.",
        en: "Compact spirit for urban adventurers.",
        de: "Kompakter Spirit für urbane Abenteurer.",
        it: "Spirito compatto per gli avventurieri urbani."
      },
      stats: { models: 6, files: 120, packs: 4 }
    },
    {
      id: "rubis",
      name: "Rubis",
      accent: "#f37c2b",
      description: {
        fr: "Collections exclusives et éditions limitées.",
        en: "Exclusive collections and limited editions.",
        de: "Exklusive Kollektionen und limitierte Editionen.",
        it: "Collezioni esclusive e edizioni limitate."
      },
      stats: { models: 4, files: 80, packs: 3 }
    }
  ],
  categories: {
    chausson: [
      {
        id: "catalogue",
        name: {
          fr: "Catalogues",
          en: "Catalogs",
          de: "Kataloge",
          it: "Cataloghi"
        },
        description: {
          fr: "PDF, fiches et brochures officielles.",
          en: "PDFs, sheets and official brochures.",
          de: "PDFs, Datenblätter und offizielle Broschüren.",
          it: "PDF, schede e brochure ufficiali."
        },
        packId: "pack-chausson-catalogue",
        items: [
          {
            id: "file-chausson-2025",
            type: "file",
            title: {
              fr: "Catalogue Chausson 2025",
              en: "Chausson catalog 2025",
              de: "Chausson Katalog 2025",
              it: "Catalogo Chausson 2025"
            },
            year: 2025,
            languages: ["fr", "en", "de", "it"],
            size: "42 MB",
            models: 18,
            fileCount: 1
          },
          {
            id: "link-chausson-range",
            type: "link",
            title: {
              fr: "Gamme X-Series",
              en: "X-Series range",
              de: "X-Series Reihe",
              it: "Gamma X-Series"
            },
            year: 2024,
            languages: ["fr", "en"],
            size: "—",
            link: "https://example.com/chausson/x-series"
          },
          {
            id: "pack-chausson",
            type: "pack",
            title: {
              fr: "Pack presse Chausson",
              en: "Chausson press pack",
              de: "Chausson Pressepaket",
              it: "Pack stampa Chausson"
            },
            year: 2025,
            languages: ["fr", "en", "de"],
            packId: "pack-chausson-catalogue",
            fileCount: 12,
            size: "180 MB"
          }
        ]
      },
      {
        id: "photos",
        name: {
          fr: "Photos & lifestyle",
          en: "Photos & lifestyle",
          de: "Fotos & Lifestyle",
          it: "Foto & lifestyle"
        },
        description: {
          fr: "Visuels HD, ambiances, shootings.",
          en: "HD visuals, ambiences, shootings.",
          de: "HD-Visuals, Stimmungen, Shootings.",
          it: "Visual HD, ambienti, shooting."
        },
        packId: "pack-chausson-photos",
        items: [
          {
            id: "folder-chausson-2024",
            type: "folder",
            title: {
              fr: "Lifestyle été 2024",
              en: "Summer lifestyle 2024",
              de: "Sommer Lifestyle 2024",
              it: "Lifestyle estate 2024"
            },
            year: 2024,
            languages: ["fr", "en", "de", "it"],
            fileCount: 58,
            size: "1.2 GB"
          },
          {
            id: "pack-chausson-photos",
            type: "pack",
            title: {
              fr: "Pack visuels gamme",
              en: "Range visuals pack",
              de: "Bildpaket Sortiment",
              it: "Pack visual gamma"
            },
            year: 2025,
            languages: ["fr", "en"],
            packId: "pack-chausson-photos",
            fileCount: 48,
            size: "980 MB"
          }
        ]
      }
    ],
    challenger: [
      {
        id: "videos",
        name: {
          fr: "Vidéos",
          en: "Videos",
          de: "Videos",
          it: "Video"
        },
        description: {
          fr: "Clips produits, teasers et interviews.",
          en: "Product clips, teasers and interviews.",
          de: "Produktclips, Teaser und Interviews.",
          it: "Clip prodotto, teaser e interviste."
        },
        packId: "pack-challenger-videos",
        items: [
          {
            id: "file-challenger-teaser",
            type: "file",
            title: {
              fr: "Teaser gamme Graphite",
              en: "Graphite range teaser",
              de: "Graphite Reihe Teaser",
              it: "Teaser gamma Graphite"
            },
            year: 2025,
            languages: ["fr", "en"],
            size: "520 MB",
            fileCount: 1
          },
          {
            id: "pack-challenger-videos",
            type: "pack",
            title: {
              fr: "Pack vidéos presse",
              en: "Press videos pack",
              de: "Presse-Video-Paket",
              it: "Pack video stampa"
            },
            year: 2025,
            languages: ["fr", "en", "de"],
            packId: "pack-challenger-videos",
            fileCount: 8,
            size: "3.2 GB"
          }
        ]
      }
    ],
    caravelair: [
      {
        id: "press",
        name: {
          fr: "Presse",
          en: "Press",
          de: "Presse",
          it: "Stampa"
        },
        description: {
          fr: "Communiqués, dossiers et chiffres clés.",
          en: "Press releases, dossiers and key figures.",
          de: "Pressemitteilungen, Dossiers und Kennzahlen.",
          it: "Comunicati, dossier e dati chiave."
        },
        packId: "pack-caravelair-press",
        items: [
          {
            id: "file-caravelair-2025",
            type: "file",
            title: {
              fr: "Dossier presse 2025",
              en: "Press kit 2025",
              de: "Pressemappe 2025",
              it: "Press kit 2025"
            },
            year: 2025,
            languages: ["fr", "en", "de"],
            size: "18 MB",
            fileCount: 1
          },
          {
            id: "pack-caravelair-press",
            type: "pack",
            title: {
              fr: "Pack logos & charts",
              en: "Logos & charts pack",
              de: "Logos & Charts Paket",
              it: "Pack loghi & grafici"
            },
            year: 2025,
            languages: ["fr", "en"],
            packId: "pack-caravelair-press",
            fileCount: 14,
            size: "92 MB"
          }
        ]
      }
    ],
    sterckeman: [
      {
        id: "renders",
        name: {
          fr: "Rendus 3D",
          en: "3D renders",
          de: "3D-Renderings",
          it: "Render 3D"
        },
        description: {
          fr: "Rendus techniques et vues studio.",
          en: "Technical renders and studio views.",
          de: "Technische Renderings und Studioansichten.",
          it: "Render tecnici e viste studio."
        },
        packId: "pack-sterckeman-renders",
        items: [
          {
            id: "file-sterckeman-studio",
            type: "file",
            title: {
              fr: "Pack studio 360°",
              en: "360° studio pack",
              de: "360° Studio-Paket",
              it: "Pack studio 360°"
            },
            year: 2024,
            languages: ["fr", "en"],
            size: "1.6 GB",
            fileCount: 120
          },
          {
            id: "pack-sterckeman-renders",
            type: "pack",
            title: {
              fr: "Pack rendus techniques",
              en: "Technical renders pack",
              de: "Technische Render-Paket",
              it: "Pack render tecnici"
            },
            year: 2025,
            languages: ["fr", "en", "de", "it"],
            packId: "pack-sterckeman-renders",
            fileCount: 30,
            size: "760 MB"
          }
        ]
      }
    ],
    "mini-freestyle": [
      {
        id: "social",
        name: {
          fr: "Social media",
          en: "Social media",
          de: "Social Media",
          it: "Social media"
        },
        description: {
          fr: "Formats courts optimisés pour les réseaux.",
          en: "Short formats optimized for social channels.",
          de: "Kurzformate für Social Media optimiert.",
          it: "Formati brevi ottimizzati per i social."
        },
        packId: "pack-mini-social",
        items: [
          {
            id: "file-mini-story",
            type: "file",
            title: {
              fr: "Stories lancement",
              en: "Launch stories",
              de: "Launch Stories",
              it: "Stories lancio"
            },
            year: 2025,
            languages: ["fr", "en"],
            size: "240 MB",
            fileCount: 24
          },
          {
            id: "link-mini-press",
            type: "link",
            title: {
              fr: "Kit influenceurs",
              en: "Influencer kit",
              de: "Influencer-Kit",
              it: "Kit influencer"
            },
            year: 2025,
            languages: ["fr", "en", "it"],
            size: "—",
            link: "https://example.com/mini-freestyle/influencer-kit"
          }
        ]
      }
    ],
    rubis: [
      {
        id: "events",
        name: {
          fr: "Événements",
          en: "Events",
          de: "Events",
          it: "Eventi"
        },
        description: {
          fr: "Supports et kits pour les lancements presse.",
          en: "Assets and kits for press launches.",
          de: "Assets und Kits für Presse-Launches.",
          it: "Asset e kit per i lanci stampa."
        },
        packId: "pack-rubis-events",
        items: [
          {
            id: "file-rubis-launch",
            type: "file",
            title: {
              fr: "Plan de lancement 2025",
              en: "Launch plan 2025",
              de: "Launchplan 2025",
              it: "Piano di lancio 2025"
            },
            year: 2025,
            languages: ["fr", "en"],
            size: "12 MB",
            fileCount: 6
          },
          {
            id: "pack-rubis-events",
            type: "pack",
            title: {
              fr: "Pack assets premium",
              en: "Premium assets pack",
              de: "Premium-Assets-Paket",
              it: "Pack asset premium"
            },
            year: 2025,
            languages: ["fr", "en", "de"],
            packId: "pack-rubis-events",
            fileCount: 20,
            size: "340 MB"
          }
        ]
      }
    ]
  },
  packs: {
    "pack-chausson-catalogue": {
      id: "pack-chausson-catalogue",
      brand: "chausson",
      title: {
        fr: "Pack presse Chausson",
        en: "Chausson press pack",
        de: "Chausson Pressepaket",
        it: "Pack stampa Chausson"
      },
      description: {
        fr: "Sélection de catalogues, fiches techniques et visuels haute définition.",
        en: "Selection of catalogs, technical sheets and HD visuals.",
        de: "Auswahl an Katalogen, technischen Datenblättern und HD-Visuals.",
        it: "Selezione di cataloghi, schede tecniche e visual HD."
      },
      languages: ["fr", "en", "de"],
      totalSize: "180 MB",
      files: [
        { name: "Catalogue 2025", type: "PDF", size: "42 MB" },
        { name: "Fiche gamme", type: "PDF", size: "8 MB" },
        { name: "Pack logos", type: "ZIP", size: "12 MB" },
        { name: "Visuels studio", type: "ZIP", size: "118 MB" }
      ]
    },
    "pack-chausson-photos": {
      id: "pack-chausson-photos",
      brand: "chausson",
      title: {
        fr: "Pack visuels gamme",
        en: "Range visuals pack",
        de: "Bildpaket Sortiment",
        it: "Pack visual gamma"
      },
      description: {
        fr: "Photographies HD prêtes pour les supports marketing.",
        en: "HD photographs ready for marketing materials.",
        de: "HD-Fotografien für Marketingmaterialien.",
        it: "Fotografie HD pronte per materiali marketing."
      },
      languages: ["fr", "en"],
      totalSize: "980 MB",
      files: [
        { name: "Ambiance montagne", type: "JPG", size: "420 MB" },
        { name: "Détails intérieur", type: "JPG", size: "260 MB" },
        { name: "Extérieurs 4K", type: "JPG", size: "300 MB" }
      ]
    },
    "pack-challenger-videos": {
      id: "pack-challenger-videos",
      brand: "challenger",
      title: {
        fr: "Pack vidéos presse",
        en: "Press videos pack",
        de: "Presse-Video-Paket",
        it: "Pack video stampa"
      },
      description: {
        fr: "Montage des vidéos produits et interviews presse.",
        en: "Edited product videos and press interviews.",
        de: "Bearbeitete Produktvideos und Presseinterviews.",
        it: "Video prodotto montati e interviste stampa."
      },
      languages: ["fr", "en", "de"],
      totalSize: "3.2 GB",
      files: [
        { name: "Teaser Graphite", type: "MP4", size: "520 MB" },
        { name: "Interview design", type: "MP4", size: "1.1 GB" },
        { name: "Spot TV", type: "MP4", size: "1.6 GB" }
      ]
    },
    "pack-caravelair-press": {
      id: "pack-caravelair-press",
      brand: "caravelair",
      title: {
        fr: "Pack logos & charts",
        en: "Logos & charts pack",
        de: "Logos & Charts Paket",
        it: "Pack loghi & grafici"
      },
      description: {
        fr: "Kits presse incluant logos, chiffres clés et templates.",
        en: "Press kit including logos, key figures and templates.",
        de: "Pressekit mit Logos, Kennzahlen und Vorlagen.",
        it: "Press kit con loghi, dati chiave e template."
      },
      languages: ["fr", "en"],
      totalSize: "92 MB",
      files: [
        { name: "Logos SVG", type: "SVG", size: "5 MB" },
        { name: "Chiffres clés", type: "PDF", size: "12 MB" },
        { name: "Templates", type: "PPT", size: "75 MB" }
      ]
    },
    "pack-sterckeman-renders": {
      id: "pack-sterckeman-renders",
      brand: "sterckeman",
      title: {
        fr: "Pack rendus techniques",
        en: "Technical renders pack",
        de: "Technische Render-Paket",
        it: "Pack render tecnici"
      },
      description: {
        fr: "Rendus 3D et vues éclatées en haute résolution.",
        en: "3D renders and exploded views in high resolution.",
        de: "3D-Renderings und Explosionsansichten in hoher Auflösung.",
        it: "Render 3D e viste esplose in alta risoluzione."
      },
      languages: ["fr", "en", "de", "it"],
      totalSize: "760 MB",
      files: [
        { name: "Plans techniques", type: "PNG", size: "260 MB" },
        { name: "Rendus studio", type: "PNG", size: "300 MB" },
        { name: "Vues éclatées", type: "PNG", size: "200 MB" }
      ]
    },
    "pack-mini-social": {
      id: "pack-mini-social",
      brand: "mini-freestyle",
      title: {
        fr: "Pack social media",
        en: "Social media pack",
        de: "Social Media Paket",
        it: "Pack social media"
      },
      description: {
        fr: "Stories et formats courts pour Instagram et TikTok.",
        en: "Stories and short formats for Instagram and TikTok.",
        de: "Stories und Kurzformate für Instagram und TikTok.",
        it: "Stories e formati brevi per Instagram e TikTok."
      },
      languages: ["fr", "en", "it"],
      totalSize: "240 MB",
      files: [
        { name: "Stories lancement", type: "MP4", size: "140 MB" },
        { name: "B-roll urbain", type: "MP4", size: "100 MB" }
      ]
    },
    "pack-rubis-events": {
      id: "pack-rubis-events",
      brand: "rubis",
      title: {
        fr: "Pack assets premium",
        en: "Premium assets pack",
        de: "Premium-Assets-Paket",
        it: "Pack asset premium"
      },
      description: {
        fr: "Assets premium pour les partenaires et événements.",
        en: "Premium assets for partners and events.",
        de: "Premium-Assets für Partner und Events.",
        it: "Asset premium per partner ed eventi."
      },
      languages: ["fr", "en", "de"],
      totalSize: "340 MB",
      files: [
        { name: "Kit lancement", type: "PDF", size: "60 MB" },
        { name: "Visuels premium", type: "JPG", size: "280 MB" }
      ]
    }
  }
};
