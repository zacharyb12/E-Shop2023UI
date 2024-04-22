export interface ProductReview {
    id: string,
    productId: number,
    userId: number,
    rating: number,
    reviewText: string,
    reviewDate: Date
}