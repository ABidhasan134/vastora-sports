"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

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

  const [api, setApi] = React.useState(null)
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap()) 
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <div className="relative flex flex-col justify-center items-center">
      {/* Top thumbnails */}
      <div className="flex gap-3 mb-4">
        {bannarDampData.map((data, index) => (
          <button
            key={index}
            onClick={() => api && api.scrollTo(index)}
            className={`border-2 rounded-full overflow-hidden transition
              ${current === index ? "border-blue-600 p-1" : "border-transparent"}
            `}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-8 h-8 object-cover"
            />
          </button>
        ))}
      </div>

      {/*  Carousel css class in globals.css*/}
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-7xl max-h-[600px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="border-2 border-green-600 w-full">
          {bannarDampData.map((data, index) => (
            <CarouselItem key={index}>
              <div className="heroCoruselContener">
                <div className="text-black w-sm border-2 border-red-500">
                  <h2 className="hTitle">{data.title}</h2>
                  <p>{data.Subtitle}</p>
                </div>

                <figure className="flex justify-start">
                                    <img
                  src={data.image}
                  alt={data.title}
                  className="h-[450px] border-2 border-green-500 "
                />
                </figure>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  )
}

const bannarDampData = [
  {
    title: "💙 Chelsea Home Jersey | Nike Official Design 🏟️",
    Subtitle:
      "Show your Blues pride with this stunning Chelsea home kit perfect for matchdays, collections, or streetwear style.",
    image:
      "https://i.ibb.co.com/TqHydyPN/FB-IMG-1755009637108-removebg-preview.png",
  },
  {
    title: "🔥 Man United Away Jersey | Adidas Special",
    Subtitle: "Rep the Red Devils with the new away edition.",
    image: "https://i.ibb.co.com/m5gB2TFt/518303222-1178504530972298-5097577727941577642-n-removebg-preview.png",
  },
  {
    title: "🔴 Liverpool Home Jersey | Nike Tradition",
    Subtitle:
      "The classic red of Anfield — feel the Kop energy with this official Nike design.",
    image:
      "https://i.ibb.co.com/gZVt4qPK/FB-IMG-1755009702219-removebg-preview.png",
  },
  {
    title: "🌴 Inter Miami Home Jersey | Adidas Messi Edition",
    Subtitle:
      "Iconic pink and black — stand out with the MLS jersey Messi made legendary.",
    image:
      "https://i.ibb.co.com/JFbTCRRc/517012513-1170979225058162-6701650183084489769-n-removebg-preview.png",
  },
  {
    title: "💎 PSG Home Jersey | Jordan Collaboration",
    Subtitle:
      "Parisian elegance meets Jordan brand — perfect for Parc des Princes nights.",
    image:
      "https://i.ibb.co.com/gFLMTh5R/548195390-1234444362044981-4928521021827126404-n-removebg-preview.png",
  },
]
