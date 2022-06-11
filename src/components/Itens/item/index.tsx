import { TagsPlano } from '@/components/TagsPlano';
import { WhatsApp } from '@/components/Buttons/whatsapp';
import { useNavigate } from 'react-router-dom';
import { Plano } from 'types/IPlano';
import styles from './Item.module.scss'
import { PlanoPage } from 'pages/Plano';
import planos from '@/data/planos.json'

export function Item({ acomodacao}:{ acomodacao: string}){
    const navigate = useNavigate()
    
    return(
        <div
            className={styles.item}
            // onClick={()=>navigate(`/planos/${id}`)}    
        >
            <span>
                {acomodacao}
            </span>
            {/* <WhatsApp {...plano} /> */}
        </div>

    )
}