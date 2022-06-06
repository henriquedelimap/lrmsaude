import { useNavigate } from 'react-router-dom'
import styles from './Logo.module.scss'

export function Logo(){
    const navigate = useNavigate()
    return(
        <span 
            onClick={()=>navigate(`/`)}
            className={styles.logo}
        >
            <h1>LRM <span>saúde</span></h1>
        </span>
    )
    
}