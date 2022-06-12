import styles from './Inicio.module.scss'
import { Header } from "@/components/Header";
import { Recomendados } from './Recomendado'
import { Operadoras } from './Operadoras';
import { Comparativo } from './Comparativo';
import { MdHealing } from 'react-icons/md';
import { GiHealthPotion } from 'react-icons/gi';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

import { Voltar } from '@/components/Buttons/default';
import { useState } from 'react';
import classNames from 'classnames';

export function Inicio(){
    const [ativaItem, setAtivaItem] = useState(false)

    const text = {title: 'hello', to: '/'}
    return(
        <>
        <Header />
        <section className={styles.home}>
            {/* <Recomendados /> */}

            <div className={styles.home__txt}>
                <span className={styles.home__txt__subtitle}>pensou em planos, pensou em LRM saúde</span>
                <span className={styles.home__txt__title}>contamos com planos de saúde para pequenas ou grandes necessidades</span>
            </div>

            <div className={styles.home__cards}>
                <div className={styles.home__cards__card}>
                    <GiHealthPotion className={styles.home__cards__card__icone} />
                    <h3 className={styles.home__cards__card__title}>planos individuais</h3>
                    <p className={styles.home__cards__card__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias officia assumenda autem magni eos saepe iusto temporibus, adipisci nihil.</p>
                    <button className={styles.home__cards__card__button}>
                        <HiOutlineArrowCircleRight className={styles.home__cards__card__button__icone} />
                        <span>Conheça mais</span>
                    </button>
                </div>
                <div className={styles.home__cards__card}>
                    <MdHealing className={styles.home__cards__card__icone} />
                    <h3 className={styles.home__cards__card__title}>planos empresariais</h3>
                    <p className={styles.home__cards__card__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias officia assumenda autem magni eos saepe iusto temporibus, adipisci nihil.</p>
                    <button className={styles.home__cards__card__button}>
                        <HiOutlineArrowCircleRight className={styles.home__cards__card__button__icone} />
                        <span>Conheça mais</span>
                    </button>
                </div>
            </div>
            <Operadoras />

            
            <div className={styles.home__lista}>
                <div className={styles.home__txt}>
                    <span className={styles.home__txt__subtitle}>compare e conheça</span>
                    <span className={styles.home__txt__title}>a solução perfeita para sua saúde</span>
                </div>

                <div className={styles.home__lista__itens}>
                    <div className={styles.home__lista__itens__item}>
                        <div className={styles.home__lista__itens__item__title}>
                            <h4 className={styles.home__lista__itens__item__title__text}>plano de saúde individual ou coletivo por Adesão</h4>
                            <span 
                                className={styles.home__lista__itens__item__title__icone}
                                onClick={()=>setAtivaItem(!ativaItem)}
                            >
                                <span className={styles.home__lista__itens__item__title__icone__rect} />
                                <span className={styles.home__lista__itens__item__title__icone__rect} />
                            </span>
                        </div>
                        <p className={classNames({
                            [styles.home__lista__itens__item__description]: true,
                            [styles[`home__lista__itens__item__description--ativa`]]: ativaItem,
                        })}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias tempora qui quidem quam repellat ipsum distinctio adipisci architecto perferendis!</p>
                    </div>
                </div>
            </div>
            {/* <Comparativo /> */}
        </section>
        </>
    )

}