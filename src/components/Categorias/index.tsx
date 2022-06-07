import { Filtro } from "./Filtro";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import { Categoria } from "./Categoria";
import planos from '@/data/planos.json'
import { Plano } from 'types/IPlano'
import styles from './Categorias.module.scss'

type Planos = Plano[]
export function Categorias() {

    let categorias: Planos = planos.map((plano: Plano)=>plano.category)
      
    return (
        <Routes>
            <Route path="/" element={
                <section className={styles.categorias}>
                    <div className={styles.categorias__container}>

                    <div className={styles.categorias__operadoras}>  
                        <span>operadoras</span>
                        <Filtro  />
                    </div>
                    <div>
                        <span>administradoras</span>
                        <Outlet  />
                    </div>
                
                    </div>
                </section>
            }>
                <Route path='*' element={<Categoria />} />  
            </Route>
        </Routes>
    )
}