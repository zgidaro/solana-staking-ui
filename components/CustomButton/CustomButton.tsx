import { Button, ButtonProps } from '@mui/material';
import React from 'react';

export const CustomButton = (props: ButtonProps) => {
    return (
        <Button
            variant="contained"
            sx={{ padding: '16px 38px', borderRadius: '16px', textTransform: 'unset', fontWeight: 600, fontSize: 18 }}
            {...props}
        >
            {props.children}
        </Button>
    );

};
