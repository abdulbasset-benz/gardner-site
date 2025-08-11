import type { StepsProps } from '../types/types';

const StepsCard = ({ id, title, desc, icon }: StepsProps) => {
  return (
    <div className="border border-primary p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 bg-white">
      <div className="flex flex-col items-center text-center gap-6">
        {/* Icon */}
        <div className="bg-gray-200 p-6 rounded-2xl shadow-inner">
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
        </div>

        {/* Step Number */}
        <span className="text-xs font-medium tracking-wider text-gray-500">
          STEP {id}
        </span>

        {/* Title */}
        <h2 className="text-xl font-semibold text-primary">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default StepsCard;
