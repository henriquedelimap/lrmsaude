export interface Plano{
    title: string
    description: string
    members: number
    price: number
    id: number
    category: {
        id: number
        label: string
    }
}
export interface Info{
    id: number
    operadora: string
    administradora: string[]
}