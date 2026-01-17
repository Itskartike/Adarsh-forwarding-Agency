import {
  Package,
  Truck,
  Shield,
  Ship,
  Navigation,
  Globe,
  Container,
  Box,
  Briefcase,
  MapPin,
  Warehouse,
  Lock,
  Settings,
  FileText,
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number; className: string }>;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Custom Clearance",
    description:
      "Customs clearance work involves preparation and submission of documentations required to facilitate export or imports into the country, representing client during customs examination, assessment, payment of duty and taking delivery of cargo from customs after clearance along with documents.",
    icon: FileText,
  },
  {
    id: 2,
    title: "Freight Forwarding",
    description:
      "Freight forwarder is to organize and execute the transport of goods on behalf of others. A freight forwarder handles the pick-up of goods from the supplier, customs clearance (Documents) at the proper authorities, handling at the warehouses involved, and secure a spot on the Ship, Plane or truck delivering the goods.",
    icon: Ship,
  },
  {
    id: 3,
    title: "Custom Consultancy",
    description:
      "We handle complete custom consultancy like obtaining IEC, DGFT, and DEPB license. Setting up custom of Custom Bonded/General Warehouse, Project Import Registration, Reconciliation & Finalization, and Drawback/Refunds.",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Surface Transportation",
    description:
      "We provide complete transportation solution by road. Our services are uninterrupted and available 365 days anywhere in India. We are specialized in movement of general cargo, project cargo services and over dimensional cargo.",
    icon: Truck,
  },
];
