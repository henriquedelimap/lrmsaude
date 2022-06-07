import styles from './Carousel.module.scss'
import {Imagens} from '@/assets/Imagens.tsx'
export function Carousel(){
    const img = [...Imagens]
    return(
        <div className={styles.carousel__container}>
            <div className={styles.carousel}>
                <>
                {
                    img.map((foto)=>(
                        <span key={foto.id}>
                        <img src={foto.img} className={styles.carousel__img} />
                        </span>
                    ))
                }
                </>
            </div>
            
        </div>
    )
}