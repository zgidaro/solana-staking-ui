import React from 'react';
import styles from '../../../styles/Staking.module.css';
import { StakingTab } from '../types';
import { TabsProps } from './types';

export const Tabs = ({ selectedTab, onChange }: TabsProps) => {
    return (
        <div className={styles.tabs}>
            <div className={selectedTab === "Stake" ? styles.tabSelected : styles.tab} onClick={() => onChange(StakingTab.Stake)}>
                <label>Stake</label>
                <div className={styles.apy}>
                    ~6% APY
                </div>
            </div>
            <div className={selectedTab === "Unstake" ? styles.tabSelected : styles.tab} onClick={() => onChange(StakingTab.Unstake)}>
                <label>Unstake</label>
            </div>
        </div>
    );
};
