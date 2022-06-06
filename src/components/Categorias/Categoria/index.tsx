import { Info } from "types/IPlano";
import infos from '@/data/info.json'
import { useParams } from "react-router-dom";
import { Item } from "@/components/Itens/item";
import { Description } from "./Description";
export function Categoria(){
    return(
        <>
            {
            infos.map((info: Info)=>{
                const {id}=useParams()
                if(Number(info.id) === Number(id)){
                    return(
                        <Description {...info} />
                    )   
                }
            }) 
            }
        </>
    )
}