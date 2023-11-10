export interface User{
    id: string,
    lastname: string,
    firstName: string,
    email: string,
    password: string,
    status: string,
    address: string,
    favoriteItems: string[],
    cartItems: string[]
}