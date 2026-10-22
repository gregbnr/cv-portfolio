import type { SiteContent } from './types';

// TODO: relecture EN par Grégoire (anglais B1) — 1re version rédigée automatiquement.
export const enContent: SiteContent = {
  lang: 'en',
  altLang: 'fr',
  cvUrl: '/cv/CV_Gregoire-BONNIER.pdf',

  nav: {
    about: 'About',
    experience: 'Experience',
    apps: 'Apps',
    skills: 'Skills',
    genui: 'GenUI',
    articles: 'Articles',
    contact: 'Contact',
    downloadCv: 'Download CV',
    switchLang: 'Français',
    toggleTheme: 'Toggle theme',
    menu: 'Menu',
  },

  hero: {
    label: 'Senior Flutter Developer',
    name: 'Grégoire Bonnier',
    tagline: 'I build mobile apps used by millions of people.',
    sub: '6 years of experience · Flutter & Android · major brands (MGEN, Franprix, LFP, FFF…)',
    ctaContact: 'Get in touch',
    ctaCv: 'Download CV',
    meta: [
      { label: 'Location', value: 'Bordeaux, France' },
      { label: 'English', value: 'English B1' },
      { label: 'Licence', value: 'Driving licence' },
    ],
  },

  about: {
    heading: 'About',
    paragraphs: [
      'A mobile app developer for 6 years, I have built applications for several major brands.',
      'I’m looking to join an ambitious team to design and optimise mobile experiences used by millions of people, with a strong focus on architecture, design systems and accessibility.',
    ],
    photoAlt: 'Portrait of Grégoire Bonnier',
  },

  experience: {
    heading: 'Experience',
    items: [
      {
        period: '2022 – present',
        company: 'Useradgents',
        role: 'Flutter & Android Developer',
        location: 'Bordeaux',
        bullets: [
          'Apps for major brand clients (MGEN, Franprix, LFP, FFF…).',
          'Maintenance and enhancement across several applications.',
          'Built a new Flutter app (Clean Architecture, Design System, Accessibility).',
          'Wrote articles and ran tech sessions.',
          'Technical documentation.',
          'Contributed to industrialising the development process.',
        ],
      },
      {
        period: '2020 – 2022',
        company: 'Optimetriks — FieldPro',
        role: 'Android Developer (work-study)',
        location: 'Paris',
        bullets: [
          'Modularised the Android application.',
          'Maintenance and enhancement.',
          'Took part in the design thinking phase.',
          'Unit & automated testing.',
          'Technical and managerial documentation.',
          'Facilitated ScrumBan agile meetings.',
        ],
      },
      {
        period: '2018 – 2020',
        company: 'Wonderstudios',
        role: 'Junior Web Developer (work-study) then Project Manager (permanent)',
        location: 'Paris',
        bullets: [
          'Built advertising banners for the web.',
          'Graphic designer (static images, skins and website).',
          'Client relationship and negotiation.',
          'UX/UI design consulting.',
          'Web content creation & production (website, social media, display).',
          'Follow-up, reporting and strategic recommendations.',
        ],
      },
      {
        period: '2017 – 2018',
        company: 'Other experiences',
        role: '2 internships — Junior Web Developer',
        location: 'France',
        bullets: [
          'Two internships as a junior web developer between 2017 and 2018.',
        ],
      },
    ],
    educationHeading: 'Education',
    education: [
      {
        period: '2020 – 2022',
        school: 'SUPDEWEB',
        title: 'Master’s (M1 & M2) in Mobile Development',
      },
      {
        period: '2018 – 2019',
        school: 'HETIC',
        title: 'Bachelor in Web',
      },
      {
        period: '2016 – 2018',
        school: 'Lycée Polyvalent Le Rebours',
        title: 'BTS SIO (IT Services for Organisations)',
      },
    ],
  },

  apps: {
    heading: 'Apps I shipped',
    subtitle: 'Shown in real phone frames, linking to the stores.',
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
    heading: 'Skills',
    groups: [
      { title: 'Languages', items: ['Dart', 'Kotlin', 'Swift (basics)'] },
      {
        title: 'State management',
        items: ['BLoC / Cubit', 'Riverpod (basics)'],
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
        title: 'Tools & DevOps',
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
          'Accessibility',
        ],
      },
    ],
  },

  genui: {
    heading: 'Flagship project',
    title: 'Flutter GenUI POC',
    description:
      'Dynamic AI-driven UI generation through the A2UI protocol, without compromising the design system. Presented during a talk at Betclic.',
    linkLabel: 'See the LinkedIn post',
    linkUrl: 'https://lnkd.in/p/eUtqAk_x',
  },

  articles: {
    heading: 'Articles & tech watch',
    subtitle: 'I regularly share about mobile and tech trends.',
    items: [
      {
        title: 'Android 16: 5 highlights from the new OS version',
        source: 'useradgents.com',
        url: 'https://www.useradgents.com/actu/6412-android-16-5-nouveautes-a-retenir-de-la-nouvelle-version-de-los-pour-vos-applications-mobiles',
      },
      {
        title: 'GenUI: what if we let the machine compose the UI in real time',
        source: 'useradgents.com',
        url: 'https://www.useradgents.com/actu/7718-genui-et-si-on-laissait-la-machine-composer-linterface-en-temps-reel',
      },
    ],
  },

  hobbies: {
    heading: 'Hobbies',
    items: ['Football', 'Rugby', 'Cooking (fine food lover)', 'Polyphonic singing'],
  },

  contact: {
    heading: 'Contact',
    subtitle: 'A project, an opportunity? Reach me in two clicks.',
    email: 'gmfbonnier.pro@gmail.com',
    linkedin: 'https://www.linkedin.com/in/gregoire-bonnier/',
    subjectLabel: 'Subject',
    messageLabel: 'Message',
    sendLabel: 'Send',
    copyLabel: 'Copy my email',
    copiedLabel: 'Email copied ✓',
    linkedinLabel: 'LinkedIn',
  },

  footer: {
    note: '© 2026 Grégoire Bonnier',
    backToTop: 'Back to top',
  },
};
