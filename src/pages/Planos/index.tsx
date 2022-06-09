import { Itens } from "@/components/Itens";
import { Ordenador } from "@/components/Ordenador";
import { useState } from "react";
import styles from './Planos.module.scss'
export function Planos(){
    const [ordenador, setOrdenador] = useState('')
    return (
        <div>
            <Ordenador
                ordenador={ordenador}
                setOrdenador={setOrdenador}
            />
            <h2 className={styles.titulo}>planos de saúde</h2>
            <Itens ordenador={ordenador} />
        </div>
    )
    
}