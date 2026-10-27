import type {
  GroupField,
  ImageField,
  KeyTextField,
  LinkField,
  PrismicDocumentWithoutUID,
  PrismicDocumentWithUID,
  RichTextField,
  SelectField,
} from "@prismicio/client";

export type PortfolioCategory =
  | "Branding e Identidad"
  | "Digital y UX/UI"
  | "Packaging y Retail";

export type HomeDocumentData = {
  heading_before: KeyTextField;
  heading_highlight: KeyTextField;
  heading_after: KeyTextField;
  subheading: RichTextField;

  about_eyebrow: KeyTextField;
  photo: ImageField;
  heading: RichTextField;
  paragraph_1: RichTextField;
  paragraph_2: RichTextField;
  paragraph_3: RichTextField;
  facts: GroupField<{ value: KeyTextField; label: KeyTextField }>;

  services_eyebrow: KeyTextField;
  services_heading_before: KeyTextField;
  services_heading_highlight: KeyTextField;
  services: GroupField<{
    number: KeyTextField;
    title: KeyTextField;
    description: RichTextField;
  }>;
  sector_experience: KeyTextField;

  work_eyebrow: KeyTextField;
  work_heading: KeyTextField;
  link_label: KeyTextField;
  featured_projects: GroupField<{ project: LinkField<"portfolio"> }>;

  clients_eyebrow: KeyTextField;
  clients: GroupField<{ name: KeyTextField }>;

  heading_main: KeyTextField;
  heading_secondary: KeyTextField;
  email: KeyTextField;
  phone: KeyTextField;
  linkedin_label: KeyTextField;
  linkedin_url: LinkField;
  location: KeyTextField;

  meta_title: KeyTextField;
  meta_description: KeyTextField;
  meta_image: ImageField;
};

export type PortfolioDocumentData = {
  title: KeyTextField;
  client: KeyTextField;
  category: SelectField<PortfolioCategory>;
  year: KeyTextField;
  discipline: KeyTextField;
  cover: ImageField;

  summary: RichTextField;
  challenge: RichTextField;
  role: RichTextField;
  process: GroupField<{ step: KeyTextField }>;
  outcome: RichTextField;

  stats: GroupField<{ value: KeyTextField; label: KeyTextField }>;

  meta_title: KeyTextField;
  meta_description: KeyTextField;
  meta_image: ImageField;
};

export type HomeDocument = PrismicDocumentWithoutUID<HomeDocumentData, "home">;
export type PortfolioDocument = PrismicDocumentWithUID<
  PortfolioDocumentData,
  "portfolio"
>;
