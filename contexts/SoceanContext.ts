import { Cluster } from "@solana/web3.js";
import { createContext, Dispatch, SetStateAction } from "react";

interface SoceanContextState {
    cluster: Cluster;
    apr: number;
    setApr: Dispatch<SetStateAction<number>>;
}

const initialState: SoceanContextState = {
    cluster: "mainnet-beta",
    apr: 0,
    setApr: () => { },
};

export const SoceanContext = createContext(initialState);