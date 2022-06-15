import classNames from "classnames";
import { SaibaMais } from "@/components/Buttons/saibaMais";
import uniqid from "uniqid";
import styles from '../Item.module.scss'
import { Plano } from "types/IPlano";
import { Dispatch, SetStateAction, useState } from "react";
interface Prop {
  plano: Plano
  idade: string[]
  abrangencia: string
  coparticipacao: string
  acomodacao: string
  titulo: string
  img: any[]
  id: string,
  cor: string
  flipCard: SetStateAction<string> | undefined
  setFlipCard: Dispatch<SetStateAction<string>>
}
export function ItemContent({
  plano,
  idade,
  abrangencia,
  coparticipacao,
  acomodacao,
  titulo,
  img,
  id,
  cor,
  flipCard,
  setFlipCard }: Prop) {
  const [ID, setID] = useState('')


  return (
    <div
      className={styles.item}
      key={id}
    >
      <div className={styles.item__flip}>
        <div
          className={styles.item__flip__inner}

        >
          <table
            style={{ backgroundColor: `#${cor}` }}
            className={classNames({
              [styles.item__flip__inner__front]: true,
              [styles.ativa]: flipCard === ID

            })}
          >
            <tr>
              {img.map((foto) => (
                foto.label === plano.category.label ? <img src={foto.img} /> : ''
              ))}
            </tr>
            <tr>
              <th></th>
              <td
                style={{backgroundColor: `#${cor}`}}
              >{plano.category.operadora}</td>
            </tr>
            <tr>
              <th>ramo</th>
              <td>{plano.category.ramo}</td>

            </tr>
            <tr>
              <th>abrangência</th>
              <td>{abrangencia}</td>

            </tr>
            <tr>
              <th>idade</th>
              <td>{idade[0]} - {idade[1]}</td>
            </tr>
            <tr>
              <th>coparticipacao</th>
              <td>{coparticipacao}</td>
            </tr>
            <tr>
              <th>acomodação</th>
              <td>{acomodacao}</td>
            </tr>
            <tr className={styles.item__flip__inner__front__saibaMais}>
              <th></th>
              <td

                onClick={() => {
                  setFlipCard(id)
                  setID(id)

                }}>
                <SaibaMais />
              </td>
            </tr>
          </table>
          <div
            className={classNames({
              [styles.item__flip__inner__back]: true,
              [styles.ativa__back]: flipCard === ID
            })}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

    </div>
  )
}