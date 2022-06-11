import styles from './Itens.module.scss'
import planos from '@/data/planos.json'
import { Key, useState } from 'react'
import { Item } from './item'
import { Plano } from 'types/IPlano'
import { Imagens } from '@/assets/Imagens.tsx'
import uniqid from 'uniqid'

interface Props {
    ordenador: string
}

export function Itens(props: Props) {
    // const [lista, setLista] = useState(planos)

    const img = [...Imagens]
    return (
        <div className={styles.itens}>
            {
                planos.map((plano: JSX.IntrinsicAttributes & Plano) => (
                    plano.age.map((idade) => (
                        plano.abrangencia.map((abrangencia)=>(
                            plano.coParticipation.map((coparticipacao)=>(
                                plano.acomodacao.map((acomodacao) => (
                                    plano.title.map((titulo, index)=>(
                                        <div
                                            className={styles.itens__itemTest}
                                            key={uniqid()}
                                        >
                                            {img.map((foto)=>(
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
                ))
            }
        </div>
    )
}