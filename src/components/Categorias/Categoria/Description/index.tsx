import { ReactElement } from "react";
import { Info } from "types/IPlano";
import styles from "./Description.module.scss"
import { motion } from 'framer-motion'

export function Description(info: Info ){
    let listItens
    return(
    <motion.div  className={styles.description}>
            <motion.div 
                className={styles.description__administradoras}
                drag='x'
                dragConstraints={{right: 0, left: -500}}>

    
                {
                listItens = info.administradora.map((item, index)=>(
                        <motion.div
                        key={index}
                            className={styles.description__administradoras__itens}
                        >{item}</motion.div>
                        ))  
                }
        </motion.div>
        </motion.div >
    )
}