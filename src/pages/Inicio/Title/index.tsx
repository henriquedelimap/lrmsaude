import styles from './Title.module.scss'
interface Props{
    title?: string
    tag?: string
}
export function Title({title, tag}: Props){
    return(
        <div className={styles.txt}>
                <span className={styles.txt__tag}>{tag}</span>
                <span className={styles.txt__title}>{title}</span>
        </div>
    )

}