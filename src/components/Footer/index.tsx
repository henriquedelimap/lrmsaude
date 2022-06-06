import { Logo } from '@/components/Logo'
import styles from './Footer.module.scss'

export function Footer(){
    return(
        <footer className={styles.footer}>
            <Logo />
        </footer>
    )
    
}