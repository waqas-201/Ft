import { Card, CardContent } from "@/components/ui/card"

const brands = [
  {
    name: "Final Touch Classic",
    description: "Final Touch Classic Paint offers timeless elegance and enduring quality for your walls.",
    image: "/final-touch-paint-cans-in-modern-interior-setting.png",
  },
  {
    name: "New Deluxe Gold",
    description:
      "Experience luxurious richness and superior quality with New Deluxe Gold Paint collection for interiors.",
    image: "/deluxe-gold-paint-cans-in-elegant-room-setting.png",
  },
  {
    name: "ABC Paint",
    description: "Transforming homes with a vibrant palette of high-quality, durable colours for every surface.",
    image: "/abc-paint-cans-in-colorful-modern-home.png",
  },
]

export function BrandShowcase() {
  return (
    <section id="brands" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={brand.image || "/placeholder.svg"}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{brand.name}</h3>
                <p className="text-muted-foreground text-pretty">{brand.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
