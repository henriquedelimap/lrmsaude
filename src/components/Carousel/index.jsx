import styles from './Carousel.module.scss'
import {Imagens} from '@/assets/Imagens.tsx'
import {Link} from 'react-router-dom'
export function Carousel(){
    
    return(
        <div className={styles.carousel__container}>
            <div className={styles.carousel}>
                <>
                {
                    Imagens.map((foto)=>(
                        <Link to={`planos/${foto.label}`}>
                            <span key={foto.id}>
                            <img src={foto.img} className={styles.carousel__img} />
                            </span>
                        </Link>
                    ))
                }
                </>
            </div>
            
        </div>
    )
}