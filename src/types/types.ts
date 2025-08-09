export interface ExperienceItem {
    id: number;
    icon: string;
    title: string;
    nombre: string;
}

export interface SectionHeaderProps {
    title: string;
    description?: string;
}

export interface ServiceProps {
    id: number;
    title: string;
    image?: string;
    description?: string;
    icon?: string;
}