import styles from './Carousel.module.scss'
import foto1 from '@/assets/foto/bradescoSaude.png'
import foto2 from '@/assets/foto/notredame.png'

export function Carousel(){
    const fotos = [foto1, foto2]
    return(
        <div className={styles.carousel}>
            {
                fotos.map((foto)=>(
                    <>
                    <img src={foto} className={styles.carousel__img} />
                    </>
                ))
            }
        </div>
    )
}