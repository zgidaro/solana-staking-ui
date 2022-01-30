import { createContext } from "react";

export interface SelectableOptionGroupProps {
    selectedValue: number;
    onChange?: (value: number) => void;
}

export interface SelectableOptionProps {
    id: number;
    title: string;
    icon: StaticImageData;
    value: string;
    subvalue: string;
}

interface SelectableOptionGroupState {
    selected: number;
    onChange?: (value: number) => void;
}

const initialState: SelectableOptionGroupState = {
    selected: 0,
};

export const SelectableOptionGroupContext = createContext(initialState);