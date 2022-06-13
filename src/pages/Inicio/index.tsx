import styles from './Inicio.module.scss'
import { Header } from "@/components/Header";
import { Operadoras } from './Operadoras';
import { Comparativo } from './Comparativo';
import { MdHealing } from 'react-icons/md';
import { GiHealthPotion } from 'react-icons/gi';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { SetStateAction, useState } from 'react';
import uniqid from 'uniqid';
import { Title } from './Title';
import { Link } from 'react-router-dom';

export function Inicio(){
    const [ativaItem, setAtivaItem] = useState< SetStateAction<string> | SetStateAction<string> | undefined>()
    return(
        <>
            <Header />
            <section className={styles.home}>
                <Title 
                    tag={'pensou em planos, pensou em LRM saúde'}
                    title={'contamos com planos de saúde para pequenas ou grandes necessidades'}
                />

                <div className={styles.home__cards}>
                    <div className={styles.home__cards__card}>
                        <GiHealthPotion className={styles.home__cards__card__icone} />
                        <h3 className={styles.home__cards__card__title}>planos individuais</h3>
                        <p className={styles.home__cards__card__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias officia assumenda autem magni eos saepe iusto temporibus, adipisci nihil.</p>
                        <Link className={styles.home__cards__card__button}
                        to={'/planos'}
                        >
                            <HiOutlineArrowRight className={styles.home__cards__card__button__icone} />
                            <span>Conheça mais</span>
                        </Link>
                    </div>
                    <div className={styles.home__cards__card}>
                        <MdHealing className={styles.home__cards__card__icone} />
                        <h3 className={styles.home__cards__card__title} >planos empresariais</h3>
                        <p className={styles.home__cards__card__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias officia assumenda autem magni eos saepe iusto temporibus, adipisci nihil.</p>
                        <Link className={styles.home__cards__card__button}
                        to={'/planos'}
                        >
                            <HiOutlineArrowRight className={styles.home__cards__card__button__icone} />
                            <span>Conheça mais</span>
                        </Link>
                    </div>
                </div>

                <Operadoras />
                
                <div className={styles.home__lista}>
                    <Title 
                        tag={'compare e conheça'}
                        title={'a solução perfeita para sua saúde'}
                    />

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

                <div className={styles.home__contato}>
                    <RiAccountPinCircleLine className={styles.home__contato__icone} />
                    <div className={styles.home__contato__dados}>
                        <h3 className={styles.home__contato__dados__name}>Luciano Mizael</h3>
                        <span className={styles.home__contato__dados__telefone}>+55 (34) 99277-9461</span>
                        <span className={styles.home__contato__dados__email}>lucianomizael@yahoo.com.br</span>
                    </div>
                </div>
            </section>
        </>
    )

}