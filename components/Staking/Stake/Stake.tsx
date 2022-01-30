import React from 'react';
import { CustomInput } from '../../CustomInput/CustomInput';
import solIcon from '../../../icons/icon_SOL.png';
import scnIcon from '../../../icons/icon_scnSOL.png';
import styles from '../../../styles/Staking.module.css';
import Image from 'next/image';
import { CustomButton } from '../../CustomButton/CustomButton';
import { useStake } from './hooks';

export const Stake = () => {
    const { publicKey, value, balance, onClick, onMax } = useStake();

    return (
        <div>
            <CustomInput icon={solIcon} amount={value} balance={`${balance.toFixed(2)} SOL`} onMax={onMax} />
            <div className={styles.stakeAmountContainer}>
                <label>You will get:</label>
                <div className={styles.stakeAmount}>
                    <label>0 scnSOL</label>
                    <Image src={scnIcon} alt="scnSOL" width={26} height={26} />
                </div>
            </div>
            <CustomButton fullWidth={true} onClick={onClick}>{publicKey ? 'Stake SOL' : 'Connect wallet'}</CustomButton>
        </div>
    );
};
