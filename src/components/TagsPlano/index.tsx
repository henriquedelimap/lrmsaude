import { WhatsApp } from '@/components/buttons/whatsapp'
import { Plano } from 'types/IPlano'
import styles from './TagsPlano.module.scss'

export function TagsPlano(plano: Plano){
    const {price, members} = plano
    return(
        <div className={styles.tags}>
            <span>
                atende 0{members} pessoa{members !== 1 ? 's' : ''}
            </span>
            {price}
            <WhatsApp {...plano} />
        </div>
    )
    
}