import React from 'react';
import { RadioProps } from './types';
import Image from 'next/image';
import { Icon } from '@mui/material';
import styles from '../../../styles/Radio.module.css';

export const Radio = ({ title, icon, value, subvalue, onClick, selected }: RadioProps) => {
    return (
        <div className={selected ? styles.radioContainerSelected : styles.radioContainer} onClick={() => onClick?.(title)}>
            <div>
                <label className={styles.title}>{title}</label>
                <div className={styles.values}>
                    <Image src={icon} alt="Icon" width={24} height={24} />
                    <label className={styles.value}>{value}</label>
                    <label className={styles.subvalue}>{subvalue}</label>
                </div>
            </div>
            <div className={selected ? styles.radioSelected : styles.radio}>
                {selected ? <Icon fontSize='small'>checked</Icon> : null}
            </div>
        </div>
    );
};
