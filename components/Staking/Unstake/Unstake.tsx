import React, { useContext, useState } from 'react';
import { CustomInput } from '../../CustomInput/CustomInput';
import scnIcon from '../../../icons/icon_scnSOL.png';
import styles from '../../../styles/Staking.module.css';
import { SelectableOptionGroup } from '../../SelectableOptionGroup/SelectableOptionGroup';
import { CustomButton } from '../../CustomButton/CustomButton';
import { unstakeOptions } from './types';
import { SelectableOption } from '../../SelectableOptionGroup/SelectableOption/SelectableOption';
import { StakingContext } from '../../../contexts/StakingContext';

export const Unstake = () => {
    const [selected, setSelected] = useState(2);
    const [value, setValue] = useState(4.88);
    const { stakedToken } = useContext(StakingContext);

    return (
        <div>
            <CustomInput icon={scnIcon} amount={value} balance={`4.88 ${stakedToken}`} onChange={setValue} />
            <div className={styles.stakeAmountContainer}>
                <SelectableOptionGroup selectedValue={selected} onChange={setSelected}>
                    {unstakeOptions.map((o) => <SelectableOption key={o.id} {...o} />)}
                </SelectableOptionGroup>
            </div>
            <CustomButton fullWidth={true}>Unstake {stakedToken}</CustomButton>
        </div>
    );
};
