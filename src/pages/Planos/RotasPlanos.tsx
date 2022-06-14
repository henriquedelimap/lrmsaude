import { DefaultPage } from '@/pages/DefaultPage'
import { NotFound } from '@/pages/NotFound'
import { Route, Routes, useParams } from 'react-router-dom'
import planos from '@/data/planos.json'
import {Voltar} from '@/components/Buttons/Voltar'
import { PlanoPage } from '@/pages/Plano'
import { ScrollToTop } from '@/components/Wrapper/ScrollToTop'

export function RotasPlanos() {
    const { id } = useParams()
    const plano = planos.find((plano: {category: {label: string}}) => plano.category.label === id)
    
    if (!plano) {
        return (
            <NotFound />
        )
    }

    const button = {title: 'planos', to: `planos`}
    return (
        <ScrollToTop>
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
        </ScrollToTop>
    )

}


