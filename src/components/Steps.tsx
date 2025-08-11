import flower from "../assets/flower.svg";
import files from "../assets/files.svg";
import check from "../assets/check.svg";
import type { StepsProps } from "../types/types";
import StepsCard from "./StepsCard";
import SectionHeader from "./SectionHeader";

const steps: StepsProps[] = [
  {
    id: 1,
    title: "Consultation",
    desc: "Nous commençons par une consultation afin de comprendre vos besoins et objectifs.",
    icon: flower,
  },
  {
    id: 2,
    title: "Proposition",
    desc: "Nous vous fournissons une proposition détaillée décrivant notre approche et nos coûts.",
    icon: files,
  },
  {
    id: 3,
    title: "Mise en œuvre",
    desc: "Nous mettons en œuvre le plan convenu avec précision et soin.",
    icon: check,
  },
];

const Steps = () => {
  return (
    <div className="bg-[#FFFFFF] pt-10 px-4">
        <SectionHeader
          title="Comment ça marche ?"
          description="Notre processus est simple et transparent, conçu pour vous offrir la meilleure expérience possible."
        />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-20 mx-auto px-6 sm:px-8 lg:px-12 py-16">
      {steps.map((step) => (
        <StepsCard
          key={step.id}
          id={step.id}
          title={step.title}
          desc={step.desc}
          icon={step.icon}
        />
      ))}
    </div>
    </div>
  );
};

export default Steps;
