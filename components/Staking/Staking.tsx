import React from 'react';
import { useStaking } from './hooks';
import { StakingTab, stakingTabs } from './types';
import { Stake } from './Stake/Stake';
import { Unstake } from './Unstake/Unstake';
import styles from '../../styles/Staking.module.css';
import { StakingHelp } from '../StakingHelp/StakingHelp';
import { Tabs } from './Tabs/Tabs';

export const Staking = () => {
    const { selectedTab, handleSelectedTab } = useStaking();

    return (
        <>
            <div className={styles.staking}>
                <Tabs selectedTab={selectedTab} onChange={handleSelectedTab} />
                {selectedTab === StakingTab.Stake ? <Stake /> : <Unstake />}
                <StakingHelp />
            </div>
            <div className={styles.spaceBetween}>
                <label>Exchange rate:</label>
                <label>1 SOL = 0.976 scnSOL</label>
            </div>
            {selectedTab === StakingTab.Stake
                ? (
                    <div className={styles.spaceBetween}>
                        <label>Deposit fees:</label>
                        <label>0.15%</label>
                    </div>
                )
                : null}
        </>
    );
};
