import { Itens } from "@/components/Itens";
import { Ordenador } from "@/components/Ordenador";
import { useState } from "react";
import styles from './Planos.module.scss'
export function Planos(){
    const [ordenador, setOrdenador] = useState('')
    return (
        <div className={styles.planos}>
            <Ordenador
                ordenador={ordenador}
                setOrdenador={setOrdenador}
            />
            <span className={styles.titulo}>
                <h2>planos de saúde</h2>

            </span>
            <Itens ordenador={ordenador} />
        </div>
    )
    
}