import type { SectionHeaderProps } from "../types/types";
const SectionHeader = ({title, description} : SectionHeaderProps) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-4xl md:text-5xl capitalize font-poppins font-bold text-primary mb-3">{title}</h2>
      {description && (
        <p className="text-sm text-gray-600 font-poppins max-w-sm mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader