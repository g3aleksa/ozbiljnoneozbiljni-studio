export interface Guest {
  id: string;
  name: string;
  title: string;
  image: string;
  quote: string;
  episodeNumber: number;
}

export const guests: Guest[] = [
  {
    id: "1",
    name: "Marko Petrović",
    title: "Preduzetnik & Osnivač StartUp Hub-a",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    quote: "Uspeh nije destinacija, već putovanje koje nikada ne prestaje.",
    episodeNumber: 45,
  },
  {
    id: "2",
    name: "Ana Jovanović",
    title: "CEO Tech Innovations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    quote: "Svaki neuspeh je samo korak bliže uspehu.",
    episodeNumber: 42,
  },
  {
    id: "3",
    name: "Dr. Nikola Simić",
    title: "Psiholog & Autor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    quote: "Mentalno zdravlje je temelj svakog uspeha.",
    episodeNumber: 38,
  },
  {
    id: "4",
    name: "Jelena Marković",
    title: "Novinarka & Spisateljica",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    quote: "Priče nas povezuju više nego što mislimo.",
    episodeNumber: 35,
  },
  {
    id: "5",
    name: "Stefan Đorđević",
    title: "IT Stručnjak & Predavač",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    quote: "Tehnologija menja svet, ali ljudi ga oblikuju.",
    episodeNumber: 32,
  },
  {
    id: "6",
    name: "Ivana Todorović",
    title: "Profesionalna sportistkinja",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    quote: "Disciplina je ono što te vodi kad motivacija izbledi.",
    episodeNumber: 28,
  },
  {
    id: "7",
    name: "Milan Stojanović",
    title: "Muzičar & Producent",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    quote: "Muzika je univerzalni jezik koji svi razumemo.",
    episodeNumber: 25,
  },
  {
    id: "8",
    name: "Maja Nikolić",
    title: "Glumica & Reditelj",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    quote: "Umetnost je ogledalo društva.",
    episodeNumber: 22,
  },
  {
    id: "9",
    name: "Aleksandar Pavlović",
    title: "Chef & Vlasnik restorana",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    quote: "Hrana je ljubav koju možeš probati.",
    episodeNumber: 18,
  },
  {
    id: "10",
    name: "Teodora Ilić",
    title: "Naučnica & Istraživač",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    quote: "Znatiželja je početak svakog otkrića.",
    episodeNumber: 15,
  },
  {
    id: "11",
    name: "Lazar Kostić",
    title: "Stand-up komičar",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    quote: "Smeh je najbolji lek, a ja sam apotekar.",
    episodeNumber: 12,
  },
  {
    id: "12",
    name: "Sara Milošević",
    title: "Aktivista & Filantrop",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    quote: "Mali koraci stvaraju velike promene.",
    episodeNumber: 8,
  },
];
