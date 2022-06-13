import styles from './Itens.module.scss'
import planos from '@/data/planos.json'
import { Key, useState } from 'react'
import { Item } from './item'
import { Plano } from 'types/IPlano'
import { Imagens } from '@/assets/Imagens.tsx'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'



interface Props {
  ordenador: string
}

export function Itens(props: Props) {
  const img = [...Imagens]
  const navigate = useNavigate()

  // const [lista, setLista] = useState(planos)

  return (
    <div className={styles.itens}>
      {
        planos.map((plano: JSX.IntrinsicAttributes & Plano) => (
          <div
            className={styles.itens__plano} 
            onClick={()=>navigate(`${plano.category.id}`)}>
            {img.map((foto) => (
              foto.label === plano.category.label ? <img src={foto.img} /> : ''
            ))}
            <div className={styles.itens__plano__text}>
              <span>{plano.category.operadora}</span>
              <button className={styles.itens__plano__text__button}>
                        <span>Conheça mais</span>
                        <HiOutlineArrowRight className={styles.itens__plano__text__button__icone} />

              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}