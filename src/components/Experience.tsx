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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto p-6">
      <SectionHeader
        title="notre expertise"
        description="We have a proven track record of delivering exceptional results in our field."
      />
      {experienceData.map((exp) => (
        <ExpCard key={exp.id} item={exp} />
      ))}
    </div>
  );
};

export default Experience;
