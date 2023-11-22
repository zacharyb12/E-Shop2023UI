export interface Order {
    
    id : string;
    userId : string;
    orderItemId : string;
    status : string;
    orderDate : Date;
    totalPrice : number;
}