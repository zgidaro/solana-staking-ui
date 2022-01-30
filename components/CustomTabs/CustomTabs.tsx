import React from 'react';
import styles from '../../styles/Staking.module.css';
import { StakingTab } from '../Staking/types';
import { CustomTabsProps } from './types';
import { useCustomTabs } from './hooks';

export const CustomTabs = (props: CustomTabsProps) => {
    const { selectedTab, onChange, apr } = useCustomTabs(props);

    return (
        <div className={styles.tabs}>
            <div className={selectedTab === "Stake" ? styles.tabSelected : styles.tab} onClick={() => onChange(StakingTab.Stake)}>
                <label>Stake</label>
                <div className={styles.apy}>
                    ~{apr.toFixed(2)}% APY
                </div>
            </div>
            <div className={selectedTab === "Unstake" ? styles.tabSelected : styles.tab} onClick={() => onChange(StakingTab.Unstake)}>
                <label>Unstake</label>
            </div>
        </div>
    );
};
