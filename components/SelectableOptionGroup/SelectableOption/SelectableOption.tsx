import React, { useContext } from 'react';
import { SelectableOptionProps, SelectableOptionGroupContext } from '../types';
import Image from 'next/image';
import { Icon } from '@mui/material';
import styles from '../../../styles/SelectableOption.module.css';

export const SelectableOption = ({ id, title, icon, value, subvalue }: SelectableOptionProps) => {
    const { selected, onChange } = useContext(SelectableOptionGroupContext);
    const isSelected = selected === id;
    return (
        <div className={isSelected ? styles.selectableOptionSelected : styles.selectableOption} onClick={() => onChange?.(id)}>
            <div>
                <label className={styles.title}>{title}</label>
                <div className={styles.values}>
                    <Image src={icon} alt="Icon" width={24} height={24} />
                    <label className={styles.value}>{value}</label>
                    <label className={styles.subvalue}>{subvalue}</label>
                </div>
            </div>
            <div className={isSelected ? styles.optionSelected : styles.option}>
                {isSelected ? <Icon sx={{ fontSize: '16px !important' }}>checked</Icon> : null}
            </div>
        </div>
    );
};
