import classNames from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '..'
import styles from './Responsivo.module.scss'

export function MenuResponsivo(){
    const [isExtended, setIsExtended] = useState(true)
    const rotas = [
        {
            to: '/',
            label: 'Início',
            id: 1
        },
        {
            to: '/planos',
            label: 'Planos',
            id: 2

        },
        {
            to: '/sobre',
            label: 'Sobre',
            id: 3
        },
        {
            to: '/blog',
            label: 'Blog',
            id: 4
        }
    ]
    return(
        <nav>
        <div 
            className={classNames({
                [styles.menuResponvivo]: true,
                [styles.off]: isExtended == false
            })}
            onClick={()=>setIsExtended(!isExtended)}
        >

            <div className={styles.menuResponvivo__box}>
                <div className={styles.icone}>
                    <span className={styles.icone__rect} />
                    <span className={styles.icone__rect} />
                </div>
                <div>
                    <ul className={styles.menuResponvivo__box__lista}>
                        {
                            rotas.map((rota)=>(
                                <li 
                                    key={rota.id}
                                    
                                    className={styles.menuResponvivo__box__lista__itens}
                                >
                                    <Link 
                                        to={rota.to}
                                        className={styles.menuResponvivo__box__lista__itens__item}

                                    >
                                        {rota.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
            </div>
            
        </div>
        </nav>
    )
}