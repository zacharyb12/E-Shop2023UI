export interface CartItem{
    id: string;
    userId: string;
    productId: string;
    quantity: number;
    itemPrice: number;
    totalPrice: number;
  }
  
export interface updateCartItem {
    userId: string;
    productId: string;
    quantity: number;
    itemPrice: number;
  }
  