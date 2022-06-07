import styles from './Carousel.module.scss'
import {Imagens} from '@/assets/Imagens.tsx'
export function Carousel(){
    const img = [...Imagens, ...Imagens]
    return(
        <div className={styles.carousel__container}>
            <div className={styles.carousel}>
                <>
                {
                    img.map((foto)=>(
                        <>
                        <img src={foto.img} className={styles.carousel__img} />
                        </>
                    ))
                }
                </>
            </div>
            
        </div>
    )
}