import { Itens } from "@/components/Itens";
import styles from './Planos.module.scss'
export function Planos(){
    return (
        <div>
                <h2 className={styles.titulo}>planos de saúde</h2>
            <Itens />
        </div>
    )
    
}