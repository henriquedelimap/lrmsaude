import { Categorias } from '@/components/Categorias'
import classNames from 'classnames'
import { useState } from 'react'
import styles from '../Inicio.module.scss'
import uniqid from 'uniqid'
interface Prop {
    ativaItem: string
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
                        <div className={styles.home__lista__itens} key={item.id}>
                            <div className={styles.home__lista__itens__item}>
                                <div
                                    className={styles.home__lista__itens__item__title}
                                    onClick={() => {
                                        setAtivaItem(item.id)
                                        setID(item.id)
                                    }}
                                >
                                    <h4 className={styles.home__lista__itens__item__title__text}>{item.title}</h4>

                                    <span className={styles.home__lista__itens__item__title__icone}>
                                        <span className={styles.home__lista__itens__item__title__icone__rect} />
                                        <span className={styles.home__lista__itens__item__title__icone__rect} />
                                    </span>
                                </div>
                                <p className={classNames({
                                    [styles.home__lista__itens__item__description]: true,
                                    [styles[`home__lista__itens__item__description--ativa`]]: ativaItem === ID,
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