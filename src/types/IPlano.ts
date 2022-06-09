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
    map: any
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
export interface IFiltro{
    
        id: number,
        planos: {id: string, name: string, option: string[]},
        acomodacao: {id: string, name: string, option: string[]} ,
        abrangencia: {id: string, name: string, option: string[]} ,
        regiao: {id: string, name: string, option: string[]} ,
        entidade: {id: string, name: string, option: string[]} ,
        idade: {id: string, name: string, option:[string[]]} 
    
}