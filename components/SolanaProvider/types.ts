import { LedgerWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";

export const solanaWallets = [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new LedgerWalletAdapter(),
    new SolflareWalletAdapter(),
];

export interface SolanaProviderProps {
    endpoint: string;
}