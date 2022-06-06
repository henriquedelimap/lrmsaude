import { TagsPlano } from '@/components/TagsPlano';
import { WhatsApp } from '@/components/buttons/whatsapp';
import { useNavigate } from 'react-router-dom';
import { Plano } from 'types/IPlano';
import styles from './Item.module.scss'

export function Item(plano: Plano){
    const navigate = useNavigate()
    const {id, title, description} = plano
    return(
        <div
            className={styles.item}
            onClick={()=>navigate(`/planos/${id}`)}>
            <h1>{title}</h1>
            <p>{description}</p>

            <TagsPlano {...plano} />
        </div>

    )
}