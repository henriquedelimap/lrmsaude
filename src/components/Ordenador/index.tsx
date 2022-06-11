import filtro from "@/data/filtro.json"
import { IFiltro } from "types/IPlano"
import { SelectOption } from "./SelectOption"
import styles from './Ordenador.module.scss'

export function Ordenador(){
    
        
    return(
        filtro.map((item: IFiltro)=>{
            let planos = item.planos
            let acomodacao = item.acomodacao
            let abrangencia = item.abrangencia
            let regiao = item.regiao
            let entidade= item.entidade
            let idade = item.idade
            return (
                <div key={item.id} className={styles.ordenador}>
                    <SelectOption {...planos}/>
                    <SelectOption {...acomodacao}/>
                    <SelectOption {...abrangencia}/>
                    <SelectOption {...regiao}/>
                    <SelectOption {...entidade}/>
                    <select name={idade.name} id={idade.id}>
                        {
                            idade.option.map((option, index)=>(
                                <option key={index} value={option}>{option}</option>
                            ))
                        }
                    </select>
                    
                </div>
            )
        })
    )
}