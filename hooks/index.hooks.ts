import { Cluster, clusterApiUrl, Connection } from "@solana/web3.js";
import { useMemo, useState } from "react";

export const useIndex = () => {
    const [apr, setApr] = useState(5);
    const [cluster] = useState<Cluster>("mainnet-beta");
    const endpoint = useMemo(() => clusterApiUrl(cluster), [cluster]);

    const connection = useMemo(() => {
        return new Connection(endpoint, "processed");
    }, [endpoint]);

    return {
        apr, endpoint, connection,
    }
};