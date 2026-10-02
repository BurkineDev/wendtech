import { Monitor, ShoppingCart, Smartphone, Users, Boxes, Contact, CalendarCheck } from 'lucide-react'

/**
 * Contenu des pages de service.
 *
 * Reprend les descriptions et caractéristiques de la section Services de
 * l'accueil, développées pour une page dédiée. Le `slug` sert à la fois
 * de route (/services/<slug>) et de clé de recherche.
 */
export const SERVICES = [
  {
    slug: 'implementation-odoo',
    icon: Boxes,
    eyebrow: 'Implémentation Odoo',
    title: 'Toute votre gestion dans un seul outil',
    lead:
      'Devis, ventes, stocks, achats, facturation, comptabilité, RH : Odoo réunit tout ce que ' +
      "vos équipes gèrent aujourd'hui dans des fichiers Excel et des cahiers.",
    intro: [
      "Nous installons et paramétrons Odoo selon votre façon de travailler, pas l'inverse : " +
        'seuls les modules utiles sont activés, avec vos documents, vos taxes et votre plan comptable.',
      'Nous reprenons vos données existantes (clients, produits, stocks), formons vos équipes ' +
        "et développons les modules qui manquent, comme le paiement par Mobile Money."
    ],
    features: [
      'Ventes, devis et facturation',
      'Stocks, achats et inventaires',
      'Comptabilité et rapports',
      'RH, congés et notes de frais',
      'Reprise de vos données existantes',
      'Modules sur mesure et intégration Mobile Money'
    ],
    steps: [
      { title: 'Diagnostic', text: 'On cartographie vos processus et on choisit les modules utiles.' },
      { title: 'Paramétrage', text: 'Configuration, reprise des données et tests avec vos équipes.' },
      { title: 'Démarrage', text: 'Formation, mise en service et accompagnement les premières semaines.' }
    ]
  },
  {
    slug: 'crm-sur-mesure',
    icon: Contact,
    eyebrow: 'CRM sur mesure',
    title: 'Ne perdez plus un seul client potentiel',
    lead:
      'Un prospect qui ne reçoit pas de relance est un client perdu. Un CRM garde la trace de ' +
      'chaque échange et rappelle à votre équipe qui recontacter, et quand.',
    intro: [
      'Nous mettons en place un CRM adapté à votre cycle de vente : pipeline de prospects, ' +
        'historique de chaque client, tâches et relances pour chaque commercial.',
      "Les relances partent là où vos clients répondent : WhatsApp, SMS ou courriel. " +
        "Vous suivez les ventes en cours et les résultats de chaque commercial en un coup d'œil."
    ],
    features: [
      "Pipeline de prospects et d'opportunités",
      "Fiche client avec tout l'historique",
      'Relances par WhatsApp, SMS et courriel',
      'Devis et factures depuis la fiche client',
      'Tableau de bord des ventes',
      'Accès mobile pour les équipes terrain'
    ],
    steps: [
      { title: 'Cycle de vente', text: "On formalise les étapes de vos ventes, du premier contact à l'encaissement." },
      { title: 'Mise en place', text: 'CRM configuré ou développé sur mesure, avec import de vos contacts.' },
      { title: 'Adoption', text: "Formation de l'équipe et ajustements après les premières semaines d'usage." }
    ]
  },
  {
    slug: 'prise-de-rendez-vous',
    icon: CalendarCheck,
    eyebrow: 'Prise de rendez-vous en ligne',
    title: 'Vos clients réservent seuls, à toute heure',
    lead:
      'Cliniques, cabinets, salons, garages, centres de formation : chaque appel pour fixer un ' +
      'rendez-vous est du temps pris à votre accueil.',
    intro: [
      "Vos clients choisissent un créneau libre depuis leur téléphone, à n'importe quelle heure. " +
        'Votre agenda se remplit seul, par praticien, par salle ou par service.',
      'Les rappels automatiques par SMS ou WhatsApp réduisent les rendez-vous oubliés, et un ' +
        'acompte par Mobile Money peut sécuriser les réservations.'
    ],
    features: [
      'Calendrier en ligne par praticien ou par service',
      'Réservation 24 h/24 depuis un téléphone',
      'Rappels automatiques par SMS et WhatsApp',
      'Acompte par Mobile Money',
      'Annulation et report par le client',
      'Synchronisation avec Google Agenda'
    ],
    steps: [
      { title: 'Organisation', text: 'Services, durées, horaires et règles de réservation définis avec vous.' },
      { title: 'Mise en ligne', text: 'Page de réservation à votre image, reliée à votre site et à WhatsApp.' },
      { title: 'Suivi', text: 'Statistiques de fréquentation et ajustement des créneaux.' }
    ]
  },
  {
    slug: 'creation-site-web',
    icon: Monitor,
    eyebrow: 'Sites web & CMS',
    title: 'Un site web qui travaille pour vous',
    lead:
      "Un site vitrine n'est pas une plaquette en ligne. C'est votre premier commercial : " +
      "il doit être trouvé, se charger vite et donner envie de vous contacter.",
    intro: [
      "Nous concevons des sites rapides, lisibles sur mobile et faciles à faire évoluer. " +
        "Chaque page est pensée pour une intention précise, pas pour remplir de l'espace.",
      "Vous gardez la main : un CMS simple vous permet de modifier vos pages, vos actualités et " +
        "vos photos sans nous appeler. Hébergement, nom de domaine et contenus restent à votre nom."
    ],
    features: [
      'Sites responsive, lisibles sur tous les écrans',
      'Optimisation pour le référencement naturel',
      'Design moderne, aligné sur votre identité',
      'Temps de chargement optimisé',
      'Formulaire de contact relié à votre boîte courriel',
      'CMS pour modifier vos contenus vous-même'
    ],
    steps: [
      { title: 'Cadrage', text: "On clarifie à qui s'adresse le site et ce qu'un visiteur doit y faire." },
      { title: 'Conception', text: 'Maquette validée avant la moindre ligne de code, pour éviter les allers-retours.' },
      { title: 'Mise en ligne', text: 'Déploiement, vérifications, puis formation de votre équipe.' }
    ]
  },
  {
    slug: 'site-e-commerce',
    icon: ShoppingCart,
    eyebrow: 'Site e-commerce',
    title: 'Vendre en ligne, sans friction',
    lead:
      'Une boutique en ligne se juge à une seule chose : le nombre de paniers qui vont ' +
      "jusqu'au paiement. Tout le reste en découle.",
    intro: [
      'Nous construisons des boutiques complètes : catalogue, panier, paiements intégrés, ' +
        'suivi des commandes et gestion des stocks, dans une interface que vous administrez seul.',
      "Le parcours d'achat suit les habitudes de vos clients : commande sur WhatsApp, paiement " +
        "par Orange Money, Moov Money ou Wave, ou à la livraison. Moins d'étapes, plus de ventes."
    ],
    features: [
      'Catalogue produits avec variantes et stocks',
      'Paiement Mobile Money, carte ou à la livraison',
      'Commandes reçues sur WhatsApp',
      'Tableau de bord des commandes',
      'Gestion des livraisons',
      'Suivi des ventes et des produits qui marchent'
    ],
    steps: [
      { title: 'Catalogue', text: 'Structure des produits, des catégories et des options de livraison.' },
      { title: 'Paiement', text: 'Mobile Money, carte ou paiement à la livraison, selon vos clients.' },
      { title: 'Rodage', text: 'Commandes de test de bout en bout avant ouverture au public.' }
    ]
  },
  {
    slug: 'application-mobile',
    icon: Smartphone,
    eyebrow: 'Application mobile',
    title: 'Votre activité dans la poche de vos clients',
    lead:
      'Une application se justifie quand elle fait quelque chose que le web ne fait pas : ' +
      'notifications, usage hors ligne, accès rapide au quotidien.',
    intro: [
      'Nous développons des applications Android et iOS pour la vente, la gestion de stocks, ' +
        "la santé ou la collecte de données terrain — pensées pour les téléphones d'entrée de gamme " +
        'et les réseaux instables.',
      "Nous vous dirons franchement si un site web mobile suffit : payer une application " +
        "dont vous n'avez pas besoin ne sert personne."
    ],
    features: [
      'Applications natives et hybrides',
      'Interface pensée pour un usage à une main',
      'Paiement Mobile Money intégré',
      'Notifications push, SMS et WhatsApp',
      'Fonctionnement hors connexion, synchronisation au retour du réseau',
      'Publication sur les magasins et maintenance'
    ],
    steps: [
      { title: 'Périmètre', text: "On délimite la première version : ce qui est indispensable, et ce qui attendra." },
      { title: 'Développement', text: 'Livraisons régulières que vous testez au fur et à mesure.' },
      { title: 'Publication', text: 'Mise en ligne sur les magasins, puis suivi des retours utilisateurs.' }
    ]
  },
  {
    slug: 'plateforme-inscriptions',
    icon: Users,
    eyebrow: "Plateforme d'inscriptions",
    title: 'Une plateforme qui tient le jour J',
    lead:
      "Une ouverture d'inscriptions concentre des milliers de connexions sur quelques minutes. " +
      "C'est précisément le moment où les plateformes ordinaires tombent.",
    intro: [
      "Nous construisons des plateformes conçues pour le pic : ouverture à heure fixe, quotas " +
        "appliqués automatiquement, file d'attente qui absorbe l'afflux et protection anti-bot.",
      'Chaque candidat garde sa place dans la file et sait où il en est. Vous suivez le ' +
        'remplissage en temps réel, sans découvrir les problèmes après coup.'
    ],
    features: [
      'Ouverture programmée à la minute près',
      'Quotas appliqués automatiquement',
      "File d'attente équitable et transparente",
      'Protection contre les inscriptions automatisées',
      'Suivi du remplissage en temps réel',
      'Export des inscrits'
    ],
    steps: [
      { title: 'Règles', text: 'Quotas, critères et calendrier définis avec vous, puis verrouillés.' },
      { title: 'Test de charge', text: "On simule l'afflux du jour J avant de mettre en ligne." },
      { title: 'Jour J', text: 'Surveillance active pendant toute la durée des inscriptions.' }
    ]
  }
]

export const getService = (slug) => SERVICES.find((s) => s.slug === slug)
