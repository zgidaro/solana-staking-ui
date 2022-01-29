var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Returns a Result-like struct representing
 * the success or error of a fallible promise
 */
export function tryAwait(fallible_promise) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield fallible_promise;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    });
}
/**
 * Error class reprensenting a partially-filled withdraw-stake operation
 */
export class PartialWithdrawalError extends Error {
    constructor(msg, completedTransactions, newStakeAccounts) {
        super(msg);
        this.completedTransactions = completedTransactions;
        this.newStakeAccounts = newStakeAccounts;
    }
}
