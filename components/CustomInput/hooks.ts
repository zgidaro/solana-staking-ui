import { useCallback } from 'react';
import { CustomInputProps } from './types';

export const useCustomInput = ({ icon, amount, balance, onChange, onMax }: CustomInputProps) => {

    const handleOnChange = useCallback((ev) => {
        const value = +ev.currentTarget.value;
        onChange?.(isNaN(value) || Math.sign(value) < 0 ? 0 : value);
    }, [onChange]);

    const maxButtonProps = {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        color: '#ffffff',
        borderRadius: '8px',
    };

    return {
        icon, amount, balance, maxButtonProps, onChange: handleOnChange, onMax,
    };
};