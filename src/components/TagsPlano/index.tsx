import { WhatsApp } from '@/components/Buttons/whatsapp'
import { Plano } from 'types/IPlano'
import styles from './TagsPlano.module.scss'

export function TagsPlano(plano: Plano){
    const {title} = plano
    return(
        <div className={styles.tags}>
                {plano.category.operadora}
                <span>
                    {plano.minAge} - {plano.maxAge}
                </span>
            <WhatsApp title={title} />
        </div>
    )
    
}