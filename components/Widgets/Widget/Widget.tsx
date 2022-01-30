import React from 'react';
import { WidgetProps } from './types';
import styles from '../../../styles/Widgets.module.css';
import { LinearProgress } from '@mui/material';

export const Widget = ({ widget }: WidgetProps) => {
    return (
        <div className={styles.widget}>
            <label className={styles.title}>{widget.title}</label>
            {
                widget.progressValue
                    ? <LinearProgress variant="determinate" value={widget.progressValue} sx={{ marginTop: '38px', borderRadius: '100px', height: '8px', backgroundColor: 'transparent' }} />
                    : <div />
            }
            <div className={styles.valueContainer}>
                <label className={styles.value}>{widget.value}</label>
                <label className={styles.subvalue}>{widget.subvalue}</label>
            </div>
        </div>
    );
};
