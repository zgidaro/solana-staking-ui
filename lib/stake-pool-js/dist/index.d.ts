/// <reference types="node" />
import { AccountInfo, Connection, PublicKey } from "@solana/web3.js";
import * as schema from "./schema";
export * from "./types";
export * from "./instructions";
export * from "./err";
export declare const STAKE_STATE_LEN: number;
export interface StakePoolAccount {
    publicKey: PublicKey;
    account: AccountInfo<schema.StakePool>;
}
export interface ValidatorListAccount {
    publicKey: PublicKey;
    account: AccountInfo<schema.ValidatorList>;
}
/**
 * Retrieves and deserializes a StakePool account using a web3js connection and the stake pool address.
 * @param connection: An active web3js connection.
 * @param stakePoolPubKey: The public key (address) of the stake pool account.
 */
export declare function getStakePoolAccount(connection: Connection, stakePoolPubKey: PublicKey): Promise<StakePoolAccount | null>;
export declare function getStakePoolFromAccountInfo(pubkey: PublicKey, account: AccountInfo<Buffer>): StakePoolAccount;
export declare function getValidatorListFromAccountInfo(pubkey: PublicKey, account: AccountInfo<Buffer>): ValidatorListAccount;
/**
 * Retrieves and deserializes a ValidatorList account using a web3js connection and the validator list address.
 * @param connection: An active web3js connection.
 * @param validatorListPubKey: The public key (address) of the validator list account.
 */
export declare function getValidatorListAccount(connection: Connection, validatorListPubKey: PublicKey): Promise<ValidatorListAccount | null>;
/**
 * Retrieves all StakePool and ValidatorList accounts that are running a particular StakePool program.
 * @param connection: An active web3js connection.
 * @param stakePoolProgramAddress: The public key (address) of the StakePool program.
 */
export declare function getStakePoolAccounts(connection: Connection, stakePoolProgramAddress: PublicKey): Promise<(StakePoolAccount | ValidatorListAccount | null)[]>;
/**
 * Gets the withdraw authority PDA of the given stake pool
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 */
export declare function getWithdrawAuthority(stakePoolProgramId: PublicKey, stakePool: PublicKey): Promise<PublicKey>;
/**
 * Gets the default deposit authority PDA of the given stake pool
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 */
export declare function getDefaultDepositAuthority(stakePoolProgramId: PublicKey, stakePool: PublicKey): Promise<PublicKey>;
/**
 * Gets the address of the stake pool's stake account for the given validator
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 * @param validatorVoteAccount: Pubkey of the validator to find the stake account of
 */
export declare function getValidatorStakeAccount(stakePoolProgramId: PublicKey, stakePool: PublicKey, validatorVoteAccount: PublicKey): Promise<PublicKey>;
/**
 * Gets the address of the stake pool's transient stake account for the given validator
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 * @param validatorVoteAccount: Pubkey of the validator to find the stake account of
 */
export declare function getValidatorTransientStakeAccount(stakePoolProgramId: PublicKey, stakePool: PublicKey, validatorVoteAccount: PublicKey): Promise<PublicKey>;
/**
 * Helper function to pretty print a schema.PublicKey
 * Pretty prints a PublicKey in base58 format */
export declare function prettyPrintPubKey(pubKey: PublicKey): string;
export declare function reverse(object: any): void;
/**
 * Helper function to pretty print a decoded account
 */
//# sourceMappingURL=index.d.ts.map