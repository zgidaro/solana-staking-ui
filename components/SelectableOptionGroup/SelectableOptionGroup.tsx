import React from 'react';
import { useSelectableOptionGroup } from './hooks';
import { SelectableOptionGroupContext, SelectableOptionGroupProps } from './types';

export const SelectableOptionGroup: React.FC<SelectableOptionGroupProps> = (props) => {
    const { selectedValue, onChange } = useSelectableOptionGroup(props);

    return (
        <SelectableOptionGroupContext.Provider value={{ selected: selectedValue, onChange }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                {props.children}
            </div>
        </SelectableOptionGroupContext.Provider>
    );
};
