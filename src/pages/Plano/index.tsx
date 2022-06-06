import { DefaultPage } from '@/pages/DefaultPage'
import { NotFound } from '@/pages/NotFound'
import { Route, Routes, useParams } from 'react-router-dom'
import styles from './Plano.module.scss'
import planos from '@/data/planos.json'
import {Button} from '@/components/buttons/default'
import { Previous } from '@/components/buttons/next-previous'
import { Next } from '@/components/buttons/next-previous'
import { Item } from '@/components/itens/item'
export function PlanoPage() {
    const { id } = useParams()
    const next = Number(id)
    const previous = Number(id)
    const plano = planos.find((plano: {id: number}) => plano.id === Number(id))
    if (!plano) {
        return (
            <NotFound />
        )
    }
    const button = {title: '< planos', to: `planos`}
    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <>
                        <Button {...button} />
                        <Item {...plano} />
                        <Previous previous={previous} />
                        <Next next={next} />
                    </>
                } />
            </Route>
        </Routes>
    )

}