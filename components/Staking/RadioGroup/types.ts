export interface RadioProps {
    title: string;
    icon: StaticImageData;
    value: string;
    subvalue: string;
    selected: boolean;
    onClick?: (title: string) => void;
}