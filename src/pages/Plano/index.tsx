import { WhatsApp } from "@/components/Buttons/whatsapp";
import { Imagens } from "@/assets/Imagens.tsx";
import { IImagem, Plano } from "types/IPlano";
import styles from './Plano.module.scss'
import { Item } from "@/components/Itens/item";

export function PlanoPage(plano: Plano) {
  let planoID = {...plano}
  return (
    <div className={styles.plano}>
      <Item {...plano} />
    </div>
  )
}