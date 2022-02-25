import { Connection } from "@solana/web3.js";
import { createContext } from "react";

interface StakingContextState {
    apr: number;
    connection: Connection | null;
    stakedToken: string;
}

const initialState: StakingContextState = {
    apr: 0,
    connection: null,
    stakedToken: "",
};

export const StakingContext = createContext(initialState);