export type Reviews = {
    author: string,
    created_at: string,
    product: string,
    text: string,
    updated_at: string,
    _id: string,
}

export type Product = {
    created_at: string,
    description: string,
    discount: number,
    likes: string[],
    name: string,
    pictures: string,
    price: number,
    rewiews: Reviews[],
    stock: number,
    wigth: number,
    id: string,
}