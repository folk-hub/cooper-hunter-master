"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

interface ProductCarouselProps {
  images: string[]
  alt: string
  fit?: "contain" | "cover"
  aspect?: string
  captions?: string[]
}

export function ProductCarousel({ images, alt, fit = "contain", aspect, captions }: ProductCarouselProps) {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)
  const aspectClass = aspect || "aspect-[4/3]"
  const paddingClass = fit === "cover" ? "p-0" : "p-8"
  const objectFitClass = fit === "cover" ? "object-cover" : "object-contain"

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className={`${aspectClass} overflow-hidden rounded-t-lg ${paddingClass} bg-transparent ${
                  captions ? "group relative" : ""
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${alt} - ${index + 1}`}
                  className={`${objectFitClass} w-full h-full`}
                />
                {captions && captions[index] ? (
                  <>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-90" />
                    <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <div className="w-full p-4 text-white text-base font-semibold">{captions[index]}</div>
                    </div>
                  </>
                ) : null}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${current === index ? "bg-gray-600 w-6" : "bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
