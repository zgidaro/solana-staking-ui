import { useContext } from 'react';
import { StakingContext } from '../../contexts/StakingContext';
import { CustomTabsProps } from './types';

export const useCustomTabs = ({ selectedTab, onChange }: CustomTabsProps) => {
    const { apr } = useContext(StakingContext);

    return {
        selectedTab, onChange, apr
    }
};