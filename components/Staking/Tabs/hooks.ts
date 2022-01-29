import { Cluster, clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getStakePoolAccount } from "../../../lib/stake-pool-js/dist";
import { solanaConfig } from '../../../config/solana.config';
import { SoceanContext } from '../../../contexts/SoceanContext';

export const useTabs = () => {
    const { apr, setApr, cluster } = useContext(SoceanContext);

    const connection = useMemo(() => {
        const network = clusterApiUrl(cluster);
        return new Connection(network, "processed");
    }, [cluster]);

    const getApr = useCallback(async () => {
        try {
            if (!solanaConfig[cluster]) return;
        
            const stakePoolAccount = await getStakePoolAccount(connection, new PublicKey(solanaConfig[cluster].stakePool));
            if (!stakePoolAccount) return;

            const stakePool = stakePoolAccount.account.data;
            const result = calculateApr(stakePool.totalStakeLamports.toNumber(), stakePool.poolTokenSupply.toNumber());
            setApr(result * 100);
        }
        catch {
            console.error('Error getting stake pool account');
        }
    }, [connection, cluster, setApr]);

    useEffect(() => {
        getApr();
    }, [getApr]);

    return {
        apr
    }
};

const calculateApr = (solDeposited: number, scnSolMinted: number) => {
    const inceptionDate = new Date("2021-09-10");
    const now = Date.now();
    const daysSinceInception = (now - inceptionDate.getTime()) / (1000 * 3600 * 24);

    return ((solDeposited / scnSolMinted) - 1) / daysSinceInception * 365.25;
}