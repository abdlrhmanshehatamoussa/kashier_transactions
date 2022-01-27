import { Utils } from "../commons/utils";

export class Transaction {
    id: string;
    timestamp: Date;
    merchantId: string;
    operation: boolean;
    amount: number;
    currency: string;

    static fromRequest(request: any): Transaction {
        try {
            Utils.assertHasProperty(request, "amount")
            return {
                id: undefined,
                amount: request.amount,
                currency: request.currency,
                merchantId: request.merchant_id,
                operation: request.operation,
                timestamp: new Date()
            }
        } catch (e) {
            throw new Error(`Invalid transaction request: ${e}`);
        }
    }
}
