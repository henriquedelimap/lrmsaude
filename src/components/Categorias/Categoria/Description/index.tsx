import { ReactElement } from "react";
import { Info } from "types/IPlano";
import styles from "./Description.module.scss"
import { motion } from 'framer-motion'

export function Description(info: Info ){
    let listItens;
    return(
        // <div className={styles.description}>
        //     <div className={styles.description__administradoras}>
        //     {
        //         listItens = info.administradora.map((item)=>(
        //                 <span>{item}</span>
        //                 ))  
        //             }
        //     </div> 
        // </div>


    <motion.div  className={styles.description}>
            <motion.div 
                className={styles.description__administradoras}
                drag='x'
                dragConstraints={{right: 0, left: -500}}>

    
                {
                listItens = info.administradora.map((item)=>(
                        <motion.div className={styles.description__administradoras__itens}>{item}</motion.div>
                        ))  
                }
        </motion.div>
        </motion.div >
    )
}