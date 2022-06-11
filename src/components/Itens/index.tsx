import styles from './Itens.module.scss'
import planos from '@/data/planos.json'
import { useState } from 'react'
import { Item } from './item'
import { Plano } from 'types/IPlano'

interface Props{
    ordenador: string
}

export function Itens(props: Props){
    const [lista, setLista]= useState(planos)
    
    const {ordenador} = props

    return(
        <div className={styles.itens}>
            {
                planos.map((plano: JSX.IntrinsicAttributes & Plano)=>(
                    <Item
                    key={plano.id}
                        {...plano}
                    />
                ))
            }
        </div>
    )
}