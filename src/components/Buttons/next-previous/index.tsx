import styles from './NextPrevious.module.scss'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import planos from '@/data/planos.json'

let nav: string

export function Next(props: {next: number}){
    const navigate = useNavigate()
    const next = Number(props.next) + 1
    nav = `/planos/${next}`    
    return(
        <button
        onClick={()=> navigate(`/planos/${next}`)}
        className={classNames({
            [styles.on]: true,
            [styles.off]: next > (planos.length) ? true : false
        })}
        >{`>`}</button>
    )
}
export function Previous(props: {previous: number}){
    const prev = Number(props.previous) - 1
    const navPrev = `/planos/${prev}`    
    const navigate = useNavigate()

    return(
        <button
        onClick={()=> navigate(navPrev)}
        className={classNames({
            [styles.on]: true,
            [styles.off]: prev < 1 ? true : false
        })}
        >{`<`}</button>
    )
}