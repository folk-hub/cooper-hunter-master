import type { Product } from "@/content/types"

// Downloads a product's datasheet (produktark) using the URL defined in content.
// Keeping the path data-driven avoids filename mismatches between the
// listing page and the detail pages.
export function downloadProductSheet(product: Pick<Product, "name" | "detailPage">) {
  const url = product.detailPage.downloadUrl
  if (!url) return

  const link = document.createElement("a")
  link.href = url
  link.download = `${product.name}-produktark.pdf`
  link.click()
}
