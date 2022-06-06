import styles from './Filtro.module.scss'
import infos from '@/data/info.json'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Info } from 'types/IPlano'
 

export function Filtro(){    
    const navigate = useNavigate()
    const apresenta: Info[] = []
    
    // planos.map((item: Plano)=>{
    //     const duplicado = apresenta.findIndex((a) =>{
    //         return item.category.label == a.category.label
    //     }) > -1
    //     if(!duplicado){
    //         apresenta.push(item)
    //     }

    // })
    


    return(
        <ul>
            {
                infos.map((info: Info)=>(

                    <li onClick={()=>navigate(`/${info.id}`)}>
                        {info.operadora}
                    </li>
            ))
            }
        </ul>
    )
}