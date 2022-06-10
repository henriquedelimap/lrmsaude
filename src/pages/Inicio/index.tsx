import styles from './Inicio.module.scss'
import planos from '@/data/planos.json'
import { useNavigate } from 'react-router-dom'
import { Categorias } from '@/components/Categorias'
import {Carousel} from '@/components/Carousel'
import { Item } from '@/components/Itens/item'
import { Header } from "@/components/Header";

export function Inicio(){
    const navigate = useNavigate()
    let planosRecomendados = [...planos]
    planosRecomendados = planosRecomendados.sort(()=> 0.5 - Math.random()).splice(0,3)
    return(
        <>
        <Header />
        <section className={styles.home}>
            <div className={styles.home__recomendados}>
                <div className={styles.titulo}>
                    <h2 >planos populares</h2>
                    <span className={styles.home__recomendados__titulo__span}></span>
                </div>
                <ul className={styles.home__recomendados__cards}>
                    {
                        planosRecomendados.map((plano)=>(
                            <li
                                onClick={()=>navigate(`planos/${plano.id}`)}
                                className={styles.home__recomendados__cards__card}
                                key={plano.id}
                            >
                                <Item {...plano} />
                            </li>
                            
                            
                        ))
                    }
                </ul>
            </div>
            
            <div>
                <div className={styles.titulo}>
                    <h2 >Operadoras</h2>
                    <span className={styles.titulo__span}></span>
                </div>
                <Carousel />
            </div>

            <div>
                <div className={styles.titulo}>
                    <h2 >Comparativo dos planos</h2>
                    <span className={styles.titulo__span}></span>
                </div>
                <Categorias />
            </div>
        </section>
        </>
    )

}