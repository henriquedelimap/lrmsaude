import { Header } from "@/components/Header";
import { Outlet, useParams } from "react-router-dom";
import styles from './DefaultPage.module.scss'

export function DefaultPage(){

    return(
        <>
            <Header />
            <div className={styles.defaultPage}>
                <Outlet />
            </div>
        </>
    )
}