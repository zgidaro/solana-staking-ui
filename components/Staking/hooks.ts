import { useCallback, useContext, useState } from "react";
import { StakingTab } from './types';
import { StakingContext } from '../../contexts/StakingContext';

export const useStaking = () => {
    const [selectedTab, setSelectedTab] = useState<StakingTab>(StakingTab.Stake);
    const [depositFee, setDepositFee] = useState(0);
    const { stakedToken } = useContext(StakingContext);

    const handleSelectedTab = useCallback((value: StakingTab) => {
        setSelectedTab(value);
    }, []);

    return {
        selectedTab, handleSelectedTab, depositFee, stakedToken
    };
};