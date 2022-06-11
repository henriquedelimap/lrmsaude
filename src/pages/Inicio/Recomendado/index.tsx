import styles from '../Inicio.module.scss'
import planos from '@/data/planos.json'
import { useNavigate } from 'react-router-dom'
import { Item } from '@/components/Itens/item'

export function Recomendados(){
    const navigate = useNavigate()
    let planosRecomendados = [...planos]
    planosRecomendados = planosRecomendados.sort(()=> 0.5 - Math.random()).splice(0,3)
    return(
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
    )
}