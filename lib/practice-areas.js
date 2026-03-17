import {
  Scale,
  Gavel,
  Briefcase,
  Landmark,
  Shield,
  FileText,
  Users,
  Handshake,
  Book,
  Globe,
  BalanceScale,
  Building,
  Home,
  HeartHandshake,
  Baby,
  Cpu,
} from "lucide-react";

export const PRACTICE_AREAS = [
  {
    name: "Criminal Law",
    icon: <Gavel className="h-8 w-8" />,
    image: "/practice-areas/criminal.jpeg",
  },
  {
    name: "Civil Litigation",
    icon: <Scale className="h-8 w-8" />,
    image: "/practice-areas/civil.jpeg",
  },
  {
    name: "Corporate Law",
    icon: <Briefcase className="h-8 w-8" />,
    image: "/practice-areas/corporate.jpeg",
  },
  {
    name: "Family Law",
    icon: <Baby className="h-8 w-8" />,
    image: "/practice-areas/family.jpeg",
  },
  {
    name: "Intellectual Property",
    icon: <Book className="h-8 w-8" />,
    image: "/practice-areas/ip.jpeg",
  },
  {
    name: "Labor & Employment",
    icon: <Users className="h-8 w-8" />,
    image: "/practice-areas/labor.jpeg",
  },
  {
    name: "Real Estate Law",
    icon: <Home className="h-8 w-8" />,
    image: "/practice-areas/realestate.jpeg",
  },
  {
    name: "Tax Law",
    icon: <Landmark className="h-8 w-8" />,
    image: "/practice-areas/tax.jpeg",
  },
  {
    name: "Environmental Law",
    icon: <Shield className="h-8 w-8" />,
    image: "/practice-areas/environmental.jpeg",
  },
  {
    name: "Cyber Law",
    icon: <Cpu className="h-8 w-8" />,
    image: "/practice-areas/cyber.jpeg",
  },
  {
    name: "International Law",
    icon: <Globe className="h-8 w-8" />,
    image: "/practice-areas/international.jpeg",
  },
  {
    name: "Human Rights",
    icon: <Handshake className="h-8 w-8" />,
    image: "/practice-areas/humanrights.jpeg",
  },
  {
    name: "Commercial Law",
    icon: <Building className="h-8 w-8" />,
    image: "/practice-areas/commercial.jpeg",
  },
  {
    name: "Insurance Law",
    icon: <Shield className="h-8 w-8" />,
    image: "/practice-areas/insurance.jpeg",
  },
  {
    name: "Consumer Protection",
    icon: <FileText className="h-8 w-8" />,
    image: "/practice-areas/consumer.jpeg",
  },
  {
    name: "Mediation & Arbitration",
    icon: <HeartHandshake className="h-8 w-8" />,
    image: "/practice-areas/mediation.jpeg",
  },
];
