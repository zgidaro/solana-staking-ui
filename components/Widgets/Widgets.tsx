import React from 'react';
import { widgets } from './types';
import { Widget } from './Widget/Widget';
import styles from '../../styles/Widgets.module.css';

export const Widgets = () => {
    return (
        <div className={styles.widgets}>
            {widgets.map((w) => <Widget key={`key_${w.title}`} widget={w} />)}
        </div>
    );
};
