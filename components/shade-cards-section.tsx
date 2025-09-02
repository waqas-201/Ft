import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

const shadeCards = [
  {
    id: 1,
    name: "WATER MATT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Premium water-based matt finish for interior walls",
    category: "Interior",
  },
  {
    id: 2,
    name: "GLOSS ENAMEL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "High-gloss enamel finish for doors and windows",
    category: "Enamel",
  },
  {
    id: 3,
    name: "MATT ENAMEL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Smooth matt enamel for sophisticated interiors",
    category: "Enamel",
  },
  {
    id: 4,
    name: "WEATHER SHEATH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Weather-resistant exterior paint protection",
    category: "Exterior",
  },
  {
    id: 5,
    name: "FINAL TOUCH SHEEN EMULSION",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Premium sheen emulsion for elegant finishes",
    category: "Emulsion",
  },
  {
    id: 6,
    name: "DELUXE WATER BASES MATT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Deluxe water-based matt for premium interiors",
    category: "Interior",
  },
  {
    id: 7,
    name: "DELUXE SILK SHEEN EMULSION",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Silk sheen emulsion for luxurious wall finishes",
    category: "Emulsion",
  },
  {
    id: 8,
    name: "DELUXE SUPER GLOSS ENAMEL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Super gloss enamel for high-end applications",
    category: "Enamel",
  },
  {
    id: 9,
    name: "ABC VINYL EMULSION",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Durable vinyl emulsion for long-lasting coverage",
    category: "Emulsion",
  },
  {
    id: 10,
    name: "HAMMER VINYL EMULSION",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Textured hammer finish vinyl emulsion",
    category: "Textured",
  },
  {
    id: 11,
    name: "ORION VINYL EMULSION",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png",
    description: "Premium Orion vinyl emulsion paint",
    category: "Emulsion",
  },
]

export function ShadeCardsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with colorful paint cans background */}
        <div
          className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-16 py-16 px-8 text-center overflow-hidden"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WjuGVm4OqsFEi2tjjgqZRGuSZCA7dI.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Our Shades Card</h2>
            <p className="text-xl text-blue-100">Download Now</p>
          </div>
        </div>

        {/* Shade Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {shadeCards.map((card) => (
            <Card
              key={card.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold text-sm mb-2 text-gray-800">{card.name}</h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{card.description}</p>
                  <Button size="sm" className="w-full bg-gray-800 hover:bg-gray-900 text-white text-xs py-2">
                    <Download className="w-3 h-3 mr-1" />
                    DOWNLOAD PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Custom Color Matching?</h3>
              <p className="text-muted-foreground mb-6">
                Our color experts can help you find the perfect shade for your project. Get personalized color
                consultation and custom paint mixing services.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Color Expert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
