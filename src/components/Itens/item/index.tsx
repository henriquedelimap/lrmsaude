import { Plano } from 'types/IPlano';
import styles from './Item.module.scss'
import { Imagens } from '@/assets/Imagens.tsx'
import uniqid from 'uniqid'
import { SetStateAction, useState } from 'react';
import { ItemContent } from './Content';

export function Item(plano: Plano){
  const [flipCard, setFlipCard] = useState< SetStateAction<string> | SetStateAction<string> | undefined>()
    const img = [...Imagens]
    let ID = uniqid()
    
    
    
    return(
        <div className={styles.itemContainer}>
          {

          plano.age.map((idade) => (
              plano.abrangencia.map((abrangencia) => (
                plano.coParticipation.map((coparticipacao) => (
                  plano.acomodacao.map((acomodacao) => (
                    plano.title.map((titulo) => (
                      plano.category.paleta.map((cor)=>{
                        return(
                          <ItemContent
                            plano={plano}
                            idade={idade}
                            abrangencia={abrangencia}
                            coparticipacao={coparticipacao}
                            acomodacao={acomodacao}
                            titulo={titulo}
                            flipCard={flipCard}
                            setFlipCard={setFlipCard}
                            img={[...Imagens]}
                            id={uniqid()}
                            cor={cor}
                          />
                        )
                        
                        })
                    ))

                  ))
                ))

              ))
            ))
          }

        </div>

    )
}