import image from '@/assets/foto.png'
import { WhatsApp } from '@/components/Buttons/whatsapp'
import styles from './Header.module.scss'

export function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__container__texts}>
                    <h3 className={styles.header__container__texts__txt}>Planos de saúde e odontológicos</h3>
                    <p className={styles.header__container__texts__description}>A sua saúde em primeiro lugar, opte pelos melhores planos do mercado. Pensou em plano? Pensou em LRM Saúde!</p>
                    <WhatsApp />

                </div>

                <div>

                </div>
            </div>
        </header>
    )
    
}