import React from 'react';
import { Radio } from './Radio';
import solIcon from '../../../icons/icon_SOL.png';

export const RadioGroup = () => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Radio title="Instant Unstake" icon={solIcon} value="4.99 SOL" subvalue="0.3% fee" selected={false} />
            <Radio title="Unstake in ~2 days" icon={solIcon} value="5 SOL" subvalue="0% fee" selected={true} />
        </div>
    );
};
