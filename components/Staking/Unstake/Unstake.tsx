import React from 'react';
import { CustomInput } from '../../CustomInput/CustomInput';
import scnIcon from '../../../icons/icon_scnSOL.png';
import styles from '../../../styles/Staking.module.css';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { CustomButton } from '../../CustomButton/CustomButton';

export const Unstake = () => {
    return (
        <div>
            <CustomInput icon={scnIcon} amount={4.88} balance='4.88 scnSOL' />
            <div className={styles.stakeAmountContainer}>
                <RadioGroup />
            </div>
            <CustomButton fullWidth={true}>Unstake scnSOL</CustomButton>
        </div>
    );
};
