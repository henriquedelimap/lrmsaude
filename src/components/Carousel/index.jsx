import styles from './Carousel.module.scss'
import foto1 from '@/assets/foto/bradescoSaude.png'
import foto2 from '@/assets/foto/notredame.png'
import foto3 from '@/assets/foto/premiumsaude.png'
import foto4 from '@/assets/foto/rnsaude.png'
import foto5 from '@/assets/foto/seguros unimed.png'
import foto6 from '@/assets/foto/sf.png'
import foto7 from '@/assets/foto/sulamerica.png'
import foto8 from '@/assets/foto/unimed.png'
import foto9 from '@/assets/foto/unimedUberlandia.png'
import foto10 from '@/assets/foto/usi.png'
import foto11 from '@/assets/foto/you.png'

export function Carousel(){
    const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11]
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