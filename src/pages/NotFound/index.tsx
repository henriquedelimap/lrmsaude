import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.scss'

export function NotFound(){
    const navigate = useNavigate()
    return(
        <div className={styles.NotFound}>
            <button onClick={()=>navigate(-1)}>
                {`< voltar`}
            </button>
            <h1>not found</h1>
        </div>
    )

}