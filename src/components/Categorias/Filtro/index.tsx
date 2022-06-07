import styles from './Filtro.module.scss'
import infos from '@/data/info.json'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Info } from 'types/IPlano'
import { motion } from 'framer-motion'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import React from 'react'

export function Filtro(){    
    const [width, setWidth] = useState(0)
    const carousel: React.MutableRefObject<undefined> = useRef()
    useEffect(()=>{
        // setWidth( carousel.current.scrollWidth - (  carousel.current.offsetLeft + carousel.current.offsetWidth )
    }, [])

    const navigate = useNavigate()
    const apresenta: Info[] = []
    return(
        <motion.div  className={styles.filtros}>
            <motion.div 
                        className={styles.filtros__slider}
                        drag='x'
                        dragConstraints={{right: 0, left: -1250}}>

            {
                infos.map((info: Info)=>(
                    
                    <motion.div 
                    
                    className={styles.filtros__filtro}
                    onClick={()=>navigate(`/${info.id}`)}>

                        {info.operadora}
                    </motion.div >
            ))
        }
        </motion.div>
        </motion.div >
    )
}
