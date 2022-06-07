import { WhatsApp } from "@/components/Buttons/whatsapp";
import { Imagens } from "@/imagens.tsx";
import { IImagem, Plano } from "types/IPlano";
import styles from './Plano.module.scss'
export function PlanoPage(plano: Plano){
    let match
    let alt
    Imagens.map((imagem: IImagem)=>{
        if(plano.category.label === imagem.label){
            match = imagem.img
            alt = `logo da seguradora ${imagem.title}`
        }
    })    

    return(
        <div className={styles.plano}>
            <div className={styles.plano__header}>
                {plano.category.administradora}
                <img src={match} alt={alt} className={styles.plano__header__img} />
                {plano.title}
            </div>

            <div className={styles.plano__description}>
                <span>
                    {plano.description}
                </span>
                <span>
                    {plano.coParticipation}
                </span>
                <span>
                    {plano.minAge} - {plano.maxAge}
                </span>
            </div>
            <WhatsApp {...plano} />
        </div>
    )
}