import Leaf from "@/assets/leaf.svg";
import Smiley from "@/assets/smiley.svg";
import Star from "@/assets/star.svg";
import ExpCard from "./ExpCard";
import type { ExperienceItem } from "../types/types";
import SectionHeader from "./SectionHeader";

const experienceData: ExperienceItem[] = [
  { id: 1, icon: Leaf, title: "Jardin modernisé", nombre: "100+" },
  { id: 2, icon: Smiley, title: "Clients satisfaits", nombre: "100+" },
  { id: 3, icon: Star, title: "Expérience", nombre: "15+" },
];

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Notre Expertise"
          description="Une expérience prouvée dans l'aménagement paysager avec des résultats exceptionnels."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {experienceData.map((exp) => (
            <ExpCard key={exp.id} item={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;