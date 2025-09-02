import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Final Touch Acrylic Filling Putty",
    category: "Filling Putty",
    price: "PKR 495 - PKR 6,840",
    image: "https://alliancepaintsindustries.com/wp-content/uploads/2024/03/PAINT-PROJECT-23-800x800.jpg",
    rating: 4.5,
    isOnSale: true,
    saleLabel: "Sale!",
  },
  {
    id: 2,
    name: "Final Touch Red Oxide Primer Sealer",
    category: "Primers",
    price: "PKR 835 - PKR 12,060",
    image: "https://alliancepaintsindustries.com/wp-content/uploads/2024/02/PAINT-PROJECT-14-800x800.jpg",
    rating: 4.8,
    isOnSale: true,
    saleLabel: "Sale!",
  },
  {
    id: 3,
    name: "Final Touch Water Based Wall Primer",
    category: "Primers",
    price: "PKR 855 - PKR 12,780",
    image: "https://alliancepaintsindustries.com/wp-content/uploads/2024/03/PAINT-PROJECT-24-800x800.jpg",
    rating: 4.6,
    isOnSale: true,
    saleLabel: "Sale!",
  },
  {
    id: 4,
    name: "New Deluxe Water Based Matt Finish",
    category: "Interior Paints",
    price: "PKR 1,150 - PKR 17,100",
    image: "https://alliancepaintsindustries.com/wp-content/uploads/2024/03/PAINT-PROJECT-13-800x800.jpg",
    rating: 4.7,
    isOnSale: true,
    saleLabel: "Sale!",
  },
  {
    id: 5,
    name: "New Deluxe Gold Series Weather Shelter",
    category: "Exterior Paints",
    price: "PKR 4,500 - PKR 5,600",
    image: "https://alliancepaintsindustries.com/wp-content/uploads/2024/03/PAINT-PROJECT-28-800x800.jpg",
    rating: 4.9,
    isOnSale: true,
    saleLabel: "Sale!",
  },
  {
    id: 6,
    name: "Orion Acrylic Filling Putty",
    category: "Filling Putty",
    price: "PKR 900 - PKR 3,600",
    image: "/black-paint-bucket-with-orion-branding.png",
    rating: 4.4,
    isOnSale: false,
  },
  {
    id: 7,
    name: "Orion Emulsion",
    category: "Interior Paints",
    price: "PKR 700",
    image: "/yellow-paint-bucket-with-orion-branding.png",
    rating: 4.3,
    isOnSale: false,
  },
  {
    id: 8,
    name: "Orion Synthetic Enamel",
    category: "Oil Paint",
    price: "PKR 1,000",
    image: "/dark-paint-bucket-with-orion-synthetic-enamel.png",
    rating: 4.5,
    isOnSale: false,
  },
]

export function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Featured Paints</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here is the best paints in competitive market price.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  {product.isOnSale && (
                    <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">
                      {product.saleLabel}
                    </Badge>
                  )}
                  <div className="aspect-square rounded-lg bg-card overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">{product.category}</div>
                  <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="font-bold text-primary">{product.price}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-transparent"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
