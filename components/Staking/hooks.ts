import { useCallback, useContext, useEffect, useState } from "react";
import { StakingTab } from './types';
import { SoceanContext } from '../../contexts/SoceanContext';

export const useStaking = () => {
    const [selectedTab, setSelectedTab] = useState<StakingTab>(StakingTab.Stake);
    const [depositFee, setDepositFee] = useState(0);
    const { stakePool } = useContext(SoceanContext);

    const handleSelectedTab = useCallback((value: StakingTab) => {
        setSelectedTab(value);
    }, []);

    useEffect(() => {
        if (!stakePool) return;

        setDepositFee(stakePool.solDepositFee.numerator.toNumber() / stakePool.solDepositFee.denominator.toNumber() * 100)
    }, [stakePool]);

    return {
        selectedTab, handleSelectedTab, depositFee
    };
};