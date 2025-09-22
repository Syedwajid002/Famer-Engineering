import { Project } from "./types";

// Import covers only (explicitly, since they’re “key” images)
import morjanaCover from "../Assets/Morjana/Cover.png";
import daniatCover from "../Assets/Daniat-Wadina/cover.png";
import masarCover from "../Assets/MASAR/cover.jpg";
import KingAbdullahCover from "../Assets/King Abdullah Sports City/cover.png"
import AlHaramain from "../Assets/Al-haramain/cover.png"
import CentroCover from "../Assets/CentroRotana/cover.png"
import KIAICover from "../Assets/KAIA/cover.png"
import bankCover from "../Assets/GulfBank/cover.png"
import cornicheCover from "../Assets/Jeddah Corniche/cover.png"

// Auto-import galleries
const morjanaGallery = import.meta.glob("../Assets/Morjana/*.jpg", { eager: true });
const daniatGallery = import.meta.glob("../Assets/Daniat-Wadina/*.{jpg,png}", { eager: true });
const masarGallery = import.meta.glob("../Assets/MASAR/*.jpg", { eager: true });
const Kingabdullahgallery = import.meta.glob("../Assets/King Abdullah Sports City/*.{jpg,png}", { eager: true });
const AlHaramainGallery = import.meta.glob("../Assets/Al-haramain/*.{jpg,png}", { eager: true });
const CentroGallery = import.meta.glob("../Assets/CentroRotana/*.{jpg,png}", { eager: true });
const KIAIGallery = import.meta.glob("../Assets/KAIA/*.{jpg,png}", { eager: true });
const GulfGallery = import.meta.glob("../Assets/GulfBank/*.{jpg,png}", { eager: true });
const CornicheGallery = import.meta.glob("../Assets/Jeddah Corniche/*.{jpg,png}", { eager: true });






// Convert to array of URLs
function toArray(obj: Record<string, any>) {
  return Object.values(obj).map((m: any) => m.default);
}

export const projects: Project[] = [
  {
    id: "morjana",
    title: "Morjana by NHC",
    category: "civil",
    location: "Jeddah, Saudi Arabia",
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
  {
    id: "KingAbdullahSportsCity",
    title: "King Abdullah Sports City Jeddah",
    category: "MEP",
    location: "Jeddah, Saudi Arabia",
    year: "2024",
    description: "Project involves installation and commissioning of security systems (CCTV, access points, fire alarm with FM200, linear technology system), conduit works (EMT & PVC), cable pulling, termination, labeling, dressing, testing, and tray installation, along with GENT ATS, MDB, LVSR, and LVSD panel board installation.",
    cover: KingAbdullahCover,
    gallery: toArray(Kingabdullahgallery),
    tags: ["Security Systems", "Fire Alarms", "Power Outlet"],
    details: "",
  },
  {
    id: "KingAbdulAzizInternationalAirport", // fixed typo + standardized
    title: "King Abdul Aziz International Airport",
    category: "MEP", // match your filter button
    location: "Jeddah, Saudi Arabia",
    year: "2024",
    description: "The KAIA Jeddah project included installation of cable trays and trunks, deployment of network systems, structured cabling, and support to ICAD for seamless integration of airport infrastructure.",
    cover: KIAICover,
    gallery: toArray(KIAIGallery),
    tags: ["Security Systems", "Fire Alarms", "Power Outlet"],
    details: "",
  },
  {
    id: "AlHaramain", // fixed typo + standardized
    title: "AL Haram Expansion Project Makkah ",
    category: "Network and Security", // match your filter button
    location: "Makkah, Saudi Arabia",
    year: "2024",
    description: "The project focused on IT and low-voltage systems, including network administration for the building, hardware maintenance, and installation of integrated security solutions such as CCTV cameras and access points. Additionally, it covered fire alarm systems using FM200, as well as EMT and PVC conduit installation for power and data outlets, ensuring reliable infrastructure and safety compliance for the Al Haram Expansion.",
    cover: AlHaramain,
    gallery: toArray(AlHaramainGallery),
    tags: ["Security Systems", "Fire Alarms", "Power Outlet"],
    details: "",
  },
  {
    id: "CentroRotanaHotel", // fixed typo + standardized
    title: "Centro Rotana Hotel Project",
    category: "Interior", // match your filter button
    location: "Riyadh, Saudi Arabia",
    year: "2024",
    description: "The project involved the interior fit-out and systems installation for Centro Rotana Hotel’s Main Lobby and Meeting Rooms. Work included modern design implementation with premium finishes, integrated lighting, and seating arrangements to enhance guest experience. Additionally, the scope covered structured cabling, power distribution, and low-voltage systems to support security, communication, and operational efficiency, ensuring a luxurious yet functional hospitality environment.",
    cover: CentroCover,
    gallery: toArray(CentroGallery),
    tags: ["Security Systems", "Fire Alarms", "Power Outlet"],
    details: "",
  },
  {
    id: "GulfInternationalBank", // fixed typo + standardized
    title: "Gulf International Bank Main Branch",
    category: "MEP", // match your filter button
    location: "Jeddah, Saudi Arabia",
    year: "2024",
    description: "The project involved comprehensive electrical and IT infrastructure setup, including installation of EMT & PVC conduits, cable trays, AC/DC cabling, lighting fixtures, data cabinets, IPODs, mega screens, HVAC systems, fire protection systems, raised flooring, and gypsum ceilings. It also included termination of EMDB panels, metering room connections, data Cat6 cabling, and providing support to site technology and the GIB IT team",
    cover: bankCover,
    gallery: toArray(GulfGallery),
    tags: ["HVAC", "Fire Protection", "EMT & PVC conduits"],
    details: "",
  },
  {
    id: "Corniche", // fixed typo + standardized
    title: "Middle Corniche Project",
    category: "Electrical", // match your filter button
    location: "Jeddah, Saudi Arabia",
    year: "2024",
    description: "The project scope included pulling and termination of low-voltage power cables, installation of cable trunks, and complete cable labeling, dressing, and testing. It also covered cable termination, system testing, and commissioning to ensure reliable performance and compliance with project standards.",
    cover: cornicheCover,
    gallery: toArray(CornicheGallery),
    tags: ["Cabling", "low-voltage power cables"],
    details: "",
  },
];
