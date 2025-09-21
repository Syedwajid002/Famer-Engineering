import { Project } from "./types";

// Import covers only (explicitly, since they’re “key” images)
import morjanaCover from "../Assets/Morjana/Cover.png";
import daniatCover from "../Assets/Daniat-Wadina/cover.png";
import masarCover from "../Assets/MASAR/cover.jpg";

// Auto-import galleries
const morjanaGallery = import.meta.glob("../Assets/Morjana/*.jpg", { eager: true });
const daniatGallery = import.meta.glob("../Assets/Daniat-Wadina/*.{jpg,png}", { eager: true });
const masarGallery = import.meta.glob("../Assets/MASAR/*.jpg", { eager: true });

// Convert to array of URLs
function toArray(obj: Record<string, any>) {
  return Object.values(obj).map((m: any) => m.default);
}

export const projects: Project[] = [
  {
    id: "morjana",
    title: "Morjana by NHC",
    category: "civil",
    location: "Doha, Qatar",
    year: "2025 and ongoing",
    description: "Affordable and exquisite luxury housing In Amir Fawaz district Jeddah.",
    cover: morjanaCover,
    gallery: toArray(morjanaGallery),
    tags: ["Commercial", "Sustainable", "High-Rise"],
    details: `At Outstanding Dimensions, we take pride...`,
  },
  {
    id: "daniat-wadina",
    title: "Daniat-Wadina",
    category: "civil",
    location: "Taif, Makkah",
    year: "2024",
    description: "Comprehensive urban development project...",
    cover: daniatCover,
    gallery: toArray(daniatGallery),
    tags: ["Marine", "Luxury", "Infrastructure"],
    details: `Amidst the neighborhoods of rich history...`,
  },
  {
    id: "masar",
    title: "MASAR - Al Diyar Al Arabia",
    category: "civil",
    location: "Makkah, Saudi Arabia",
    year: "2024",
    description: "Extending over 1.2 million SQM...",
    cover: masarCover,
    gallery: toArray(masarGallery),
    tags: ["Marine", "Luxury", "Infrastructure"],
    details: "Extending over 1.2 million SQM and with its strategic location...",
  },
];
