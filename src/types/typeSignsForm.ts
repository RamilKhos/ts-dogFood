export interface FormPayload { email: string, password: string }

export interface ResponceSignUp { 
    about: string,
    avatar: string,
    email: string,
    group: string,
    name: string,
    _id: string
}

interface DataSignIn {
    _id: string,
    group: string,
}

export interface ResponceSignIn { 
    token: string,
    data: DataSignIn,
}