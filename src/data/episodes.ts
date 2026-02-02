export interface Episode {
  id: string;
  title: string;
  guest: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  youtubeId: string;
  date: string;
  duration: string;
}

export const episodes: Episode[] = [
  {
    id: "1",
    title: "Kako pronaći balans između posla i života",
    guest: "Marko Petrović",
    description: "Razgovaramo o izazovima modernog života i kako pronaći ravnotežu između karijere i privatnog života.",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=450&fit=crop",
    youtubeUrl: "https://youtu.be/Bwz9PGbSEXk?si=el20tGrw0vByyjaY",
    youtubeId: "Bwz9PGbSEXk",
    date: "2024-01-15",
    duration: "1:23:45",
  },
  {
    id: "2",
    title: "Preduzetništvo u Srbiji - izazovi i prilike",
    guest: "Ana Jovanović",
    description: "Ana deli svoje iskustvo pokretanja startupa u Srbiji i savete za buduće preduzetnike.",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop",
    youtubeUrl: "https://youtube.com/watch?v=example2",
    youtubeId: "dQw4w9WgXcQ",
    date: "2024-01-08",
    duration: "1:45:20",
  },
  {
    id: "3",
    title: "Mentalno zdravlje u digitalnom dobu",
    guest: "Dr. Nikola Simić",
    description: "Psiholog dr. Simić govori o uticaju društvenih mreža na mentalno zdravlje i kako se zaštititi.",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=450&fit=crop",
    youtubeUrl: "https://youtube.com/watch?v=example3",
    youtubeId: "dQw4w9WgXcQ",
    date: "2024-01-01",
    duration: "1:12:30",
  },
  {
    id: "4",
    title: "Umetnost pripovedanja u podkastingu",
    guest: "Jelena Marković",
    description: "Novinarka i spisateljica Jelena otkriva tajne dobre priče i kako zainteresovati publiku.",
    thumbnail: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?w=800&h=450&fit=crop",
    youtubeUrl: "https://youtube.com/watch?v=example4",
    youtubeId: "dQw4w9WgXcQ",
    date: "2023-12-25",
    duration: "1:30:15",
  },
  {
    id: "5",
    title: "Budućnost tehnologije u Srbiji",
    guest: "Stefan Đorđević",
    description: "IT stručnjak Stefan analizira trendove i predviđa šta nas čeka u svetu tehnologije.",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=450&fit=crop",
    youtubeUrl: "https://youtube.com/watch?v=example5",
    youtubeId: "dQw4w9WgXcQ",
    date: "2023-12-18",
    duration: "1:55:00",
  },
  {
    id: "6",
    title: "Sport i disciplina - recept za uspeh",
    guest: "Ivana Todorović",
    description: "Profesionalna sportistkinja Ivana priča o tome kako je sport oblikovao njen karakter.",
    thumbnail: "https://images.unsplash.com/photo-1461896836934- voices-podcast?w=800&h=450&fit=crop",
    youtubeUrl: "https://youtube.com/watch?v=example6",
    youtubeId: "dQw4w9WgXcQ",
    date: "2023-12-11",
    duration: "1:18:45",
  },
];
