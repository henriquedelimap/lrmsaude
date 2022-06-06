import { Header } from '@/components/Header'
import { Itens } from '@/components/itens'
import styles from './Planos.module.scss'

export function Planos(){
    const caminho = {rota: `/planos`}
    return (
        <div>
            <Itens />
        </div>
    )
    
}