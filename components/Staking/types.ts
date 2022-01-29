export enum StakingTab {
    Stake = "Stake",
    Unstake = "Unstake",
}

export const stakingTabs = Object.keys(StakingTab) as Array<keyof typeof StakingTab>;