import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { Logo } from '@/components/Logo'

export function Menu(){
    const rotas = [
        {
            to: '/',
            label: 'Início',
            id: uuidv4()
        },
        {
            to: '/planos',
            label: 'Planos',
            id: uuidv4()

        },
        {
            to: '/sobre',
            label: 'Sobre',
            id: uuidv4()
        }
    ]
    return(
        <nav className={styles.menu}>
            <Logo />
            <ul className={styles.menu__lista}>
                {
                    rotas.map((rota)=>(
                        <li 
                            key={rota.id}
                            
                        >
                            <Link 
                                to={rota.to}
                                className={styles.menu__lista__item}
                            >
                                {rota.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
    
}