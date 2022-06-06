import { Link } from "react-router-dom";
import {FaWhatsapp} from 'react-icons/fa'
import styles from './Whatsapp.module.scss'
import {Plano} from 'types/IPlano'

export function WhatsApp(plano: Plano){
    const {title} = plano
    const conversa = `Olá, gostaria de fazer uma cotação do plano ${title}`
    const URLwhatsapp = `https://api.whatsapp.com/send/?phone=5534992779461&text=${conversa}&app_absent=0`
    return(
        <span className={styles.whatsapp}>
            <a href={URLwhatsapp}>
                cotação            
            </a>
        </span>
    )
}