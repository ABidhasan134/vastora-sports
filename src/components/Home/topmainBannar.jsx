"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function TopmainBannar() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="relative flex justify-center border-2 border-red-500 items-center">
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
const bannarDampData=[
    {
        title:"💙 Chelsea Home Jersey | Nike Official Design 🏟️",
        Subtitle: 'Show your Blues pride with this stunning Chelsea home kit perfect for matchdays, collections, or streetwear style.',
        quality: ['Premium quality with the iconic Chelsea FC badge','Nike swoosh']
    },

]
