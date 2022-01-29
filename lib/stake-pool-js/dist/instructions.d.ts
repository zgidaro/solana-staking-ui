/**
 * StakePoolInstructions generation
 *
 * @module
 */
import { PublicKey, TransactionInstruction, Transaction } from "@solana/web3.js";
import { Numberu64 } from "./types";
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
export declare function depositSolInstruction(stakePoolProgramId: PublicKey, stakePool: PublicKey, stakePoolWithdrawAuthority: PublicKey, reserveStake: PublicKey, lamportsFrom: PublicKey, poolTokensTo: PublicKey, managerFeeAccount: PublicKey, referrerPoolTokensAccount: PublicKey, poolMint: PublicKey, tokenProgramId: PublicKey, amount: number | Numberu64, solDepositAuthority?: PublicKey): TransactionInstruction;
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
export declare function depositStakeInstruction(stakePoolProgramId: PublicKey, stakePool: PublicKey, validatorList: PublicKey, stakePoolDepositAuthority: PublicKey, stakePoolWithdrawAuthority: PublicKey, depositStakeAddress: PublicKey, validatorStakeAccount: PublicKey, reserveStake: PublicKey, poolTokensTo: PublicKey, managerFeeAccount: PublicKey, referrerPoolTokensAccount: PublicKey, poolMint: PublicKey, tokenProgramId: PublicKey, stakePoolHasDepositAuthority: boolean): TransactionInstruction;
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
export declare function withdrawStakeInstruction(stakePoolProgramId: PublicKey, stakePool: PublicKey, validatorList: PublicKey, stakePoolWithdrawAuthority: PublicKey, stakeSplitFrom: PublicKey, stakeSplitTo: PublicKey, userStakeAuthority: PublicKey, userTokenTransferAuthority: PublicKey, userPoolTokenAccount: PublicKey, managerFeeAccount: PublicKey, poolMint: PublicKey, tokenProgramId: PublicKey, amount: number | Numberu64): TransactionInstruction;
export declare function updateValidatorListBalanceTransaction(stakePoolProgramId: PublicKey, stakePool: PublicKey, stakePoolWithdrawAuthority: PublicKey, validatorList: PublicKey, reserveStake: PublicKey, validatorStakeAccounts: PublicKey[], validatorTransientStakeAccounts: PublicKey[], startIndex: number, noMerge: boolean): Transaction;
export declare function updateStakePoolBalanceInstruction(stakePoolProgramId: PublicKey, stakePool: PublicKey, stakePoolWithdrawAuthority: PublicKey, validatorList: PublicKey, reserveStake: PublicKey, managerFeeAccount: PublicKey, poolMint: PublicKey, tokenProgramId: PublicKey): TransactionInstruction;
export declare function cleanupRemovedValidatorsInstruction(stakePoolProgramId: PublicKey, stakePool: PublicKey, validatorList: PublicKey): TransactionInstruction;
//# sourceMappingURL=instructions.d.ts.map