import type { ServiceProps } from '../types/types'

const ServiceCard = ({ title, image, description, icon }: ServiceProps) => {
  return (
    <div className="bg-white flex flex-col gap-8 p-4 rounded-xl shadow-md">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-semibold text-secondary text-2xl">{title}</h2>
        <img src={icon} alt="" className="w-8 h-8" />
      </div>

      <p className="text-secondary">{description}</p>

      {/* Image container */}
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
      </div>
    </div>
  );
};

export default ServiceCard