import { useContext } from 'react';
import { SoceanContext } from '../../contexts/SoceanContext';
import { CustomTabsProps } from './types';

export const useCustomTabs = ({ selectedTab, onChange }: CustomTabsProps) => {
    const { apr } = useContext(SoceanContext);

    return {
        selectedTab, onChange, apr
    }
};