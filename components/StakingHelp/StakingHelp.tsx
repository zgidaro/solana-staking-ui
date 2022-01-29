import { Icon } from '@mui/material';
import React from 'react';
import styles from '../../styles/StakingHelp.module.css';

export const StakingHelp = () => {
    return (
        <div className={styles.stakingHelp}>
            <Icon>info_outlined</Icon>
            <label>How does staking work?</label>
            <div className={styles.stakingHelpContent}>
                Staking allows users to participate in securing the network by locking up tokens. Consequently, users are rewarded for securing the network in the form of native tokens. The higher the amount of crypto-assets you pledge, the higher the rewards you receive. ... This means your crypto-assets earn while you sleep!
            </div>
        </div>
    );
};
