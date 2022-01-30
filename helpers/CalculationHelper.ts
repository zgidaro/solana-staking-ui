export class CalculationHelper {
    static calculateApr = (deposited: number, minted: number, since: Date) => {
        const now = Date.now();
        const daysSinceInception = (now - since.getTime()) / (1000 * 3600 * 24);
    
        return ((deposited / minted) - 1) / daysSinceInception * 365.25;
    };
}