import { Link } from "react-router-dom";
import {FaWhatsapp} from 'react-icons/fa'
import styles from './Whatsapp.module.scss'
import {Plano} from 'types/IPlano'
interface Props{
    plano?: Plano
    title?: string
}

export function WhatsApp(props: Props){
    const {title} = props
    let conversa
    if(title === 'cotacao'){
        conversa = 'Olá, quero conhecer mais sobre os planos de saúde'
    } else{
        conversa = `Olá, gostaria de fazer uma cotação do plano ${title}`
    }
    const URLwhatsapp = `https://api.whatsapp.com/send/?phone=5534992779461&text=${conversa}&app_absent=0`
    return(
        <span className={styles.whatsapp}>
            <a href={URLwhatsapp}>
                cotação            
            </a>
        </span>
    )
}