import type { ServiceProps } from "../types/types";
import ServiceCard from "./ServiceCard";
import PoseGazon from "../assets/posegazon.jpg";
import nettoyagePiscine from "../assets/nettoyage-piscine.jpg";
import tonteGazon from "../assets/gazon.jpg";
import plantationArbres from "../assets/planting-tree.jpg";
import entretienJardin from "../assets/entretien.jpg";
import systemeIrrigation from "../assets/system.jpg";
import garden from "../assets/garden.svg";
import pool from "../assets/pool.svg";
import tree from "../assets/tree.svg";
import leaf from "../assets/leaf.svg";
import maintenance from "../assets/maintenance.svg";
import irrigation from "../assets/irrigation.svg";
import SectionHeader from "./SectionHeader";

const services: ServiceProps[] = [
  { 
    id: 1, 
    title: "Tonte de gazon", 
    description: "Tonte précise et entretien régulier de votre pelouse pour un jardin toujours impeccable.", 
    image: tonteGazon, 
    icon: garden 
  },
  { 
    id: 2, 
    title: "Nettoyage de piscine", 
    description: "Nettoyage complet et traitement de l’eau pour garantir une piscine propre et saine toute l’année.", 
    image: nettoyagePiscine, 
    icon: pool 
  },
  { 
    id: 3, 
    title: "Plantation d’arbres", 
    description: "Sélection, plantation et entretien d’arbres adaptés à votre environnement et à vos besoins.", 
    image: plantationArbres, 
    icon: tree 
  },
  { 
    id: 4, 
    title: "Pose de gazon", 
    description: "Installation de gazon naturel ou synthétique pour un espace vert esthétique et durable.", 
    image: PoseGazon, 
    icon: leaf 
  },
  { 
    id: 5, 
    title: "Entretien de jardins", 
    description: "Entretien complet de vos espaces verts : taille, arrosage, fertilisation et soins des plantes.", 
    image: entretienJardin, 
    icon: maintenance 
  },
  { 
    id: 6, 
    title: "Systèmes d’irrigation", 
    description: "Conception et installation de systèmes d’arrosage efficaces pour une gestion optimale de l’eau.", 
    image: systemeIrrigation, 
    icon: irrigation 
  },
];

const Services = () => {
  return (
    <div className="bg-gray-300/20 p-4 mt-10">
      <SectionHeader
        title="Nos Services"
        description="Équipements de pointe et produits écologiques pour une pelouse saine et des aménagements paysagers élégants."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
          icon={service.icon}
        />
      ))}
        </div>
    </div>
  );
};

export default Services;
