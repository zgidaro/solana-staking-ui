import React from 'react';
import { useStaking } from './hooks';
import { StakingTab } from './types';
import { Stake } from './Stake/Stake';
import { Unstake } from './Unstake/Unstake';
import styles from '../../styles/Staking.module.css';
import { StakingHelp } from '../StakingHelp/StakingHelp';
import { CustomTabs } from '../CustomTabs/CustomTabs';

export const Staking = () => {
    const { selectedTab, handleSelectedTab, depositFee, stakedToken } = useStaking();

    return (
        <>
            <div className={styles.staking}>
                <CustomTabs selectedTab={selectedTab} onChange={handleSelectedTab} />
                {selectedTab === StakingTab.Stake ? <Stake /> : <Unstake />}
                <StakingHelp />
            </div>
            <div className={styles.spaceBetween}>
                <label>Exchange rate:</label>
                <label>1 SOL = 0.976 {stakedToken}</label>
            </div>
            {selectedTab === StakingTab.Stake
                ? (
                    <div className={styles.spaceBetween}>
                        <label>Deposit fees:</label>
                        <label>{depositFee}%</label>
                    </div>
                )
                : null}
        </>
    );
};
