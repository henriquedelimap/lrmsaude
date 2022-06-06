import image from '@/assets/foto.png'
import styles from './Header.module.scss'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={image} ></img>
        </header>
    )
    
}