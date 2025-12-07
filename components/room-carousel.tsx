"use client"

import Image from "next/image"
import * as React from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

type RoomImage = {
  src: string
  alt: string
  label: string
}

interface RoomCarouselProps {
  items: RoomImage[]
}

export function RoomCarousel({ items }: RoomCarouselProps) {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-[60%] md:basis-[55%] lg:basis-[48%]">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-200 hover:scale-[1.01] aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, (min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-200 group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-4 sm:p-5 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.label}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-gray-700 w-6" : "bg-gray-400"
            }`}
            aria-label={`Gå til slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
