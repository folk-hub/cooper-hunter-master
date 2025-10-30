// TypeScript types for content structure
// These types can be used to define CMS schemas

export interface NavigationItem {
  label: string
  href: string
}

export interface Navigation {
  menuItems: NavigationItem[]
  contactButton: string
}

export interface HeroSection {
  title: string
  description: string
  buttonText: string
}

export interface IntroSection {
  text: string
}

export interface Feature {
  title: string
}

export interface ProductsSection {
  heading: string
  description: string
  buttonText: string
}

export interface ImageSection {
  title: string
  description: string
}

export interface CTASection {
  heading: string
  description: string
  primaryButton: string
  secondaryButton: string
}

export interface Homepage {
  hero: HeroSection
  intro: IntroSection
  features: Feature[]
  productsSection: ProductsSection
  imageSection1: ImageSection
  imageSection2: ImageSection
  cta: CTASection
}

export interface SpecificationItem {
  label: string
  value: string
}

export interface KeyFeature {
  title: string
  description: string
}

export interface ProductDetailPage {
  title: string
  subtitle: string
  description: string
  backButton: string
  downloadButton: string
  findDealerButton: string
  priceNote: string
  downloadUrl?: string
  specifications: {
    title: string
    items: SpecificationItem[]
  }
  keyFeatures: {
    title: string
    items: KeyFeature[]
  }
}

export interface Product {
  id: string
  name: string
  description: string
  scop: string
  features: string[]
  price: string
  images?: string[]
  image?: string
  buttonText?: string
  detailPage: ProductDetailPage
}

export interface ContactInfo {
  title: string
  phone: string
  email: string
  address: string
}

export interface FooterLinks {
  title: string
  items: NavigationItem[]
}

export interface Footer {
  companyDescription: string
  contact: ContactInfo
  links: FooterLinks
  copyright: string
}

export interface KeyStat {
  value: string
  label: string
  icon: string
}

export interface Brand {
  name: string
}

export interface ContactDetail {
  type: string
  title: string
  content: string
}

export interface AboutPage {
  hero: {
    title: string
    subtitle: string
  }
  history: {
    title: string
    paragraphs: string[]
  }
  keyStats: {
    title: string
    stats: KeyStat[]
  }
  brands: {
    title: string
    items: Brand[]
  }
  contact: {
    title: string
    subtitle: string
    details: ContactDetail[]
  }
}
