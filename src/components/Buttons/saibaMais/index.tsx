import { HiOutlineArrowRight } from "react-icons/hi";
import styles from './SaibaMais.module.scss'

export function SaibaMais(){
    return(
        <button className={styles.button}>
            <span>Conheça mais</span>
            <HiOutlineArrowRight className={styles.button__icone} />
        </button>
    )
}