import { Sparkles } from "lucide-react"

export function PromoBanner() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-center">
          <Sparkles className="h-4 w-4 text-yellow-400" aria-hidden="true" />
          <p className="text-sm text-white">
            Ganhe <span className="font-semibold text-primary">5% OFF</span> no primeiro pedido, Cupom:{" "}
            <span className="font-bold text-primary">PRIMEIRO5</span>
          </p>
          <Sparkles className="h-4 w-4 text-yellow-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
