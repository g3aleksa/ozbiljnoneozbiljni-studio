import gallery1 from "@/assets/gallery/gallery-1.jpeg";
import gallery2 from "@/assets/gallery/gallery-2.jpeg";
import gallery3 from "@/assets/gallery/gallery-3.jpeg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";

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
    src: gallery1,
    alt: "Snimanje epizode sa gostom",
    category: "epizode",
    aspectRatio: "landscape",
  },
  {
    id: "2",
    src: gallery2,
    alt: "Razgovor u studiju na crvenom kauču",
    category: "studio",
    aspectRatio: "portrait",
  },
  {
    id: "3",
    src: gallery3,
    alt: "Epizoda sa gostima u studiju",
    category: "epizode",
    aspectRatio: "landscape",
  },
  {
    id: "4",
    src: gallery4,
    alt: "Iza kulisa - kamera tokom snimanja",
    category: "iza-kulisa",
    aspectRatio: "portrait",
  },
  {
    id: "5",
    src: gallery5,
    alt: "Snimanje uživo u studiju",
    category: "studio",
    aspectRatio: "landscape",
  },
  {
    id: "6",
    src: gallery6,
    alt: "Voditelji podkasta",
    category: "iza-kulisa",
    aspectRatio: "landscape",
  },
];

export const galleryCategories = [
  { id: "sve", label: "Sve" },
  { id: "studio", label: "Studio" },
  { id: "epizode", label: "Epizode" },
  { id: "iza-kulisa", label: "Iza kulisa" },
  { id: "eventi", label: "Eventi" },
];
