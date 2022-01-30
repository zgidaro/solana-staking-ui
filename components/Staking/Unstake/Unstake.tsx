import React, { useState } from 'react';
import { CustomInput } from '../../CustomInput/CustomInput';
import scnIcon from '../../../icons/icon_scnSOL.png';
import styles from '../../../styles/Staking.module.css';
import { SelectableOptionGroup } from '../../SelectableOptionGroup/SelectableOptionGroup';
import { CustomButton } from '../../CustomButton/CustomButton';
import { unstakeOptions } from './types';
import { SelectableOption } from '../../SelectableOptionGroup/SelectableOption/SelectableOption';

export const Unstake = () => {
    const [selected, setSelected] = useState(2);

    return (
        <div>
            <CustomInput icon={scnIcon} amount={4.88} balance='4.88 scnSOL' />
            <div className={styles.stakeAmountContainer}>
                <SelectableOptionGroup selectedValue={selected} onChange={setSelected}>
                    {unstakeOptions.map((o) => <SelectableOption key={o.id} {...o} />)}
                </SelectableOptionGroup>
            </div>
            <CustomButton fullWidth={true}>Unstake scnSOL</CustomButton>
        </div>
    );
};
