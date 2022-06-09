import image from '@/assets/foto.png'
import { WhatsApp } from '@/components/Buttons/whatsapp'
import styles from './Header.module.scss'

export function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.header__texts}>
                <h3 className={styles.header__texts__txt}>Planos de saúde e odontológicos para toda família</h3>
                <p className={styles.header__texts__description}>Cuide da sua saúde e da saúde de quem mais ama contratando nossos planos de saúde e odontológico a um preço que cabe no seu bolso</p>
                <WhatsApp />

            </div>

            <div>

            </div>
        </header>
    )
    
}