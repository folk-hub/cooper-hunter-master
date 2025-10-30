// Main content export file
// Import this file to access all content
// When migrating to a CMS, you can replace these imports with CMS API calls

import { navigation as nav, footer as footerData } from "./site"
import { homepage as homepageData } from "./homepage"
import { products as productsData, getProductById as getProduct } from "./products"
import { aboutPage as aboutPageData } from "./about"

export {
  nav as navigation,
  footerData as footer,
  homepageData as homepage,
  productsData as products,
  getProduct as getProductById,
  aboutPageData as aboutPage,
}
export type * from "./types"

// Combined content object for backward compatibility
export const siteContent = {
  navigation: nav,
  homepage: homepageData,
  products: productsData,
  footer: footerData,
  aboutPage: aboutPageData,
}
