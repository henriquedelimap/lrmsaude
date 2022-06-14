import { Inicio } from '@/pages/Inicio'
import { NotFound } from '@/pages/NotFound'
import { Planos } from '@/pages/Planos'
import { Sobre } from '@/pages/Sobre'
import { DefaultPage } from '@/pages/DefaultPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Menu } from '@/components/Menu'
import { Footer } from '@/components/Footer'
import './index.css'
import { RotasPlanos } from '@/pages/Planos/RotasPlanos.tsx'
import { Categoria } from '@/components/Categorias/Categoria'
import { ScrollToTop } from '@/components/Wrapper/ScrollToTop'

export function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <ScrollToTop>


          <Routes>
            <Route path='/' element={<DefaultPage />}>
              <Route path='/' element={<Inicio />}>
                <Route path='/:id/*' element={<Categoria />} />
              </Route>
              <Route path="planos" element={<Planos />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path='*' element={<NotFound />} />
            <Route path='planos/:id/*' element={<RotasPlanos />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </main>
  )
}