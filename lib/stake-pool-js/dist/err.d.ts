import { Keypair, TransactionSignature } from "@solana/web3.js";
/**
 * Returns a Result-like struct representing
 * the success or error of a fallible promise
 */
export declare function tryAwait<T>(fallible_promise: Promise<T>): Promise<T | Error>;
/**
 * Error class reprensenting a partially-filled withdraw-stake operation
 */
export declare class PartialWithdrawalError extends Error {
    completedTransactions: TransactionSignature[];
    newStakeAccounts: Keypair[];
    constructor(msg: string, completedTransactions: TransactionSignature[], newStakeAccounts: Keypair[]);
}
//# sourceMappingURL=err.d.ts.map