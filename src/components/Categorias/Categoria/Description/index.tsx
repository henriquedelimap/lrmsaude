import { ReactElement } from "react";
import { Info } from "types/IPlano";
import styles from "./Description.module.scss"

export function Description(info: Info ){
    let listItens;
    return(
        <div className={styles.description}>
            {listItens = info.administradora.map((item)=>(
                <span>{item}</span>
            )
            )}
        </div>
    )
}