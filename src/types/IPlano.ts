export interface Plano{
    id: number
    title: string
    description: string
    minAge: number
    maxAge: number
    coParticipation: string
    obstetria: boolean
    category: {
        id: number
        label: string
        operadora: string
        administradora: string
        ramo: string
        modalidade: string
    }
}
export interface Info{
    id: number
    operadora: string
    administradora: string[]
}
export interface IImagem{
    id: number
    label: string
    title: string
    img: any
}