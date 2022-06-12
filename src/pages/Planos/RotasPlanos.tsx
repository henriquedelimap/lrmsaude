import { DefaultPage } from '@/pages/DefaultPage'
import { NotFound } from '@/pages/NotFound'
import { Route, Routes, useParams } from 'react-router-dom'
import planos from '@/data/planos.json'
import {Voltar} from '@/components/Buttons/Voltar'
import { Previous } from '@/components/Buttons/next-previous'
import { Next } from '@/components/Buttons/next-previous'
import { PlanoPage } from '@/pages/Plano'

export function RotasPlanos() {
    const { id } = useParams()
    const next = Number(id)
    const previous = Number(id)
    const plano = planos.find((plano: {id: number}) => plano.id === Number(id))
    if (!plano) {
        return (
            <NotFound />
        )
    }
    const button = {title: 'planos', to: `planos`}
    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <>
                        <Voltar {...button} />
                        <PlanoPage {...plano} />
                    </>
                } />
            </Route>
        </Routes>
    )

}