import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useCallback, useContext, useEffect, useState } from "react";
import { StakingContext } from "../../../contexts/StakingContext";

export const useStake = () => {
    const { publicKey } = useWallet();
    const { visible, setVisible } = useWalletModal();

    const [balance, setBalance] = useState(0);
    const [value, setValue] = useState(0);

    const { connection, stakedToken } = useContext(StakingContext);

    const getBalance = useCallback(async (publicKey: PublicKey) => {
        if (!connection) return;

        const balance = await connection.getBalance(publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
    }, [connection]);

    useEffect(() => {
        if (!publicKey) return;
        getBalance(publicKey);
    }, [publicKey, getBalance]);

    useEffect(() => {
        if (!publicKey || !connection) return;

        const listenerId = connection.onAccountChange(publicKey, (account) => {
            setBalance(account.lamports / LAMPORTS_PER_SOL);
        });

        return () => {
            connection.removeAccountChangeListener(listenerId);
        };
    }, [publicKey, connection]);

    const onMax = useCallback(() => {
        setValue(balance);
    }, [balance]);

    const onChange = useCallback((value: number) => {
        setValue(value);
    }, []);

    const onClick = useCallback(() => {
        if (publicKey) {

        }
        else {
            setVisible(!visible);
        }
    }, [publicKey, setVisible, visible]);

    return {
        publicKey, value, balance, stakedToken, onClick, onMax, onChange,
    };
};