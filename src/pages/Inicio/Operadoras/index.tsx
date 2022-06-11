import styles from '../Inicio.module.scss'
import {Carousel} from '@/components/Carousel'

export function Operadoras(){
    return(
        <div className={styles.home__operadoras}>
                <div className={styles.titulo}>
                    <h2 >Operadoras</h2>
                    <span className={styles.titulo__span}></span>
                </div>
                <Carousel />
        </div>
    )
}