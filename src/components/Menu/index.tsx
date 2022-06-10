import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/Logo'
import { WhatsApp } from '@/components/Buttons/whatsapp'
import {MdMenu} from 'react-icons/md'
import { MenuResponsivo } from './Responsivo'

export function Menu(){
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
    const button = "a"
    function abrirMenu(){
        return (
            <MenuResponsivo />
        )
    }

    return(
        <nav className={styles.menu}>
            <span className={styles.menu__logo}>
                <Logo />
            </span>
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
            <span className={styles.menu__whatsapp}>
                <WhatsApp title={'cotacao'}/>
            </span>
            <div className={styles.menu__icone} onClick={()=>abrirMenu}>
                <span className={styles.menu__icone__rect} />
                <span className={styles.menu__icone__rect} />
                <span className={styles.menu__icone__rect} />
            </div>
            
        </nav>
    )
    
}