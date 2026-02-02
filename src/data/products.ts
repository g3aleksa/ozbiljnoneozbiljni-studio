export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "majice" | "duksevi" | "kape" | "šolje";
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  isSoldOut?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "OzbiljnoNeozbiljni Majica - Classic",
    description: "Klasična crna majica sa logom. 100% pamuk, udobna i kvalitetna.",
    price: 2490,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    category: "majice",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Crna", "Bela"],
    isNew: true,
  },
  {
    id: "2",
    name: "OzbiljnoNeozbiljni Duks - Premium",
    description: "Premium duks sa kapuljačom i vezenim logom. Savršen za hladnije dane.",
    price: 4990,
    originalPrice: 5990,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
    category: "duksevi",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Crna", "Siva"],
  },
  {
    id: "3",
    name: "OzbiljnoNeozbiljni Kapa",
    description: "Snapback kapa sa vezenim logom. Podesiva veličina.",
    price: 1990,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
    category: "kape",
    colors: ["Crna", "Crvena"],
  },
  {
    id: "4",
    name: "OzbiljnoNeozbiljni Šolja",
    description: "Keramička šolja za kafu sa printom. Kapacitet 350ml.",
    price: 1290,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop",
    category: "šolje",
    colors: ["Crna", "Bela"],
  },
  {
    id: "5",
    name: "OzbiljnoNeozbiljni Majica - Quote",
    description: "Majica sa najpoznatijim citatom iz podcasta. Limited edition.",
    price: 2790,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop",
    category: "majice",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Crna"],
    isNew: true,
  },
  {
    id: "6",
    name: "OzbiljnoNeozbiljni Duks - Minimalist",
    description: "Minimalistički duks sa malim logom na grudima.",
    price: 4490,
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=600&fit=crop",
    category: "duksevi",
    sizes: ["M", "L", "XL"],
    colors: ["Crna", "Bela", "Siva"],
    isSoldOut: true,
  },
];

export const categories = [
  { id: "sve", label: "Sve" },
  { id: "majice", label: "Majice" },
  { id: "duksevi", label: "Duksevi" },
  { id: "kape", label: "Kape" },
  { id: "šolje", label: "Šolje" },
];
