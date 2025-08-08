import type { ExperienceItem } from "../types/types.ts";

interface ExpCardProps {
  item: ExperienceItem;
}

const ExpCard: React.FC<ExpCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-2 items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
      <p className="text-secondary font-poppins">{item.title}</p>
      <h3 className="text-4xl font-bold text-secondary font-poppins">{item.nombre}</h3>
    </div>
  );
};

export default ExpCard