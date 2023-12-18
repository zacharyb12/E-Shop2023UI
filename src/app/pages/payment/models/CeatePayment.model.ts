export interface CreatePayment {
    orderId: string;
    userId: string;
    amount: number;
    paymentDate: Date;
    paymentValidation: "string";
}