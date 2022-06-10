import classNames from 'classnames'
import { useState } from 'react'
import { Menu } from '..'
import styles from './Responsivo.module.scss'

export function MenuResponsivo(){
    const [isExtended, setIsExtended] = useState(true)
    return(
        <>
        <div 
            className={classNames({
                [styles.menuResponvivo]: true,
                [styles.off]: isExtended == false
            })}
            onClick={()=>setIsExtended(!isExtended)}
        >
            <div>
                
            </div>
            <div className={styles.icone}>
                <span className={styles.icone__rect} />
                <span className={styles.icone__rect} />
            </div>
        </div>
        </>
    )
}