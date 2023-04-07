export type Reviews = {
    author: string,
    created_at: string,
    product: string,
    text: string,
    updated_at: string,
    _id: string,
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
    rewiews?: Reviews[],
    wigth?: number,
    id?: string,
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

