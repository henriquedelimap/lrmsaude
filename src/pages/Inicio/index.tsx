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
import uniqid from 'uniqid';

export function Inicio(){
    const [ativaItem, setAtivaItem] = useState('')

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

                <Comparativo 
                    ativaItem={ativaItem} 
                    setAtivaItem={setAtivaItem} 
                    title={'planos de saúde individual ou coletivo por Adesão'} 
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias tempora qui quidem quam repellat ipsum distinctio adipisci architecto perferendis!'}
                    id={uniqid()}
                />
                <Comparativo 
                    ativaItem={ativaItem} 
                    setAtivaItem={setAtivaItem} 
                    title={'planos de saúde empresariais'} 
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias tempora qui quidem quam repellat ipsum distinctio adipisci architecto perferendis!'}
                    id={uniqid()}
                />
                <Comparativo 
                    ativaItem={ativaItem} 
                    setAtivaItem={setAtivaItem} 
                    title={'planos odontológicos'} 
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias tempora qui quidem quam repellat ipsum distinctio adipisci architecto perferendis!'}
                    id={uniqid()}
                />
            </div>
        </section>
        </>
    )

}