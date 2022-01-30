import { Cluster, clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { solanaConfig } from "../config/solana.config";
import { CalculationHelper } from "../helpers/CalculationHelper";
import { getStakePoolAccount } from "../lib/stake-pool-js/dist";
import { StakePool } from "../lib/stake-pool-js/dist/schema";

export const useIndex = () => {
    const [apr, setApr] = useState(0);
    const [cluster] = useState<Cluster>("mainnet-beta");
    const endpoint = useMemo(() => clusterApiUrl(cluster), [cluster]);
    const [stakePool, setStakePool] = useState<StakePool | null>(null);

    const connection = useMemo(() => {
        return new Connection(endpoint, "processed");
    }, [endpoint]);

    const getStakePool = useCallback(async () => {
        try {
            if (!solanaConfig[cluster]) return;

            const stakePoolAccount = await getStakePoolAccount(connection, new PublicKey(solanaConfig[cluster].stakePool));
            if (!stakePoolAccount) return;

            const stakePool = stakePoolAccount.account.data;
            setStakePool(stakePool);

            const deposited = stakePool.totalStakeLamports.toNumber();
            const minted = stakePool.poolTokenSupply.toNumber();
            const inceptionDate = new Date("2021-09-10");
            const result = CalculationHelper.calculateApr(deposited, minted, inceptionDate);
            setApr(result * 100);
        }
        catch {
            console.error('Error getting stake pool account');
        }
    }, [connection, cluster, setApr]);

    useEffect(() => {
        getStakePool();
    }, [getStakePool]);

    return {
        apr, endpoint, connection, stakePool
    }
};