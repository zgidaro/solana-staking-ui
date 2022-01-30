import { Connection } from "@solana/web3.js";
import { createContext } from "react";
import { StakePool } from "../lib/stake-pool-js/dist/schema";

interface SoceanContextState {
    apr: number;
    stakePool: StakePool | null;
    connection: Connection | null;
}

const initialState: SoceanContextState = {
    apr: 0,
    stakePool: null,
    connection: null,
};

export const SoceanContext = createContext(initialState);