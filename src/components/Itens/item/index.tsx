import { TagsPlano } from '@/components/TagsPlano';
import { WhatsApp } from '@/components/Buttons/whatsapp';
import { useNavigate } from 'react-router-dom';
import { Plano } from 'types/IPlano';
import styles from './Item.module.scss'
import { PlanoPage } from 'pages/Plano';
import planos from '@/data/planos.json'
import { Imagens } from '@/assets/Imagens.tsx'
import uniqid from 'uniqid'

export function Item(plano: Plano){

    const img = [...Imagens]

    // const navigate = useNavigate()
    
    return(
        <div className={styles.itemContainer}>
          {

          plano.age.map((idade) => (
              plano.abrangencia.map((abrangencia) => (
                plano.coParticipation.map((coparticipacao) => (
                  plano.acomodacao.map((acomodacao) => (
                    plano.title.map((titulo, index) => (
                      <div
                        className={styles.item}
                        key={uniqid()}
                      >
                        {img.map((foto) => (
                          foto.label === plano.category.label ? <img src={foto.img} /> : ''
                        ))}
                        <span>{titulo}</span>
                        <span>{plano.category.operadora}</span>

                        <span>{plano.category.ramo}</span>
                        <span>{coparticipacao}</span>
                        <span>{abrangencia}</span>
                        <span>{idade[0]} - {idade[1]}</span>
                        <span>{acomodacao}</span>
                      </div>
                    ))

                  ))
                ))

              ))
            ))
          }

        </div>

    )
}