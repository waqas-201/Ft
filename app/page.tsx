import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { FeaturedProducts } from "@/components/featured-products"
import { BrandShowcase } from "@/components/brand-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PaintCalculatorSection } from "@/components/paint-calculator-section"
import { BestPaintsSection } from "@/components/best-paints-section"
import { CTASection } from "@/components/cta-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <div className="bg-muted/20">
            <FeaturesSection />
          </div>
          <FeaturedProducts />
          <div className="bg-muted/30">
            <BrandShowcase />
          </div>
          <TestimonialsSection />
          <div className="bg-muted/20">
            <PaintCalculatorSection />
          </div>
          <BestPaintsSection />
          <div className="bg-muted/30">
            <CTASection />
          </div>
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}
