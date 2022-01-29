/**
 * Borsh schema for borsh de/serializing stake pool accounts
 *
 * @module
 */
import { Schema } from "borsh";
import BN from "bn.js";
import { Struct, Enum, PublicKey } from "@solana/web3.js";
export declare class Fee extends Struct {
    denominator: BN;
    numerator: BN;
}
export declare class AccountType extends Enum {
}
export declare class AccountTypeEnum extends Struct {
}
export declare enum AccountTypeKind {
    Uninitialized = "Uninitialized",
    StakePool = "StakePool",
    ValidatorList = "ValidatorList"
}
export declare class StakePool extends Struct {
    accountType: AccountType;
    manager: PublicKey;
    staker: PublicKey;
    depositAuthority: PublicKey;
    withdrawBumpSeed: number;
    validatorList: PublicKey;
    reserveStake: PublicKey;
    poolMint: PublicKey;
    managerFeeAccount: PublicKey;
    tokenProgramId: PublicKey;
    totalStakeLamports: BN;
    poolTokenSupply: BN;
    lastUpdateEpoch: BN;
    lockup: Lockup;
    fee: Fee;
    nextEpochFee: Fee;
    preferredDepositValidatorVoteAddress: PublicKey;
    preferredWithdrawValidatorVoteAddress: PublicKey;
    stakeDepositFee: Fee;
    withdrawalFee: Fee;
    nextWithdrawalFee: Fee;
    stakeReferralFee: number;
    solDepositAuthority: PublicKey;
    solDepositFee: Fee;
    solReferralFee: number;
}
export declare class ValidatorList extends Struct {
    accountType: AccountType;
    maxValidators: number;
    validators: [ValidatorStakeInfo];
}
export declare class ValidatorStakeInfo extends Struct {
    activeStakeLamports: BN;
    transientStakeLamports: BN;
    lastUpdateEpoch: BN;
    transientSeedSuffixStart: BN;
    transientSeedSuffixEnd: BN;
    status: StakeStatus;
    voteAccountAddress: PublicKey;
}
export declare class StakeStatus extends Enum {
}
export declare class StakeStatusEnum extends Struct {
}
export declare class Lockup extends Struct {
    unixtime: BN;
    epoch: BN;
    custodian: PublicKey;
}
export declare enum StakeStatusKind {
    Active = "Active",
    DeactivatingTransient = "DeactivatingTransient",
    ReadyForRemoval = "ReadyForRemoval"
}
export declare function addStakePoolSchema(schema: Schema): void;
//# sourceMappingURL=schema.d.ts.map