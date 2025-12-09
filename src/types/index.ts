export interface NavLink {
  label: string
  href: string
}

export interface Restaurant {
  id: string
  name: string
  image: string
  rating: number
  deliveryTime: string
  minOrder: number
  cuisine: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export interface CartItem extends MenuItem {
  quantity: number
}

export interface Category {
  id: string
  name: string
  image: string
  restaurantCount: number
}
