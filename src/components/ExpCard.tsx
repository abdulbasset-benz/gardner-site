import type { ExperienceItem } from "../types/types.ts";

interface ExpCardProps {
  item: ExperienceItem;
}

const ExpCard = ({ item }: ExpCardProps) => {
  return (
    <div className="flex flex-col gap-4 items-center p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group">
      <div className="p-4 rounded-full bg-emerald-50 group-hover:bg-emerald-100 transition-colors duration-300">
        <img src={item.icon} alt={item.title} className="w-12 h-12" />
      </div>
      <p className="text-gray-600 font-medium font-poppins text-center">{item.title}</p>
      <h3 className="text-4xl font-bold text-emerald-600 font-poppins">{item.nombre}</h3>
    </div>
  );
};

export default ExpCard;