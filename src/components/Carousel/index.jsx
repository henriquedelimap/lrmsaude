import infos from '@/data/info.json'
import styles from './Carousel.module.scss'

export function Carousel(){
    return(
        <div className={styles.carousel}>
            {
                infos.map((info)=>(
                    <>
                    <img src={'dist/'+info.img} className={styles.carousel__img} />
                    </>
                ))
            }
        </div>
    )
}