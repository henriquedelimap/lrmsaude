import infos from '@/data/info.json'
import styles from './Carousel.module.scss'
import photo from '@/assets/foto/bradescoSaude.png'

export function Carousel(){
    return(
        <div className={styles.carousel}>
            {
                infos.map((info)=>(
                    <>
                    <img src={info.img} className={styles.carousel__img} />
                    </>
                ))
            }
        </div>
    )
}