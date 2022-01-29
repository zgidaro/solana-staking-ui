var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PublicKey, SOLANA_SCHEMA, } from "@solana/web3.js";
import { tryAwait } from "./err";
import * as schema from "./schema";
import { addStakePoolSchema } from "./schema";
export * from "./types";
export * from "./instructions";
export * from "./err";
addStakePoolSchema(SOLANA_SCHEMA);
// length of a stake account in bytes
export const STAKE_STATE_LEN = 200;
/**
 * Retrieves and deserializes a StakePool account using a web3js connection and the stake pool address.
 * @param connection: An active web3js connection.
 * @param stakePoolPubKey: The public key (address) of the stake pool account.
 */
export function getStakePoolAccount(connection, stakePoolPubKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield tryAwait(connection.getAccountInfo(stakePoolPubKey));
        if (account instanceof Error)
            return null;
        if (account === null)
            return null;
        //console.log(account);
        //console.log(account.owner.toString());
        const stakePool = schema.StakePool.decodeUnchecked(account.data);
        // reverse the pubkey fields cos, idk, borsh.js keeps screwing up.
        reverse(stakePool);
        //console.log(stakePool.tokenProgramId.toString());
        return {
            publicKey: stakePoolPubKey,
            account: {
                data: stakePool,
                executable: account.executable,
                lamports: account.lamports,
                owner: account.owner,
            },
        };
    });
}
export function getStakePoolFromAccountInfo(pubkey, account) {
    const stakePool = schema.StakePool.decodeUnchecked(account.data);
    // reverse the pubkey fields cos, idk, borsh.js keeps screwing up.
    reverse(stakePool);
    return {
        publicKey: pubkey,
        account: {
            data: stakePool,
            executable: account.executable,
            lamports: account.lamports,
            owner: account.owner,
        },
    };
}
export function getValidatorListFromAccountInfo(pubkey, account) {
    const validatorList = schema.ValidatorList.decodeUnchecked(account.data);
    // reverse the pubkey fields cos, idk, borsh.js keeps screwing up.
    reverse(validatorList);
    return {
        publicKey: pubkey,
        account: {
            data: validatorList,
            executable: account.executable,
            lamports: account.lamports,
            owner: account.owner,
        },
    };
}
/**
 * Retrieves and deserializes a ValidatorList account using a web3js connection and the validator list address.
 * @param connection: An active web3js connection.
 * @param validatorListPubKey: The public key (address) of the validator list account.
 */
export function getValidatorListAccount(connection, validatorListPubKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield tryAwait(connection.getAccountInfo(validatorListPubKey));
        if (account instanceof Error)
            return null;
        if (account === null)
            return null;
        const vlist = schema.ValidatorList.decodeUnchecked(account.data);
        // reverse the pubkey fields cos, idk, borsh.js keeps screwing up.
        reverse(vlist);
        return {
            publicKey: validatorListPubKey,
            account: {
                data: vlist,
                executable: account.executable,
                lamports: account.lamports,
                owner: account.owner,
            },
        };
    });
}
/**
 * Retrieves all StakePool and ValidatorList accounts that are running a particular StakePool program.
 * @param connection: An active web3js connection.
 * @param stakePoolProgramAddress: The public key (address) of the StakePool program.
 */
export function getStakePoolAccounts(connection, stakePoolProgramAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield connection.getProgramAccounts(stakePoolProgramAddress);
            const stakePoolAccounts = response.map((a) => {
                let decodedData;
                if (a.account.data.readUInt8(0) === 1) {
                    try {
                        decodedData = schema.StakePool.decode(a.account.data);
                    }
                    catch (error) {
                        console.log("Could not decode StakeAccount. Error:", error);
                        decodedData = undefined;
                    }
                }
                else if (a.account.data.readUInt8(0) === 2) {
                    try {
                        decodedData = schema.ValidatorList.decodeUnchecked(a.account.data);
                    }
                    catch (error) {
                        console.log("Could not decode ValidatorList. Error:", error);
                        decodedData = undefined;
                    }
                }
                else {
                    console.error(`Could not decode. StakePoolAccount Enum is ${a.account.data.readUInt8(0)}, expected 1 or 2!`);
                    decodedData = undefined;
                }
                reverse(decodedData);
                return {
                    publicKey: a.pubkey,
                    account: {
                        data: decodedData,
                        executable: a.account.executable,
                        lamports: a.account.lamports,
                        owner: a.account.owner,
                    },
                };
            });
            return stakePoolAccounts;
        }
        catch (error) {
            console.log(error);
            return [null, null];
        }
    });
}
/**
 * Gets the withdraw authority PDA of the given stake pool
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 */
export function getWithdrawAuthority(stakePoolProgramId, stakePool) {
    return __awaiter(this, void 0, void 0, function* () {
        const [key, _bump_seed] = yield PublicKey.findProgramAddress([stakePool.toBuffer(), Buffer.from("withdraw")], stakePoolProgramId);
        return key;
    });
}
/**
 * Gets the default deposit authority PDA of the given stake pool
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 */
export function getDefaultDepositAuthority(stakePoolProgramId, stakePool) {
    return __awaiter(this, void 0, void 0, function* () {
        const [key, _bump_seed] = yield PublicKey.findProgramAddress([stakePool.toBuffer(), Buffer.from("deposit")], stakePoolProgramId);
        return key;
    });
}
/**
 * Gets the address of the stake pool's stake account for the given validator
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 * @param validatorVoteAccount: Pubkey of the validator to find the stake account of
 */
export function getValidatorStakeAccount(stakePoolProgramId, stakePool, validatorVoteAccount) {
    return __awaiter(this, void 0, void 0, function* () {
        const [key, _bump_seed] = yield PublicKey.findProgramAddress([validatorVoteAccount.toBuffer(), stakePool.toBuffer()], stakePoolProgramId);
        return key;
    });
}
/**
 * Gets the address of the stake pool's transient stake account for the given validator
 * @param stakePoolProgramId: Pubkey of the stake pool program
 * @param stakePool: Pubkey of the stake pool to deposit to
 * @param validatorVoteAccount: Pubkey of the validator to find the stake account of
 */
export function getValidatorTransientStakeAccount(stakePoolProgramId, stakePool, validatorVoteAccount) {
    return __awaiter(this, void 0, void 0, function* () {
        const [key, _bump_seed] = yield PublicKey.findProgramAddress([
            Buffer.from("transient"),
            validatorVoteAccount.toBuffer(),
            stakePool.toBuffer(),
        ], stakePoolProgramId);
        return key;
    });
}
/**
 * Helper function to pretty print a schema.PublicKey
 * Pretty prints a PublicKey in base58 format */
export function prettyPrintPubKey(pubKey) {
    return new PublicKey(new PublicKey(pubKey.toBuffer()).toBytes().reverse()).toString();
}
export function reverse(object) {
    for (const val in object) {
        if (object[val] instanceof PublicKey) {
            object[val] = new PublicKey(object[val].toBytes().reverse());
            //console.log(val, object[val].toString());
        }
        else if (object[val] instanceof Object) {
            reverse(object[val]);
        }
        else if (object[val] instanceof Array) {
            for (const elem of object[val]) {
                reverse(elem);
            }
        }
        /*else {
          console.log(val, object[val]);
        }*/
    }
}
/**
 * Helper function to pretty print a decoded account
 */
// commented out for now due to typescript error:
// No index signature with a parameter of type 'string' was found on type 'StakePool | ValidatorList'
// on expr sp[val]
/*
export function prettyPrintAccount(
  account: ValidatorListAccount | StakePoolAccount
): void {
  console.log("Address:", account.publicKey.toString());
  const sp = account.account.data;
  if (typeof sp === "undefined") {
    console.log("Account could not be decoded");
  }

  for (const val in sp) {
    if (sp[val] instanceof PublicKey) {
      console.log(val, prettyPrintPubKey(sp[val]));
    } else {
      console.log(val, sp[val]);
    }
  }
  console.log("Executable?:", account.account.executable);
  console.log("Lamports:", account.account.lamports);
  console.log("Owner PubKey:", account.account.owner.toString());
}
*/
