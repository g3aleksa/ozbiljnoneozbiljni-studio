export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "studio" | "epizode" | "iza-kulisa" | "eventi";
  aspectRatio: "square" | "portrait" | "landscape";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop",
    alt: "Snimanje epizode u studiju",
    category: "studio",
    aspectRatio: "landscape",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=800&fit=crop",
    alt: "Mikrofon u studiju",
    category: "studio",
    aspectRatio: "portrait",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?w=600&h=600&fit=crop",
    alt: "Razgovor sa gostom",
    category: "epizode",
    aspectRatio: "square",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    alt: "Tim na poslu",
    category: "iza-kulisa",
    aspectRatio: "landscape",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=800&fit=crop",
    alt: "Priprema opreme",
    category: "iza-kulisa",
    aspectRatio: "portrait",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=600&fit=crop",
    alt: "Live event",
    category: "eventi",
    aspectRatio: "square",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
    alt: "Audio oprema",
    category: "studio",
    aspectRatio: "landscape",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=800&fit=crop",
    alt: "Podcast setup",
    category: "studio",
    aspectRatio: "portrait",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop",
    alt: "Gost u studiju",
    category: "epizode",
    aspectRatio: "square",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    alt: "Tehnička oprema",
    category: "iza-kulisa",
    aspectRatio: "landscape",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=800&fit=crop",
    alt: "Publika na eventu",
    category: "eventi",
    aspectRatio: "portrait",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=600&fit=crop",
    alt: "Snimanje uživo",
    category: "eventi",
    aspectRatio: "square",
  },
];

export const galleryCategories = [
  { id: "sve", label: "Sve" },
  { id: "studio", label: "Studio" },
  { id: "epizode", label: "Epizode" },
  { id: "iza-kulisa", label: "Iza kulisa" },
  { id: "eventi", label: "Eventi" },
];
