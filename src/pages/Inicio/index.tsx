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
            <div className={styles.home__txt}>
                <span className={styles.home__txt__subtitle}>planos para todas necessidades</span>
                <span className={styles.home__txt__title}>contamos com planos de saúde para pequenas ou grandes necessidades</span>
            </div>
            <Operadoras />
            {/* <Comparativo /> */}
        </section>
        </>
    )

}