import { Categorias } from '@/components/Categorias'
import styles from '../Inicio.module.scss'

export function Comparativo(){
    return(
        <div>
        <div className={styles.titulo}>
            <h2 >Comparativo dos planos</h2>
            <span className={styles.titulo__span}></span>
        </div>
        <Categorias />
    </div>
    )
}