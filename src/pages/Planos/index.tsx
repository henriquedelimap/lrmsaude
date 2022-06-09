import { Itens } from "@/components/Itens";
import { Ordenador } from "@/components/Ordenador";
import styles from './Planos.module.scss'
export function Planos(){
    return (
        <div>
            <Ordenador />
            <h2 className={styles.titulo}>planos de saúde</h2>
            <Itens />
        </div>
    )
    
}