import { HeroSection } from "@/components/home/hero-section"
import { LocationBar } from "@/components/home/location-bar"
import { PromoBanner } from "@/components/home/promo-banner"
import { OffersSection } from "@/components/home/offers-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <HeroSection />
      <LocationBar />
      <OffersSection />
    </div>
  )
}
