import { StakingTab } from '../Staking/types';

export interface CustomTabsProps {
    selectedTab: string;
    onChange: (tab: StakingTab) => void;
}