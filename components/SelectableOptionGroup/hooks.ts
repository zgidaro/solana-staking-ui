import { useCallback, useState } from "react";
import { SelectableOptionGroupProps } from './types';

export const useSelectableOptionGroup = ({ selectedValue, onChange }: SelectableOptionGroupProps) => {

    return {
        selectedValue, onChange
    }
};