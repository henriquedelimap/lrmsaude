import styles from './Itens.module.scss'
import planos from '@/data/planos.json'
import { useState } from 'react'
import { Item } from './item'
import { Plano } from 'types/IPlano'
import { Imagens } from '@/assets/Imagens.tsx'

interface Props {
    ordenador: string
}

export function Itens(props: Props) {
    const [lista, setLista] = useState(planos)
    const img = [...Imagens]
    let logo: string | undefined
    img.map((foto)=>{
        if(foto.label === 'bradescoSaude'){
            return(
                logo = foto.img
            )
        }
    })
    return (
        <div className={styles.itens}>
            {
                planos.map((plano: JSX.IntrinsicAttributes & Plano) => (
                        plano.age.map((a) => (

                            plano.acomodacao.map((b) => (
                                    <div className={styles.itens__itemTest}>
                                        <img src={logo} />
                                        <span>{plano.category.operadora}</span>
                                        <span>{plano.category.ramo}</span>
                                        <span>{plano.coParticipation}</span>
                                        <span>{a[0]} - {a[1]}</span>
                                        <span>{b}</span>
                                    </div>
                            ))
                        ))
                ))
            }
        </div>
    )
}