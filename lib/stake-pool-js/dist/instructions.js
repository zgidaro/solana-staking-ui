/**
 * StakePoolInstructions generation
 *
 * @module
 */
// use require to bypass lack of @types for buffer-layout
// note: this means theres no type checking for BufferLayout stuff
/* eslint-disable */
const BufferLayout = require("buffer-layout");
import { SystemProgram, SYSVAR_CLOCK_PUBKEY, SYSVAR_STAKE_HISTORY_PUBKEY, TransactionInstruction, StakeProgram, SYSVAR_INSTRUCTIONS_PUBKEY, Transaction, } from "@solana/web3.js";
import assert from "assert";
import * as Layout from "./layout";
import { Numberu64, StakePoolInstruction } from "./types";
/**
 * Initializes a DepositSol stake pool instruction given the required accounts and data
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 * @param stakePoolWithdrawAuthority: Pubkey of the stake pool's withdraw authority.
 *                                    PDA of the stake pool program, see StakePool docs for details.
 * @param reserveStake: Pubkey of the stake pool's reserve account
 * @param lamportsFrom: Pubkey of the SOL account to deduct SOL from to deposit.
 * @param poolTokensTo: Pubkey of the pool token account to mint the pool tokens to.
 * @param managerFeeAccount: Pubkey of the pool token account receiving the stake pool's fees.
 * @param referrerPoolTokensAccount: Pubkey of the pool token account of the referrer to receive referral fees
 * @param poolMint: Pubkey of the pool token mint
 * @param tokenProgramId: Pubkey of the SPL token program
 *
 * @param amount: The amount of lamports to deposit
 *
 * @param solDepositAuthority: Optional Pubkey of the stake pool's deposit authority.
 */
export function depositSolInstruction(stakePoolProgramId, stakePool, stakePoolWithdrawAuthority, reserveStake, lamportsFrom, poolTokensTo, managerFeeAccount, referrerPoolTokensAccount, poolMint, tokenProgramId, amount, solDepositAuthority) {
    const dataLayout = BufferLayout.struct([
        BufferLayout.u8("instruction"),
        Layout.uint64("amount"),
    ]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: StakePoolInstruction.DepositSol,
        amount: new Numberu64(amount).toBuffer(),
    }, data);
    const hasDepositAuthority = solDepositAuthority !== undefined;
    const keys = [
        { pubkey: stakePool, isSigner: false, isWritable: true },
        {
            pubkey: stakePoolWithdrawAuthority,
            isSigner: false,
            isWritable: false,
        },
        { pubkey: reserveStake, isSigner: false, isWritable: true },
        { pubkey: lamportsFrom, isSigner: true, isWritable: true },
        { pubkey: poolTokensTo, isSigner: false, isWritable: true },
        { pubkey: managerFeeAccount, isSigner: false, isWritable: true },
        { pubkey: referrerPoolTokensAccount, isSigner: false, isWritable: true },
        { pubkey: poolMint, isSigner: false, isWritable: true },
        { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
        { pubkey: tokenProgramId, isSigner: false, isWritable: false },
    ];
    if (hasDepositAuthority) {
        keys.push({
            pubkey: solDepositAuthority,
            isSigner: true,
            isWritable: false,
        });
    }
    return new TransactionInstruction({
        keys,
        programId: stakePoolProgramId,
        data,
    });
}
/**
 * Initializes a DepositStake stake pool instruction given the required accounts and data
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 * @param validatorList: Pubkey of the stake pool's validator list.
 * @param stakePoolDepositAuthority: Pubkey of the stake pool's deposit authority.
 *                                   Either default PDA stake deposit authority or custom deposit authority.
 * @param stakePoolWithdrawAuthority: Pubkey of the stake pool's withdraw authority.
 *                                    PDA of the stake pool program, see StakePool docs for details.
 * @param depositStakeAddress: Pubkey of the stake account to be deposited.
 * @param validatorStakeAccount: Pubkey of the stake pool's stake account for the validator of the `depostStakeAddress` stake account.
 * @param reserveStake: Pubkey of the stake pool's reserve account
 * @param poolTokensTo: Pubkey of the pool token account to mint the pool tokens to.
 * @param managerFeeAccount: Pubkey of the pool token account receiving the stake pool's fees.
 * @param referrerPoolTokensAccount: Pubkey of the pool token account of the referrer to receive referral fees
 * @param poolMint: Pubkey of the pool token mint
 * @param tokenProgramId: Pubkey of the SPL token program
 * @param stakePoolHasDepositAuthority: Whether the stake pool has a custom non-default deposit authority
 */
export function depositStakeInstruction(stakePoolProgramId, stakePool, validatorList, stakePoolDepositAuthority, stakePoolWithdrawAuthority, depositStakeAddress, validatorStakeAccount, reserveStake, poolTokensTo, managerFeeAccount, referrerPoolTokensAccount, poolMint, tokenProgramId, stakePoolHasDepositAuthority) {
    const dataLayout = BufferLayout.struct([BufferLayout.u8("instruction")]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: StakePoolInstruction.DepositStake,
    }, data);
    const keys = [
        { pubkey: stakePool, isSigner: false, isWritable: true },
        {
            pubkey: validatorList,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: stakePoolDepositAuthority,
            isSigner: stakePoolHasDepositAuthority,
            isWritable: false,
        },
        { pubkey: stakePoolWithdrawAuthority, isSigner: false, isWritable: false },
        { pubkey: depositStakeAddress, isSigner: false, isWritable: true },
        { pubkey: validatorStakeAccount, isSigner: false, isWritable: true },
        { pubkey: reserveStake, isSigner: false, isWritable: true },
        { pubkey: poolTokensTo, isSigner: false, isWritable: true },
        { pubkey: managerFeeAccount, isSigner: false, isWritable: true },
        { pubkey: referrerPoolTokensAccount, isSigner: false, isWritable: true },
        { pubkey: poolMint, isSigner: false, isWritable: true },
        { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_STAKE_HISTORY_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: tokenProgramId, isSigner: false, isWritable: false },
        { pubkey: StakeProgram.programId, isSigner: false, isWritable: false },
    ];
    return new TransactionInstruction({
        keys,
        programId: stakePoolProgramId,
        data,
    });
}
/**
 * Initializes a DepositStake stake pool instruction given the required accounts and data
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 * @param validatorList: Pubkey of the stake pool's validator list.
 * @param stakePoolWithdrawAuthority: Pubkey of the stake pool's withdraw authority.
 *                                    PDA of the stake pool program, see StakePool docs for details.
 * @param stakeSplitFrom: Pubkey of the stake pool's stake account to split off stake from
 * @param stakeSplitTo: Pubkey of the uninitialized stake account
 *                      (i.e. correct space for stake account allocated, but data all 0s)
 *                      that will take the stake split off
 * @param userStakeAuthority: Pubkey of the user's stake authority
 * @param userTokenTransferAuthority: Pubkey of the user's token transfer authority for `userPoolTokenAccount`
 * @param userPoolTokenAccount: Pubkey of the user's pool token account to deduct pool tokens from to withdraw
 * @param managerFeeAccount: Pubkey of the pool token account receiving the stake pool's fees.
 * @param poolMint: Pubkey of the pool token mint
 * @param tokenProgramId: Pubkey of the SPL token program
 * @param amount: number of pool tokens to withdraw
 */
export function withdrawStakeInstruction(stakePoolProgramId, stakePool, validatorList, stakePoolWithdrawAuthority, stakeSplitFrom, stakeSplitTo, userStakeAuthority, userTokenTransferAuthority, userPoolTokenAccount, managerFeeAccount, poolMint, tokenProgramId, amount) {
    const dataLayout = BufferLayout.struct([
        BufferLayout.u8("instruction"),
        Layout.uint64("amount"),
    ]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: StakePoolInstruction.WithdrawStake,
        amount: new Numberu64(amount).toBuffer(),
    }, data);
    const keys = [
        { pubkey: stakePool, isSigner: false, isWritable: true },
        {
            pubkey: validatorList,
            isSigner: false,
            isWritable: true,
        },
        { pubkey: stakePoolWithdrawAuthority, isSigner: false, isWritable: false },
        { pubkey: stakeSplitFrom, isSigner: false, isWritable: true },
        { pubkey: stakeSplitTo, isSigner: false, isWritable: true },
        { pubkey: userStakeAuthority, isSigner: false, isWritable: false },
        { pubkey: userTokenTransferAuthority, isSigner: true, isWritable: false },
        { pubkey: userPoolTokenAccount, isSigner: false, isWritable: true },
        { pubkey: managerFeeAccount, isSigner: false, isWritable: true },
        { pubkey: poolMint, isSigner: false, isWritable: true },
        { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: tokenProgramId, isSigner: false, isWritable: false },
        { pubkey: StakeProgram.programId, isSigner: false, isWritable: false },
    ];
    return new TransactionInstruction({
        keys,
        programId: stakePoolProgramId,
        data,
    });
}
// Since UpdateValidatorListBalance must be the sole instruction of any transaction,
// we don't export the instruction directly, only a containing transaction
export function updateValidatorListBalanceTransaction(stakePoolProgramId, stakePool, stakePoolWithdrawAuthority, validatorList, reserveStake, validatorStakeAccounts, validatorTransientStakeAccounts, startIndex, noMerge) {
    const dataLayout = BufferLayout.struct([
        BufferLayout.u8("instruction"),
        BufferLayout.u32("startIndex"),
        BufferLayout.u8("noMerge"), // no boolean type in BufferLayout
    ]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: StakePoolInstruction.UpdateValidatorListBalance,
        startIndex: startIndex,
        noMerge: noMerge ? 1 : 0,
    }, data);
    const keys = [
        { pubkey: stakePool, isSigner: false, isWritable: false },
        { pubkey: stakePoolWithdrawAuthority, isSigner: false, isWritable: false },
        { pubkey: validatorList, isSigner: false, isWritable: true },
        { pubkey: reserveStake, isSigner: false, isWritable: true },
        { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_STAKE_HISTORY_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: StakeProgram.programId, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_INSTRUCTIONS_PUBKEY, isSigner: false, isWritable: false },
    ];
    assert(validatorStakeAccounts.length === validatorTransientStakeAccounts.length);
    for (let i = 0; i < validatorStakeAccounts.length; i++) {
        keys.push({
            pubkey: validatorStakeAccounts[i],
            isSigner: false,
            isWritable: true,
        });
        keys.push({
            pubkey: validatorTransientStakeAccounts[i],
            isSigner: false,
            isWritable: true,
        });
    }
    return new Transaction().add(new TransactionInstruction({
        keys,
        programId: stakePoolProgramId,
        data,
    }));
}
export function updateStakePoolBalanceInstruction(stakePoolProgramId, stakePool, stakePoolWithdrawAuthority, validatorList, reserveStake, managerFeeAccount, poolMint, tokenProgramId) {
    const dataLayout = BufferLayout.struct([BufferLayout.u8("instruction")]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: StakePoolInstruction.UpdateStakePoolBalance,
    }, data);
    const keys = [
        { pubkey: stakePool, isSigner: false, isWritable: true },
        { pubkey: stakePoolWithdrawAuthority, isSigner: false, isWritable: false },
        { pubkey: validatorList, isSigner: false, isWritable: true },
        { pubkey: reserveStake, isSigner: false, isWritable: false },
        { pubkey: managerFeeAccount, isSigner: false, isWritable: true },
        { pubkey: poolMint, isSigner: false, isWritable: true },
        { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: tokenProgramId, isSigner: false, isWritable: false },
    ];
    return new TransactionInstruction({
        keys,
        programId: stakePoolProgramId,
        data,
    });
}
export function cleanupRemovedValidatorsInstruction(stakePoolProgramId, stakePool, validatorList) {
    const dataLayout = BufferLayout.struct([BufferLayout.u8("instruction")]);
    const data = Buffer.alloc(dataLayout.span);
    dataLayout.encode({
        instruction: StakePoolInstruction.CleanupRemovedValidatorEntries,
    }, data);
    const keys = [
        { pubkey: stakePool, isSigner: false, isWritable: false },
        { pubkey: validatorList, isSigner: false, isWritable: true },
    ];
    return new TransactionInstruction({
        keys,
        programId: stakePoolProgramId,
        data,
    });
}
