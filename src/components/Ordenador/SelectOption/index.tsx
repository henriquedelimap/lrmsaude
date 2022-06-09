import { IFiltro } from "types/IPlano";
interface IOption{
    id: string
    name: string
    option: string[]
}
export function SelectOption(options: IOption){
    return(
        <select name={options.name} id={options.id}>
            {
                options.option.map((option)=>(
                    <option value={option}>{option}</option>
                ))
            }
                        
        </select>
    )
}