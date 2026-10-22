export type Locale = 'fr' | 'en';

export interface Meta {
  label: string;
  value: string;
}

export interface StoreLink {
  label: 'Play Store' | 'App Store';
  url: string;
}

export interface AppItem {
  name: string;
  tech: 'Flutter' | 'Android';
  stores: StoreLink[];
  /** Dégradé de l'écran stylisé (mockup). */
  accentFrom: string;
  accentTo: string;
  /** Libellé affiché dans l'écran stylisé. */
  screenTitle: string;
  /** Vraie capture d'écran (portrait), si fournie. */
  screenshot?: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  location: string;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Article {
  title: string;
  source: string;
  url: string;
}

export interface Education {
  period: string;
  school: string;
  title: string;
}

export interface SiteContent {
  lang: Locale;
  /** Code de la locale alternative, pour le lien de bascule. */
  altLang: Locale;
  cvUrl: string;

  nav: {
    about: string;
    experience: string;
    apps: string;
    skills: string;
    genui: string;
    articles: string;
    contact: string;
    downloadCv: string;
    switchLang: string;
    toggleTheme: string;
    menu: string;
    skipLink: string;
    brandLabel: string;
  };

  hero: {
    label: string;
    name: string;
    tagline: string;
    sub: string;
    ctaContact: string;
    ctaCv: string;
    meta: Meta[];
  };

  about: {
    heading: string;
    paragraphs: string[];
    photoAlt: string;
  };

  experience: {
    heading: string;
    items: Experience[];
    educationHeading: string;
    education: Education[];
  };

  apps: {
    heading: string;
    subtitle: string;
    items: AppItem[];
  };

  skills: {
    heading: string;
    groups: SkillGroup[];
  };

  genui: {
    heading: string;
    title: string;
    description: string;
    linkLabel: string;
    linkUrl: string;
  };

  articles: {
    heading: string;
    subtitle: string;
    readMore: string;
    items: Article[];
  };

  hobbies: {
    heading: string;
    items: string[];
  };

  contact: {
    heading: string;
    subtitle: string;
    email: string;
    linkedin: string;
    subjectLabel: string;
    messageLabel: string;
    sendLabel: string;
    directLabel: string;
    copyLabel: string;
    copiedLabel: string;
    linkedinLabel: string;
  };

  footer: {
    note: string;
    backToTop: string;
  };

  chatbot: {
    buttonLabel: string;
    teaser: string;
    title: string;
    status: string;
    greeting: string;
    placeholder: string;
    send: string;
    close: string;
    contactCta: string;
    punchlines: string[];
  };
}
