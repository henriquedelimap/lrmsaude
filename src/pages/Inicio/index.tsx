import styles from './Inicio.module.scss'
import { Header } from "@/components/Header";
import { Recomendados } from './Recomendado'
import { Operadoras } from './Operadoras';
import { Comparativo } from './Comparativo';

export function Inicio(){
    
    return(
        <>
        <Header />
        <section className={styles.home}>
            {/* <Recomendados /> */}
            <Operadoras />
            {/* <Comparativo /> */}
        </section>
        </>
    )

}