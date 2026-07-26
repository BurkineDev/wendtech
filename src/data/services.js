import { Monitor, ShoppingCart, Smartphone, Users } from 'lucide-react'

/**
 * Contenu des pages de service.
 *
 * Reprend les descriptions et caractéristiques de la section Services de
 * l'accueil, développées pour une page dédiée. Le `slug` sert à la fois
 * de route (/services/<slug>) et de clé de recherche.
 */
export const SERVICES = [
  {
    slug: 'creation-site-web',
    icon: Monitor,
    eyebrow: 'Création de site web',
    title: 'Un site web qui travaille pour vous',
    lead:
      "Un site vitrine n'est pas une plaquette en ligne. C'est votre premier commercial : " +
      "il doit être trouvé, se charger vite et donner envie de vous contacter.",
    intro: [
      "Nous concevons des sites rapides, lisibles sur mobile et faciles à faire évoluer. " +
        "Chaque page est pensée pour une intention précise, pas pour remplir de l'espace.",
      "Vous gardez la main : accès à votre hébergement, à votre nom de domaine et à vos " +
        "contenus. Aucun verrouillage, aucune dépendance à notre agence."
    ],
    features: [
      'Sites responsive, lisibles sur tous les écrans',
      'Optimisation pour le référencement naturel',
      'Design moderne, aligné sur votre identité',
      'Temps de chargement optimisé',
      'Formulaire de contact relié à votre boîte courriel',
      'Formation à la mise à jour de vos contenus'
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
      "Le parcours d'achat est simplifié au maximum : moins d'étapes entre l'envie et la commande, " +
        'et un tunnel qui fonctionne aussi bien sur téléphone que sur ordinateur.'
    ],
    features: [
      'Catalogue produits avec variantes et stocks',
      'Paiements en ligne intégrés',
      'Tableau de bord des commandes',
      'Gestion des livraisons',
      'Comptes clients et historique',
      'Suivi des ventes et des produits qui marchent'
    ],
    steps: [
      { title: 'Catalogue', text: 'Structure des produits, des catégories et des options de livraison.' },
      { title: 'Paiement', text: 'Intégration des moyens de paiement adaptés à votre marché.' },
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
      'Nous développons des applications Android et iOS pour la gestion de stocks, la vente ' +
        'en ligne ou les services marchands — natives ou hybrides selon ce que votre projet exige.',
      "Nous vous dirons franchement si un site web mobile suffit : payer une application " +
        "dont vous n'avez pas besoin ne sert personne."
    ],
    features: [
      'Applications natives et hybrides',
      'Interface pensée pour un usage à une main',
      'Intégration des passerelles de paiement',
      'Notifications push',
      'Fonctionnement en connexion limitée',
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
