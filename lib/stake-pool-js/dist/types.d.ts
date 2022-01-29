/// <reference types="node" />
import BN from "bn.js";
/**
 * Numerical enum for the different Stake Pool instructions
 * Note: this must match the order in instruction.rs in order
 * for their numerical value to correctly correspond.
 */
export declare enum StakePoolInstruction {
    Initialize = 0,
    CreateValidatorStakeAccount = 1,
    AddValidatorToPool = 2,
    RemoveValidatorFromPool = 3,
    DecreaseValidatorStake = 4,
    IncreaseValidatorStake = 5,
    SetPreferredValidator = 6,
    UpdateValidatorListBalance = 7,
    UpdateStakePoolBalance = 8,
    CleanupRemovedValidatorEntries = 9,
    DepositStake = 10,
    WithdrawStake = 11,
    SetManager = 12,
    SetFee = 13,
    SetStaker = 14,
    DepositSol = 15,
    SetDepositAuthority = 16
}
/**
 * Numerical enum for the different Stake Pool Errors
 * Note: this must match the order in error.rs in order
 * for their numerical value to correctly correspond.
 */
export declare enum StakePoolError {
    AlreadyInUse = 0,
    InvalidProgramAddress = 1,
    InvalidState = 2,
    CalculationFailure = 3,
    FeeTooHigh = 4,
    WrongAccountMint = 5,
    WrongManager = 6,
    SignatureMissing = 7,
    InvalidValidatorStakeList = 8,
    InvalidFeeAccount = 9,
    WrongPoolMint = 10,
    WrongStakeState = 11,
    UserStakeNotActive = 12,
    ValidatorAlreadyAdded = 13,
    ValidatorNotFound = 14,
    InvalidStakeAccountAddress = 15,
    StakeListOutOfDate = 16,
    StakeListAndPoolOutOfDate = 17,
    UnknownValidatorStakeAccount = 18,
    WrongMintingAuthority = 19,
    UnexpectedValidatorListAccountSize = 20,
    WrongStaker = 21,
    NonZeroPoolTokenSupply = 22,
    StakeLamportsNotEqualToMinimum = 23,
    IncorrectDepositVoteAddress = 24,
    IncorrectWithdrawVoteAddress = 25,
    InvalidMintFreezeAuthority = 26,
    FeeIncreaseTooHigh = 27,
    InvalidStakeDepositAuthority = 28,
    InvalidSolDepositAuthority = 29
}
/**
 * Some amount of tokens
 * Copied from token-swap, for packing instruction buffer correctly
 */
export declare class Numberu64 extends BN {
    /**
     * Convert to Buffer representation
     */
    toBuffer(): Buffer;
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer: Buffer): Numberu64;
}
//# sourceMappingURL=types.d.ts.map