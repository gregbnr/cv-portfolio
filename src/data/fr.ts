import type { SiteContent } from './types';

export const frContent: SiteContent = {
  lang: 'fr',
  altLang: 'en',
  cvUrl: '/cv/CV_Gregoire-BONNIER.pdf',

  nav: {
    about: 'À propos',
    experience: 'Parcours',
    apps: 'Apps',
    skills: 'Compétences',
    genui: 'GenUI',
    articles: 'Articles',
    contact: 'Contact',
    downloadCv: 'Télécharger le CV',
    switchLang: 'English',
    toggleTheme: 'Changer de thème',
    menu: 'Menu',
  },

  hero: {
    label: 'Développeur Flutter Senior',
    name: 'Grégoire Bonnier',
    tagline:
      'Je conçois des apps mobiles utilisées par des millions de personnes.',
    sub: '6 ans d’expérience · Flutter & Android · grands comptes (MGEN, Franprix, LFP, FFF…)',
    ctaContact: 'Me contacter',
    ctaCv: 'Télécharger le CV',
    meta: [
      { label: 'Localisation', value: 'Bordeaux' },
      { label: 'Anglais', value: 'Anglais B1' },
      { label: 'Permis', value: 'Permis B' },
    ],
  },

  about: {
    heading: 'À propos',
    paragraphs: [
      'Développeur d’applications mobiles depuis 6 ans, j’ai conçu des applications pour plusieurs grands comptes.',
      'Je cherche à rejoindre une équipe ambitieuse pour concevoir et optimiser des expériences mobiles utilisées par des millions de personnes, avec une exigence forte sur l’architecture, le design system et l’accessibilité.',
    ],
    photoAlt: 'Portrait de Grégoire Bonnier',
  },

  experience: {
    heading: 'Parcours',
    items: [
      {
        period: '2022 – aujourd’hui',
        company: 'Useradgents',
        role: 'Développeur Flutter & Android',
        location: 'Bordeaux',
        bullets: [
          'Apps clients grands comptes (MGEN, Franprix, LFP, FFF…).',
          'TMA & TME sur différentes applications.',
          'Création d’une nouvelle application Flutter (Clean Architecture, Design System, Accessibilité).',
          'Rédaction d’articles et animation de sessions tech.',
          'Documentation technique.',
          'Participation à l’industrialisation du processus de développement.',
        ],
      },
      {
        period: '2020 – 2022',
        company: 'Optimetriks — FieldPro',
        role: 'Développeur Android (alternance)',
        location: 'Paris',
        bullets: [
          'Modularisation de l’application Android.',
          'TMA & TME.',
          'Participation à la phase de réflexion design.',
          'Tests unitaires & automatisés.',
          'Documentation technique et managériale.',
          'Animation des réunions en Agilité ScrumBan.',
        ],
      },
      {
        period: '2018 – 2020',
        company: 'Wonderstudios',
        role: 'Développeur Web junior (alternance) puis Chef de projet (CDI)',
        location: 'Paris',
        bullets: [
          'Développement de bannières publicitaires pour le web.',
          'Graphic designer (images statiques, habillages et site web).',
          'Négociation et relation client.',
          'Conseil UX/UI design.',
          'Création & production de contenu web (site, social media, display).',
          'Suivi, rapports et recommandations stratégiques.',
        ],
      },
      {
        period: '2017 – 2018',
        company: 'Autres expériences',
        role: '2 stages — Développeur web junior',
        location: 'France',
        bullets: [
          'Deux stages en tant que développeur web junior entre 2017 et 2018.',
        ],
      },
    ],
    educationHeading: 'Formations',
    education: [
      {
        period: '2020 – 2022',
        school: 'SUPDEWEB',
        title: 'Master 1 & 2 Développement Mobile',
      },
      {
        period: '2018 – 2019',
        school: 'HETIC',
        title: 'Bachelor Web',
      },
      {
        period: '2016 – 2018',
        school: 'Lycée Polyvalent Le Rebours',
        title: 'BTS SIO (Services Informatiques aux Organisations)',
      },
    ],
  },

  apps: {
    heading: 'Apps que j’ai livrées',
    subtitle:
      'Présentées dans de vrais cadres mobiles, cliquables vers les stores.',
    items: [
      {
        name: 'MGEN',
        tech: 'Flutter',
        screenTitle: 'MGEN',
        accentFrom: '#6D28D9',
        accentTo: '#A855F7',
        stores: [
          {
            label: 'Play Store',
            url: 'https://play.google.com/store/apps/details?id=com.mgen.v2&hl=fr',
          },
          {
            label: 'App Store',
            url: 'https://apps.apple.com/ma/app/mgen/id1669524120?l=fr-FR&platform=watch',
          },
        ],
      },
      {
        name: 'Citeo · Guide du tri',
        tech: 'Flutter',
        screenTitle: 'Guide du tri',
        accentFrom: '#0E7490',
        accentTo: '#22D3EE',
        stores: [
          {
            label: 'Play Store',
            url: 'https://play.google.com/store/apps/details?id=fr.ecoemballage.guidedutri&hl=fr',
          },
          {
            label: 'App Store',
            url: 'https://apps.apple.com/fr/app/guide-du-tri-s%C3%A9lectif/id485709444',
          },
        ],
      },
      {
        name: 'Franprix',
        tech: 'Android',
        screenTitle: 'Franprix',
        accentFrom: '#B91C1C',
        accentTo: '#F97316',
        stores: [
          {
            label: 'Play Store',
            url: 'https://play.google.com/store/apps/details?id=com.franprix.catalogue&hl=fr',
          },
        ],
      },
      {
        name: 'FieldPro',
        tech: 'Android',
        screenTitle: 'FieldPro',
        accentFrom: '#1D4ED8',
        accentTo: '#3B82F6',
        stores: [
          {
            label: 'Play Store',
            url: 'https://play.google.com/store/apps/details?id=com.optimetriks.fieldpro&hl=fr',
          },
        ],
      },
    ],
  },

  skills: {
    heading: 'Compétences',
    groups: [
      { title: 'Langages', items: ['Dart', 'Kotlin', 'Swift (notions)'] },
      {
        title: 'State management',
        items: ['BLoC / Cubit', 'Riverpod (notions)'],
      },
      {
        title: 'Industrialisation',
        items: [
          'Clean Architecture',
          'Mason',
          'DCM Linter',
          'GitHub Copilot',
          'Localize',
        ],
      },
      {
        title: 'Outils & DevOps',
        items: [
          'Jira',
          'Confluence',
          'GitLab',
          'Bitbucket',
          'Bitrise',
          'SonarQube',
          'Tracking',
          'Firebase',
          'Play Console',
          'App Store Connect',
          'Accessibilité',
        ],
      },
    ],
  },

  genui: {
    heading: 'Projet phare',
    title: 'POC Flutter GenUI',
    description:
      'Génération d’interfaces dynamiques pilotées par l’IA via le protocole A2UI, sans compromis sur le design system. Sujet présenté lors d’une intervention chez Betclic.',
    linkLabel: 'Voir le post LinkedIn',
    linkUrl: 'https://lnkd.in/p/eUtqAk_x',
  },

  articles: {
    heading: 'Articles & veille',
    subtitle: 'Je partage régulièrement sur le mobile et les tendances tech.',
    items: [
      {
        title: 'Android 16 : 5 nouveautés à retenir de la nouvelle version de l’OS',
        source: 'useradgents.com',
        url: 'https://www.useradgents.com/actu/6412-android-16-5-nouveautes-a-retenir-de-la-nouvelle-version-de-los-pour-vos-applications-mobiles',
      },
      {
        title:
          'GenUI : et si on laissait la machine composer l’interface en temps réel',
        source: 'useradgents.com',
        url: 'https://www.useradgents.com/actu/7718-genui-et-si-on-laissait-la-machine-composer-linterface-en-temps-reel',
      },
    ],
  },

  hobbies: {
    heading: 'Hobbies',
    items: ['Football', 'Rugby', 'Cuisine (fin gourmet)', 'Chant polyphonique'],
  },

  contact: {
    heading: 'Contact',
    subtitle: 'Un projet, une opportunité ? Écrivez-moi en deux clics.',
    email: 'gmfbonnier.pro@gmail.com',
    linkedin: 'https://www.linkedin.com/in/gregoire-bonnier/',
    subjectLabel: 'Objet',
    messageLabel: 'Message',
    sendLabel: 'Envoyer',
    copyLabel: 'Copier mon email',
    copiedLabel: 'Email copié ✓',
    linkedinLabel: 'LinkedIn',
  },

  footer: {
    note: '© 2026 Grégoire Bonnier',
    backToTop: 'Haut de page',
  },
};
