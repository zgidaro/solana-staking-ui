import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import React from 'react';
import { SolanaProviderProps, solanaWallets } from './types';

require('@solana/wallet-adapter-react-ui/styles.css');

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children, endpoint }) => {
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={solanaWallets} autoConnect={true}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
