export interface Payment {
    id: string;
    orderId: string;
    userId: string;
    amount: number;
    paymentDate: Date;
    paymentValidation: "string";
}