type ClusterConfig = {
    programId: string;
    stakePool: string;
}

export const solanaConfig: { [s: string]: ClusterConfig } = {
    "mainnet-beta": {
        programId: "5ocnV1qiCgaQR8Jb8xWnVbApfaygJ8tNoZfgPwsgx9kx",
        stakePool: "5oc4nmbNTda9fx8Tw57ShLD132aqDK65vuHH4RU1K4LZ",
    },
    "testnet": {
        programId: "5ocnV1qiCgaQR8Jb8xWnVbApfaygJ8tNoZfgPwsgx9kx",
        stakePool: "5oc4nDMhYqP8dB5DW8DHtoLJpcasB19Tacu3GWAMbQAC",
    }
}