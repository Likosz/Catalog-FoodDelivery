"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const filters = [
  { id: "all", label: "Todos" },
  { id: "vegan", label: "Vegano" },
  { id: "sushi", label: "Sushi" },
  { id: "pizza", label: "Pizza & Fast Food" },
  { id: "others", label: "Outros" },
];

const offers = [
  {
    id: "1",
    name: "Chef Burgers São Paulo",
    type: "Restaurante",
    discount: "-40%",
    image: "/images/restaurant-1.jpg",
    category: "pizza",
  },
  {
    id: "2",
    name: "Grand Café Paulista",
    type: "Restaurante",
    discount: "-20%",
    image: "/images/restaurant-2.jpg",
    category: "others",
  },
  {
    id: "3",
    name: "Butterbrot Café",
    type: "Restaurante",
    discount: "-17%",
    image: "/images/restaurant-3.jpg",
    category: "others",
  },
];

export function OffersSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredOffers =
    activeFilter === "all"
      ? offers
      : offers.filter((offer) => offer.category === activeFilter);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            Até -40% 🎉 Ofertas exclusivas Order.UK
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className={
                activeFilter === filter.id
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "border-border hover:bg-muted"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <Card
              key={offer.id}
              className="group overflow-hidden border-border hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative aspect-4/3 bg-muted">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-4xl">🍔</span>
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 z-20 bg-primary text-white font-bold text-sm px-3 py-1">
                  {offer.discount}
                </Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-xs text-primary font-medium mb-1">
                  {offer.type}
                </p>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {offer.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
