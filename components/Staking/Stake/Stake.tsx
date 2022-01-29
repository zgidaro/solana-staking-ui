import React from 'react';
import { CustomInput } from '../../CustomInput/CustomInput';
import solIcon from '../../../icons/icon_SOL.png';
import scnIcon from '../../../icons/icon_scnSOL.png';
import styles from '../../../styles/Staking.module.css';
import Image from 'next/image';
import { CustomButton } from '../../CustomButton/CustomButton';

export const Stake = () => {
    return (
        <div>
            <CustomInput icon={solIcon} />
            <div className={styles.stakeAmountContainer}>
                <label>You will get:</label>
                <div className={styles.stakeAmount}>
                    <label>0 scnSOL</label>
                    <Image src={scnIcon} alt="scnSOL" width={26} height={26} />
                </div>
            </div>
            <CustomButton fullWidth={true}>Connect wallet</CustomButton>
        </div>
    );
};
