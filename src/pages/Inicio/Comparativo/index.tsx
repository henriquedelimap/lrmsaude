import { Categorias } from '@/components/Categorias'
import classNames from 'classnames'
import { SetStateAction, useState } from 'react'
import styles from './Comparativo.module.scss'
import uniqid from 'uniqid'
interface Prop {
    ativaItem: SetStateAction<string> | undefined
    setAtivaItem: React.Dispatch<React.SetStateAction<string>>
    title: string
    description: string
    id: string
}

export function Comparativo(prop: Prop) {
    const [ID, setID] = useState('')
    const { setAtivaItem, ativaItem, title, description, id} = prop
    const itens = [{ title: title, description: description, id: id}]
    return (
        <>
            {
                itens.map((item) => {
                    
                    return (
                        <div className={styles.lista__itens} key={item.id}>
                            <div className={styles.lista__itens__item}>
                                <div
                                    className={styles.lista__itens__item__title}
                                    onClick={() => {
                                        setAtivaItem(item.id)
                                        setID(item.id)
                                    }}
                                >
                                    <h4 className={styles.lista__itens__item__title__text}>{item.title}</h4>

                                    <span className={styles.lista__itens__item__title__icone}>
                                        <span className={styles.lista__itens__item__title__icone__rect} />
                                        <span className={styles.lista__itens__item__title__icone__rect} />
                                    </span>
                                </div>
                                <p className={classNames({
                                    [styles.lista__itens__item__description]: true,
                                    [styles[`lista__itens__item__description--ativa`]]: ativaItem === ID,
                                })}
                                >{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}