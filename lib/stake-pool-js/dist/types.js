/**
 * Custom TS types
 *
 * @module
 */
import assert from "assert";
import BN from "bn.js";
/**
 * Numerical enum for the different Stake Pool instructions
 * Note: this must match the order in instruction.rs in order
 * for their numerical value to correctly correspond.
 */
export var StakePoolInstruction;
(function (StakePoolInstruction) {
    StakePoolInstruction[StakePoolInstruction["Initialize"] = 0] = "Initialize";
    StakePoolInstruction[StakePoolInstruction["CreateValidatorStakeAccount"] = 1] = "CreateValidatorStakeAccount";
    StakePoolInstruction[StakePoolInstruction["AddValidatorToPool"] = 2] = "AddValidatorToPool";
    StakePoolInstruction[StakePoolInstruction["RemoveValidatorFromPool"] = 3] = "RemoveValidatorFromPool";
    StakePoolInstruction[StakePoolInstruction["DecreaseValidatorStake"] = 4] = "DecreaseValidatorStake";
    // 5
    StakePoolInstruction[StakePoolInstruction["IncreaseValidatorStake"] = 5] = "IncreaseValidatorStake";
    StakePoolInstruction[StakePoolInstruction["SetPreferredValidator"] = 6] = "SetPreferredValidator";
    StakePoolInstruction[StakePoolInstruction["UpdateValidatorListBalance"] = 7] = "UpdateValidatorListBalance";
    StakePoolInstruction[StakePoolInstruction["UpdateStakePoolBalance"] = 8] = "UpdateStakePoolBalance";
    StakePoolInstruction[StakePoolInstruction["CleanupRemovedValidatorEntries"] = 9] = "CleanupRemovedValidatorEntries";
    // 10
    StakePoolInstruction[StakePoolInstruction["DepositStake"] = 10] = "DepositStake";
    StakePoolInstruction[StakePoolInstruction["WithdrawStake"] = 11] = "WithdrawStake";
    StakePoolInstruction[StakePoolInstruction["SetManager"] = 12] = "SetManager";
    StakePoolInstruction[StakePoolInstruction["SetFee"] = 13] = "SetFee";
    StakePoolInstruction[StakePoolInstruction["SetStaker"] = 14] = "SetStaker";
    // 15
    StakePoolInstruction[StakePoolInstruction["DepositSol"] = 15] = "DepositSol";
    StakePoolInstruction[StakePoolInstruction["SetDepositAuthority"] = 16] = "SetDepositAuthority";
})(StakePoolInstruction || (StakePoolInstruction = {}));
/**
 * Numerical enum for the different Stake Pool Errors
 * Note: this must match the order in error.rs in order
 * for their numerical value to correctly correspond.
 */
export var StakePoolError;
(function (StakePoolError) {
    StakePoolError[StakePoolError["AlreadyInUse"] = 0] = "AlreadyInUse";
    StakePoolError[StakePoolError["InvalidProgramAddress"] = 1] = "InvalidProgramAddress";
    StakePoolError[StakePoolError["InvalidState"] = 2] = "InvalidState";
    StakePoolError[StakePoolError["CalculationFailure"] = 3] = "CalculationFailure";
    StakePoolError[StakePoolError["FeeTooHigh"] = 4] = "FeeTooHigh";
    // 5
    StakePoolError[StakePoolError["WrongAccountMint"] = 5] = "WrongAccountMint";
    StakePoolError[StakePoolError["WrongManager"] = 6] = "WrongManager";
    StakePoolError[StakePoolError["SignatureMissing"] = 7] = "SignatureMissing";
    StakePoolError[StakePoolError["InvalidValidatorStakeList"] = 8] = "InvalidValidatorStakeList";
    StakePoolError[StakePoolError["InvalidFeeAccount"] = 9] = "InvalidFeeAccount";
    // 10
    StakePoolError[StakePoolError["WrongPoolMint"] = 10] = "WrongPoolMint";
    StakePoolError[StakePoolError["WrongStakeState"] = 11] = "WrongStakeState";
    StakePoolError[StakePoolError["UserStakeNotActive"] = 12] = "UserStakeNotActive";
    StakePoolError[StakePoolError["ValidatorAlreadyAdded"] = 13] = "ValidatorAlreadyAdded";
    StakePoolError[StakePoolError["ValidatorNotFound"] = 14] = "ValidatorNotFound";
    // 15
    StakePoolError[StakePoolError["InvalidStakeAccountAddress"] = 15] = "InvalidStakeAccountAddress";
    StakePoolError[StakePoolError["StakeListOutOfDate"] = 16] = "StakeListOutOfDate";
    StakePoolError[StakePoolError["StakeListAndPoolOutOfDate"] = 17] = "StakeListAndPoolOutOfDate";
    StakePoolError[StakePoolError["UnknownValidatorStakeAccount"] = 18] = "UnknownValidatorStakeAccount";
    StakePoolError[StakePoolError["WrongMintingAuthority"] = 19] = "WrongMintingAuthority";
    // 20
    StakePoolError[StakePoolError["UnexpectedValidatorListAccountSize"] = 20] = "UnexpectedValidatorListAccountSize";
    StakePoolError[StakePoolError["WrongStaker"] = 21] = "WrongStaker";
    StakePoolError[StakePoolError["NonZeroPoolTokenSupply"] = 22] = "NonZeroPoolTokenSupply";
    StakePoolError[StakePoolError["StakeLamportsNotEqualToMinimum"] = 23] = "StakeLamportsNotEqualToMinimum";
    StakePoolError[StakePoolError["IncorrectDepositVoteAddress"] = 24] = "IncorrectDepositVoteAddress";
    // 25
    StakePoolError[StakePoolError["IncorrectWithdrawVoteAddress"] = 25] = "IncorrectWithdrawVoteAddress";
    StakePoolError[StakePoolError["InvalidMintFreezeAuthority"] = 26] = "InvalidMintFreezeAuthority";
    StakePoolError[StakePoolError["FeeIncreaseTooHigh"] = 27] = "FeeIncreaseTooHigh";
    StakePoolError[StakePoolError["InvalidStakeDepositAuthority"] = 28] = "InvalidStakeDepositAuthority";
    StakePoolError[StakePoolError["InvalidSolDepositAuthority"] = 29] = "InvalidSolDepositAuthority";
})(StakePoolError || (StakePoolError = {}));
/**
 * Some amount of tokens
 * Copied from token-swap, for packing instruction buffer correctly
 */
export class Numberu64 extends BN {
    /**
     * Convert to Buffer representation
     */
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 8) {
            return b;
        }
        assert(b.length < 8, "Numberu64 too large");
        const zeroPad = Buffer.alloc(8);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        assert(buffer.length === 8, `Invalid buffer length: ${buffer.length}`);
        return new Numberu64([...buffer] // have to enable ts compiler downlevelIteration just for this expr
            .reverse()
            .map((i) => `00${i.toString(16)}`.slice(-2)) // 0 left-padding for single digits
            .join(""), 16);
    }
}
