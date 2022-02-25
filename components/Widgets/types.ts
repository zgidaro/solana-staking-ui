export interface Widget {
    title: string;
    value: string;
    subvalue: string;
    progressValue?: number;
}

export const widgets: Widget[] = [
    { title: 'Total Value Locked', value: '$61.70M USD', subvalue: 'SOL/USD: $87.9800' },
    { title: 'SOL/xSOL in Pool', value: '701.31K SOL', subvalue: '684,440 xSOL' },
    { title: '7D APY', value: '6.08%', subvalue: '12H APY: 7.14%' },
    { title: 'SOL/xSOL Price', value: '1.0247 SOL', subvalue: '1 xSOL' },
    { title: 'EPOCH 272', value: '19%', subvalue: 'ETA: 2d 5h 16m 10s', progressValue: 19 },
];