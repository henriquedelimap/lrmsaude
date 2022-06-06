import styles from './Itens.module.scss'
import planos from '@/data/planos.json'
import { useState } from 'react'
import { Item } from './item'
import { Plano } from 'types/IPlano'


export function Itens(){
    
    return(
        <div>
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