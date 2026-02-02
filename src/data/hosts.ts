export interface Host {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const hosts: Host[] = [
  {
    id: "1",
    name: "Marko Nikolić",
    role: "Domaćin & Producent",
    bio: "Marko je vizionar iza OzbiljnoNeozbiljni podcasta. Sa preko 10 godina iskustva u medijima, donosi jedinstvenu perspektivu i neponovljiv stil vođenja razgovora. Veruje da se i o najozbiljnijim temama može pričati opušteno.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "2",
    name: "Stefan Jović",
    role: "Ko-domaćin & Kreativni direktor",
    bio: "Stefan unosi dozu humora i kreativnosti u svaku epizodu. Kao nekadašnji stand-up komičar, zna kako da opusti gosta i izvuče najzanimljivije priče. Njegova energija je zarazna.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "3",
    name: "Ana Petrović",
    role: "Ko-domaćin & Istraživač",
    bio: "Ana je mozak operacije - istraživanje, priprema pitanja i pronalaženje fascinantnih gostiju su njena specijalnost. Njena radoznalost i dubinska analiza daju podcastu intelektualnu težinu.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];
