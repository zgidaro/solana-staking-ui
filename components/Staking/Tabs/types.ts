import { StakingTab } from '../types';

export interface TabsProps {
    selectedTab: string;
    onChange: (tab: StakingTab) => void;
}