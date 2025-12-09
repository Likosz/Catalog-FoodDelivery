import { Sparkles } from "lucide-react"

export function PromoBanner() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-center">
          <Sparkles className="h-4 w-4 text-yellow-400" aria-hidden="true" />
          <p className="text-sm text-white">
            Get <span className="font-semibold text-primary">5% Off</span> your first order, Promo:{" "}
            <span className="font-bold text-primary">ORDER5</span>
          </p>
          <Sparkles className="h-4 w-4 text-yellow-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
