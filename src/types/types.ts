export type AuthorProduct = {
    about: string,
    avatar: string,
    email: string,
    name: string,
    _id: string,
}

export type Reviews = {
    author: AuthorProduct,
    created_at: string,
    product: string,
    rating: number,
    text: string,
    updated_at: string,
    _id: string,
    id?: string,
}

export type Product = {
    name: string,
    discount: number,
    pictures: string,
    price: number,
    stock: number,
    _id?: string,
    created_at?: string,
    description?: string,
    likes?: string[],
    reviews?: Reviews[],
    wigth?: number,
    id?: string,
    author?: AuthorProduct
}

export interface NothingFoundProps {
    setInput: (a: string) => void
}

export interface I_FilterContext {
    search: string,
}

export interface I_FilterContextMethods {
    setSearch: (search: string) => void
}

export type Query = {
    query: string
}

export interface I_ProfileFormItems {
    avatar: string, 
    name: string, 
    about: string, 
    email: string
}

export interface ResponceProfileForm extends I_ProfileFormItems{
    group: string,
    _id: string,
}

export type AddReview = {
    rating: number,
    text: string
}

export type AddProduct = {
    pictures: string,
    name: string,
    price: string,
    discount: string,
    stock: string,
    wight: string,
    description: string,
}