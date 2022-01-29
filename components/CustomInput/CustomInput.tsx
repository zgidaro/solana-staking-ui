import { Button, Icon } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/CustomInput.module.css';
import { useCustomInput } from './hooks';
import { CustomInputProps } from './types';

export const CustomInput = (props: CustomInputProps) => {
    const { icon, amount, balance, maxButtonProps, onChange, onMax } = useCustomInput(props);
    return (
        <div className={styles.customInputContainer}>
            <div className={styles.customInputLabels}>
                <label className={styles.customInputAmountLabel}>Amount</label>
                <label className={styles.customInputBalance}>Balance: {balance ?? '-'}</label>
            </div>
            <div className={styles.customInputAmounts}>
                <div className={styles.customInputAmount}>
                    <Image src={icon} alt="Icon" width={32} height={32} />
                    <input className={styles.customInput} placeholder="0.0" value={amount} onChange={onChange} />
                </div>
                <Button onClick={onMax} sx={maxButtonProps}>MAX</Button>
            </div>
            <div className={styles.customInputCenterIcon}>
                <Icon>arrow_downward</Icon>
            </div>
        </div>
    );
};
