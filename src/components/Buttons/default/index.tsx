import { useNavigate } from 'react-router-dom'
import styles from './Buttons.module.scss'

export function Button(props:{title: string, to: string}){
    const {title, to} = props
    const navigate = useNavigate()
    
    return(
        <button 
            onClick={() => navigate(`/${to}`)}
            className={styles.button}
        >
            {title}
        </button>
    )
}