import styles from './Inicio.module.scss'
import planos from '@/data/planos.json'
import { useNavigate } from 'react-router-dom'
import { Categorias } from '@/components/Categorias'
import {Carousel} from '@/components/Carousel'
import { Item } from '@/components/Itens/item'
export function Inicio(){
    const navigate = useNavigate()
    let planosRecomendados = [...planos]
    planosRecomendados = planosRecomendados.sort(()=> 0.5 - Math.random()).splice(0,3)
    return(
        <section className={styles.home}>
            <div>
                <h2 className={styles.home__titulo}>planos populares</h2>
                <ul className={styles.home__recomendados}>
                    {
                        planosRecomendados.map((plano)=>(
                            <li
                                onClick={()=>navigate(`planos/${plano.id}`)}
                                className={styles.home__recomendados__item}
                                key={plano.id}
                            >
                                <Item {...plano} />
                            </li>
                            
                            
                        ))
                    }
                </ul>
            </div>
            <div>
                <h2 className={styles.home__titulo}>Operadoras</h2>
                <Carousel />
            </div>

            <div>
                <h2 className={styles.home__titulo}>Comparativo dos planos</h2>

                <Categorias />
            </div>
            
            
        </section>
    )

}