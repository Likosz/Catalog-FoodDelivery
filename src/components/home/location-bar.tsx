"use client"

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationBar() {
  return (
    <div className="border-b bg-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <MapPin className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Entregando em</p>
              <p className="font-medium text-foreground">Av. Paulista, 1000, São Paulo - SP</p>
            </div>
          </div>
          <Button
            variant="link"
            className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
          >
            Alterar Local
          </Button>
        </div>
      </div>
    </div>
  )
}
