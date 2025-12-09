"use client"

import { useState } from "react"
import { Search, ShoppingBag, CheckCircle, Clock, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [postcode, setPostcode] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (postcode.trim()) {
      console.log("Searching for:", postcode)
    }
  }

  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <CheckCircle className="h-4 w-4" aria-hidden="true" />
              <span>Order food easily from your favorite restaurants</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Feast Your Senses,
              <br />
              <span className="text-primary">Fast and Fresh</span>
            </h1>

            <p className="text-lg text-white/70 max-w-md mx-auto lg:mx-0">
              Order Restaurant food, takeaway and groceries.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="e.g. EC4R 3TE"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="h-14 pl-4 pr-4 rounded-full bg-white text-secondary border-0 placeholder:text-muted-foreground"
                  aria-label="Enter your postcode"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium"
              >
                <Search className="mr-2 h-5 w-5" aria-hidden="true" />
                Search
              </Button>
            </form>

            <p className="text-sm text-white/50">
              Enter a postcode to see what we deliver
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full" />
              
              <div className="absolute top-8 right-0 bg-white rounded-2xl p-4 shadow-xl max-w-[200px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary text-sm">Order Accepted!</p>
                    <p className="text-xs text-muted-foreground">Your order is confirmed</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 bg-white rounded-2xl p-4 shadow-xl max-w-[220px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary text-sm">Delivery in Progress</p>
                    <p className="text-xs text-muted-foreground">Arriving in 20-25 min</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  <div className="h-1 flex-1 rounded-full bg-primary" />
                  <div className="h-1 flex-1 rounded-full bg-primary" />
                  <div className="h-1 flex-1 rounded-full bg-gray-200" />
                </div>
              </div>

              <div className="absolute top-1/2 right-8 -translate-y-1/2 bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center absolute -top-1 -right-1">
                    3
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-1/4 bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm">24/7 Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
