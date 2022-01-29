import { useCallback, useState } from "react";
import { StakingTab } from './types';

export const useStaking = () => {
    const [selectedTab, setSelectedTab] = useState<StakingTab>(StakingTab.Stake);

    const handleSelectedTab = useCallback((value: StakingTab) => {
        setSelectedTab(value);
    }, []);

    return {
        selectedTab, handleSelectedTab,
    };
};