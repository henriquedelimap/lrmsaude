import { Inicio } from '@/pages/Inicio'
import { NotFound } from '@/pages/NotFound'
import { Planos } from '@/pages/Planos'
import { Sobre } from '@/pages/Sobre'
import { DefaultPage } from '@/pages/DefaultPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Menu } from '@/components/Menu'
import { Footer } from '@/components/Footer'
import './index.css'
import { PlanoPage } from '@/pages/Plano'
import { Categoria } from '@/components/Categorias/Categoria'

export function AppRouter(){
    return(
        <main className='container'>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<DefaultPage /> }>
                        <Route path='/' element={<Inicio />}>
                            <Route path='/:id/*' element={<Categoria />} />
                        </Route>
                        <Route path="planos" element={<Planos />} />
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                    <Route path='planos/:id/*' element={<PlanoPage />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    )
}